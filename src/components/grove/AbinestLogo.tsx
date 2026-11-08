"use client";

interface AbinestLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
}

export function AbinestLogo({
  className = "",
  showTagline = false,
  size = "md",
}: AbinestLogoProps) {
  const iconSize =
    size === "sm" ? "w-7 h-7" : size === "lg" ? "w-11 h-11" : "w-8 h-8";
  const titleSize =
    size === "sm"
      ? "text-base tracking-wider"
      : size === "lg"
      ? "text-2xl tracking-[0.15em]"
      : "text-lg tracking-[0.12em]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Abinest Interwoven Nest / Digital Network SVG */}
      <svg
        className={`${iconSize} shrink-0`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer orbital arcs */}
        <path
          d="M 28 25 C 12 40, 14 70, 32 82 C 50 94, 78 88, 86 68 C 92 52, 85 32, 70 20 C 58 12, 42 12, 30 20"
          stroke="#1E293B"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Inner network cross-threads */}
        <path
          d="M 22 45 C 35 60, 60 75, 78 62"
          stroke="#1E293B"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 28 65 C 45 78, 68 70, 84 48"
          stroke="#1E293B"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M 32 32 C 48 45, 65 52, 80 38"
          stroke="#1E293B"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M 20 54 C 40 48, 62 58, 76 76"
          stroke="#1E293B"
          strokeWidth="2.4"
          strokeLinecap="round"
        />

        {/* Navy Interconnected Nodes */}
        <circle cx="28" cy="25" r="4.5" fill="#1E293B" />
        <circle cx="70" cy="20" r="4.2" fill="#1E293B" />
        <circle cx="86" cy="68" r="4.2" fill="#1E293B" />
        <circle cx="32" cy="82" r="4.2" fill="#1E293B" />
        <circle cx="22" cy="45" r="3.8" fill="#1E293B" />
        <circle cx="78" cy="62" r="3.8" fill="#1E293B" />
        <circle cx="48" cy="66" r="3.4" fill="#1E293B" />
        <circle cx="62" cy="48" r="3.4" fill="#1E293B" />

        {/* Signature Orange Accent Node from Reference Logo */}
        <circle cx="82" cy="42" r="4.8" fill="#FF7A00" />
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-black text-[#0F172A] leading-none uppercase ${titleSize}`}
          style={{ letterSpacing: "0.14em" }}
        >
          ABINEST
        </span>
        {showTagline && (
          <span className="text-[9px] uppercase tracking-[0.2em] text-[#64748B] font-medium mt-1">
            IT Services for UMKM &amp; Institusi
          </span>
        )}
      </div>
    </div>
  );
}
