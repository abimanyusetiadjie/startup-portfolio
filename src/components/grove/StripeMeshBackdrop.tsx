"use client";

/**
 * Stripe-inspired 60fps animated diagonal liquid mesh gradient backdrop.
 * GPU-accelerated blurred color orbs shift smoothly behind the hero without
 * heavy WebGL bundle overhead.
 */
export function StripeMeshBackdrop({ activeIdx = 0 }: { activeIdx?: number }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none select-none absolute inset-x-0 top-0 h-[560px] lg:h-[620px] overflow-hidden -z-0"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 62%, 0 92%)",
      }}
    >
      {/* Base Soft Luminous Gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          activeIdx === 1
            ? "bg-gradient-to-br from-[#EEF2FF] via-[#ECFEFF] to-[#ECFDF5]"
            : activeIdx === 2
              ? "bg-gradient-to-br from-[#F5F3FF] via-[#FDF2F8] to-[#ECFEFF]"
              : "bg-gradient-to-br from-[#EEF2FF] via-[#F0F9FF] to-[#FFF1F2]"
        }`}
      />

      {/* Morphing Liquid Orb 1 — Electric Indigo */}
      <div className="animate-mesh-a absolute -top-28 -left-16 w-[520px] h-[520px] rounded-full bg-[#635BFF]/30 blur-[90px] will-change-transform" />

      {/* Morphing Liquid Orb 2 — Vibrant Sky Cyan */}
      <div className="animate-mesh-b absolute top-4 right-[10%] w-[540px] h-[460px] rounded-full bg-[#00D4FF]/30 blur-[95px] will-change-transform" />

      {/* Morphing Liquid Orb 3 — Warm Coral Rose & Amber */}
      <div className="animate-mesh-c absolute -top-20 right-[-6%] w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#FF5E8E]/28 via-[#FF9A5A]/25 to-[#FFCB45]/25 blur-[85px] will-change-transform" />

      {/* Morphing Liquid Orb 4 — Emerald Accent when ERP Slide Active */}
      <div
        className={`absolute bottom-0 left-[32%] w-[460px] h-[360px] rounded-full bg-[#10B981]/25 blur-[95px] transition-opacity duration-700 ${
          activeIdx === 1 ? "opacity-100" : "opacity-35"
        }`}
      />

      {/* Soft Bottom Fade into Pure White */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/75 to-transparent" />
    </div>
  );
}
