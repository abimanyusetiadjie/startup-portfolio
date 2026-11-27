"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";

const SHOWREEL_SLIDES = [
  {
    id: "propsmart",
    client: "PropSmart SaaS",
    caption: "Dashboard okupansi 32 kamar, Net Rental Yield 9,45% & estimasi harga ML",
    image: "/images/portfolio/propsmart-dashboard.png",
    alt: "PropSmart Executive Financial & Occupancy Dashboard menampilkan 32 kamar dan Net Rental Yield 9.45%",
    href: "/karya/propsmart-saas",
    fit: "top" as const,
  },
  {
    id: "amen",
    client: "Toko Amen Snack",
    caption: "Katalog live 1.446 SKU & asisten WhatsApp AI hitung ongkir otomatis",
    image: "/images/portfolio/amen-system.jpg",
    alt: "Sistem katalog live 1.446 SKU dan asisten WhatsApp AI Toko Amen Snack",
    href: "/karya/toko-amen-snack",
    fit: "center" as const,
  },
  {
    id: "heavytrack",
    client: "HeavyTrack WMS",
    caption: "Gudang spare parts alat berat offline-first (<5ms) & cetak Surat Jalan",
    image: "/images/portfolio/heavytrack-dashboard.png",
    alt: "Dashboard Operasional HeavyTrack WMS PT Mitra Abadi Nusantara",
    href: "/karya/heavytrack-wms",
    fit: "top" as const,
  },
  {
    id: "lacak-korupsi",
    client: "Lacak Korupsi",
    caption: "Portal berita investigasi & peta sebaran data 38 provinsi PostGIS",
    image: "/images/portfolio/lacak-korupsi-peta.png",
    alt: "Peta Sebaran dan Analitik Data Lacak Korupsi",
    href: "/karya/lacak-korupsi",
    fit: "top" as const,
  },
  {
    id: "looku",
    client: "Look.u AI",
    caption: "Stylist AI Hybrid RAG 594 SKU tanpa halusinasi & pemindaian Vision AI",
    image: "/images/portfolio/looku-system.jpg",
    alt: "Studio AI styling fashion Hybrid RAG Look.u AI",
    href: "/karya/looku-ai",
    fit: "center" as const,
  },
];

const CAPABILITIES = [
  {
    id: "websites",
    title: "Website & Portal Bisnis",
    desc: "Situs perusahaan cepat (<0,8 detik), katalog produk interaktif, portal berita, dan Local SEO dengan 100% hak milik kode.",
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
    desc: "Asisten katalog WhatsApp 24/7 lewat API resmi Meta, hitung ongkir otomatis, dan pembacaan dokumen faktur OCR.",
    meta: "Mulai Rp5 juta · Meta Cloud API",
    href: "/jasa-automasi-whatsapp",
  },
  {
    id: "ml",
    title: "Machine Learning & Data",
    desc: "Model Hybrid RAG anti-halusinasi, prediksi harga sewa & gaji ideal, deteksi risiko resign, hingga segmentasi RFM.",
    meta: "Python FastAPI · Scikit-Learn · Gemini",
    href: "/jasa-automasi-whatsapp",
  },
];

const TECH_ECOSYSTEM = [
  "Next.js",
  "Astro",
  "Laravel",
  "FastAPI",
  "PostgreSQL",
  "Python AI",
  "Meta API",
];

