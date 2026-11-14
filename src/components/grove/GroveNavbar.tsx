"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Lock, Calculator } from "lucide-react";
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
      const sections = ["layanan-utama", "portofolio", "cara-kerja", "harga", "tech-stack"];
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
    { label: "Harga", href: "#harga", id: "harga" },
    { label: "Teknologi", href: "#tech-stack", id: "tech-stack" },
    { label: "Demo Interaktif", href: "/demo", id: "demo" },
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
      } else {
        window.location.href = `/${targetId}`;
      }
    }
  };

  return (
    <>
      {/* Dynamic Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] origin-left z-[60]"
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-slate-300 shadow-[0_4px_20px_rgba(15,23,42,0.06)]"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200"
        }`}
      >
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Left: Brand Identity */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <AbinestLogo size="md" showTagline={false} />
          </Link>

          {/* Center: Crisp Bordered Navigation Group (Bootstrap Nav-Pills Precision) */}
          <nav
            onMouseLeave={() => setHoveredIdx(null)}
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-xl bg-slate-100 border border-slate-300/80 text-[12.5px] xl:text-[13px]"
          >
            {navLinks.map((item, idx) => {
              const isSelected = hoveredIdx !== null ? hoveredIdx === idx : activeSection === item.id;
              const isRoute = item.href.startsWith("/");
              const content = (
                <>
                  {isSelected && (
                    <motion.span
                      layoutId="nav-hover-capsule"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-lg bg-white border border-slate-300 shadow-xs -z-10"
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5 whitespace-nowrap">
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </span>
                </>
              );

              if (isRoute) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg transition-all duration-150 font-semibold select-none text-center ${
                      isSelected
                        ? "text-[#1D4ED8]"
                        : "text-blue-700 hover:text-[#1D4ED8]"
                    }`}
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  className={`relative px-2.5 xl:px-3 py-1.5 rounded-lg transition-all duration-150 font-semibold select-none text-center ${
                    isSelected
                      ? "text-[#0F172A]"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {content}
                </a>
              );
            })}
          </nav>

          {/* Right: Structured Outline + Solid Primary Button Group */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <Link
              href="/audit-gratis"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors whitespace-nowrap"
            >
              <Calculator className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Audit Gratis</span>
            </Link>

            <Link
              href="/login"
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-colors whitespace-nowrap"
            >
              <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Portal Klien</span>
            </Link>

            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs sm:text-[13px] font-bold text-white bg-[#0F172A] hover:bg-[#2563EB] border border-transparent shadow-xs transition-all duration-150 group whitespace-nowrap"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu (Crisp Divided List) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-300 px-5 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="ui-list-group">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id;
                if (item.href.startsWith("/")) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between text-sm font-bold px-4 py-2.5 text-[#1D4ED8] bg-blue-50/60 hover:bg-blue-50 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-blue-600 text-white">
                        Live
                      </span>
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className={`flex items-center justify-between text-sm font-semibold px-4 py-2.5 transition-colors ${
                      isActive
                        ? "text-[#1D4ED8] bg-blue-50 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#2563EB]" />}
                  </a>
                );
              })}
              <Link
                href="/audit-gratis"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-sm font-bold px-4 py-2.5 text-emerald-800 bg-emerald-50/50 hover:bg-emerald-50 transition-colors"
              >
                <span>Audit &amp; Kalkulator ROI Gratis</span>
                <Calculator className="w-4 h-4 text-emerald-600" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Portal Klien</span>
              </Link>
              <a
                href="#kontak"
                onClick={(e) => handleSmoothScroll(e, "#kontak")}
                className="text-center py-2.5 text-xs font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] rounded-lg shadow-xs transition-colors"
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
