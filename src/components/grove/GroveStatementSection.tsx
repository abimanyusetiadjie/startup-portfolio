"use client";

import { useLanguage } from "@/context/LanguageContext";

export function GroveStatementSection() {
  const { lang } = useLanguage();

  return (
    <section className="bg-white py-20 sm:py-28 border-t border-dashed border-[#CBD5E1] font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#0F766E]" aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0F766E] font-semibold">
            {lang === "id" ? "STANDAR KUALITAS STUDIO" : "OUR PRACTICE & PHILOSOPHY"}
          </span>
        </div>

        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#134E4A] font-normal leading-[1.3] tracking-tight">
          {lang === "id"
            ? "Bagi kami, kode adalah fondasi masa depan institusi Anda. Kami tidak membangun sistem sekali jadi yang ditinggalkan; kami merekayasa infrastruktur digital yang cepat, aman, dan dirancang untuk bertahan dalam jangka panjang."
            : "For us, software architecture is the bedrock of your institution. We do not ship disposable code; we engineer fast, decoupled, secure digital infrastructure designed to endure and scale over the long haul."}
        </p>

        <div className="mt-8 pt-6 border-t border-dashed border-[#CBD5E1] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-serif italic text-lg sm:text-xl text-[#0F766E]">
            — Abinest Engineering Studio
          </span>
          <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
            Jakarta · Surabaya · Est. 2024
          </span>
        </div>
      </div>
    </section>
  );
}
