import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  GitMerge,
  Layers,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type {
  CaseStudyMetric,
  Json,
  ServicePillar,
  Tables,
} from "@/types/database.types";

interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
}

interface NormalizedCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  clientIndustry: string;
  pillar: ServicePillar;
  architectureSummary: string;
  challengeSummary: string;
  architectureSolution: string;
  impactMetrics: CaseStudyMetric[];
  techStack: string[];
  diagramNodes: DiagramNode[];
}

const FALLBACK_CASE_STUDIES: NormalizedCaseStudy[] = [
  {
    id: "fallback-siakad-core",
    slug: "siakad-core-parallel-pdf-engine",
    title: "SIAKAD Core + Parallel PDF Report Engine",
    subtitle:
      "Arsitektur Akademik Terpisah & Mesin Pembuat Rapor Asinkron untuk Institusi Pendidikan Multi-Kampus",
    clientIndustry: "Pendidikan & Yayasan Sekolah (B2B EdTech)",
    pillar: "custom_siakad_erp",
    architectureSummary:
      "Next.js App Router + Supabase PostgreSQL (RLS) + Upstash QStash + Supabase Storage",
    challengeSummary:
      "Saat periode ujian akhir semester dan pembagian rapor serentak, ribuan siswa serta guru mengakses sistem secara bersamaan. Proses pembuatan ratusan PDF rapor secara sinkron menguras CPU server utama dan berisiko menyebabkan server crash.",
    architectureSolution:
      "Memisahkan beban database SIAKAD Administrasi/SPP dari trafik LMS/Ujian serentak, serta me-render ratusan PDF rapor siswa secara asinkron di background worker melalui antrean Upstash QStash menuju Supabase Storage (Signed URL).",
    impactMetrics: [
      {
        value: "500+ PDF / <45 dtk",
        label: "Kecepatan Render Batch Paralel",
        delta: "Async Worker",
      },
      {
        value: "0% Server Crash Saat Ujian",
        label: "Stabilitas Beban Trafik Puncak",
        delta: "Decoupled DB",
      },
      {
        value: "100% RLS Terisolasi",
        label: "Keamanan Data Admin, Guru & Siswa",
        delta: "Zero-Trust SQL",
      },
    ],
    techStack: [
      "Next.js App Router",
      "Supabase PostgreSQL (RLS)",
      "Upstash QStash",
      "Supabase Storage",
      "TypeScript Strict",
    ],
    diagramNodes: [
      {
        id: "client",
        label: "Portal Guru & Akademik",
        sublabel: "Next.js RSC / Action",
      },
      {
        id: "rls-db",
        label: "Supabase PostgreSQL",
        sublabel: "Decoupled + Strict RLS",
      },
      {
        id: "qstash",
        label: "Upstash QStash Queue",
        sublabel: "Async Batch Dispatcher",
      },
      {
        id: "pdf-worker",
        label: "Parallel PDF Worker",
        sublabel: "500+ Rapor / Batch",
      },
      {
        id: "storage",
        label: "Supabase Storage",
        sublabel: "Signed URL (60m)",
      },
    ],
  },
  {
    id: "fallback-omnichannel-hub",
    slug: "omnichannel-order-stock-hub",
    title: "Omnichannel Stock & Order Hub",
    subtitle:
      "Penyelarasan Stok Real-Time Lintas Marketplace & Gudang Fisik dengan Resilient Webhook Dispatcher",
    clientIndustry: "Retail Distribusi & E-Commerce B2B",
    pillar: "business_automation",
    architectureSummary:
      "Redis Queue + Webhook Dispatcher + Exponential Backoff Retry",
    challengeSummary:
      "Lonjakan pesanan serentak saat kampanye flash sale di berbagai marketplace menyebabkan perlambatan sinkronisasi stok dengan gudang fisik, memicu insiden overselling dan kegagalan pengiriman webhook transaksi.",
    architectureSolution:
      "Penyelarasan stok real-time lintas marketplace dan gudang fisik untuk mencegah overselling saat flash sale menggunakan antrean Redis/QStash, penguncian stok atomik, dan algoritma Exponential Backoff Retry hingga 5 percobaan.",
    impactMetrics: [
      {
        value: "0% Overselling",
        label: "Akurasi Stok Saat Flash Sale",
        delta: "Atomic Lock",
      },
      {
        value: "<150ms Sync Latency",
        label: "Kecepatan Propagasi Lintas Kanal",
        delta: "Real-Time Queue",
      },
      {
        value: "99.98% Webhook Delivery",
        label: "Keberhasilan Transmisi Event",
        delta: "5x Backoff Retry",
      },
    ],
    techStack: [
      "Redis Queue",
      "Webhook Dispatcher",
      "Exponential Backoff Retry",
      "Supabase Realtime",
      "WhatsApp Gateway API",
    ],
    diagramNodes: [
      {
        id: "marketplaces",
        label: "Multi-Marketplace",
        sublabel: "Order & Stock Events",
      },
      {
        id: "redis-queue",
        label: "Redis / QStash Queue",
        sublabel: "High-Throughput Buffer",
      },
      {
        id: "dispatcher",
        label: "Webhook Dispatcher",
        sublabel: "Exponential Backoff 5x",
      },
      {
        id: "stock-lock",
        label: "Atomic Stock Engine",
        sublabel: "<150ms Sync Latency",
      },
      {
        id: "portal-wa",
        label: "Polaris & WA Alert",
        sublabel: "Live Audit & Notifikasi",
      },
    ],
  },
];

