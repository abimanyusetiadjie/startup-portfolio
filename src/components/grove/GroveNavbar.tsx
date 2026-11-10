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
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = ["layanan-utama", "portofolio", "cara-kerja", "perbandingan", "harga", "faq"];
      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan-utama", id: "layanan-utama" },
    { label: "Hasil Kerja", href: "#portofolio", id: "portofolio" },
    { label: "Cara Kerja", href: "#cara-kerja", id: "cara-kerja" },
    { label: "Bandingkan", href: "#perbandingan", id: "perbandingan" },
    { label: "Harga", href: "#harga", id: "harga" },
    { label: "FAQ", href: "#faq", id: "faq" },
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
      {/* Dynamic Scroll Progress Bar (Electric Cobalt Gradient) */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] origin-left z-[60]"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-[0_4px_24px_rgba(15,23,42,0.04)]"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-[0_1px_3px_rgba(15,23,42,0.02)]"
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
            className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 backdrop-blur-xs text-[13.5px]"
          >
            {navLinks.map((item, idx) => {
              const isSelected = hoveredIdx !== null ? hoveredIdx === idx : activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-4 py-1.5 rounded-full transition-all duration-200 font-medium select-none text-center ${
                    isSelected
                      ? "text-slate-950 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {/* Floating Spring Hover Capsule */}
                  {isSelected && (
                    <motion.span
                      layoutId="nav-hover-capsule"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.08)] -z-10"
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right: Actions & High-Converting CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/login"
              className="text-xs font-semibold text-slate-600 hover:text-slate-950 hover:bg-slate-100 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              Portal Klien
            </Link>
            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full text-xs sm:text-[13px] font-semibold text-white bg-[#0B1220] hover:bg-slate-800 hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all duration-200 shadow-xs group"
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
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-2 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`flex items-center justify-between text-sm font-semibold px-3.5 py-2.5 rounded-xl transition-colors ${
                    isActive
                      ? "text-[#1D4ED8] bg-blue-50 font-bold"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />}
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/login"
                className="w-full text-center py-2 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl border border-slate-200"
              >
                Portal Klien (Tracking Progres)
              </Link>
              <a
                href="#kontak"
                onClick={(e) => handleSmoothScroll(e, "#kontak")}
                className="w-full text-center py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-xl shadow-sm transition-colors"
              >
                Konsultasi Gratis Sekarang
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
