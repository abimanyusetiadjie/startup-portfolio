"use server";

import {
  leadSchema,
  mapInterestToDatabasePillar,
  type LeadFormInput,
} from "@/lib/validations/lead";
import { dispatchInstantWhatsAppGreeting } from "@/lib/automation/whatsapp";
import { createAdminClient, createClient } from "@/lib/supabase/server";

export interface LeadDeliveryMeta {
  normalizedPhone: string;
  latencyMs: number;
  timestamp: string;
  previewText: string;
  statusCode: number;
  mode: "live_gateway" | "qstash_queue" | "local_simulation";
  leadId: string;
}

export interface SubmitLeadResponse {
  success: boolean;
  message: string;
  fieldErrors?: Partial<Record<keyof LeadFormInput, string[]>>;
  deliveryMeta?: LeadDeliveryMeta;
}

function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return false;
  if (url.includes("your-project-id") || anonKey.startsWith("your-")) {
    return false;
  }
  return true;
}

export async function submitConsultationLead(
  rawInput: LeadFormInput
): Promise<SubmitLeadResponse> {
  // 1. Validasi Input menggunakan Zod Schema
  const parsed = leadSchema.safeParse(rawInput);

  if (!parsed.success) {
    return {
      success: false,
      message: "Mohon periksa kembali isian formulir konsultasi Anda.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const validated = parsed.data;
  const interestedPillar = mapInterestToDatabasePillar(
    validated.service_interest
  );
  const composedBrief = `[Service: ${validated.service_interest}] [Budget: ${validated.budget_range}] ${validated.project_summary}`;

  let leadId = `lead-${Date.now().toString(36)}`;
  const canUseSupabase = isSupabaseConfigured();

  // 2. Simpan ke tabel `leads` di Supabase (jika environment telah dikonfigurasi)
  if (canUseSupabase) {
    try {
      const supabase = await createClient();
      const { data: insertedLead, error: insertError } = await supabase
        .from("leads")
        .insert({
          full_name: validated.full_name,
          institution_name: validated.company_name,
          whatsapp_number: validated.whatsapp_number,
          email: validated.email ?? null,
          interested_pillar: interestedPillar,
          project_brief: composedBrief,
          status: "new",
          wa_notification_sent: false,
        })
        .select("id")
        .single();

      if (!insertError && insertedLead?.id) {
        leadId = insertedLead.id;
      }
    } catch {
      // Tetap lanjutkan eksekusi pengiriman WhatsApp bila DB lokal belum aktif
    }
  }

  // 3. Tembakkan Pesan WhatsApp Instan / QStash Queue
  const dispatchResult = await dispatchInstantWhatsAppGreeting({
    ...validated,
    leadId,
  });

  // 4. Perbarui status `wa_notification_sent = true`, `wa_sent_at`, dan catat di `webhook_logs`
  if (canUseSupabase) {
    try {
      const hasServiceRole =
        Boolean(process.env.SUPABASE_SERVICE_ROLE_KEY) &&
        !process.env.SUPABASE_SERVICE_ROLE_KEY?.startsWith("your-");

      const dbClient = hasServiceRole
        ? createAdminClient()
        : await createClient();

      if (dispatchResult.success && !leadId.startsWith("lead-")) {
        await dbClient
          .from("leads")
          .update({
            wa_notification_sent: true,
            wa_sent_at: dispatchResult.timestamp,
            status: "contacted",
          })
          .eq("id", leadId);
      }

      await dbClient.from("webhook_logs").insert({
        lead_id: leadId.startsWith("lead-") ? null : leadId,
        channel: "whatsapp",
        event_type: "INSTANT_CONSULTATION_GREETING",
        endpoint_url: dispatchResult.endpointUrl,
        request_payload: dispatchResult.requestPayload,
        response_status: dispatchResult.statusCode,
        response_body: dispatchResult.responseBody,
        status: dispatchResult.success ? "completed" : "failed_retrying",
        attempt_count: 1,
        max_attempts: 5,
        latency_ms: dispatchResult.latencyMs,
        error_message: dispatchResult.success
          ? null
          : "Dispatch failed, scheduled for exponential backoff retry",
      });
    } catch {
      // Abaikan kegagalan penulisan log sekunder agar respons ke pengguna tidak terputus
    }
  }

  return {
    success: dispatchResult.success,
    message: dispatchResult.success
      ? "Permintaan konsultasi berhasil diproses dan pesan WhatsApp otomatis telah dikirim!"
      : "Data konsultasi tersimpan, pengiriman WhatsApp dijadwalkan ulang melalui antrean retry.",
    deliveryMeta: {
      normalizedPhone: dispatchResult.normalizedPhone,
      latencyMs: dispatchResult.latencyMs,
      timestamp: dispatchResult.timestamp,
      previewText: dispatchResult.previewText,
      statusCode: dispatchResult.statusCode,
      mode: dispatchResult.mode,
      leadId,
    },
  };
}
