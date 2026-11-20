"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

export function MobileHeroSection() {
  const { activeIdx: slideIdx, setActiveIdx: setSlideIdx } =
    useHeroSlideCarousel();
  const waHref = buildHeroWaHref(HERO_SLIDES[slideIdx]);

  return (
    <section
      id="m-beranda"
      data-section="beranda"
      className="relative scroll-mt-16 overflow-hidden bg-white pt-6 pb-10 px-5 border-b border-[#EAEAEA]"
    >
      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[11.5px] font-medium text-[#0A0A0A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
            <span>Abinest Engineering Studio</span>
          </div>

          <HeroSyncedHeadline className="text-[26px] sm:text-[31px] font-semibold tracking-[-0.035em] text-[#0A0A0A] leading-[1.14]" />

          <HeroSyncedIntro
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            className="text-[14.5px] text-[#666666] leading-relaxed"
          />

          <HeroSyncedDescription
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            variant="mobile"
          />
        </div>

        {/* Vercel Geist Translucent Stage */}
        <div className="relative">
          <HeroShowcaseFrame
            activeIdx={slideIdx}
            sizes="(max-width: 768px) 92vw, 440px"
            className="relative z-10 aspect-[16/10] w-full"
          />
        </div>

        {/* CTA Actions */}
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
            className="w-full h-12 rounded-full bg-[#0A0A0A] hover:bg-neutral-800 active:scale-[0.99] text-white text-[14px] font-medium flex items-center justify-center gap-2 shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all"
          >
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4 text-[13px] font-medium text-[#666666]">
            <Link href="/demo" className="hover:text-[#0A0A0A] transition-colors py-1">
              Lihat Demo Interaktif
            </Link>
            <span className="text-neutral-300" aria-hidden="true">
              ·
            </span>
            <Link href="/audit-gratis" className="hover:text-[#0A0A0A] transition-colors py-1">
              Audit Gratis
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
