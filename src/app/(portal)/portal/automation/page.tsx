"use client";

import { useCallback, useState } from "react";
import {
  Badge,
  Banner,
  BlockStack,
  Box,
  Button,
  Card,
  Divider,
  IndexTable,
  InlineGrid,
  InlineStack,
  Layout,
  Page,
  ProgressBar,
  Text,
} from "@shopify/polaris";
import type { JobStatus } from "@/types/database.types";

interface ReportJobRow {
  id: string;
  academicTerm: string;
  studentIdentifier: string;
  studentName: string;
  status: JobStatus;
  retryCount: number;
  maxRetries: number;
  executionLatencyMs: number | null;
  pdfStoragePath: string | null;
  qstashMessageId: string;
}

interface WebhookLogRow {
  id: string;
  channel: string;
  eventType: string;
  endpointUrl: string;
  responseStatus: number;
  status: JobStatus;
  attemptCount: number;
  maxAttempts: number;
  latencyMs: number;
  createdAt: string;
}

const INITIAL_REPORT_JOBS: ReportJobRow[] = [
  {
    id: "job-rapor-901",
    academicTerm: "Batch Q4-2026",
    studentIdentifier: "PO-88412-JKT",
    studentName: "PT Sentosa Manufaktur Global (Faktur #88412)",
    status: "completed",
    retryCount: 0,
    maxRetries: 5,
    executionLatencyMs: 410,
    pdfStoragePath: "document-ai/invoices/PO-88412-JKT.pdf",
    qstashMessageId: "msg_qstash_88219a",
  },
  {
    id: "job-rapor-902",
    academicTerm: "Batch Q4-2026",
    studentIdentifier: "PO-88413-SBY",
    studentName: "PT Logistik Nusantara Distribusi (Faktur #88413)",
    status: "completed",
    retryCount: 0,
    maxRetries: 5,
    executionLatencyMs: 385,
    pdfStoragePath: "document-ai/invoices/PO-88413-SBY.pdf",
    qstashMessageId: "msg_qstash_88219b",
  },
  {
    id: "job-rapor-903",
    academicTerm: "Batch Q4-2026",
    studentIdentifier: "PO-88414-BDG",
    studentName: "Medika AI Diagnostik Hub (Faktur #88414)",
    status: "completed",
    retryCount: 1,
    maxRetries: 5,
    executionLatencyMs: 520,
    pdfStoragePath: "document-ai/invoices/PO-88414-BDG.pdf",
    qstashMessageId: "msg_qstash_88219c",
  },
];

const INITIAL_WEBHOOK_LOGS: WebhookLogRow[] = [
  {
    id: "wh-log-101",
    channel: "qstash_pdf",
    eventType: "DOCUMENT_AI_INVOICE_EXTRACTION",
    endpointUrl: "/api/webhooks/qstash-pdf",
    responseStatus: 200,
    status: "completed",
    attemptCount: 1,
    maxAttempts: 5,
    latencyMs: 398,
    createdAt: "2026-11-05 10:42:11 WIB",
  },
  {
    id: "wh-log-102",
    channel: "whatsapp",
    eventType: "INSTANT_CONSULTATION_GREETING",
    endpointUrl: "/api/webhooks/whatsapp",
    responseStatus: 200,
    status: "completed",
    attemptCount: 1,
    maxAttempts: 5,
    latencyMs: 176,
    createdAt: "2026-11-05 10:45:04 WIB",
  },
  {
    id: "wh-log-103",
    channel: "omnichannel_sync",
    eventType: "ATOMIC_STOCK_RESERVATION",
    endpointUrl: "https://api.marketplace-hub.internal/v2/stock",
    responseStatus: 200,
    status: "completed",
    attemptCount: 2,
    maxAttempts: 5,
    latencyMs: 112,
    createdAt: "2026-11-05 10:48:29 WIB",
  },
];

