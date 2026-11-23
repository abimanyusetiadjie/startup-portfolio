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
 * Stripe-inspired luminous midnight-indigo featured card + floating white cards.
 */
export function getPricingCardTheme(
  isPopular: boolean,
  isBeliPutus: boolean
): PricingCardTheme {
  if (isPopular) {
    return {
      card: "bg-gradient-to-br from-[#0A2540] via-[#123056] to-[#1D1B54] text-white shadow-[0_28px_65px_-12px_rgba(99,91,255,0.34)] ring-1 ring-white/15",
      icon: isBeliPutus ? "text-emerald-400" : "text-[#00D4FF]",
      title: "text-white",
      badge:
        "bg-gradient-to-r from-[#00D4FF]/20 to-[#635BFF]/30 text-[#00D4FF] ring-1 ring-[#00D4FF]/30 px-3 py-0.5 rounded-full font-semibold text-[11px]",
      price: "text-white",
      summary: "text-slate-300",
      divider: "border-white/10",
      check: isBeliPutus ? "text-emerald-400" : "text-[#00D4FF]",
      featureText: "text-slate-200",
      button: isBeliPutus
        ? "bg-gradient-to-r from-emerald-400 to-teal-400 hover:brightness-110 text-[#0A2540] font-bold rounded-full shadow-[0_8px_20px_rgba(16,185,129,0.3)]"
        : "bg-gradient-to-r from-[#00D4FF] to-[#635BFF] hover:brightness-110 text-white font-semibold rounded-full shadow-[0_8px_20px_rgba(0,212,255,0.3)]",
    };
  }

  return {
    card: "bg-white shadow-[0_20px_50px_-15px_rgba(10,37,64,0.08)] hover:shadow-[0_28px_60px_-15px_rgba(99,91,255,0.16)] ring-1 ring-slate-900/[0.05]",
    icon: "text-[#635BFF]",
    title: "text-[#0A2540]",
    badge: "text-[#635BFF]",
    price: "text-[#0A2540]",
    summary: "text-[#425466]",
    divider: "border-slate-100",
    check: isBeliPutus ? "text-emerald-500" : "text-[#635BFF]",
    featureText: "text-[#425466]",
    button:
      "bg-[#0A2540] hover:bg-[#635BFF] text-white font-semibold rounded-full transition-colors",
  };
}
