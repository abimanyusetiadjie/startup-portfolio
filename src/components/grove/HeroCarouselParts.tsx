"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HERO_SLIDES } from "./hero-slides";

interface HeroSyncedHeadlineProps {
  activeIdx: number;
  conjunction: "dan" | "&";
  className: string;
}

/**
 * Headline whose active service segment smoothly highlights in brand blue
 * in sync with the active slide without shifting layout geometry.
 */
export function HeroSyncedHeadline({
  activeIdx,
  conjunction,
  className,
}: HeroSyncedHeadlineProps) {
  const activeColor = (idx: number) =>
    `transition-colors duration-300 ${
      activeIdx === idx ? "text-blue-600" : "text-slate-900"
    }`;

  return (
    <h1 className={className}>
      <span className={activeColor(0)}>Situs Web Cepat</span>,{" "}
      <span className={activeColor(1)}>Sistem ERP</span>, {conjunction}{" "}
      <span className={activeColor(2)}>Automasi AI.</span>
    </h1>
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
            ? "inline-flex items-center gap-6 border-b border-slate-200/80"
            : "flex items-center gap-4 border-b border-slate-200/80 pt-0.5 overflow-x-auto no-scrollbar"
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
              className={`relative transition-colors cursor-pointer whitespace-nowrap shrink-0 font-semibold ${
                isDesktop ? "pb-2.5 text-[13px]" : "pb-2 text-[12.5px]"
              } ${
                isActive
                  ? "text-blue-600"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              {isDesktop && (
                <span className="font-mono text-[11.5px] mr-1.5 opacity-80">
                  {slide.number}
                </span>
              )}
              <span>{slide.label}</span>
              {isDesktop ? (
                isActive && (
                  <motion.span
                    layoutId="hero-desktop-tab-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600"
                  />
                )
              ) : (
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                    isActive
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                />
              )}
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
              className={`col-start-1 row-start-1 leading-relaxed font-normal text-slate-600 transition-all duration-500 ${
                isDesktop ? "text-[17px]" : "text-[14.5px]"
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
 * Pure visual image carousel frame kept in sync with the hero slide state.
 */
export function HeroShowcaseFrame({
  activeIdx,
  sizes,
  className,
}: HeroShowcaseFrameProps) {
  return (
    <div className={className}>
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.src}
          aria-hidden={idx !== activeIdx}
          className={`absolute inset-0 transition-opacity duration-500 ${
            idx === activeIdx
              ? "opacity-100 z-10"
              : "opacity-0 z-0 pointer-events-none"
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
  );
}