function parseImpactMetrics(
  rawMetrics: Json,
  fallback: CaseStudyMetric[]
): CaseStudyMetric[] {
  if (!Array.isArray(rawMetrics) || rawMetrics.length === 0) {
    return fallback;
  }

  const parsed: CaseStudyMetric[] = [];
  for (const item of rawMetrics) {
    if (
      item &&
      typeof item === "object" &&
      !Array.isArray(item) &&
      typeof item.value === "string" &&
      typeof item.label === "string"
    ) {
      parsed.push({
        value: item.value,
        label: item.label,
        delta: typeof item.delta === "string" ? item.delta : undefined,
      });
    }
  }

  return parsed.length > 0 ? parsed : fallback;
}

function parseDiagramNodes(
  rawDiagram: Json,
  fallback: DiagramNode[]
): DiagramNode[] {
  if (
    rawDiagram &&
    typeof rawDiagram === "object" &&
    !Array.isArray(rawDiagram) &&
    Array.isArray(rawDiagram.nodes)
  ) {
    const nodes: DiagramNode[] = [];
    for (const node of rawDiagram.nodes) {
      if (
        node &&
        typeof node === "object" &&
        !Array.isArray(node) &&
        typeof node.id === "string" &&
        typeof node.label === "string"
      ) {
        nodes.push({
          id: node.id,
          label: node.label,
          sublabel:
            typeof node.sublabel === "string" ? node.sublabel : undefined,
        });
      }
    }
    if (nodes.length > 0) {
      return nodes;
    }
  }
  return fallback;
}

function mapDbRowToCaseStudy(
  row: Tables<"case_studies">,
  index: number
): NormalizedCaseStudy {
  const matchingFallback =
    FALLBACK_CASE_STUDIES.find((item) => item.slug === row.slug) ??
    FALLBACK_CASE_STUDIES[index % FALLBACK_CASE_STUDIES.length];

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    subtitle: row.subtitle,
    clientIndustry: row.client_industry,
    pillar: row.pillar,
    architectureSummary:
      row.tech_stack.length > 0
        ? row.tech_stack.join(" + ")
        : matchingFallback.architectureSummary,
    challengeSummary: row.challenge_summary,
    architectureSolution: row.architecture_solution,
    impactMetrics: parseImpactMetrics(
      row.impact_metrics,
      matchingFallback.impactMetrics
    ),
    techStack:
      row.tech_stack.length > 0 ? row.tech_stack : matchingFallback.techStack,
    diagramNodes: parseDiagramNodes(
      row.diagram_schema,
      matchingFallback.diagramNodes
    ),
  };
}

