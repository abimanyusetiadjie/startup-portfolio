"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileCheck2,
  FileSpreadsheet,
  Globe,
  ImageIcon,
  Layers,
  LayoutDashboard,
  Maximize2,
  MessageSquare,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

type ProjectCategory =
  | "all"
  | "siakad_edtech"
  | "erp_omnichannel"
  | "wa_automation"
  | "client_portal";

interface ProjectVisualItem {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  aspectSpan: "wide" | "compact"; // wide = col-span-1 lg:col-span-8, compact = col-span-1 lg:col-span-4
  metricHighlight: string;
  metricBadge: string;
  tagline: string;
  tags: string[];
  /**
   * Path URL gambar nyata jika sudah ada (misal: "/images/projects/siakad.webp").
   * Jika undefined/kosong, komponen akan otomatis me-render UI Mockup Vector beresolusi tinggi.
   */
  imageUrl?: string;
  mockupType: "siakad_portal" | "pdf_queue" | "omnichannel" | "wa_bot" | "polaris_portal" | "lighthouse_audit";
}

const CATEGORY_TABS = [
  { id: "all", label: "Semua Sistem (6)" },
  { id: "siakad_edtech", label: "SIAKAD & EdTech (2)" },
  { id: "erp_omnichannel", label: "ERP & Omnichannel (1)" },
  { id: "wa_automation", label: "Otomasi WhatsApp (1)" },
  { id: "client_portal", label: "Client Portal (2)" },
] as const;

const PROJECT_SHOWCASE_DATA: ProjectVisualItem[] = [
  {
    id: "proj_siakad_core",
    title: "SIAKAD Modern Multi-Kampus & Gradebook",
    client: "Yayasan Al-Azhar Nusantara",
    category: "siakad_edtech",
    categoryLabel: "SIAKAD & EdTech",
    aspectSpan: "wide",
    metricHighlight: "0% Server Down",
    metricBadge: "Trafik Puncak Ujian 4.2k Siswa",
    tagline: "Pemisahan arsitektur modul administrasi SPP & sistem ujian serentak anti-crash.",
    tags: ["Next.js 15", "Supabase RLS", "Tailwind", "PostgreSQL"],
    imageUrl: "", // Siap diisi path gambar pengguna kapan saja
    mockupType: "siakad_portal",
  },
  {
    id: "proj_pdf_worker",
    title: "Mesin Cetak Rapor PDF Paralel Asinkron",
    client: "Portal Akademik Terpadu",
    category: "siakad_edtech",
    categoryLabel: "SIAKAD & EdTech",
    aspectSpan: "compact",
    metricHighlight: "500+ PDF / <45s",
    metricBadge: "Background Worker",
    tagline: "Antrean terdistribusi Upstash QStash & render paralel ke Cloud Storage aman.",
    tags: ["Upstash QStash", "Edge Worker", "Signed S3 URL"],
    imageUrl: "",
    mockupType: "pdf_queue",
  },
  {
    id: "proj_omnichannel_sync",
    title: "Omnichannel Order & Realtime Stock Hub",
    client: "PT Mitra Distribusi Niaga",
    category: "erp_omnichannel",
    categoryLabel: "ERP & Omnichannel",
    aspectSpan: "compact",
    metricHighlight: "0% Overselling",
    metricBadge: "Sync < 150ms",
    tagline: "Penyelarasan stok otomatis lintas 4 marketplace & sistem multi-gudang terpadu.",
    tags: ["Supabase Realtime", "Atomic Lock", "REST Webhook"],
    imageUrl: "",
    mockupType: "omnichannel",
  },
  {
    id: "proj_wa_gateway",
    title: "WhatsApp Business Gateway & Bot Otomasi",
    client: "Layanan Notifikasi Transaksional",
    category: "wa_automation",
    categoryLabel: "Otomasi WhatsApp",
    aspectSpan: "compact",
    metricHighlight: "< 2s Terkirim",
    metricBadge: "Auto-Retry Backoff",
    tagline: "Pengiriman tagihan, mutasi pembayaran, & alert darurat secara otomatis 24/7.",
    tags: ["Meta Cloud API", "QStash Queue", "DLQ Monitor"],
    imageUrl: "",
    mockupType: "wa_bot",
  },
  {
    id: "proj_client_portal",
    title: "Shopify Polaris Enterprise Client Portal",
    client: "Workspace Klien Terisolasi (/portal)",
    category: "client_portal",
    categoryLabel: "Client Portal",
    aspectSpan: "compact",
    metricHighlight: "100% Transparan",
    metricBadge: "Milestone & Invoice Live",
    tagline: "Ruang kerja privat klien untuk lacak progres pengerjaan software & tagihan instan.",
    tags: ["Shopify Polaris", "Supabase Auth", "PDF Invoices"],
    imageUrl: "",
    mockupType: "polaris_portal",
  },
  {
    id: "proj_lighthouse_speed",
    title: "Arsitektur Web Korporat Core Web Vitals 100",
    client: "Platform Digital B2B Enterprise",
    category: "client_portal",
    categoryLabel: "Web Performa Tinggi",
    aspectSpan: "wide",
    metricHighlight: "Skor 100 Google",
    metricBadge: "LCP 0.8s • CLS 0.00",
    tagline: "Pemuatan kilat berbasis Server Components (RSC) dengan optimasi SEO kelas satu.",
    tags: ["Next.js App Router", "SSR + SSG", "Turbopack Edge"],
    imageUrl: "",
    mockupType: "lighthouse_audit",
  },
];

