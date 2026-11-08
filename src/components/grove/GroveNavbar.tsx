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
    { label: "Products", href: "#layanan" },
    { label: "Solutions", href: "#tech-stack" },
    { label: "Case Studies", href: "#studi-kasus" },
    { label: "About", href: "#metodologi" },
    { label: "Contact", href: "#kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F6]/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          : "bg-[#FAF9F6]/80 backdrop-blur-sm border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Abinest Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Center: Clean Refined Navigation Links matching reference image */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-slate-700 hover:text-[#C2672B] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: "Let's Talk" rounded pill outline button matching reference image */}
        <div className="hidden sm:flex items-center gap-3.5">
          <Link
            href="/login"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors mr-1"
          >
            Portal Klien
          </Link>
          <a
            href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20berkonsultasi%20mengenai%20proyek%20sistem%2Fwebsite."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:border-slate-400 transition-all"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <a
            href="https://wa.me/6285708677918"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-[#D97736]"
          >
            Talk
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-white border border-slate-200"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-slate-200 px-6 py-6 space-y-3 shadow-xl">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-slate-700 hover:text-[#C2672B] py-1.5 border-b border-slate-200/50"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl text-xs font-semibold text-slate-700 border border-slate-300 bg-white"
            >
              Portal Klien
            </Link>
            <a
              href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20berkonsultasi."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 rounded-xl text-xs font-semibold text-white bg-[#D97736] shadow-md"
            >
              Let&apos;s Talk via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
