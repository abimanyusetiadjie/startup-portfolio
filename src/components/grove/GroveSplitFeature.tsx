"use client";

interface GroveSplitFeatureProps {
  isTechMode?: boolean;
}

export function GroveSplitFeature({ isTechMode = false }: GroveSplitFeatureProps) {
  return (
    <section id="feature-box" className="bg-[#F4F1EA] py-12 sm:py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#DDD7C9] shadow-sm">
          {/* Left Side: Visual Flat Lay Image */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[460px] bg-[#EAE5D9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={
                isTechMode
                  ? "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                  : "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200&auto=format&fit=crop"
              }
              alt={isTechMode ? "Arsitektur Enterprise & Kode" : "Six desk succulents flat lay"}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[10px] font-mono">
              {isTechMode ? "📷 SLOT GAMBAR SISTEM / MOCKUP" : "FEATURED COLLECTION"}
            </div>
          </div>

          {/* Right Side: Solid Deep Forest Green Block (#18362B) */}
          <div className="bg-[#18362B] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="block text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-300/80 mb-2">
              {isTechMode ? "THE ENTERPRISE SUITE" : "THE DESK COLLECTION"}
            </span>

            {/* Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-white mb-4">
              {isTechMode
                ? "Sistem SIAKAD & ERP dengan ketahanan maksimal."
                : "Six little plants with big personalities."}
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-md mb-6">
              {isTechMode
                ? "Paket sistem terpadu: arsitektur terpisah anti-down untuk ujian serentak, otomasi cetak ratusan rapor PDF paralel, dan sinkronisasi stok omnichannel tanpa risiko overselling."
                : "A hand-picked set of six easy, near-indestructible desk plants — the succulents and cacti that forgive a missed watering and a north-facing window. Our most gifted box, all year round."}
            </p>

            {/* Price Tag / Telemetry */}
            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {isTechMode ? "99.9% SLA" : "£54"}
              </span>
              <span className="text-xs font-medium text-emerald-200/60 line-through">
                {isTechMode ? "ZERO DOWNTIME" : "WORTH £72"}
              </span>
            </div>

            {/* Pill CTA Button (White Background, Dark Green Text) */}
            <div>
              <a
                href={isTechMode ? "#konsultasi" : "#"}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-white text-[#18362B] text-xs sm:text-sm font-bold hover:bg-[#F4F1EA] transition-colors shadow-sm"
              >
                {isTechMode ? "Konsultasi Paket Sistem →" : "Shop the set →"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
