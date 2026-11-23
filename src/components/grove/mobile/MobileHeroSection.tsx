"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  HERO_SLIDES,
  buildHeroWaHref,
  useHeroSlideCarousel,
} from "../hero-slides";
import {
  HeroShowcaseFrame,
  HeroSyncedHeadline,
  HeroSyncedIntro,
} from "../HeroCarouselParts";
import { StripeMeshBackdrop } from "../StripeMeshBackdrop";

export function MobileHeroSection() {
  const { activeIdx: slideIdx, setActiveIdx: setSlideIdx } =
    useHeroSlideCarousel();
  const activeSlide = HERO_SLIDES[slideIdx] ?? HERO_SLIDES[0];
  const waHref = buildHeroWaHref(activeSlide);

  return (
    <section
      id="m-beranda"
      data-section="beranda"
      className="relative scroll-mt-20 overflow-hidden bg-white pt-4 pb-10 px-4 sm:px-5"
    >
      <StripeMeshBackdrop activeIdx={slideIdx} />

      <div className="relative z-10 max-w-md mx-auto space-y-4">
        {/* Compact Top Editorial Copy so Image Showcase sits Above the Fold */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[11px] font-semibold text-[#0F172A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Abinest Software Studio · Beli Putus 100%</span>
          </div>

          <HeroSyncedHeadline className="text-[26px] sm:text-[30px] font-bold tracking-[-0.035em] text-[#0F172A] leading-[1.12]" />

          <HeroSyncedIntro
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            className="text-[13.5px] text-[#475569] leading-relaxed"
          />
        </div>

        {/* Visual Reference Showcase: Real Photography + Product UI Screen + Image Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <HeroShowcaseFrame
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            className="w-full"
          />
        </motion.div>

        {/* Restrained Solid Executive CTA Actions */}
        <div className="space-y-2.5 pt-1">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "hero_mobile",
                label: activeSlide.id,
              })
            }
            className="w-full h-12 rounded-full bg-[#0F172A] hover:bg-slate-800 active:scale-[0.99] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition-all"
          >
            <span>Konsultasi {activeSlide.label} via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/demo"
              className="h-10 rounded-full bg-[#F8FAFC] hover:bg-slate-100 ring-1 ring-slate-200 text-[#0F172A] text-[12.5px] font-semibold flex items-center justify-center transition-colors"
            >
              Lihat Demo Interaktif
            </Link>
            <Link
              href="/audit-gratis"
              className="h-10 rounded-full bg-[#F8FAFC] hover:bg-slate-100 ring-1 ring-slate-200 text-[#0F172A] text-[12.5px] font-semibold flex items-center justify-center transition-colors"
            >
              Kalkulator Biaya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
