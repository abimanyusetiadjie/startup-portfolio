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

  // Calibrate icon heights & wordmark typography sizes
  const iconHeight =
    size === "sm"
      ? "h-6"
      : size === "lg"
      ? "h-9"
      : size === "xl"
      ? "h-11"
      : "h-7 sm:h-[30px]";

  const fontSize =
    size === "sm"
      ? "text-lg"
      : size === "lg"
      ? "text-2xl"
      : size === "xl"
      ? "text-3xl"
      : "text-xl sm:text-[22px]";

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none group ${className}`}
    >
      {/* Official Geometric Abinest Monogram */}
      <svg
        className={`${iconHeight} w-auto shrink-0 transition-transform duration-300 group-hover:scale-[1.04]`}
        viewBox="0 0 100 62"
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

        {/* 1. Main Left-to-Apex Arch (Deep Charcoal in light mode, Pure White in dark mode) */}
        <path
          d="M 57.96 2.0 L 39.39 2.0 L 34.8 4.85 L 2.0 59.52 L 23.23 59.29 L 26.12 57.15 L 29.74 50.97 L 33.36 48.83 L 62.78 49.07 L 55.31 36.94 L 37.7 36.23 Z"
          fill={isDark ? "#FFFFFF" : "#0B1220"}
          className="transition-colors duration-200"
        />

        {/* 2. Upper Right Facet (Teal Mint Gradient: #00E5BE -> #00C9A7) */}
        <path
          d="M 62.54 2.71 L 50.96 21.25 L 53.14 25.53 L 59.65 35.99 L 83.05 36.23 Z"
          fill={`url(#${gradId}-teal)`}
        />

        {/* 3. Lower Right Facet (Docker Blue Gradient: #00B4D8 -> #2496ED) */}
        <path
          d="M 61.82 39.56 L 71.71 56.67 L 73.88 58.81 L 76.77 59.76 L 98.0 60.0 L 85.46 40.75 L 82.32 39.56 Z"
          fill={`url(#${gradId}-blue)`}
        />
      </svg>

      {/* Official Abinest Wordmark in Plus Jakarta Sans with dual-color hover split */}
      {!iconOnly && (
        <span
          className={`${fontSize} font-extrabold font-sans tracking-[-0.02em] leading-none inline-flex items-baseline`}
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
