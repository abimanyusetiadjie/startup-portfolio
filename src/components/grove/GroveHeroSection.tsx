"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Building2,
  Bot,
} from "lucide-react";

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3 Fokus Utama Abinest dengan Copywriting Humanis, Elegan, dan Terukur
  const pillars = [
    {
      id: "web",
      tabLabel: "1. Modern Web",
      tabSubtitle: "Akses Kilat <0.8s",
      icon: Globe,
      accentColor: "#2563EB",
      headlineLine1: "Website Korporat Modern",
      headlineLine2: "Tampil Berkelas, Cepat, & Kredibel.",
      story:
        "Membangun kehadiran digital yang meyakinkan calon klien sejak detik pertama. Halaman terbuka instan (<0.8 detik), skor SEO Google optimal, dan tampilan presisi di seluruh ukuran layar.",
      metrics: [
        {
          num: "01",
          title: "Akses Kilat <0.8 Detik",
          desc: "Halaman ringan, tanpa lag, bebas beban plugin berat",
        },
        {
          num: "02",
          title: "Arsitektur SEO Google 100/100",
          desc: "Struktur kode rapi untuk mendongkrak visibilitas bisnis",
        },
        {
          num: "03",
          title: "100% Hak Milik Source Code",
          desc: "Bebas biaya sewa platform atau ketergantungan vendor",
        },
      ],
      image: "/images/hero-editorial-portrait-2x.jpg",
      imageAlt: "Implementasi Website Modern Abinest di Lapangan",
    },
    {
      id: "erp",
      tabLabel: "2. Sistem ERP Kustom",
      tabSubtitle: "Kendali Operasional",
      icon: Building2,
      accentColor: "#1D4ED8",
      headlineLine1: "Sistem Operasional Terpadu",
      headlineLine2: "Kendali Penuh Gudang & Finansial.",
      story:
        "Satukan seluruh alur bisnis—mulai dari mutasi stok multi-gudang, absensi staf, hingga laporan laba rugi real-time—dalam satu dashboard intuitif bergaransi SLA 99.99%.",
      metrics: [
        {
          num: "01",
          title: "Keandalan Sistem SLA 99.99%",
          desc: "Server stabil dengan sistem backup otomatis harian",
        },
        {
          num: "02",
          title: "Bebas Biaya Lisensi Pengguna",
          desc: "Tambah 100 hingga 10.000 karyawan tanpa biaya ekstra",
        },
        {
          num: "03",
          title: "Data Terenkripsi & Milik Penuh",
          desc: "Struktur database sepenuhnya menjadi aset perusahaan Anda",
        },
      ],
      image: "/images/erp-dashboard.jpg",
      imageAlt: "Sistem ERP Multi-Gudang Abinest",
    },
    {
      id: "ai-wa",
      tabLabel: "3. Automasi WA & AI",
      tabSubtitle: "Respons Non-Stop 24/7",
      icon: Bot,
      accentColor: "#0284C7",
      headlineLine1: "Automasi Alur Kerja Cerdas",
      headlineLine2: "Respons Pelanggan 24 Jam Non-Stop.",
      story:
        "Otomatiskan pengiriman tagihan via WhatsApp resmi Meta, integrasi reminder pembayaran, dan asisten AI pintar yang sigap melayani pertanyaan klien seketika.",
      metrics: [
        {
          num: "01",
          title: "Meta WhatsApp Cloud API Resmi",
          desc: "Aman dari pemblokiran (anti-banned) dengan verifikasi bisnis",
        },
        {
          num: "02",
          title: "Respons Pelanggan Seketika",
          desc: "Asisten AI aktif melayani ramah di luar jam kantor",
        },
        {
          num: "03",
          title: "Otomasi Faktur & Dokumen",
          desc: "Pembacaan invoice instan tanpa input manual yang melelahkan",
        },
      ],
      image: "/images/ai-ml-workflow.jpg",
      imageAlt: "Automasi WhatsApp dan AI Pipeline",
    },
  ];

  // Auto-advance setiap 6 detik ketika kursor tidak sedang di-hover
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
      {/* Subtle Atmospheric Grid Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.20] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
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

                  {/* Micro Progress Bar pada Tab Aktif */}
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

        {/* Asymmetrical 2-Column Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* KOLOM KIRI: Headline Humanis, Misi, Aksi, & 3 Pilar Bernomor (Span 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${currentPillar.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-2.5"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.12]">
                  {currentPillar.headlineLine1}
                  <br />
                  <span className="text-[#2563EB]">
                    {currentPillar.headlineLine2}
                  </span>
                </h1>

                {/* Signature Accent Line */}
                <div className="w-16 sm:w-20 h-1 bg-[#2563EB] rounded-full origin-left" />
              </motion.div>
            </AnimatePresence>

            {/* Sub-Grid: Cerita Kiri + 3 Pilar Bernomor di Kanan */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 pt-1">
              {/* Sisi Kiri: Nilai Nyata, Tombol Konsultasi, & Bukti Sosial (Span 6) */}
              <div className="sm:col-span-6 space-y-5 flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`story-${currentPillar.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal min-h-[80px]"
                  >
                    {currentPillar.story}
                  </motion.p>
                </AnimatePresence>

                {/* Tombol Aksi CTA */}
                <div className="space-y-2.5 pt-1">
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

                {/* Bukti Sosial Klien Aktif */}
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

              {/* Sisi Kanan: 3 Nilai Utama Bernomor 01, 02, 03 (Span 6) */}
              <div className="sm:col-span-6 space-y-3.5 sm:pl-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`metrics-${currentPillar.id}`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5"
                  >
                    {currentPillar.metrics.map((item) => (
                      <div
                        key={item.num}
                        className="group pb-2.5 border-b border-slate-200/90 hover:border-blue-400 transition-colors"
                      >
                        <div className="flex items-baseline gap-2.5">
                          <span className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] group-hover:scale-105 transition-transform">
                            {item.num}
                          </span>
                          <div className="space-y-0.5">
                            <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
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

          {/* KOLOM KANAN: Ukuran Foto Pas & Murni Bersih dari Badge Apapun (Span 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${currentPillar.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[290px] sm:h-[360px] md:h-[400px] lg:h-[460px] xl:h-[475px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] group"
              >
                <Image
                  src={currentPillar.image}
                  alt={currentPillar.imageAlt}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                />

                {/* Soft Gradient Tipis di Bawah */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
