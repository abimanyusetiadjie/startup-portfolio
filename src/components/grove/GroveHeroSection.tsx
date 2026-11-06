"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
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

  return (
    <section className="relative w-full h-[100svh] min-h-[660px] max-h-[1100px] flex flex-col justify-between overflow-hidden bg-[#0A0D14] font-sans">
      {/* 1. CINEMATIC FULL-BLEED ARCHITECTURAL MONOLITH BACKGROUND (SUBTLE INITIAL ZOOM) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2600&q=85"
          alt="Abinest Engineering Studio & Architectural Software Monolith"
          className="w-full h-full object-cover object-center"
        />

        {/* Deep Cinematic Editorial Gradient Overlays (High-Contrast Readability) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/50 to-[#0B0F19]/75" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. TOP BREATHING SPACE (Accommodates Floating Island Navbar) */}
      <div className="pt-24 sm:pt-32" aria-hidden="true" />

      {/* 3. EDITORIAL HERO HEADLINE & ACTIONS (Bottom-Left Aligned, Staggered Entrance) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-6 sm:pb-8 flex flex-col justify-end flex-1">
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-3 mb-4 sm:mb-5"
        >
          <span className="w-8 h-[1px] bg-emerald-400" aria-hidden="true" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-emerald-300 font-medium">
            {lang === "id"
              ? "01 · SOFTWARE HOUSE & KONSULTAN TEKNOLOGI"
              : "01 · SOFTWARE HOUSE & IT CONSULTING FIRM"}
          </span>
        </motion.div>

        {/* Main Display Title in Playfair Display Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-white leading-[1.04] tracking-tight max-w-4xl"
        >
          {lang === "id" ? (
            <>
              Sistem digital yang dibangun untuk{" "}
              <span className="font-serif italic font-normal text-emerald-300">
                bertahan lama.
              </span>
            </>
          ) : (
            <>
              Digital systems engineered to{" "}
              <span className="font-serif italic font-normal text-emerald-300">
                outlast trends.
              </span>
            </>
          )}
        </motion.h1>

        {/* Concrete Benefit-First Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-200 max-w-2xl leading-relaxed font-normal"
        >
          {lang === "id"
            ? "Abinest merekayasa website berkecepatan tinggi, sistem informasi akademik (SIAKAD) anti-down, ERP enterprise, dan otomasi WhatsApp terintegrasi — dirancang agar tetap stabil meski ribuan user mengakses bersamaan."
            : "Abinest engineers high-velocity web platforms, crash-proof academic systems (SIAKAD), enterprise ERP, and integrated WhatsApp automation — built to remain resilient even under concurrent peak traffic."}
        </motion.p>

        {/* High-Contrast CTA Buttons Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4"
        >
          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-zinc-950 text-xs sm:text-sm font-bold hover:bg-zinc-100 transition-all duration-200 shadow-xl shadow-black/50 hover:scale-[1.02] active:scale-[0.98] group"
          >
            <span>
              {lang === "id"
                ? "Mulai Konsultasi Proyek"
                : "Book Consultation"}
            </span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-950" />
          </a>

          <a
            href="#case-study"
            onClick={(e) => handleSmoothScroll(e, "#case-study")}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all duration-200 text-xs sm:text-sm font-medium tracking-wide active:scale-[0.98]"
          >
            <span>{lang === "id" ? "Lihat Studi Kasus ↓" : "View Case Studies ↓"}</span>
          </a>

          <a
            href="#systems"
            onClick={(e) => handleSmoothScroll(e, "#systems")}
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-dashed border-white/20 text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200 text-xs font-mono active:scale-[0.98]"
          >
            <span>{lang === "id" ? "Katalog Sistem ↓" : "Explore Systems ↓"}</span>
          </a>
        </motion.div>

        {/* Micro Trust Strip (Pinned to Bottom) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-12 pt-5 border-t border-dashed border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400"
        >
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              SLA 99.9% Uptime
            </span>
            <span>·</span>
            <span className="text-zinc-300">Next.js 15 Edge</span>
            <span>·</span>
            <span className="text-zinc-300">Lighthouse 95–100</span>
            <span>·</span>
            <span className="text-zinc-300">PostgreSQL RLS</span>
            <span>·</span>
            <span className="text-zinc-400">Jakarta · Surabaya</span>
          </div>

          <a
            href="#trust-bar"
            onClick={(e) => handleSmoothScroll(e, "#trust-bar")}
            className="hidden lg:flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white transition-colors"
          >
            <span>EXPLORE</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
