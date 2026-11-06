"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export function GroveCraftsmanshipStory() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="engineering"
      className="bg-slate-50 py-16 sm:py-24 font-sans border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Team & Collaboration Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden bg-slate-200 border border-slate-200 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                alt="Tim Konsultan dan Teknisi Abinest"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-[#0F172A] border border-slate-200 shadow-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>KONSULTAN RESMI • JAKARTA &amp; SURABAYA</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Numbered Guarantees for Clients */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2.5 mb-2">
                <span className="w-6 h-[2px] bg-[#0F766E]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-widest uppercase text-[#0F766E]">
                  {t.standards.eyebrow}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] mt-2 mb-3">
                {t.standards.title}
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                {t.standards.subtitle}
              </p>
            </div>

            {/* 3 Numbered Cards with High Contrast & Legibility */}
            <div className="space-y-4 pt-2">
              {t.standards.items.map((item) => (
                <div
                  key={item.num}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4 sm:gap-5"
                >
                  <span className="h-10 w-10 rounded-xl bg-teal-50 border border-teal-200 text-[#0F766E] font-bold text-base flex items-center justify-center shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F172A]">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
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