export function ProjectVisualGridSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");
  const [selectedPreview, setSelectedPreview] = useState<ProjectVisualItem | null>(null);

  const filteredProjects =
    activeTab === "all"
      ? PROJECT_SHOWCASE_DATA
      : PROJECT_SHOWCASE_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="showcase-visual" className="relative py-20 sm:py-28 bg-[#F8FAFC] border-t border-b border-[#E2E8F0]">
      {/* Subtle Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/4 -z-10 h-96 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(37,99,235,0.05),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Compact, High-Visual, Low-Text) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E2E8F0]">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#2563EB]" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[#09090B]">
                SHOWCASE REKAYASA &amp; GRID PROYEK
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-[#09090B]">
              Katalog Visual Sistem <span className="text-[#2563EB]">Kelas Enterprise</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B] max-w-xl">
              Tata letak grid visual antarmuka sistem nyata. Dirancang modular dengan slot gambar siap pakai untuk tangkapan layar produk Anda.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
            {CATEGORY_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as ProjectCategory)}
                  className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-[#64748B] hover:text-[#09090B] hover:bg-slate-50"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-[#2563EB]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* The Visual Grid (Asymmetric Bento Grid with Image Slots) */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isWide = project.aspectSpan === "wide";
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className={`group relative rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#2563EB]/60 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                    isWide ? "lg:col-span-8" : "lg:col-span-4"
                  }`}
                >
                  {/* Top Bar on Card */}
                  <div className="p-5 sm:p-6 pb-4 flex items-center justify-between gap-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#2563EB]/10 text-[#2563EB]">
                        {project.categoryLabel}
                      </span>
                      <span className="text-xs text-[#64748B] font-medium hidden sm:inline">
                        • {project.client}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 className="h-3 w-3" />
                        {project.metricHighlight}
                      </span>
                      <button
                        onClick={() => setSelectedPreview(project)}
                        aria-label="Lihat Pratinjau Penuh"
                        className="h-8 w-8 rounded-full bg-slate-100 hover:bg-[#2563EB] text-[#64748B] hover:text-white flex items-center justify-center transition-colors"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* DEDICATED IMAGE CONTAINER (SLOT TATA LETAK GAMBAR) */}
                  <div className="relative w-full overflow-hidden bg-slate-900 group/image">
                    {/* Frame Aspect Ratio */}
                    <div className={`w-full ${isWide ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"} relative`}>
                      {project.imageUrl ? (
                        /* Gambar Nyata Pengguna */
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover/image:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        /* Vector High-Fidelity Mockup Placeholder (Siap Diganti dengan Gambar Nyata) */
                        <SystemMockupVector
                          mockupType={project.mockupType}
                          title={project.title}
                          metricBadge={project.metricBadge}
                        />
                      )}

                      {/* Floating Overlay Badge: Menandakan Slot Gambar Siap Pakai */}
                      <div className="absolute top-3 left-3 z-20 pointer-events-none">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-sm">
                          <ImageIcon className="h-3 w-3 text-cyan-400" />
                          <span>Slot Gambar Tersedia</span>
                        </span>
                      </div>

                      {/* Quick Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <span className="text-white text-xs font-mono font-medium flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5 text-cyan-400" />
                          <span>Klik untuk Memperbesar Pratinjau Sistem</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom Meta (Singkat, Padat, Tidak Banyak Teks) */}
                  <div className="p-5 sm:p-6 pt-4 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#09090B] group-hover:text-[#2563EB] transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-slate-100 text-[#09090B] font-mono text-[11px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <a
                        href="#konsultasi"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                      >
                        <span>Terapkan</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Instruksi Ringkas untuk Pengembang/Klien */}
        <div className="mt-10 rounded-2xl bg-white border border-[#E2E8F0] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] shrink-0">
              <ImageIcon className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#09090B]">
                Tata Letak Berbasis Visual (Image-Ready Layout)
              </h4>
              <p className="text-xs text-[#64748B]">
                Setiap kartu memiliki wadah gambar berbingkai aspect-ratio. Anda cukup mengoper atribut <code>imageUrl</code> untuk menampilkan screenshot nyata.
              </p>
            </div>
          </div>

          <a
            href="#konsultasi"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Konsultasi Kustomisasi Visual →
          </a>
        </div>
      </div>

      {/* POPUP MODAL PRATINJAU GAMBAR PENUH */}
      <AnimatePresence>
        {selectedPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPreview(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0F172A] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-white"
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#2563EB] uppercase font-semibold">
                    {selectedPreview.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    {selectedPreview.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300"
                >
                  Tutup ✕
                </button>
              </div>

              {/* Modal Main View */}
              <div className="p-5 sm:p-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-2 overflow-hidden aspect-[16/9]">
                  {selectedPreview.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedPreview.imageUrl}
                      alt={selectedPreview.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <SystemMockupVector
                      mockupType={selectedPreview.mockupType}
                      title={selectedPreview.title}
                      metricBadge={selectedPreview.metricBadge}
                    />
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                    {selectedPreview.tagline}
                  </p>
                  <a
                    href="#konsultasi"
                    onClick={() => setSelectedPreview(null)}
                    className="px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-semibold hover:bg-[#1D4ED8]"
                  >
                    Minta Demo Sistem Ini
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * Komponen Vector Mockup Beresolusi Tinggi:
 * Memberikan visual sistem modern yang indah sebelum gambar aktual diunggah.
 */
function SystemMockupVector({
  mockupType,
  title,
  metricBadge,
}: {
  mockupType: ProjectVisualItem["mockupType"];
  title: string;
  metricBadge: string;
}) {
  switch (mockupType) {
    case "siakad_portal":
      return (
        <div className="w-full h-full p-4 sm:p-6 bg-gradient-to-br from-[#0B1528] via-[#0F1E38] to-[#0A101D] text-white flex flex-col justify-between select-none">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-[10px] text-slate-400">siakad.yayasan.sch.id/grades</span>
            </div>
            <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full">
              ● RLS ENFORCED
            </span>
          </div>

          {/* Mock Dashboard Content Grid */}
          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            <div className="col-span-3 rounded-xl bg-slate-900/80 border border-slate-800 p-3 space-y-2">
              <div className="h-2 w-16 bg-slate-700 rounded" />
              <div className="h-2 w-20 bg-[#2563EB]/40 rounded" />
              <div className="h-2 w-12 bg-slate-800 rounded" />
              <div className="h-2 w-14 bg-slate-800 rounded" />
            </div>
            <div className="col-span-9 rounded-xl bg-slate-900/90 border border-slate-800 p-3 space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <span className="text-xs font-semibold text-white">Buku Nilai &amp; Rapor Siswa Kelas XII</span>
                <span className="text-[10px] font-mono text-cyan-400">36 Terdaftar</span>
              </div>
              <div className="space-y-1.5">
                {[1, 2, 3].map((row) => (
                  <div key={row} className="flex items-center justify-between text-[11px] text-slate-300 py-1 border-b border-slate-800/50">
                    <span className="font-mono text-slate-400">SIS-2026-00{row}</span>
                    <span>Siswa Contoh {row}</span>
                    <span className="font-mono text-[#10B981] font-bold">94.5 (A)</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400">LULUS</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Status */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
            <span>DATABASE: SUPABASE POSTGRESQL</span>
            <span className="text-emerald-400">{metricBadge}</span>
          </div>
        </div>
      );

    case "pdf_queue":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#121B2B] via-[#0E1724] to-[#070D18] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-[10px] text-cyan-400">UPSTASH QSTASH DISPATCHER</span>
            <span className="font-mono text-[10px] text-emerald-400">ACTIVE</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-4 w-4 text-emerald-400" />
                <span className="text-xs font-mono text-white">Batch-Rapor-Semester.pdf</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">100% DONE</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#2563EB] to-[#10B981] w-full" />
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 flex justify-between">
            <span>500 PDF Parallel Worker</span>
            <span className="text-cyan-400">Signed URL: OK</span>
          </div>
        </div>
      );

    case "omnichannel":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#151E28] via-[#0D1520] to-[#080E16] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-[10px] text-amber-400">ATOMIC STOCK LOCK</span>
            <span className="font-mono text-[10px] text-emerald-400">LATENCY 48ms</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto">
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-[10px] text-slate-400 font-mono">Marketplace</span>
              <span className="text-xs font-bold text-white">Shopee &amp; Tokopedia</span>
            </div>
            <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
              <span className="block text-[10px] text-slate-400 font-mono">Stok Terkunci</span>
              <span className="text-xs font-bold text-emerald-400">2,450 Unit</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-400 text-center">
            Supabase Realtime Sync Engine
          </div>
        </div>
      );

    case "wa_bot":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#062018] via-[#091D17] to-[#04120D] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-emerald-900/60">
            <span className="font-mono text-[10px] text-emerald-400">WA CLOUD API GATEWAY</span>
            <span className="font-mono text-[10px] text-emerald-300">AUTO-RETRY 5x</span>
          </div>
          <div className="space-y-2 my-auto max-w-[260px] mx-auto w-full">
            <div className="p-2.5 rounded-xl rounded-tl-sm bg-emerald-950/80 border border-emerald-800/60 text-left">
              <p className="text-[11px] text-emerald-200">
                Halo Bpk. Ahmad, Rapor Akademik Siswa telah siap diunduh secara aman.
              </p>
              <span className="block text-right text-[9px] text-emerald-400 mt-1">11:42 ✓✓</span>
            </div>
          </div>
          <div className="text-[10px] font-mono text-emerald-400/80 text-center">
            Resilient Webhook Dispatcher
          </div>
        </div>
      );

    case "polaris_portal":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#0D1F38] via-[#0B172B] to-[#07101F] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-[10px] text-blue-400">SHOPIFY POLARIS WORKSPACE</span>
            <span className="font-mono text-[10px] text-slate-400">/portal</span>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 my-auto space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="font-semibold text-white">Milestone 03: PDF Engine</span>
              <span className="text-emerald-400 font-mono text-[11px]">85%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-[#2563EB] w-[85%]" />
            </div>
            <span className="block text-[10px] text-slate-400 font-mono">Invoice #INV-2026-081 • LUNAS</span>
          </div>
          <div className="text-[10px] font-mono text-slate-400 text-center">
            Multi-Tenant Isolated Portal
          </div>
        </div>
      );

    case "lighthouse_audit":
      return (
        <div className="w-full h-full p-4 sm:p-6 bg-gradient-to-br from-[#0D172B] via-[#08101E] to-[#040810] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="font-mono text-[10px] text-emerald-400">GOOGLE LIGHTHOUSE AUDIT</span>
            <span className="font-mono text-[10px] text-slate-400">EDGE ENGINE</span>
          </div>
          <div className="grid grid-cols-4 gap-2 my-auto text-center">
            {[
              { label: "Performance", val: "100" },
              { label: "Accessibility", val: "100" },
              { label: "Best Practice", val: "100" },
              { label: "SEO", val: "100" },
            ].map((m) => (
              <div key={m.label} className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-800/40">
                <span className="block font-mono text-lg sm:text-xl font-bold text-emerald-400">{m.val}</span>
                <span className="block text-[9px] text-slate-400 uppercase tracking-tighter mt-0.5">{m.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-mono text-slate-400">
            <span>LCP: 0.8s</span>
            <span>CLS: 0.00</span>
            <span>INP: 45ms</span>
          </div>
        </div>
      );
  }
}
