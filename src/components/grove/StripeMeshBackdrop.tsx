"use client";

/**
 * Clean, restrained architectural daylight backdrop.
 * Zero AI-generic multi-color blurred neon blobs — uses a subtle neutral
 * alabaster-to-white daylight wash and fine architectural dot matrix.
 */
export function StripeMeshBackdrop({ activeIdx = 0 }: { activeIdx?: number }) {
  void activeIdx;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-x-0 top-0 h-[520px] lg:h-[580px] overflow-hidden -z-0"
    >
      {/* Subtle Neutral Daylight Surface Wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC] via-[#F8FAFC]/70 to-white" />

      {/* Whisper-Soft Architectural Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#CBD5E1 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.15) 70%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.15) 70%, transparent)",
        }}
      />
    </div>
  );
}
