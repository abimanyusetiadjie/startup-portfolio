"use client";

import Link from "next/link";

interface GroveFooterProps {
  isTechMode?: boolean;
}

export function GroveFooter({ isTechMode = false }: GroveFooterProps) {
  return (
    <footer className="bg-[#142E22] text-[#E0E7E2] py-12 px-4 sm:px-8 lg:px-12 font-sans border-t border-[#0F241B]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-heading font-extrabold text-xl text-white tracking-tight">
            {isTechMode ? "TRILOE.STUDIO" : "GROVE"}
          </span>
          <p className="text-xs text-emerald-200/60 mt-1">
            {isTechMode
              ? "Studio Rekayasa Perangkat Lunak & Otomasi B2B"
              : "Plants that make a room feel alive • London, UK"}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-100/80">
          <Link href="/portal" className="hover:text-white transition-colors">
            Portal Klien (/portal)
          </Link>
          <Link href="/login" className="hover:text-white transition-colors">
            Masuk Klien
          </Link>
          <a href="#favourites" className="hover:text-white transition-colors">
            Koleksi
          </a>
          <a href="#promise" className="hover:text-white transition-colors">
            Standar Mutu
          </a>
        </div>

        <div className="text-[11px] text-emerald-200/50">
          © {new Date().getFullYear()} {isTechMode ? "Triloe Software Studio" : "Grove Plants Ltd"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
