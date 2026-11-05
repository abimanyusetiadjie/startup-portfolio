"use client";

import { useLanguage } from "@/context/LanguageContext";

export function GroveCraftsmanshipStory() {
  const { t } = useLanguage();

  return (
    <section id="engineering" className="bg-[#F0FDFA] py-16 sm:py-24 font-sans border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Engineering Workspace Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#CCFBF1] border border-[#E2E8F0] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                alt="Abinest Software House & Engineering Studio"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute bottom-3 left-3 bg-[#0F766E]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-mono text-teal-100 border border-white/15 shadow-sm">
                ABINEST STUDIO • JAKARTA
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Manifesto & 3 Numbered Dividers */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#0F766E] font-mono">
                {t.standards.eyebrow}
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#134E4A] mt-2 mb-4">
                {t.standards.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed max-w-xl">
                {t.standards.subtitle}
              </p>
            </div>

            {/* 3 Numbered List Items with Thin Dividers */}
            <div className="space-y-4 pt-2">
              {t.standards.items.map((item) => (
                <div key={item.num} className="pt-3.5 border-t border-[#E2E8F0] flex items-baseline gap-4">
                  <span className="font-mono text-sm font-bold text-[#0F766E]">{item.num}</span>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#134E4A]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mt-0.5">
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
