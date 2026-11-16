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
      className="relative scroll-mt-16 overflow-hidden bg-white pt-16 pb-20 xl:pt-20 xl:pb-24 border-b border-slate-200/80"
    >
      {/* Architectural 1px Blueprint Grid Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 bg-[linear-gradient(to_right,rgba(226,232,240,0.55)_1px,transparent_1px),linear-gradient(to_bottom,rgba(226,232,240,0.55)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_75%_at_50%_40%,black_30%,transparent_85%)]"
      />

      {/* Subtle Dynamic Ambient Glow Tuned to Active Pillar */}
      <div
        aria-hidden="true"
        className={`pointer-events-none select-none absolute inset-0 transition-all duration-700 ${
          activeIdx === 1
            ? "bg-[radial-gradient(ellipse_58%_78%_at_78%_48%,rgba(13,148,136,0.065),rgba(37,99,235,0.03)_48%,transparent_76%)]"
            : activeIdx === 2
            ? "bg-[radial-gradient(ellipse_58%_78%_at_78%_48%,rgba(79,70,229,0.06),rgba(14,165,233,0.035)_48%,transparent_76%)]"
            : "bg-[radial-gradient(ellipse_58%_78%_at_78%_48%,rgba(37,99,235,0.06),rgba(13,148,136,0.03)_48%,transparent_76%)]"
        }`}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <div
          className="grid grid-cols-12 gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Kolom Kiri: Tipografi Tenang, Jelas & Lapang */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[11.5px] font-mono tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>ABINEST // ENGINEERING STUDIO INDONESIA</span>
            </div>

            <HeroSyncedHeadline
              className="text-[40px] xl:text-[46px] font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.12]"
            />

            <HeroSyncedIntro
              activeIdx={activeIdx}
              onSelect={setActiveIdx}
              className="text-[17px] text-slate-600 leading-relaxed max-w-lg"
            />

            <HeroSyncedDescription
              activeIdx={activeIdx}
              onSelect={setActiveIdx}
              variant="desktop"
            />

            <div className="flex items-center gap-3.5 pt-1">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/demo"
                className="inline-flex items-center px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-colors"
              >
                Lihat Demo Interaktif
              </Link>
            </div>

            {/* 3 Metrik Polos dengan Tag Indeks Arsitektural */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 divide-x divide-slate-200/90 max-w-lg">
              <div className="pr-4">
                <div className="font-mono text-[10.5px] font-semibold text-blue-600 tracking-wider">
                  [01] KECEPATAN
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 mt-1">
                  14 Hari
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Rilis web &amp; sistem awal
                </div>
              </div>
              <div className="px-4">
                <div className="font-mono text-[10.5px] font-semibold text-blue-600 tracking-wider">
                  [02] HAK MILIK
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 mt-1">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Hak milik kode program
                </div>
              </div>
              <div className="pl-4">
                <div className="font-mono text-[10.5px] font-semibold text-blue-600 tracking-wider">
                  [03] TANPA SEWA
                </div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 mt-1">
                  Rp0
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Biaya lisensi per pengguna
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Layered Dark Application Window Frame */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="col-span-6 relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none select-none absolute -inset-7 bg-[radial-gradient(rgba(100,116,139,0.22)_1px,transparent_1px)] [background-size:18px_18px] [mask-image:radial-gradient(ellipse_78%_78%_at_50%_50%,black_35%,transparent_80%)]"
            />
            <HeroShowcaseFrame
              activeIdx={activeIdx}
              onSelectSlide={setActiveIdx}
              sizes="(max-width: 1200px) 50vw, 560px"
              className="relative z-10 w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
