"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan-utama" },
    { label: "Hasil Kerja", href: "#portofolio" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-emerald-500 via-teal-400 to-[#064E3B] origin-left z-[60]"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FAFC]/90 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(15,23,42,0.03)]"
            : "bg-[#F8FAFC]/80 backdrop-blur-sm border-b border-slate-200/40"
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Abinest Clean Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <AbinestLogo size="md" showTagline={false} />
          </Link>

          {/* Center: Clean Minimalist Navigation Links separated by middle dots (matching image) */}
          <nav className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-slate-700">
            {navLinks.map((item, idx) => (
              <div key={item.label} className="flex items-center gap-6">
                <a
                  href={item.href}
                  className="hover:text-[#0F172A] transition-colors"
                >
                  {item.label}
                </a>
                {idx < navLinks.length - 1 && (
                  <span className="text-slate-400 select-none">•</span>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Pill Button "Konsultasi Gratis" Matching Reference Image */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-semibold text-slate-600 hover:text-[#0F172A] transition-colors px-3 py-1.5"
            >
              Portal Klien
            </Link>
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold text-[#0F172A] bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 transition-all duration-200 shadow-xs"
            >
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-slate-800 hover:text-emerald-700 py-1.5"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5 border-t border-slate-100">
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
                Konsultasi Gratis
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
