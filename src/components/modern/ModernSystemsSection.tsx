"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  Layers,
  Lock,
  MessageSquare,
  RefreshCw,
  Server,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const SOLUTIONS = [
  {
    id: "siakad-core",
    tag: "EDTECH INFRASTRUCTURE",
    title: "SIAKAD Modern Decoupled Core",
    metricValue: "99.98% SLA",
    metricLabel: "Beban Puncak Ujian Serentak",
    desc: "Pemisahan beban kerja arsitektural (decoupled) antara database SPP/keuangan dan portal LMS/ujian serentak untuk mencegah kepanikan server crash di jam sibuk.",
    icon: Database,
    techBadges: ["Next.js App Router", "Postgres RLS", "Connection Pooling", "Edge SSR"],
    features: [
      "0% server crash saat 4.200 siswa login serentak",
      "Isolasi izin akses multi-role (Admin, Guru, Siswa)",
      "Pencatatan nilai Kurikulum Merdeka real-time",
    ],
    ctaHref: "#konsultasi?solusi=siakad",
  },
  {
    id: "parallel-pdf",
    tag: "DISTRIBUTED WORKER",
    title: "Parallel PDF Report Engine",
    metricValue: "<45s / 500 PDF",
    metricLabel: "Render Rapor Paralel",
    desc: "Worker terdistribusi asinkron berbasis Upstash QStash yang merender ratusan dokumen rapor siswa sekaligus tanpa membebani server web utama.",
    icon: FileSpreadsheet,
    techBadges: ["Upstash QStash", "Supabase Storage", "Signed URL 60m", "Auto-Retry 5x"],
    features: [
      "Beban CPU server utama tetap di bawah 15%",
      "Penyimpanan aman di private bucket dengan signed URL",
      "Pemulihan kegagalan otomatis dengan exponential backoff",
    ],
    ctaHref: "#konsultasi?solusi=pdf_engine",
  },
  {
    id: "atomic-stock",
    tag: "OMNICHANNEL GATEWAY",
    title: "Atomic Stock & Order Hub",
    metricValue: "<150ms Sync",
    metricLabel: "0% Insiden Overselling",
    desc: "Sinkronisasi inventaris multi-gudang dan 4 marketplace besar secara atomik real-time untuk mengeliminasi pembatalan pesanan saat flash sale.",
    icon: RefreshCw,
    techBadges: ["Redis Atomic Lock", "Supabase Realtime", "Webhook Queue", "Multi-Tenant"],
    features: [
      "Penguncian stok atomik instan saat pesanan masuk",
      "Rekonsiliasi mutasi Virtual Account & QRIS otomatis",
      "Log audit transaksi real-time di Client Portal",
    ],
    ctaHref: "#konsultasi?solusi=omnichannel",
  },
  {
    id: "resilient-wa",
    tag: "TRANSACTIONAL MESSAGING",
    title: "Resilient WhatsApp Notification Gateway",
    metricValue: "<2s Dispatch",
    metricLabel: "Meta Cloud API & Backoff",
    desc: "Gateway transmisi pesan transaksi dan notifikasi tagihan berketahanan tinggi dengan algoritma retry anti-gagal dan pemantauan latensi real-time.",
    icon: MessageSquare,
    techBadges: ["Meta Cloud API", "Backoff + Jitter", "DLQ Monitor", "Audit Trail"],
    features: [
      "Pengiriman pesan sapaan & faktur tagihan otomatis",
      "Penanganan kegagalan jaringan hingga 5x percobaan",
      "Pencatatan komprehensif di public.webhook_logs",
    ],
    ctaHref: "#konsultasi?solusi=whatsapp",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

export function ModernSystemsSection() {
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
    <section id="sistem" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#0052FF]">
            <Layers className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">SOLUSI &amp; ARSITEKTUR REKAYASA</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Direkayasa untuk Beban Nyata,{" "}
            <span className="text-[#0052FF]">Bukan Sekadar Demo.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Setiap modul dirancang dari nol dengan arsitektur terpisah, toleransi kegagalan jaringan, dan jaminan keamanan data enterprise.
          </p>
        </div>

        {/* 4 Systems Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {SOLUTIONS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon, Tag & Metric */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#0052FF] border border-blue-100/80">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="text-right font-mono">
                      <span className="text-xl sm:text-2xl font-bold text-[#09090B] block">
                        {item.metricValue}
                      </span>
                      <span className="text-[11px] text-[#10B981] font-semibold block">
                        {item.metricLabel}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tag */}
                  <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#0052FF] block mb-1">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#09090B] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mt-3 mb-6">
                    {item.desc}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-2.5 pb-6 border-b border-slate-100">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#09090B]">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-5 mb-8">
                    {item.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-mono text-[#475569]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Link */}
                <motion.a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-5 rounded-full bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-[#09090B] hover:bg-[#0052FF] hover:text-white hover:border-[#0052FF] transition-all flex items-center justify-center gap-2"
                >
                  <span>Konsultasi Kebutuhan Sistem Ini</span>
                  <ArrowUpRight className="h-4 w-4" />
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
