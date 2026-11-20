"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_SLIDES } from "./hero-slides";

interface HeroSyncedHeadlineProps {
  className: string;
}

/**
 * Primary editorial headline with Abinest Cobalt-to-Teal accent framing.
 */
export function HeroSyncedHeadline({ className }: HeroSyncedHeadlineProps) {
  return (
    <h1 className={className}>
      Kami Membangun Sistem yang{" "}
      <span className="bg-gradient-to-r from-[#0070F3] via-sky-500 to-teal-500 bg-clip-text text-transparent">
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

/**
 * Interactive lead copy synced with the hero carousel so each highlighted
 * capability responds to clicks and active slide transitions.
 */
export function HeroSyncedIntro({
  activeIdx,
  onSelect,
  className,
}: HeroSyncedIntroProps) {
  const segmentStyle = (idx: number) => {
    const isActive = activeIdx === idx;
    return `inline transition-colors duration-300 ${
      onSelect ? "cursor-pointer" : ""
    } ${
      isActive
        ? "font-semibold text-[#0A0A0A] underline decoration-[#0070F3] underline-offset-4"
        : "font-medium text-[#0A0A0A] hover:text-[#0070F3]"
    }`;
  };

  const renderSegment = (idx: number, label: string) => (
    <span
      role={onSelect ? "button" : undefined}
      tabIndex={onSelect ? 0 : undefined}
      onClick={() => onSelect?.(idx)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect?.(idx);
        }
      }}
      className={segmentStyle(idx)}
    >
      {label}
    </span>
  );

  return (
    <p className={className}>
      {renderSegment(0, "Website")}, {renderSegment(1, "ERP, SIAKAD, POS")},
      hingga {renderSegment(2, "Automasi AI/ML")}. Dibangun cepat, aman, dan
      siap bertumbuh bersama bisnis Anda.
    </p>
  );
}

interface HeroSyncedDescriptionProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
  variant: "desktop" | "mobile";
}

/**
 * Interactive pillar selector paired with an overlapping CSS-grid description
 * stack so switching slides never triggers vertical layout shift (CLS).
 */
export function HeroSyncedDescription({
  activeIdx,
  onSelect,
  variant,
}: HeroSyncedDescriptionProps) {
  const isDesktop = variant === "desktop";
  const idPrefix = isDesktop ? "hero" : "m-hero";

  return (
    <div className={isDesktop ? "space-y-3.5 max-w-lg" : "space-y-3"}>
      <div
        role="tablist"
        aria-label="Fokus layanan Abinest"
        className={
          isDesktop
            ? "inline-flex items-center p-1 rounded-full bg-neutral-100 border border-[#EAEAEA]"
            : "flex items-center justify-between gap-1 p-1 rounded-full bg-neutral-100 border border-[#EAEAEA]"
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
              className={`relative rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 font-medium ${
                isDesktop
                  ? "px-3.5 py-1.5 text-[12.5px]"
                  : "flex-1 py-1.5 px-2 text-center text-[11px] sm:text-[12px]"
              } ${
                isActive
                  ? "text-[#0A0A0A] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                  : "text-[#666666] hover:text-[#0A0A0A]"
              }`}
            >
              {isDesktop && (
                <span className="font-mono text-[10.5px] mr-1.5 text-neutral-400">
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
              className={`col-start-1 row-start-1 leading-relaxed font-normal text-[#666666] transition-all duration-500 ${
                isDesktop ? "text-[16px]" : "text-[14px]"
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
  sizes: string;
  className: string;
}

/**
 * Vercel Geist Translucent Stage wrapping the synchronized hero slide visuals.
 */
export function HeroShowcaseFrame({
  activeIdx,
  sizes,
  className,
}: HeroShowcaseFrameProps) {
  return (
    <div
      className={`p-2 rounded-2xl bg-gradient-to-b from-white to-[#FAFAFA] border border-[#EAEAEA] shadow-[0_24px_60px_-15px_rgba(0,0,0,0.07)] ${className}`}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-100 border border-[#EAEAEA]/80">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            aria-hidden={idx !== activeIdx}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              idx === activeIdx
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-[1.02] z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes={sizes}
              className="object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
