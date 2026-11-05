"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Gauge,
  Layers,
  Workflow,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

const SERVICE_PILLARS = [
  {
    id: "high_perf_web",
    pillarBadge: "PILAR 01 • WEB & CONVERSION",
    metricBadge: "95–100 Lighthouse",
    metricSub: "LCP < 1.2s • CLS < 0.05 • INP < 100ms",
    title: "High-Performance & SEO-Optimized Website",
    description:
      "Arsitektur web korporat dan landing page B2B berkecepatan tinggi dengan Next.js App Router (SSR/SSG) untuk dominasi SEO organik dan konversi prospek maksimal.",
    icon: Gauge,
    isFeatured: false,
    features: [
      "Skor Google Lighthouse konsisten 95–100 di seluruh metrik Core Web Vitals",
      "Server-Side Rendering (SSR) & Static Site Generation (SSG) via Next.js App Router",
      "Implementasi JSON-LD Schema terstruktur (Organization & SoftwareApplication)",
      "Desain antarmuka B2B berkepercayaan tinggi dengan optimasi rasio konversi",
    ],
    ctaLabel: "Konsultasi Web Performa Tinggi",
    ctaHref: "#konsultasi?pillar=high_perf_web",
  },
  {
    id: "custom_siakad_erp",
    pillarBadge: "PILAR 02 • ENTERPRISE CORE",
    metricBadge: "500+ PDF / Batch",
    metricSub: "Decoupled Load • 0% Overselling",
    title: "Custom Enterprise System (SIAKAD & ERP)",
    description:
      "Rekayasa sistem informasi skala institusi dengan pemisahan beban kerja kritis dan pemrosesan dokumen paralel asinkron tanpa membebani server utama.",
    icon: Building2,
    isFeatured: true,
    features: [
      "SIAKAD Sekolah Modern: arsitektur terpisah (decoupled) antara modul Administrasi/SPP dan LMS/Ujian serentak anti-down",
      "Automated PDF Report Generator: antrean worker paralel perender ratusan PDF rapor ke Supabase Storage",
      "Omnichannel Order & Stock Hub: sinkronisasi stok real-time lintas marketplace untuk mencegah overselling",
      "Proteksi data berlapis dengan PostgreSQL Row Level Security (RLS) multi-role",
    ],
    ctaLabel: "Konsultasi Sistem SIAKAD & ERP",
    ctaHref: "#konsultasi?pillar=custom_siakad_erp",
  },
  {
    id: "business_automation",
    pillarBadge: "PILAR 03 • AUTOMATION & API",
    metricBadge: "< 2s WA Dispatch",
    metricSub: "5x Backoff Retry • Auto-Reconcile",
    title: "Business Automation & API Integration",
    description:
      "Otomasi alur kerja lintas platform dengan antrean pesan tahan gagal (resilient queue), notifikasi WhatsApp instan, dan rekonsiliasi pembayaran otomatis.",
    icon: Workflow,
    isFeatured: false,
    features: [
      "WhatsApp Notification Gateway untuk pengiriman pesan transaksional & jadwal otomatis",
      "Resilient Webhook Dispatcher anti-gagal dengan algoritma exponential backoff retry & Dead Letter Queue",
      "Integrasi Payment Gateway (Virtual Account & QRIS) instan lintas bank",
      "Rekonsiliasi transaksi & mutasi pembayaran otomatis secara real-time",
    ],
    ctaLabel: "Konsultasi Otomasi & Integrasi API",
    ctaHref: "#konsultasi?pillar=business_automation",
  },
] as const;

export function ServicePillarsSection() {
  const handleScrollToConsultation = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const target = document.getElementById("konsultasi");
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="layanan"
      className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-[#E2E8F0]/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm mb-4">
            <Layers className="h-3.5 w-3.5 text-[#2563EB]" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
              TIGA PILAR LAYANAN UTAMA
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#09090B]">
            Solusi Rekayasa Perangkat Lunak untuk{" "}
            <span className="text-[#2563EB]">Pertumbuhan Skala Enterprise</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Setiap sistem dirancang dengan fondasi arsitektur modular, kecepatan
            eksekusi terukur, serta reliabilitas tingkat produksi.
          </p>
        </motion.div>

        {/* 3-Column Service Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICE_PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                className={`rounded-3xl bg-white p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  pillar.isFeatured
                    ? "border-[#2563EB] shadow-soft-lg ring-1 ring-[#2563EB]/15"
                    : "border-[#E2E8F0] shadow-triloe-soft hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Top Row: Icon & JetBrains Mono Metric Badge */}
                  <div className="flex items-start justify-between gap-3 mb-6">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${
                        pillar.isFeatured
                          ? "bg-[#2563EB] text-white border-[#2563EB]"
                          : "bg-[#F8FAFC] text-[#2563EB] border-[#E2E8F0]"
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>

                    <div className="text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0F172A] text-white font-mono text-xs font-semibold">
                        {pillar.metricBadge}
                      </span>
                      <p className="font-mono text-[11px] text-[#64748B] mt-1">
                        {pillar.metricSub}
                      </p>
                    </div>
                  </div>

                  {/* Pillar Eyebrow & Title */}
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                    {pillar.pillarBadge}
                  </p>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#09090B] mt-2">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-[1px] w-full bg-[#E2E8F0]" />

                  {/* Feature List with #10B981 Check Icons */}
                  <ul className="space-y-3.5">
                    {pillar.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-[#09090B] leading-relaxed"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specific Service Pill CTA Button */}
                <div className="mt-8 pt-4">
                  <motion.a
                    href={pillar.ctaHref}
                    onClick={handleScrollToConsultation}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold transition-colors ${
                      pillar.isFeatured
                        ? "bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20 hover:bg-[#1D4ED8]"
                        : "bg-[#F8FAFC] text-[#09090B] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB]"
                    }`}
                  >
                    <span>{pillar.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicePillarsSection;
