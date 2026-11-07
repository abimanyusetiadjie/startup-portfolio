"use client";

import {
  ArrowUpRight,
  ArrowDown,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Server,
  FileCheck2,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { lang } = useLanguage();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0D14] font-sans"
    >
      {/* 1. ARCHITECTURAL DARK MONOLITH BACKGROUND WITH SUBTLE GRID */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          initial={{ scale: 1.04 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Abinest Engineering Studio Infrastructure"
          className="w-full h-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D14] via-[#0A0D14]/80 to-[#0A0D14]/90" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />
      </div>

      {/* 2. TOP BREATHING SPACE FOR FLOATING PILL NAVBAR */}
      <div className="pt-28 sm:pt-32" aria-hidden="true" />

      {/* 3. HERO CONTENT: SPLIT BUYER-CENTRIC COPY (LEFT) + LIVE SYSTEM DASHBOARD MOCKUP (RIGHT) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 pb-8 flex flex-col justify-end flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* LEFT COLUMN: BUYER-CENTRIC HEADLINE & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-md border border-white/15"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-emerald-300 font-semibold">
                {lang === "id"
                  ? "B2B SOFTWARE STUDIO • 100% KEPEMILIKAN SOURCE CODE"
                  : "B2B SOFTWARE STUDIO • 100% FULL SOURCE CODE OWNERSHIP"}
              </span>
            </motion.div>

            {/* Buyer-Centric Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.08]"
            >
              {lang === "id" ? (
                <>
                  Sistem digital yang dibangun{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                    untuk bertahan lama.
                  </span>
                </>
              ) : (
                <>
                  Digital systems engineered{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-white">
                    to endure peak load.
                  </span>
                </>
              )}
            </motion.h1>

            {/* Buyer-Centric Subheadline (Sesuai Audit) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-sm sm:text-base lg:text-lg text-zinc-200 max-w-2xl font-normal leading-relaxed"
            >
              {lang === "id"
                ? "SIAKAD anti-down saat ribuan siswa ujian serentak, website institusi super cepat (Lighthouse 95–100), dan otomasi WhatsApp resmi Meta — dirancang khusus untuk sekolah, yayasan, dan bisnis yang membutuhkan stabilitas tinggi."
                : "Anti-down school SIS for simultaneous exams, ultra-fast institutional websites (Lighthouse 95–100), and official Meta WhatsApp automation — custom-built for schools, foundations, and enterprises demanding high stability."}
            </motion.p>

            {/* Key Value Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-5 flex flex-wrap items-center gap-3 text-xs text-zinc-300"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {lang === "id" ? "Tanpa Biaya Sewa Bulanan" : "Zero Monthly SaaS Rent"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {lang === "id" ? "Garansi SLA Uptime 99.9%" : "99.9% Uptime SLA Warranty"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                {lang === "id" ? "Pantau Live di Client Portal" : "Live Client Portal Tracking"}
              </span>
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap items-center gap-3.5"
            >
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-emerald-400 text-zinc-950 text-xs sm:text-sm font-bold hover:bg-emerald-300 transition-all duration-200 shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>
                  {lang === "id"
                    ? "Konsultasi Gratis via WhatsApp"
                    : "Free WhatsApp Consultation"}
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-950" />
              </a>

              <a
                href="#systems"
                onClick={(e) => handleSmoothScroll(e, "#systems")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all duration-200 text-xs sm:text-sm font-medium tracking-wide active:scale-[0.98]"
              >
                <span>
                  {lang === "id"
                    ? "Lihat Layanan & Estimasi Harga ↓"
                    : "Explore Services & Pricing ↓"}
                </span>
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: REALISTIC PRODUCT DASHBOARD & TELEMETRY MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#111622]/90 backdrop-blur-xl border border-white/15 shadow-2xl overflow-hidden">
              {/* Mockup Window Header */}
              <div className="px-4 py-3 bg-[#0B0F17] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-[11px] font-mono text-zinc-400">
                    abinest-cloud://siakad-monitor
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE 99.98%
                </span>
              </div>

              {/* Mockup Body: Concrete System Proof */}
              <div className="p-4 sm:p-5 space-y-3.5">
                {/* Metric Row */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      {lang === "id" ? "Sesi Ujian CBT" : "Active CBT"}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5 block">
                      1.240
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      0% Error Rate
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      PDF Worker
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5 block">
                      520/mnt
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      Non-Blocking
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                    <span className="text-[10px] font-mono uppercase text-zinc-400 block">
                      WA Meta API
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-white font-mono mt-0.5 block">
                      1.4 dtk
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      Delivered
                    </span>
                  </div>
                </div>

                {/* Live Activity Feed Simulation */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs">
                    <div className="flex items-center gap-2.5">
                      <Server className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-white font-medium block">
                          {lang === "id"
                            ? "Ujian Serentak SMA Al-Hikmah"
                            : "Simultaneous Exam Cluster"}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          PostgreSQL RLS • CPU Load 24%
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded">
                      STABIL
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex items-center gap-2.5">
                      <FileCheck2 className="w-4 h-4 text-teal-400 shrink-0" />
                      <div>
                        <span className="text-white font-medium block">
                          {lang === "id"
                            ? "Batch Cetak Rapor Semester Ganjil"
                            : "Semester Report Card Batch"}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          540 Dokumen PDF • Selesai 38 detik
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-teal-300 bg-teal-500/15 px-2 py-0.5 rounded">
                      100%
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <span className="text-white font-medium block">
                          {lang === "id"
                            ? "Broadcast Invoicing SPP Otomatis"
                            : "Automated Tuition WA Dispatch"}
                        </span>
                        <span className="text-[11px] text-zinc-400">
                          Meta Cloud API Official • Anti-Banned
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded">
                      SENT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4. COMPACT SOCIAL PROOF & TECH PARTNER BAR (Pinned to Bottom of Hero - Zero Dead Scroll) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-10 pt-5 border-t border-white/15 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs"
        >
          {/* Left: Client Institution Proof */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              {lang === "id" ? "DIPERCAYA OLEH:" : "TRUSTED BY:"}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-200 font-medium">
              Yayasan Bina Insan
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-200 font-medium">
              SMA Unggulan Al-Hikmah
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-200 font-medium">
              Mitra Retail Nusantara
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-200 font-medium">
              Global Logistics B2B
            </span>
          </div>

          {/* Right: Official Tech Stack & Partner Credentials */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 font-mono text-[11px] text-zinc-400">
            <span className="text-zinc-300">Next.js 15 Edge</span>
            <span>·</span>
            <span className="text-zinc-300">Supabase PostgreSQL RLS</span>
            <span>·</span>
            <span className="text-zinc-300">Meta Cloud API</span>
            <span>·</span>
            <a
              href="#bantuan"
              onClick={(e) => handleSmoothScroll(e, "#bantuan")}
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
            >
              {lang === "id" ? "Lihat Studi Kasus →" : "View Case Studies →"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
