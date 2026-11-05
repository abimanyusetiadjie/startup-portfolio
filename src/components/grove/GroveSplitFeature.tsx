"use client";

import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveSplitFeature() {
  const { t } = useLanguage();

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
    <section id="case-study" className="bg-[#F8FAFC] py-14 sm:py-20 font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm">
          {/* Left Side: System Architecture Visual */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-[#F0FDFA]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              alt="Abinest SIAKAD Core & Parallel PDF Architecture"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-4 left-4 bg-[#0F766E]/90 backdrop-blur-sm text-teal-100 px-3 py-1 rounded text-[10px] font-mono border border-white/15 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="h-3 w-3 text-[#5EEAD4]" />
              <span>{t.caseStudy.eyebrow}</span>
            </div>
          </div>

          {/* Right Side: Solid Deep Teal Block (#0F766E) */}
          <div className="bg-[#0F766E] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="block text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#5EEAD4] mb-2 font-mono">
              {t.caseStudy.eyebrow}
            </span>

            {/* Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-white mb-4">
              {t.caseStudy.title}
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-md mb-6">
              {t.caseStudy.desc}
            </p>

            {/* Impact Metric Telemetry */}
            <div className="flex items-baseline gap-4 mb-8 pt-2 border-t border-[#0D9488]/40">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
                  {t.caseStudy.stat1Number}
                </span>
                <span className="block text-[10px] text-teal-200/80 font-mono mt-0.5">
                  {t.caseStudy.stat1Label}
                </span>
              </div>
              <div className="h-8 w-[1px] bg-[#0D9488]/40" />
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-[#5EEAD4]">
                  {t.caseStudy.stat2Number}
                </span>
                <span className="block text-[10px] text-teal-200/80 font-mono mt-0.5">
                  {t.caseStudy.stat2Label}
                </span>
              </div>
            </div>

            {/* White Pill CTA Button */}
            <div>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#0F766E] text-xs sm:text-sm font-bold hover:bg-[#F0FDFA] transition-colors shadow-sm"
              >
                {t.caseStudy.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
