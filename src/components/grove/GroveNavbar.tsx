"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-slate-900 via-indigo-600 to-blue-500 origin-left z-[60]"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F8FAFC]/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
            : "bg-[#F8FAFC]/80 backdrop-blur-sm border-b border-slate-200/40"
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
          {/* Left: Abinest Clean Brand Logo */}
          <Link href="/" className="flex items-center gap-2">
            <AbinestLogo size="md" showTagline={false} />
          </Link>

          {/* Center: Interactive Sliding Pill Navigation Menu */}
          <nav
            onMouseLeave={() => setHoveredIdx(null)}
            className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-slate-200/50 border border-slate-200/60 backdrop-blur-xs text-[13.5px]"
          >
            {navLinks.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-200 font-medium select-none text-center ${
                    isHovered
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Floating Spring Hover Capsule */}
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover-capsule"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white shadow-xs border border-slate-300/70 -z-10"
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions & High-Converting CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-200/60 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              Portal Klien
            </Link>
            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-[#0F172A] hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-xs group"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-lg">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block text-sm font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100 px-3 py-2 rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2.5 border-t border-slate-100">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors"
              >
                Portal Klien Login
              </Link>
              <a
                href="#kontak"
                onClick={(e) => handleSmoothScroll(e, "#kontak")}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 active:scale-95 transition-all"
              >
                <span>Konsultasi Gratis</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
