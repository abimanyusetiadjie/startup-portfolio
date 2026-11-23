"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight, Calculator } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";
import { findVisibleSection } from "./contact-utils";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      <div
        className={`max-w-[1200px] mx-auto flex items-center justify-between gap-4 transition-all duration-300 rounded-full ${
          scrolled
            ? "h-14 px-4 sm:px-5 bg-white/85 backdrop-blur-xl shadow-[0_12px_40px_rgba(10,37,64,0.09)] ring-1 ring-slate-900/[0.06]"
            : "h-14 px-4 sm:px-5 bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgba(10,37,64,0.04)] ring-1 ring-white/80"
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
                  className="px-3.5 py-1.5 rounded-full font-medium text-[#425466] hover:text-[#635BFF] hover:bg-[#635BFF]/[0.07] transition-colors whitespace-nowrap"
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
                    ? "font-semibold text-[#635BFF]"
                    : "font-medium text-[#425466] hover:text-[#0A2540]"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-[#635BFF]/10 -z-10"
                  />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Vibrant Stripe-Style Pill Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <Link
            href="/audit-gratis"
            className="inline-flex items-center px-4 py-2 rounded-full text-[13px] font-semibold text-[#0A2540] bg-white/80 hover:bg-white shadow-sm ring-1 ring-slate-900/[0.08] transition-all whitespace-nowrap"
          >
            Audit Gratis
          </Link>

          <Link
            href="/#kontak"
            onClick={(e) => handleSmoothScroll(e, "/#kontak")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#4F46E5] hover:brightness-110 shadow-[0_6px_18px_rgba(99,91,255,0.32)] transition-all whitespace-nowrap"
          >
            <span>Konsultasi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/#kontak"
            onClick={(e) => handleSmoothScroll(e, "/#kontak")}
            className="sm:hidden px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#635BFF] to-[#4F46E5] shadow-[0_4px_12px_rgba(99,91,255,0.3)] transition-all"
          >
            Konsultasi
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full bg-white/90 text-[#0A2540] ring-1 ring-slate-900/[0.08] hover:bg-white transition-colors cursor-pointer"
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
                    className="flex items-center justify-between text-[13.5px] font-semibold px-4 py-3 text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
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
                      ? "text-blue-600 font-bold bg-blue-50/40"
                      : "text-slate-700 font-medium hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
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
              className="flex items-center justify-center py-2.5 text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
            >
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
