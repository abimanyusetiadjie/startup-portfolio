"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import {
  SIGNIFICA_WORK_ITEMS,
  type CaseStudyItem,
} from "@/data/significa-work";
import { ClayReveal } from "./ClayReveal";

// Strict canonical order on BOTH Mobile (1..12 top-to-bottom) & Desktop (odd left, even right staggered):
// 1. Look.u AI -> 2. KINETIC -> 3. FlowNest -> 4. SmartPOS -> 5. PropSmart -> 6. AI CV Screening -> rest
const ORDERED_SHOWCASE_SLUGS = [
  "looku-ai",
  "kinetic-fitness",
  "wa-automation-workflow",
  "smartpos-aneka-rasa",
  "propsmart-saas",
  "ai-cv-screening",
  "central-scaffolding",
  "capstonenews-portal",
  "ypi-al-fuad",
  "toko-amen-snack",
  "heavytrack-wms",
  "logisync-fleet",
];

// Remaining 5 real projects cleanly revealed via Clay's "Explore all work ->" control
const EXTRA_ARCHIVE_SLUGS = [
  "lacak-korupsi",
  "crew-ai-hris",
  "scalebase-crm",
  "desahub-simkopdes",
  "siakad-sekolah",
];

function ClayWorkCard({
  item,
  delay = 0,
}: {
  item: CaseStudyItem;
  delay?: number;
}) {
  const img = item.images[0];
  const cleanTitle = item.client.replace(/\.$/, "");

  return (
    <ClayReveal delay={delay}>
      <article className="group">
        <Link
          href={`/karya/${item.slug}`}
          aria-label={`Lihat studi kasus ${cleanTitle}`}
          className="block"
        >
          {/* Clay Signature: 0px sharp square corners, 100% uncropped native aspect ratio + subtle hover elevation */}
          <div className="relative w-full overflow-hidden bg-[#F4F4F5] ring-1 ring-inset ring-black/[0.06] transition-shadow duration-500 ease-out group-hover:shadow-[0_22px_50px_-28px_rgba(17,19,24,0.22)]">
            {img && (
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width ?? 1440}
                height={img.height ?? 1080}
                quality={85}
                sizes="(max-width: 1024px) 94vw, 44vw"
                className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              />
            )}

            {/* Discreet desktop-only hover cue */}
            <span
              aria-hidden="true"
              className="hidden lg:inline-flex items-center gap-1.5 absolute bottom-3.5 right-3.5 px-3 py-1.5 rounded-full bg-[#111318]/85 text-white text-[12.5px] font-medium backdrop-blur-sm opacity-0 translate-y-1.5 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0"
            >
              <span>Lihat studi kasus</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>

          <h3 className="mt-4 sm:mt-5 text-[21px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#111111] group-hover:opacity-70 transition-opacity">
            {cleanTitle}
          </h3>

          <p className="mt-1.5 text-[15px] sm:text-[15.5px] leading-[1.52] text-[#4B5563] max-w-[480px]">
            {item.tagline}
          </p>

          {/* Clay Mobile Exact Detail: explicit underlined "View case study ->" shown cleanly on mobile */}
          <div className="lg:hidden mt-3.5">
            <span className="clay-arrow-link !text-[14.5px]">
              <span>Lihat studi kasus</span>
              <ArrowRight className="w-4 h-4 text-[#6B7280]" />
            </span>
          </div>
        </Link>
      </article>
    </ClayReveal>
  );
}

export function SignificaSelectedWork() {
  const [showAll, setShowAll] = useState(false);

  const orderedItems = ORDERED_SHOWCASE_SLUGS.map((s) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === s)
  ).filter((p): p is CaseStudyItem => Boolean(p));

  const leftItems = orderedItems.filter((_, idx) => idx % 2 === 0);
  const rightItems = orderedItems.filter((_, idx) => idx % 2 === 1);

  const extraItems = EXTRA_ARCHIVE_SLUGS.map((s) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === s)
  ).filter((p): p is CaseStudyItem => Boolean(p));

  return (
    <section id="karya" className="scroll-mt-24 bg-white pb-20 lg:pb-28">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-[clamp(1.5rem,5vw,4.75rem)]">
        {/* Mobile & Tablet (< lg): Strict linear sequence 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> rest */}
        <div className="lg:hidden space-y-12 sm:space-y-16">
          {orderedItems.map((item) => (
            <ClayWorkCard key={item.slug} item={item} />
          ))}
        </div>

        {/* Desktop (lg+): Clay Signature Staggered 2-Column Grid (1/2, 3/4, 5/6, 7/8, ...) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-x-16 xl:gap-x-28 items-start">
          {/* Left Column (1, 3, 5, 7, 9, 11) */}
          <div className="space-y-28">
            {leftItems.map((item) => (
              <ClayWorkCard key={item.slug} item={item} />
            ))}
          </div>

          {/* Right Column (2, 4, 6, 8, 10, 12) — Intentionally Staggered Downward */}
          <div className="mt-32 space-y-28">
            {rightItems.map((item) => (
              <ClayWorkCard key={item.slug} item={item} delay={0.05} />
            ))}
          </div>
        </div>

        {/* Clay Centered "Explore all work ->" Control Revealing All 8 Remaining Real Systems */}
        <div className="mt-20 lg:mt-28 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="clay-arrow-link !text-[18px]"
          >
            <span>
              {showAll
                ? "Sembunyikan arsip tambahan"
                : "Lihat semua 17 karya nyata"}
            </span>
            <ArrowRight
              className={`w-4 h-4 text-[#6B7280] transition-transform duration-200 ${
                showAll ? "-rotate-90" : ""
              }`}
            />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {showAll && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-12 pt-10 border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
                {extraItems.map((item) => {
                  const thumb = item.images[0];
                  return (
                    <Link
                      key={item.slug}
                      href={`/karya/${item.slug}`}
                      className="group py-5 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-center hover:bg-[#F9FAFB] px-3 -mx-3 transition-colors"
                    >
                      <div className="md:col-span-4 flex items-center justify-between md:justify-start gap-3.5">
                        <div className="flex items-center gap-3.5 min-w-0">
                          {thumb && (
                            <span className="relative w-16 h-12 shrink-0 overflow-hidden bg-[#F4F4F5] ring-1 ring-inset ring-black/[0.06]">
                              <Image
                                src={thumb.src}
                                alt={thumb.alt}
                                fill
                                quality={80}
                                sizes="64px"
                                className={`object-cover ${
                                  thumb.fit === "top"
                                    ? "object-top"
                                    : "object-center"
                                }`}
                              />
                            </span>
                          )}
                          <span className="text-[17px] font-semibold text-[#111111] group-hover:opacity-65 transition-opacity truncate">
                            {item.client.replace(/\.$/, "")}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] md:hidden shrink-0" />
                      </div>
                      <div className="md:col-span-7 text-[15px] text-[#4B5563]">
                        {item.tagline}
                      </div>
                      <div className="hidden md:flex md:col-span-1 justify-end">
                        <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#111111] transition-colors" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
