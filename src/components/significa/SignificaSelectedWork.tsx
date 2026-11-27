"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronLeft,
  ChevronRight,
  Database,
  Globe,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";
import {
  FEATURED_WORK_ITEMS,
  SECONDARY_WORK_ITEMS,
  type CaseBadge,
  type CaseStudyItem,
} from "@/data/significa-work";

const ICON_MAP: Record<CaseBadge["iconKey"], typeof Zap> = {
  zap: Zap,
  trending: TrendingUp,
  globe: Globe,
  shield: ShieldCheck,
  database: Database,
  bot: Bot,
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
      <div className="sig-container py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
        {/* Left Column: Function-First Proof */}
        <div className="flex flex-col justify-between gap-7">
          <div className="space-y-5">
            <Link href={`/karya/${item.slug}`} className="block group">
              <h3 className="text-[clamp(1.75rem,2vw+1.05rem,2.75rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
                <span className="text-[#6F6F71] block">{item.client}</span>
                <span className="text-[#171717] block mt-1 group-hover:opacity-80 transition-opacity">
                  {item.tagline}
                </span>
              </h3>
            </Link>

            <div className="grid grid-cols-2 gap-x-4 gap-y-3.5 max-w-md pt-1">
              {item.badges.map((b) => {
                const Icon = ICON_MAP[b.iconKey];
                return (
                  <div key={b.label} className="flex items-center gap-3">
                    <span
                      style={{ backgroundColor: b.tileBg, color: b.tileInk }}
                      className="w-9 h-9 rounded-[11px] inline-flex items-center justify-center shrink-0"
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                    <div className="min-w-0">
                      <div className="font-mono text-[9.5px] uppercase tracking-wider text-[#6F6F71]">
                        {b.eyebrow}
                      </div>
                      <div className="text-[13px] font-medium text-[#171717] leading-snug truncate">
                        {b.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <Link href={`/karya/${item.slug}`} className="sig-btn-outline">
              <span>Lihat fungsi &amp; detail</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sig-btn-outline bg-white"
              >
                <span>Buka live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Full-Bleed 4:3 Studio Working-System Visual (Slide 2 = Live Capture) */}
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
                className={`object-cover ${
                  imgIdx === 0 ? "object-center" : "object-top"
                } transition-transform duration-500 group-hover:scale-[1.015]`}
              />
            </Link>

            {item.images.length > 1 && (
              <div className="absolute right-3 bottom-3 z-10 flex items-center gap-1 rounded-[12px] bg-[#F7F7F7]/95 backdrop-blur-md border border-[#E8E8E8] p-1 shadow-[0_8px_20px_rgba(23,23,23,0.14)]">
                <span className="px-2 font-mono text-[10.5px] font-medium text-[#171717]">
                  0{imgIdx + 1}/0{item.images.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label={`Gambar sebelumnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-[8px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Gambar berikutnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-[8px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
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
    <section id="karya" className="scroll-mt-20 pt-8 sm:pt-12 bg-[#F7F7F7]">
      {/* Section Header */}
      <div className="sig-container pb-7 sm:pb-9 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#171717]">
          Karya nyata.
        </h2>
        <span className="font-mono text-xs uppercase tracking-wider text-[#6F6F71]">
          7 sistem informasi &amp; produk aktif
        </span>
      </div>

      {/* 4 Flagship Real Projects */}
      <div>
        {FEATURED_WORK_ITEMS.map((item) => (
          <ProjectRow key={item.slug} item={item} />
        ))}
      </div>

      {/* 3 Populated Enterprise Information Systems — Full-Bleed Studio Grid */}
      <div className="border-b border-[#E8E8E8]">
        <div className="sig-container py-12 lg:py-16 space-y-7">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.015em] text-[#171717]">
              Sistem informasi bisnis lainnya.
            </h3>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6F6F71]">
              HRIS · POS · CRM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SECONDARY_WORK_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/karya/${item.slug}`}
                className="group rounded-[18px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] overflow-hidden transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDEDED] border-b border-[#E8E8E8]">
                  <Image
                    src={item.images[0].src}
                    alt={item.images[0].alt}
                    fill
                    sizes="(max-width: 768px) 92vw, 31vw"
                    className="object-cover object-center group-hover:scale-[1.025] transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[17px] font-semibold text-[#171717]">
                        {item.client}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] transition-colors shrink-0" />
                    </div>
                    <p className="text-[14px] text-[#6F6F71] leading-snug">
                      {item.tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-[6px] bg-[#F7F7F7] border border-[#E8E8E8] font-mono text-[10.5px] text-[#6F6F71]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
