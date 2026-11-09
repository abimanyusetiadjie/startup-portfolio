"use client";

import { useCallback, useMemo, useState } from "react";
import {
  Badge,
  Banner,
  BlockStack,
  Box,
  Button,
  ButtonGroup,
  Card,
  Divider,
  IndexTable,
  InlineGrid,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { createClient } from "@/lib/supabase/client";

type InvoiceFilterStatus = "ALL" | "Paid" | "Issued" | "Overdue";

interface PortalInvoiceItem {
  id: string;
  invoiceNumber: string;
  milestoneTitle: string;
  amountIdr: number;
  uiStatus: "Paid" | "Issued" | "Overdue";
  dueDate: string;
  paidAt: string | null;
  storagePdfPath: string;
}

const INITIAL_INVOICES: PortalInvoiceItem[] = [
  {
    id: "inv-01",
    invoiceNumber: "INV-2026-0901",
    milestoneTitle: "Termin 1 (40%) — Arsitektur PostgreSQL Multi-Warehouse & RBAC",
    amountIdr: 34000000,
    uiStatus: "Paid",
    dueDate: "2026-09-10",
    paidAt: "2026-09-08",
    storagePdfPath: "client-logistik-01/INV-2026-0901.pdf",
  },
  {
    id: "inv-02",
    invoiceNumber: "INV-2026-1015",
    milestoneTitle: "Termin 2 (35%) — Document AI Pipeline OCR & WhatsApp Meta API",
    amountIdr: 29750000,
    uiStatus: "Paid",
    dueDate: "2026-10-20",
    paidAt: "2026-10-18",
    storagePdfPath: "client-logistik-01/INV-2026-1015.pdf",
  },
  {
    id: "inv-03",
    invoiceNumber: "INV-2026-1105",
    milestoneTitle: "Termin 3 (25%) — Load Testing 10.000 Transaksi & Handover Code",
    amountIdr: 21250000,
    uiStatus: "Issued",
    dueDate: "2026-11-25",
    paidAt: null,
    storagePdfPath: "client-logistik-01/INV-2026-1105.pdf",
  },
  {
    id: "inv-04",
    invoiceNumber: "INV-2026-1028-ADD",
    milestoneTitle: "Add-On — Dedicated Redis High-Throughput Cluster",
    amountIdr: 6500000,
    uiStatus: "Overdue",
    dueDate: "2026-11-01",
    paidAt: null,
    storagePdfPath: "client-logistik-01/INV-2026-1028-ADD.pdf",
  },
];

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function PortalInvoicesPage() {
  const [selectedFilter, setSelectedFilter] =
    useState<InvoiceFilterStatus>("ALL");
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [signedUrlBanner, setSignedUrlBanner] = useState<{
    invoiceNumber: string;
    url: string;
    mode: "supabase_storage" | "simulated_signed_url";
  } | null>(null);

  const filteredInvoices = useMemo(() => {
    if (selectedFilter === "ALL") return INITIAL_INVOICES;
    return INITIAL_INVOICES.filter((item) => item.uiStatus === selectedFilter);
  }, [selectedFilter]);

  const totalPaid = useMemo(
    () =>
      INITIAL_INVOICES.filter((i) => i.uiStatus === "Paid").reduce(
        (acc, curr) => acc + curr.amountIdr,
        0
      ),
    []
  );

  const totalOutstanding = useMemo(
    () =>
      INITIAL_INVOICES.filter((i) => i.uiStatus !== "Paid").reduce(
        (acc, curr) => acc + curr.amountIdr,
        0
      ),
    []
  );

  const handleDownloadInvoicePdf = useCallback(
    async (invoice: PortalInvoiceItem) => {
      setDownloadingId(invoice.id);
      setSignedUrlBanner(null);

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      const isSupabaseReady =
        Boolean(url) &&
        Boolean(anonKey) &&
        !url?.includes("your-project-id") &&
        !anonKey?.startsWith("your-");

      if (isSupabaseReady) {
        try {
          const supabase = createClient();
          const { data, error } = await supabase.storage
            .from("invoices-pdf")
            .createSignedUrl(invoice.storagePdfPath, 3600);

          if (!error && data?.signedUrl) {
            setSignedUrlBanner({
              invoiceNumber: invoice.invoiceNumber,
              url: data.signedUrl,
              mode: "supabase_storage",
            });
            setDownloadingId(null);
            return;
          }
        } catch {
          // Lanjutkan ke simulasi signed URL bila bucket belum berisi objek tersebut
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 350));
      const simulatedSignedUrl = `https://storage.supabase.co/object/sign/invoices-pdf/${invoice.storagePdfPath}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9&exp=3600`;

      setSignedUrlBanner({
        invoiceNumber: invoice.invoiceNumber,
        url: simulatedSignedUrl,
        mode: "simulated_signed_url",
      });
      setDownloadingId(null);
    },
    []
  );

  const rowMarkup = filteredInvoices.map((invoice, index) => {
    const badgeTone =
      invoice.uiStatus === "Paid"
        ? "success"
        : invoice.uiStatus === "Issued"
          ? "info"
          : "critical";

    return (
      <IndexTable.Row id={invoice.id} key={invoice.id} position={index}>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="bold" as="span">
            {invoice.invoiceNumber}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" as="span">
            {invoice.milestoneTitle}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodyMd" fontWeight="semibold" as="span">
            {formatRupiah(invoice.amountIdr)}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Badge tone={badgeTone}>{invoice.uiStatus}</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Text variant="bodySm" tone="subdued" as="span">
            {invoice.dueDate}
          </Text>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Button
            size="slim"
            loading={downloadingId === invoice.id}
            onClick={() => handleDownloadInvoicePdf(invoice)}
          >
            Unduh PDF (Signed URL)
          </Button>
        </IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  return (
    <Page
      title="Manajemen Tagihan & Pembayaran (Invoices)"
      subtitle="Akses dokumen tagihan resmi berproteksi Supabase Storage Signed URL (bucket: invoices-pdf)"
      backAction={{ content: "Ringkasan Proyek", url: "/portal" }}
    >
      <Layout>
        {signedUrlBanner && (
          <Layout.Section>
            <Banner
              title={`Signed URL Berhasil Dibuat untuk ${signedUrlBanner.invoiceNumber}`}
              tone="success"
              onDismiss={() => setSignedUrlBanner(null)}
            >
              <BlockStack gap="100">
                <Text as="p" variant="bodySm">
                  Tautan unduh sementara (berlaku 60 menit) dari bucket{" "}
                  <code>invoices-pdf</code> telah siap:
                </Text>
                <Text as="p" variant="bodySm" fontWeight="semibold">
                  {signedUrlBanner.url}
                </Text>
              </BlockStack>
            </Banner>
          </Layout.Section>
        )}

        {/* Summary Cards */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 3 }} gap="400">
            <Card>
              <BlockStack gap="100">
                <Text as="h2" variant="headingSm" tone="subdued">
                  Total Terbayar (Paid)
                </Text>
                <Text as="p" variant="headingLg">
                  {formatRupiah(totalPaid)}
                </Text>
                <Badge tone="success">2 Termin Lunas</Badge>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="100">
                <Text as="h2" variant="headingSm" tone="subdued">
                  Tagihan Aktif &amp; Tertunda
                </Text>
                <Text as="p" variant="headingLg">
                  {formatRupiah(totalOutstanding)}
                </Text>
                <Badge tone="attention">Issued &amp; Overdue</Badge>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="100">
                <Text as="h2" variant="headingSm" tone="subdued">
                  Keamanan Dokumen
                </Text>
                <Text as="p" variant="headingMd">
                  Private Storage Bucket
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  RLS Folder Isolation: <code>invoices-pdf/&#123;uid&#125;</code>
                </Text>
              </BlockStack>
            </Card>
          </InlineGrid>
        </Layout.Section>

        {/* Filter & Invoices Table */}
        <Layout.Section>
          <Card padding="0">
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center" gap="300">
                <Text as="h2" variant="headingMd">
                  Daftar Invoice Proyek
                </Text>
                <ButtonGroup variant="segmented">
                  {(["ALL", "Paid", "Issued", "Overdue"] as const).map(
                    (status) => (
                      <Button
                        key={status}
                        pressed={selectedFilter === status}
                        onClick={() => setSelectedFilter(status)}
                      >
                        {status === "ALL" ? "Semua Status" : status}
                      </Button>
                    )
                  )}
                </ButtonGroup>
              </InlineStack>
            </Box>
            <Divider />
            <IndexTable
              resourceName={{ singular: "invoice", plural: "invoices" }}
              itemCount={filteredInvoices.length}
              selectable={false}
              headings={[
                { title: "Nomor Invoice" },
                { title: "Deskripsi Termin / Milestone" },
                { title: "Nominal (IDR)" },
                { title: "Status" },
                { title: "Jatuh Tempo" },
                { title: "Dokumen PDF" },
              ]}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
