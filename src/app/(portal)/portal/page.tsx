"use client";

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
import { useRealtimeProject } from "@/hooks/use-realtime-project";

export default function PortalProjectOverviewPage() {
  const {
    project,
    milestones,
    connectionState,
    lastSyncAt,
    toggleMilestoneCompletion,
  } = useRealtimeProject();

  const completedCount = milestones.filter((m) => m.is_completed).length;

  const resourceName = {
    singular: "milestone",
    plural: "milestones",
  };

  const statusTone =
    project.status === "deployed"
      ? "success"
      : project.status === "qa_testing"
        ? "attention"
        : "info";

  const realtimeBadgeMarkup =
    connectionState === "SUBSCRIBED" ? (
      <Badge tone="success" progress="complete">
        Supabase Realtime: Connected
      </Badge>
    ) : connectionState === "SIMULATION_ACTIVE" ? (
      <Badge tone="info" progress="partiallyComplete">
        Supabase Realtime: Live Demo Sync
      </Badge>
    ) : (
      <Badge tone="attention">Supabase Realtime: Connecting...</Badge>
    );

  const rowMarkup = milestones.map((milestone, index) => (
    <IndexTable.Row
      id={milestone.id}
      key={milestone.id}
      position={index}
      selected={milestone.is_completed}
    >
      <IndexTable.Cell>
        <Text variant="bodyMd" fontWeight="bold" as="span">
          #{milestone.sort_order}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <BlockStack gap="100">
          <Text variant="bodyMd" fontWeight="semibold" as="span">
            {milestone.title}
          </Text>
          {milestone.description && (
            <Text variant="bodySm" tone="subdued" as="p">
              {milestone.description}
            </Text>
          )}
        </BlockStack>
      </IndexTable.Cell>
      <IndexTable.Cell>
        {milestone.is_completed ? (
          <Badge tone="success" progress="complete">
            Completed
          </Badge>
        ) : (
          <Badge tone="attention" progress="partiallyComplete">
            In Progress
          </Badge>
        )}
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Text variant="bodySm" tone="subdued" as="span">
          {milestone.completed_at
            ? new Date(milestone.completed_at).toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : "Target Aktif"}
        </Text>
      </IndexTable.Cell>
      <IndexTable.Cell>
        <Button
          size="slim"
          onClick={() => toggleMilestoneCompletion(milestone.id)}
        >
          {milestone.is_completed ? "Tandai Belum Selesai" : "Simulasi Selesai"}
        </Button>
      </IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page
      title={project.name}
      subtitle="Transparansi Pelacakan Proyek & Milestone Real-Time via PostgreSQL RLS"
      titleMetadata={realtimeBadgeMarkup}
      primaryAction={{
        content: "Buka Staging Environment",
        url: project.staging_url ?? "https://staging.siakad-alazhar.triloe.id",
        external: true,
      }}
      secondaryActions={[
        {
          content: "Monitor Antrean PDF SIAKAD",
          url: "/portal/automation",
        },
        {
          content: "Kelola Tagihan (Invoices)",
          url: "/portal/invoices",
        },
      ]}
    >
      <Layout>
        <Layout.Section>
          <Banner
            title="Sinkronisasi Langsung Supabase Realtime Aktif"
            tone="info"
          >
            <p>
              Halaman ini berlangganan event{" "}
              <strong>postgres_changes</strong> pada tabel{" "}
              <code>public.projects</code> dan{" "}
              <code>public.project_milestones</code>. Anda juga dapat menekan
              tombol <em>Simulasi Selesai</em> pada baris milestone di bawah
              untuk menguji pembaruan persentase progres secara instan.
            </p>
          </Banner>
        </Layout.Section>

        {/* Top KPI Summary Cards */}
        <Layout.Section>
          <InlineGrid columns={{ xs: 1, sm: 3 }} gap="400">
            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Progres Keseluruhan
                  </Text>
                  <Badge tone={statusTone}>
                    {project.status.toUpperCase()}
                  </Badge>
                </InlineStack>
                <Text as="p" variant="headingXl">
                  {project.progress_percentage}%
                </Text>
                <ProgressBar
                  progress={project.progress_percentage}
                  tone="primary"
                  size="small"
                />
                <Text as="p" variant="bodySm" tone="subdued">
                  {completedCount} dari {milestones.length} milestone selesai
                </Text>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Uptime &amp; Reliability SLA
                  </Text>
                  <Badge tone="success">SLA Terjaga</Badge>
                </InlineStack>
                <Text as="p" variant="headingXl">
                  {project.uptime_sla}%
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Arsitektur SIAKAD Terpisah (Administrasi vs LMS Ujian)
                </Text>
              </BlockStack>
            </Card>

            <Card>
              <BlockStack gap="200">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="h2" variant="headingSm" tone="subdued">
                    Sinkronisasi Terakhir
                  </Text>
                  <Badge tone="info">WebSockets</Badge>
                </InlineStack>
                <Text as="p" variant="headingLg">
                  {new Date(lastSyncAt).toLocaleTimeString("id-ID")} WIB
                </Text>
                <Text as="p" variant="bodySm" tone="subdued">
                  Target Selesai: {project.target_end_date ?? "30 Nov 2026"}
                </Text>
              </BlockStack>
            </Card>
          </InlineGrid>
        </Layout.Section>

        {/* Milestones IndexTable */}
        <Layout.Section>
          <Card padding="0">
            <Box padding="400">
              <InlineStack align="space-between" blockAlign="center">
                <BlockStack gap="100">
                  <Text as="h2" variant="headingMd">
                    Daftar Milestone Rekayasa &amp; Deliverables
                  </Text>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Setiap tahapan diverifikasi melalui automated test suite dan
                    audit keamanan RLS.
                  </Text>
                </BlockStack>
                <Badge tone="success">{`${completedCount}/${milestones.length} Completed`}</Badge>
              </InlineStack>
            </Box>
            <Divider />
            <IndexTable
              resourceName={resourceName}
              itemCount={milestones.length}
              selectable={false}
              headings={[
                { title: "Urutan" },
                { title: "Milestone & Spesifikasi Teknis" },
                { title: "Status" },
                { title: "Tanggal Selesai" },
                { title: "Uji Realtime" },
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
