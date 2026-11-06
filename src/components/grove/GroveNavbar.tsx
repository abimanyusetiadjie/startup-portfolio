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
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveNavbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll to adjust navbar elevation shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
          ? "Website Next.js 15, SIAKAD Sekolah Anti-Down, ERP Manajemen, & Otomasi WhatsApp"
          : "Next.js 15 Web, School SIAKAD, Business ERP & WhatsApp Dispatch Bot",
      href: "#systems",
      badge: lang === "id" ? "KATALOG SISTEM" : "CATALOG",
    },
    {
      num: "02",
      title: lang === "id" ? "Studi Kasus SIAKAD Sekolah" : "SIAKAD Case Study",
      desc:
        lang === "id"
          ? "Ujian 1.200 siswa serentak & cetak 500+ rapor PDF cloud <45 detik tanpa server down"
          : "1,200 simultaneous student exams & 500+ PDF report generation in <45s",
      href: "#case-study",
      badge: lang === "id" ? "BUKTI HASIL" : "CASE STUDY",
    },
    {
      num: "03",
      title: lang === "id" ? "Standar Layanan & Garansi SLA" : "Service Standards & SLA",
      desc:
        lang === "id"
          ? "Garansi sistem stabil 99.9%, keamanan data terenkripsi, & training guru/staf sampai lancar"
          : "99.9% uptime guarantee, encrypted database, and full staff onboarding",
      href: "#engineering",
      badge: lang === "id" ? "GARANSI RESMI" : "GUARANTEE",
    },
    {
      num: "04",
      title: lang === "id" ? "Client Portal (Akses Klien)" : "Client Portal Access",
      desc:
        lang === "id"
          ? "Pantau kemajuan pembuatan sistem, invoice resmi, dan status server 24/7"
          : "Track project progress, official invoices, and real-time server health",
      href: "/portal",
      badge: "LIVE PORTAL",
    },
    {
      num: "05",
      title: lang === "id" ? "Konsultasi & Estimasi Proyek" : "Consultation & Pricing Scoping",
      desc:
        lang === "id"
          ? "Diskusikan rencana sistem sekolah atau bisnis Anda bersama tim konsultan (Gratis)"
          : "Discuss your digital system roadmap directly with our technology team (Free)",
      href: "#konsultasi",
      badge: lang === "id" ? "GRATIS" : "FREE",
    },
  ];

  return (
    <>
      {/* 1. BRIGHT INSTITUTIONAL NAVBAR */}
      <header
        className={`fixed top-0 inset-x-0 z-50 font-sans transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm text-slate-900"
            : "bg-white/90 backdrop-blur-sm border-b border-slate-200/80 py-3.5 text-slate-900"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Left Brand Logo: Diamond Mark + abinest Serif */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span
              className="w-2.5 h-2.5 border-2 border-[#0F766E] rotate-45 shrink-0 group-hover:bg-[#0F766E] group-hover:rotate-90 transition-all duration-300"
              aria-hidden="true"
            />
            <span className="font-serif italic font-normal text-2xl tracking-normal text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
              abinest
            </span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-wider text-[#0F766E] font-bold px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 ml-1">
              STUDIO
            </span>
          </Link>

          {/* Center Nav Links with High-Contrast Typography (Desktop lg+) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <a
              href="#systems"
              onClick={(e) => handleSmoothScroll(e, "#systems")}
              className="hover:text-[#0F766E] transition-colors py-1"
            >
              {t.nav.systems}
            </a>
            <a
              href="#case-study"
              onClick={(e) => handleSmoothScroll(e, "#case-study")}
              className="hover:text-[#0F766E] transition-colors py-1"
            >
              {t.nav.caseStudy}
            </a>
            <a
              href="#engineering"
              onClick={(e) => handleSmoothScroll(e, "#engineering")}
              className="hover:text-[#0F766E] transition-colors py-1"
            >
              {t.nav.standards}
            </a>
            <Link
              href="/portal"
              className="text-[#0F766E] hover:text-[#115E59] font-bold flex items-center gap-1.5 py-1 px-3 rounded-lg bg-teal-50/80 border border-teal-100 hover:bg-teal-100/60 transition-all"
            >
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>{t.nav.portal}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>

          {/* Right Action Items & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quick WhatsApp Direct Button (Familiar for Indonesian Senior Clients) */}
            <a
              href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-colors"
              title="Hubungi Konsultan via WhatsApp"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-600" />
              <span>WA Konsultan</span>
            </a>

            {/* Language Switcher [ ID | EN ] */}
            <div className="flex items-center rounded-full bg-slate-100 p-0.5 border border-slate-200 text-xs font-mono font-semibold">
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
                  lang === "id"
                    ? "bg-white text-[#0F766E] font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
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
                    ? "bg-white text-[#0F766E] font-bold shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
            </div>

            {/* Client Login Link */}
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-[#0F766E] hover:bg-slate-100 transition-colors"
            >
              {t.nav.clientLogin}
            </Link>

            {/* Main Consultation Button */}
            <a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0F766E] text-white font-semibold text-xs hover:bg-[#115E59] transition-all shadow-sm hover:shadow hover:scale-[1.02]"
            >
              <span>{t.nav.cta}</span>
            </a>

            {/* MENU BUTTON (Accessible on all screens) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 transition-all duration-200 cursor-pointer group"
              aria-label="Buka Menu Navigasi Lengkap"
            >
              <span className="text-xs font-semibold tracking-wide hidden sm:inline">
                Menu
              </span>
              <Menu className="h-4 w-4 text-slate-700 group-hover:text-slate-900" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. BRIGHT & WELCOMING EDITORIAL MODAL MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-white text-slate-900 overflow-y-auto font-sans flex flex-col justify-between"
          >
            {/* Modal Top Bar */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-4 sm:py-5 flex items-center justify-between border-b border-slate-200">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <span
                  className="w-2.5 h-2.5 border-2 border-[#0F766E] rotate-45 shrink-0"
                  aria-hidden="true"
                />
                <span className="font-serif italic font-normal text-2xl tracking-normal text-[#0F172A]">
                  abinest
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#0F766E] font-bold px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 ml-1">
                  STUDIO
                </span>
              </Link>

              {/* Close Button (Large, high affordance) */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-semibold transition-all cursor-pointer group"
                aria-label="Tutup Menu"
              >
                <span>{lang === "id" ? "Tutup Menu" : "Close"}</span>
                <X className="h-4 w-4 text-slate-700 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Modal Main Content: 2-Column Bright Layout */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 flex-1 items-start">
              {/* Left Column: Numbered Navigation Links */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F766E]">
                  <span className="w-5 h-[2px] bg-[#0F766E]" />
                  <span>{lang === "id" ? "PILIHAN MENU & LAYANAN" : "NAVIGATION DIRECTORY"}</span>
                </div>

                <div className="divide-y divide-slate-100">
                  {menuItems.map((item) => (
                    <div key={item.num} className="py-4 first:pt-1 group">
                      {item.href.startsWith("#") ? (
                        <a
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <span className="font-serif italic font-normal text-xl sm:text-2xl text-[#0F766E] shrink-0 mt-0.5">
                              {item.num}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                                  {item.title}
                                </h3>
                                <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-[#0F766E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-colors"
                        >
                          <div className="flex items-start gap-4">
                            <span className="font-serif italic font-normal text-xl sm:text-2xl text-[#0F766E] shrink-0 mt-0.5">
                              {item.num}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <h3 className="text-lg sm:text-2xl font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                                  {item.title}
                                </h3>
                                <ArrowRight className="h-5 w-5 text-[#0F766E] group-hover:translate-x-1 transition-transform shrink-0" />
                              </div>
                              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
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

              {/* Right Column: Direct Contact & Guarantees */}
              <div className="lg:col-span-5 space-y-5 pt-4 lg:pt-0">
                {/* Reassurance Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-teal-50/60 border border-teal-200/80 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F766E] uppercase tracking-wide">
                    <ShieldCheck className="h-4 w-4 text-[#0F766E]" />
                    <span>JAMINAN MUTU RESMI ABINEST</span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>SLA Uptime 99.9%</strong> — Sistem ujian online &amp; rapor anti-server down.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pendampingan Lengkap</strong> — Training guru, kepala sekolah, &amp; staf admin sampai mahir.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>100% Hak Milik Kode</strong> — Kode program diserahkan penuh tanpa keterikatan vendor.</span>
                    </li>
                  </ul>
                </div>

                {/* Direct Contact Card (Large, easy to read) */}
                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wide block">
                    HUBUNGI KONSULTAN TEKNIS
                  </span>

                  <a
                    href="https://wa.me/6281234567890?text=Halo%20Abinest,%20saya%20ingin%20konsultasi%20pembuatan%20website/sistem"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5" />
                      <span>Chat WhatsApp: 0812-3456-7890</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <a
                    href="mailto:halo@abinest.id"
                    className="flex items-center justify-between p-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="h-4 w-4 text-[#0F766E]" />
                      <span>Email: halo@abinest.id</span>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                  </a>

                  <div className="flex items-center gap-2.5 p-2 text-xs text-slate-600">
                    <MapPin className="h-4 w-4 text-slate-400 shrink-0" />
                    <span>Kantor: Jakarta Selatan &amp; Surabaya Timur</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-1 flex flex-col sm:flex-row gap-3">
                  <a
                    href="#konsultasi"
                    onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                    className="flex-1 text-center px-6 py-3.5 rounded-full bg-[#0F766E] text-white font-bold text-xs hover:bg-[#115E59] transition-all shadow-sm"
                  >
                    {lang === "id" ? "Mulai Konsultasi Gratis →" : "Book Free Consultation →"}
                  </a>
                  <Link
                    href="/portal"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-center px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all text-xs font-semibold"
                  >
                    {lang === "id" ? "Akses Client Portal" : "Client Portal"}
                  </Link>
                </div>
              </div>
            </div>

            {/* Modal Bottom Strip */}
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span>© {new Date().getFullYear()} Abinest Engineering Studio. Konsultan Teknologi &amp; Software House.</span>
              <div className="flex items-center gap-4 font-mono text-[11px]">
                <span>SLA 99.9% Uptime</span>
                <span>•</span>
                <span>Next.js 15</span>
                <span>•</span>
                <span>PostgreSQL Terenkripsi</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
