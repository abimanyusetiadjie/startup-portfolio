"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0B0F19]/75 backdrop-blur-md border-b border-white/10 text-white font-sans transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex items-center justify-between">
        {/* Left Brand Logo: Diamond Mark + abinest Serif */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span
            className="w-2.5 h-2.5 border border-white rotate-45 shrink-0 group-hover:bg-white transition-colors"
            aria-hidden="true"
          />
          <span className="font-serif italic font-normal text-2xl tracking-normal text-white group-hover:text-teal-200 transition-colors">
            abinest
          </span>
          <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-wider text-teal-300 font-semibold px-2 py-0.5 rounded-full bg-teal-950/60 border border-teal-500/30 ml-1">
            STUDIO
          </span>
        </Link>

        {/* Center Nav Links with Hover Dot (Editorial Minimalist) */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/70 tracking-wide uppercase font-mono">
          <a
            href="#systems"
            onClick={(e) => handleSmoothScroll(e, "#systems")}
            className="hover:text-white transition-colors flex items-center gap-1.5 group/nav"
          >
            <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
            <span>{t.nav.systems}</span>
          </a>
          <a
            href="#case-study"
            onClick={(e) => handleSmoothScroll(e, "#case-study")}
            className="hover:text-white transition-colors flex items-center gap-1.5 group/nav"
          >
            <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
            <span>{t.nav.caseStudy}</span>
          </a>
          <a
            href="#engineering"
            onClick={(e) => handleSmoothScroll(e, "#engineering")}
            className="hover:text-white transition-colors flex items-center gap-1.5 group/nav"
          >
            <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
            <span>{t.nav.standards}</span>
          </a>
          <Link
            href="/portal"
            className="text-teal-300 font-bold flex items-center gap-1 hover:text-teal-200 transition-colors"
          >
            <span>{t.nav.portal}</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Language Switcher [ ID | EN ] */}
          <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/15 text-[11px] font-mono font-semibold">
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                lang === "id"
                  ? "bg-white text-[#0B0F19] font-bold shadow-xs"
                  : "text-white/60 hover:text-white"
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
                  ? "bg-white text-[#0B0F19] font-bold shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <Link
            href="/login"
            className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
          >
            {t.nav.clientLogin}
          </Link>

          <a
            href="#konsultasi"
            onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
            className="px-5 py-2 rounded-full bg-white text-[#0B0F19] font-medium text-xs hover:bg-slate-100 transition-all shadow-md shadow-black/20 hover:scale-[1.02] flex items-center gap-1.5"
          >
            <span>{t.nav.cta}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
