"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Cpu,
  Eye,
  ImageIcon,
  Lock,
  Maximize2,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
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
  imageUrl?: string;
  mockupType: "siakad" | "whatsapp" | "pdf_worker" | "omnichannel" | "rls_security" | "polaris_portal";
  metricHighlight: string;
  metricLabel: string;
}

const getBentoItems = (lang: "id" | "en"): BentoItem[] => {
  if (lang === "en") {
    return [
      {
        id: "bento_siakad",
        title: "Modern School SIAKAD & Digital Gradebook",
        eyebrow: "ACADEMIC INFORMATION SYSTEM",
        badge: "99.9% UPTIME SLA",
        subtitle: "Integrated academic software for schools and foundations. Simultaneous online exams and tuition fee billing remain uninterrupted without server crashes during peak traffic.",
        tags: ["EdTech & Foundations", "Next.js 15", "PostgreSQL", "Anti-Crash"],
        gridSpan: "lg:col-span-8",
        aspectClass: "aspect-[16/9] sm:aspect-[16/10]",
        imageUrl: "",
        mockupType: "siakad",
        metricHighlight: "0% Server Crash",
        metricLabel: "4,200 Student Exam Load",
      },
      {
        id: "bento_whatsapp",
        title: "WhatsApp Notification Gateway & Chatbot",
        eyebrow: "B2B AUTOMATION & MESSAGING",
        badge: "< 2s DISPATCH",
        subtitle: "Automated WhatsApp delivery for tuition reminders, payment receipts, attendance alerts, and order confirmations within 2 seconds.",
        tags: ["Meta Cloud API", "Automated Dispatch", "24/7 Resilient"],
        gridSpan: "lg:col-span-4",
        aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
        imageUrl: "",
        mockupType: "whatsapp",
        metricHighlight: "< 2 Seconds",
        metricLabel: "24/7 Automated Dispatch",
      },
      {
        id: "bento_pdf",
        title: "Parallel PDF Batch Report Card Engine",
        eyebrow: "HIGH-SPEED DOCUMENT AUTOMATION",
        badge: "500+ PDF / <45s",
        subtitle: "One-click generation of hundreds of student report card PDFs in asynchronous background workers without freezing administrative systems.",
        tags: ["Batch Report Generation", "S3 Storage", "Official Format"],
        gridSpan: "lg:col-span-4",
        aspectClass: "aspect-[4/3]",
        imageUrl: "",
        mockupType: "pdf_worker",
        metricHighlight: "< 45 Seconds",
        metricLabel: "500+ Reports / Single Click",
      },
      {
        id: "bento_omnichannel",
        title: "Atomic Inventory & Omnichannel Hub",
        eyebrow: "ERP & E-COMMERCE SYNC",
        badge: "REAL-TIME SYNC",
        subtitle: "Real-time stock synchronization across Shopee, Tokopedia, TikTok Shop, and offline stores. Zero order cancellations due to overselling.",
        tags: ["Multi-Marketplace", "Anti-Oversell", "Sync < 150ms"],
        gridSpan: "lg:col-span-4",
        aspectClass: "aspect-[4/3]",
        imageUrl: "",
        mockupType: "omnichannel",
        metricHighlight: "0% Overselling",
        metricLabel: "Multi-Warehouse Sync",
      },
      {
        id: "bento_rls",
        title: "Multi-Tenant Database Security (PostgreSQL RLS)",
        eyebrow: "DATA PROTECTION GUARANTEE",
        badge: "100% ISOLATED",
        subtitle: "Your foundation records, student grades, and financial ledger locked with PostgreSQL Row Level Security. Only authorized roles access designated records.",
        tags: ["Guaranteed Privacy", "SQL Encryption", "Zero-Trust"],
        gridSpan: "lg:col-span-4",
        aspectClass: "aspect-[4/3]",
        imageUrl: "",
        mockupType: "rls_security",
        metricHighlight: "100% Protected",
        metricLabel: "Per-Tenant Isolation",
      },
      {
        id: "bento_portal",
        title: "Enterprise Client Portal: Live Engineering Visibility",
        eyebrow: "EXCLUSIVE CLIENT SUITE (/portal)",
        badge: "FULL TRANSPARENCY",
        subtitle: "Every Abinest client receives dedicated access to a Shopify Polaris-powered portal to track development milestones, download official invoices, and test live webhooks.",
        tags: ["Shopify Polaris", "Live Milestone Tracking", "Automated Invoices"],
        gridSpan: "lg:col-span-12",
        aspectClass: "aspect-[21/9] sm:aspect-[24/9] min-h-[170px]",
        imageUrl: "",
        mockupType: "polaris_portal",
        metricHighlight: "100% Transparent",
        metricLabel: "Direct Access to /portal",
      },
    ];
  }

  return [
    {
      id: "bento_siakad",
      title: "SIAKAD Sekolah Modern & Buku Nilai Digital",
      eyebrow: "JASA SISTEM INFORMASI AKADEMIK",
      badge: "SLA 99.9% UPTIME",
      subtitle: "Sistem informasi akademik terpadu untuk sekolah dan yayasan. Ujian online dan modul SPP tetap lancar tanpa risiko server down saat diakses ribuan siswa bersamaan.",
      tags: ["Sekolah & Yayasan", "Next.js 15", "PostgreSQL", "Anti-Down"],
      gridSpan: "lg:col-span-8",
      aspectClass: "aspect-[16/9] sm:aspect-[16/10]",
      imageUrl: "",
      mockupType: "siakad",
      metricHighlight: "0% Server Crash",
      metricLabel: "Trafik Ujian 4.200 Siswa",
    },
    {
      id: "bento_whatsapp",
      title: "WhatsApp Notification Gateway & Chatbot",
      eyebrow: "JASA OTOMASI BISNIS & WHATSAPP",
      badge: "< 2s TERKIRIM",
      subtitle: "Kirim pesan WhatsApp otomatis untuk pengingat SPP, bukti pembayaran, notifikasi absensi, dan alert pesanan pelanggan dalam 2 detik.",
      tags: ["Meta Cloud API", "Pesan Otomatis", "Anti-Gagal 24/7"],
      gridSpan: "lg:col-span-4",
      aspectClass: "aspect-[4/3] sm:aspect-[4/5]",
      imageUrl: "",
      mockupType: "whatsapp",
      metricHighlight: "< 2 Detik",
      metricLabel: "Terkirim Otomatis 24/7",
    },
    {
      id: "bento_pdf",
      title: "Mesin Cetak Rapor PDF Otomatis",
      eyebrow: "OTOMASI DOKUMEN CEPAT",
      badge: "500+ PDF / <45s",
      subtitle: "Sekali klik, ratusan PDF rapor siswa langsung terbuat otomatis di background worker tanpa membuat komputer guru atau server sekolah macet.",
      tags: ["Rapor Otomatis", "Cloud Storage", "Format Resmi"],
      gridSpan: "lg:col-span-4",
      aspectClass: "aspect-[4/3]",
      imageUrl: "",
      mockupType: "pdf_worker",
      metricHighlight: "< 45 Detik",
      metricLabel: "500+ Rapor PDF Sekali Klik",
    },
    {
      id: "bento_omnichannel",
      title: "Manajemen Stok & Omnichannel Hub",
      eyebrow: "JASA SISTEM ERP & E-COMMERCE",
      badge: "SYNC REAL-TIME",
      subtitle: "Penyelarasan stok otomatis lintas Shopee, Tokopedia, TikTok Shop, dan toko fisik secara real-time. Tidak ada lagi pesanan batal karena overselling.",
      tags: ["Multi-Marketplace", "Anti-Overselling", "Sync < 150ms"],
      gridSpan: "lg:col-span-4",
      aspectClass: "aspect-[4/3]",
      imageUrl: "",
      mockupType: "omnichannel",
      metricHighlight: "0% Overselling",
      metricLabel: "Sinkronisasi Multi-Gudang",
    },
    {
      id: "bento_rls",
      title: "Keamanan Database Berlapis (PostgreSQL RLS)",
      eyebrow: "JAMINAN KEAMANAN DATA",
      badge: "100% TERISOLASI",
      subtitle: "Data yayasan, nilai siswa, dan catatan keuangan Anda terkunci aman. Hanya pihak yang berwenang (Admin, Guru, Siswa, Klien) yang dapat mengakses.",
      tags: ["Privasi Terjamin", "Enkripsi SQL", "Zero-Trust"],
      gridSpan: "lg:col-span-4",
      aspectClass: "aspect-[4/3]",
      imageUrl: "",
      mockupType: "rls_security",
      metricHighlight: "100% Terlindungi",
      metricLabel: "Isolasi Data Per Organisasi",
    },
    {
      id: "bento_portal",
      title: "Enterprise Client Portal: Pantau Progres Pembuatan Sistem Anda",
      eyebrow: "FASILITAS EKSKLUSIF KLIEN ABINEST (/portal)",
      badge: "TRANSPARANSI PENUH",
      subtitle: "Setiap klien Abinest mendapatkan akses ke portal khusus berbasis Shopify Polaris untuk melihat milestone pengerjaan, mengunduh invoice resmi, dan menguji integrasi secara transparan.",
      tags: ["Shopify Polaris", "Pantau Milestone Live", "Invoice Otomatis"],
      gridSpan: "lg:col-span-12",
      aspectClass: "aspect-[21/9] sm:aspect-[24/9] min-h-[170px]",
      imageUrl: "",
      mockupType: "polaris_portal",
      metricHighlight: "100% Transparan",
      metricLabel: "Akses Langsung ke /portal",
    },
  ];
};

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
    <section id="systems" className="bg-[#F8FAFC] py-16 sm:py-24 font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#0F766E] mb-1.5 font-mono">
              {lang === "id"
                ? "KATALOG LAYANAN & SISTEM DIGITAL"
                : "DIGITAL SYSTEMS & SERVICES CATALOG"}
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A]">
              {lang === "id"
                ? "Solusi Lengkap Website, Sistem & Otomasi"
                : "Comprehensive Web, System & Automation Solutions"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#64748B] max-w-xl leading-relaxed">
              {lang === "id"
                ? "Pilih layanan yang Anda butuhkan. Kami mendesain antarmuka modern yang ramah pengguna, didukung arsitektur anti-lelet dan keamanan data terjamin."
                : "Select the system you need. We engineer intuitive modern interfaces backed by resilient high-throughput architecture and guaranteed security."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#CCFBF1] text-[#0F766E] border border-[#5EEAD4]/50 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#0F766E]" />
              <span>Bento UI Showcase</span>
            </span>
          </div>
        </div>

        {/* 12-COLUMN ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {bentoItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className={`group bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#0F766E] p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 ${item.gridSpan}`}
            >
              <div>
                {/* Top Card Meta */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-[#E2E8F0]">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider text-[#0F766E]">
                    {item.eyebrow}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono font-semibold text-[#0F766E] bg-[#CCFBF1] px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3 w-3 text-[#10B981]" />
                      <span>{item.badge}</span>
                    </span>

                    <button
                      onClick={() => setSelectedPreview(item)}
                      aria-label={lang === "id" ? "Perbesar Pratinjau Sistem" : "Zoom System Preview"}
                      className="h-7 w-7 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] hover:text-[#0F766E] hover:bg-white flex items-center justify-center transition-colors"
                    >
                      <Maximize2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>

                {/* DEDICATED IMAGE CONTAINER / SCREENSHOT FRAME */}
                <div className="relative w-full rounded-xl overflow-hidden bg-[#042F2E] border border-[#E2E8F0] group/img mb-4">
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
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[9px] font-mono font-medium bg-black/60 backdrop-blur-sm text-[#5EEAD4] border border-white/10">
                        <ImageIcon className="h-2.5 w-2.5 text-[#10B981]" />
                        <span>{lang === "id" ? "Slot Screenshot Siap Pakai" : "Production Screenshot Frame"}</span>
                      </span>
                    </div>

                    {/* Click-to-preview hover backdrop */}
                    <div
                      onClick={() => setSelectedPreview(item)}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center cursor-pointer"
                    >
                      <span className="px-3.5 py-1.5 rounded-full bg-white/95 text-[#0F766E] text-xs font-semibold shadow-md flex items-center gap-1.5">
                        <Eye className="h-3.5 w-3.5 text-[#0F766E]" />
                        <span>{lang === "id" ? "Lihat Ukuran Penuh" : "View Full Size"}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#64748B] mt-1.5 leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Tags & CTA */}
              <div className="pt-3 mt-3 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#F8FAFC] border border-[#E2E8F0] text-[10px] font-mono text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E] hover:text-[#0D9488] transition-colors"
                >
                  <span>{lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution"}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bento Grid Footer Banner */}
        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#0F172A] via-[#0D4B46] to-[#0F766E] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#5EEAD4] shrink-0">
              <Cpu className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                {lang === "id"
                  ? "Punya Kebutuhan Sistem Khusus untuk Lembaga Anda?"
                  : "Need a Custom Software Architecture for Your Institution?"}
              </h4>
              <p className="text-xs text-teal-100/80 mt-0.5">
                {lang === "id"
                  ? "Konsultasikan kebutuhan pembuatan website, sistem administrasi, atau bot otomasi bisnis Anda langsung bersama tim insinyur Abinest."
                  : "Discuss your custom web application, enterprise management system, or automated B2B workflows directly with Abinest engineers."}
              </p>
            </div>
          </div>

          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white text-[#0F766E] text-xs font-bold hover:bg-[#F0FDFA] transition-colors shadow-sm"
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
              className="relative w-full max-w-4xl bg-[#134E4A] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-white"
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#5EEAD4] uppercase font-bold tracking-wider">
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
                  <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl">
                    {selectedPreview.subtitle}
                  </p>
                  <a
                    href="#konsultasi"
                    onClick={() => {
                      setSelectedPreview(null);
                      const el = document.getElementById("konsultasi");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-5 py-2.5 rounded-full bg-white text-[#0F766E] text-xs font-bold hover:bg-[#F0FDFA] transition-colors"
                  >
                    Konsultasi Jasa Ini →
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
              <span className="ml-2 font-mono text-[10px] text-emerald-200/60 hidden sm:inline">
                siakad.sekolah-contoh.sch.id
              </span>
            </div>
            <span className="font-mono text-[9px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              ● ANTI-DOWN
            </span>
          </div>

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
            <span>SISTEM INFORMASI AKADEMIK ABINEST</span>
            <span className="text-emerald-400 font-bold">{metricHighlight}</span>
          </div>
        </div>
      );

    case "whatsapp":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#061B13] via-[#0A261B] to-[#04120D] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">WA CLOUD API GATEWAY</span>
            <span className="text-emerald-400 font-bold">AKTIF</span>
          </div>
          <div className="space-y-2 my-auto max-w-[200px] mx-auto w-full">
            <div className="p-2 rounded-xl rounded-tl-none bg-[#143B2B] border border-emerald-600/30 text-left">
              <p className="text-[10px] text-emerald-100 leading-snug">
                Halo Bpk/Ibu, Tagihan SPP &amp; Rapor Siswa telah siap diunduh.
              </p>
              <span className="block text-right text-[8px] text-emerald-300 mt-1">11:42 ✓✓</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-300/70">
            Kirim Otomatis &lt; 2 Detik
          </div>
        </div>
      );

    case "pdf_worker":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0F241B] via-[#0B1A13] to-[#06120C] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">MESIN RAPOR OTOMATIS</span>
            <span className="text-emerald-400 font-bold">100% SUKSES</span>
          </div>
          <div className="space-y-2 my-auto">
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white">Batch-Rapor-Semester.pdf</span>
              <span className="text-[9px] font-mono text-emerald-400 font-bold">500+ PDF</span>
            </div>
            <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300 w-full" />
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-emerald-200/60">
            <span>Penyimpanan Cloud Aman</span>
            <span className="text-emerald-400">&lt; 45 Detik Selesai</span>
          </div>
        </div>
      );

    case "omnichannel":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#122A1E] via-[#0D1E16] to-[#08150F] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-amber-300">SINKRONISASI STOK</span>
            <span className="text-emerald-400">&lt; 150ms REALTIME</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto text-center">
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="block text-[8px] text-emerald-300 font-mono">Marketplace</span>
              <span className="text-[10px] font-bold text-white">Tokopedia, Shopee, TikTok</span>
            </div>
            <div className="p-2 rounded bg-black/40 border border-white/5">
              <span className="block text-[8px] text-emerald-300 font-mono">Akurasi Stok</span>
              <span className="text-[10px] font-bold text-emerald-400">0% Overselling</span>
            </div>
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-200/60">
            Multi-Gudang &amp; POS Terintegrasi
          </div>
        </div>
      );

    case "rls_security":
      return (
        <div className="w-full h-full p-4 bg-gradient-to-br from-[#0A1A13] via-[#07150E] to-[#040C08] text-white flex flex-col justify-between select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10 text-[9px] font-mono">
            <span className="text-emerald-300">KEAMANAN TINGKAT TINGGI</span>
            <span className="text-emerald-400">TERISOLASI</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 my-auto text-center">
            {["Admin", "Guru", "Siswa"].map((role) => (
              <div key={role} className="p-1.5 rounded bg-black/40 border border-white/5">
                <Lock className="h-3 w-3 text-emerald-400 mx-auto mb-0.5" />
                <span className="block text-[9px] font-bold text-white">{role}</span>
                <span className="block text-[7px] text-emerald-300/80">TERPROTEKSI</span>
              </div>
            ))}
          </div>
          <div className="text-[9px] font-mono text-center text-emerald-200/60">
            Row Level Security (RLS) PostgreSQL
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
                RUANG KERJA KHUSUS KLIEN ABINEST
              </span>
              <h4 className="text-sm font-bold text-white">
                Client Portal Transparan (/portal)
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
