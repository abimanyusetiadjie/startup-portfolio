"use client";

import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang, t } = useLanguage();

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
    <div className="w-full font-sans sticky top-0 z-40">
      {/* 1. TOP ANNOUNCEMENT BAR (Deep Teal #0F766E) */}
      <div className="bg-[#0F766E] text-white py-2 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#0D6D65] shadow-xs">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>{t.nav.announcement}</span>
        </span>
      </div>

      {/* 2. MAIN NAVIGATION (Pure White #FFFFFF with Light Gray Border #E2E8F0) */}
      <header className="bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] px-4 sm:px-8 lg:px-12 py-3.5 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Logo: ABINEST */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#134E4A] group-hover:text-[#0F766E] transition-colors">
              ABINEST
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-wider text-[#0F766E] font-semibold px-2 py-0.5 rounded bg-[#CCFBF1] border border-[#5EEAD4]/40">
              SOFTWARE HOUSE
            </span>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#64748B] tracking-wide">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="hover:text-[#0F766E] transition-colors"
            >
              {t.nav.systems}
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="hover:text-[#0F766E] transition-colors"
            >
              {t.nav.caseStudy}
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="hover:text-[#0F766E] transition-colors"
            >
              {t.nav.standards}
            </a>
            <Link
              href="/portal"
              className="text-[#0F766E] font-bold flex items-center gap-1 hover:underline"
            >
              <span>{t.nav.portal}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Switcher [ ID | EN ] */}
            <div className="flex items-center rounded-full bg-[#F0FDFA] p-0.5 border border-[#E2E8F0] text-[11px] font-mono font-semibold shadow-inner">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "id"
                    ? "bg-[#0F766E] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#0F766E]"
                }`}
                aria-label="Pilih Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#0F766E] text-white shadow-sm"
                    : "text-[#64748B] hover:text-[#0F766E]"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-[#134E4A] hover:text-[#0F766E] hover:bg-[#F0FDFA] transition-colors"
            >
              {t.nav.clientLogin}
            </Link>

            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="px-4 sm:px-5 py-2 rounded-full bg-[#0F766E] text-white font-semibold text-xs hover:bg-[#0D9488] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>{t.nav.cta}</span>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
