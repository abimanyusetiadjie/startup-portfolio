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
      card: isBeliPutus
        ? "bg-[#0F172A] text-white border border-teal-500/40 ring-1 ring-teal-400/20 shadow-[0_20px_48px_rgba(15,23,42,0.18)]"
        : "bg-[#0F172A] text-white border border-blue-500/40 ring-1 ring-blue-400/20 shadow-[0_20px_48px_rgba(15,23,42,0.18)]",
      icon: isBeliPutus ? "text-teal-400" : "text-blue-400",
      title: "text-white",
      badge: isBeliPutus
        ? "bg-teal-500/15 text-teal-300 border border-teal-400/25 px-2.5 py-0.5 rounded-full"
        : "bg-blue-500/15 text-blue-300 border border-blue-400/25 px-2.5 py-0.5 rounded-full",
      price: "text-white",
      summary: "text-slate-300",
      divider: "border-slate-800",
      check: isBeliPutus ? "text-teal-400" : "text-blue-400",
      featureText: "text-slate-200",
      button: isBeliPutus
        ? "bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold"
        : "bg-blue-600 hover:bg-blue-500 text-white",
    };
  }

  return {
    card: "bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)]",
    icon: isBeliPutus ? "text-teal-600" : "text-blue-600",
    title: "text-slate-900",
    badge: isBeliPutus ? "text-teal-700" : "text-blue-600",
    price: "text-slate-900",
    summary: "text-slate-600",
    divider: "border-slate-100",
    check: isBeliPutus ? "text-teal-600" : "text-blue-600",
    featureText: "text-slate-700",
    button: "bg-slate-900 hover:bg-slate-800 text-white",
  };
}
