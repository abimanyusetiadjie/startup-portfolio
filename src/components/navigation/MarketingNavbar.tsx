"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Katalog Visual", href: "#showcase-visual" },
  { label: "Pilar Layanan", href: "#layanan" },
  { label: "Arsitektur Teknis", href: "#keunggulan-teknis" },
  { label: "Studi Kasus", href: "#studi-kasus" },
] as const;

export function MarketingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/85 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F172A] text-white shadow-md group-hover:bg-[#2563EB] transition-colors">
              <Cpu className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-[#09090B]">
                TRILOE<span className="text-[#2563EB]">.STUDIO</span>
              </span>
              <span className="font-mono text-[9px] text-[#64748B] tracking-wider uppercase -mt-0.5">
                B2B Software &amp; Automation
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Pill Style) */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 border border-[#E2E8F0] shadow-sm backdrop-blur-sm">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#64748B] hover:text-[#09090B] hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="h-4 w-[1px] bg-slate-200 mx-1" />
            <Link
              href="/portal"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono font-semibold text-[#2563EB] hover:bg-[#2563EB]/10 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>/portal</span>
            </Link>
          </nav>

          {/* CTA & Portal Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full text-xs font-semibold text-[#09090B] hover:text-[#2563EB] hover:bg-white border border-transparent hover:border-[#E2E8F0] transition-colors"
            >
              Masuk Klien
            </Link>
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#2563EB] text-white text-xs font-semibold shadow-md shadow-[#2563EB]/20 hover:bg-[#1D4ED8] transition-colors"
            >
              <span>Konsultasi Gratis</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#E2E8F0] text-[#09090B]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-b border-[#E2E8F0] px-4 py-6 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#09090B] hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/portal"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-mono font-semibold text-[#2563EB] hover:bg-[#2563EB]/10 transition-colors flex items-center gap-2"
            >
              <span className="h-2 w-2 rounded-full bg-[#10B981]" />
              <span>Portal Klien (/portal)</span>
            </Link>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold text-[#09090B] border border-[#E2E8F0]"
              >
                Masuk Klien
              </Link>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="w-full text-center py-2.5 rounded-full text-xs font-semibold bg-[#2563EB] text-white shadow-md"
              >
                Mulai Konsultasi Teknis →
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
