"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  Globe,
  Database,
  Bot,
  MessageSquare,
  Sparkles,
  Building2,
  TrendingUp,
} from "lucide-react";

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pillars = [
    {
      id: "web",
      tabLabel: "1. Modern Web",
      tabSubtitle: "<0.8s Super Cepat",
      icon: Globe,
      accentColor: "#059669",
      headlineLine1: "Website Cepat & Modern.",
      headlineLine2: "Konversi Nyata Tanpa Lemot.",
      story:
        "Website korporat berkecepatan <0.8 detik dengan SEO Google 100/100 untuk melipatgandakan kredibilitas serta penjualan bisnis Anda.",
      kpis: [
        {
          value: "<0.8s",
          label: "Loading Speed",
          sub: "Core Web Vitals Hijau",
          icon: Zap,
        },
        {
          value: "100/100",
          label: "Skor Google SEO",
          sub: "Ranking Organik Cepat",
          icon: Globe,
        },
        {
          value: "100%",
          label: "Hak Milik Kode",
          sub: "Bebas Biaya Sewa CMS",
          icon: Code2,
        },
      ],
      image: "/images/hero-editorial-portrait-2x.jpg",
      imageAlt: "Implementasi Website Modern Abinest di Lapangan",
      bottomTag: "Next.js 15 App Router · Jakarta & Surabaya",
      badge1: {
        title: "Kecepatan <0.8s Terverifikasi",
        subtitle: "Google PageSpeed Skor 100/100",
        icon: Zap,
        pulse: true,
      },
      badge2: {
        title: "100% Hak Milik Source Code",
        subtitle: "Zero Vendor Lock-in",
        icon: Code2,
      },
    },
    {
      id: "erp",
      tabLabel: "2. Custom ERP",
      tabSubtitle: "Anti-Down 99.99%",
      icon: Building2,
      accentColor: "#059669",
      headlineLine1: "Sistem ERP Kustom.",
      headlineLine2: "Operasional Bisnis Tenang.",
      story:
        "Integrasi multi-gudang, inventaris otomatis, dan finansial terpadu tanpa biaya sewa lisensi per user selamanya.",
      kpis: [
        {
          value: "99.99%",
          label: "SLA Anti-Down",
          sub: "Monitoring 24/7",
          icon: ShieldCheck,
        },
        {
          value: "Rp 0",
          label: "Lisensi Bulanan",
          sub: "User Tak Terbatas",
          icon: Database,
        },
        {
          value: "18.000+",
          label: "Kapasitas SKU",
          sub: "Multi-Gudang Terpusat",
          icon: Building2,
        },
      ],
      image: "/images/erp-dashboard.jpg",
      imageAlt: "Sistem ERP Multi-Gudang Abinest",
      bottomTag: "Enterprise Architecture · Zero Downtime",
      badge1: {
        title: "SLA 99.99% Uptime Aktif",
        subtitle: "Multi-Gudang Terintegrasi",
        icon: ShieldCheck,
        pulse: true,
      },
      badge2: {
        title: "Zero Biaya Lisensi User",
        subtitle: "Unlimited Staff Access",
        icon: Database,
      },
    },
    {
      id: "ai-wa",
      tabLabel: "3. Automasi WA & AI",
      tabSubtitle: "Respons Instan 24/7",
      icon: Bot,
      accentColor: "#059669",
      headlineLine1: "Automasi AI & WhatsApp.",
      headlineLine2: "Respons 10x Lebih Cepat.",
      story:
        "Otomasi pesan invoice WhatsApp resmi Meta API dan AI Agent cerdas untuk melayani pelanggan 24 jam non-stop.",
      kpis: [
        {
          value: "<1 Detik",
          label: "Respons Pelanggan",
          sub: "AI Agent 24 Jam Non-Stop",
          icon: Sparkles,
        },
        {
          value: "Resmi",
          label: "Meta WhatsApp API",
          sub: "Centang Hijau Anti-Banned",
          icon: MessageSquare,
        },
        {
          value: "99.7%",
          label: "Akurasi OCR AI",
          sub: "Ekstraksi Invoice Otomatis",
          icon: TrendingUp,
        },
      ],
      image: "/images/ai-ml-workflow.jpg",
      imageAlt: "Automasi WhatsApp dan AI Pipeline",
      bottomTag: "AI Automation · Meta Cloud API Resmi",
      badge1: {
        title: "Meta WhatsApp Cloud API",
        subtitle: "Verifikasi Centang Hijau Bisnis",
        icon: MessageSquare,
        pulse: true,
      },
      badge2: {
        title: "AI Agent Aktif 24/7",
        subtitle: "Otomasi Alur Kerja Bisnis",
        icon: Sparkles,
      },
    },
  ];

  // Auto-advance every 6 seconds when not paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const currentPillar = pillars[activeIdx];

  return (
    <section
      id="beranda"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden bg-[#FBFBFA] border-b border-slate-200/70"
    >
      {/* Subtle Atmospheric Grid Mesh & Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.20] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(5, 150, 105, 0.22) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-emerald-100/40 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* 3-Pillar Interactive Tab Switcher Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`relative px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2.5 cursor-pointer outline-none ${
                    isActive
                      ? "text-white bg-[#064E3B] shadow-[0_4px_16px_rgba(6,78,59,0.25)] border border-[#065F46]"
                      : "text-slate-600 bg-white/80 border border-slate-200 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-emerald-500/20 text-emerald-200"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-left">
                    <span className="block leading-none">{pillar.tabLabel}</span>
                  </div>

                  {/* Micro Progress Bar on Active Tab */}
                  {isActive && (
                    <motion.div
                      key={`progress-${idx}-${isPaused}`}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{
                        duration: isPaused ? 0 : 6,
                        ease: "linear",
                      }}
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-emerald-400 rounded-full overflow-hidden"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 w-fit">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
              }`}
            />
            <span>{isPaused ? "Mode Interaktif (Jeda)" : "Otomatis Berganti (6s)"}</span>
          </div>
        </div>

        {/* 2-Column High-Impact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT COLUMN: Clean Typography, Punchy Micro-Copy, & 3 Visual KPI Cards (Span 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Dynamic Headline with Zero Orphan Words & Clean Emerald Accent */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${currentPillar.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.12]">
                  {currentPillar.headlineLine1}
                  <br />
                  <span className="text-[#059669]">
                    {currentPillar.headlineLine2}
                  </span>
                </h1>

                {/* Micro-Copy: Short, Punchy, High Impact (~12 Words) */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-[580px] pt-1">
                  {currentPillar.story}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 3 Visual KPI Stat Cards: 80% Visual Proof, Instant Comprehension */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`kpi-${currentPillar.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 gap-2.5 sm:gap-3.5 pt-1"
              >
                {currentPillar.kpis.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-white/95 border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] hover:border-emerald-300 hover:shadow-[0_4px_16px_rgba(5,150,105,0.08)] transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0 group-hover:bg-[#059669] group-hover:text-white transition-colors">
                          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </div>
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 font-mono">
                          0{idx + 1}
                        </span>
                      </div>
                      <div className="text-lg sm:text-2xl font-black text-[#0F172A] tracking-tight group-hover:text-[#059669] transition-colors leading-tight">
                        {item.value}
                      </div>
                      <div className="text-[11px] sm:text-xs font-bold text-slate-800 mt-1 leading-snug">
                        {item.label}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5 hidden sm:block">
                        {item.sub}
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* High-Converting CTA Action & Social Proof Bar */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#059669] hover:bg-[#047857] shadow-[0_10px_25px_rgba(5,150,105,0.25)] transition-all duration-200 cursor-pointer"
                >
                  <span>Konsultasikan Kebutuhan Anda</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

                <a
                  href="#portofolio"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#059669] transition-colors px-2 py-2"
                >
                  <span>Lihat Hasil Kerja</span>
                  <span>→</span>
                </a>
              </div>

              {/* Social Proof Trust Bar */}
              <div className="sm:ml-auto flex items-center gap-2.5 sm:border-l sm:border-slate-200/80 sm:pl-4 pt-1 sm:pt-0">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="Avatar 1"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                    alt="Avatar 2"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                    alt="Avatar 3"
                    className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                  />
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-600">
                  <span className="font-bold text-[#0F172A]">25+ Klien Aktif</span>
                  <span className="text-slate-300 mx-1.5">·</span>
                  <span className="text-[#059669] font-bold">99.99% SLA</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: High-Resolution Visual Asset with Live Telemetry Badges (Span 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${currentPillar.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3.8] sm:aspect-[4/3.5] lg:aspect-[4/4.2] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group"
              >
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.imageAlt}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Soft Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

                {/* Bottom Pillar Label */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white/90 text-[11px] font-medium flex items-center justify-between">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-semibold text-[10px] sm:text-xs">
                    {currentPillar.bottomTag}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 backdrop-blur-xs px-2 py-0.5 rounded border border-emerald-500/30">
                    Abinest Enterprise
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Floating Living Badge 1: Top Left Float */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-3.5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center gap-2.5 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                {(() => {
                  const Icon = currentPillar.badge1.icon;
                  return <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                })()}
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5 whitespace-nowrap">
                  <span>{currentPillar.badge1.title}</span>
                  {currentPillar.badge1.pulse && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  )}
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  {currentPillar.badge1.subtitle}
                </div>
              </div>
            </motion.div>

            {/* Dynamic Floating Living Badge 2: Bottom Right Float */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-3.5 -right-2 sm:-right-4 bg-slate-900/95 text-white backdrop-blur-md border border-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex items-center gap-2.5 z-20"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                {(() => {
                  const Icon = currentPillar.badge2.icon;
                  return <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
                })()}
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold text-white whitespace-nowrap">
                  {currentPillar.badge2.title}
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  {currentPillar.badge2.subtitle}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
