"use client";

import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_URL =
  "https://wa.me/6285708677918?text=Halo%20Abinest%20IT%2C%20saya%20ingin%20menjadwalkan%20konsultasi%20sistem.";

export function GroveFinalCtaSection() {
  const { language } = useLanguage();

  return (
    <section className="relative py-20 bg-[#141415] overflow-hidden border-t border-white/[0.05]">
      {/* Wide Warm Copper Sunrise Glow Along the Bottom Horizon (matching slice_6.png) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[900px] h-[220px] rounded-full bg-gradient-to-t from-[#E06D3B]/50 via-[#C85A28]/25 to-transparent blur-[65px]"
      />

      <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
          {language === "id"
            ? "Punya Visi atau Kebutuhan IT? Mari Diskusikan."
            : "Got a Vision or IT Need? Let's Talk."}
        </h2>
        <p className="text-[12px] sm:text-[13px] text-[#8E8E93] max-w-md mx-auto leading-relaxed">
          {language === "id"
            ? "Jadwalkan sesi konsultasi arsitektur gratis bersama engineer kami untuk merancang sistem yang stabil dan tahan lama."
            : "Book a discovery call with our senior systems engineers to architect reliable, future-proof digital infrastructure."}
        </p>

        <div className="pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[11px] font-medium text-white bg-[#0E0E10] hover:bg-[#18181B] border border-white/15 shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all"
          >
            {language === "id" ? "Jadwalkan Konsultasi" : "Book a Call"}
          </a>
        </div>
      </div>
    </section>
  );
}
