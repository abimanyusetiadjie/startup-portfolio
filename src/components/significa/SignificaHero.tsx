"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";
import { ClayTechTicker } from "./ClayTechTicker";

const SLIDE_DURATION_MS = 2000;

const SHOWREEL_SLIDES = [
  {
    id: "looku",
    shortName: "Look.u AI",
    client: "Look.u AI",
    image: "/images/portfolio/looku-ai.webp",
    alt: "Antarmuka editorial fashion Look.u AI — rekomendasi Casual Campus Chiffon ramah iklim tropis",
    href: "/karya/looku-ai",
    bg: "#F0F0F0",
  },
  {
    id: "kinetic",
    shortName: "KINETIC Web",
    client: "KINETIC Tech Gym",
    image: "/images/portfolio/kinetic-fitness.webp",
    alt: "Website brand modern KINETIC Tech Gym dengan tipografi tegas dan pendaftaran QR member pass",
    href: "/karya/kinetic-fitness",
    bg: "#CFD1D6",
  },
  {
    id: "flownest",
    shortName: "FlowNest WA",
    client: "FlowNest Automasi WA & ERP",
    image: "/images/portfolio/wa-automation-workflow.webp",
    alt: "Kanvas alur otomasi FlowNest menghubungkan WhatsApp Cloud API, AI Parser & Cek Stok, serta sinkronisasi ERP",
    href: "/karya/wa-automation-workflow",
    bg: "#EAEDF2",
  },
  {
    id: "central",
    shortName: "Central Web",
    client: "Central Scaffolding B2B",
    image: "/images/portfolio/central-scaffolding-web.webp",
    alt: "Website B2B Central Scaffolding menampilkan kalkulator kebutuhan set SNI dan katalog perancah proyek",
    href: "/karya/central-scaffolding",
    bg: "#E5E7EB",
  },
  {
    id: "smartpos",
    shortName: "SmartPOS",
    client: "Toko Ritel POS (SmartPOS)",
    image: "/images/portfolio/smartpos-kasir.webp",
    alt: "Antarmuka kasir SmartPOS dengan pindai barcode F2, shortcut keyboard F1–F12, Cash, Kartu EDC, QRIS, dan cetak struk",
    href: "/karya/smartpos-aneka-rasa",
    bg: "#E9EEF6",
  },
];

