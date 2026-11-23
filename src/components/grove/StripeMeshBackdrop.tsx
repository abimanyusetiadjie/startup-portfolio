"use client";

/**
 * Stripe-inspired 60fps animated diagonal liquid mesh gradient backdrop
 * calibrated exclusively to Abinest's Ocean Blue (#0284C7), Sky Cyan (#0EA5E9),
 * and Teal Mint (#00C9A7) brand DNA — zero clashing purple/pink casts.
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
      {/* Base Soft Luminous Arctic Gradient */}
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          activeIdx === 1
            ? "bg-gradient-to-br from-[#ECFEFF] via-[#F0FDFA] to-[#EFF6FF]"
            : activeIdx === 2
              ? "bg-gradient-to-br from-[#F0F9FF] via-[#ECFEFF] to-[#F0FDFA]"
              : "bg-gradient-to-br from-[#EFF6FF] via-[#F0F9FF] to-[#ECFEFF]"
        }`}
      />

      {/* Morphing Liquid Orb 1 — Abinest Ocean Cobalt */}
      <div className="animate-mesh-a absolute -top-28 -left-16 w-[540px] h-[540px] rounded-full bg-[#0284C7]/25 blur-[95px] will-change-transform" />

      {/* Morphing Liquid Orb 2 — Luminous Sky Cyan */}
      <div className="animate-mesh-b absolute top-4 right-[8%] w-[560px] h-[460px] rounded-full bg-[#0EA5E9]/30 blur-[95px] will-change-transform" />

      {/* Morphing Liquid Orb 3 — Signature Abinest Teal Mint */}
      <div className="animate-mesh-c absolute -top-16 right-[-6%] w-[460px] h-[440px] rounded-full bg-gradient-to-tr from-[#00C9A7]/30 via-[#2DD4BF]/25 to-[#38BDF8]/20 blur-[90px] will-change-transform" />

      {/* Morphing Liquid Orb 4 — Deep Seafoam Accent when ERP Slide Active */}
      <div
        className={`absolute bottom-0 left-[30%] w-[480px] h-[360px] rounded-full bg-[#0D9488]/25 blur-[95px] transition-opacity duration-700 ${
          activeIdx === 1 ? "opacity-100" : "opacity-40"
        }`}
      />

      {/* Soft Bottom Fade into Pure White */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white/85 to-transparent" />
    </div>
  );
}
