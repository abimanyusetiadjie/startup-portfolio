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
    },
    {
      value: "100%",
      label: "Hak milik kode program",
    },
    {
      value: "Rp0",
      label: "Biaya lisensi per pengguna",
    },
  ];

  return (
    <section
      id="beranda"
      data-section="beranda"
      className="relative scroll-mt-20 pt-10 pb-16 xl:pt-14 xl:pb-20 bg-white overflow-hidden"
    >
      {/* Clean Architectural Daylight Wash */}
      <StripeMeshBackdrop activeIdx={activeIdx} />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <div
          className="grid grid-cols-12 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left 6 Cols: Editorial Typography & Controls */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[12px] font-semibold text-[#0F172A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Abinest Software Studio</span>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="text-[#475569]">Beli Putus 100%</span>
            </div>

            <HeroSyncedHeadline className="text-[42px] xl:text-[52px] font-bold tracking-[-0.04em] text-[#0F172A] leading-[1.06]" />

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
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "hero_desktop",
                    label: HERO_SLIDES[activeIdx]?.id,
                  })
                }
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3.5 rounded-full text-sm font-semibold text-[#0F172A] bg-white hover:bg-slate-50 ring-1 ring-slate-200 transition-all"
              >
                Lihat Demo Interaktif
              </Link>
            </div>

            {/* Clean Metrics Strip */}
            <div className="pt-6 flex items-center gap-10">
              {metrics.map((m) => (
                <div key={m.label} className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
                    <span className="text-2xl font-bold tracking-tight text-[#0F172A]">
                      {m.value}
                    </span>
                  </div>
                  <div className="text-xs text-[#475569] pl-3.5">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right 6 Cols: Combined Real Photography + Product UI Stage */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 24, delay: 0.1 }}
            className="col-span-6 relative"
          >
            <HeroShowcaseFrame
              activeIdx={activeIdx}
              onSelect={setActiveIdx}
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
