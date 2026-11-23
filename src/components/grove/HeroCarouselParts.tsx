"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { HERO_SLIDES } from "./hero-slides";

interface HeroSyncedHeadlineProps {
  className: string;
}

/**
 * Disciplined, authoritative editorial headline — zero AI-generic multi-color gradient text.
 */
export function HeroSyncedHeadline({ className }: HeroSyncedHeadlineProps) {
  return (
    <h1 className={className}>
      Kami Membangun Sistem yang{" "}
      <span className="text-[#475569] font-normal">
        Bekerja Untuk Anda.
      </span>
    </h1>
  );
}

interface HeroSyncedIntroProps {
  activeIdx: number;
  onSelect?: (idx: number) => void;
  className: string;
}

export function HeroSyncedIntro({ className }: HeroSyncedIntroProps) {
  return (
    <p className={className}>
      Dari <span className="font-semibold text-[#0F172A]">Website super cepat</span>,{" "}
      <span className="font-semibold text-[#0F172A]">ERP, SIAKAD, Kasir POS</span>, hingga{" "}
      <span className="font-semibold text-[#0F172A]">Automasi AI &amp; WhatsApp resmi</span>—dirancang presisi dan 100% menjadi aset usaha Anda.
    </p>
  );
}

interface HeroSyncedDescriptionProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
  variant: "desktop" | "mobile";
}

/**
 * Clean monochrome spring-animated pill selector (solid #0F172A active pill).
 */
