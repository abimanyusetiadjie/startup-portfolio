"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Lock,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Zap,
  FileText,
  Users,
  Activity,
  Layers,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { t, lang } = useLanguage();

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
    <section className="bg-[#F8FAFC] text-[#0F172A] pt-8 sm:pt-12 pb-0 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. ARCHITECTURAL EDITORIAL HEADLINE & FACTS LEDGER */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Line */}
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[1px] bg-[#0F766E]" aria-hidden="true" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#0F766E] font-semibold">
              {t.hero.eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-[#0F766E]" aria-hidden="true" />
          </div>

          {/* Headline in Playfair Display Serif */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#134E4A] leading-[1.1]">
            {t.hero.headlinePrefix}
            <span className="font-serif italic font-normal text-[#0F766E] ml-2">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0F766E] text-white text-xs sm:text-sm font-medium hover:bg-[#115E59] transition-all shadow-md shadow-teal-700/20 group hover:scale-102"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-full border border-dashed border-[#CBD5E1] text-[#134E4A] bg-white hover:bg-slate-50 transition-all font-semibold text-xs sm:text-sm shadow-xs hover:border-[#0F766E]"
            >
              <span>{lang === "id" ? "Lihat Katalog Sistem ↓" : "View Systems Catalog ↓"}</span>
            </a>
          </div>

          {/* Facts Ledger (Architectural Grid) */}
          <dl className="mt-8 pt-6 border-t border-dashed border-[#CBD5E1] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Layanan</dt>
              <dd className="text-xs sm:text-sm font-semibold text-[#134E4A] mt-1">Web · SIAKAD · Otomasi WA</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-400">SLA Uptime</dt>
              <dd className="text-xs sm:text-sm font-semibold text-[#0F766E] mt-1 font-mono">99.9% Anti-Down</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Lokasi Studio</dt>
              <dd className="text-xs sm:text-sm font-semibold text-[#134E4A] mt-1">Jakarta · Surabaya</dd>
            </div>
            <div>
              <dt className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Standar Mutu</dt>
              <dd className="text-xs sm:text-sm font-semibold text-[#10B981] mt-1 font-mono">Lighthouse 95–100</dd>
            </div>
          </dl>
        </div>

        {/* 2. FULL-SIZE PRODUCTION SOFTWARE SHOWCASE WINDOW: CLEAN LIGHT PORCELAIN & CRISP TEAL */}
        <div className="mt-8 sm:mt-10 mb-12 sm:mb-16 max-w-6xl mx-auto relative">
          {/* Subtle Ambient Teal Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/10 via-emerald-500/10 to-teal-400/10 rounded-3xl blur-2xl opacity-70 -z-10 pointer-events-none" />

          {/* Floating Dimension Badges */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-4 -right-2 z-20 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-md text-xs font-mono font-semibold text-[#0F766E]">
            <Zap className="h-3.5 w-3.5 text-teal-600" />
            <span>Skor Web Lighthouse 100 • LCP 0.6s</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-4 -left-2 z-20 bg-[#0F766E] text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-mono font-semibold">
            <Lock className="h-3.5 w-3.5 text-teal-200" />
            <span>PostgreSQL Row Level Security (RLS) Terisolasi</span>
          </div>

          {/* Browser / Application Window Frame: Crisp Snow White */}
          <div className="rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-white text-slate-900 shadow-xl shadow-slate-200/50 overflow-hidden">
            {/* Window Title Bar */}
            <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200 flex items-center justify-between gap-4">
              {/* macOS Dots */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 font-mono text-[10px] sm:text-xs text-slate-500 hidden sm:inline">
                  Abinest Enterprise System Suite v2.6
                </span>
              </div>

              {/* Centered URL Bar */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-[10px] sm:text-xs font-mono text-teal-800 max-w-xs sm:max-w-md w-full justify-center shadow-xs">
                <Lock className="h-2.5 w-2.5 text-teal-600" />
                <span className="truncate">https://siakad.abinest.id/dashboard/live-monitor</span>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded border border-teal-200 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse" />
                <span className="hidden sm:inline">ONLINE • SLA 99.99%</span>
                <span className="sm:hidden">LIVE</span>
              </div>
            </div>

            {/* Window Content: Clean Porcelain SaaS Interface */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
              {/* Left Mini Sidebar */}
              <div className="md:col-span-3 bg-slate-50/70 border-r border-slate-200 p-4 hidden md:flex flex-col justify-between select-none">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-200">
                    <div className="h-7 w-7 rounded-lg bg-[#0F766E] flex items-center justify-center text-white font-bold text-xs shadow-xs">
                      A
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-900 leading-none">ABINEST CORE</span>
                      <span className="text-[9px] font-mono text-teal-700 font-semibold">Yayasan Pendidikan Mandiri</span>
                    </div>
                  </div>

                  <nav className="space-y-1 text-xs">
                    <div className="px-3 py-2 rounded-lg bg-[#0F766E] text-white font-semibold flex items-center gap-2 shadow-xs">
                      <Activity className="h-3.5 w-3.5 text-teal-200" />
                      <span>Live Monitor</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors">
                      <Users className="h-3.5 w-3.5 text-slate-400" />
                      <span>SIAKAD &amp; Nilai</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors">
                      <FileText className="h-3.5 w-3.5 text-slate-400" />
                      <span>Rapor PDF Batch</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors">
                      <MessageSquare className="h-3.5 w-3.5 text-slate-400" />
                      <span>WhatsApp API</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 flex items-center gap-2 transition-colors">
                      <ShieldCheck className="h-3.5 w-3.5 text-slate-400" />
                      <span>Database RLS</span>
                    </div>
                  </nav>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-[10px] font-mono space-y-1 shadow-xs">
                  <span className="text-slate-500 block">RESPONSE TIME</span>
                  <span className="text-teal-700 font-bold text-xs block">14ms • Jakarta Region</span>
                  <span className="text-slate-400 block">Decoupled Queue Active</span>
                </div>
              </div>

              {/* Main System Dashboard Area: Crisp White Content */}
              <div className="md:col-span-9 p-4 sm:p-6 lg:p-7 flex flex-col justify-between gap-5 bg-white">
                {/* Dashboard Top Telemetry Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase font-semibold">
                      Beban Ujian Online
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-slate-900 mt-0.5 block">
                      4.200 Siswa
                    </span>
                    <span className="text-[10px] font-mono text-teal-700 font-semibold">● 0% Server Crash</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase font-semibold">
                      Mesin Rapor Otomatis
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-[#0F766E] mt-0.5 block">
                      500+ PDF
                    </span>
                    <span className="text-[10px] font-mono text-teal-700 font-semibold">&lt; 45 Detik Selesai</span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3.5 rounded-xl bg-slate-50 border border-slate-200 shadow-xs">
                    <span className="block text-[10px] font-mono text-slate-500 uppercase font-semibold">
                      WhatsApp Dispatch
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-slate-900 mt-0.5 block">
                      &lt; 2 Detik
                    </span>
                    <span className="text-[10px] font-mono text-teal-700 font-semibold">● 1.284 Pesan Terkirim</span>
                  </div>
                </div>

                {/* Dashboard Center: 2 Side-by-Side Real Feature Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto">
                  {/* Module 1: Live SIAKAD Gradebook & Student Register */}
                  <div className="lg:col-span-7 rounded-2xl bg-slate-50/80 border border-slate-200 p-4 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-teal-600" />
                        <span>Buku Nilai &amp; Rapor Siswa Terverifikasi</span>
                      </span>
                      <span className="text-[9px] font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-semibold">
                        SLA 99.9%
                      </span>
                    </div>

                    <div className="space-y-1.5 text-[10px] font-mono">
                      {[
                        { id: "SIS-001", name: "Ahmad Fauzi", score: "94.5 (A)", status: "LULUS" },
                        { id: "SIS-002", name: "Siti Nurhaliza", score: "96.0 (A)", status: "LULUS" },
                        { id: "SIS-003", name: "Budi Pratama", score: "91.8 (A)", status: "LULUS" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-1.5 px-2.5 rounded bg-white border border-slate-200/80 text-slate-800 shadow-xs"
                        >
                          <span className="text-teal-700 font-bold">{item.id}</span>
                          <span className="font-sans font-medium text-slate-900">{item.name}</span>
                          <span className="font-bold text-teal-700">{item.score}</span>
                          <span className="px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200 text-[9px] font-bold">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Module 2: Live WhatsApp API Automation Dispatcher */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-50/80 border border-slate-200 p-4 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <span className="text-[11px] font-bold text-slate-900 flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-teal-600" />
                        <span>WhatsApp Gateway</span>
                      </span>
                      <span className="text-[9px] font-mono text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200 font-bold">
                        AKTIF
                      </span>
                    </div>

                    {/* WhatsApp Chat Bubble */}
                    <div className="p-3 rounded-xl rounded-tl-none bg-teal-50/90 border border-teal-200/80 text-left space-y-1 shadow-xs">
                      <span className="block text-[9px] font-mono text-teal-700 font-bold">
                        [NOTIFIKASI OTOMATIS ABINEST]
                      </span>
                      <p className="text-[11px] text-teal-950 leading-snug">
                        Halo Bpk/Ibu, Tagihan SPP &amp; Rapor Siswa telah selesai diproses dan siap diunduh otomatis.
                      </p>
                      <span className="block text-right text-[8px] text-teal-700 font-mono font-bold">
                        14:20 ✓✓
                      </span>
                    </div>

                    <div className="text-[9px] font-mono text-slate-500 flex items-center justify-between pt-1 border-t border-slate-200">
                      <span>Meta Cloud API</span>
                      <span className="text-teal-700 font-bold">&lt; 2s Terkirim</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Bottom Telemetry Terminal: High-Contrast Obsidian Accent */}
                <div className="rounded-xl bg-slate-900 text-slate-100 px-3.5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono shadow-sm">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-teal-400 animate-ping" />
                    <span className="text-teal-400 font-bold">LIVE TELEMETRY:</span>
                    <span>POST /api/v1/dispatch-wa • 200 OK (14ms)</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-400">
                    <span>Multi-Tenant DB Isolated</span>
                    <span className="text-teal-300 font-bold">100% SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM 4-COLUMN FEATURE BAR: Clean White with Subtle Slate Borders */}
      <div className="bg-white border-y border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {t.hero.featureBar.map((item) => (
            <div key={item.title} className="py-5 px-4 sm:px-6 hover:bg-slate-50/80 transition-colors">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span className="block text-xs font-bold text-slate-900">{item.title}</span>
              </div>
              <span className="block text-[11px] text-teal-700 font-medium ml-3">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
