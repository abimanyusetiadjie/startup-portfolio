"use client";

import Link from "next/link";
import {
  Activity,
  MessageSquare,
  FileText,
  Database,
  Users,
  Globe,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceCard {
  id: string;
  icon: typeof Activity;
  eyebrow: string;
  badge: string;
  title: string;
  desc: string;
  metric: string;
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
      eyebrow: lang === "id" ? "EDTECH & SISTEM AKADEMIK" : "ACADEMIC EDTECH",
      badge: "99.9% UPTIME",
      title:
        lang === "id"
          ? "SIAKAD Sekolah & Yayasan Anti-Down"
          : "Crash-Proof School & Foundation SIAKAD",
      desc:
        lang === "id"
          ? "Sistem informasi akademik yang tetap stabil saat ribuan siswa mengakses serentak. Dilengkapi buku nilai digital, CBT ujian online, dan cetak rapor instan."
          : "Academic platform engineered to stay rock-solid under concurrent traffic. Includes digital gradebooks, online exams, and instant report card generation.",
      metric: lang === "id" ? "0% Server Crash saat Ujian" : "0% Crash Under Peak Load",
      tags: ["Next.js 15", "PostgreSQL RLS", "Anti-Crash"],
      ctaText: lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution",
      ctaHref: "#konsultasi",
    },
    {
      id: "whatsapp",
      icon: MessageSquare,
      eyebrow: lang === "id" ? "OTOMASI RESMI META" : "OFFICIAL META AUTOMATION",
      badge: "< 2 DETIK",
      title:
        lang === "id"
          ? "WhatsApp Notification Gateway & Chatbot"
          : "WhatsApp Notification Gateway & Bot",
      desc:
        lang === "id"
          ? "Kirim tagihan SPP otomatis, notifikasi absensi siswa, dan kwitansi resmi via Meta Cloud API langsung dari database yayasan tanpa risiko nomor diblokir."
          : "Automate tuition reminders, student attendance alerts, and official receipts via Meta Cloud API directly from your core database with zero ban risk.",
      metric: lang === "id" ? "< 2 Detik Pengiriman" : "< 2s Dispatch Speed",
      tags: ["Meta Cloud API", "Otomasi SPP", "24/7 Aktif"],
      ctaText: lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution",
      ctaHref: "#konsultasi",
    },
    {
      id: "pdf_worker",
      icon: FileText,
      eyebrow: lang === "id" ? "CLOUD WORKER ASINKRON" : "CLOUD ASYNC WORKER",
      badge: "500+ DOKUMEN / MENIT",
      title:
        lang === "id"
          ? "Mesin Cetak Rapor & Dokumen PDF Otomatis"
          : "High-Speed Batch PDF Report Engine",
      desc:
        lang === "id"
          ? "Cetak ratusan hingga ribuan PDF rapor dan invoice dalam hitungan detik via antrean background queue tanpa membebani server aplikasi utama."
          : "Generate hundreds to thousands of PDF report cards or billing invoices in seconds via decoupled queue workers without degrading app performance.",
      metric: lang === "id" ? "< 45 Detik per 500 Rapor" : "< 45s per 500 Reports",
      tags: ["Decoupled Queue", "Puppeteer Worker", "Supabase Storage"],
      ctaText: lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution",
      ctaHref: "#konsultasi",
    },
    {
      id: "erp",
      icon: Database,
      eyebrow: lang === "id" ? "SISTEM ENTERPRISE" : "ENTERPRISE ERP",
      badge: "< 150MS SYNC",
      title:
        lang === "id"
          ? "ERP & Manajemen Stok Omnichannel"
          : "Omnichannel Inventory & ERP Hub",
      desc:
        lang === "id"
          ? "Kelola inventori, kasir POS multi-cabang, dan sinkronisasi pesanan marketplace (Shopee, Tokopedia) dalam satu sistem yang selalu sinkron real-time."
          : "Centralize inventory, multi-store retail POS, and e-commerce marketplace orders into one synchronized, real-time single source of truth.",
      metric: lang === "id" ? "0% Selisih Stok Toko" : "Zero Stock Drift",
      tags: ["Multi-Store POS", "Auto Ledger", "Real-Time Sync"],
      ctaText: lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution",
      ctaHref: "#konsultasi",
    },
    {
      id: "portal",
      icon: Users,
      eyebrow: lang === "id" ? "TRANSPARANSI PROYEK" : "PROJECT VISIBILITY",
      badge: "LIVE STATUS",
      title:
        lang === "id"
          ? "Enterprise Client Portal"
          : "Enterprise Client Portal",
      desc:
        lang === "id"
          ? "Setiap institusi klien mendapatkan portal khusus untuk memantau progres milestone mingguan, status server, dan dokumen invoice secara transparan."
          : "Every client partner receives dedicated credentials to inspect sprint milestone velocity, live server telemetry health, and official invoices.",
      metric: lang === "id" ? "Transparansi 100% Proyek" : "100% Transparent Milestones",
      tags: ["Live Telemetry", "Milestone Tracker", "Polaris UI"],
      ctaText: lang === "id" ? "Buka Client Portal" : "Access Client Portal",
      ctaHref: "/portal",
      isExternalOrRoute: true,
    },
    {
      id: "website",
      icon: Globe,
      eyebrow: lang === "id" ? "NEXT.JS 15 APP ROUTER" : "MODERN WEB ARCHITECTURE",
      badge: "LIGHTHOUSE 100",
      title:
        lang === "id"
          ? "Website Institusi Super Cepat"
          : "High-Performance Institutional Website",
      desc:
        lang === "id"
          ? "Website profil institusi modern dengan skor Google Lighthouse 95–100, loading sub-detik, dan fondasi SEO kuat untuk kredibilitas maksimal."
          : "Modern institutional web presence built on Next.js 15 with 95–100 Google Lighthouse scores, sub-second LCP, and strong SEO visibility.",
      metric: lang === "id" ? "LCP < 0.8 Detik • Skor 100" : "LCP < 0.8s • Lighthouse 100",
      tags: ["Lighthouse 95–100", "Sub-Second Load", "SEO Ready"],
      ctaText: lang === "id" ? "Konsultasi Solusi Ini" : "Consult This Solution",
      ctaHref: "#konsultasi",
    },
  ];

  return (
    <section id="systems" className="bg-[#FFFFFF] py-14 sm:py-20 font-sans border-b border-slate-200">
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
              {lang === "id" ? "Solusi yang kami bangun." : "Solutions we engineer."}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
              {lang === "id"
                ? "Kami merancang infrastruktur digital yang cepat, aman, dan siap berkembang bersama institusi Anda."
                : "We engineer fast, secure, and resilient digital infrastructure tailored to scale with your institution."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-teal-50 text-[#0F766E] border border-teal-200 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#0F766E]" />
              <span>{lang === "id" ? "Arsitektur Enterprise" : "Enterprise Architecture"}</span>
            </span>
          </div>
        </div>

        {/* 6 RINGKAS SERVICE CARDS (3-COLUMN RESPONSIVE GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#0F766E]/50 p-5 sm:p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div>
                  {/* Card Header Meta */}
                  <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white transition-colors duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-mono uppercase font-bold tracking-wider text-[#0F766E]">
                        {svc.eyebrow}
                      </span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] tracking-tight group-hover:text-[#0F766E] transition-colors leading-snug">
                    {svc.title}
                  </h3>

                  {/* Card Description (Max 2 sentences) */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {svc.desc}
                  </p>

                  {/* Metric Highlight Badge */}
                  <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal-50/80 border border-teal-200/80 text-[11px] font-mono font-semibold text-[#0F766E]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0F766E] shrink-0" />
                    <span>{svc.metric}</span>
                  </div>
                </div>

                {/* Card Footer: Tags & Action CTA */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-3">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link CTA */}
                  {svc.isExternalOrRoute ? (
                    <Link
                      href={svc.ctaHref}
                      className="inline-flex items-center justify-between text-xs font-semibold text-[#0F766E] hover:text-teal-800 transition-colors pt-1 group/btn"
                    >
                      <span>{svc.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>
                  ) : (
                    <a
                      href={svc.ctaHref}
                      onClick={(e) => handleSmoothScroll(e, svc.ctaHref)}
                      className="inline-flex items-center justify-between text-xs font-semibold text-[#0F766E] hover:text-teal-800 transition-colors pt-1 group/btn"
                    >
                      <span>{svc.ctaText}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