async function fetchCaseStudiesWithFallback(): Promise<{
  studies: NormalizedCaseStudy[];
  source: "supabase" | "fallback";
}> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (
    !supabaseUrl ||
    !supabaseAnonKey ||
    supabaseUrl.includes("your-project-id")
  ) {
    return { studies: FALLBACK_CASE_STUDIES, source: "fallback" };
  }

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("case_studies")
      .select("*")
      .eq("is_featured", true)
      .order("sort_order", { ascending: true });

    if (error || !data || data.length === 0) {
      return { studies: FALLBACK_CASE_STUDIES, source: "fallback" };
    }

    return {
      studies: data.map((row, idx) => mapDbRowToCaseStudy(row, idx)),
      source: "supabase",
    };
  } catch {
    return { studies: FALLBACK_CASE_STUDIES, source: "fallback" };
  }
}

export async function CaseStudiesSection() {
  const { studies } = await fetchCaseStudiesWithFallback();

  return (
    <section
      id="studi-kasus"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-4">
            <GitMerge className="h-3.5 w-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
              SHOWCASE &amp; STUDI KASUS PRODUKSI
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#09090B]">
            Bukti Rekayasa Sistem pada{" "}
            <span className="text-[#2563EB]">Beban Kerja Nyata</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Studi kasus implementasi arsitektur terpisah (decoupled) dan
            antrean asinkron yang menyelesaikan bottleneck performa kritikal.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10">
          {studies.map((study, index) => {
            const isSiakad = study.pillar === "custom_siakad_erp" || index === 0;

            return (
              <article
                key={study.id}
                className="rounded-3xl bg-white border border-[#E2E8F0] shadow-triloe-soft overflow-hidden p-6 sm:p-8 lg:p-10"
              >
                {/* Top Meta Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[#E2E8F0]">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#0F172A] text-white font-mono text-xs font-semibold">
                      STUDI KASUS 0{index + 1}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#2563EB]/10 text-[#2563EB] text-xs font-semibold">
                      {study.clientIndustry}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#10B981]/10 text-[#10B981] font-mono text-xs font-semibold">
                    <ShieldCheck className="h-4 w-4" />
                    <span>PRODUCTION VERIFIED</span>
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
                  {/* Left 7 Columns: Title, Dedicated Screenshot Frame, Problem & Solution */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B]">
                        {study.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-[#64748B] font-medium">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* DEDICATED VISUAL SCREENSHOT FRAME (TATA LETAK SLOT GAMBAR STUDI KASUS) */}
                    <div className="relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-slate-950 aspect-[16/9] shadow-sm group">
                      {isSiakad ? (
                        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#091322] via-[#0E1E36] to-[#080F1D] text-white flex flex-col justify-between select-none">
                          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                              <span className="ml-2 font-mono text-[10px] text-slate-400 hidden sm:inline">
                                siakad.yayasan-pendidikan.sch.id
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 border border-cyan-800/40 px-2.5 py-0.5 rounded-full">
                              📷 Slot Tangkapan Layar SIAKAD
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto py-2">
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Beban Ujian</span>
                              <span className="text-xs sm:text-sm font-bold text-white">4.200 Siswa</span>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Cetak Rapor</span>
                              <span className="text-xs sm:text-sm font-bold text-emerald-400">&lt;45s Paralel</span>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Stabilitas Server</span>
                              <span className="text-xs sm:text-sm font-bold text-blue-400">0% Down</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                            <span>Arsitektur: Next.js App Router + Supabase RLS</span>
                            <span className="text-emerald-400">Signed URL Storage OK</span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#121924] via-[#0E1520] to-[#070D16] text-white flex flex-col justify-between select-none">
                          <div className="flex items-center justify-between pb-2.5 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                              <span className="ml-2 font-mono text-[10px] text-slate-400 hidden sm:inline">
                                hub.omnichannel-distribusi.com
                              </span>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-950/70 border border-amber-800/40 px-2.5 py-0.5 rounded-full">
                              📷 Slot Tangkapan Layar Omnichannel
                            </span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 sm:gap-3 my-auto py-2">
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Kanal Terhubung</span>
                              <span className="text-xs sm:text-sm font-bold text-white">4 Marketplace</span>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Sync Latency</span>
                              <span className="text-xs sm:text-sm font-bold text-emerald-400">&lt;150ms</span>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                              <span className="block text-[10px] text-slate-400 font-mono">Akurasi Stok</span>
                              <span className="text-xs sm:text-sm font-bold text-blue-400">0% Oversell</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800/80">
                            <span>Arsitektur: Redis Buffer + Atomic Stock Lock</span>
                            <span className="text-emerald-400">Backoff Retry 5x</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Architecture Highlight Banner */}
                    <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4">
                      <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2563EB]">
                        <Layers className="h-4 w-4" />
                        <span>Arsitektur Inti</span>
                      </div>
                      <p className="mt-1.5 font-mono text-xs sm:text-sm font-semibold text-[#09090B]">
                        {study.architectureSummary}
                      </p>
                    </div>

                    {/* Challenge & Engineering Solution (Ringkas & Terstruktur) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5">
                        <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-rose-600 bg-rose-500/10 px-2.5 py-0.5 rounded-full">
                          Tantangan Teknis
                        </span>
                        <p className="mt-2.5 text-xs sm:text-sm text-[#64748B] leading-relaxed">
                          {study.challengeSummary}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-4 sm:p-5">
                        <span className="inline-block text-xs font-mono font-semibold uppercase tracking-wider text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                          Solusi Arsitektur
                        </span>
                        <p className="mt-2.5 text-xs sm:text-sm text-[#09090B] leading-relaxed">
                          {study.architectureSolution}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3.5 py-1.5 rounded-full bg-white border border-[#E2E8F0] text-xs font-mono font-medium text-[#09090B]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right 5 Columns: Impact Metrics (JetBrains Mono) */}
                  <div className="lg:col-span-5 rounded-3xl bg-[#0F172A] text-white p-6 sm:p-7 border border-slate-800 flex flex-col justify-between space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                      <div>
                        <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                          TELEMETRI DAMPAK PRODUKSI
                        </span>
                        <h4 className="font-heading text-lg font-bold text-white mt-0.5">
                          Metrik Performa Terukur
                        </h4>
                      </div>
                      {isSiakad ? (
                        <FileSpreadsheet className="h-6 w-6 text-[#10B981]" />
                      ) : (
                        <RefreshCw className="h-6 w-6 text-[#2563EB]" />
                      )}
                    </div>

                    <div className="space-y-4">
                      {study.impactMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-mono text-xl sm:text-2xl font-semibold text-[#10B981]">
                              {metric.value}
                            </span>
                            {metric.delta && (
                              <span className="px-2.5 py-0.5 rounded-full bg-[#2563EB]/20 text-blue-300 font-mono text-[11px] font-semibold">
                                {metric.delta}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 flex items-center gap-1.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981] shrink-0" />
                            <span>{metric.label}</span>
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                      <span className="font-mono">SLA Guaranteed</span>
                      <a
                        href="#konsultasi"
                        className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#10B981] transition-colors"
                      >
                        <span>Terapkan Arsitektur Ini</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Visual Architecture Flow Diagram (Connected Node Cards) */}
                <div className="mt-8 pt-7 border-t border-[#E2E8F0]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#09090B]">
                      <Workflow className="h-4 w-4 text-[#2563EB]" />
                      Diagram Alur Data &amp; Topologi Node Arsitektur
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">
                      Decoupled Event Pipeline
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    {study.diagramNodes.map((node, nodeIdx) => {
                      const isLast = nodeIdx === study.diagramNodes.length - 1;
                      return (
                        <div
                          key={node.id}
                          className="relative flex items-center gap-2"
                        >
                          <div className="w-full rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-3.5 hover:border-[#2563EB] transition-colors">
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#2563EB]/10 text-[#2563EB] font-mono text-[11px] font-semibold">
                                0{nodeIdx + 1}
                              </span>
                              {nodeIdx % 2 === 0 ? (
                                <Server className="h-3.5 w-3.5 text-[#64748B]" />
                              ) : (
                                <Database className="h-3.5 w-3.5 text-[#10B981]" />
                              )}
                            </div>
                            <p className="font-heading text-xs sm:text-sm font-bold text-[#09090B] leading-snug">
                              {node.label}
                            </p>
                            {node.sublabel && (
                              <p className="font-mono text-[11px] text-[#64748B] mt-1">
                                {node.sublabel}
                              </p>
                            )}
                          </div>

                          {!isLast && (
                            <div className="hidden lg:flex items-center justify-center text-[#2563EB] shrink-0 -mr-1">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
