"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  HERO_SLIDES,
  buildHeroWaHref,
  useHeroSlideCarousel,
} from "../hero-slides";
import {
  HeroShowcaseFrame,
  HeroSyncedDescription,
  HeroSyncedHeadline,
  HeroSyncedIntro,
} from "../HeroCarouselParts";
import { StripeMeshBackdrop } from "../StripeMeshBackdrop";

export function MobileHeroSection() {
  const { activeIdx: slideIdx, setActiveIdx: setSlideIdx } =
    useHeroSlideCarousel();
  const waHref = buildHeroWaHref(HERO_SLIDES[slideIdx]);

  return (
    <section
      id="m-beranda"
      data-section="beranda"
      className="relative scroll-mt-20 overflow-hidden bg-white pt-6 pb-12 px-5"
    >
      <StripeMeshBackdrop activeIdx={slideIdx} />

      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 backdrop-blur-md shadow-sm ring-1 ring-[#635BFF]/15 text-[11.5px] font-semibold text-[#0A2540]">
            <Sparkles className="w-3.5 h-3.5 text-[#635BFF]" />
            <span>Abinest Software Studio</span>
          </div>

          <HeroSyncedHeadline className="text-[28px] sm:text-[32px] font-bold tracking-[-0.035em] text-[#0A2540] leading-[1.12]" />

          <HeroSyncedIntro
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            className="text-[14.5px] text-[#425466] leading-relaxed"
          />

          <HeroSyncedDescription
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            variant="mobile"
          />
        </div>

        {/* Floating Animated Glassmorphic Stage */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <HeroShowcaseFrame activeIdx={slideIdx} className="w-full" />
        </motion.div>

        {/* Vibrant Gradient CTA Actions */}
        <div className="space-y-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                source: "hero_mobile",
                label: HERO_SLIDES[slideIdx]?.id,
              })
            }
            className="w-full h-12 rounded-full bg-gradient-to-r from-[#635BFF] via-[#4F46E5] to-[#0EA5E9] hover:brightness-110 active:scale-[0.98] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-[0_10px_24px_rgba(99,91,255,0.3)] transition-all"
          >
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4 text-[13px] font-semibold text-[#425466]">
            <Link href="/demo" className="hover:text-[#635BFF] transition-colors py-1">
              Lihat Demo Interaktif
            </Link>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <Link href="/audit-gratis" className="hover:text-[#635BFF] transition-colors py-1">
              Audit Gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