export default function PortalAutomationPage() {
  const [reportJobs, setReportJobs] =
    useState<ReportJobRow[]>(INITIAL_REPORT_JOBS);
  const [webhookLogs, setWebhookLogs] =
    useState<WebhookLogRow[]>(INITIAL_WEBHOOK_LOGS);
  const [isBatchRunning, setIsBatchRunning] = useState(false);
  const [batchProgress, setBatchProgress] = useState(100);

  const handleTriggerSamplePdfBatchJob = useCallback(async () => {
    if (isBatchRunning) return;
    setIsBatchRunning(true);
    setBatchProgress(25);

    const batchId = Math.floor(100 + Math.random() * 899);
    const newJobId = `job-rapor-${batchId}`;
    const newNisn = `NISN-008412${batchId}`;

    const queuedJob: ReportJobRow = {
      id: newJobId,
      academicTerm: "Batch Q4-2026",
      studentIdentifier: `PO-${batchId}-JKT`,
      studentName: `Faktur Vendor Batch Simulasi #${batchId} (PT Logistik)`,
      status: "processing",
      retryCount: 0,
      maxRetries: 5,
      executionLatencyMs: null,
      pdfStoragePath: null,
      qstashMessageId: `msg_qstash_${Date.now().toString(36)}`,
    };

    setReportJobs((prev) => [queuedJob, ...prev]);

    await new Promise((resolve) => setTimeout(resolve, 450));
    setBatchProgress(65);

    await new Promise((resolve) => setTimeout(resolve, 450));
    const measuredLatency = Math.floor(340 + Math.random() * 140);

    setReportJobs((prev) =>
      prev.map((job) =>
        job.id === newJobId
          ? {
              ...job,
              status: "completed",
              executionLatencyMs: measuredLatency,
              pdfStoragePath: `siakad-reports/2026-ganjil/${newNisn}.pdf`,
            }
          : job
      )
    );

    const newWebhookLog: WebhookLogRow = {
      id: `wh-log-${batchId}`,
      channel: "qstash_pdf",
      eventType: "DOCUMENT_AI_INVOICE_EXTRACTION",
      endpointUrl: "/api/webhooks/qstash-pdf",
      responseStatus: 200,
      status: "completed",
      attemptCount: 1,
      maxAttempts: 5,
      latencyMs: measuredLatency,
      createdAt: `${new Date().toLocaleTimeString("id-ID")} WIB`,
    };

    setWebhookLogs((prev) => [newWebhookLog, ...prev]);
    setBatchProgress(100);
    setIsBatchRunning(false);
  }, [isBatchRunning]);

  const completedJobsCount = reportJobs.filter(
    (j) => j.status === "completed"
  ).length;

  const reportJobRows = reportJobs.map((job, index) => (
    <IndexTable.Row id={job.id} key={job.id} position={index}>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          {job.studentIdentifier}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <BlockStack gap="050">
          <Text variant="bodyMd" fontWeight="semibold" as="span">
            {job.studentName}
          </Text>
          <Text variant="bodySm" tone="subdued" as="span">
            Semester: {job.academicTerm} • QStash: {job.qstashMessageId}
          </Text>
        </BlockStack>
      </IndexTable.Cell>
      <IndexTable.Cell>
        {job.status === "completed" ? (
          <Badge tone="success">completed</Badge>
        ) : job.status === "processing" ? (
          <Badge tone="attention">processing</Badge>
        ) : (
          <Badge tone="info">{job.status}</Badge>
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodySm" as="span">
          {job.retryCount} / {job.maxRetries}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="semibold" as="span">
          {job.executionLatencyMs ? `${job.executionLatencyMs} ms` : "Running..."}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodySm" tone="subdued" as="span">
          {job.pdfStoragePath ?? "Rendering to Storage..."}
        </Text>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  const webhookRows = webhookLogs.map((log, index) => (
    <IndexTable.Row id={log.id} key={log.id} position={index}>
      <IndexTable.Cell>
        <Badge tone="info">{log.channel}</Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <BlockStack gap="050">
          <Text variant="bodyMd" fontWeight="semibold" as="span">
            {log.eventType}
          </Text>
          <Text variant="bodySm" tone="subdued" as="span">
            {log.endpointUrl}
          </Text>
        </BlockStack>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Badge tone={log.responseStatus === 200 ? "success" : "critical"}>
          {`${log.responseStatus} OK`}
        </Badge>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodySm" as="span">
          Attempt {log.attemptCount}/{log.maxAttempts}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="semibold" as="span">
          {log.latencyMs} ms
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodySm" tone="subdued" as="span">
          {log.createdAt}
        </Text>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page
      title="SIAKAD PDF Queue & Webhook Telemetry"
      subtitle="Monitor antrean worker paralel Upstash QStash (report_generation_jobs) & Resilient Webhook Dispatcher (webhook_logs)"
      backAction={{ content: "Ringkasan Proyek", url: "/portal" }}
      primaryAction={{
        content: "Trigger Sample PDF Batch Job",
        loading: isBatchRunning,
        onAction: handleTriggerSamplePdfBatchJob,
      }}
    >
      <Layout>
        <Layout.Section>
          <Banner
            title="Arsitektur Parallel PDF Worker & Exponential Backoff Aktif"
            tone="success"
          >
            <p>
              Setiap job pembuatan PDF rapor dieksekusi di luar thread utama
              menggunakan antrean asinkron Upstash QStash dengan formula retry{" "}
              <code>t_retry = t_base * 2^attempt + jitter</code> (maksimum 5
              percobaan sebelum masuk ke Dead Letter Queue).
            </p>
          </Banner>
        </Layout.Section>

        {/* Queue Telemetry KPIs */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 3 }} gap="400">
            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Progres Batch Rapor Aktif
                  </Text>
                  <Badge tone="success">
                    {`${completedJobsCount}/${reportJobs.length} Selesai`}
                  </Badge>
                </InlineStack>
                <Text as="p" variant="headingLg">
                  {batchProgress}% Rendered
                </Text>
                <ProgressBar
                  progress={batchProgress}
                  tone="primary"
                  size="small"
                />
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Rata-Rata Latensi Worker PDF
                  </Text>
                  <Badge tone="info">Edge Worker</Badge>
                </InlineStack>
                <Text as="p" variant="headingLg">
                  ~415 ms / PDF
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Kapasitas: 500+ PDF Rapor paralel &lt; 45 detik
                </Text>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Dead Letter Queue (DLQ)
                  </Text>
                  <Badge tone="success">0 Failed</Badge>
                </InlineStack>
                <Text as="p" variant="headingLg">
                  0.00% Error Rate
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Seluruh webhook terkirim dengan status 200 OK
                </Text>
              </BlockStack>
            </Card>
          </InlineGrid>
        </Layout.Section>

        {/* Table 1: report_generation_jobs */}
        <Layout.Section>
          <Card padding="0">
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="100">
                  <Text as="h2" variant="headingMd">
                    Antrean Parallel PDF Engine (public.report_generation_jobs)
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Hasil render disimpan otomatis ke bucket private{" "}
                    <code>siakad-reports</code>.
                  </Text>
                </BlockStack>
                <Button
                  size="slim"
                  loading={isBatchRunning}
                  onClick={handleTriggerSamplePdfBatchJob}
                >
                  Trigger Sample PDF Batch Job
                </Button>
              </InlineStack>
            </Box>
            <Divider />
            <IndexTable
              resourceName={{
                singular: "report generation job",
                plural: "report generation jobs",
              }}
              itemCount={reportJobs.length}
              selectable={false}
              headings={[
                { title: "ID Siswa (NISN)" },
                { title: "Nama Siswa & ID Pesan QStash" },
                { title: "Status Worker" },
                { title: "Retry" },
                { title: "Latensi Render" },
                { title: "Path Supabase Storage" },
              ]}
            >
              {reportJobRows}
            </IndexTable>
          </Card>
        </Layout.Section>

        {/* Table 2: webhook_logs */}
        <Layout.Section>
          <Card padding="0">
            <Box padding="400">
              <BlockStack gap="100">
                <Text as="h2" variant="headingMd">
                  Log Transmisi Webhook &amp; Retry (public.webhook_logs)
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Audit trail pengiriman event ke WhatsApp Gateway, QStash PDF
                  Worker, dan Omnichannel Hub.
                </Text>
              </BlockStack>
            </Box>
            <Divider />
            <IndexTable
              resourceName={{ singular: "webhook log", plural: "webhook logs" }}
              itemCount={webhookLogs.length}
              selectable={false}
              headings={[
                { title: "Kanal" },
                { title: "Tipe Event & Endpoint" },
                { title: "HTTP Status" },
                { title: "Backoff Attempt" },
                { title: "Latensi" },
                { title: "Waktu Eksekusi" },
              ]}
            >
              {webhookRows}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
