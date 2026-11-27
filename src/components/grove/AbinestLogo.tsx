"use client";

import React from "react";

interface AbinestLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "light" | "dark";
  iconOnly?: boolean;
}

export function AbinestLogo({
  className = "",
  showTagline = false,
  size = "md",
  variant = "light",
  iconOnly = false,
}: AbinestLogoProps) {
  const isDark = variant === "dark";
  const ink = isDark ? "#FFFFFF" : "#111111";
  const accentFacet = isDark ? "#A1A1AA" : "#6B7280";

  const iconHeight =
    size === "sm"
      ? "h-5"
      : size === "lg"
      ? "h-7 sm:h-8"
      : size === "xl"
      ? "h-9"
      : "h-[21px] sm:h-[22px]";

  const fontSize =
    size === "sm"
      ? "text-[17px]"
      : size === "lg"
      ? "text-xl sm:text-2xl"
      : size === "xl"
      ? "text-2xl sm:text-3xl"
      : "text-[19px] sm:text-[21px]";

  return (
    <div
      className={`inline-flex items-center gap-2 select-none group ${className}`}
    >
      {/* Pure Swiss Monochrome Abinest Geometric Monogram */}
      <svg
        className={`${iconHeight} w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.03]`}
        viewBox="0 0 49 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 26.3 2.0 L 19.5 2.0 L 1.5 54.0 L 8.3 54.0 L 14.0 37.5 L 31.8 37.5 L 29.8 31.7 L 16.0 31.7 Z"
          fill={ink}
        />
        <path
          d="M 29.0 2.5 L 25.5 12.1 L 32.3 31.7 L 39.1 31.7 Z"
          fill={ink}
        />
        <path
          d="M 33.5 35.2 L 40.0 54.0 L 46.8 54.0 L 40.3 35.2 Z"
          fill={accentFacet}
        />
      </svg>

      {!iconOnly && (
        <span
          className={`${fontSize} font-bold font-sans tracking-[-0.03em] leading-none transition-opacity duration-200 group-hover:opacity-75 ${
            isDark ? "text-white" : "text-[#111111]"
          }`}
        >
          Abinest
        </span>
      )}

      {showTagline && (
        <span
          className={`hidden sm:inline-block text-[10px] tracking-[0.12em] font-mono pl-2.5 border-l uppercase ${
            isDark
              ? "text-[#A0A0A2] border-[#2E2E2E]"
              : "text-[#6F6F71] border-[#E8E8E8]"
          }`}
        >
          Web · ERP · AI
        </span>
      )}
    </div>
  );
}
