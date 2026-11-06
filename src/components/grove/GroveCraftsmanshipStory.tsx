"use client";

import { useLanguage } from "@/context/LanguageContext";

export function GroveCraftsmanshipStory() {
  const { t } = useLanguage();

  return (
    <section id="engineering" className="bg-[#f3f3f3] py-16 sm:py-24 font-sans border-t border-dashed border-[#CBD5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Engineering Workspace Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-200 border border-dashed border-[#CBD5E1] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                alt="Abinest Software House & Engineering Studio"
                className="w-full h-full object-cover object-center grayscale contrast-115"
              />

              <div className="absolute bottom-4 left-4 bg-[#191917]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-mono text-white/80 border border-white/15 shadow-sm">
                ABINEST STUDIO • JAKARTA · SURABAYA
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Manifesto & 3 Numbered Principles */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-6 h-[1px] bg-[#0F766E]" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
                  {t.standards.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#134E4A] mt-2 mb-4">
                {t.standards.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                {t.standards.subtitle}
              </p>
            </div>

            {/* 3 Numbered List Items with Architectural Dashed Hairlines & Serif Numerals */}
            <div className="space-y-4 pt-2">
              {t.standards.items.map((item) => (
                <div key={item.num} className="pt-4 border-t border-dashed border-[#CBD5E1] flex items-baseline gap-5">
                  <span className="font-serif text-2xl sm:text-3xl font-normal text-[#0F766E] shrink-0 w-8">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#134E4A]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
