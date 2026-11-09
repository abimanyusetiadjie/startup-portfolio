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
    { label: "Testimoni", href: "#testimoni" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
          : "bg-[#F8FAFC]/80 backdrop-blur-sm border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        {/* Left: Abinest Authentic Logo */}
        <Link href="/" className="flex items-center gap-2">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Center: Clean Minimalist Navigation Links */}
        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium text-slate-700 hover:text-[#0F172A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Portal Klien & Minimalist Pill Outline CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-600 hover:text-[#0F172A] transition-colors"
          >
            Portal Klien
          </Link>
          <a
            href="#kontak"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold text-[#0F172A] bg-white border border-slate-900/80 hover:bg-[#0F172A] hover:text-white transition-all duration-200 shadow-sm"
          >
            <span>Let&apos;s Talk</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center gap-2.5">
          <a
            href="#kontak"
            className="px-4 py-1.5 rounded-full text-xs font-semibold text-[#0F172A] border border-slate-900 bg-white"
          >
            Let&apos;s Talk
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
        <div className="lg:hidden bg-[#F8FAFC] border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-[#064E3B] py-2 border-b border-slate-200/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold text-slate-600 py-1.5"
            >
              Portal Klien Login
            </Link>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center py-2.5 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857]"
            >
              Konsultasi Kebutuhan Anda
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
