"use client";

import { useState } from "react";
import {
  Globe,
  Cpu,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
  BarChart3,
  Layers,
  MessageSquare,
  Eye,
} from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveHeroSection() {
  // 3 Core Pillars: Website, Sistem Kustom, Otomasi
  const [activePillar, setActivePillar] = useState<"website" | "sistem" | "otomasi">(
    "website"
  );

  const pillarsData = {
    website: {
      tag: "WEBSITE MODERN & CEPAT",
      title: "Website Institusi & Korporat Next.js 15",
      badge: "Lighthouse 99/100 • Sub-Detik",
      badgeColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
      desc: "Dirancang kustom dengan Next.js 15 App Router untuk kecepatan buka halaman di bawah 0.8 detik, desain eksklusif non-template, dan struktur SEO Google maksimal.",
      highlights: [
        { label: "Kecepatan Akses", val: "< 0.8 Detik" },
        { label: "Google PageSpeed", val: "99 / 100" },
        { label: "SEO Structured Data", val: "JSON-LD Ready" },
      ],
      previewImg:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      accent: "#EA580C",
    },
    sistem: {
      tag: "SISTEM INFORMASI & WEB APP",
      title: "Sistem Kustom & ERP Operasional Bisnis",
      badge: "PostgreSQL RLS • 99.9% SLA",
      badgeColor: "text-blue-700 bg-blue-50 border-blue-200",
      desc: "Aplikasi internal, portal operasional, dan ERP yang dibangun presisi mengikuti alur kerja bisnis Anda, lengkap dengan keamanan multi-role dan hak milik kode 100%.",
      highlights: [
        { label: "Isolasi Data", val: "Zero-Trust RLS" },
        { label: "SLA Ketersediaan", val: "99.9% Uptime" },
        { label: "Kepemilikan IP", val: "100% Source Code" },
      ],
      previewImg:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      accent: "#2563EB",
    },
    otomasi: {
      tag: "OTOMASI PROSES & WORKFLOW",
      title: "Otomasi WhatsApp Meta & Integrasi API",
      badge: "Meta Cloud API Resmi • < 2 Detik",
      badgeColor: "text-green-700 bg-green-50 border-green-200",
      desc: "Otomasi penagihan invoice, notifikasi sistem, sinkronisasi database, dan broadcast resmi Meta tanpa risiko pemblokiran nomor dengan antrean asinkron cerdas.",
      highlights: [
        { label: "Waktu Pengiriman", val: "< 2 Detik" },
        { label: "Delivery Rate", val: "99.8% Sukses" },
        { label: "Anti-Duplikasi", val: "Kunci Idempotensi" },
      ],
      previewImg:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
      accent: "#16A34A",
    },
  };

  const current = pillarsData[activePillar];

  const metrics = [
    {
      value: "< 0.8s",
      label: "Kecepatan Website",
      desc: "Buka halaman instan di jaringan seluler dengan Next.js 15 Edge.",
    },
    {
      value: "99.9%",
      label: "Jaminan SLA Uptime",
      desc: "Arsitektur cloud tangguh untuk sistem operasional tanpa downtime.",
    },
    {
      value: "< 2s",
      label: "Pengiriman Otomasi",
      desc: "Integrasi resmi Meta WhatsApp Cloud API dengan delivery instan.",
    },
    {
      value: "100%",
      label: "Hak Milik Source Code",
      desc: "Seluruh repositori Git & skema database menjadi aset milik Anda.",
    },
  ];

  return (
    <section id="beranda" className="relative pt-10 pb-16 overflow-hidden bg-white">
      {/* Background Subtle Warm Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-orange-100/50 via-amber-50/40 to-transparent blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Hero Split: Left 55% Copy + Right 45% 3-Pillar Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55% / 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Positioning Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange-800">
                SOFTWARE HOUSE &amp; KONSULTAN TEKNOLOGI
              </span>
            </div>

            {/* Headline H1 with Strong Positioning */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
              Bangun{" "}
              <span className="text-orange-600 underline decoration-orange-300 decoration-wavy decoration-2 underline-offset-8">
                Website
              </span>
              ,{" "}
              <span className="text-slate-900">
                Sistem Kustom
              </span>
              , &amp;{" "}
              <span className="text-orange-600">
                Otomasi Bisnis
              </span>{" "}
              yang Siap Bertumbuh.
            </h1>

            {/* Sub-headline Covering All 3 Services */}
            <p className="text-sm sm:text-base text-slate-600 max-w-[560px] leading-relaxed">
              Abinest merekayasa solusi teknologi menyeluruh untuk UMKM, institusi, dan enterprise: website Next.js 15 berkecepatan tinggi, sistem informasi operasional tanpa hambatan, serta otomasi WhatsApp resmi — dengan kepemilikan source code 100% di tangan Anda.
            </p>

            {/* Light Theme Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20website%2Fsistem%2Fotomasi%20kami."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-200"
              >
                <span>Konsultasi Proyek via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors"
              >
                <span>Lihat Katalog Layanan</span>
                <span className="text-orange-500">↓</span>
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tanpa Biaya Lisensi Bulanan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respons Engineer &lt; 15 Menit</span>
              </div>
            </div>
          </div>

          {/* Right Column (45% / 5 cols): Interactive 3-Pillar Solution Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Lighting Behind Card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-orange-300/30 via-amber-200/20 to-blue-300/20 blur-3xl rounded-3xl"
            />

            {/* Main Interactive Showcase Card */}
            <div className="relative z-20 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl p-5 sm:p-6 space-y-4">
              {/* Top 3 Interactive Pillar Switcher */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  PILIH FOKUS LAYANAN:
                </span>
                <span className="text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Live Showcase
                </span>
              </div>

              {/* 3 Tabs: Website | Sistem | Otomasi */}
              <div className="grid grid-cols-3 gap-1.5 bg-slate-100/90 p-1 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setActivePillar("website")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activePillar === "website"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-orange-500" />
                  <span>Website</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePillar("sistem")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activePillar === "sistem"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-600" />
                  <span>Sistem</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActivePillar("otomasi")}
                  className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                    activePillar === "otomasi"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Otomasi</span>
                </button>
              </div>

              {/* Active Showcase Card Content */}
              <div className="space-y-4 pt-1 animate-fadeIn">
                {/* Visual Image Preview */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                  <img
                    src={current.previewImg}
                    alt={current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-3 right-3">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-sm ${current.badgeColor}`}
                    >
                      {current.badge}
                    </span>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-orange-300 font-semibold">
                      {current.tag}
                    </span>
                    <h3 className="text-sm font-bold leading-snug drop-shadow-sm">
                      {current.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {current.desc}
                </p>

                {/* 3 Value Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-100">
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 border border-slate-200/80 rounded-xl p-2 text-center"
                    >
                      <div className="text-[10px] text-slate-500 font-medium">
                        {h.label}
                      </div>
                      <div className="text-xs font-bold text-slate-900 mt-0.5">
                        {h.val}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Garansi Go-Live &amp; SLA 99.9%</span>
                </div>
                <a
                  href="#layanan"
                  className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
                >
                  <span>Detail Fitur</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Strip in Clean Light Card */}
        <div className="mt-20 pt-8 pb-8 border-y border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-50/70 rounded-2xl px-6 sm:px-8">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-2 border-l-2 border-orange-500/40">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                {m.value}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                {m.label}
              </h3>
              <p className="text-xs text-slate-500 leading-snug">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
