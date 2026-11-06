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
    <section id="case-study" className="bg-[#F8FAFC] py-16 sm:py-24 font-sans border-t border-dashed border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER WITH ARCHITECTURAL DASHED BORDER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl sm:rounded-3xl overflow-hidden border border-dashed border-[#CBD5E1] shadow-sm">
          {/* Left Side: System Architecture Visual */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-[#F0FDFA]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              alt="Abinest SIAKAD Core & Parallel PDF Architecture"
              className="w-full h-full object-cover object-center grayscale contrast-110"
            />

            <div className="absolute top-5 left-5 bg-[#0F766E]/90 backdrop-blur-sm text-teal-100 px-3.5 py-1.5 rounded-full text-[10px] font-mono border border-white/15 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-[#5EEAD4]" />
              <span>{t.caseStudy.eyebrow}</span>
            </div>
          </div>

          {/* Right Side: Deep Obsidian Teal Slate with Luminous Metrics */}
          <div className="bg-[#191917] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[1px] bg-[#5EEAD4]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#5EEAD4] font-mono">
                {t.caseStudy.eyebrow}
              </span>
            </div>

            {/* Headline in Playfair Display Serif */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight leading-snug text-white mb-4">
              {t.caseStudy.title}
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-md mb-8">
              {t.caseStudy.desc}
            </p>

            {/* Impact Metric Telemetry */}
            <div className="flex items-baseline gap-6 mb-8 pt-4 border-t border-dashed border-white/20">
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-white">
                  {t.caseStudy.stat1Number}
                </span>
                <span className="block text-[10px] text-white/60 font-mono mt-1 uppercase tracking-wider">
                  {t.caseStudy.stat1Label}
                </span>
              </div>
              <div className="h-10 w-[1px] bg-white/20" />
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-normal text-[#5EEAD4]">
                  {t.caseStudy.stat2Number}
                </span>
                <span className="block text-[10px] text-white/60 font-mono mt-1 uppercase tracking-wider">
                  {t.caseStudy.stat2Label}
                </span>
              </div>
            </div>

            {/* White Pill CTA Button */}
            <div>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#191917] text-xs sm:text-sm font-semibold hover:bg-white/90 transition-all shadow-sm group"
              >
                <span>{t.caseStudy.cta}</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
