"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll to adjust floating pill elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and ESC key listener when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMenuOpen(false);
        }
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

  // Struktur Menu Referensi: Beranda | Layanan | Harga | Bantuan | Tentang
  const navItems = [
    {
      num: "01",
      title: lang === "id" ? "Beranda" : "Home",
      desc:
        lang === "id"
          ? "Ringkasan kapabilitas rekayasa sistem & standar infrastruktur Abinest"
          : "Overview of Abinest software engineering capabilities & infrastructure",
      href: "#beranda",
    },
    {
      num: "02",
      title: lang === "id" ? "Layanan" : "Services",
      desc:
        lang === "id"
          ? "SIAKAD Sekolah Anti-Down, Website Next.js 15, ERP Omnichannel, & Bot WA"
          : "School SIAKAD, Next.js 15 Web, Omnichannel ERP & WhatsApp Automation",
      href: "#systems",
    },
    {
      num: "03",
      title: lang === "id" ? "Harga" : "Pricing",
      desc:
        lang === "id"
          ? "Diskusi cakupan fitur & estimasi investasi proyek secara transparan"
          : "Transparent feature scoping and project investment estimation",
      href: "#konsultasi",
    },
    {
      num: "04",
      title: lang === "id" ? "Bantuan" : "Support",
      desc:
        lang === "id"
          ? "Garansi 100% kepemilikan source code, SLA uptime 99.9%, & pemeliharaan"
          : "100% source code ownership, 99.9% uptime SLA warranty & maintenance",
      href: "#bantuan",
    },
    {
      num: "05",
      title: lang === "id" ? "Tentang" : "About",
      desc:
        lang === "id"
          ? "Profil studio, status operasional server live, & kontak resmi"
          : "Studio profile, live server operational telemetry & official contact",
      href: "#tentang",
    },
  ];

  return (
    <>
      {/* 1. FLOATING PILL NAVBAR (MODERN B2B SOFTWARE STUDIO) */}
      <header className="fixed top-5 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl font-sans transition-all duration-300">
        <nav
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#11141C]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60 scale-[0.99]"
              : "bg-[#11141C]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40"
          }`}
        >
          {/* 1. BRAND IDENTITY (Kiri) */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            {/* Custom Geometric Diamond Mark */}
            <div className="relative flex items-center justify-center w-6 h-6">
              <span className="w-3.5 h-3.5 rotate-45 border-[1.75px] border-white group-hover:border-emerald-400 group-hover:rotate-90 transition-all duration-300" />
              <span className="absolute w-1 h-1 rounded-full bg-emerald-400" />
            </div>

            {/* Wordmark: Abinest Title Case + Emerald Dot */}
            <div className="flex items-center gap-2">
              <span className="text-xl tracking-tight text-white font-bold">
                Abinest<span className="text-emerald-400">.</span>
              </span>

              {/* Badge Studio Proporsional */}
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Studio
              </span>
            </div>
          </Link>

          {/* 2. NAVIGATION LINKS (Tengah: Beranda | Layanan | Harga | Bantuan | Tentang) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="whitespace-nowrap hover:text-white transition-colors"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* 3. ACTIONS & UTILITIES (Kanan: ID/EN + Masuk + Konsultasi Gratis) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Switcher Ramping */}
            <div className="hidden md:flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/10 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "id"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-label="Pilih Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all ${
                  lang === "en"
                    ? "bg-white text-zinc-950 font-bold shadow-xs"
                    : "text-zinc-400 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Tombol Outline: Masuk (Akses Client Portal) */}
            <Link
              href="/portal"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/25 hover:border-emerald-400/60 hover:bg-white/5 text-xs sm:text-sm font-medium text-white transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>{lang === "id" ? "Masuk" : "Sign In"}</span>
            </Link>

            {/* Primary CTA: Konsultasi Gratis */}
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-white hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] text-zinc-950 text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-sm group"
            >
              <span>{lang === "id" ? "Konsultasi Gratis" : "Free Consultation"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Hamburger Menu - HANYA MUNCUL DI MOBILE/TABLET (lg:hidden) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Buka Menu Navigasi"
              className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </header>

      {/* 2. FULL-SCREEN MOBILE / TABLET MENU DRAWER */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#07090E]/98 backdrop-blur-2xl text-white overflow-y-auto font-sans flex flex-col justify-between"
          >
            {/* Modal Top Bar */}
            <div className="max-w-6xl mx-auto w-full px-5 py-5 sm:py-6 flex items-center justify-between border-b border-dashed border-white/15">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative flex items-center justify-center w-6 h-6">
                  <span className="w-3.5 h-3.5 rotate-45 border-[1.75px] border-white" />
                  <span className="absolute w-1 h-1 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl tracking-tight text-white font-bold">
                    Abinest<span className="text-emerald-400">.</span>
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Studio
                  </span>
                </div>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono uppercase tracking-wider transition-all cursor-pointer"
                aria-label="Tutup Menu"
              >
                <span>{lang === "id" ? "Tutup" : "Close"}</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-w-6xl mx-auto w-full px-5 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 flex-1 items-start">
              {/* Left Column: Numbered Navigation Links */}
              <div className="md:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400">
                  {lang === "id" ? "MENU NAVIGASI UTAMA" : "MAIN NAVIGATION"}
                </div>

                <div className="divide-y divide-white/10">
                  {navItems.map((item) => (
                    <div key={item.num} className="py-3.5 first:pt-1">
                      <a
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href)}
                        className="block group"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-mono text-xs text-emerald-400">
                            {item.num}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                                {item.title}
                              </h3>
                              <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mobile Quick Actions & Direct WhatsApp */}
              <div className="md:col-span-5 space-y-4 pt-2 md:pt-0">
                {/* Language Switcher Inside Mobile Drawer */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400">
                    {lang === "id" ? "PILIHAN BAHASA" : "LANGUAGE"}
                  </span>
                  <div className="flex items-center p-0.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold">
                    <button
                      type="button"
                      onClick={() => setLang("id")}
                      className={`px-3 py-1 rounded-full transition-all ${
                        lang === "id"
                          ? "bg-white text-zinc-950 font-bold"
                          : "text-zinc-400"
                      }`}
                    >
                      ID
                    </button>
                    <button
                      type="button"
                      onClick={() => setLang("en")}
                      className={`px-3 py-1 rounded-full transition-all ${
                        lang === "en"
                          ? "bg-white text-zinc-950 font-bold"
                          : "text-zinc-400"
                      }`}
                    >
                      EN
                    </button>
                  </div>
                </div>

                {/* Masuk Client Portal Button */}
                <Link
                  href="/portal"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div>
                      <span className="text-xs font-bold block">
                        {lang === "id" ? "Masuk ke Client Portal" : "Sign In to Client Portal"}
                      </span>
                      <span className="text-[11px] text-zinc-400 font-mono">
                        {lang === "id" ? "Pantau proyek & invoice live" : "Live milestone & invoice tracker"}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                {/* Direct WhatsApp Callout */}
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-white transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold block">WhatsApp Konsultan</span>
                      <span className="text-[11px] text-emerald-300 font-mono">+62 812-3456-7890</span>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Direct CTA */}
                <a
                  href="#konsultasi"
                  onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                  className="block text-center w-full py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-100 transition-all shadow-lg"
                >
                  {lang === "id" ? "Konsultasi Gratis →" : "Free Consultation →"}
                </a>
              </div>
            </div>

            {/* Modal Bottom Strip */}
            <div className="max-w-6xl mx-auto w-full px-5 py-4 border-t border-dashed border-white/15 flex items-center justify-between text-[11px] font-mono text-zinc-500">
              <span>© {new Date().getFullYear()} Abinest Engineering Studio</span>
              <span className="text-emerald-400">SLA 99.9% Uptime Guarantee</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
