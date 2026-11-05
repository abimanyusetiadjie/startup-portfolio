"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  ExternalLink,
  Eye,
  FileSpreadsheet,
  Globe,
  ImageIcon,
  Layers,
  Lock,
  Maximize2,
  MessageSquare,
  RefreshCw,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

interface BentoItem {
  id: string;
  title: string;
  eyebrow: string;
  badge: string;
  subtitle: string;
  tags: string[];
  gridSpan: string; // e.g., "lg:col-span-8", "lg:col-span-4", "lg:col-span-12"
  aspectClass: string;
  imageUrl?: string;
  mockupType: "siakad" | "whatsapp" | "pdf_worker" | "omnichannel" | "rls_security" | "polaris_portal";
  metricHighlight: string;
  metricLabel: string;
}

const ABINEST_BENTO_ITEMS: BentoItem[] = [
  {
    id: "bento_siakad",
    title: "SIAKAD Modern v2.4 & Academic Gradebook",
    eyebrow: "SISTEM INTI EDTECH",
    badge: "SLA 99.9% UPTIME",
    subtitle: "Pemisahan arsitektur antara modul administrasi SPP & sistem ujian serentak anti-crash.",
    tags: ["Next.js 15 RSC", "Supabase RLS", "PostgreSQL", "Decoupled DB"],
    gridSpan: "lg:col-span-8",
    aspectClass: "aspect-[16/9] sm:aspect-[16/10]",
    imageUrl: "", // Siap diisi: "/images/projects/siakad-dashboard.webp"
    mockupType: "siakad",
    metricHighlight: "0% Downtime",
    metricLabel: "Trafik Ujian 4.200 Siswa",
  },
  {
    id: "bento_whatsapp",
    title: "WhatsApp Gateway & Bot Otomasi",
    eyebrow: "KOMUNIKASI TRANSAKSIONAL",
    badge: "< 2s TERKIRIM",
    subtitle: "Pengiriman tagihan SPP, jadwal ujian, & alert otomatis dengan auto-retry exponential backoff 5x.",
    tags: ["Meta Cloud API", "QStash Queue", "HMAC Signed"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
    imageUrl: "", // Siap diisi: "/images/projects/whatsapp-gateway.webp"
    mockupType: "whatsapp",
    metricHighlight: "< 2s Dispatch",
    metricLabel: "Auto-Retry Backoff 5x",
  },
  {
    id: "bento_pdf",
    title: "Parallel PDF Report Generator Engine",
    eyebrow: "ASYNCHRONOUS WORKER",
    badge: "500+ PDF / <45s",
    subtitle: "Pencetakan ratusan rapor siswa paralel di background worker tanpa membebani server web utama.",
    tags: ["Upstash QStash", "Edge Worker", "Signed S3 URL"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3]",
    imageUrl: "", // Siap diisi: "/images/projects/pdf-worker.webp"
    mockupType: "pdf_worker",
    metricHighlight: "< 45 Detik",
    metricLabel: "500+ Rapor PDF Paralel",
  },
  {
    id: "bento_omnichannel",
    title: "Atomic Stock Hub & Sync Engine",
    eyebrow: "ERP & DISTRIBUSI",
    badge: "< 150ms LATENCY",
    subtitle: "Penyelarasan stok otomatis lintas 4 marketplace (Shopee, Tokopedia, TikTok) & gudang fisik.",
    tags: ["Supabase Realtime", "Atomic Lock", "Anti-Overselling"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3]",
    imageUrl: "", // Siap diisi: "/images/projects/omnichannel-hub.webp"
    mockupType: "omnichannel",
    metricHighlight: "0% Overselling",
    metricLabel: "Sinkronisasi Multi-Gudang",
  },
  {
    id: "bento_rls",
    title: "PostgreSQL Row Level Security (RLS)",
    eyebrow: "SECURITY & COMPLIANCE",
    badge: "100% TERISOLASI",
    subtitle: "Proteksi data multi-tenant di tingkat SQL engine: Admin, Guru, Siswa, & Klien terisolasi mutlak.",
    tags: ["Zero-Trust", "Postgres RLS", "Role-Based Access"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3]",
    imageUrl: "", // Siap diisi: "/images/projects/rls-security.webp"
    mockupType: "rls_security",
    metricHighlight: "Zero-Trust",
    metricLabel: "Isolasi Multi-Tenant SQL",
  },
  {
    id: "bento_portal",
    title: "Shopify Polaris Enterprise Client Portal",
    eyebrow: "TRANSPARANSI PROYEK (/portal)",
    badge: "RUANG KERJA KLIEN",
    subtitle: "Dashboard khusus klien Abinest untuk memantau progres milestone, unduh invoice, dan audit log otomasi.",
    tags: ["Shopify Polaris", "Supabase Auth", "Realtime Milestones"],
    gridSpan: "lg:col-span-12",
    aspectClass: "aspect-[21/9] sm:aspect-[24/9] min-h-[180px]",
    imageUrl: "", // Siap diisi: "/images/projects/polaris-portal.webp"
    mockupType: "polaris_portal",
    metricHighlight: "100% Transparan",
    metricLabel: "Progres & Tagihan Real-Time",
  },
];

export function GroveBentoGrid() {
  const [selectedPreview, setSelectedPreview] = useState<BentoItem | null>(null);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="systems" className="bg-[#F4F1EA] py-16 sm:py-24 font-sans border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header (Grove Minimalist Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A] mb-1.5">
              KATALOG ARSITEKTUR &amp; BENTO SHOWCASE
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A201C]">
              Ekosistem Sistem Rekayasa Abinest
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#6B736C] max-w-xl leading-relaxed">
              Arsitektur terintegrasi dalam format Bento Grid modular. Setiap kotak dirancang dengan bingkai gambar beresolusi tinggi yang siap menampilkan screenshot produk nyata Anda.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#18362B] text-emerald-100">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>Bento UI v2.0</span>
            </span>
          </div>
        </div>

        {/* 12-COLUMN ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {ABINEST_BENTO_ITEMS.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className={`group bg-white rounded-2xl border border-[#E5E0D5] hover:border-[#18362B]/60 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-lg transition-all duration-300 ${item.gridSpan}`}
            >
              <div>
                {/* Top Card Meta */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#F0ECE4]">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider text-[#D15B3A]">
                      {item.eyebrow}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold text-[#18362B] bg-[#18362B]/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3 w-3 text-[#18362B]" />
                      <span>{item.badge}</span>
                    </span>

                    <button
                      onClick={() => setSelectedPreview(item)}
                      aria-label="Perbesar Pratinjau Sistem"
                      className="h-7 w-7 rounded-full bg-[#FAF9F6] border border-[#DDD7C9] text-[#717872] hover:text-[#18362B] hover:bg-white flex items-center justify-center transition-colors"
                    >
                      <Maximize2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* DEDICATED IMAGE CONTAINER / SCREENSHOT FRAME */}
                <div className="relative w-full rounded-xl overflow-hidden bg-[#18362B] border border-[#E0DBD0] group/img mb-4">
                  <div className={`w-full ${item.aspectClass} relative`}>
                    {item.imageUrl ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover/img:scale-103 transition-transform duration-700 ease-out"
                      />
                    ) : (
                      <BentoVectorMockup
                        mockupType={item.mockupType}
                        title={item.title}
                        metricHighlight={item.metricHighlight}
                      />
                    )}

                    {/* Image Placeholder Overlay Indicator */}
                    <div className="absolute top-2.5 left-2.5 pointer-events-none z-10">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[9px] font-mono font-medium bg-black/60 backdrop-blur-sm text-emerald-200 border border-white/10">
                        <ImageIcon className="h-2.5 w-2.5 text-emerald-400" />
                        <span>Slot Gambar Siap Pakai</span>
                      </span>
                    </div>

                    {/* Click-to-preview hover backdrop */}
                    <div
                      onClick={() => setSelectedPreview(item)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                    >
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#18362B] text-xs font-semibold shadow-md flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-[#18362B]" />
                        <span>Lihat Ukuran Penuh</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#1A201C] group-hover:text-[#18362B] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#6B736C] mt-1.5 leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Tags & Telemetry CTA */}
              <div className="pt-3 mt-3 border-t border-[#F0ECE4] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#DDD7C9] text-[10px] font-mono text-[#1A201C]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#18362B] hover:text-[#D15B3A] transition-colors"
                >
                  <span>Konsultasi</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid Footer Banner */}
        <div className="mt-8 rounded-2xl bg-[#18362B] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Butuh Arsitektur Sistem Kustom untuk Institusi Anda?
              </h4>
              <p className="text-xs text-emerald-100/70 mt-0.5">
                Abinest merancang sistem SIAKAD, ERP, dan integrasi API yang disesuaikan persis dengan alur kerja organisasi Anda.
              </p>
            </div>
          </div>

          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#18362B] text-xs font-bold hover:bg-[#F4F1EA] transition-colors shadow-sm"
          >
            Diskusikan Kebutuhan Sistem →
          </a>
        </div>
      </div>

      {/* FULL PREVIEW MODAL LIGHTBOX */}
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#18362B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl text-white"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold tracking-wider">
                    {selectedPreview.eyebrow}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-heading text-white">
                    {selectedPreview.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedPreview(null)}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-colors"
                >
                  Tutup ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-5 sm:p-6">
                <div className="rounded-2xl border border-white/10 bg-black/50 p-2 overflow-hidden aspect-[16/9]">
                  {selectedPreview.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={selectedPreview.imageUrl}
                      alt={selectedPreview.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  ) : (
                    <BentoVectorMockup
                      mockupType={selectedPreview.mockupType}
                      title={selectedPreview.title}
                      metricHighlight={selectedPreview.metricHighlight}
                    />
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl">
                    {selectedPreview.subtitle}
                  </p>
                  <a
                    href="#konsultasi"
                    onClick={() => {
                      setSelectedPreview(null);
                      const el = document.getElementById("konsultasi");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-5 py-2.5 rounded-full bg-white text-[#18362B] text-xs font-bold hover:bg-[#F4F1EA]"
                  >
                    Konsultasi Sistem Ini →
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
 * Komponen Vector Mockup Beresolusi Tinggi untuk Setiap Tipe Bento
 */
function BentoVectorMockup({
  mockupType,
  title,
  metricHighlight,
}: {
  mockupType: BentoItem["mockupType"];
  title: string;
  metricHighlight: string;
}) {
  switch (mockupType) {
    case "siakad":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-br from-[#0B1A14] via-[#122B21] to-[#0A1712] text-white flex flex-col justify-between select-none">
          {/* Browser Chrome Header */}
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-[10px] text-emerald-200/60 hidden sm:inline">
                siakad.abinest.id/grades
              </span>
            </div>
            <span className="font-mono text-[9px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              ● RLS ENFORCED
            </span>
          </div>

          {/* Mock Dashboard Grid */}
          <div className="grid grid-cols-12 gap-2.5 my-auto py-1">
            <div className="col-span-3 rounded-lg bg-black/40 border border-white/5 p-2 space-y-1.5">
              <div className="h-1.5 w-12 bg-emerald-700/60 rounded" />
              <div className="h-1.5 w-16 bg-white/20 rounded" />
              <div className="h-1.5 w-10 bg-white/10 rounded" />
            </div>
            <div className="col-span-9 rounded-lg bg-black/50 border border-white/5 p-2.5 space-y-1.5">
              <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[10px]">
                <span className="font-bold text-white">Buku Nilai &amp; Rapor Siswa</span>
                <span className="font-mono text-emerald-300">4.200 Siswa Terdaftar</span>
              </div>
              <div className="space-y-1 text-[9px]">
                {[1, 2].map((r) => (
                  <div key={r} className="flex items-center justify-between text-emerald-100/80 py-0.5">
                    <span className="font-mono text-emerald-300/60">SIS-00{r}</span>
                    <span>Siswa Teladan {r}</span>
                    <span className="font-mono text-emerald-400 font-bold">95.0 (A)</span>
                    <span className="px-1.5 py-0.2 rounded bg-emerald-900/60 text-emerald-300">LULUS</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-emerald-200/60">
            <span>DATABASE: SUPABASE POSTGRESQL</span>
            <span className="text-emerald-400 font-bold">{metricHighlight}</span>
          </div>
        </div>
      );

    case "whatsapp":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#061B13] via-[#0A261B] to-[#04120D] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">WA CLOUD API GATEWAY</span>
            <span className="text-emerald-400 font-bold">ACTIVE</span>
          </div>
          <div className="space-y-2 my-auto max-w-[200px] mx-auto w-full">
            <div className="p-2 rounded-xl rounded-tl-none bg-[#143B2B] border border-emerald-600/30 text-left">
              <p className="text-[10px] text-emerald-100 leading-snug">
                Halo Bpk. Ahmad, Rapor Akademik Siswa telah siap diunduh.
              </p>
              <span className="block text-right text-[8px] text-emerald-300 mt-1">11:42 ✓✓</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-300/70">
            Resilient Exponential Backoff 5x
          </div>
        </div>
      );

    case "pdf_worker":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0F241B] via-[#0B1A13] to-[#06120C] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">UPSTASH QSTASH DISPATCHER</span>
            <span className="text-emerald-400 font-bold">100% DONE</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white">Batch-Rapor-2026.pdf</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">500+ PDF</span>
            </div>
            <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-full" />
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-emerald-200/60">
            <span>Signed S3 Storage</span>
            <span className="text-emerald-400">&lt; 45s Batch</span>
          </div>
        </div>
      );

    case "omnichannel":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#122A1E] via-[#0D1E16] to-[#08150F] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-amber-300">ATOMIC STOCK LOCK</span>
            <span className="text-emerald-400">&lt; 150ms SYNC</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto text-center">
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="block text-[8px] text-emerald-300 font-mono">Marketplace</span>
              <span className="text-[10px] font-bold text-white">Tokopedia &amp; Shopee</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="block text-[8px] text-emerald-300 font-mono">Akurasi Stok</span>
              <span className="text-[10px] font-bold text-emerald-400">0% Overselling</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-200/60">
            Supabase Realtime Sync Engine
          </div>
        </div>
      );

    case "rls_security":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0A1A13] via-[#07150E] to-[#040C08] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">POSTGRESQL RLS GUARD</span>
            <span className="text-emerald-400">MULTI-TENANT</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 my-auto text-center">
            {["Admin", "Guru", "Siswa"].map((role) => (
              <div key={role} className="p-1.5 rounded bg-black/40 border border-white/5">
                <Lock className="h-3 w-3 text-emerald-400 mx-auto mb-0.5" />
                <span className="block text-[9px] font-bold text-white">{role}</span>
                <span className="block text-[7px] text-emerald-300/80">ISOLATED</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-200/60">
            Zero-Trust Data Protection
          </div>
        </div>
      );

    case "polaris_portal":
      return (
        <div className="w-full h-full p-4 sm:p-5 bg-gradient-to-r from-[#0C1F16] via-[#102B1F] to-[#0B1C14] text-white flex flex-col sm:flex-row items-center justify-between gap-4 select-none">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <span className="font-mono text-[9px] text-emerald-300 uppercase tracking-widest block">
                SHOPIFY POLARIS ENTERPRISE WORKSPACE
              </span>
              <h4 className="text-sm font-bold text-white">
                Client Portal Terisolasi (/portal)
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="px-3 py-1 rounded bg-black/40 border border-white/10 text-emerald-300">
              Milestone: 85% Selesai
            </span>
            <span className="px-3 py-1 rounded bg-emerald-900/60 text-emerald-300 border border-emerald-700/50">
              Invoice #INV-2026 • LUNAS
            </span>
          </div>
        </div>
      );
  }
}
