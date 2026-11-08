"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
    { label: "Beranda", href: "#beranda" },
    { label: "Layanan", href: "#layanan" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Metodologi", href: "#metodologi" },
    { label: "Studi Kasus", href: "#studi-kasus" },
    { label: "FAQ", href: "#faq" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
          : "bg-white/80 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Authentic Abinest Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Center: Clean Slate Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: "Masuk / Portal" + "Konsultasi Gratis" (matching reference image) */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/80 border border-slate-200 transition-all"
          >
            Portal Klien
          </Link>
          <a
            href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20konsultasi%20gratis%20mengenai%20kebutuhan%20IT."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.45)] transition-all duration-200"
          >
            <span>Konsultasi Gratis</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="https://wa.me/6285708677918"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden px-3 py-1.5 rounded-lg text-[11px] font-semibold text-white bg-orange-500"
          >
            Konsultasi
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-orange-600 py-1.5 border-b border-slate-100"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 border border-slate-200"
            >
              Portal Klien
            </Link>
            <a
              href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-white bg-orange-500 shadow-md"
            >
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
