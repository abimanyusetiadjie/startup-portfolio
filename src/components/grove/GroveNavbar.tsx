"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  Activity,
  MessageSquare,
  Lock,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll to adjust glass density
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

  // Lock body scroll and ESC key listener when menu modal is open
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

  const menuItems = [
    {
      num: "01",
      title: lang === "id" ? "Layanan & Katalog Sistem" : "Services & Systems Catalog",
      desc:
        lang === "id"
          ? "Website Next.js 15, SIAKAD Sekolah, ERP Cloud, & Bot Otomasi WA"
          : "Next.js 15 Web, School SIAKAD, Cloud ERP & WA Bot Automation",
      href: "#systems",
      badge: "KATALOG",
    },
    {
      num: "02",
      title: lang === "id" ? "Studi Kasus SIAKAD Mandiri" : "SIAKAD Case Study",
      desc:
        lang === "id"
          ? "Ujian 1.200 siswa serentak & cetak 500+ rapor PDF cloud <45s tanpa down"
          : "1,200 simultaneous student exams & 500+ PDF report generation in <45s",
      href: "#case-study",
      badge: "STUDI KASUS",
    },
    {
      num: "03",
      title: lang === "id" ? "Standar Rekayasa & SLA" : "Engineering Standards & SLA",
      desc:
        lang === "id"
          ? "Decoupled worker, isolasi PostgreSQL RLS, & SLA uptime 99.9%"
          : "Decoupled architecture, PostgreSQL RLS isolation & 99.9% uptime SLA",
      href: "#engineering",
      badge: "ARSITEKTUR",
    },
    {
      num: "04",
      title: lang === "id" ? "Client Portal Enterprise" : "Enterprise Client Portal",
      desc:
        lang === "id"
          ? "Live progress tracking, SLA uptime dashboard, & pemantauan invoice"
          : "Real-time project tracking, SLA monitoring & invoice management",
      href: "/portal",
      badge: "LIVE PORTAL",
      isExternal: false,
    },
    {
      num: "05",
      title: lang === "id" ? "Konsultasi & Estimasi Biaya" : "Consultation & Scope Planning",
      desc:
        lang === "id"
          ? "Diskusikan roadmap perangkat lunak bersama tim konsultan teknologi kami"
          : "Schedule a technical scoping session directly with our engineering team",
      href: "#konsultasi",
      badge: "GRATIS",
    },
  ];

  return (
    <>
      {/* 1. TOP FLOATING NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 font-sans transition-all duration-300 ${
          isScrolled
            ? "bg-[#080B11]/90 backdrop-blur-xl border-b border-white/15 py-3 shadow-2xl shadow-black/40 text-white"
            : "bg-[#0B0F19]/65 backdrop-blur-md border-b border-white/10 py-3.5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Brand Logo: Diamond Mark + abinest Serif */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="w-2.5 h-2.5 border border-white rotate-45 shrink-0 group-hover:bg-white group-hover:rotate-90 transition-all duration-300"
              aria-hidden="true"
            />
            <span className="font-serif italic font-normal text-2xl tracking-normal text-white group-hover:text-teal-200 transition-colors">
              abinest
            </span>
            <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-wider text-teal-300 font-semibold px-2 py-0.5 rounded-full bg-teal-950/70 border border-teal-500/30 ml-1">
              STUDIO
            </span>
          </Link>

          {/* Center Nav Links with Hover Indicator (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-white/75 tracking-wide uppercase font-mono">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="hover:text-white transition-colors flex items-center gap-1.5 group/nav py-1"
            >
              <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
              <span>{t.nav.systems}</span>
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="hover:text-white transition-colors flex items-center gap-1.5 group/nav py-1"
            >
              <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
              <span>{t.nav.caseStudy}</span>
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="hover:text-white transition-colors flex items-center gap-1.5 group/nav py-1"
            >
              <span className="w-1 h-1 rounded-full bg-white opacity-0 group-hover/nav:opacity-100 transition-opacity" />
              <span>{t.nav.standards}</span>
            </a>
            <Link
              href="/portal"
              className="text-teal-300 hover:text-teal-200 font-bold flex items-center gap-1.5 py-1 px-2.5 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span>{t.nav.portal}</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>

          {/* Right Action Items & Editorial Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher [ ID | EN ] */}
            <div className="flex items-center rounded-full bg-white/10 p-0.5 border border-white/15 text-[11px] font-mono font-semibold">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "id"
                    ? "bg-white text-[#0B0F19] font-bold shadow-xs"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="Pilih Bahasa Indonesia"
              >
                ID
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "en"
                    ? "bg-white text-[#0B0F19] font-bold shadow-xs"
                    : "text-white/60 hover:text-white"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Client Login Link (Hidden on small mobile) */}
            <Link
              href="/login"
              className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
            >
              {t.nav.clientLogin}
            </Link>

            {/* Consultation Pill Button */}
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="hidden sm:inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-white text-[#0B0F19] font-medium text-xs hover:bg-slate-100 transition-all shadow-md shadow-black/20 hover:scale-[1.02]"
            >
              <span>{t.nav.cta}</span>
            </a>

            {/* EDITORIAL MENU BUTTON (Accessible on both Mobile & Desktop) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 group cursor-pointer"
              aria-label="Buka Menu Navigasi Lengkap"
            >
              <span className="text-xs font-mono uppercase tracking-widest font-medium hidden sm:inline">
                Menu
              </span>
              <div className="flex flex-col gap-1 w-4 sm:w-4.5">
                <span className="h-[1.5px] w-full bg-white transition-transform group-hover:translate-x-0.5" />
                <span className="h-[1.5px] w-3/4 bg-white self-end transition-transform group-hover:w-full" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* 2. FULL-SCREEN EDITORIAL MODAL MENU (Kai Nomura & Halden Style) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-[#07090E]/98 backdrop-blur-2xl text-white overflow-y-auto font-sans flex flex-col justify-between"
          >
            {/* Modal Top Bar */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between border-b border-dashed border-white/15">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2.5 group"
              >
                <span
                  className="w-2.5 h-2.5 border border-white rotate-45 shrink-0 group-hover:bg-white transition-colors"
                  aria-hidden="true"
                />
                <span className="font-serif italic font-normal text-2xl tracking-normal text-white">
                  abinest
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-teal-300 font-semibold px-2 py-0.5 rounded-full bg-teal-950/70 border border-teal-500/30 ml-1">
                  STUDIO
                </span>
              </Link>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-mono uppercase tracking-widest transition-all cursor-pointer group"
                aria-label="Tutup Menu"
              >
                <span>{lang === "id" ? "Tutup [ESC]" : "Close [ESC]"}</span>
                <X className="h-4 w-4 transition-transform group-hover:rotate-90 duration-200" />
              </button>
            </div>

            {/* Modal Main Content: 2-Column Architectural Layout */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-10 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 flex-1 items-start">
              {/* Left Column: Giant Numbered Editorial Links */}
              <div className="lg:col-span-7 space-y-2">
                <div className="inline-flex items-center gap-2.5 mb-6 text-[11px] font-mono uppercase tracking-[0.2em] text-teal-300">
                  <span className="w-6 h-[1px] bg-teal-400" />
                  <span>{lang === "id" ? "DIREKTORI & NAVIGASI SISTEM" : "SYSTEMS & NAVIGATION"}</span>
                </div>

                <div className="space-y-4">
                  {menuItems.map((item) => (
                    <div
                      key={item.num}
                      className="border-b border-dashed border-white/10 pb-5 pt-2 group"
                    >
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className="block"
                        >
                          <div className="flex items-baseline gap-4 sm:gap-6">
                            <span className="font-serif italic text-lg sm:text-2xl text-teal-400/80 group-hover:text-teal-300 transition-colors shrink-0">
                              {item.num}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white group-hover:translate-x-1 transition-transform duration-200">
                                  {item.title}
                                </h3>
                                <ArrowUpRight className="h-5 w-5 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                              </div>
                              <p className="text-xs sm:text-sm text-white/60 mt-1.5 leading-relaxed font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block"
                        >
                          <div className="flex items-baseline gap-4 sm:gap-6">
                            <span className="font-serif italic text-lg sm:text-2xl text-teal-400/80 group-hover:text-teal-300 transition-colors shrink-0">
                              {item.num}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white group-hover:translate-x-1 transition-transform duration-200">
                                  {item.title}
                                </h3>
                                <ArrowRight className="h-5 w-5 text-teal-300 group-hover:translate-x-1 transition-transform" />
                              </div>
                              <p className="text-xs sm:text-sm text-white/60 mt-1.5 leading-relaxed font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Studio Telemetry, Specifications & Quick Contacts */}
              <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
                {/* Live Cluster Status Card */}
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      INFRASTRUKTUR CLOUD
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>SLA 99.98% OPERASIONAL</span>
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 text-[10px] block">LOKASI EDGE REGION</span>
                      <span className="text-white font-semibold mt-0.5 block">Jakarta (ap-southeast-3)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] block">SECURITY ISOLATION</span>
                      <span className="text-white font-semibold mt-0.5 block">PostgreSQL RLS Mode</span>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed pt-2 border-t border-dashed border-white/10">
                    {lang === "id"
                      ? "Seluruh sistem yang dibangun Abinest dijamin dengan SLA Uptime 99.9%, kepemilikan kode sumber penuh (full IP handover), dan tanpa vendor lock-in."
                      : "All systems built by Abinest are guaranteed with 99.9% Uptime SLA, full source code intellectual property handover, and zero vendor lock-in."}
                  </p>
                </div>

                {/* Direct Communications Box */}
                <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
                    KONTAK LANGSUNG KONSULTAN
                  </span>

                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs font-mono text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="h-4 w-4 text-emerald-400" />
                      <span>WhatsApp: +62 812-3456-7890</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <a
                    href="mailto:halo@abinest.id"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs font-mono text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-teal-300" />
                      <span>Email: halo@abinest.id</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-white" />
                  </a>

                  <div className="flex items-center gap-2.5 px-3 py-2 text-xs font-mono text-slate-400">
                    <MapPin className="h-4 w-4 text-slate-500" />
                    <span>Studio: Jakarta Selatan &amp; Surabaya Timur</span>
                  </div>
                </div>

                {/* CTA Action Inside Menu */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#konsultasi"
                    onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                    className="flex-1 text-center px-6 py-3.5 rounded-full bg-white text-[#0B0F19] font-semibold text-xs hover:bg-slate-100 transition-all shadow-lg"
                  >
                    {lang === "id" ? "Mulai Konsultasi Gratis →" : "Book Free Scoping Session →"}
                  </a>
                  <Link
                    href="/portal"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-center px-6 py-3.5 rounded-full border border-dashed border-white/30 text-white hover:bg-white/10 transition-all text-xs font-mono"
                  >
                    {lang === "id" ? "Buka Client Portal" : "Access Client Portal"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal Bottom Strip */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-4 border-t border-dashed border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-white/50">
              <span>© {new Date().getFullYear()} Abinest Engineering Studio. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <span>Next.js 15 App Router</span>
                <span>•</span>
                <span>PostgreSQL RLS</span>
                <span>•</span>
                <span>QStash Workers</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
