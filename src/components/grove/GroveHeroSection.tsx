"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { lang, t } = useLanguage();

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
    <section className="relative w-full h-[100svh] min-h-[660px] max-h-[1100px] flex flex-col justify-between overflow-hidden bg-[#0A0D14] font-sans">
      {/* 1. CINEMATIC FULL-BLEED ARCHITECTURAL MONOLITH BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* High-Resolution Architectural Monolith Photography */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2600&q=85"
          alt="Abinest Engineering Studio & Architectural Software Monolith"
          className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
        />

        {/* Deep Cinematic Editorial Gradient Overlays (High-Contrast Readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/45 to-[#0B0F19]/70" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. TOP BREATHING SPACE (Accommodates Fixed Glass Navbar) */}
      <div className="pt-24 sm:pt-32" aria-hidden="true" />

      {/* 3. EDITORIAL HERO HEADLINE & ACTIONS (Bottom-Left Aligned, Halden Style) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 flex flex-col justify-end flex-1">
        {/* Eyebrow with Fine Dashed Accent */}
        <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
          <span className="w-8 h-[1px] bg-teal-400" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-teal-300 font-medium">
            {lang === "id"
              ? "01 · SOFTWARE HOUSE & KONSULTAN TEKNOLOGI"
              : "01 · SOFTWARE HOUSE & TECHNOLOGY CONSULTING"}
          </span>
        </div>

        {/* Main Display Title in Playfair Display Serif */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal text-white leading-[1.04] tracking-tight max-w-4xl">
          {lang === "id" ? (
            <>
              Sistem digital yang dibangun untuk{" "}
              <span className="font-serif italic font-normal text-teal-200">
                bertahan lama.
              </span>
            </>
          ) : (
            <>
              Digital systems engineered to{" "}
              <span className="font-serif italic font-normal text-teal-200">
                outlast trends.
              </span>
            </>
          )}
        </h1>

        {/* Concise Editorial Subtitle */}
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-200/90 max-w-2xl leading-relaxed font-normal">
          {lang === "id"
            ? "Abinest merekayasa website berkecepatan tinggi, sistem informasi akademik (SIAKAD) & ERP enterprise anti-crash, serta otomasi WhatsApp terintegrasi untuk bisnis dan institusi Anda."
            : "Abinest crafts high-velocity web platforms, decoupled academic & ERP infrastructure with zero crash guarantee, and mission-critical WhatsApp automations."}
        </p>

        {/* CTA Buttons Row */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-[#0B0F19] text-xs sm:text-sm font-semibold hover:bg-slate-100 transition-all shadow-xl shadow-black/40 hover:scale-[1.02] group"
          >
            <span>
              {lang === "id"
                ? "Mulai Konsultasi Proyek"
                : "Book Engineering Consultation"}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#systems"
            onClick={(e) => handleSmoothScroll(e, "#systems")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-dashed border-white/30 text-white bg-white/5 hover:bg-white/10 transition-all text-xs sm:text-sm font-mono tracking-wide"
          >
            <span>
              {lang === "id"
                ? "Katalog Sistem & Layanan ↓"
                : "Explore Systems Catalog ↓"}
            </span>
          </a>

          {/* Live Uptime SLA Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SLA 99.9% Uptime Guarantee</span>
          </div>
        </div>

        {/* 4. BOTTOM FACTS LEDGER STRIP (Hairline Dashed Rule, Halden & Kai Nomura Signature) */}
        <div className="mt-10 sm:mt-12 pt-5 border-t border-dashed border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-left">
          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
              {lang === "id" ? "ARSITEKTUR WEB" : "WEB ARCHITECTURE"}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
              Next.js 15 · 100 Lighthouse
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
              {lang === "id" ? "SLA STABILITAS" : "STABILITY SLA"}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-teal-300 mt-1 block font-mono">
              99.9% Anti-Down Cluster
            </span>
          </div>

          <div>
            <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
              {lang === "id" ? "OTOMASI PESAN" : "AUTOMATION DISPATCH"}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-white mt-1 block font-mono">
              &lt; 2s WhatsApp Cloud API
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-400">
                {lang === "id" ? "STUDIO & KONSULTAN" : "STUDIO PRESENCE"}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white mt-1 block">
                Jakarta · Surabaya (ID)
              </span>
            </div>

            <a
              href="#statement"
              onClick={(e) => handleSmoothScroll(e, "#statement")}
              className="hidden lg:flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors"
              aria-label="Scroll to explore"
            >
              <ArrowDown className="h-3 w-3 animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
