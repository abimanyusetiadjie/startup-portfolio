"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";

const HERO_TEASERS = [
  {
    id: "amen",
    title: "Toko Amen Snack. 1,446 SKUs & AI WA Bot.",
    source: "Live production",
    thumb: "/images/portfolio/amen-system.jpg",
    alt: "Toko Amen Snack live catalog and AI WhatsApp assistant",
    href: "/karya/toko-amen-snack",
  },
  {
    id: "scaffolding",
    title: "Central Scaffolding. B2B set calculator & SEO.",
    source: "Built with Astro",
    thumb: "/images/portfolio/scaffolding-system.jpg",
    alt: "Central Scaffolding interactive B2B calculator system",
    href: "/karya/central-scaffolding",
  },
  {
    id: "alfuad",
    title: "YPI Al-Fuad. 5 school units & PPDB portal.",
    source: "Built with Astro 5",
    thumb: "/images/portfolio/alfuad-system.jpg",
    alt: "YPI Al-Fuad 5-unit PPDB school portal system",
    href: "/karya/ypi-al-fuad",
  },
  {
    id: "looku",
    title: "Look.u AI. Hybrid RAG 594 SKUs & Vision.",
    source: "Applied AI · Next.js",
    thumb: "/images/portfolio/looku-system.jpg",
    alt: "Look.u AI Hybrid RAG outfit studio",
    href: "/karya/looku-ai",
  },
];

const SHOWREEL_SLIDES = [
  {
    id: "amen",
    index: "01",
    label: "Toko Amen Snack · 1,446 SKUs + AI",
    image: "/images/portfolio/amen-system.jpg",
    alt: "Sistem katalog live 1.446 SKU dan asisten WhatsApp AI Toko Amen Snack",
    href: "/karya/toko-amen-snack",
  },
  {
    id: "scaffolding",
    index: "02",
    label: "Central Scaffolding · B2B Calculator",
    image: "/images/portfolio/scaffolding-system.jpg",
    alt: "Kalkulator material set dan spesifikasi SNI Central Scaffolding",
    href: "/karya/central-scaffolding",
  },
  {
    id: "alfuad",
    index: "03",
    label: "YPI Al-Fuad · 5-Unit PPDB System",
    image: "/images/portfolio/alfuad-system.jpg",
    alt: "Sistem portal PPDB 2026 5 unit pendidikan YPI Al-Fuad",
    href: "/karya/ypi-al-fuad",
  },
  {
    id: "looku",
    index: "04",
    label: "Look.u AI · Hybrid RAG 594 SKUs",
    image: "/images/portfolio/looku-system.jpg",
    alt: "Studio AI styling fashion Hybrid RAG 594 SKU Look.u AI",
    href: "/karya/looku-ai",
  },
];

