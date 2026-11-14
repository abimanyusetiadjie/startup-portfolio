"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HERO_SLIDES,
  buildHeroWaHref,
  useHeroSlideCarousel,
} from "../hero-slides";
import {
  HeroShowcaseFrame,
  HeroSyncedDescription,
  HeroSyncedHeadline,
} from "../HeroCarouselParts";

export function MobileHeroSection() {
  const { activeIdx: slideIdx, setActiveIdx: setSlideIdx } =
    useHeroSlideCarousel();
  const waHref = buildHeroWaHref(HERO_SLIDES[slideIdx]);

  return (
    <section
      id="m-beranda"
      data-section="beranda"
      className="relative overflow-hidden bg-white pt-6 pb-10 px-5 border-b border-slate-200/70"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_70%,rgba(37,99,235,0.05),rgba(13,148,136,0.025)_48%,transparent_78%)]"
      />
      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <p className="text-[12px] font-semibold text-blue-600 tracking-wide">
            Studio Rekayasa Web, ERP &amp; Automasi AI
          </p>

          <HeroSyncedHeadline
            activeIdx={slideIdx}
            conjunction="&"
            className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.16]"
          />

          <HeroSyncedDescription
            activeIdx={slideIdx}
            onSelect={setSlideIdx}
            variant="mobile"
          />
        </div>

        {/* Clean Visual Frame with Subtle Architectural Dot Backdrop */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none select-none absolute -inset-3 bg-[radial-gradient(rgba(100,116,139,0.2)_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_30%,transparent_80%)]"
          />
          <HeroShowcaseFrame
            activeIdx={slideIdx}
            sizes="(max-width: 768px) 92vw, 440px"
            className="relative z-10 aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)] border border-slate-200/60"
          />
        </div>

        {/* CTA Actions */}
        <div className="space-y-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20 transition-all"
          >
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4 text-[13px] font-semibold text-slate-600">
            <Link href="/demo" className="hover:text-blue-600 transition-colors py-1">
              Lihat Demo Interaktif
            </Link>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <Link href="/audit-gratis" className="hover:text-blue-600 transition-colors py-1">
              Kalkulator Biaya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
