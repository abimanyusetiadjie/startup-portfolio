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
    <section className="bg-[#F8FAFC] text-[#134E4A] pt-6 sm:pt-10 pb-0 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. COMPACT HIGH-IMPACT HEADLINE & VALUE PROP (NO WASTED WHITE SPACE) */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-widest bg-[#CCFBF1] text-[#0F766E] border border-[#5EEAD4]/50 font-bold shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
              <span>{t.hero.eyebrow}</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#134E4A] leading-[1.12] sm:leading-[1.1]">
            {t.hero.headlinePrefix}
            <span className="text-[#0F766E] underline decoration-[#5EEAD4] decoration-4 underline-offset-4">
              {t.hero.headlineHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons & Guarantees */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#0F766E] text-white text-xs sm:text-sm font-bold hover:bg-[#0D9488] transition-all shadow-md shadow-[#0F766E]/20 hover:scale-102"
            >
              <span>{t.hero.ctaPrimary}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full border border-[#0F766E] text-[#0F766E] bg-white hover:bg-[#F0FDFA] transition-all font-semibold text-xs sm:text-sm shadow-xs"
            >
              <span>{lang === "id" ? "Lihat Katalog Sistem ↓" : "View Systems Catalog ↓"}</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[11px] font-mono text-[#64748B]">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              <span>SLA Uptime 99.9%</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              <span>0% Server Down Saat Ujian</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
              <span>Respon WhatsApp &lt; 2 Detik</span>
            </span>
          </div>
        </div>

        {/* 2. FULL-SIZE PRODUCTION SOFTWARE SHOWCASE WINDOW (REPLACES 3D COMPLETELY) */}
        <div className="mt-8 sm:mt-10 mb-12 sm:mb-16 max-w-6xl mx-auto relative">
          {/* Subtle Ambient Teal Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#0F766E]/20 via-[#10B981]/20 to-[#5EEAD4]/20 rounded-3xl blur-2xl opacity-60 -z-10 pointer-events-none" />

          {/* Floating Dimension Badges */}
          <div className="hidden lg:flex items-center gap-2 absolute -top-4 -right-2 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#E2E8F0] shadow-md text-xs font-mono font-semibold text-[#0F766E]">
            <Zap className="h-3.5 w-3.5 text-[#10B981]" />
            <span>Skor Web Lighthouse 100 • LCP 0.6s</span>
          </div>

          <div className="hidden lg:flex items-center gap-2 absolute -bottom-4 -left-2 z-20 bg-[#0F766E] text-white px-3.5 py-1.5 rounded-full shadow-lg text-xs font-mono font-semibold">
            <Lock className="h-3.5 w-3.5 text-[#5EEAD4]" />
            <span>PostgreSQL Row Level Security (RLS) Terisolasi</span>
          </div>

          {/* Browser / Application Window Frame */}
          <div className="rounded-2xl sm:rounded-3xl border border-[#CBD5E1] bg-[#031C1A] text-white shadow-2xl overflow-hidden">
            {/* Window Title Bar */}
            <div className="px-4 py-3 bg-[#021413] border-b border-white/10 flex items-center justify-between gap-4">
              {/* macOS Dots */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#EF4444]" />
                <span className="h-3 w-3 rounded-full bg-[#F59E0B]" />
                <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                <span className="ml-3 font-mono text-[10px] sm:text-xs text-teal-200/60 hidden sm:inline">
                  Abinest Enterprise System Suite v2.6
                </span>
              </div>

              {/* Centered URL Bar */}
              <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-black/40 border border-white/10 text-[10px] sm:text-xs font-mono text-teal-200/80 max-w-xs sm:max-w-md w-full justify-center">
                <Lock className="h-2.5 w-2.5 text-[#10B981]" />
                <span className="truncate">https://siakad.abinest.id/dashboard/live-monitor</span>
              </div>

              {/* Status Pill */}
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#5EEAD4] bg-[#0F766E]/40 px-2.5 py-0.5 rounded border border-[#0F766E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="hidden sm:inline">ONLINE • SLA 99.99%</span>
                <span className="sm:hidden">LIVE</span>
              </div>
            </div>

            {/* Window Content: Actual High-Fidelity Enterprise UI */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
              {/* Left Mini Sidebar */}
              <div className="md:col-span-3 bg-[#042421] border-r border-white/10 p-4 hidden md:flex flex-col justify-between select-none">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                    <div className="h-7 w-7 rounded-lg bg-[#0F766E] flex items-center justify-center text-white font-bold text-xs">
                      A
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white leading-none">ABINEST CORE</span>
                      <span className="text-[9px] font-mono text-[#5EEAD4]">Yayasan Pendidikan Mandiri</span>
                    </div>
                  </div>

                  <nav className="space-y-1 text-xs">
                    <div className="px-3 py-2 rounded-lg bg-[#0F766E] text-white font-semibold flex items-center gap-2 shadow-xs">
                      <Activity className="h-3.5 w-3.5 text-[#5EEAD4]" />
                      <span>Live Monitor</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-teal-100/70 hover:bg-white/5 flex items-center gap-2">
                      <Users className="h-3.5 w-3.5" />
                      <span>SIAKAD &amp; Nilai</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-teal-100/70 hover:bg-white/5 flex items-center gap-2">
                      <FileText className="h-3.5 w-3.5" />
                      <span>Rapor PDF Batch</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-teal-100/70 hover:bg-white/5 flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5" />
                      <span>WhatsApp API</span>
                    </div>
                    <div className="px-3 py-2 rounded-lg text-teal-100/70 hover:bg-white/5 flex items-center gap-2">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Database RLS</span>
                    </div>
                  </nav>
                </div>

                <div className="p-3 rounded-xl bg-black/30 border border-white/10 text-[10px] font-mono space-y-1">
                  <span className="text-teal-200/60 block">RESPONSE TIME</span>
                  <span className="text-emerald-400 font-bold text-xs block">14ms • Jakarta Region</span>
                  <span className="text-teal-200/40 block">Decoupled Queue Active</span>
                </div>
              </div>

              {/* Main System Dashboard Area */}
              <div className="md:col-span-9 p-4 sm:p-6 lg:p-7 flex flex-col justify-between gap-5 bg-gradient-to-br from-[#031C1A] via-[#052925] to-[#021816]">
                {/* Dashboard Top Telemetry Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/10 shadow-sm">
                    <span className="block text-[10px] font-mono text-teal-200/70 uppercase">
                      Beban Ujian Online
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-white mt-0.5 block">
                      4.200 Siswa
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">● 0% Server Crash</span>
                  </div>

                  <div className="p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/10 shadow-sm">
                    <span className="block text-[10px] font-mono text-teal-200/70 uppercase">
                      Mesin Rapor Otomatis
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-[#5EEAD4] mt-0.5 block">
                      500+ PDF
                    </span>
                    <span className="text-[10px] font-mono text-teal-200/70">&lt; 45 Detik Selesai</span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 p-3 sm:p-3.5 rounded-xl bg-black/40 border border-white/10 shadow-sm">
                    <span className="block text-[10px] font-mono text-teal-200/70 uppercase">
                      WhatsApp Dispatch
                    </span>
                    <span className="text-lg sm:text-xl font-bold font-heading text-white mt-0.5 block">
                      &lt; 2 Detik
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">● 1.284 Pesan Terkirim</span>
                  </div>
                </div>

                {/* Dashboard Center: 2 Side-by-Side Real Feature Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 my-auto">
                  {/* Module 1: Live SIAKAD Gradebook & Student Register */}
                  <div className="lg:col-span-7 rounded-2xl bg-black/45 border border-white/10 p-3.5 sm:p-4 space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-[#5EEAD4]" />
                        <span>Buku Nilai &amp; Rapor Siswa Terverifikasi</span>
                      </span>
                      <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                        SLA 99.9%
                      </span>
                    </div>

                    <div className="space-y-1 text-[10px] font-mono">
                      {[
                        { id: "SIS-001", name: "Ahmad Fauzi", score: "94.5 (A)", status: "LULUS" },
                        { id: "SIS-002", name: "Siti Nurhaliza", score: "96.0 (A)", status: "LULUS" },
                        { id: "SIS-003", name: "Budi Pratama", score: "91.8 (A)", status: "LULUS" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-1.5 px-2 rounded bg-white/5 border border-white/5 text-teal-100/90"
                        >
                          <span className="text-[#5EEAD4]">{item.id}</span>
                          <span className="font-sans font-medium text-white">{item.name}</span>
                          <span className="font-bold text-emerald-400">{item.score}</span>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-900/60 text-emerald-300 text-[9px]">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Module 2: Live WhatsApp API Automation Dispatcher */}
                  <div className="lg:col-span-5 rounded-2xl bg-black/45 border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10">
                      <span className="text-[11px] font-bold text-white flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
                        <span>WhatsApp Gateway</span>
                      </span>
                      <span className="text-[9px] font-mono text-emerald-300">AKTIF</span>
                    </div>

                    {/* WhatsApp Chat Bubble */}
                    <div className="p-3 rounded-xl rounded-tl-none bg-[#0D382B] border border-emerald-500/30 text-left space-y-1">
                      <span className="block text-[9px] font-mono text-[#5EEAD4]">
                        [NOTIFIKASI OTOMATIS ABINEST]
                      </span>
                      <p className="text-[11px] text-emerald-50 leading-snug">
                        Halo Bpk/Ibu, Tagihan SPP &amp; Rapor Siswa telah selesai diproses dan siap diunduh otomatis.
                      </p>
                      <span className="block text-right text-[8px] text-emerald-300 font-mono">
                        14:20 ✓✓
                      </span>
                    </div>

                    <div className="text-[9px] font-mono text-teal-200/70 flex items-center justify-between pt-1 border-t border-white/10">
                      <span>Meta Cloud API</span>
                      <span className="text-emerald-400 font-bold">&lt; 2s Terkirim</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Bottom Telemetry Terminal */}
                <div className="rounded-xl bg-black/60 border border-white/10 px-3.5 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[10px] font-mono">
                  <div className="flex items-center gap-2 text-teal-100/90">
                    <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                    <span className="text-emerald-400 font-bold">LIVE TELEMETRY:</span>
                    <span>POST /api/v1/dispatch-wa • 200 OK (14ms)</span>
                  </div>

                  <div className="flex items-center gap-3 text-teal-200/60">
                    <span>Multi-Tenant DB Isolated</span>
                    <span className="text-[#5EEAD4] font-bold">100% SECURE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM 4-COLUMN FEATURE BAR (DEEP TEAL #0F766E) */}
      <div className="bg-[#0F766E] text-white border-t border-[#0D6D65] shadow-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#115E59]">
          {t.hero.featureBar.map((item) => (
            <div key={item.title} className="py-4 px-4 sm:px-6">
              <span className="block text-xs font-bold text-white">{item.title}</span>
              <span className="block text-[11px] text-[#CCFBF1] mt-0.5">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}