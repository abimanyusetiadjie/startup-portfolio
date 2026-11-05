"use client";

import Link from "next/link";

export function GroveFooter() {
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
    <footer className="bg-[#142E22] text-[#E0E7E2] py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-[#0F241B]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
            ABINEST
          </span>
          <p className="text-xs text-emerald-200/70 mt-1 max-w-sm leading-relaxed">
            Studio Rekayasa Perangkat Lunak, Sistem SIAKAD Sekolah Modern &amp; Otomasi Bisnis Berkecepatan Tinggi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-100/80 font-medium">
          <a
            href="#systems"
            onClick={(e) => handleSmoothScroll(e, "#systems")}
            className="hover:text-white transition-colors"
          >
            Sistem Unggulan
          </a>
          <a
            href="#case-study"
            onClick={(e) => handleSmoothScroll(e, "#case-study")}
            className="hover:text-white transition-colors"
          >
            Studi Kasus
          </a>
          <a
            href="#engineering"
            onClick={(e) => handleSmoothScroll(e, "#engineering")}
            className="hover:text-white transition-colors"
          >
            Standar Rekayasa
          </a>
          <Link href="/portal" className="text-emerald-300 font-bold hover:underline">
            Client Portal (/portal)
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Masuk Klien
          </Link>
        </div>

        <div className="text-[11px] text-emerald-200/50 font-mono">
          © {new Date().getFullYear()} Abinest Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
