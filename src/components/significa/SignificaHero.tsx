"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";

const HERO_TEASERS = [
  {
    id: "nusantara",
    title: "Nusantara Capital. Corporate web in 0.48s.",
    source: "From our work",
    thumb: "/images/significa/work-nusantara-editorial.jpg",
    alt: "Nusantara Capital corporate website preview",
    href: "/karya/nusantara-capital",
  },
  {
    id: "sinar",
    title: "Sinar Distribusi. Multi-warehouse ERP & POS.",
    source: "From our work",
    thumb: "/images/significa/work-sinar-erp-editorial.jpg",
    alt: "Sinar Distribusi ERP dashboard preview",
    href: "/karya/sinar-distribusi",
  },
  {
    id: "ai-wa",
    title: "Meta Cloud API. WhatsApp AI & 99.7% OCR.",
    source: "From our services",
    thumb: "/images/significa/hero-reel-ai.jpg",
    alt: "WhatsApp AI and Document OCR preview",
    href: "/jasa-automasi-whatsapp",
  },
  {
    id: "siakad",
    title: "SIAKAD CBT. 1,240 students, 0% downtime.",
    source: "From our work",
    thumb: "/images/significa/work-siakad-cbt-editorial.jpg",
    alt: "SIAKAD CBT academic portal preview",
    href: "/karya/siakad-ujian-cbt",
  },
];

const SHOWREEL_SLIDES = [
  {
    id: "web",
    index: "01",
    label: "Corporate Web · 0.48s",
    image: "/images/significa/hero-reel-web.jpg",
    alt: "Nusantara Capital high-speed corporate web showcase on MacBook Pro and iPhone",
  },
  {
    id: "erp",
    index: "02",
    label: "Custom ERP · 18,420 SKUs",
    image: "/images/significa/hero-reel-erp.jpg",
    alt: "Sinar Distribusi multi-warehouse ERP and POS dashboard on iPad Pro",
  },
  {
    id: "ai",
    index: "03",
    label: "WhatsApp AI · 99.7% OCR",
    image: "/images/significa/hero-reel-ai.jpg",
    alt: "Official Meta WhatsApp AI and Document OCR verification on iPhone",
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
        className="sig-paper-hero pt-[100px] sm:pt-[118px] pb-12 sm:pb-16"
      >
        <div className="sig-container relative z-10">
          {/* 1. Significa 3-Line English Display H1 + Asymmetric Swiss Right Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-10 pb-6 sm:pb-10"
          >
            <h1 className="font-bold text-[#171717] tracking-[-0.025em] leading-[1.08] text-[clamp(2rem,4.4vw+0.9rem,4.5rem)]">
              Think. Design.
              <br />
              Develop. Automate.
              <br />
              <span className="text-[#6F6F71]">Scale.</span>
            </h1>

            {/* Right Asymmetric Studio Positioning Block (Breaks Empty White Void Elegantly) */}
            <div className="lg:max-w-[330px] lg:pb-2 pt-3 lg:pt-3.5 border-t border-[#E8E8E8] space-y-1.5">
              <div className="inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-wider text-[#6F6F71]">
                <span className="w-2 h-2 rounded-full bg-[#3C846E] shrink-0" />
                <span>Jakarta &amp; Surabaya · &lt;15m reply</span>
              </div>
              <p className="text-[14.5px] sm:text-[15.5px] leading-[1.45] text-[#6F6F71]">
                Digital product, custom ERP &amp; applied AI engineering studio
                for growing businesses.
              </p>
            </div>
          </motion.div>

          {/* 2. Teaser Strip: Single-Row Swipe on Mobile (Saves ~300px Above Fold) | 4-Col Grid on Desktop */}
          <div
            onMouseLeave={() => setHoveredTeaser(null)}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar gap-3 sm:gap-6 -mx-5 px-5 sm:mx-0 sm:px-0 pb-6 sm:pb-9"
          >
            {HERO_TEASERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredTeaser(item.id)}
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
                  <p className="text-[13.5px] sm:text-[16px] font-medium text-[#171717] leading-[1.3] line-clamp-2">
                    {item.title}
                  </p>
                  <span className="block text-[11.5px] sm:text-[13px] text-[#6F6F71] mt-0.5 sm:mt-1">
                    {item.source}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* 3. Full-Bleed Studio Editorial Showreel (Zero Fake CSS Frames, Zero Generic Badges) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, delay: 0.06, ease: "easeOut" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] lg:max-h-[660px] rounded-[20px] overflow-hidden bg-[#DAD6CE] border border-[#E8E8E8]"
          >
            {/* Crossfading Full-Bleed Studio Artworks */}
            <AnimatePresence mode="sync" initial={false}>
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
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

            {/* Subtle Edge Scrim Only for Overlay Control Legibility */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 lg:h-0 bg-gradient-to-t from-[#171717]/40 via-[#171717]/10 to-transparent z-10" />

            {/* Overlay Controls Bar: Bottom on Mobile (4:3), Clean Open Upper Wall on Desktop (16:9) so immediately visible at y=0 */}
            <div className="absolute inset-x-3.5 bottom-3.5 sm:inset-x-6 sm:bottom-5 lg:top-6 lg:bottom-auto z-20 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="sig-btn-primary !h-[40px] sm:!h-[44px] !px-4 sm:!px-5 !text-[13.5px] sm:!text-[15px] shadow-[0_12px_32px_rgba(23,23,23,0.34)] hover:ring-[#FFD124]/50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Try live demo</span>
              </button>

              {/* Frosted Swiss Showreel Indicator + Prev/Next */}
              <div className="flex items-center gap-1.5 sm:gap-2 rounded-[14px] bg-[#F7F7F7]/90 backdrop-blur-md border border-[#E8E8E8] p-1 sm:p-1.5 shadow-[0_10px_28px_rgba(23,23,23,0.16)]">
                <span className="hidden md:inline-block pl-2.5 pr-1 font-mono text-[11px] font-medium text-[#171717] whitespace-nowrap">
                  {activeSlide.index} · {activeSlide.label}
                </span>

                {/* Progress Indicator Bars */}
                <div className="flex items-center gap-1 px-1.5">
                  {SHOWREEL_SLIDES.map((s, idx) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSlideIdx(idx)}
                      aria-label={`Tampilkan slide ${s.label}`}
                      className={`h-[4px] rounded-full transition-all duration-300 cursor-pointer ${
                        idx === slideIdx
                          ? "w-6 bg-[#171717]"
                          : "w-2 bg-[#171717]/25 hover:bg-[#171717]/50"
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Slide sebelumnya"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Slide berikutnya"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-[10px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
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
