"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Eye,
  Lock,
  Maximize2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  FileText,
  MessageSquare,
  Users,
  Activity,
  Layers,
  Zap,
  Globe,
  Database,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface BentoItem {
  id: string;
  title: string;
  eyebrow: string;
  badge: string;
  subtitle: string;
  tags: string[];
  gridSpan: string;
  aspectClass: string;
  mockupType: "siakad" | "whatsapp" | "pdf_worker" | "omnichannel" | "polaris_portal" | "website";
  metricHighlight: string;
  metricLabel: string;
}

const getBentoItems = (lang: "id" | "en"): BentoItem[] => [
  {
    id: "bento_siakad",
    title: lang === "id" ? "SIAKAD Sekolah & Yayasan Anti-Down" : "Crash-Proof School & Foundation SIAKAD",
    eyebrow: lang === "id" ? "SISTEM INFORMASI AKADEMIK" : "ACADEMIC SYSTEM",
    badge: "99.9% UPTIME SLA",
    subtitle:
      lang === "id"
        ? "Sistem informasi akademik yang tetap responsif meski ratusan hingga ribuan siswa mengakses bersamaan. Dilengkapi buku nilai digital, ujian online, dan cetak rapor otomatis."
        : "Academic information system engineered to stay responsive under peak concurrent traffic. Includes digital gradebooks, online exams, and batch report cards.",
    tags: ["EdTech & Yayasan", "Next.js 15", "PostgreSQL RLS", "Anti-Crash"],
    gridSpan: "lg:col-span-8",
    aspectClass: "aspect-[16/9] sm:aspect-[16/10]",
    mockupType: "siakad",
    metricHighlight: "0% Server Crash",
    metricLabel: "1.200 Siswa Ujian Serentak",
  },
  {
    id: "bento_whatsapp",
    title: lang === "id" ? "WhatsApp Notification Gateway & Chatbot" : "WhatsApp Notification Gateway & Bot",
    eyebrow: lang === "id" ? "OTOMASI WHATSAPP RESMI" : "B2B WA AUTOMATION",
    badge: "< 2s TERKIRIM",
    subtitle:
      lang === "id"
        ? "Kirim tagihan SPP, notifikasi absensi, pengumuman, dan balasan otomatis melalui WhatsApp resmi Meta Cloud API. Terintegrasi langsung dengan sistem Anda."
        : "Automated delivery for tuition invoices, attendance alerts, and payment receipts via official Meta Cloud API within 2 seconds.",
    tags: ["Meta Cloud API", "Otomasi Tagihan", "24/7 Aktif"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
    mockupType: "whatsapp",
    metricHighlight: "< 2 Detik",
    metricLabel: "Pengiriman Otomatis",
  },
  {
    id: "bento_pdf_worker",
    title: lang === "id" ? "Mesin Cetak Rapor & Dokumen PDF Otomatis" : "High-Speed Batch PDF Report Engine",
    eyebrow: lang === "id" ? "PARALLEL CLOUD WORKER" : "CLOUD PDF WORKER",
    badge: "500+ PDF / <45s",
    subtitle:
      lang === "id"
        ? "Generate ratusan hingga ribuan PDF rapor dalam hitungan detik tanpa membebani server utama."
        : "Generate hundreds of school report cards or tax invoices in seconds via decoupled cloud workers without slowing down the primary app.",
    tags: ["Decoupled Queue", "Puppeteer Worker", "Supabase Storage"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
    mockupType: "pdf_worker",
    metricHighlight: "< 38 Detik",
    metricLabel: "520 Rapor Selesai",
  },
  {
    id: "bento_omnichannel",
    title: lang === "id" ? "ERP & Manajemen Stok Omnichannel" : "Omnichannel Inventory & ERP Hub",
    eyebrow: lang === "id" ? "SISTEM MANAJEMEN ENTERPRISE" : "ENTERPRISE ERP",
    badge: "< 150ms SYNC",
    subtitle:
      lang === "id"
        ? "Kelola inventori, penjualan multi-channel, dan keuangan dalam satu sistem yang sinkron real-time."
        : "Centralized real-time inventory synchronization across physical retail stores and digital marketplaces (Shopee, Tokopedia, TikTok Shop).",
    tags: ["Multi-Store POS", "Automated Ledger", "Zero Stock Drift"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
    mockupType: "omnichannel",
    metricHighlight: "0% Selisih Stok",
    metricLabel: "Sinkronisasi Real-Time",
  },
  {
    id: "bento_polaris_portal",
    title: lang === "id" ? "Enterprise Client Portal" : "Enterprise Client Portal",
    eyebrow: lang === "id" ? "TRANSPARANSI PROYEK KLIEN" : "CLIENT ACCESS HUB",
    badge: "LIVE TELEMETRY",
    subtitle:
      lang === "id"
        ? "Setiap klien mendapatkan akses khusus untuk memantau progres pengerjaan, melihat milestone, dan mengunduh invoice secara transparan."
        : "Every client receives dedicated credentials to track development milestones, inspect live server SLA telemetry, and download official invoices.",
    tags: ["Shopify Polaris UI", "Real-Time Tracking", "Invoice & SLA"],
    gridSpan: "lg:col-span-4",
    aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
    mockupType: "polaris_portal",
    metricHighlight: "Transparansi 100%",
    metricLabel: "Akses Klien Terpadu",
  },
  {
    id: "bento_website",
    title: lang === "id" ? "Website Institusi Super Cepat" : "High-Performance Institutional Website",
    eyebrow: lang === "id" ? "NEXT.JS 15 APP ROUTER" : "MODERN WEB ARCHITECTURE",
    badge: "LIGHTHOUSE 100",
    subtitle:
      lang === "id"
        ? "Dibangun dengan Next.js 15, skor Lighthouse 95–100, siap untuk SEO dan performa tinggi tanpa membuat pengunjung menunggu lama."
        : "Engineered on Next.js 15 with 95–100 Lighthouse benchmark, sub-second LCP, and top-tier SEO visibility for institutions.",
    tags: ["Lighthouse 95–100", "LCP < 0.8s", "SEO Ready"],
    gridSpan: "lg:col-span-12",
    aspectClass: "aspect-[21/9] sm:aspect-[24/10]",
    mockupType: "website",
    metricHighlight: "Skor 100",
    metricLabel: "LCP 0.6s • Sub-Second Loading",
  },
];

export function GroveBentoGrid() {
  const { lang } = useLanguage();
  const bentoItems = getBentoItems(lang);
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
    <section id="systems" className="bg-[#FFFFFF] py-16 sm:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#0F766E]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
                {lang === "id"
                  ? "KATALOG LAYANAN & SISTEM DIGITAL"
                  : "DIGITAL SYSTEMS CATALOG"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
              {lang === "id"
                ? "Solusi lengkap untuk website, sistem, dan otomasi."
                : "Comprehensive solutions for web, systems & automation."}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
              {lang === "id"
                ? "Kami tidak hanya membuat aplikasi. Kami merancang infrastruktur digital yang cepat, aman, dan siap berkembang bersama institusi Anda."
                : "We do not just ship apps. We engineer fast, decoupled, secure digital infrastructure designed to endure and scale alongside your institution."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-teal-50 text-[#0F766E] border border-teal-200 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#0F766E]" />
              <span>{lang === "id" ? "Arsitektur Enterprise" : "Enterprise Architecture"}</span>
            </span>
          </div>
        </div>

        {/* 12-COLUMN BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border border-slate-200 hover:border-[#0F766E] p-4 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 ${item.gridSpan}`}
            >
              <div>
                {/* Top Card Meta */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider text-[#0F766E]">
                    {item.eyebrow}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-50 border border-teal-200 text-[#0F766E]">
                    {item.badge}
                  </span>
                </div>

                {/* VISUAL PRODUCTION MOCKUP FRAME (NO PLACEHOLDERS) */}
                <div className="rounded-xl overflow-hidden border border-slate-200 shadow-xs mb-4 bg-slate-900 group/img relative">
                  <div className={`w-full ${item.aspectClass} relative`}>
                    <BentoVectorMockup
                      mockupType={item.mockupType}
                      title={item.title}
                      metricHighlight={item.metricHighlight}
                    />

                    {/* Preview overlay */}
                    <div
                      onClick={() => setSelectedPreview(item)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                    >
                      <span className="px-3.5 py-1.5 rounded-full bg-white text-[#0F766E] text-xs font-semibold shadow-md flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-[#0F766E]" />
                        <span>{lang === "id" ? "Lihat Detail Sistem" : "Inspect System Details"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0F172A] hover:text-[#0F766E] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Tags & CTA */}
              <div className="pt-3 mt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E] hover:text-[#115E59] transition-colors"
                >
                  <span>{lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid Footer Callout */}
        <div className="mt-8 rounded-2xl bg-[#0F172A] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm border border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === "id"
                  ? "Punya Kebutuhan Sistem Khusus untuk Lembaga Anda?"
                  : "Need a Custom Software Architecture for Your Institution?"}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {lang === "id"
                  ? "Konsultasikan kebutuhan pembuatan website, sistem administrasi, atau bot otomasi bisnis Anda langsung bersama tim teknis Abinest."
                  : "Discuss your custom web application, enterprise management system, or automated B2B workflows directly with Abinest engineers."}
              </p>
            </div>
          </div>

          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#0F172A] text-xs font-bold hover:bg-slate-100 transition-colors shadow-sm"
          >
            {lang === "id" ? "Konsultasi Gratis Sekarang →" : "Start Free Consultation →"}
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
              className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono text-[#0F766E] uppercase font-bold tracking-wider">
                    {selectedPreview.eyebrow}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    {selectedPreview.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPreview(null)}
                  className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 text-xs font-bold"
                >
                  Tutup ✕
                </button>
              </div>

              <div className="rounded-xl overflow-hidden border border-slate-200 min-h-[280px]">
                <BentoVectorMockup
                  mockupType={selectedPreview.mockupType}
                  title={selectedPreview.title}
                  metricHighlight={selectedPreview.metricHighlight}
                />
              </div>

              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {selectedPreview.subtitle}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-[#0F766E]">
                  {selectedPreview.metricLabel} • {selectedPreview.metricHighlight}
                </span>
                <a
                  href="#konsultasi"
                  onClick={() => setSelectedPreview(null)}
                  className="px-5 py-2 rounded-full bg-[#0F766E] text-white text-xs font-bold hover:bg-[#115E59]"
                >
                  Konsultasikan Sistem Ini →
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

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
          <div className="flex items-center justify-between pb-2.5 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500" />
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="ml-2 font-mono text-[10px] text-emerald-200/80 hidden sm:inline">
                https://siakad.sekolah-mandiri.sch.id/live-monitor
              </span>
            </div>
            <span className="font-mono text-[9px] text-emerald-300 bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-800 font-semibold">
              ● SERVER STABIL 99.9%
            </span>
          </div>

          <div className="grid grid-cols-12 gap-3 my-auto py-2">
            <div className="col-span-4 rounded-lg bg-black/40 border border-white/10 p-2.5 space-y-2">
              <span className="text-[10px] font-mono text-zinc-400 block">STATUS UJIAN ONLINE</span>
              <span className="text-sm font-bold text-emerald-400 block">1.200 Siswa Login</span>
              <span className="text-[9px] font-mono text-zinc-300 block">Beban Server: 18% (Aman)</span>
            </div>
            <div className="col-span-8 rounded-lg bg-black/50 border border-white/10 p-2.5 space-y-1.5">
              <div className="flex items-center justify-between pb-1 border-b border-white/10 text-[10px]">
                <span className="font-bold text-white">Buku Nilai &amp; Rapor Siswa</span>
                <span className="font-mono text-emerald-300">Kelas X &amp; XI Lengkap</span>
              </div>
              <div className="space-y-1 text-[9px]">
                <div className="flex items-center justify-between text-emerald-100/90 py-0.5">
                  <span className="font-mono text-zinc-400">NISN: 008129</span>
                  <span>Ahmad Fauzi (IPA 1)</span>
                  <span className="font-mono text-emerald-400 font-bold">96.5 (A)</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-900/80 text-emerald-300 text-[8px]">RAPOR SIAP</span>
                </div>
                <div className="flex items-center justify-between text-emerald-100/90 py-0.5">
                  <span className="font-mono text-zinc-400">NISN: 008130</span>
                  <span>Siti Aisyah (IPA 1)</span>
                  <span className="font-mono text-emerald-400 font-bold">94.0 (A)</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-900/80 text-emerald-300 text-[8px]">RAPOR SIAP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-emerald-200/80">
            <span>SIAKAD CORE ARCHITECTURE</span>
            <span className="text-emerald-400 font-bold">{metricHighlight}</span>
          </div>
        </div>
      );

    case "whatsapp":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#061B13] via-[#0A261B] to-[#04120D] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              WA CLOUD API GATEWAY
            </span>
            <span className="text-emerald-400 font-bold">ONLINE</span>
          </div>
          <div className="space-y-2 my-auto max-w-[240px] mx-auto w-full">
            <div className="p-2.5 rounded-xl rounded-tl-none bg-[#143B2B] border border-emerald-600/30 text-left space-y-1">
              <p className="text-[10px] text-emerald-100 leading-snug">
                Yth. Wali Murid, Tagihan SPP &amp; Buku Rapor Semester Ganjil an. <strong>Ahmad Fauzi</strong> telah terbit.
              </p>
              <div className="p-1.5 rounded bg-black/30 text-[9px] font-mono text-emerald-300 flex items-center justify-between">
                <span>📄 Rapor_S1_2026.pdf</span>
                <span className="text-emerald-400">TERVERIFIKASI ✓✓</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-emerald-300">
            <span>DISPATCH SPEED: &lt; 2 DETIK</span>
            <span className="text-emerald-400 font-bold">100% TERKIRIM</span>
          </div>
        </div>
      );

    case "pdf_worker":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0A0F1D] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-blue-300">PARALLEL PDF ENGINE</span>
            <span className="text-blue-400 font-bold">520/520 SELESAI</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-slate-300">Proses Cetak Paralel Cloud</span>
                <span className="text-blue-400 font-bold">38.2 Detik</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full w-full" />
              </div>
              <span className="text-[9px] font-mono text-slate-400 block">520 Berkas PDF Tersimpan di CDN</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-blue-300">
            <span>BEBAN SERVER UTAMA: 0%</span>
            <span className="text-blue-400 font-bold">&lt; 45s GENERATION</span>
          </div>
        </div>
      );

    case "omnichannel":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0B1528] via-[#102242] to-[#070E1C] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-sky-300">OMNICHANNEL STOCK HUB</span>
            <span className="text-sky-400 font-bold">SYNC: 120ms</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto text-center text-[10px]">
            <div className="p-2 rounded bg-black/40 border border-white/10">
              <span className="text-[8px] font-mono text-slate-400 block">TOKO OFFLINE</span>
              <span className="text-sm font-bold text-white block mt-0.5">840 Unit</span>
              <span className="text-[8px] text-emerald-400 font-mono">POS AKTIF</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10">
              <span className="text-[8px] font-mono text-slate-400 block">SHOPEE / TOKPED</span>
              <span className="text-sm font-bold text-white block mt-0.5">840 Unit</span>
              <span className="text-[8px] text-emerald-400 font-mono">REAL-TIME</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/10">
              <span className="text-[8px] font-mono text-slate-400 block">SELISIH STOK</span>
              <span className="text-sm font-bold text-emerald-400 block mt-0.5">0 Unit</span>
              <span className="text-[8px] text-slate-400 font-mono">AKURAT 100%</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-sky-300">
            <span>DATABASE ISOLATION: ACTIVE</span>
            <span className="text-sky-400 font-bold">RLS ROW-LEVEL</span>
          </div>
        </div>
      );

    case "polaris_portal":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#08151E] via-[#0E2332] to-[#050D14] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-teal-300">CLIENT PORTAL TELEMETRY</span>
            <span className="text-teal-400 font-bold">AKSES KLIEN AKTIF</span>
          </div>
          <div className="space-y-1.5 my-auto">
            <div className="p-2.5 rounded-lg bg-black/40 border border-white/10 space-y-1 text-[10px]">
              <div className="flex justify-between font-bold">
                <span className="text-white">Proyek SIAKAD &amp; Gateway WA</span>
                <span className="text-emerald-400">Milestone 4/4 (Live)</span>
              </div>
              <div className="flex justify-between text-slate-400 text-[9px] font-mono">
                <span>Invoice: INV-2026-004 (Lunas)</span>
                <span>SLA Uptime: 99.98%</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[9px] font-mono text-teal-300">
            <span>REAL-TIME MILESTONE TRACKER</span>
            <span className="text-teal-400 font-bold">TRANSPARAN 100%</span>
          </div>
        </div>
      );

    case "website":
      return (
        <div className="w-full h-full p-5 bg-gradient-to-br from-[#070D18] via-[#0D192E] to-[#040810] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs font-mono">
            <span className="text-emerald-300 flex items-center gap-2">
              <Globe className="h-4 w-4 text-emerald-400" />
              GOOGLE LIGHTHOUSE AUDIT • PRODUCTION DOMAIN
            </span>
            <span className="text-emerald-400 font-bold">NEXT.JS 15 APP ROUTER</span>
          </div>
          <div className="grid grid-cols-4 gap-4 my-auto text-center py-2">
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">100</span>
              <span className="text-[10px] font-mono text-zinc-300 uppercase block mt-1">Performance</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">100</span>
              <span className="text-[10px] font-mono text-zinc-300 uppercase block mt-1">Accessibility</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">100</span>
              <span className="text-[10px] font-mono text-zinc-300 uppercase block mt-1">Best Practices</span>
            </div>
            <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/30">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 block">100</span>
              <span className="text-[10px] font-mono text-zinc-300 uppercase block mt-1">SEO Readiness</span>
            </div>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-zinc-400">
            <span>LARGEST CONTENTFUL PAINT (LCP): 0.6s</span>
            <span className="text-emerald-400 font-bold">SUB-SECOND VELOCITY</span>
          </div>
        </div>
      );
  }
}
