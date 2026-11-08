"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      setIsMenuOpen(false);
      if (targetId === "#beranda") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navLinks = [
    {
      label: lang === "id" ? "Beranda" : "Home",
      href: "#beranda",
    },
    {
      label: lang === "id" ? "Pilar Solusi" : "Solutions",
      href: "#pilar",
    },
    {
      label: lang === "id" ? "Tech Stack" : "Tech Stack",
      href: "#tech-stack",
    },
    {
      label: lang === "id" ? "Studi Kasus" : "Case Studies",
      href: "#studi-kasus",
    },
    {
      label: lang === "id" ? "FAQ" : "FAQ",
      href: "#faq",
    },
    {
      label: lang === "id" ? "Kontak" : "Contact",
      href: "#kontak",
    },
  ];

  return (
    <>
      <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl font-sans transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#07090E]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80"
              : "bg-[#07090E]/85 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40"
          }`}
        >
          {/* Brand Logo & Wordmark with Warm Amber Glow */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-zinc-950 shadow-md shadow-orange-500/20">
              <Shield className="w-4 h-4 fill-zinc-950 stroke-zinc-950" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white font-heading">
                Abinest<span className="text-amber-500">.</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest uppercase text-zinc-400">
                SOFTWARE IT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-xs font-medium text-zinc-300 tracking-wide">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="hover:text-amber-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === "id"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === "en"
                    ? "bg-amber-500 text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Client Portal Ghost Button */}
            <Link
              href="/portal"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-amber-400/50 text-xs font-medium text-zinc-200 hover:text-white transition-all"
            >
              <span>Client Portal</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </Link>

            {/* Warm Amber Glowing CTA Button */}
            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 hover:brightness-110 text-xs font-bold transition-all shadow-md shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{lang === "id" ? "Konsultasi" : "Get Started"}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka Menu"
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-Screen Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#06080C]/98 backdrop-blur-2xl text-white p-6 flex flex-col justify-between font-sans"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EA580C] flex items-center justify-center">
                  <Shield className="w-4 h-4 fill-zinc-950 stroke-zinc-950" />
                </div>
                <span className="text-xl font-bold font-heading">
                  Abinest<span className="text-amber-500">.</span>
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-5 py-6">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block text-2xl font-bold text-zinc-200 hover:text-amber-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/portal"
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-semibold text-amber-400 pt-3"
              >
                Masuk ke Client Portal →
              </Link>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-4">
              <a
                href="#kontak"
                onClick={(e) => handleSmoothScroll(e, "#kontak")}
                className="block w-full py-3.5 text-center rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 font-bold text-sm shadow-lg shadow-orange-500/20"
              >
                {lang === "id" ? "Mulai Konsultasi Proyek" : "Book Project Consultation"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
