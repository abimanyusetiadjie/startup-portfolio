"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function GroveNavbar() {
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
    <div className="w-full font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR (Deep Forest Green #142E22) */}
      <div className="bg-[#142E22] text-[#E0E7E2] py-2 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#0F241B]">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>Jasa Pembuatan Website, Sistem Informasi &amp; Otomasi • Konsultasi Teknis Gratis • Garansi SLA 99.9%</span>
        </span>
      </div>

      {/* 2. MAIN NAVIGATION (Warm Oat #F4F1EA) */}
      <header className="bg-[#F4F1EA] border-b border-[#E7E2D6] px-4 sm:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Logo: ABINEST */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="font-heading font-extrabold text-2xl tracking-tight text-[#18362B] group-hover:text-[#D15B3A] transition-colors">
              ABINEST
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-wider text-[#717872] px-2 py-0.5 rounded bg-[#EAE5D9] border border-[#DDD7C9]">
              SOFTWARE HOUSE
            </span>
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#1A201C] tracking-wide">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="hover:text-[#18362B] transition-colors"
            >
              Layanan &amp; Sistem
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="hover:text-[#18362B] transition-colors"
            >
              Studi Kasus SIAKAD
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="hover:text-[#18362B] transition-colors"
            >
              Mengapa Abinest
            </a>
            <Link
              href="/portal"
              className="text-[#18362B] font-bold flex items-center gap-1 hover:underline"
            >
              <span>Client Portal</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1A201C] hover:text-[#18362B] hover:bg-[#EAE5D9] transition-colors"
            >
              Masuk Klien
            </Link>

            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="px-5 py-2 rounded-full bg-[#18362B] text-white font-semibold text-xs hover:bg-[#122A21] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Konsultasi Gratis</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