export function SignificaHero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [openCap, setOpenCap] = useState<string | null>(null);

  useEffect(() => {
    if (paused || showreelOpen) return;
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % SHOWREEL_SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, showreelOpen]);

  const activeSlide = SHOWREEL_SLIDES[slideIdx] ?? SHOWREEL_SLIDES[0];

  const prevSlide = () =>
    setSlideIdx((i) => (i === 0 ? SHOWREEL_SLIDES.length - 1 : i - 1));
  const nextSlide = () =>
    setSlideIdx((i) => (i === SHOWREEL_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <>
      <section id="beranda" className="bg-white">
        {/* 1. Clay Signature Warm Light-Gray Hero Canvas (#F2F1F3) with Balanced Spacing */}
        <div className="relative overflow-hidden bg-[#F2F1F3] pt-[96px] sm:pt-[112px] lg:pt-[124px] pb-10 sm:pb-12 lg:pb-14">
          {/* Whisper-clean matte architectural sculpture (Clay spatial identity, zero neon AI slop) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 640 520"
            fill="none"
            className="hidden lg:block pointer-events-none select-none absolute -top-6 right-[3%] w-[420px] xl:w-[480px] h-auto"
          >
            <defs>
              <linearGradient id="clayHemisphere" x1="15%" y1="10%" x2="85%" y2="90%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="68%" stopColor="#F4F4F6" />
                <stop offset="100%" stopColor="#DFE1E6" />
              </linearGradient>
              <linearGradient id="clayRim" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E6E7EC" />
                <stop offset="100%" stopColor="#D3D5DC" />
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
              <filter id="claySoftShadow" x="-15%" y="-15%" width="130%" height="130%">
                <feDropShadow dx="-12" dy="24" stdDeviation="24" floodColor="#141519" floodOpacity="0.06" />
              </filter>
            </defs>

            {/* Matte sculpted architectural hemisphere */}
            <g filter="url(#claySoftShadow)">
              <path
                d="M 468 48 C 306 54 198 182 222 332 C 232 394 268 446 318 474 L 468 48 Z"
                fill="url(#clayHemisphere)"
              />
              <path
                d="M 468 48 L 318 474 L 344 468 L 494 42 Z"
                fill="url(#clayRim)"
                opacity="0.72"
              />
            </g>

            {/* Two restrained tactile signature spheres (Clay chromatic punctuation) */}
            <circle cx="192" cy="148" r="18" fill="url(#clayOrbViolet)" />
            <circle cx="562" cy="322" r="11" fill="url(#clayOrbCoral)" />
          </svg>

          <div className="clay-container relative z-10">
            <h1 className="font-semibold text-[#111111] tracking-[-0.03em] leading-[1.1] text-[clamp(1.95rem,3.6vw+0.75rem,3.65rem)] max-w-[820px]">
              Abinest membangun website cepat, sistem ERP/POS, dan automasi AI
            </h1>
          </div>
        </div>

        {/* 2. Full-Width Sharp-Edged Showreel Overlapping Seamlessly (#F2F1F3 -> #FFFFFF) */}
        <div
          style={{
            background:
              "linear-gradient(180deg, #F2F1F3 0%, #F2F1F3 46%, #FFFFFF 46%, #FFFFFF 100%)",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="w-full max-w-[1440px] mx-auto px-0 sm:px-[clamp(1.5rem,5vw,4.75rem)]">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:max-h-[700px] overflow-hidden bg-[#EAEAEF]">
              <Link
                href={activeSlide.href}
                aria-label={`Inspect ${activeSlide.client}`}
                className="block absolute inset-0"
              >
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 1440px) 92vw, 1300px"
                      className={`object-cover ${
                        activeSlide.fit === "top"
                          ? "object-top"
                          : "object-center"
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>
            </div>
          </div>

          {/* Quiet Minimal Showreel Caption & Switcher Bar Below Frame */}
          <div className="clay-container pt-4 sm:pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-baseline gap-3 min-w-0">
              <span className="font-mono text-[12px] text-[#8C8E94] tabular-nums shrink-0">
                0{slideIdx + 1} / 0{SHOWREEL_SLIDES.length}
              </span>
              <Link
                href={activeSlide.href}
                className="text-[14.5px] sm:text-[15.5px] font-medium text-[#111111] hover:opacity-65 transition-opacity truncate"
              >
                {activeSlide.client}
                <span className="hidden md:inline font-normal text-[#6B7280]">
                  {" "}
                  — {activeSlide.caption}
                </span>
              </Link>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0">
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="clay-arrow-link !text-[14.5px]"
              >
                <span>Coba demo interaktif</span>
                <ArrowRight className="w-4 h-4 text-[#6B7280]" />
              </button>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Proyek sebelumnya"
                  className="w-8 h-8 rounded-full border border-[#E5E7EB] hover:border-[#111111] text-[#111111] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Proyek berikutnya"
                  className="w-8 h-8 rounded-full border border-[#E5E7EB] hover:border-[#111111] text-[#111111] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Clay Signature Capabilities Split Band (Pure White: Left Statement + Right Bold Expandable Stack) */}
        <div className="bg-white py-20 lg:py-28">
          <div className="clay-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-6">
              <p className="text-[22px] sm:text-[26px] lg:text-[28px] font-normal leading-[1.38] tracking-[-0.02em] text-[#111111] max-w-[490px]">
                Kami membangun produk digital, website cepat, sistem ERP/POS,
                dan AI terapan untuk bisnis yang ingin tumbuh tanpa batas.
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
                      <span className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#111111] group-hover:opacity-65 transition-opacity">
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

        {/* 4. Clay-Style Monochrome Muted Tech Stack Strip */}
        <div className="bg-white pb-16 lg:pb-24">
          <div className="clay-container flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            {TECH_ECOSYSTEM.map((tech) => (
              <span
                key={tech}
                className="text-[16px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[#9CA3AF] select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </>
  );
}
