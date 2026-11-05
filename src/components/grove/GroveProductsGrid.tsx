"use client";

interface GroveProductsGridProps {
  isTechMode?: boolean;
}

const GROVE_PLANTS = [
  {
    id: "zebra-haworthia",
    badge: "Easy-care",
    name: "Zebra Haworthia",
    price: "£18",
    subtitle: "Low light • 14cm pot",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop",
    btnLabel: "Add to bag",
    // Tech variant
    techBadge: "EdTech Core",
    techName: "SIAKAD Modern v2.4",
    techPrice: "SLA 99.9%",
    techSub: "Next.js 15 • PostgreSQL RLS",
    techBtn: "Pelajari Sistem",
  },
  {
    id: "ball-cactus",
    badge: "In flower",
    name: "Ball Cactus",
    price: "£22",
    subtitle: "Bright sun • 10cm pot",
    image: "https://images.unsplash.com/photo-1519336367661-ebd9c4d41e9a?q=80&w=800&auto=format&fit=crop",
    btnLabel: "Add to bag",
    // Tech variant
    techBadge: "PDF Worker",
    techName: "Parallel Report Engine",
    techPrice: "500 PDF/<45s",
    techSub: "Upstash QStash • S3 Signed",
    techBtn: "Pelajari Sistem",
  },
  {
    id: "ginseng-ficus",
    badge: "Statement",
    name: "Ginseng Ficus",
    price: "£45",
    subtitle: "Bright indirect • 18cm pot",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
    btnLabel: "Add to bag",
    // Tech variant
    techBadge: "Omnichannel",
    techName: "Atomic Stock Hub",
    techPrice: "< 150ms Sync",
    techSub: "Supabase Realtime • 4 MP",
    techBtn: "Pelajari Sistem",
  },
  {
    id: "cut-eucalyptus",
    badge: "Fresh bundle",
    name: "Cut Eucalyptus",
    price: "£12",
    subtitle: "Vase ready • Lasts 3 weeks",
    image: "https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?q=80&w=800&auto=format&fit=crop",
    btnLabel: "Add to bag",
    // Tech variant
    techBadge: "WhatsApp API",
    techName: "Resilient WA Gateway",
    techPrice: "< 2s Dispatch",
    techSub: "Exponential Backoff 5x",
    techBtn: "Pelajari Sistem",
  },
];

export function GroveProductsGrid({ isTechMode = false }: GroveProductsGridProps) {
  return (
    <section id="favourites" className="bg-[#F4F1EA] py-16 sm:py-20 font-sans border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-baseline justify-between mb-8 sm:mb-10">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A201C]">
            {isTechMode ? "Sistem Pilihan Unggulan" : "This week's favourites"}
          </h2>
          <a
            href={isTechMode ? "#feature-box" : "#"}
            className="text-xs sm:text-sm text-[#717872] underline hover:text-[#18362B] transition-colors"
          >
            {isTechMode ? "Lihat Semua Studi Kasus →" : "View all 42 plants →"}
          </a>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {GROVE_PLANTS.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-[#E5E0D5] p-3 sm:p-3.5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#18362B]/40 transition-all duration-300"
            >
              <div>
                {/* Product Image Container with Badge */}
                <div className="relative aspect-square rounded-lg bg-[#FAF9F6] border border-[#F0ECE4] overflow-hidden mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={isTechMode ? item.techName : item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-medium text-[#1A201C] border border-black/5 shadow-xs">
                    {isTechMode ? item.techBadge : item.badge}
                  </div>
                </div>

                {/* Info Row: Title & Price */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-heading text-xs sm:text-sm font-bold text-[#1A201C] group-hover:text-[#18362B] transition-colors">
                    {isTechMode ? item.techName : item.name}
                  </h3>
                  <span className="font-mono text-xs sm:text-sm font-semibold text-[#18362B]">
                    {isTechMode ? item.techPrice : item.price}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[11px] sm:text-xs text-[#717872] mt-0.5 mb-4">
                  {isTechMode ? item.techSub : item.subtitle}
                </p>
              </div>

              {/* Action Button: Pill Outline */}
              <button
                type="button"
                className="w-full py-1.5 sm:py-2 px-3 rounded-full border border-[#D5D0C4] bg-white text-xs font-semibold text-[#1A201C] hover:border-[#18362B] hover:bg-[#18362B] hover:text-white transition-all duration-200 text-center"
              >
                {isTechMode ? item.techBtn : item.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
