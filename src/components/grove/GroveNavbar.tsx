"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks =
    language === "id"
      ? [
          { label: "Beranda", href: "#beranda", active: true },
          { label: "Tentang", href: "#layanan" },
          { label: "Layanan", href: "#arsitektur" },
          { label: "Studi Kasus", href: "#studi-kasus" },
          { label: "Wawasan", href: "#wawasan" },
          { label: "Kontak", href: "#kontak" },
        ]
      : [
          { label: "Home", href: "#beranda", active: true },
          { label: "About", href: "#layanan" },
          { label: "Services", href: "#arsitektur" },
          { label: "Case Studies", href: "#studi-kasus" },
          { label: "Blog", href: "#wawasan" },
          { label: "Contact", href: "#kontak" },
        ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212]/90 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Emblem + Name */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-7 h-7 rounded-full bg-white text-[#121212] flex items-center justify-center font-bold text-xs shadow-sm">
            <Shield className="w-4 h-4 fill-[#121212] stroke-[#121212]" />
          </div>
          <span className="text-[15px] font-semibold tracking-tight text-white">
            Abinest <span className="font-normal text-white/80">IT</span>
          </span>
        </Link>

        {/* Center: Subtle Navigation Links (matching slice_1.png) */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex items-center gap-1.5 text-[13px] transition-colors ${
                item.active
                  ? "text-white font-medium"
                  : "text-[#8E8E93] hover:text-white"
              }`}
            >
              {item.active && (
                <Shield className="w-3.5 h-3.5 text-[#8E8E93]" />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Language Toggle + Dark Pill "Contact Us" Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-medium text-[#8E8E93] hover:text-white transition-colors"
            title="Switch Language"
          >
            <Globe className="w-3 h-3" />
            <span className="uppercase">{language}</span>
          </button>

          <a
            href="#kontak"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[12px] font-medium text-white bg-[#1A1A1A] hover:bg-[#242424] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all"
          >
            {language === "id" ? "Hubungi Kami" : "Contact Us"}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setLanguage(language === "id" ? "en" : "id")}
            className="px-2.5 py-1 rounded-full text-[11px] text-[#8E8E93] border border-white/10 uppercase"
          >
            {language}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-white/80 hover:text-white border border-white/10 bg-[#1A1A1A]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161616] border-b border-white/10 px-6 py-5 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#8E8E93] hover:text-white border-b border-white/[0.05]"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex items-center justify-between gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-[#8E8E93] hover:text-white"
            >
              {language === "id" ? "Portal Klien" : "Client Portal"}
            </Link>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="px-5 py-2 rounded-full text-xs font-medium text-white bg-[#1A1A1A] border border-white/15"
            >
              {language === "id" ? "Hubungi Kami" : "Contact Us"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
