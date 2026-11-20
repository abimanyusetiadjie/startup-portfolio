export interface PricingCardTheme {
  card: string;
  icon: string;
  title: string;
  badge: string;
  price: string;
  summary: string;
  divider: string;
  check: string;
  featureText: string;
  button: string;
}

/**
 * Shared light/Obsidian Slate (#0F172A) styling tokens for desktop and mobile
 * pricing cards so the featured tier stands out cleanly in both viewports.
 */
export function getPricingCardTheme(
  isPopular: boolean,
  isBeliPutus: boolean
): PricingCardTheme {
  if (isPopular) {
    return {
      card: "bg-[#0A0A0A] text-white border border-neutral-800 shadow-[0_20px_50px_rgba(0,0,0,0.12)]",
      icon: isBeliPutus ? "text-emerald-400" : "text-[#0070F3]",
      title: "text-white",
      badge:
        "bg-white/10 text-white border border-white/15 px-2.5 py-0.5 rounded-full font-mono text-[11px]",
      price: "text-white",
      summary: "text-neutral-400",
      divider: "border-neutral-800",
      check: isBeliPutus ? "text-emerald-400" : "text-[#38BDF8]",
      featureText: "text-neutral-200",
      button:
        "bg-white hover:bg-neutral-200 text-[#0A0A0A] font-medium rounded-full",
    };
  }

  return {
    card: "bg-white border border-[#EAEAEA] hover:border-neutral-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]",
    icon: "text-[#0A0A0A]",
    title: "text-[#0A0A0A]",
    badge: "text-[#666666]",
    price: "text-[#0A0A0A]",
    summary: "text-[#666666]",
    divider: "border-[#EAEAEA]",
    check: "text-[#0A0A0A]",
    featureText: "text-[#404040]",
    button:
      "bg-[#0A0A0A] hover:bg-neutral-800 text-white font-medium rounded-full",
  };
}
