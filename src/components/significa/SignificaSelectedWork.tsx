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
  SIGNIFICA_WORK_ITEMS,
  type CaseStudyItem,
} from "@/data/significa-work";

type FilterKey = "all" | "erp" | "web" | "ai";

const FILTER_TABS: { id: FilterKey; label: string }[] = [
  { id: "all", label: "Semua karya" },
  { id: "erp", label: "ERP, WMS & POS" },
  { id: "web", label: "Web & Portal" },
  { id: "ai", label: "AI & Automasi" },
];

function matchesFilter(item: CaseStudyItem, filter: FilterKey): boolean {
  if (filter === "all") return true;
  if (filter === "erp") {
    return item.serviceHref === "/jasa-pembuatan-sistem-erp";
  }
  if (filter === "web") {
    return item.serviceHref === "/jasa-pembuatan-website-jakarta";
  }
  return item.serviceHref === "/jasa-automasi-whatsapp";
}

function FeaturedProjectRow({ item }: { item: CaseStudyItem }) {
  const [imgIdx, setImgIdx] = useState(0);
  const currentImg = item.images[imgIdx] ?? item.images[0];

  const prev = () =>
    setImgIdx((i) => (i === 0 ? item.images.length - 1 : i - 1));
  const next = () =>
    setImgIdx((i) => (i === item.images.length - 1 ? 0 : i + 1));

  return (
    <article className="border-t border-[#E2E8F0]">
      <div className="sig-container py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left 5 Cols: Crisp B2B Editorial Summary (Zero colored icon squares) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-7">
          <div className="space-y-3">
            <p className="text-[13px] font-medium text-[#0D7A67]">
              {item.sector} · {item.year}
            </p>

            <Link href={`/karya/${item.slug}`} className="block group">
              <h3 className="text-[clamp(1.65rem,1.8vw+0.95rem,2.35rem)] font-bold tracking-[-0.02em] leading-[1.12] text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                {item.client}
              </h3>
              <p className="text-[16px] sm:text-[17px] leading-[1.5] text-[#475569] mt-2">
                {item.tagline}
              </p>
            </Link>
          </div>

          {/* Pure Hairline Typographic Specs (Zero icons) */}
          <dl className="grid grid-cols-2 gap-x-6 gap-y-4">
            {item.specs.map((spec) => (
              <div
                key={spec.label}
                className="border-t border-[#E2E8F0] pt-3 space-y-0.5"
              >
                <dt className="text-[11px] font-medium uppercase tracking-[0.06em] text-[#64748B]">
                  {spec.label}
                </dt>
                <dd className="text-[14px] font-semibold text-[#0F172A] leading-snug">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="flex flex-wrap items-center gap-6 pt-1">
            <Link
              href={`/karya/${item.slug}`}
              className="sig-link inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0D7A67]"
            >
              <span>Lihat detail sistem</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sig-link inline-flex items-center gap-1 text-[14.5px] font-medium text-[#475569] hover:text-[#0F172A]"
              >
                <span>Buka live</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Right 7 Cols: Elevated Full-Bleed 4:3 Working System Canvas */}
        <div className="lg:col-span-7 space-y-2.5">
          <div className="relative group aspect-[4/3] w-full rounded-[16px] overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0] shadow-[0_16px_40px_-20px_rgba(15,23,42,0.1)]">
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
                  } transition-transform duration-500 group-hover:scale-[1.015]`}
                />
              </Link>
            )}
          </div>

          {item.images.length > 1 && (
            <div className="flex items-center justify-between gap-4 pt-0.5">
              <p className="text-[12.5px] text-[#64748B] truncate">
                {currentImg?.caption}
              </p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="font-mono text-[11px] text-[#64748B] tabular-nums">
                  0{imgIdx + 1} / 0{item.images.length}
                </span>
                <button
                  type="button"
                  onClick={prev}
                  aria-label={`Tampilan sebelumnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-full border border-[#CBD5E1] hover:border-[#0D7A67] hover:text-[#0D7A67] text-[#0F172A] inline-flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={`Tampilan berikutnya untuk ${item.client}`}
                  className="w-7 h-7 rounded-full border border-[#CBD5E1] hover:border-[#0D7A67] hover:text-[#0D7A67] text-[#0F172A] inline-flex items-center justify-center transition-colors cursor-pointer"
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
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredItems = SIGNIFICA_WORK_ITEMS.filter((item) =>
    matchesFilter(item, activeFilter)
  );
  const filteredVisualItems = filteredItems.filter(
    (item) => item.images.length > 0
  );
  const filteredArchiveItems = filteredItems.filter(
    (item) => item.images.length === 0
  );

  return (
    <section id="karya" className="scroll-mt-20 bg-white">
      {/* Section Header + Clean B2B Category Filter Tabs */}
      <div className="sig-container pt-14 sm:pt-20 pb-8 sm:pb-10 flex flex-col md:flex-row md:items-end justify-between gap-5">
        <div className="space-y-2">
          <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D7A67]">
            Portofolio Nyata
          </p>
          <h2 className="text-[clamp(1.75rem,2vw+1rem,2.65rem)] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A]">
            Sistem yang benar-benar bekerja.
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {FILTER_TABS.map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`h-[36px] px-3.5 rounded-[10px] text-[13.5px] font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#0D7A67] text-white"
                    : "bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0] hover:border-[#0D7A67] hover:text-[#0D7A67]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {activeFilter === "all" ? (
        <>
          {/* Tier 1: 4 Flagship Real Projects on Pure White */}
          <div>
            {FEATURED_WORK_ITEMS.map((item) => (
              <FeaturedProjectRow key={item.slug} item={item} />
            ))}
          </div>

          {/* Tier 2: 6 Visual Gallery Projects on Soft Slate Alternating Surface */}
          <div className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
            <div className="sig-container py-16 lg:py-20 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-[22px] sm:text-[26px] font-bold tracking-[-0.02em] text-[#0F172A]">
                  Portal, ERP &amp; aplikasi lainnya.
                </h3>
                <span className="text-[13.5px] text-[#64748B]">
                  Berita · Konstruksi · Pendidikan · HRIS · POS · CRM
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
                {GALLERY_WORK_ITEMS.map((item) => {
                  const primaryImg = item.images[0];
                  return (
                    <Link
                      key={item.slug}
                      href={`/karya/${item.slug}`}
                      className="group block space-y-3.5"
                    >
                      <div className="relative aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_8px_24px_-16px_rgba(15,23,42,0.12)] group-hover:border-[#0D7A67]/40 transition-colors">
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

                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-[17px] font-semibold tracking-[-0.01em] text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                            {item.client}
                          </h4>
                          <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7A67] transition-colors shrink-0" />
                        </div>
                        <p className="text-[14.5px] text-[#475569] leading-snug">
                          {item.tagline}
                        </p>
                        <p className="text-[12.5px] text-[#64748B] pt-0.5">
                          {item.techStack.slice(0, 3).join(" · ")}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tier 3: Clean Enterprise Archive Index on Pure White */}
          <div className="bg-white border-b border-[#E2E8F0]">
            <div className="sig-container py-14 lg:py-20 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h3 className="text-[20px] sm:text-[22px] font-bold tracking-[-0.015em] text-[#0F172A]">
                  Arsip sistem lainnya.
                </h3>
                <span className="text-[13px] text-[#64748B]">
                  Klik baris untuk melihat arsitektur &amp; fitur
                </span>
              </div>

              <div className="rounded-[16px] border border-[#E2E8F0] bg-[#F8FAFC]/60 divide-y divide-[#E2E8F0] overflow-hidden">
                {ARCHIVE_WORK_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/karya/${item.slug}`}
                    className="group px-5 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-white transition-colors"
                  >
                    <div className="md:col-span-3 flex items-center justify-between md:justify-start gap-2">
                      <span className="text-[15.5px] font-semibold text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                        {item.client}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] md:hidden" />
                    </div>
                    <div className="md:col-span-5 text-[14px] text-[#475569] leading-snug">
                      {item.tagline}
                    </div>
                    <div className="md:col-span-3 text-[12.5px] text-[#64748B]">
                      {item.techStack.slice(0, 3).join(" · ")}
                    </div>
                    <div className="hidden md:flex md:col-span-1 justify-end">
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7A67] transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Filtered Clean Gallery View */
        <div className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
          <div className="sig-container py-12 lg:py-16 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-10">
              {filteredVisualItems.map((item) => {
                const primaryImg = item.images[0];
                return (
                  <Link
                    key={item.slug}
                    href={`/karya/${item.slug}`}
                    className="group block space-y-3.5"
                  >
                    <div className="relative aspect-[4/3] w-full rounded-[14px] overflow-hidden bg-white border border-[#E2E8F0] group-hover:border-[#0D7A67]/40 transition-colors">
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
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-[17px] font-semibold text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                          {item.client}
                        </h4>
                        <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7A67] shrink-0" />
                      </div>
                      <p className="text-[14.5px] text-[#475569] leading-snug">
                        {item.tagline}
                      </p>
                      <p className="text-[12.5px] text-[#64748B]">
                        {item.techStack.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredArchiveItems.length > 0 && (
              <div className="rounded-[16px] border border-[#E2E8F0] bg-white divide-y divide-[#E2E8F0] overflow-hidden">
                {filteredArchiveItems.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/karya/${item.slug}`}
                    className="group px-5 sm:px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline hover:bg-[#F8FAFC] transition-colors"
                  >
                    <div className="md:col-span-3 text-[15.5px] font-semibold text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                      {item.client}
                    </div>
                    <div className="md:col-span-5 text-[14px] text-[#475569]">
                      {item.tagline}
                    </div>
                    <div className="md:col-span-3 text-[12.5px] text-[#64748B]">
                      {item.techStack.slice(0, 3).join(" · ")}
                    </div>
                    <div className="hidden md:flex md:col-span-1 justify-end">
                      <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7A67]" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
