"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Building2,
  Bot,
  ShieldCheck,
  Activity,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const pillars = [
    {
      id: "web",
      tabLabel: "1. Web UMKM & Bisnis",
      tabShortLabel: "1. Web Bisnis",
      icon: Globe,
      headlineLine1: "Website Modern untuk UMKM & Bisnis",
      headlineLine2: "Tampil Berkelas, Cepat, & Kredibel.",
      story:
        "Bantu UMKM, toko online, hingga yayasan memiliki website profesional tanpa beban biaya langganan bulanan. Tampilan kredibel di HP pelanggan, teroptimasi Google SEO lokal, dan langsung terhubung ke WhatsApp.",
      waMessage:
        "Halo Tim Abinest, saya tertarik konsultasi Website Modern untuk UMKM / Bisnis saya. Boleh diskusi konsep dan anggarannya?",
      image: "/images/hero-pillar-web.webp",
      imageAlt: "Modern Web Engineering & Minimalist Workstation Abinest",
      glassBadges: {
        telemetry: {
          liveTag: "PRODUKSI LIVE",
          title: "Edge CDN · SEO 100",
          metric: "<0.8s Load",
        },
        guarantee: {
          title: "100% Hak Milik Kode",
          subtitle: "Bebas Biaya Sewa Bulanan",
          icon: ShieldCheck,
        },
      },
    },
    {
      id: "erp",
      tabLabel: "2. Sistem ERP & UMKM",
      tabShortLabel: "2. Sistem ERP",
      icon: Building2,
      headlineLine1: "Sistem ERP & Operasional UMKM",
      headlineLine2: "Otomatiskan Stok, Toko, & Keuangan.",
      story:
        "Solusi operasional terjangkau untuk UMKM ritel, kafe, distributor, hingga sekolah. Pantau stok barang masuk-keluar, kelola kasir POS, dan lihat laporan laba rugi harian otomatis dari HP tanpa biaya lisensi per staf.",
      waMessage:
        "Halo Tim Abinest, saya ingin konsultasi kebutuhan Sistem Kasir POS / ERP untuk UMKM / Bisnis kami (pantau stok & cabang).",
      image: "/images/hero-pillar-erp.webp",
      imageAlt: "Sistem ERP & Operasional Terpadu Abinest",
      glassBadges: {
        telemetry: {
          liveTag: "SYNC REAL-TIME",
          title: "Multi-Gudang & Kasir",
          metric: "99.8% Akurat",
        },
        guarantee: {
          title: "0 Biaya Lisensi Staf",
          subtitle: "Akses Tak Terbatas dari HP",
          icon: Activity,
        },
      },
    },
    {
      id: "ai-wa",
      tabLabel: "3. Automasi AI/ML",
      tabShortLabel: "3. Automasi AI",
      icon: Bot,
      headlineLine1: "Automasi AI/ML & WhatsApp",
      headlineLine2: "Admin CS Cerdas 24 Jam Nonstop.",
      story:
        "Otomatiskan customer service dengan AI resmi Meta WhatsApp API. Balas pesan pelanggan <1 detik, kirim katalog produk, hingga rekap pesanan otomatis 24 jam nonstop tanpa beban lembur admin.",
      waMessage:
        "Halo Tim Abinest, saya tertarik implementasi WhatsApp AI Agent resmi Meta untuk melayani chat pelanggan UMKM 24/7. Boleh minta demonya?",
      image: "/images/hero-pillar-aiml.webp",
      imageAlt: "Automasi AI/ML & WhatsApp CS Cerdas Abinest",
      glassBadges: {
        telemetry: {
          liveTag: "META API RESMI",
          title: "WhatsApp AI Agent",
          metric: "<1s Balas CS",
        },
        guarantee: {
          title: "CS Aktif 24 Jam Nonstop",
          subtitle: "Tanpa Beban Lembur Admin",
          icon: Sparkles,
        },
      },
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % pillars.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const currentPillar = pillars[activeIdx];
  const GuaranteeIcon = currentPillar.glassBadges.guarantee.icon;

  return (
    <section
      id="beranda"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative pt-4 sm:pt-7 lg:pt-9 pb-8 sm:pb-12 lg:pb-14 overflow-hidden bg-[#F8FAFC] border-b border-slate-300/80"
    >
      {/* Subtle Grid Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.18] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.22) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-[1260px] mx-auto px-4 sm:px-8 relative z-10">
        {/* Top Bar: Strictly 1 Horizontal Row (3 Equal Columns on Mobile/Tablet, Inline on Desktop) */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 mb-4 sm:mb-6">
          <div
            role="tablist"
            aria-label="Pilihan Layanan Abinest"
            className="w-full lg:w-auto grid grid-cols-3 lg:inline-flex items-center p-1 bg-white rounded-xl border border-slate-300 shadow-xs gap-1"
          >
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isActive = activeIdx === idx;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPaused(true);
                  }}
                  className={`relative px-2 sm:px-3.5 py-2 rounded-lg text-[11px] sm:text-xs lg:text-[13px] font-bold transition-all duration-150 flex items-center justify-center gap-1.5 cursor-pointer outline-none select-none min-w-0 ${
                    isActive
                      ? "bg-[#2563EB] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <Icon
                    className={`w-3.5 h-3.5 shrink-0 ${
                      isActive ? "text-white" : "text-slate-500"
                    }`}
                  />
                  <span className="truncate">
                    <span className="md:hidden">{pillar.tabShortLabel}</span>
                    <span className="hidden md:inline">{pillar.tabLabel}</span>
                  </span>

                  {/* Active Progress Line */}
                  {isActive && (
                    <div className="absolute bottom-0 inset-x-1.5 h-[2px] rounded-full overflow-hidden bg-blue-400/40">
                      <motion.div
                        key={`progress-${idx}-${isPaused}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: isPaused ? 0 : 6,
                          ease: "linear",
                        }}
                        className="h-full bg-white rounded-full"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="hidden lg:inline-flex items-center gap-2 text-[11px] text-slate-600 font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-300 shadow-2xs">
            <span
              className={`w-2 h-2 rounded-full ${
                isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"
              }`}
            />
            <span>{isPaused ? "Mode Interaktif (Jeda)" : "Otomatis Berganti (6s)"}</span>
          </div>
        </div>

        {/* MOBILE-FIRST ABOVE-THE-FOLD GRID:
            On Mobile/Tablet (<1024px):
              Order 1: Headline
              Order 2: Visual Hero Image Card (100% VISIBLE ABOVE THE FOLD!)
              Order 3: Story + CTA Buttons + 3-Col Guarantee Strip
            On Desktop (>=1024px):
              Left 7 Cols: Headline + Story + CTA Buttons + 3-Col Guarantee Strip
              Right 5 Cols: Visual Hero Image Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-x-10 lg:gap-y-5 items-center">
          {/* ORDER 1: Eyebrow & Headline */}
          <div className="order-1 lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-blue-50 border border-blue-200 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.12em] text-[#1D4ED8] font-bold">
              <span>0{activeIdx + 1} / 03 · ABINEST DIGITAL SYSTEMS</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`headline-${currentPillar.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <h1 className="text-[22px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[45px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.15]">
                  {currentPillar.headlineLine1}
                  <br />
                  <span className="text-[#2563EB]">
                    {currentPillar.headlineLine2}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ORDER 2 (IMMEDIATELY ABOVE THE FOLD ON MOBILE!): Visual Card */}
          <div className="order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 relative self-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${currentPillar.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="ui-card overflow-hidden shadow-md group"
              >
                {/* Crisp Card Header: Telemetry Strip */}
                <div className="bg-[#0F172A] border-b border-slate-800 px-3.5 py-2 flex items-center justify-between gap-2 text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="relative flex items-center justify-center w-2 h-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-semibold truncate">
                      {currentPillar.glassBadges.telemetry.liveTag} · {currentPillar.glassBadges.telemetry.title}
                    </span>
                  </div>

                  <span className="px-2 py-0.5 rounded-md bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[10px] font-mono font-bold shrink-0">
                    {currentPillar.glassBadges.telemetry.metric}
                  </span>
                </div>

                {/* Hero Image Viewport: Sized so Mobile First Screen Shows Image + CTA Together */}
                <div className="relative w-full h-[195px] sm:h-[260px] md:h-[310px] lg:h-[390px] bg-slate-900 overflow-hidden">
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Crisp Card Footer: Ownership & SLA Guarantee */}
                <div className="bg-white border-t border-slate-200 px-3.5 py-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
                      <GuaranteeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[11px] sm:text-xs font-bold text-[#0F172A] truncate">
                        {currentPillar.glassBadges.guarantee.title}
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-500 truncate">
                        {currentPillar.glassBadges.guarantee.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>SLA 99.9%</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ORDER 3: Story, Action Buttons & 1-Row 3-Col Divided Guarantee Strip */}
          <div className="order-3 lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={`story-${currentPillar.id}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="text-xs sm:text-sm lg:text-[15.5px] text-slate-600 leading-relaxed font-normal max-w-2xl"
              >
                {currentPillar.story}
              </motion.p>
            </AnimatePresence>

            {/* Primary & Secondary Action Buttons */}
            <div className="space-y-2">
              <div className="grid grid-cols-1 sm:flex sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    currentPillar.waMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] border border-blue-700 shadow-sm transition-all duration-150 cursor-pointer"
                >
                  <span>Konsultasikan via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>

                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 hover:text-[#1D4ED8] bg-white hover:bg-blue-50/70 border border-slate-300 hover:border-[#2563EB] shadow-2xs transition-all text-center"
                >
                  <span>Coba Demo Interaktif →</span>
                </Link>
              </div>

              <div className="flex items-center gap-1.5 text-[11.5px] sm:text-xs font-medium text-slate-600">
                <span>Ingin estimasi biaya &amp; penghematan 3 tahun?</span>
                <Link
                  href="/audit-gratis"
                  className="font-bold text-[#2563EB] hover:underline inline-flex items-center gap-0.5"
                >
                  <span>Hitung di Audit Gratis →</span>
                </Link>
              </div>
            </div>

            {/* Strictly 3-Column Horizontal Guarantee Grid on Both Mobile & Desktop */}
            <div className="grid grid-cols-3 border border-slate-300 rounded-xl bg-white divide-x divide-slate-200 shadow-2xs overflow-hidden">
              <div className="p-2 sm:px-3.5 sm:py-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0F172A] block leading-tight truncate">
                    Ramah UMKM
                  </span>
                  <span className="text-[9.5px] sm:text-[10.5px] text-slate-500 block truncate">
                    Mulai Rp 1.5 Jt
                  </span>
                </div>
              </div>
              <div className="p-2 sm:px-3.5 sm:py-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0F172A] block leading-tight truncate">
                    Rilis &lt;14 Hari
                  </span>
                  <span className="text-[9.5px] sm:text-[10.5px] text-slate-500 block truncate">
                    Alur terstruktur
                  </span>
                </div>
              </div>
              <div className="p-2 sm:px-3.5 sm:py-2.5 flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 shrink-0" />
                <div className="min-w-0">
                  <span className="text-[10.5px] sm:text-xs font-bold text-[#0F172A] block leading-tight truncate">
                    100% Kode Milik
                  </span>
                  <span className="text-[9.5px] sm:text-[10.5px] text-slate-500 block truncate">
                    Rp 0 biaya sewa
                  </span>
                </div>
              </div>
            </div>

            {/* Social Proof Row */}
            <div className="pt-2 flex items-center gap-2.5 border-t border-slate-200">
              <div className="flex -space-x-1.5 shrink-0">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-600 text-white text-[8.5px] font-black flex items-center justify-center shadow-xs">
                  UMKM
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-[9.5px] font-black flex items-center justify-center shadow-xs">
                  PT
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-white bg-gradient-to-br from-slate-700 to-slate-900 text-white text-[9.5px] font-black flex items-center justify-center shadow-xs">
                  CV
                </div>
              </div>
              <div className="text-[11px] sm:text-xs font-medium text-slate-700 truncate">
                <span className="font-bold text-[#0F172A]">25+ UMKM &amp; Institusi Aktif</span>
                <span className="text-slate-400 mx-1.5">·</span>
                <span className="text-[#2563EB] font-semibold">Garansi SLA Anti-Down 99.9%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
