"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
      label: lang === "id" ? "Portofolio" : "Works",
      href: "#portofolio",
    },
    {
      label: lang === "id" ? "Layanan & Harga" : "Services & Pricing",
      href: "#layanan",
    },
    {
      label: lang === "id" ? "Alur Kerja" : "Process",
      href: "#alur-kerja",
    },
    {
      label: lang === "id" ? "Kontak" : "Contact",
      href: "#kontak",
    },
  ];

  return (
    <>
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-5xl font-sans transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-5 sm:px-6 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#090D16]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80"
              : "bg-[#090D16]/85 backdrop-blur-md border border-white/10 shadow-lg shadow-black/40"
          }`}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <div className="w-5 h-5 rounded-md bg-white flex items-center justify-center text-[#090D16] font-bold text-xs tracking-tighter group-hover:bg-emerald-400 transition-colors">
              A
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Abinest<span className="text-emerald-400">.</span>
            </span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-400 ml-1 font-normal">
              Software Studio
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-300 tracking-wide">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions: ID/EN + Client Portal + WhatsApp CTA */}
          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center p-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2 py-0.5 rounded-full transition-all ${
                  lang === "id"
                    ? "bg-white text-zinc-950 font-bold"
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
                    ? "bg-white text-zinc-950 font-bold"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Client Portal Link */}
            <Link
              href="/portal"
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/20 hover:border-white/40 text-xs font-medium text-zinc-200 hover:text-white transition-all"
            >
              <span>Client Portal</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-400" />
            </Link>

            {/* Direct WhatsApp Consultation */}
            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{lang === "id" ? "Mulai Diskusi" : "Let's Talk"}</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka Menu"
              className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white hover:bg-white/15 transition-colors cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-[#070A11] text-white p-6 flex flex-col justify-between font-sans"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <span className="text-xl font-bold">
                Abinest<span className="text-emerald-400">.</span>
              </span>
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 text-white cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 py-8">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block text-2xl font-bold text-zinc-200 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/portal"
                onClick={() => setIsMenuOpen(false)}
                className="block text-xl font-medium text-emerald-400 pt-2"
              >
                Masuk ke Client Portal →
              </Link>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                <span>BAHASA / LANGUAGE</span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setLang("id")}
                    className={lang === "id" ? "text-white font-bold" : ""}
                  >
                    ID
                  </button>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={lang === "en" ? "text-white font-bold" : ""}
                  >
                    EN
                  </button>
                </div>
              </div>
              <a
                href="#kontak"
                onClick={(e) => handleSmoothScroll(e, "#kontak")}
                className="block w-full py-3.5 text-center rounded-full bg-white text-zinc-950 font-bold text-sm"
              >
                {lang === "id" ? "Mulai Konsultasi Proyek" : "Book Project Scoping"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
