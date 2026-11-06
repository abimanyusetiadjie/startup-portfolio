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
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang, t } = useLanguage();
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
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const mobileNavLinks = [
    {
      num: "01",
      title: lang === "id" ? "Layanan & Sistem" : "Services & Systems",
      desc:
        lang === "id"
          ? "Website Next.js 15, SIAKAD Sekolah Anti-Down, ERP Cloud, & Bot Otomasi WA"
          : "Next.js 15 Web, School SIAKAD, Business ERP & WhatsApp Dispatch Bot",
      href: "#systems",
    },
    {
      num: "02",
      title: lang === "id" ? "Studi Kasus" : "Case Studies",
      desc:
        lang === "id"
          ? "Ujian 1.200 siswa serentak & cetak 500+ rapor PDF cloud <45s tanpa down"
          : "1,200 simultaneous student exams & 500+ PDF report generation in <45s",
      href: "#case-study",
    },
    {
      num: "03",
      title: lang === "id" ? "Standar Teknis" : "Engineering Standards",
      desc:
        lang === "id"
          ? "Decoupled worker, isolasi PostgreSQL RLS, & SLA uptime 99.9%"
          : "Decoupled architecture, PostgreSQL RLS isolation & 99.9% uptime SLA",
      href: "#engineering",
    },
    {
      num: "04",
      title: "Client Portal",
      desc:
        lang === "id"
          ? "Live progress tracking, SLA uptime dashboard, & pemantauan invoice"
          : "Real-time project tracking, SLA monitoring & invoice management",
      href: "/portal",
      isRoute: true,
    },
    {
      num: "05",
      title: lang === "id" ? "Mulai Konsultasi" : "Book Consultation",
      desc:
        lang === "id"
          ? "Diskusikan kebutuhan arsitektur digital bersama tim konsultan teknologi kami"
          : "Schedule a technical scoping session directly with our engineering team",
      href: "#konsultasi",
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

            {/* Wordmark: Modern Engineering Studio (Bold contrast + Emerald Dot) */}
            <div className="flex items-center gap-2">
              <span className="text-xl tracking-tight text-white font-semibold">
                abi<span className="font-light text-zinc-300">nest</span>
                <span className="text-emerald-400">.</span>
              </span>

              {/* Badge Studio Proporsional */}
              <span className="px-2 py-0.5 text-[10px] font-mono font-medium tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Studio
              </span>
            </div>
          </Link>

          {/* 2. NAVIGATION LINKS (Tengah - 1 Baris / whitespace-nowrap) */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="whitespace-nowrap hover:text-white transition-colors"
            >
              {lang === "id" ? "Layanan & Sistem" : "Services & Systems"}
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="whitespace-nowrap hover:text-white transition-colors"
            >
              {lang === "id" ? "Studi Kasus" : "Case Studies"}
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="whitespace-nowrap hover:text-white transition-colors"
            >
              {lang === "id" ? "Standar Teknis" : "Tech Standards"}
            </a>
          </div>

          {/* 3. ACTIONS & UTILITIES (Kanan) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Client Portal - 1 Baris Rapi dengan Live Status Dot */}
            <Link
              href="/portal"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 hover:border-emerald-500/40 text-xs font-mono tracking-wider uppercase text-emerald-400 transition-all whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Client Portal</span>
            </Link>

            {/* Divider tipis pemisah utilitas */}
            <div className="hidden sm:block h-4 w-[1px] bg-white/10 mx-0.5" />

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

            {/* Primary CTA */}
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-zinc-100 text-zinc-950 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-sm group"
            >
              <span>{lang === "id" ? "Mulai Konsultasi" : "Book Consultation"}</span>
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
                  <span className="text-xl tracking-tight text-white font-semibold">
                    abi<span className="font-light text-zinc-300">nest</span>
                    <span className="text-emerald-400">.</span>
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-medium tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
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
                  {lang === "id" ? "NAVIGASI DIREKTORI SISTEM" : "SYSTEMS DIRECTORY"}
                </div>

                <div className="divide-y divide-white/10">
                  {mobileNavLinks.map((item) => (
                    <div key={item.num} className="py-3.5 first:pt-1">
                      {item.isRoute ? (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
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
                                <ArrowRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                              </div>
                              <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ) : (
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
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mobile Quick Actions & Direct WhatsApp */}
              <div className="md:col-span-5 space-y-4 pt-2 md:pt-0">
                {/* Language Switcher Inside Mobile Drawer */}
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase text-zinc-400">
                    PILIHAN BAHASA
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
                  {lang === "id" ? "Mulai Konsultasi Proyek →" : "Book Engineering Consultation →"}
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
