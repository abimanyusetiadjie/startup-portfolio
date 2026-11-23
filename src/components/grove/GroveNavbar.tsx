"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Calculator } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";
import { findVisibleSection } from "./contact-utils";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const sections = [
      "layanan-utama",
      "portofolio",
      "cara-kerja",
      "harga",
      "tech-stack",
      "faq",
    ];

    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      if (window.scrollY < 300) {
        setActiveSection(null);
        return;
      }

      const scrollPos = window.scrollY + 220;
      let currentActive: string | null = null;
      let highestPassedTop = -Infinity;

      for (const id of sections) {
        const el = findVisibleSection(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= scrollPos && top > highestPassedTop) {
          highestPassedTop = top;
          currentActive = id;
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "/#layanan-utama", id: "layanan-utama" },
    { label: "Studi Kasus", href: "/#portofolio", id: "portofolio" },
    { label: "Alur Kerja", href: "/#cara-kerja", id: "cara-kerja" },
    { label: "Investasi", href: "/#harga", id: "harga" },
    { label: "FAQ", href: "/#faq", id: "faq" },
    { label: "Demo", href: "/demo", id: "demo" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetHref: string
  ) => {
    const hashIndex = targetHref.indexOf("#");
    if (hashIndex === -1) return;

    const hash = targetHref.slice(hashIndex);
    setMobileMenuOpen(false);
    const element = findVisibleSection(hash);
    if (element) {
      e.preventDefault();
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.location.hash !== hash) {
          window.history.replaceState(null, "", hash);
        }
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3 px-4 sm:px-6" : "py-3.5 px-4 sm:px-8"
      }`}
    >
      {/* Subtle Top Scroll Progress Rail */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00C9A7] origin-left z-[60] pointer-events-none"
      />

      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between gap-4 transition-all duration-300 rounded-full ${
          scrolled
            ? "h-14 px-4 sm:px-5 bg-white/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(8,22,41,0.1)] ring-1 ring-slate-900/[0.08]"
            : "h-14 px-4 sm:px-5 bg-white/85 backdrop-blur-md shadow-[0_4px_20px_rgba(8,22,41,0.05)] ring-1 ring-white/90"
        }`}
      >
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0 pl-1">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Fluid Motion Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 text-[13.5px]">
          {navLinks.map((item) => {
            const isSelected = activeSection === item.id;
            const isSectionHash = item.href.includes("#");

            if (!isSectionHash) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3.5 py-1.5 rounded-full font-medium text-[#475569] hover:text-[#0284C7] hover:bg-sky-500/[0.08] transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors whitespace-nowrap ${
                  isSelected
                    ? "font-semibold text-[#0284C7]"
                    : "font-medium text-[#475569] hover:text-[#081629]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-sky-500/10 -z-10"
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Signature Abinest Pill Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <Link
            href="/audit-gratis"
            className="inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold text-[#081629] bg-white/85 hover:bg-white shadow-sm ring-1 ring-slate-900/[0.08] transition-all whitespace-nowrap"
          >
            Audit Gratis
          </Link>

          <Link
            href="/#kontak"
            onClick={(e) => handleSmoothScroll(e, "/#kontak")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-gradient-to-r from-[#081629] via-[#0F2744] to-[#0284C7] hover:brightness-110 shadow-[0_6px_18px_rgba(2,132,199,0.28)] transition-all whitespace-nowrap"
          >
            <span>Konsultasi</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#00E5BE]" />
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/#kontak"
            onClick={(e) => handleSmoothScroll(e, "/#kontak")}
            className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#081629] to-[#0284C7] shadow-[0_4px_12px_rgba(2,132,199,0.28)] transition-all"
          >
            Konsultasi
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/90 text-[#081629] ring-1 ring-slate-900/[0.08] hover:bg-white transition-colors cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Minimalist Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full z-50 bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-lg">
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              if (!item.href.includes("#")) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[13.5px] font-semibold px-4 py-3 text-[#0284C7] hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0284C7]" />
                  </Link>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`flex items-center justify-between text-[13.5px] px-4 py-3 transition-colors ${
                    isActive
                      ? "text-[#0284C7] font-bold bg-sky-50/50"
                      : "text-slate-700 font-medium hover:text-[#081629] hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />}
                </Link>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <Link
              href="/audit-gratis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-500" />
              <span>Audit Gratis</span>
            </Link>
            <Link
              href="/#kontak"
              onClick={(e) => handleSmoothScroll(e, "/#kontak")}
              className="flex items-center justify-center py-2.5 text-[13px] font-semibold text-white bg-gradient-to-r from-[#081629] to-[#0284C7] rounded-xl transition-all"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