export function SignificaHero() {
  const [hoveredTeaser, setHoveredTeaser] = useState<string | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || showreelOpen) return;
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % SHOWREEL_SLIDES.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, showreelOpen]);

  const activeSlide = SHOWREEL_SLIDES[slideIdx] ?? SHOWREEL_SLIDES[0];

  const prevSlide = () =>
    setSlideIdx((i) => (i === 0 ? SHOWREEL_SLIDES.length - 1 : i - 1));
  const nextSlide = () =>
    setSlideIdx((i) => (i === SHOWREEL_SLIDES.length - 1 ? 0 : i + 1));

  return (
    <>
      <section
        id="beranda"
        className="sig-paper-hero pt-[100px] sm:pt-[118px] pb-10 sm:pb-14"
      >
        <div className="sig-container relative z-10">
          {/* 1. Significa 3-Line English Display H1 + Minimalist Right Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 lg:gap-10 pb-6 sm:pb-9"
          >
            <h1 className="font-bold text-[#171717] tracking-[-0.025em] leading-[1.08] text-[clamp(2rem,4.4vw+0.9rem,4.5rem)]">
              Think. Design.
              <br />
              Develop. Automate.
              <br />
              <span className="text-[#6F6F71]">Scale.</span>
            </h1>

            <div className="lg:max-w-[300px] lg:pb-2 pt-3 border-t border-[#E8E8E8] space-y-1">
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-[#6F6F71]">
                <span className="w-2 h-2 rounded-full bg-[#3C846E] shrink-0" />
                <span>7+ Shipped Systems · Jakarta &amp; Surabaya</span>
              </div>
              <p className="text-[14.5px] leading-[1.42] text-[#6F6F71]">
                Web, ERP/POS &amp; applied AI engineered for real operations.
              </p>
            </div>
          </motion.div>

          {/* 2. Real-Project Teaser Strip (1-Row Swipe on Mobile | 4-Col Grid on Desktop) */}
          <div
            onMouseLeave={() => setHoveredTeaser(null)}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar gap-3 sm:gap-6 -mx-5 px-5 sm:mx-0 sm:px-0 pb-5 sm:pb-8"
          >
            {HERO_TEASERS.map((item, idx) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => {
                  setHoveredTeaser(item.id);
                  setSlideIdx(idx);
                }}
                onFocus={() => setHoveredTeaser(item.id)}
                className="relative group flex items-center gap-3 sm:gap-3.5 w-[274px] sm:w-auto shrink-0 snap-start rounded-[18px] sm:rounded-[24px] p-2 sm:p-2.5 sm:-m-2.5 bg-white/85 sm:bg-transparent border border-[#E8E8E8] sm:border-transparent"
              >
                {hoveredTeaser === item.id && (
                  <motion.span
                    layoutId="sig-hero-teaser-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="hidden sm:block absolute inset-0 rounded-[24px] bg-[#EDEDED] -z-0"
                  />
                )}
                <div className="relative z-10 w-[76px] h-[58px] sm:w-[96px] sm:h-[72px] rounded-[12px] sm:rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8] shrink-0">
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 76px, 96px"
                    className="object-cover object-center group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="relative z-10 min-w-0 flex-1">
                  <p className="text-[13.5px] sm:text-[15.5px] font-medium text-[#171717] leading-[1.3] line-clamp-2">
                    {item.title}
                  </p>
                  <span className="block text-[11.5px] sm:text-[12.5px] text-[#6F6F71] mt-0.5">
                    {item.source}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 3. Full-Bleed Studio Working-System Showreel (Edge-to-Edge Photorealistic System Artworks) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06, ease: "easeOut" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] lg:max-h-[670px] rounded-[20px] overflow-hidden bg-[#DAD6CE] border border-[#E8E8E8]"
          >
            {/* Full-Bleed Crossfading Studio Working-System Artworks */}
            <Link
              href={activeSlide.href}
              aria-label={`Buka detail sistem ${activeSlide.label}`}
              className="block absolute inset-0"
            >
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={activeSlide.id}
                  initial={{ opacity: 0, scale: 1.012 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeSlide.image}
                    alt={activeSlide.alt}
                    fill
                    priority
                    sizes="(max-width: 768px) 94vw, (max-width: 1440px) 92vw, 1344px"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </Link>

            {/* Subtle Bottom Edge Scrim on Mobile Only */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 lg:h-0 bg-gradient-to-t from-[#171717]/40 via-[#171717]/10 to-transparent z-10" />

            {/* Clean Overlay Bar: Open Upper Studio Wall on Desktop (Visible at y=0), Bottom Bar on Mobile */}
            <div className="absolute inset-x-3.5 bottom-3.5 sm:inset-x-6 sm:bottom-5 lg:top-6 lg:bottom-auto z-20 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="sig-btn-primary !h-[38px] sm:!h-[42px] !px-4 sm:!px-5 !text-[13px] sm:!text-[14.5px] shadow-[0_10px_28px_rgba(23,23,23,0.28)] hover:ring-[#FFD124]/50"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try live demo</span>
                </button>

                <Link
                  href={activeSlide.href}
                  className="hidden sm:inline-flex items-center gap-1 h-[42px] px-4 rounded-[14px] bg-[#F7F7F7]/90 backdrop-blur-md border border-[#E8E8E8] hover:border-[#FFD124] text-[13.5px] font-medium text-[#171717] transition-colors"
                >
                  <span>Inspect system</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Frosted Swiss Slide Controls */}
              <div className="flex items-center gap-1.5 rounded-[14px] bg-[#F7F7F7]/95 backdrop-blur-md border border-[#E8E8E8] p-1 shadow-[0_8px_24px_rgba(23,23,23,0.14)]">
                <span className="hidden md:inline-block pl-2.5 pr-1 font-mono text-[11px] font-medium text-[#171717] whitespace-nowrap">
                  {activeSlide.index} · {activeSlide.label}
                </span>

                <div className="flex items-center gap-1 px-1.5">
                  {SHOWREEL_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSlideIdx(idx)}
                      aria-label={`Lihat proyek ${s.label}`}
                      className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                        idx === slideIdx
                          ? "w-5 bg-[#171717]"
                          : "w-1.5 bg-[#171717]/25 hover:bg-[#171717]/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Proyek sebelumnya"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-[9px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Proyek berikutnya"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-[9px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </>
  );
}
