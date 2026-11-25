"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  SIGNIFICA_WORK_ITEMS,
  type CaseBadge,
  type CaseStudyItem,
} from "@/data/significa-work";

const ICON_MAP: Record<CaseBadge["iconKey"], typeof Zap> = {
  zap: Zap,
  trending: TrendingUp,
  globe: Globe,
  shield: ShieldCheck,
  database: Database,
};

function ProjectRow({ item }: { item: CaseStudyItem }) {
  const [imgIdx, setImgIdx] = useState(0);
  const currentImg = item.images[imgIdx] ?? item.images[0];

  const prev = () =>
    setImgIdx((i) => (i === 0 ? item.images.length - 1 : i - 1));
  const next = () =>
    setImgIdx((i) => (i === item.images.length - 1 ? 0 : i + 1));

  return (
    <article className="border-t border-[#E8E8E8] last:border-b hover:bg-[#C6C6C8]/[0.12] transition-colors duration-200">
      <div className="sig-container py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Left Column: Significa Signature Muted Client + Dark Tagline + Colored Icon Badges + Outlined Link */}
        <div className="flex flex-col justify-between gap-8">
          <div className="space-y-6">
            <Link href={`/karya/${item.slug}`} className="block group">
              <h3 className="text-[clamp(1.85rem,2.1vw+1.15rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
                <span className="text-[#6F6F71] block">{item.client}</span>
                <span className="text-[#171717] block mt-1 group-hover:opacity-80 transition-opacity">
                  {item.tagline}
                </span>
              </h3>
            </Link>

            {/* Significa-Style 2-Column Achievement Badges with Vibrant Rounded Icon Tiles */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-md pt-2">
              {item.badges.map((b) => {
                const Icon = ICON_MAP[b.iconKey];
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: b.tileBg, color: b.tileInk }}
                      className="w-10 h-10 rounded-[12px] inline-flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(23,23,23,0.1)]"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-[#6F6F71]">
                        {b.eyebrow}
                      </div>
                      <div className="text-[13.5px] font-medium text-[#171717] leading-snug truncate">
                        {b.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href={`/karya/${item.slug}`} className="sig-btn-outline">
              <span>Lihat studi kasus</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Significa 4:3 Rounded Editorial Carousel with Floating Corner Controls */}
        <div className="relative group">
          <div className="relative aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8]">
            <Link
              href={`/karya/${item.slug}`}
              aria-label={`Buka studi kasus ${item.client}`}
              className="block w-full h-full"
            >
              <Image
                src={currentImg.src}
                alt={currentImg.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </Link>

            {/* Floating Significa-Style Overlay Prev/Next Controls */}
            {item.images.length > 1 && (
              <div className="absolute right-3.5 bottom-3.5 z-10 flex items-center gap-1.5 rounded-[14px] bg-[#F7F7F7]/92 backdrop-blur-md border border-[#E8E8E8] p-1 shadow-[0_8px_24px_rgba(23,23,23,0.14)]">
                <span className="px-2 font-mono text-[11px] font-medium text-[#171717]">
                  0{imgIdx + 1} / 0{item.images.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label={`Gambar sebelumnya untuk ${item.client}`}
                  className="w-8 h-8 rounded-[10px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Gambar berikutnya untuk ${item.client}`}
                  className="w-8 h-8 rounded-[10px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function SignificaSelectedWork() {
  return (
    <section id="karya" className="scroll-mt-20 pt-10 sm:pt-14 bg-[#F7F7F7]">
      <div className="sig-container pb-8 sm:pb-10">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#171717]">
          Karya terpilih.
        </h2>
      </div>

      <div>
        {SIGNIFICA_WORK_ITEMS.map((item) => (
          <ProjectRow key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
