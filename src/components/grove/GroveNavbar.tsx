"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan-utama" },
    { label: "Hasil Kerja", href: "#studi-kasus" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
          : "bg-[#FAF9F6]/85 backdrop-blur-sm border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Abinest Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Center: Bahasa Indonesia Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13.5px] font-medium text-slate-700 hover:text-[#C2672B] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Portal Klien & Sticky CTA */}
        <div className="hidden sm:flex items-center gap-3.5">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-600 hover:text-[#0F172A] transition-colors mr-1"
          >
            Portal Klien
          </Link>
          <a
            href="#kontak"
            className="inline-flex items-center gap-1.5 justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-[0_4px_14px_rgba(217,119,54,0.28)] transition-all"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="#kontak"
            className="px-3.5 py-2 rounded-full text-xs font-semibold text-white bg-[#D97736]"
          >
            Konsultasi Gratis
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-slate-200"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F6] border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-[#C2672B] py-2 border-b border-slate-200/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 text-center rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-200"
            >
              Masuk Portal Klien
            </Link>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 text-center rounded-xl text-xs font-semibold text-white bg-[#D97736] shadow-md"
            >
              Konsultasikan Kebutuhan Sistem Anda
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
