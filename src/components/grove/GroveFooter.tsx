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
    <footer className="bg-[#042F2E] text-[#E0E7E2] py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-[#0F766E]/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
            ABINEST
          </span>
          <p className="text-xs text-teal-200/80 mt-1 max-w-sm leading-relaxed">
            {t.footer.studioTagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-teal-100/90 font-medium">
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

        <div className="text-[11px] text-teal-200/60 font-mono">
          © {new Date().getFullYear()} Abinest. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
