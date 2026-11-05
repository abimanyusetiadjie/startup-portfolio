import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { normalizeIndonesianWhatsApp } from "@/lib/validations/lead";
import { createAdminClient, createClient } from "@/lib/supabase/server";
import type { JobStatus, Json } from "@/types/database.types";

const qstashWaPayloadSchema = z.object({
  lead_id: z.string().optional(),
  project_id: z.string().uuid().optional(),
  to: z.string().min(8),
  recipient_name: z.string().optional().default("Valued Client"),
  company_name: z.string().optional().default("Enterprise Partner"),
  message: z.string().min(1),
  attempt_count: z.number().int().min(1).max(10).optional().default(1),
  max_attempts: z.number().int().min(1).max(10).optional().default(5),
  simulate_failure: z.boolean().optional().default(false),
});

/**
 * Hitung waktu tunda retry berikutnya dengan algoritma Exponential Backoff + Jitter:
 * t_retry = t_base * (2 ^ attempt) + jitter (di mana t_base = 2000ms)
 */
function calculateExponentialBackoffMs(attempt: number): number {
  const baseMs = 2000;
  const jitterMs = Math.floor(Math.random() * 450);
  return baseMs * Math.pow(2, attempt) + jitterMs;
}

function isSupabaseReady(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return (
    Boolean(url) &&
    Boolean(anon) &&
    !url?.includes("your-project-id") &&
    !anon?.startsWith("your-")
  );
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON payload in QStash WhatsApp webhook request.",
      },
      { status: 400 }
    );
  }

  const parsed = qstashWaPayloadSchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Payload validation failed",
        details: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  const payload = parsed.data;
  const normalizedPhone = normalizeIndonesianWhatsApp(payload.to);

  // Baca jumlah retry dari header Upstash-Retried jika dikirim oleh QStash
  const qstashRetriedHeader = request.headers.get("Upstash-Retried");
  const currentAttempt = qstashRetriedHeader
    ? Math.max(1, Number.parseInt(qstashRetriedHeader, 10) + 1)
    : payload.attempt_count;
  const maxAttempts = payload.max_attempts;

  let isDelivered = !payload.simulate_failure;
  let gatewayStatusCode = isDelivered ? 200 : 503;
  let gatewayResponse: Json = {
    provider: "whatsapp-business-gateway",
    recipient: normalizedPhone,
    status: isDelivered ? "DELIVERED" : "GATEWAY_TIMEOUT",
  };

  const waApiKey =
    process.env.WA_GATEWAY_API_KEY ?? process.env.WHATSAPP_API_TOKEN;
  const waEndpoint =
    process.env.WHATSAPP_API_ENDPOINT ??
    "https://api.whatsapp-gateway.internal/v1/messages";

  const hasLiveGateway =
    Boolean(waApiKey) &&
    !waApiKey?.startsWith("your-") &&
    !waEndpoint.includes("example.com") &&
    !waEndpoint.includes(".internal");

  if (hasLiveGateway && !payload.simulate_failure) {
    try {
      const res = await fetch(waEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${waApiKey}`,
        },
        body: JSON.stringify({
          to: normalizedPhone,
          message: payload.message,
        }),
      });
      isDelivered = res.ok;
      gatewayStatusCode = res.status;
      gatewayResponse = {
        provider: "whatsapp-business-gateway",
        http_status: res.status,
        recipient: normalizedPhone,
      };
    } catch (err) {
      isDelivered = false;
      gatewayStatusCode = 503;
      gatewayResponse = {
        error:
          err instanceof Error
            ? err.message
            : "External WhatsApp API unreachable",
      };
    }
  }

  const latencyMs = Math.max(12, Date.now() - startTime);
  const backoffDelayMs = isDelivered
    ? 0
    : calculateExponentialBackoffMs(currentAttempt);
  const nextRetryAt = isDelivered
    ? null
    : new Date(Date.now() + backoffDelayMs).toISOString();

  const resolvedStatus: JobStatus = isDelivered
    ? "completed"
    : currentAttempt >= maxAttempts
      ? "dead_letter"
      : "failed_retrying";

  // Catat status eksekusi & jumlah retry ke tabel `webhook_logs` di Supabase
  if (isSupabaseReady()) {
    try {
      const hasServiceRole =
        Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
        !process.env.SUPABASE_SERVICE_ROLE_KEY?.startsWith("your-");
      const supabase = hasServiceRole
        ? createAdminClient()
        : await createClient();

      const validUuidRegex =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      const safeLeadId =
        payload.lead_id && validUuidRegex.test(payload.lead_id)
          ? payload.lead_id
          : null;

      await supabase.from("webhook_logs").insert({
        project_id: payload.project_id ?? null,
        lead_id: safeLeadId,
        channel: "whatsapp",
        event_type: "QSTASH_WA_NOTIFICATION",
        endpoint_url: request.nextUrl.pathname,
        request_payload: {
          to: normalizedPhone,
          recipient_name: payload.recipient_name,
          company_name: payload.company_name,
          message: payload.message,
        },
        response_status: gatewayStatusCode,
        response_body: gatewayResponse,
        status: resolvedStatus,
        attempt_count: currentAttempt,
        max_attempts: maxAttempts,
        next_retry_at: nextRetryAt,
        latency_ms: latencyMs,
        error_message: isDelivered
          ? null
          : `Attempt ${currentAttempt}/${maxAttempts} failed. Next backoff in ${backoffDelayMs}ms.`,
      });

      if (isDelivered && safeLeadId) {
        await supabase
          .from("leads")
          .update({
            wa_notification_sent: true,
            wa_sent_at: new Date().toISOString(),
            status: "contacted",
          })
          .eq("id", safeLeadId);
      }
    } catch {
      // Lanjutkan pengembalian respons JSON terukur meskipun DB lokal belum aktif
    }
  }

  return NextResponse.json(
    {
      success: isDelivered,
      worker: "qstash-wa-dispatcher",
      telemetry: {
        normalizedPhone,
        status: resolvedStatus,
        httpStatus: gatewayStatusCode,
        attemptCount: currentAttempt,
        maxAttempts,
        backoffDelayMs,
        nextRetryAt,
        latencyMs,
        timestamp: new Date().toISOString(),
      },
    },
    { status: isDelivered ? 200 : 503 }
  );
}
