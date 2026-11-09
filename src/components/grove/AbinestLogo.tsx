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
  const iconHeight = size === "sm" ? "h-6" : size === "lg" ? "h-9" : "h-7";
  const fontSize =
    size === "sm"
      ? "text-lg tracking-tight"
      : size === "lg"
      ? "text-2xl tracking-tight"
      : "text-xl tracking-tight";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none group ${className}`}>
      {/* Authentic Abinest Brand Identity: Monogram Icon + Full Official Wordmark */}
      <div className="flex items-center gap-2">
        {/* Stylized bespoke geometric 'A' monogram with signature diagonal split */}
        <svg
          className={`${iconHeight} w-auto shrink-0`}
          viewBox="0 0 32 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Disconnected left angular slash */}
          <line
            x1="5"
            y1="28"
            x2="11.5"
            y2="7"
            stroke="#0F172A"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Right diagonal stroke converging toward apex */}
          <path
            d="M 14.5 6.5 L 26.5 28"
            stroke="#0F172A"
            strokeWidth="3.4"
            strokeLinecap="round"
          />
          {/* Signature horizontal crossbar */}
          <line
            x1="12"
            y1="19"
            x2="22.5"
            y2="19"
            stroke="#0F172A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Subtle Electric Cobalt accent node */}
          <circle cx="20.5" cy="11.5" r="1.6" fill="#2563EB" />
        </svg>

        {/* Full Official Brand Wordmark 'Abinest' */}
        <span
          className={`${fontSize} font-extrabold text-[#0F172A] tracking-[-0.03em] group-hover:text-[#2563EB] transition-colors`}
        >
          Abinest
        </span>
      </div>

      {showTagline && (
        <span className="hidden sm:inline-block text-[10px] uppercase tracking-[0.16em] text-blue-900 font-bold pl-2.5 border-l border-slate-300">
          Web · ERP · AI/ML
        </span>
      )}
    </div>
  );
}
