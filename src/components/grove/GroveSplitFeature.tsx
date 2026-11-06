"use client";

import { ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveSplitFeature() {
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
    <section
      id="case-study"
      className="bg-[#F8FAFC] py-16 sm:py-24 font-sans border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-white">
          {/* Left Side: System Architecture & Real Collaboration Visual */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[500px] bg-slate-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
              alt="Abinest SIAKAD Sekolah & Pendampingan Sistem"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-sm text-[#0F766E] px-3.5 py-1.5 rounded-full text-xs font-bold border border-slate-200 flex items-center gap-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-[#0F766E]" />
              <span>{t.caseStudy.eyebrow}</span>
            </div>
          </div>

          {/* Right Side: Deep Enterprise Teal with High Contrast Legibility */}
          <div className="bg-[#0F766E] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-3">
              <span className="w-6 h-[2px] bg-teal-300" aria-hidden="true" />
              <span className="text-xs font-bold tracking-widest uppercase text-teal-200 font-mono">
                {t.caseStudy.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug text-white mb-4">
              {t.caseStudy.title}
            </h2>

            {/* Body Description (Readable, Clear Font) */}
            <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed max-w-lg mb-8">
              {t.caseStudy.desc}
            </p>

            {/* Impact Metric Telemetry */}
            <div className="flex items-baseline gap-8 mb-8 pt-6 border-t border-teal-500/60">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-white">
                  {t.caseStudy.stat1Number}
                </span>
                <span className="block text-xs text-teal-100 mt-1 font-medium">
                  {t.caseStudy.stat1Label}
                </span>
              </div>
              <div className="h-10 w-[1px] bg-teal-500/60" />
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-teal-200">
                  {t.caseStudy.stat2Number}
                </span>
                <span className="block text-xs text-teal-100 mt-1 font-medium">
                  {t.caseStudy.stat2Label}
                </span>
              </div>
            </div>

            {/* White Pill CTA Button */}
            <div>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-[#0F766E] text-sm font-bold hover:bg-teal-50 transition-all shadow-md group"
              >
                <span>{t.caseStudy.cta}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
