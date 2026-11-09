"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Code2,
  CheckCircle2,
  Globe,
  Database,
  Bot,
  MessageSquare,
  Sparkles,
  Building2,
} from "lucide-react";

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pillars = [
    {
      id: "web",
      tabLabel: "1. Modern Web",
      tabSubtitle: "Website Cepat <0.8s",
      icon: Globe,
      accentColor: "#2563EB",
      headlineLine1: "Website yang Beres.",
      headlineLine2: "Konversi yang Nyata.",
      story:
        "Kami merancang website korporat dan platform digital berkecepatan <0.8 detik dengan skor Google SEO 100/100 untuk melipatgandakan kredibilitas dan leads bisnis Anda tanpa beban plugin lambat.",
      metrics: [
        {
          num: "01",
          title: "Website <0.8 Detik",
          desc: "Performa Cepat, Ringan & SEO Google 100/100",
        },
        {
          num: "02",
          title: "Desain Konversi Tinggi",
          desc: "UI/UX Eksklusif, Mobile-First & Responsif",
        },
        {
          num: "03",
          title: "100% Hak Milik Kode",
          desc: "Bebas Biaya Sewa Hosting/CMS Vendor Selamanya",
        },
      ],
      image: "/images/hero-editorial-portrait-2x.jpg",
      imageAlt: "Implementasi Website Modern Abinest di Lapangan",
      bottomTag: "Headless Next.js 15 · Jakarta · Surabaya",
      badge1: {
        title: "Kecepatan <0.8s Terverifikasi",
        subtitle: "Skor Google SEO 100/100",
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
      tabLabel: "2. Sistem ERP Kustom",
      tabSubtitle: "Anti-Down 99.99%",
      icon: Building2,
      accentColor: "#1D4ED8",
      headlineLine1: "Sistem yang Beres.",
      headlineLine2: "Operasional yang Tenang.",
      story:
        "Membangun sistem ERP kustom terintegrasi (multi-gudang, stok inventaris, absensi, dan keuangan) dengan SLA anti-down 99.99% tanpa tagihan biaya lisensi per user selamanya.",
      metrics: [
        {
          num: "01",
          title: "Sistem Anti-Down 99.99%",
          desc: "SLA Terjamin, Monitoring Proaktif 24/7",
        },
        {
          num: "02",
          title: "Zero Biaya Lisensi User",
          desc: "Bebas Tambah 100–10.000 Karyawan Tanpa Biaya",
        },
        {
          num: "03",
          title: "Audit Trail & Enkripsi DB",
          desc: "Keamanan Data Finansial & Gudang Terisolasi",
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
        title: "Zero Lisensi Bulanan",
        subtitle: "Unlimited User Access",
        icon: Database,
      },
    },
    {
      id: "ai-wa",
      tabLabel: "3. Automasi WA & AI",
      tabSubtitle: "Respons Instan 24/7",
      icon: Bot,
      accentColor: "#0284C7",
      headlineLine1: "Workflow yang Beres.",
      headlineLine2: "Respons 10x Lebih Cepat.",
      story:
        "Mengotomatiskan alur kerja manual, pengiriman notifikasi faktur WhatsApp otomatis via Meta Cloud API resmi, dan asisten bot AI cerdas untuk melayani pelanggan 24/7.",
      metrics: [
        {
          num: "01",
          title: "Meta WhatsApp API Resmi",
          desc: "Anti-Banned, Terverifikasi Centang Hijau Resmi",
        },
        {
          num: "02",
          title: "Respons Pelanggan <1 Detik",
          desc: "AI Agent Aktif Melayani Non-Stop 24 Jam",
        },
        {
          num: "03",
          title: "Otomasi Laporan & Invoice",
          desc: "Ekstraksi Data OCR Cepat Tanpa Input Manual",
        },
      ],
      image: "/images/ai-ml-workflow.jpg",
      imageAlt: "Automasi WhatsApp dan AI Pipeline",
      bottomTag: "AI Automation · Meta Cloud API",
      badge1: {
        title: "Resmi Meta WhatsApp Cloud API",
        subtitle: "Verifikasi Centang Hijau Bisnis",
        icon: MessageSquare,
        pulse: true,
      },
      badge2: {
        title: "0.8s Response AI Engine",
        subtitle: "Otomasi Laporan 24/7",
        icon: Sparkles,
      },
    },
  ];

  // Auto-advance every 6 seconds when not hovered/paused
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
        {/* Soft Technical Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
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
                  className={`relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer outline-none ${
                    isActive
                      ? "text-[#0F172A] bg-white border border-slate-300 shadow-[0_4px_16px_rgba(15,23,42,0.06)]"
                      : "text-slate-500 bg-slate-100/70 border border-slate-200/50 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-blue-50 text-[#2563EB]"
                        : "bg-slate-200/80 text-slate-500"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{pillar.tabLabel}</span>

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
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#2563EB] rounded-full overflow-hidden"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
              }`}
            />
            <span>{isPaused ? "Mode Interaktif (Jeda)" : "Otomatis Berganti (6s)"}</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Swiss Editorial Layout with Smooth Crossfade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Dynamic Headline, Story, Action, & Editorial Numbered Metrics (Span 7) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${currentPillar.id}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.08]">
                  {currentPillar.headlineLine1}
                  <br />
                  <span className="inline-flex items-center gap-2.5 sm:gap-3.5">
                    <span
                      style={{ backgroundColor: currentPillar.accentColor }}
                      className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-[3px] shadow-[0_2px_8px_rgba(37,99,235,0.4)] shrink-0"
                    />
                    <span>{currentPillar.headlineLine2}</span>
                  </span>
                </h1>

                {/* Signature Accent Line */}
                <div
                  style={{ backgroundColor: currentPillar.accentColor }}
                  className="w-20 sm:w-28 h-1 rounded-full origin-left"
                />
              </motion.div>
            </AnimatePresence>

            {/* Sub-Grid: Left Story + Right 3 Numbered Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pt-1">
              {/* Left Sub-Col: Value Pitch & Primary Action (Span 6) */}
              <div className="sm:col-span-6 space-y-6 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`story-${currentPillar.id}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal min-h-[96px]"
                  >
                    {currentPillar.story}
                  </motion.p>
                </AnimatePresence>

                {/* CTA Action Buttons */}
                <div className="space-y-3 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#kontak"
                    className="group w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all duration-200"
                  >
                    <span>Konsultasikan Kebutuhan Anda</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <a
                    href="#portofolio"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors pl-1"
                  >
                    <span>Lihat Portofolio Hasil Kerja</span>
                    <span className="text-slate-400">→</span>
                  </a>
                </div>

                {/* Social Proof Trust Bar */}
                <div className="pt-2 flex items-center gap-3 border-t border-slate-200/80">
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
                  <div className="text-[11px] sm:text-xs font-medium text-slate-700">
                    <span className="font-bold text-[#0F172A]">25+ Klien Aktif</span>
                    <span className="text-slate-400 mx-1.5">·</span>
                    <span className="text-[#2563EB] font-semibold">99.99% SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Sub-Col: Editorial Numbered Metrics 01, 02, 03 (Span 6) */}
              <div className="sm:col-span-6 space-y-4 sm:pl-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`metrics-${currentPillar.id}`}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -14 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {currentPillar.metrics.map((item) => (
                      <div
                        key={item.num}
                        className="group pb-3 border-b border-slate-200/90 hover:border-blue-400 transition-colors"
                      >
                        <div className="flex items-baseline gap-3">
                          <span className="font-mono text-sm sm:text-base font-bold text-[#2563EB] group-hover:scale-105 transition-transform">
                            {item.num}
                          </span>
                          <div className="space-y-0.5">
                            <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                              <span>{item.title}</span>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h4>
                            <p className="text-[11px] text-slate-500 leading-snug">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Dynamic Visual Asset with Interactive Floating Badges (Span 5) */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${currentPillar.id}`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group"
              >
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.imageAlt}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Soft Vignette Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

                {/* Bottom Pillar Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white/90 text-[11px] font-medium flex items-center justify-between">
                  <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-semibold">
                    {currentPillar.bottomTag}
                  </span>
                  <span className="font-mono text-[10px] text-white/70">
                    Abinest Enterprise
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dynamic Floating Living Badge 1: Top Left Float */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                {(() => {
                  const Icon = currentPillar.badge1.icon;
                  return <Icon className="w-4 h-4" />;
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
              className="absolute -bottom-4 -right-3 sm:-right-5 bg-slate-900/95 text-white backdrop-blur-md border border-slate-800 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                {(() => {
                  const Icon = currentPillar.badge2.icon;
                  return <Icon className="w-4 h-4" />;
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
