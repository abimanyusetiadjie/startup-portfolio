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
    <footer className="bg-[#0F172A] text-slate-300 py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight flex items-center gap-2">
            <span>ABINEST</span>
            <span className="text-teal-400 font-mono text-xs font-semibold px-2 py-0.5 rounded bg-teal-950 border border-teal-800">
              STUDIO
            </span>
          </span>
          <p className="text-xs text-slate-400 mt-2 max-w-sm leading-relaxed">
            {t.footer.studioTagline}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
          <a
            href="#systems"
            onClick={(e) => handleSmoothScroll(e, "#systems")}
            className="hover:text-teal-400 transition-colors"
          >
            {t.nav.systems}
          </a>
          <a
            href="#case-study"
            onClick={(e) => handleSmoothScroll(e, "#case-study")}
            className="hover:text-teal-400 transition-colors"
          >
            {t.nav.caseStudy}
          </a>
          <a
            href="#engineering"
            onClick={(e) => handleSmoothScroll(e, "#engineering")}
            className="hover:text-teal-400 transition-colors"
          >
            {t.nav.standards}
          </a>
          <Link href="/portal" className="text-teal-400 font-bold hover:underline">
            {t.footer.clientPortalLive}
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            {t.nav.clientLogin}
          </Link>
        </div>

        <div className="text-[11px] text-slate-500 font-mono">
          © {new Date().getFullYear()} Abinest. {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
