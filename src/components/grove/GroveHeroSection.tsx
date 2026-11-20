"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  HERO_SLIDES,
  buildHeroWaHref,
  useHeroSlideCarousel,
} from "./hero-slides";
import {
  HeroShowcaseFrame,
  HeroSyncedDescription,
  HeroSyncedHeadline,
  HeroSyncedIntro,
} from "./HeroCarouselParts";

export function GroveHeroSection() {
  const { activeIdx, setActiveIdx, setIsPaused } = useHeroSlideCarousel();
  const waHref = buildHeroWaHref(HERO_SLIDES[activeIdx]);

  return (
    <section
      id="beranda"
      data-section="beranda"
      className="relative scroll-mt-16 border-b border-[#EAEAEA] bg-[#FAFAFA]"
    >
      <div className="relative max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white overflow-hidden">
        {/* Vercel Crosshair Corner Markers */}
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-3 left-3 font-mono text-xs text-neutral-300"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-3 right-3 font-mono text-xs text-neutral-300"
        >
          +
        </span>

        {/* Subtle Dynamic Ambient Glow Tuned to Active Pillar */}
        <div
          aria-hidden="true"
          className={`pointer-events-none select-none absolute inset-0 transition-all duration-700 ${
            activeIdx === 1
              ? "bg-[radial-gradient(ellipse_55%_70%_at_75%_45%,rgba(13,148,136,0.055),transparent_72%)]"
              : activeIdx === 2
              ? "bg-[radial-gradient(ellipse_55%_70%_at_75%_45%,rgba(0,112,243,0.055),transparent_72%)]"
              : "bg-[radial-gradient(ellipse_55%_70%_at_75%_45%,rgba(0,112,243,0.05),transparent_72%)]"
          }`}
        />

        <div className="relative z-10 px-8 pt-14 pb-16 xl:pt-16 xl:pb-20">
          <div
            className="grid grid-cols-12 gap-12 items-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Kolom Kiri: Tipografi Vercel Geist */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[12px] font-medium text-[#0A0A0A]">
                <span className="w-2 h-2 rounded-full bg-[#0070F3]" />
                <span>Abinest Engineering Studio</span>
                <span className="text-neutral-300" aria-hidden="true">
                  |
                </span>
                <span className="font-mono text-[11px] text-[#666666]">
                  100% Hak Milik Kode
                </span>
              </div>

              <HeroSyncedHeadline className="text-[40px] xl:text-[48px] font-semibold tracking-[-0.04em] text-[#0A0A0A] leading-[1.08]" />

              <HeroSyncedIntro
                activeIdx={activeIdx}
                onSelect={setActiveIdx}
                className="text-[16.5px] text-[#666666] leading-relaxed max-w-lg"
              />

              <HeroSyncedDescription
                activeIdx={activeIdx}
                onSelect={setActiveIdx}
                variant="desktop"
              />

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "hero_desktop",
                      label: HERO_SLIDES[activeIdx]?.id,
                    })
                  }
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#0A0A0A] hover:bg-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all"
                >
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/demo"
                  className="inline-flex items-center px-5 py-3 rounded-full text-sm font-medium text-[#0A0A0A] hover:bg-neutral-50 bg-white border border-[#EAEAEA] transition-colors"
                >
                  Lihat Demo Interaktif
                </Link>
              </div>
            </motion.div>

            {/* Kolom Kanan: Visual Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="col-span-6 relative"
            >
              <HeroShowcaseFrame
                activeIdx={activeIdx}
                sizes="(max-width: 1200px) 50vw, 560px"
                className="relative z-10 aspect-[4/3] w-full"
              />
            </motion.div>
          </div>
        </div>

        {/* Connected 3-Cell Geist Matrix Strip at Bottom of Hero */}
        <div className="relative z-10 border-t border-[#EAEAEA] grid grid-cols-3 divide-x divide-[#EAEAEA] bg-[#FAFAFA]/70">
          <div className="px-8 py-5 flex items-baseline justify-between gap-4">
            <div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
                14 Hari
              </div>
              <div className="text-xs text-[#666666] mt-0.5">
                Rilis web &amp; sistem awal
              </div>
            </div>
            <span className="font-mono text-[11px] text-neutral-400">01</span>
          </div>
          <div className="px-8 py-5 flex items-baseline justify-between gap-4">
            <div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
                100%
              </div>
              <div className="text-xs text-[#666666] mt-0.5">
                Hak milik kode program
              </div>
            </div>
            <span className="font-mono text-[11px] text-neutral-400">02</span>
          </div>
          <div className="px-8 py-5 flex items-baseline justify-between gap-4">
            <div>
              <div className="text-2xl font-semibold tracking-[-0.03em] text-[#0A0A0A]">
                Rp0
              </div>
              <div className="text-xs text-[#666666] mt-0.5">
                Biaya lisensi per pengguna
              </div>
            </div>
            <span className="font-mono text-[11px] text-neutral-400">03</span>
          </div>
        </div>
      </div>
    </section>
  );
}
