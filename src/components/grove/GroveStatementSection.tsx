"use client";

import { useLanguage } from "@/context/LanguageContext";

export function GroveStatementSection() {
  const { lang } = useLanguage();

  return (
    <section id="statement" className="bg-white py-16 sm:py-24 border-t border-slate-200 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#0F766E]" aria-hidden="true" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0F766E]">
            {lang === "id" ? "KOMITMEN MUTU & PENDAMPINGAN" : "OUR PRACTICE & PHILOSOPHY"}
          </span>
        </div>

        <p className="text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] font-bold leading-[1.35] tracking-tight">
          {lang === "id"
            ? "Bagi kami, sistem informasi bukan sekadar program komputer, melainkan urat nadi operasional institusi Anda. Kami tidak membuat sistem sekali jadi yang ditinggalkan tanpa kejelasan; kami membangun infrastruktur digital yang stabil, mudah digunakan oleh guru & staf, serta didampingi tim teknis secara berkelanjutan."
            : "For us, software architecture is the bedrock of your institution. We do not ship disposable code; we engineer fast, decoupled, secure digital infrastructure designed to endure and scale with comprehensive support."}
        </p>

        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-lg sm:text-xl text-[#0F766E] font-medium">
            — Abinest Software House &amp; Konsultan Teknologi
          </span>
          <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
            Jakarta · Surabaya · Est. 2024
          </span>
        </div>
      </div>
    </section>
  );
}
