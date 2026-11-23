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
 * Abinest signature midnight-navy featured card + floating white cards.
 */
export function getPricingCardTheme(
  isPopular: boolean,
  isBeliPutus: boolean
): PricingCardTheme {
  if (isPopular) {
    return {
      card: "bg-gradient-to-br from-[#081629] via-[#0D2542] to-[#0B3B54] text-white shadow-[0_28px_65px_-12px_rgba(2,132,199,0.32)] ring-1 ring-white/15",
      icon: isBeliPutus ? "text-[#00E5BE]" : "text-[#38BDF8]",
      title: "text-white",
      badge:
        "bg-gradient-to-r from-[#0EA5E9]/20 to-[#00C9A7]/25 text-[#00E5BE] ring-1 ring-[#00C9A7]/35 px-3 py-0.5 rounded-full font-semibold text-[11px]",
      price: "text-white",
      summary: "text-slate-300",
      divider: "border-white/10",
      check: isBeliPutus ? "text-[#00E5BE]" : "text-[#38BDF8]",
      featureText: "text-slate-200",
      button: isBeliPutus
        ? "bg-gradient-to-r from-[#00C9A7] to-[#2DD4BF] hover:brightness-110 text-[#081629] font-bold rounded-full shadow-[0_8px_20px_rgba(0,201,167,0.3)]"
        : "bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:brightness-110 text-white font-semibold rounded-full shadow-[0_8px_20px_rgba(14,165,233,0.3)]",
    };
  }

  return {
    card: "bg-white shadow-[0_20px_50px_-15px_rgba(8,22,41,0.08)] hover:shadow-[0_28px_60px_-15px_rgba(2,132,199,0.16)] ring-1 ring-slate-900/[0.05]",
    icon: "text-[#0284C7]",
    title: "text-[#081629]",
    badge: "text-[#0284C7]",
    price: "text-[#081629]",
    summary: "text-[#475569]",
    divider: "border-slate-100",
    check: isBeliPutus ? "text-[#0D9488]" : "text-[#0284C7]",
    featureText: "text-[#475569]",
    button:
      "bg-[#081629] hover:bg-[#0284C7] text-white font-semibold rounded-full transition-colors",
  };
}
