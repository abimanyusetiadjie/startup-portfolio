"use client";

import { ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function GroveHeroSection() {
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
    <section className="bg-[#F4F1EA] text-[#1A201C] pt-8 sm:pt-12 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HERO 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-12 sm:pb-16">
          {/* Left Column: Abinest Value Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#D15B3A]">
                STUDIO REKAYASA SISTEM ENTERPRISE &amp; OTOMASI B2B
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#1A201C]">
              Rekayasa sistem yang membuat bisnis tumbuh{" "}
              <span className="text-[#D15B3A]">terukur.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#6B736C] leading-relaxed max-w-lg">
              Abinest merancang website Next.js berkecepatan tinggi (skor Lighthouse 100), sistem SIAKAD sekolah terpisah anti-down dengan mesin cetak ratusan PDF rapor paralel, serta otomasi WhatsApp &amp; API berketahanan tinggi.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#18362B] text-white text-xs sm:text-sm font-semibold hover:bg-[#122A21] transition-all shadow-md shadow-[#18362B]/15"
              >
                Mulai Konsultasi Teknis →
              </a>

              <a
                href="/portal"
                className="text-xs sm:text-sm font-semibold text-[#18362B] underline hover:text-[#D15B3A] transition-colors"
              >
                Buka Client Portal (/portal) →
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Container (Architecture & UI Frame) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-sm group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Abinest Enterprise System Architecture"
                className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 bg-[#18362B]/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-[11px] font-mono text-emerald-100 font-semibold border border-white/10 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>ABINEST ENGINEERING • PRODUCTION READY</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM 4-COLUMN FEATURE BAR (Deep Forest Green #18362B) */}
      <div className="bg-[#18362B] text-white border-t border-[#122A21]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#234A3C]">
          <div className="py-4 px-4 sm:px-6">
            <span className="block text-xs font-bold text-white">Lighthouse 95–100</span>
            <span className="block text-[11px] text-emerald-200/70 mt-0.5">Core Web Vitals LCP &lt; 1.0s</span>
          </div>
          <div className="py-4 px-4 sm:px-6">
            <span className="block text-xs font-bold text-white">Parallel PDF Worker</span>
            <span className="block text-[11px] text-emerald-200/70 mt-0.5">500+ Rapor / &lt;45s Batch</span>
          </div>
          <div className="py-4 px-4 sm:px-6">
            <span className="block text-xs font-bold text-white">99.9% Uptime SLA</span>
            <span className="block text-[11px] text-emerald-200/70 mt-0.5">Decoupled Anti-Crash Database</span>
          </div>
          <div className="py-4 px-4 sm:px-6">
            <span className="block text-xs font-bold text-white">WhatsApp Real-Time</span>
            <span className="block text-[11px] text-emerald-200/70 mt-0.5">Auto-Retry Backoff &lt; 2s</span>
          </div>
        </div>
      </div>
    </section>
  );
}
