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
  void isBeliPutus;
  if (isPopular) {
    return {
      card: "bg-[#0F172A] text-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.25)] ring-1 ring-white/10",
      icon: "text-white",
      title: "text-white",
      badge:
        "bg-white/10 text-white ring-1 ring-white/20 px-3 py-0.5 rounded-full font-semibold text-[11px]",
      price: "text-white",
      summary: "text-slate-300",
      divider: "border-white/10",
      check: "text-emerald-400",
      featureText: "text-slate-200",
      button:
        "bg-white hover:bg-slate-100 text-[#0F172A] font-bold rounded-full shadow-sm",
    };
  }

  return {
    card: "bg-white shadow-[0_16px_42px_-15px_rgba(15,23,42,0.07)] hover:shadow-[0_24px_54px_-15px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80",
    icon: "text-[#0F172A]",
    title: "text-[#0F172A]",
    badge: "text-[#0F172A]",
    price: "text-[#0F172A]",
    summary: "text-[#475569]",
    divider: "border-slate-100",
    check: "text-[#0F172A]",
    featureText: "text-[#475569]",
    button:
      "bg-[#0F172A] hover:bg-slate-800 text-white font-semibold rounded-full transition-colors",
  };
}
