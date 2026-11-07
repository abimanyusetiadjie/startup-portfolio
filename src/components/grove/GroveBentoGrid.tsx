"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  MessageSquare,
  FileText,
  Database,
  Users,
  Globe,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCard {
  id: string;
  icon: typeof Activity;
  eyebrow: string;
  badge: string;
  startingPrice: string;
  priceNote: string;
  title: string;
  desc: string;
  metric: string;
  previewStatus: string;
  tags: string[];
  ctaText: string;
  ctaHref: string;
  isExternalOrRoute?: boolean;
}

export function GroveBentoGrid() {
  const { lang } = useLanguage();

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

  const services: ServiceCard[] = [
    {
      id: "siakad",
      icon: Activity,
      eyebrow: lang === "id" ? "SISTEM PENDIDIKAN" : "EDUCATION INFRASTRUCTURE",
      badge: "SLA 99.98%",
      startingPrice: lang === "id" ? "Mulai Rp 15 Jt" : "From $950",
      priceNote: lang === "id" ? "Beli Putus • 100% Source Code" : "One-time • Full IP",
      title:
        lang === "id"
          ? "SIAKAD & Ujian CBT Anti-Down"
          : "High-Concurrency School SIAKAD",
      desc:
        lang === "id"
          ? "Dirancang khusus untuk menangani 1.000+ siswa ujian serentak, pengisian nilai guru, dan PPDB online tanpa risiko server crash."
          : "Engineered to handle 1,000+ simultaneous student exams, teacher grading, and online admissions with zero server downtime.",
      metric:
        lang === "id"
          ? "0% Crash Saat Ujian Serentak"
          : "0% Crash During Peak Exams",
      previewStatus: "LIVE CLUSTER: 1.240 Siswa Aktif • Response 42ms",
      tags: ["Next.js 15", "PostgreSQL RLS", "PPDB & CBT"],
      ctaText: lang === "id" ? "Konsultasi Paket SIAKAD" : "Consult SIAKAD Package",
      ctaHref: "#konsultasi",
    },
    {
      id: "website",
      icon: Globe,
      eyebrow: lang === "id" ? "NEXT.JS 15 APP ROUTER" : "MODERN WEB ARCHITECTURE",
      badge: "LIGHTHOUSE 95–100",
      startingPrice: lang === "id" ? "Mulai Rp 4,5 Jt" : "From $300",
      priceNote: lang === "id" ? "Termasuk Domain & Cloud Setup" : "Includes Cloud Setup",
      title:
        lang === "id"
          ? "Website Institusi & Korporat"
          : "High-Conversion Corporate Web",
      desc:
        lang === "id"
          ? "Website profil sekolah, yayasan, dan perusahaan dengan kecepatan muat instan (< 1 detik), struktur SEO lokal kuat, dan desain eksklusif."
          : "Custom corporate and institutional websites with sub-second page loads, technical SEO structure, and high-converting UI.",
      metric:
        lang === "id"
          ? "Skor Performa Google 95–100"
          : "95–100 Core Web Vitals",
      previewStatus: "SPEED INDEX: 0.7s LCP • SEO Schema Tervalidasi",
      tags: ["Next.js 15 Edge", "SEO Ready", "Custom UI/UX"],
      ctaText: lang === "id" ? "Konsultasi Paket Website" : "Consult Web Package",
      ctaHref: "#konsultasi",
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      eyebrow: lang === "id" ? "META CLOUD API RESMI" : "OFFICIAL META CLOUD API",
      badge: "< 2s DISPATCH",
      startingPrice: lang === "id" ? "Mulai Rp 3,5 Jt" : "From $250",
      priceNote: lang === "id" ? "Resmi Anti-Banned Nomor" : "Official Anti-Ban API",
      title:
        lang === "id"
          ? "Otomasi Tagihan & Bot WhatsApp"
          : "Automated WhatsApp Billing Bot",
      desc:
        lang === "id"
          ? "Kirim tagihan SPP, pengumuman sekolah, bukti bayar, dan notifikasi jatuh tempo otomatis ke ribuan nomor orang tua tanpa takut terblokir."
          : "Dispatch automated tuition invoices, payment receipts, and urgent broadcasts via official Meta Cloud API with automatic retry queues.",
      metric:
        lang === "id"
          ? "Pengiriman Pesan < 2 Detik"
          : "< 2s Message Delivery",
      previewStatus: "WEBHOOK QUEUE: 99.9% Terkirim • Auto-Retry Aktif",
      tags: ["Meta Cloud API", "Auto-Invoicing", "QStash Queue"],
      ctaText: lang === "id" ? "Konsultasi Otomasi WA" : "Consult WA Automation",
      ctaHref: "#konsultasi",
    },
    {
      id: "pdf-worker",
      icon: FileText,
      eyebrow: lang === "id" ? "BACKGROUND CLOUD WORKER" : "DECOUPLED CLOUD WORKER",
      badge: "500+ PDF / 45s",
      startingPrice: lang === "id" ? "Mulai Rp 4,5 Jt" : "From $300",
      priceNote: lang === "id" ? "Modul Mandiri / Add-on SIAKAD" : "Standalone or Add-on",
      title:
        lang === "id"
          ? "Generator Rapor & Dokumen PDF"
          : "Bulk PDF Report Card Engine",
      desc:
        lang === "id"
          ? "Cetak ratusan rapor semester, sertifikat, dan kuitansi ber-QR Code secara paralel di background tanpa membuat aplikasi utama macet."
          : "Generate hundreds of digital report cards, certificates, and QR-verified invoices in parallel background queues without freezing the UI.",
      metric:
        lang === "id"
          ? "500+ Rapor Selesai < 45 Detik"
          : "500+ PDFs in < 45 Seconds",
      previewStatus: "WORKER NODE: 540 PDF Selesai dalam 38 Detik",
      tags: ["Isolated Worker", "QR Verification", "Zero UI Freeze"],
      ctaText: lang === "id" ? "Konsultasi Modul PDF" : "Consult PDF Engine",
      ctaHref: "#konsultasi",
    },
    {
      id: "erp",
      icon: Database,
      eyebrow: lang === "id" ? "SISTEM OPERASIONAL B2B" : "ENTERPRISE OPERATIONS",
      badge: "REAL-TIME SYNC",
      startingPrice: lang === "id" ? "Mulai Rp 12 Jt" : "From $800",
      priceNote: lang === "id" ? "Multi-Gudang & Kasir POS" : "Multi-Branch & POS",
      title:
        lang === "id"
          ? "ERP & Stok Omnichannel"
          : "Omnichannel Inventory & ERP",
      desc:
        lang === "id"
          ? "Kelola inventori multi-gudang, kasir POS cabang, dan sinkronisasi pesanan dalam satu database terpusat dengan keamanan PostgreSQL RLS."
          : "Centralize multi-branch inventory, retail POS, and financial ledgers into one synchronized database secured by PostgreSQL RLS.",
      metric:
        lang === "id"
          ? "0% Selisih Stok Antar Cabang"
          : "Zero Multi-Store Stock Drift",
      previewStatus: "DATABASE LEDGER: 5 Cabang Tersinkronisasi Real-Time",
      tags: ["Multi-Branch POS", "Auto Ledger", "PostgreSQL RLS"],
      ctaText: lang === "id" ? "Konsultasi Sistem ERP" : "Consult ERP System",
      ctaHref: "#konsultasi",
    },
    {
      id: "portal",
      icon: Users,
      eyebrow: lang === "id" ? "TRANSPARANSI PENGERJAAN" : "PROJECT VISIBILITY",
      badge: "LIVE PORTAL",
      startingPrice: lang === "id" ? "Gratis (Inklusif)" : "Included Free",
      priceNote: lang === "id" ? "Untuk Seluruh Klien Abinest" : "For All Abinest Clients",
      title:
        lang === "id"
          ? "Enterprise Client Portal"
          : "Enterprise Client Portal",
      desc:
        lang === "id"
          ? "Tidak perlu menebak-nebak progres proyek. Setiap klien mendapat akses login khusus untuk memantau milestone mingguan, status server, dan invoice."
          : "Every client partner receives dedicated credentials to inspect weekly sprint milestones, live server health, and official invoices.",
      metric:
        lang === "id"
          ? "Transparansi Progres 100%"
          : "100% Milestone Transparency",
      previewStatus: "PORTAL STATUS: Live Sprint & SLA Uptime Monitor",
      tags: ["Live Telemetry", "Sprint Tracker", "Official Invoice"],
      ctaText: lang === "id" ? "Coba Buka Client Portal" : "Open Client Portal",
      ctaHref: "/portal",
      isExternalOrRoute: true,
    },
  ];

  return (
    <section
      id="systems"
      className="bg-[#FFFFFF] py-14 sm:py-20 font-sans border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#0F766E]" aria-hidden="true" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
                {lang === "id"
                  ? "KATALOG LAYANAN & ESTIMASI INVESTASI"
                  : "SYSTEMS CATALOG & TRANSPARENT PRICING"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A]">
              {lang === "id"
                ? "Solusi terukur dengan harga transparan."
                : "Production-grade systems with transparent pricing."}
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-normal leading-relaxed">
            {lang === "id"
              ? "Seluruh paket sudah termasuk penyerahan 100% source code, garansi pemeliharaan SLA 99.9%, dan akses pemantauan progres di Client Portal."
              : "Every engagement includes 100% source code ownership, a 99.9% uptime SLA warranty, and live milestone tracking in our Client Portal."}
          </p>
        </motion.div>

        {/* 6-Card Bento Grid with Starting Prices & Telemetry Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group rounded-2xl border border-slate-200/90 bg-white p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-teal-950/5 hover:border-[#0F766E]/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Row: Icon + Starting Price Pill */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] flex items-center justify-center text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-white transition-all duration-200 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#0F172A] text-emerald-300 border border-slate-800">
                        {card.startingPrice}
                      </span>
                      <span className="block text-[10px] font-mono text-slate-500 mt-1">
                        {card.priceNote}
                      </span>
                    </div>
                  </div>

                  {/* Eyebrow & Title */}
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#0F766E] font-semibold mb-1">
                    {card.eyebrow}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  {/* Mini Product Telemetry Preview Bar */}
                  <div className="mt-4 px-3 py-2 rounded-lg bg-slate-900 text-[11px] font-mono text-emerald-300 flex items-center justify-between border border-slate-800">
                    <span className="truncate">{card.previewStatus}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0 ml-2" />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 space-y-3.5">
                  {/* Outcome Metric */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#0F766E]">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span>{card.metric}</span>
                  </div>

                  {/* Tech Tags & Action Link */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    <div className="flex flex-wrap gap-1">
                      {card.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 text-slate-700 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {card.isExternalOrRoute ? (
                      <Link
                        href={card.ctaHref}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0F766E] hover:text-[#0D9488] transition-colors shrink-0"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <a
                        href={card.ctaHref}
                        onClick={(e) => handleSmoothScroll(e, card.ctaHref)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0F766E] hover:text-[#0D9488] transition-colors shrink-0"
                      >
                        <span>{card.ctaText}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* COMPACT PRICING & MILESTONE PAYMENT BANNER (Target Anchor for #harga) */}
        <motion.div
          id="harga"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-5 sm:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5"
        >
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#0F766E] text-white flex items-center justify-center shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-[#0F172A]">
                {lang === "id"
                  ? "Skema Pembayaran Aman Berbasis Milestone (Tanpa Biaya Bulanan)"
                  : "Safe Milestone-Based Payment Terms (Zero Monthly Subscription)"}
              </h3>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {lang === "id"
                  ? "Termin 1 (30% Kickoff) → Termin 2 (40% Saat Demo Sistem di Client Portal) → Termin 3 (30% Serah Terima Penuh Source Code & Go-Live)."
                  : "30% Kickoff → 40% Live Staging Demo on Client Portal → 30% Final Source Code Handover & Go-Live."}
              </p>
            </div>
          </div>

          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-semibold hover:bg-[#0F766E] transition-colors shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>
              {lang === "id"
                ? "Minta Rincian RAB Proyek →"
                : "Request Custom Quote →"}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
