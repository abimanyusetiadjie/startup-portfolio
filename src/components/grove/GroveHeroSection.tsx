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

const WHATSAPP_NUMBER = "6285708677918";

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3 Layanan Utama Abinest dengan Copywriting Inklusif untuk UMKM & Korporat
  const pillars = [
    {
      id: "web",
      tabLabel: "1. Web UMKM & Bisnis",
      tabSubtitle: "Akses Kilat <0.8s",
      icon: Globe,
      accentColor: "#2563EB",
      headlineLine1: "Website Modern untuk UMKM & Bisnis",
      headlineLine2: "Tampil Berkelas, Cepat, & Kredibel.",
      story:
        "Bantu UMKM, toko online, hingga yayasan memiliki website profesional tanpa beban biaya langganan bulanan. Tampilan kredibel di HP pelanggan, teroptimasi Google SEO lokal agar mudah ditemukan calon pembeli, dan memudahkan pelanggan langsung chat WhatsApp untuk transaksi.",
      waMessage:
        "Halo Tim Abinest, saya tertarik konsultasi Website Modern untuk UMKM / Bisnis saya. Boleh diskusi konsep dan anggarannya?",
      image: "/images/hero-editorial-portrait-2x.jpg",
      imageAlt: "Implementasi Website Modern Abinest untuk UMKM dan Bisnis",
    },
    {
      id: "erp",
      tabLabel: "2. Kasir POS & ERP",
      tabSubtitle: "Otomasi Operasional",
      icon: Building2,
      accentColor: "#1D4ED8",
      headlineLine1: "Sistem Kasir POS & ERP Kustom",
      headlineLine2: "Otomatiskan Stok, Toko, & Keuangan.",
      story:
        "Solusi operasional terjangkau untuk UMKM ritel, kafe, distributor, hingga sekolah. Pantau stok barang masuk-keluar, kelola kasir kasbon/tunai, dan lihat laporan laba rugi harian otomatis dari HP Anda—tanpa beban biaya lisensi bulanan per kasir atau staf selamanya.",
      waMessage:
        "Halo Tim Abinest, saya ingin konsultasi kebutuhan Sistem Kasir POS / ERP untuk UMKM / Bisnis kami (pantau stok & cabang).",
      image: "/images/erp-dashboard.jpg",
      imageAlt: "Sistem Kasir POS dan ERP Operasional UMKM Abinest",
    },
    {
      id: "ai-wa",
      tabLabel: "3. WhatsApp AI & Automasi",
      tabSubtitle: "CS Cerdas 24 Jam Nonstop",
      icon: Bot,
      accentColor: "#0284C7",
      headlineLine1: "WhatsApp AI Agent & Automasi",
      headlineLine2: "Admin CS Cerdas 24 Jam Nonstop.",
      story:
        "Otomatiskan customer service UMKM dengan AI resmi Meta WhatsApp API. Balas pesan pelanggan <1 detik, kirim katalog produk, jawab pertanyaan umum, hingga rekap pesanan otomatis 24 jam nonstop tanpa perlu repot bayar lembur admin shift malam.",
      waMessage:
        "Halo Tim Abinest, saya tertarik implementasi WhatsApp AI Agent resmi Meta untuk melayani chat pelanggan UMKM 24/7. Boleh minta demonya?",
      image: "/images/ai-ml-workflow.jpg",
      imageAlt: "Pipeline WhatsApp AI Agent dan Automasi Operasional Abinest",
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
      className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 overflow-hidden bg-[#FBFBFA] border-b border-slate-200/70"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* KOLOM KIRI: Full Width Editorial Flow (Span 7) - Lapang & Humanis */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Headline Dinamis */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${currentPillar.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.14]">
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

            {/* Paragraf Cerita & Manfaat Nyata (Lebar Penuh & Mudah Dibaca) */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`story-${currentPillar.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-sm sm:text-base lg:text-[16.5px] text-slate-600 leading-relaxed font-normal max-w-2xl"
              >
                {currentPillar.story}
              </motion.p>
            </AnimatePresence>

            {/* Tombol Aksi CTA & Link Hasil Kerja */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  currentPillar.waMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all duration-200 cursor-pointer"
              >
                <span>Konsultasikan via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <a
                href="#portofolio"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#2563EB] bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/60 transition-all text-center"
              >
                <span>Lihat Hasil Kerja &amp; Demo</span>
                <span className="text-slate-400">→</span>
              </a>
            </div>

            {/* 3 Micro-Trust Pills (Pengganti 3 Kotak Poin yang Lebih Ringkas & Rapi) */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 font-semibold shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Investasi Ramah UMKM</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-800 font-semibold shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                <span>Siap Operasi 14 Hari</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/90 text-slate-700 font-semibold shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                <span>100% Hak Milik Tanpa Sewa</span>
              </div>
            </div>

            {/* Bukti Sosial Klien Aktif (UMKM & Institusi) */}
            <div className="pt-3 flex items-center gap-3 border-t border-slate-200/80">
              <div className="flex -space-x-1.5">
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-[9px] font-black flex items-center justify-center shadow-xs">
                  UMKM
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                  PT
                </div>
                <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-slate-700 to-slate-900 text-white text-[10px] font-black flex items-center justify-center shadow-xs">
                  CV
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-700">
                <span className="font-bold text-[#0F172A]">25+ UMKM &amp; Institusi Aktif</span>
                <span className="text-slate-400 mx-1.5">·</span>
                <span className="text-[#2563EB] font-semibold">Garansi SLA Anti-Down 99.9%</span>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Visual Editorial Portrait Pas & Proporsional (Span 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${currentPillar.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-[320px] sm:h-[390px] md:h-[440px] lg:h-[480px] xl:h-[500px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] group"
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
