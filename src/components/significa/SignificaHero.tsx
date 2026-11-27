"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";

const SHOWREEL_SLIDES = [
  {
    id: "amen",
    index: "01",
    client: "Toko Amen Snack",
    caption: "1,446-SKU live catalog & WhatsApp AI assistant",
    image: "/images/portfolio/amen-system.jpg",
    alt: "Toko Amen Snack live catalog 1,446 SKUs and WhatsApp AI assistant",
    href: "/karya/toko-amen-snack",
    fit: "center" as const,
  },
  {
    id: "propsmart",
    index: "02",
    client: "PropSmart SaaS",
    caption: "Property management, 9.45% Rental Yield BI & ML pricing",
    image: "/images/portfolio/propsmart-dashboard.png",
    alt: "PropSmart Executive Financial and Occupancy Dashboard showing 32 rooms and 9.45% Net Rental Yield",
    href: "/karya/propsmart-saas",
    fit: "top" as const,
  },
  {
    id: "heavytrack",
    index: "03",
    client: "HeavyTrack WMS",
    caption: "Offline-first (<5ms) heavy equipment spare parts warehouse",
    image: "/images/portfolio/heavytrack-dashboard.png",
    alt: "HeavyTrack WMS operational dashboard for heavy equipment spare parts",
    href: "/karya/heavytrack-wms",
    fit: "top" as const,
  },
  {
    id: "lacak-korupsi",
    index: "04",
    client: "Lacak Korupsi",
    caption: "Investigative news portal & 38-province GIS analytics",
    image: "/images/portfolio/lacak-korupsi-peta.png",
    alt: "Lacak Korupsi news portal and provincial data intelligence chart",
    href: "/karya/lacak-korupsi",
    fit: "top" as const,
  },
  {
    id: "looku",
    index: "05",
    client: "Look.u AI",
    caption: "Zero-hallucination Hybrid RAG fashion stylist (594 SKUs)",
    image: "/images/portfolio/looku-system.jpg",
    alt: "Look.u AI Hybrid RAG fashion styling interface",
    href: "/karya/looku-ai",
    fit: "center" as const,
  },
];

export function SignificaHero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);

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
      <section
        id="beranda"
        className="sig-paper-hero pt-[108px] sm:pt-[128px] pb-10 sm:pb-16"
      >
        <div className="sig-container relative z-10">
          {/* 1. Pure Minimalist Architectural Hero Header (Zero status dots, zero badge clutter) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 lg:gap-12 pb-8 sm:pb-12"
          >
            <h1 className="font-bold text-[#171717] tracking-[-0.03em] leading-[1.06] text-[clamp(2.25rem,4.6vw+0.85rem,4.75rem)]">
              Think. Design.
              <br />
              Develop. Automate.
              <br />
              <span className="text-[#6F6F71]">Scale.</span>
            </h1>

            <p className="lg:max-w-[330px] lg:pb-2 text-[15.5px] sm:text-[16.5px] leading-[1.5] text-[#6F6F71]">
              Independent software engineering studio building fast websites,
              custom ERP/POS, and applied AI.
            </p>
          </motion.div>

          {/* 2. Unobstructed Full-Bleed Working-System Gallery Frame */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] lg:max-h-[680px] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#EAEAE8] border border-[#E5E5E5]">
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
                      sizes="(max-width: 768px) 94vw, (max-width: 1440px) 92vw, 1344px"
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

            {/* 3. Quiet Editorial Control Bar Below Frame (Leaves Artwork 100% Unobstructed) */}
            <div className="pt-4 sm:pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3.5">
              <div className="flex items-baseline gap-3 min-w-0">
                <span className="font-mono text-[12px] text-[#6F6F71] tabular-nums shrink-0">
                  {activeSlide.index} / 0{SHOWREEL_SLIDES.length}
                </span>
                <Link
                  href={activeSlide.href}
                  className="group inline-flex items-baseline gap-2 min-w-0"
                >
                  <span className="text-[15px] sm:text-[16px] font-medium text-[#171717] group-hover:text-[#6F6F71] transition-colors shrink-0">
                    {activeSlide.client}
                  </span>
                  <span className="hidden md:inline text-[14.5px] text-[#6F6F71] truncate">
                    — {activeSlide.caption}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#6F6F71] group-hover:text-[#171717] transition-colors shrink-0 self-center" />
                </Link>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="sig-link text-[14px] font-medium text-[#171717] cursor-pointer"
                >
                  Try interactive demo
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous system"
                    className="w-8 h-8 rounded-full bg-transparent border border-[#E0E0E0] hover:border-[#171717] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next system"
                    className="w-8 h-8 rounded-full bg-transparent border border-[#E0E0E0] hover:border-[#171717] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
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
