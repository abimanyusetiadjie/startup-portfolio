"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFooter() {
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
    <footer className="bg-[#191917] text-white py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-dashed border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10">
          <div>
            <span className="font-serif italic font-normal text-3xl text-white tracking-normal flex items-center gap-2">
              <span>abinest</span>
              <span className="text-[#5EEAD4] font-mono text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 border border-white/15 not-italic">
                STUDIO
              </span>
            </span>
            <p className="text-xs text-white/60 mt-2 max-w-sm leading-relaxed">
              {t.footer.studioTagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/80 font-mono uppercase tracking-wider">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="hover:text-white transition-colors"
            >
              {t.nav.systems}
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="hover:text-white transition-colors"
            >
              {t.nav.caseStudy}
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="hover:text-white transition-colors"
            >
              {t.nav.standards}
            </a>
            <Link href="/portal" className="text-[#5EEAD4] font-bold hover:underline">
              {t.footer.clientPortalLive}
            </Link>
            <Link href="/login" className="hover:text-white transition-colors">
              {t.nav.clientLogin}
            </Link>
          </div>
        </div>

        {/* Giant Architectural Wordmark */}
        <div className="overflow-hidden text-center select-none py-6 my-4 border-y border-dashed border-white/10" aria-hidden="true">
          <span className="font-serif text-[15vw] font-normal uppercase leading-none tracking-tight text-white/[0.08] inline-block">
            Abinest
          </span>
        </div>

        {/* Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-white/50 font-mono">
          <div>
            © {new Date().getFullYear()} Abinest Engineering Studio. {t.footer.copyright}
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white/80 cursor-pointer">Privacy &amp; SLA</span>
            <span className="hover:text-white/80 cursor-pointer">Terms of Service</span>
            <span className="text-[#5EEAD4]">Jakarta · Surabaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