const CAPABILITIES = [
  {
    id: "websites",
    title: "Website & Portal Bisnis",
    desc: "Situs perusahaan ringan, katalog produk interaktif, portal berita, dan Local SEO dengan hak milik kode penuh.",
    meta: "Mulai Rp1,5 juta · 7–14 hari",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    id: "erp",
    title: "Sistem ERP, WMS & POS",
    desc: "Sistem gudang offline/cloud, kasir barcode termal, manajemen kos & properti, HRIS, serta CRM B2B tanpa biaya per staf.",
    meta: "Mulai Rp4 juta · Rp0/staf",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    id: "education",
    title: "SIAKAD & Portal Sekolah",
    desc: "Portal yayasan multi-unit, alur pendaftaran PPDB online, absensi, rekap nilai, dan cetak laporan PDF/Excel otomatis.",
    meta: "Mulai Rp4 juta · Tanpa biaya per siswa",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    id: "ai-wa",
    title: "Automasi WhatsApp & AI",
    desc: "Asisten katalog WhatsApp 24/7 lewat jalur resmi, hitung ongkir otomatis, dan pembacaan dokumen faktur OCR.",
    meta: "Mulai Rp5 juta · Jalur Resmi WhatsApp",
    href: "/jasa-automasi-whatsapp",
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    desc: "Pencarian pintar berbasis data katalog nyata, simulasi harga sewa & kompensasi, pemetaan retensi, hingga segmentasi pelanggan.",
    meta: "Berbasis data bisnis Anda · Tanpa halusinasi",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaHero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openCap, setOpenCap] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || showreelOpen) return;
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % SHOWREEL_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [paused, showreelOpen, slideIdx]);

  const activeSlide = SHOWREEL_SLIDES[slideIdx] ?? SHOWREEL_SLIDES[0];

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 36) return;
    if (delta < 0) {
      setSlideIdx((i) => (i + 1) % SHOWREEL_SLIDES.length);
    } else {
      setSlideIdx((i) => (i === 0 ? SHOWREEL_SLIDES.length - 1 : i - 1));
    }
  };

  return (
    <>
      <section id="beranda" className="bg-white">
        {/* 1. Architectural Paper Hero Canvas (#F2F1F3 + subtle drafting grid & studio spotlight) */}
        <div className="relative overflow-hidden bg-[#F2F1F3] pt-[92px] sm:pt-[112px] lg:pt-[124px] pb-9 sm:pb-12 lg:pb-14">
          {/* Pure CSS Architectural Paper layers — fade cleanly into #F2F1F3 with zero seam */}
          <div
            aria-hidden="true"
            className="clay-hero-atmosphere pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden="true"
            className="clay-hero-grid pointer-events-none absolute inset-0"
          />

          {/* Sculptural Clay architectural form — visible subtly on Mobile & full scale on Desktop */}
          <svg
            aria-hidden="true"
            viewBox="0 0 640 520"
            fill="none"
            className="pointer-events-none select-none absolute -top-2 -right-12 w-[230px] sm:w-[320px] sm:-right-6 lg:-top-6 lg:right-[3%] lg:w-[420px] xl:w-[480px] h-auto opacity-85 lg:opacity-100"
          >
            <defs>
              <linearGradient
                id="clayHemisphere"
                x1="15%"
                y1="10%"
                x2="85%"
                y2="90%"
              >
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="64%" stopColor="#F4F4F6" />
                <stop offset="100%" stopColor="#D9DCE3" />
              </linearGradient>
              <linearGradient id="clayRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E4E6EC" />
                <stop offset="100%" stopColor="#CFD2DA" />
              </linearGradient>
              <radialGradient id="clayOrbViolet" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#D8B4FE" />
                <stop offset="55%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#4C1D95" />
              </radialGradient>
              <radialGradient id="clayOrbCoral" cx="35%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FDBA74" />
                <stop offset="60%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#9A3412" />
              </radialGradient>
              <filter
                id="claySoftShadow"
                x="-15%"
                y="-15%"
                width="130%"
                height="130%"
              >
                <feDropShadow
                  dx="-12"
                  dy="24"
                  stdDeviation="24"
                  floodColor="#141519"
                  floodOpacity="0.085"
                />
              </filter>
            </defs>

            <g filter="url(#claySoftShadow)">
              <path
                d="M 468 48 C 306 54 198 182 222 332 C 232 394 268 446 318 474 L 468 48 Z"
                fill="url(#clayHemisphere)"
                stroke="rgba(255,255,255,0.85)"
                strokeWidth="1"
              />
              <path
                d="M 468 48 L 318 474 L 344 468 L 494 42 Z"
                fill="url(#clayRim)"
                opacity="0.78"
              />
            </g>

            <g className="clay-orb-float-a">
              <circle cx="192" cy="148" r="18" fill="url(#clayOrbViolet)" />
            </g>
            <g className="clay-orb-float-b">
              <circle cx="562" cy="322" r="11" fill="url(#clayOrbCoral)" />
            </g>
          </svg>

          <div className="clay-container relative z-10 space-y-5 sm:space-y-6">
            <h1 className="font-semibold text-[#111111] tracking-[-0.028em] leading-[1.14] text-[clamp(1.72rem,2.6vw+0.58rem,3.05rem)] max-w-[1260px] [text-wrap:balance] lg:[text-wrap:unset]">
              Kami merancang website, aplikasi bisnis,{" "}
              <br className="hidden lg:block" />
              dan automasi khusus untuk bisnis &amp; proyek Anda.
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-4 gap-x-8 pt-0.5">
              <div className="flex flex-wrap items-center gap-x-7 gap-y-2.5">
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="clay-arrow-link !text-[15px]"
                >
                  <span>Coba demo interaktif</span>
                  <ArrowRight className="w-4 h-4 text-[#6B7280]" />
                </button>

                <a
                  href="#karya"
                  className="text-[14.5px] font-medium text-[#6B7280] hover:text-[#111111] transition-colors"
                >
                  Lihat karya ↓
                </a>
              </div>

              <div
                className="flex flex-wrap items-center gap-2 text-[13px]"
                aria-label="Terbuka untuk perusahaan, UMKM, dan pribadi"
              >
                <span className="text-[#6B7280] mr-0.5">Terbuka untuk</span>
                {["Perusahaan", "UMKM", "Pribadi"].map((target) => (
                  <span
                    key={target}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-white/80 border border-black/[0.08] text-[#111111] font-medium shadow-[0_1px_2px_rgba(17,19,24,0.03)]"
                  >
                    {target}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Responsive Showreel Frame: Taller 4:3 + 16px margin on Mobile (~46% larger), 16:9 Clay rhythm on Desktop */}
        <div
          style={{
            background:
              "linear-gradient(180deg, #F2F1F3 0%, #F2F1F3 48%, #FFFFFF 48%, #FFFFFF 100%)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[clamp(1.5rem,5vw,4.75rem)]">
            <div
              style={{ backgroundColor: activeSlide.bg }}
              className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:max-h-[680px] overflow-hidden border border-[#E5E7EB]/90 shadow-[0_24px_60px_-30px_rgba(17,19,24,0.16)] transition-colors duration-300"
            >
              <Link
                href={activeSlide.href}
                aria-label={`Lihat studi kasus ${activeSlide.client}`}
                className="block absolute inset-0"
              >
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    style={{ backgroundColor: activeSlide.bg }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      priority
                      quality={85}
                      sizes="(max-width: 640px) 94vw, (max-width: 1440px) 92vw, 1300px"
                      className="object-contain object-center"
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>
            </div>

            {/* 3. Creative Minimalist Animated Story-Style Progress Strip (Zero "03 / 05" & zero clunky arrows!) */}
            <div className="pt-4 sm:pt-5">
              <div
                className="grid grid-cols-5 gap-2 sm:gap-4"
                role="tablist"
                aria-label="Pilih sorotan proyek"
              >
                {SHOWREEL_SLIDES.map((s, idx) => {
                  const isActive = idx === slideIdx;
                  const isPassed = idx < slideIdx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Tampilkan ${s.client}`}
                      onClick={() => setSlideIdx(idx)}
                      className="group text-left py-1.5 cursor-pointer focus:outline-none"
                    >
                      <div className="relative h-[2px] w-full bg-[#E5E7EB] overflow-hidden">
                        {isPassed && (
                          <span className="absolute inset-0 bg-[#111111]/30" />
                        )}
                        {isActive && (
                          <motion.span
                            key={`${s.id}-${paused ? "paused" : "run"}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: paused ? 1 : 1 }}
                            transition={{
                              duration: paused ? 0 : SLIDE_DURATION_MS / 1000,
                              ease: "linear",
                            }}
                            style={{ transformOrigin: "left" }}
                            className="absolute inset-0 bg-[#111111]"
                          />
                        )}
                      </div>

                      {/* Desktop clean 2-word label directly below each progress track */}
                      <span
                        className={`hidden sm:block mt-2.5 text-[13.5px] transition-colors truncate ${
                          isActive
                            ? "font-semibold text-[#111111]"
                            : "font-medium text-[#9CA3AF] group-hover:text-[#111111]"
                        }`}
                      >
                        {s.shortName}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile ultra-clean single active link row (replaces noisy 03 / 05 caption completely) */}
              <div className="sm:hidden flex items-center justify-between gap-3 pt-2">
                <Link
                  href={activeSlide.href}
                  className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#111111]"
                >
                  <span>{activeSlide.client}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
                </Link>
                <span className="text-[12.5px] text-[#9CA3AF]">
                  Geser untuk lihat lainnya
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Clay Signature Capabilities Split Band */}
        <div className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="clay-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-[21px] sm:text-[26px] lg:text-[28px] font-normal leading-[1.38] tracking-[-0.02em] text-[#111111] max-w-[490px]">
                Dirancang ringkas, dibangun untuk performa produksi, dan
                diserahkan utuh 100%—tanpa ketergantungan sewa SaaS bulanan.
              </p>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 space-y-2">
              {CAPABILITIES.map((cap) => {
                const isOpen = openCap === cap.id;
                return (
                  <div key={cap.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenCap(isOpen ? null : cap.id)}
                      className="w-full py-2 flex items-center justify-between gap-4 text-left group cursor-pointer"
                    >
                      <span className="text-[21px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#111111] group-hover:opacity-65 transition-opacity">
                        {cap.title}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8C8E94] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#111111]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-1 pb-5 space-y-3">
                            <p className="text-[15px] leading-[1.6] text-[#4B5563]">
                              {cap.desc}
                            </p>
                            <div className="flex flex-wrap items-center justify-between gap-3 text-[13.5px]">
                              <span className="text-[#8C8E94]">{cap.meta}</span>
                              <Link
                                href={cap.href}
                                className="clay-arrow-link !text-[14px]"
                              >
                                <span>Detail layanan</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#6B7280]" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5. Fast-Moving Tech Stack Marquee Ticker */}
        <ClayTechTicker />
      </section>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </>
  );
}
