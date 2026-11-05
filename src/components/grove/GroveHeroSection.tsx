"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GroveHero3DScene = dynamic(
  () =>
    import("./GroveHero3DScene").then((mod) => mod.GroveHero3DScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[280px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
        <span className="text-xs font-mono text-[#5EEAD4] animate-pulse">
          Memuat Real 3D Architecture Engine...
        </span>
      </div>
    ),
  }
);

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
    <section className="bg-[#F8FAFC] text-[#134E4A] pt-6 sm:pt-10 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. TOP CENTERED EDITORIAL BRANDING (WINZY / HALDEN STYLE) */}
        <div className="text-center pb-8 sm:pb-10 max-w-3xl mx-auto">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-mono uppercase tracking-widest bg-[#CCFBF1] text-[#0F766E] border border-[#5EEAD4]/50 font-bold shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-ping" />
              <span>01 • {t.hero.eyebrow}</span>
            </span>
          </div>

          {/* Majestic Brand Title */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#134E4A] select-none leading-none">
            Abinest<span className="text-[#0F766E]">.</span>
          </h1>

          {/* Editorial Tagline */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#64748B] max-w-xl mx-auto leading-relaxed">
            {lang === "id"
              ? "Software house & konsultan teknologi. Jasa pembuatan website modern, sistem informasi akademik & ERP anti-crash, serta otomasi WhatsApp terintegrasi."
              : "Software house & IT consulting firm. Custom modern web engineering, anti-crash SIAKAD & ERP systems, and integrated WhatsApp business automation."}
          </p>
        </div>

        {/* 2. THE GRAND FRAMED CANVAS CARD (CINEMATIC FULL UI HERO) */}
        <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#E2E8F0] shadow-2xl bg-gradient-to-b from-[#031C1A] via-[#073631] to-[#042421] text-white min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between p-5 sm:p-8 lg:p-12 mb-12 sm:mb-16 group">
          {/* BACKGROUND AMBIENT GLOW & WATERMARK TYPOGRAPHY */}
          <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center overflow-hidden z-0">
            {/* Subtle Radial Glow */}
            <div className="absolute w-[600px] h-[600px] bg-[#0F766E]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute w-[350px] h-[350px] bg-[#5EEAD4]/10 rounded-full blur-2xl pointer-events-none" />

            {/* Giant Watermarked Heading */}
            <span className="text-white/[0.035] font-black text-6xl sm:text-8xl lg:text-[200px] tracking-tight uppercase leading-none text-center">
              ABINEST
            </span>
          </div>

          {/* CANVAS TOP HUD: Translucent Pill Bar */}
          <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="h-8 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/15 flex items-center gap-2 text-xs font-mono text-[#5EEAD4]">
                <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>CLUSTER: PROD-JKT-01 • ONLINE</span>
              </div>
              <span className="hidden md:inline-block text-[11px] font-mono text-teal-200/70">
                Next.js 15 Edge • SLA 99.98%
              </span>
            </div>

            <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-teal-100/80">
              <a
                href="#systems"
                onClick={(e) => handleSmoothScroll(e, "#systems")}
                className="hover:text-white transition-colors"
              >
                {t.nav.systems}
              </a>
              <a
                href="#case-study"
                onClick={(e) => handleSmoothScroll(e, "#case-study")}
                className="hover:text-white transition-colors"
              >
                {t.nav.caseStudy}
              </a>
              <a
                href="#engineering"
                onClick={(e) => handleSmoothScroll(e, "#engineering")}
                className="hover:text-white transition-colors"
              >
                {t.nav.standards}
              </a>
              <Link
                href="/portal"
                className="text-[#5EEAD4] hover:underline font-mono"
              >
                /portal ↗
              </Link>
            </div>

            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors"
            >
              <span>{lang === "id" ? "Jadwal Konsultasi" : "Book Call"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* CANVAS CENTER STAGE: Multi-Tiered UI Architecture & Real 3D Engine */}
          <div className="relative z-10 my-auto py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
            {/* Left Glass Floating Card: SIAKAD Modern Preview */}
            <div className="lg:col-span-3 hidden lg:flex flex-col gap-3">
              <div className="bg-black/45 backdrop-blur-md rounded-2xl border border-white/15 p-4 shadow-xl space-y-3 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono text-[#5EEAD4] font-bold uppercase tracking-wider">
                    SIAKAD &amp; NILAI DIGITAL
                  </span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-teal-100/90 text-[11px]">
                    <span>Trafik Ujian Serentak</span>
                    <span className="font-mono text-emerald-300 font-bold">4.200 Siswa</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-[#5EEAD4] w-full" />
                  </div>
                  <div className="flex justify-between text-[10px] text-teal-200/70 pt-1 font-mono">
                    <span>SLA Uptime: 99.9%</span>
                    <span className="text-emerald-400 font-bold">ANTI-CRASH</span>
                  </div>
                </div>
              </div>

              <div className="bg-black/35 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center gap-2.5 text-[11px] text-teal-100/80">
                <ShieldCheck className="h-4 w-4 text-[#5EEAD4] shrink-0" />
                <span>PostgreSQL Row Level Security (RLS) Terisolasi</span>
              </div>
            </div>

            {/* Center Stage: Interactive Procedural 3D Engine */}
            <div className="lg:col-span-6 w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/11]">
              <GroveHero3DScene />
            </div>

            {/* Right Glass Floating Card: WhatsApp Automation Preview */}
            <div className="lg:col-span-3 hidden lg:flex flex-col gap-3">
              <div className="bg-black/45 backdrop-blur-md rounded-2xl border border-white/15 p-4 shadow-xl space-y-3 transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-[10px] font-mono text-[#5EEAD4] font-bold uppercase tracking-wider">
                    WHATSAPP CLOUD API
                  </span>
                  <span className="text-[9px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    &lt; 2s TERKIRIM
                  </span>
                </div>

                <div className="p-2.5 rounded-xl rounded-tl-none bg-[#092D23]/80 border border-emerald-500/30 text-left">
                  <p className="text-[11px] text-emerald-100 leading-snug">
                    Halo Bpk/Ibu, Tagihan SPP &amp; Rapor Siswa telah siap diunduh otomatis.
                  </p>
                  <span className="block text-right text-[8px] text-emerald-300 mt-1 font-mono">
                    11:42 ✓✓
                  </span>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-teal-200/70 pt-0.5">
                  <span>Auto-Retry Backoff</span>
                  <span className="text-emerald-400 font-bold">5x Resilient</span>
                </div>
              </div>

              <div className="bg-black/35 backdrop-blur-md rounded-xl border border-white/10 p-3 flex items-center gap-2.5 text-[11px] text-teal-100/80">
                <Sparkles className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>Cetak 500+ PDF Rapor dalam &lt; 45 Detik</span>
              </div>
            </div>
          </div>

          {/* CANVAS BOTTOM OVERLAY: 3 Grand Stats + CTA + Live Telemetry Mini Console (Winzy Style) */}
          <div className="relative z-20 pt-6 border-t border-white/10 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            {/* Left Section: 3 Large Telemetry Pillars + CTA Button */}
            <div className="space-y-4 max-w-2xl">
              {/* 3 Large Stat Metrics */}
              <div className="flex flex-wrap items-baseline gap-6 sm:gap-10">
                <div>
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    99.9%
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4] mt-0.5">
                    {lang === "id" ? "SLA Uptime Garansi" : "Uptime SLA Guarantee"}
                  </span>
                </div>

                <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />

                <div>
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#5EEAD4] tracking-tight">
                    &lt; 2s
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-teal-200/80 mt-0.5">
                    {lang === "id" ? "Otomasi WhatsApp" : "WA Automated Dispatch"}
                  </span>
                </div>

                <div className="h-8 w-[1px] bg-white/15 hidden sm:block" />

                <div>
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    100
                  </span>
                  <span className="block text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#5EEAD4] mt-0.5">
                    {lang === "id" ? "Skor Lighthouse Web" : "Lighthouse Web Score"}
                  </span>
                </div>
              </div>

              {/* Pill CTA Button & Micro Narrative */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-1">
                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0F766E] text-xs sm:text-sm font-bold hover:bg-[#F0FDFA] transition-all shadow-xl hover:shadow-2xl hover:scale-102"
                >
                  <span>{lang === "id" ? "Mulai Konsultasi Gratis" : "Start Free Consultation"}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#0F766E]" />
                </a>

                <p className="text-xs text-teal-100/80 max-w-sm leading-relaxed">
                  {lang === "id"
                    ? "Diskusikan pembuatan website, sistem informasi, atau bot otomasi bisnis Anda langsung bersama konsultan Abinest."
                    : "Discuss your custom website, management system, or automated workflows directly with Abinest consultants."}
                </p>
              </div>
            </div>

            {/* Right Section: Floating Mini Telemetry Screen (Winzy Video Card Style) */}
            <div className="w-full sm:w-auto shrink-0 bg-black/45 backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 shadow-lg max-w-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] font-mono">
                <span className="text-[#5EEAD4] font-bold">LIVE TELEMETRY</span>
                <span className="text-white/60">NODE-01</span>
              </div>
              <div className="space-y-1.5 py-2 text-[10px] font-mono">
                <div className="flex items-center justify-between text-teal-100/90">
                  <span>POST /api/v1/dispatch-wa</span>
                  <span className="text-emerald-400 font-bold">200 OK</span>
                </div>
                <div className="flex items-center justify-between text-teal-200/70">
                  <span>Latency</span>
                  <span className="text-white">14ms</span>
                </div>
                <div className="flex items-center justify-between text-teal-200/70">
                  <span>SIAKAD Exam Load</span>
                  <span className="text-emerald-300">4,200 Active</span>
                </div>
              </div>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mt-1">
                <div className="h-full bg-gradient-to-r from-[#10B981] to-[#5EEAD4] w-4/5 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. BOTTOM 4-COLUMN FEATURE BAR (Deep Teal #0F766E) */}
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