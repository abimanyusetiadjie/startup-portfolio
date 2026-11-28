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
  const ink = isDark ? "#FFFFFF" : "#111318";

  const iconHeight =
    size === "sm"
      ? "h-5"
      : size === "lg"
      ? "h-8 sm:h-9"
      : size === "xl"
      ? "h-10"
      : "h-[23px] sm:h-[25px]";

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
      {/* Soft Architectural Portal Arch "A" + Nest Core Monogram */}
      <svg
        className={`${iconHeight} w-auto shrink-0 transition-transform duration-200 group-hover:scale-[1.04]`}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 10 38.5 L 18.8 14 C 20.4 9.6, 27.6 9.6, 29.2 14 L 38 38.5"
          stroke={ink}
          strokeWidth="5.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="30.8" r="4.4" fill={ink} />
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
