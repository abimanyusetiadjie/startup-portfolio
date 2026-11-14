"use client";

import React, { useId } from "react";

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
  const gradId = useId();
  const isDark = variant === "dark";

  // Calibrate sleek upright icon heights & balanced wordmark typography
  const iconHeight =
    size === "sm"
      ? "h-5"
      : size === "lg"
      ? "h-7 sm:h-8"
      : size === "xl"
      ? "h-9"
      : "h-[22px] sm:h-6";

  const fontSize =
    size === "sm"
      ? "text-[17px]"
      : size === "lg"
      ? "text-xl sm:text-2xl"
      : size === "xl"
      ? "text-2xl sm:text-3xl"
      : "text-[19px] sm:text-[20px]";

  return (
    <div
      className={`inline-flex items-center gap-2 select-none group ${className}`}
    >
      {/* Sleek Upright Geometric Abinest Monogram */}
      <svg
        className={`${iconHeight} w-auto shrink-0 transition-transform duration-300 group-hover:scale-[1.03]`}
        viewBox="0 0 49 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={`${gradId}-teal`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00E5BE" />
            <stop offset="100%" stopColor="#00C9A7" />
          </linearGradient>
          <linearGradient
            id={`${gradId}-blue`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00B4D8" />
            <stop offset="100%" stopColor="#2496ED" />
          </linearGradient>
        </defs>

        {/* 1. Sleek Left-to-Apex Arch & Thin Crossbar */}
        <path
          d="M 26.3 2.0 L 19.5 2.0 L 1.5 54.0 L 8.3 54.0 L 14.0 37.5 L 31.8 37.5 L 29.8 31.7 L 16.0 31.7 Z"
          fill={isDark ? "#FFFFFF" : "#0B1220"}
          className="transition-colors duration-200"
        />

        {/* 2. Upper Right Thin Facet (Teal Mint Gradient) */}
        <path
          d="M 29.0 2.5 L 25.5 12.1 L 32.3 31.7 L 39.1 31.7 Z"
          fill={`url(#${gradId}-teal)`}
        />

        {/* 3. Lower Right Thin Facet (Docker Blue Gradient) */}
        <path
          d="M 33.5 35.2 L 40.0 54.0 L 46.8 54.0 L 40.3 35.2 Z"
          fill={`url(#${gradId}-blue)`}
        />
      </svg>

      {/* Official Abinest Wordmark with balanced bold weight */}
      {!iconOnly && (
        <span
          className={`${fontSize} font-bold font-sans tracking-[-0.025em] leading-none inline-flex items-baseline`}
        >
          {/* "Abi" in Docker Blue on hover */}
          <span
            className={`transition-colors duration-300 ease-out ${
              isDark
                ? "text-white group-hover:text-[#38BDF8]"
                : "text-[#0B1220] group-hover:text-[#2496ED]"
            }`}
          >
            Abi
          </span>
          {/* "nest" in Teal Mint on hover */}
          <span
            className={`transition-colors duration-300 ease-out ${
              isDark
                ? "text-white group-hover:text-[#00E5BE]"
                : "text-[#0B1220] group-hover:text-[#00C9A7]"
            }`}
          >
            nest
          </span>
        </span>
      )}

      {/* Optional Editorial Sub-tagline */}
      {showTagline && (
        <span
          className={`hidden sm:inline-block text-[10px] tracking-[0.14em] font-bold pl-2.5 border-l uppercase ${
            isDark
              ? "text-slate-400 border-slate-700"
              : "text-slate-500 border-slate-300"
          }`}
        >
          Web · ERP · AI/ML
        </span>
      )}
    </div>
  );
}
