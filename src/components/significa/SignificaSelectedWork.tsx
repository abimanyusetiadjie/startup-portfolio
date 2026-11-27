"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  ARCHIVE_WORK_ITEMS,
  FEATURED_WORK_ITEMS,
  GALLERY_WORK_ITEMS,
  type CaseStudyItem,
} from "@/data/significa-work";

function FeaturedProjectRow({ item }: { item: CaseStudyItem }) {
  const [imgIdx, setImgIdx] = useState(0);
  const currentImg = item.images[imgIdx] ?? item.images[0];

  const prev = () =>
    setImgIdx((i) => (i === 0 ? item.images.length - 1 : i - 1));
  const next = () =>
    setImgIdx((i) => (i === item.images.length - 1 ? 0 : i + 1));

  return (
    <article className="border-t border-[#E5E5E5]">
      <div className="sig-container py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left 5 Cols: Pure Minimalist Editorial Proof (Zero colored icon boxes) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div className="space-y-4">
            <p className="text-[12.5px] text-[#6F6F71]">
              {item.sector} · {item.year}
            </p>

            <Link href={`/karya/${item.slug}`} className="block group">
              <h3 className="text-[clamp(1.7rem,1.9vw+1rem,2.5rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                {item.client}
              </h3>
              <p className="text-[16.5px] sm:text-[17.5px] leading-[1.45] text-[#6F6F71] mt-2">
                {item.tagline}
              </p>
            </Link>
          </div>

          {/* Pure Typographic 2x2 Spec Grid (Hairline borders, zero decorative icons) */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
            {item.specs.map((spec) => (
              <div
                key={spec.label}
                className="border-t border-[#E5E5E5] pt-3 space-y-0.5"
              >
                <dt className="text-[11px] uppercase tracking-[0.06em] text-[#6F6F71]">
                  {spec.label}
                </dt>
                <dd className="text-[14px] font-medium text-[#171717] leading-snug">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          {/* Clean Text-First Actions */}
          <div className="flex flex-wrap items-center gap-6 pt-1">
            <Link
              href={`/karya/${item.slug}`}
              className="sig-link inline-flex items-center gap-1.5 text-[15px] font-medium text-[#171717]"
            >
              <span>Lihat detail sistem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sig-link inline-flex items-center gap-1 text-[14.5px] font-medium text-[#6F6F71] hover:text-[#171717]"
              >
                <span>Buka live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right 7 Cols: Generous Full-Bleed 4:3 Working System Canvas */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="relative group aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-[#EAEAE8] border border-[#E5E5E5]">
            {currentImg && (
              <Link
                href={`/karya/${item.slug}`}
                aria-label={`Buka detail ${item.client}`}
                className="block w-full h-full"
              >
                <Image
                  src={currentImg.src}
                  alt={currentImg.alt}
                  fill
                  sizes="(max-width: 1024px) 94vw, 56vw"
                  className={`object-cover ${
                    currentImg.fit === "top" ? "object-top" : "object-center"
                  } transition-transform duration-500 group-hover:scale-[1.012]`}
                />
              </Link>
            )}
          </div>

          {item.images.length > 1 && (
            <div className="flex items-center justify-between gap-4 pt-0.5">
              <p className="text-[12.5px] text-[#6F6F71] truncate">
                {currentImg?.caption}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-[11px] text-[#6F6F71] tabular-nums">
                  0{imgIdx + 1} / 0{item.images.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label={`Tampilan sebelumnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-full border border-[#E0E0E0] hover:border-[#171717] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Tampilan berikutnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-full border border-[#E0E0E0] hover:border-[#171717] text-[#171717] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export function SignificaSelectedWork() {
  return (
    <section id="karya" className="scroll-mt-20 pt-10 sm:pt-16 bg-[#F7F7F7]">
      {/* Section Header */}
      <div className="sig-container pb-8 sm:pb-10 flex items-baseline justify-between gap-4">
        <h2 className="text-[clamp(1.75rem,2vw+1.1rem,2.75rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#171717]">
          Karya pilihan.
        </h2>
        <span className="text-[13.5px] text-[#6F6F71]">
          Sistem &amp; produk aktif
        </span>
      </div>

      {/* Tier 1: 4 Flagship Real Projects */}
      <div>
        {FEATURED_WORK_ITEMS.map((item) => (
          <FeaturedProjectRow key={item.slug} item={item} />
        ))}
      </div>

      {/* Tier 2: 6 Borderless Visual Gallery Projects (No heavy boxed cards or pill borders) */}
      <div className="border-t border-[#E5E5E5]">
        <div className="sig-container py-16 lg:py-24 space-y-10">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.02em] text-[#171717]">
              Portal, ERP &amp; aplikasi lainnya.
            </h3>
            <span className="hidden sm:inline text-[13px] text-[#6F6F71]">
              Berita · Konstruksi · Pendidikan · HRIS · POS · CRM
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {GALLERY_WORK_ITEMS.map((item) => {
              const primaryImg = item.images[0];
              return (
                <Link
                  key={item.slug}
                  href={`/karya/${item.slug}`}
                  className="group block space-y-3.5"
                >
                  <div className="relative aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-[#EAEAE8] border border-[#E5E5E5]">
                    {primaryImg && (
                      <Image
                        src={primaryImg.src}
                        alt={primaryImg.alt}
                        fill
                        sizes="(max-width: 768px) 94vw, (max-width: 1200px) 46vw, 31vw"
                        className={`object-cover ${
                          primaryImg.fit === "top"
                            ? "object-top"
                            : "object-center"
                        } transition-transform duration-500 group-hover:scale-[1.02]`}
                      />
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-[17px] font-semibold tracking-[-0.01em] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                        {item.client}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] transition-colors shrink-0" />
                    </div>
                    <p className="text-[14.5px] text-[#6F6F71] leading-snug">
                      {item.tagline}
                    </p>
                    <p className="text-[12px] text-[#86868B] pt-0.5">
                      {item.techStack.slice(0, 3).join(" · ")}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tier 3: Minimalist Swiss Editorial Archive Index (6 Additional Real Scratch Systems) */}
      <div className="border-t border-[#E5E5E5]">
        <div className="sig-container py-14 lg:py-20 space-y-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[19px] sm:text-[22px] font-semibold tracking-[-0.015em] text-[#171717]">
              Arsip sistem lainnya.
            </h3>
            <span className="text-[13px] text-[#6F6F71]">
              Klik untuk rincian arsitektur
            </span>
          </div>

          <div className="divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {ARCHIVE_WORK_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/karya/${item.slug}`}
                className="group py-4 sm:py-5 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-[#EFEFED]/70 px-3 -mx-3 rounded-[10px] transition-colors"
              >
                <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-2">
                  <span className="text-[16px] font-medium text-[#171717]">
                    {item.client}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#6F6F71] md:hidden" />
                </div>
                <div className="md:col-span-5 text-[14.5px] text-[#6F6F71] leading-snug">
                  {item.tagline}
                </div>
                <div className="md:col-span-3 text-[12.5px] text-[#86868B]">
                  {item.techStack.slice(0, 3).join(" · ")}
                </div>
                <div className="hidden md:flex md:col-span-1 justify-end">
                  <ArrowUpRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
