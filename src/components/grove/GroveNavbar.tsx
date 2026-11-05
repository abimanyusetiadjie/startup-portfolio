"use client";

import Link from "next/link";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";

interface GroveNavbarProps {
  isTechMode?: boolean;
  onToggleMode?: () => void;
}

export function GroveNavbar({ isTechMode = false, onToggleMode }: GroveNavbarProps) {
  return (
    <div className="w-full font-sans">
      {/* 1. TOP ANNOUNCEMENT BAR (Dark Forest Green) */}
      <div className="bg-[#142E22] text-[#E0E7E2] py-2 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#0F241B]">
        <span>
          {isTechMode
            ? "Jaminan Uptime 99.9% SLA • Arsitektur Next.js 15 Edge • Konsultasi Teknis Arsitektur Bebas Biaya"
            : "Free UK delivery over £50 • Every plant potted, checked and packed by hand"}
        </span>
        {onToggleMode && (
          <button
            onClick={onToggleMode}
            className="ml-3 underline font-mono text-[10px] text-emerald-300 hover:text-white"
          >
            {isTechMode ? "Lihat Versi Asli Grove" : "Ganti Mode Tech Portfolio"}
          </button>
        )}
      </div>

      {/* 2. MAIN NAVIGATION (Clean Warm Sand #F4F1EA) */}
      <header className="bg-[#F4F1EA] border-b border-[#E7E2D6] px-4 sm:px-8 lg:px-12 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Logo */}
          <Link href="/" className="font-heading font-extrabold text-2xl tracking-tighter text-[#18362B]">
            {isTechMode ? "TRILOE" : "GROVE"}
          </Link>

          {/* Center Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-[#1A201C] tracking-wide">
            {isTechMode ? (
              <>
                <a href="#favourites" className="hover:text-[#18362B] transition-colors">Sistem</a>
                <a href="#feature-box" className="hover:text-[#18362B] transition-colors">Studi Kasus</a>
                <a href="#promise" className="hover:text-[#18362B] transition-colors">Arsitektur</a>
                <Link href="/portal" className="text-[#18362B] font-bold flex items-center gap-1 hover:underline">
                  Portal Klien <ArrowRight className="h-3 w-3" />
                </Link>
              </>
            ) : (
              <>
                <a href="#favourites" className="hover:text-[#18362B] transition-colors">Shop</a>
                <a href="#feature-box" className="hover:text-[#18362B] transition-colors">Collections</a>
                <a href="#promise" className="hover:text-[#18362B] transition-colors">Plant care</a>
                <a href="#promise" className="hover:text-[#18362B] transition-colors">Reviews</a>
              </>
            )}
          </nav>

          {/* Right Action Icons & Bag Pill Button */}
          <div className="flex items-center gap-4 text-xs font-medium text-[#1A201C]">
            <button className="hidden sm:inline-flex items-center gap-1 text-[#6B736C] hover:text-[#1A201C]">
              <Search className="h-4 w-4" />
              <span>Search</span>
            </button>

            {isTechMode ? (
              <a
                href="#konsultasi"
                className="px-4 py-1.5 rounded-full bg-[#18362B] text-white font-medium text-xs hover:bg-[#122A21] transition-colors shadow-sm"
              >
                Konsultasi
              </a>
            ) : (
              <button className="px-4 py-1.5 rounded-full bg-[#18362B] text-white font-medium text-xs hover:bg-[#122A21] transition-colors flex items-center gap-1.5 shadow-sm">
                <ShoppingBag className="h-3.5 w-3.5" />
                <span>Bag (0)</span>
              </button>
            )}
          </div>
        </div>
      </header>
    </div>
  );
}
