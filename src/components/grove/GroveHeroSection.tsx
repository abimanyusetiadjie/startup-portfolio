"use client";

import dynamic from "next/dynamic";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const GroveHero3DScene = dynamic(
  () =>
    import("./GroveHero3DScene").then((mod) => mod.GroveHero3DScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center">
        <span className="text-xs font-mono text-[#64748B] animate-pulse">
          Memuat Real 3D Architecture Engine...
        </span>
      </div>
    ),
  }
);

export function GroveHeroSection() {
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
    <section className="bg-[#F8FAFC] text-[#134E4A] pt-8 sm:pt-12 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HERO 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-12 sm:pb-16">
          {/* Left Column: Abinest Value Narrative */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Eyebrow Badge (Background #CCFBF1, Teks #0F766E) */}
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase bg-[#CCFBF1] text-[#0F766E] border border-[#5EEAD4]/40">
                <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                <span>{t.hero.eyebrow}</span>
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#134E4A]">
              {t.hero.headlinePrefix}
              <span className="text-[#0F766E] underline decoration-[#5EEAD4] decoration-4 underline-offset-4">
                {t.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0F766E] text-white text-xs sm:text-sm font-semibold hover:bg-[#0D9488] transition-all shadow-md shadow-[#0F766E]/20"
              >
                {t.hero.ctaPrimary}
              </a>

              <a
                href="/portal"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-[#0F766E] text-[#0F766E] hover:bg-[#F0FDFA] transition-all font-semibold text-xs sm:text-sm"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right Column: Real 3D Interactive Architecture Scene */}
          <div className="lg:col-span-6 w-full">
            <GroveHero3DScene />
          </div>
        </div>
      </div>

      {/* BOTTOM 4-COLUMN FEATURE BAR (Deep Teal #0F766E) */}
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
