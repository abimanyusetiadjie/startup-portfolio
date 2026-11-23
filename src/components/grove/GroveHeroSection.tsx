"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
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
import { StripeMeshBackdrop } from "./StripeMeshBackdrop";

export function GroveHeroSection() {
  const { activeIdx, setActiveIdx, setIsPaused } = useHeroSlideCarousel();
  const waHref = buildHeroWaHref(HERO_SLIDES[activeIdx]);

  const metrics = [
    {
      value: "14 Hari",
      label: "Rilis web & sistem awal",
      dotClass: "bg-[#0284C7]",
    },
    {
      value: "100%",
      label: "Hak milik kode program",
      dotClass: "bg-[#0EA5E9]",
    },
    {
      value: "Rp0",
      label: "Biaya lisensi per pengguna",
      dotClass: "bg-[#00C9A7]",
    },
  ];

  return (
    <section
      id="beranda"
      data-section="beranda"
      className="relative scroll-mt-20 pt-10 pb-16 xl:pt-14 xl:pb-20 bg-white overflow-hidden"
    >
      {/* Abinest Ocean-Teal Animated Diagonal Liquid Mesh Gradient */}
      <StripeMeshBackdrop activeIdx={activeIdx} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <div
          className="grid grid-cols-12 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left 6 Cols: Kinetic Typography & Pill Controls */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md shadow-[0_4px_14px_rgba(2,132,199,0.12)] ring-1 ring-sky-500/20 text-[12px] font-semibold text-[#081629]">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Abinest Software Studio</span>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="text-[#0D9488]">Beli Putus 100%</span>
            </div>

            <HeroSyncedHeadline className="text-[42px] xl:text-[52px] font-bold tracking-[-0.04em] text-[#081629] leading-[1.06]" />

            <HeroSyncedIntro
              activeIdx={activeIdx}
              onSelect={setActiveIdx}
              className="text-[16.5px] text-[#475569] leading-relaxed max-w-lg"
            />

            <HeroSyncedDescription
              activeIdx={activeIdx}
              onSelect={setActiveIdx}
              variant="desktop"
            />

            <div className="flex items-center gap-3.5 pt-2">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "hero_desktop",
                    label: HERO_SLIDES[activeIdx]?.id,
                  })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00C9A7] hover:brightness-105 shadow-[0_12px_28px_rgba(2,132,199,0.3)] transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold text-[#081629] bg-white/95 hover:bg-white shadow-[0_6px_20px_rgba(8,22,41,0.06)] ring-1 ring-slate-900/[0.08] transition-all"
              >
                Lihat Demo Interaktif
              </Link>
            </div>

            {/* Fluid Open Metrics Strip (Zero Boxy Borders) */}
            <div className="pt-6 flex items-center gap-10">
              {metrics.map((m) => (
                <div key={m.label} className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${m.dotClass}`} />
                    <span className="text-2xl font-bold tracking-tight text-[#081629]">
                      {m.value}
                    </span>
                  </div>
                  <div className="text-xs text-[#475569] pl-4">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 6 Cols: Floating Glassmorphic Interactive Stage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.1 }}
            className="col-span-6 relative"
          >
            <HeroShowcaseFrame activeIdx={activeIdx} className="w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
