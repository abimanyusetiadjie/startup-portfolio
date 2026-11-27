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

// Clay signature staggered 2-column selection (8 crisp visual case studies)
const LEFT_COLUMN_SLUGS = [
  "propsmart-saas",
  "logisync-fleet",
  "central-scaffolding",
  "crew-ai-hris",
];

const RIGHT_COLUMN_SLUGS = [
  "toko-amen-snack",
  "lacak-korupsi",
  "looku-ai",
  "ypi-al-fuad",
];

// Remaining 8 real scratch projects cleanly revealed via Clay's "Explore all work ->" control
const EXTRA_ARCHIVE_SLUGS = [
  "heavytrack-wms",
  "smartpos-aneka-rasa",
  "scalebase-crm",
  "capstonenews-portal",
  "desahub-simkopdes",
  "kinetic-fitness",
  "ai-cv-screening",
  "siakad-sekolah",
];

function ClayWorkCard({
  item,
  aspectClass,
}: {
  item: CaseStudyItem;
  aspectClass: string;
}) {
  const img = item.images[0];
  const cleanTitle = item.client.replace(/\.$/, "");

  return (
    <article className="group">
      <Link
        href={`/karya/${item.slug}`}
        aria-label={`Lihat studi kasus ${cleanTitle}`}
        className="block"
      >
        {/* Clay Signature: 0px sharp square corners with hairline inset frame for crisp white UI screenshots */}
        <div
          className={`relative ${aspectClass} w-full overflow-hidden bg-[#F4F4F5] ring-1 ring-inset ring-black/[0.06]`}
        >
          {img && (
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 92vw, 44vw"
              className={`object-cover ${
                img.fit === "top" ? "object-top" : "object-center"
              } transition-transform duration-700 ease-out group-hover:scale-[1.025]`}
            />
          )}
        </div>

        <h3 className="mt-5 text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] leading-[1.2] text-[#111111] group-hover:opacity-70 transition-opacity">
          {cleanTitle}
        </h3>

        <p className="mt-1.5 text-[15.5px] leading-[1.52] text-[#4B5563] max-w-[480px]">
          {item.tagline}
        </p>

        <p className="mt-2.5 text-[13.5px] text-[#8C8E94]">
          {item.techStack.slice(0, 3).join("  ·  ")}
        </p>

        {/* Clay Mobile Exact Detail: explicit underlined "View case study ->" shown cleanly on mobile */}
        <div className="lg:hidden mt-4">
          <span className="clay-arrow-link !text-[15px]">
            <span>Lihat studi kasus</span>
            <ArrowRight className="w-4 h-4 text-[#6B7280]" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function SignificaSelectedWork() {
  const [showAll, setShowAll] = useState(false);

  const leftItems = LEFT_COLUMN_SLUGS.map((s) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === s)
  ).filter((p): p is CaseStudyItem => Boolean(p));

  const rightItems = RIGHT_COLUMN_SLUGS.map((s) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === s)
  ).filter((p): p is CaseStudyItem => Boolean(p));

  const extraItems = EXTRA_ARCHIVE_SLUGS.map((s) =>
    SIGNIFICA_WORK_ITEMS.find((p) => p.slug === s)
  ).filter((p): p is CaseStudyItem => Boolean(p));

  return (
    <section id="karya" className="scroll-mt-24 bg-white pb-20 lg:pb-28">
      <div className="clay-container">
        {/* Clay Signature Staggered 2-Column Portfolio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-28 items-start">
          {/* Left Column */}
          <div className="space-y-16 lg:space-y-28">
            {leftItems.map((item, idx) => (
              <ClayWorkCard
                key={item.slug}
                item={item}
                aspectClass={idx % 2 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}
              />
            ))}
          </div>

          {/* Right Column — Intentionally Staggered Downward on Desktop (Clay exact visual rhythm) */}
          <div className="mt-16 lg:mt-32 space-y-16 lg:space-y-28">
            {rightItems.map((item, idx) => (
              <ClayWorkCard
                key={item.slug}
                item={item}
                aspectClass={idx % 2 === 0 ? "aspect-[16/10]" : "aspect-[4/3]"}
              />
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
                : "Lihat semua 16 karya nyata"}
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
                {extraItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/karya/${item.slug}`}
                    className="group py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-[#F9FAFB] px-3 -mx-3 transition-colors"
                  >
                    <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-2">
                      <span className="text-[17px] font-semibold text-[#111111] group-hover:opacity-65 transition-opacity">
                        {item.client.replace(/\.$/, "")}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] md:hidden" />
                    </div>
                    <div className="md:col-span-5 text-[15px] text-[#4B5563]">
                      {item.tagline}
                    </div>
                    <div className="md:col-span-3 text-[13px] text-[#8C8E94]">
                      {item.techStack.slice(0, 3).join(" · ")}
                    </div>
                    <div className="hidden md:flex md:col-span-1 justify-end">
                      <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#111111] transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