export function HeroSyncedDescription({
  activeIdx,
  onSelect,
  variant,
}: HeroSyncedDescriptionProps) {
  const isDesktop = variant === "desktop";
  const idPrefix = isDesktop ? "hero" : "m-hero";

  return (
    <div className={isDesktop ? "space-y-4 max-w-lg" : "space-y-3"}>
      <div
        role="tablist"
        aria-label="Fokus layanan Abinest"
        className={
          isDesktop
            ? "inline-flex items-center p-1.5 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200"
            : "flex items-center justify-between gap-1 p-1 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200"
        }
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${slide.id}`}
              aria-selected={isActive}
              aria-controls={`${idPrefix}-panel-${slide.id}`}
              onClick={() => onSelect(idx)}
              className={`relative z-10 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 font-semibold ${
                isDesktop
                  ? "px-4 py-1.5 text-[12.5px]"
                  : "flex-1 py-1.5 px-2 text-center text-[11px] sm:text-[12px]"
              } ${
                isActive ? "text-white" : "text-[#475569] hover:text-[#0F172A]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`${idPrefix}-active-tab-bg`}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-[#0F172A] shadow-sm -z-10"
                />
              )}
              {isDesktop && (
                <span
                  className={`font-mono text-[10.5px] mr-1.5 ${
                    isActive ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {slide.number}
                </span>
              )}
              <span>{slide.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIdx;
          const descText = isDesktop ? slide.desktopDesc : slide.mobileDesc;
          return (
            <p
              key={slide.id}
              id={`${idPrefix}-panel-${slide.id}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${slide.id}`}
              aria-hidden={!isActive}
              className={`col-start-1 row-start-1 leading-relaxed font-normal text-[#475569] transition-all duration-300 ${
                isDesktop ? "text-[16px]" : "text-[13.5px]"
              } ${
                isActive
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-1.5 z-0 pointer-events-none select-none"
              }`}
            >
              {descText}
            </p>
          );
        })}
      </div>
    </div>
  );
}

interface HeroShowcaseFrameProps {
  activeIdx: number;
  onSelect?: (idx: number) => void;
  sizes?: string;
  className?: string;
}

interface SlideVisualMeta {
  photoSrc: string;
  photoAlt: string;
  uiScreenSrc: string;
  uiScreenAlt: string;
  contextTag: string;
  shortLabel: string;
  title: string;
  subtitle: string;
  highlightBadge: string;
  stats: { value: string; label: string }[];
}

export const HERO_VISUAL_META: SlideVisualMeta[] = [
  {
    photoSrc: "/images/case-studies/modern-web-finance.jpg",
    photoAlt: "Eksekutif bisnis mengakses website korporat cepat di ponsel dan laptop",
    uiScreenSrc: "/images/hero-slide-web.webp",
    uiScreenAlt: "Pratinjau Antarmuka Website Korporat Cepat Abinest",
    contextTag: "Web Korporat · Jakarta",
    shortLabel: "Web Cepat",
    title: "Website Korporat & Landing Page",
    subtitle: "Muat 0,48 detik di HP · Skor Google 100/100",
    highlightBadge: "+180% Prospek",
    stats: [
      { value: "0,48 dtk", label: "Muat HP" },
      { value: "100/100", label: "PageSpeed" },
      { value: "100%", label: "Hak Milik" },
    ],
  },
  {
    photoSrc: "/images/case-studies/erp-multi-warehouse.jpg",
    photoAlt: "Supervisor operasional memantau stok multi-gudang melalui tablet",
    uiScreenSrc: "/images/hero-slide-erp.webp",
    uiScreenAlt: "Pratinjau Dasbor Sistem ERP dan Kasir POS Abinest",
    contextTag: "Operasional 4 Gudang",
    shortLabel: "ERP & POS",
    title: "Sistem ERP, Kasir POS & SIAKAD",
    subtitle: "Stok multi-gudang, kasir cabang & ujian CBT",
    highlightBadge: "Rp0 / Staf",
    stats: [
      { value: "18.420", label: "Stok SKU" },
      { value: "0%", label: "Selisih" },
      { value: "Rp0", label: "Per Staf" },
    ],
  },
  {
    photoSrc: "/images/case-studies/siakad-education-portal.jpg",
    photoAlt: "Operasional sistem terpusat dan automasi dokumen digital",
    uiScreenSrc: "/images/hero-slide-ai.webp",
    uiScreenAlt: "Pratinjau Asisten WhatsApp Cloud API Resmi & Pembaca Faktur OCR",
    contextTag: "Meta Cloud API · 24/7",
    shortLabel: "WA & AI",
    title: "Automasi WhatsApp AI & Faktur",
    subtitle: "Balas chat <1 detik & input nota PDF ke ERP",
    highlightBadge: "OCR 99,7%",
    stats: [
      { value: "< 1 dtk", label: "Balas AI" },
      { value: "99,7%", label: "Akurasi" },
      { value: "24/7", label: "Meta Resmi" },
    ],
  },
];

/**
 * Editorial Hybrid Image + UI Product Showcase Frame.
 * Combines real documentary photography with an inset high-resolution WebP UI preview
 * and clean monochrome metrics — works seamlessly on both Desktop and Mobile.
 */
export function HeroShowcaseFrame({
  activeIdx,
  onSelect,
  className = "",
}: HeroShowcaseFrameProps) {
  const activeSlide = HERO_SLIDES[activeIdx] ?? HERO_SLIDES[0];
  const meta = HERO_VISUAL_META[activeIdx] ?? HERO_VISUAL_META[0];

  return (
    <div className={`relative ${className}`}>
      <div className="rounded-[26px] bg-white p-3 sm:p-4 shadow-[0_24px_60px_-15px_rgba(15,23,42,0.12)] ring-1 ring-slate-900/[0.08] space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="space-y-2.5"
          >
            {/* 1. Real Editorial Photography Stage */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900">
              <Image
                src={meta.photoSrc}
                alt={meta.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 560px"
                className="object-cover object-center"
              />
              {/* Subtle Dark Editorial Vignette for Legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-slate-950/35"
              />

              {/* Top Context Pill + Highlight Badge */}
              <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-950/75 backdrop-blur-md text-white text-[10.5px] sm:text-[11px] font-medium ring-1 ring-white/15 min-w-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="truncate">{meta.contextTag}</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/95 text-[#0F172A] font-mono text-[10px] sm:text-[10.5px] font-bold shadow-sm shrink-0 whitespace-nowrap">
                  {meta.highlightBadge}
                </span>
              </div>

              {/* Bottom Caption Over Photo */}
              <div className="absolute bottom-2.5 left-3 right-3 text-white">
                <div className="text-[13.5px] sm:text-base font-bold tracking-tight text-white leading-snug">
                  {meta.title}
                </div>
                <div className="text-[11px] sm:text-[11.5px] text-slate-200 leading-snug mt-0.5">
                  {meta.subtitle}
                </div>
              </div>
            </div>

            {/* 2. Combined Product UI Screen Preview + 3 Key Metrics */}
            <div className="rounded-2xl bg-[#F8FAFC] p-2.5 sm:p-3 ring-1 ring-slate-200/80 flex items-center gap-2.5 sm:gap-3">
              {/* Crisp WebP Product Interface Preview Thumbnail */}
              <div className="relative w-20 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden bg-white ring-1 ring-slate-200/90 shadow-sm shrink-0">
                <Image
                  src={meta.uiScreenSrc}
                  alt={meta.uiScreenAlt}
                  fill
                  sizes="120px"
                  className="object-cover object-top"
                />
              </div>

              {/* 3 Restrained Monochrome Telemetry Tiles */}
              <div className="flex-1 grid grid-cols-3 gap-1.5 text-center">
                {meta.stats.map((st) => (
                  <div
                    key={st.label}
                    className="rounded-xl bg-white py-2 px-1 ring-1 ring-slate-200/60"
                  >
                    <div className="text-[11.5px] sm:text-[13px] font-bold text-[#0F172A] leading-tight whitespace-nowrap">
                      {st.value}
                    </div>
                    <div className="text-[9.5px] sm:text-[10px] text-[#475569] mt-0.5 whitespace-nowrap">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3. Visual Thumbnail Selector Strip (Full-bleed mini photo cards on mobile, zero text truncation) */}
        {onSelect && (
          <div className="grid grid-cols-3 gap-2 pt-0.5">
            {HERO_SLIDES.map((s, idx) => {
              const isSelected = idx === activeIdx;
              const itemMeta = HERO_VISUAL_META[idx] ?? HERO_VISUAL_META[0];
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => onSelect(idx)}
                  className={`group flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 p-1.5 rounded-xl text-left transition-all cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-[#0F172A] text-white shadow-sm ring-1 ring-[#0F172A]"
                      : "bg-[#F8FAFC] hover:bg-slate-100 text-[#0F172A] ring-1 ring-slate-200/80"
                  }`}
                >
                  <div className="relative w-full h-10 sm:w-10 sm:h-7 rounded-lg overflow-hidden bg-slate-200 shrink-0">
                    <Image
                      src={itemMeta.uiScreenSrc}
                      alt={s.label}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1 px-0.5 sm:px-0">
                    <div
                      className={`font-mono text-[9.5px] leading-none ${
                        isSelected ? "text-slate-300" : "text-slate-400"
                      }`}
                    >
                      {s.number}
                    </div>
                    <div className="text-[10.5px] sm:text-[11px] font-semibold whitespace-nowrap mt-0.5">
                      {itemMeta.shortLabel}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Trust Strip */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-[11px] sm:text-[11.5px] text-[#475569] px-1">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#0F172A] whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0F172A] shrink-0" />
            <span>100% Hak Milik Kode</span>
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-medium whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>Garansi Bug 90 Hari</span>
          </span>
        </div>
      </div>
    </div>
  );
}
