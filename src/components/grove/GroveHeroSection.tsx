"use client";

interface GroveHeroSectionProps {
  isTechMode?: boolean;
}

export function GroveHeroSection({ isTechMode = false }: GroveHeroSectionProps) {
  return (
    <section className="bg-[#F4F1EA] text-[#1A201C] pt-6 sm:pt-10 pb-0 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HERO 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-16">
          {/* Left Column (5 or 6 Cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            {/* Eyebrow */}
            <span className="block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#D15B3A]">
              {isTechMode
                ? "SOFTWARE REKAYASA & OTOMASI B2B"
                : "INDOOR PLANTS, ALL UNDER £40."}
            </span>

            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#1A201C]">
              {isTechMode ? (
                <>
                  Sistem rekayasa yang membuat bisnis tumbuh{" "}
                  <span className="text-[#D15B3A]">cepat.</span>
                </>
              ) : (
                <>
                  Plants that make a room feel{" "}
                  <span className="text-[#D15B3A]">alive.</span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#6B736C] leading-relaxed max-w-lg">
              {isTechMode
                ? "Arsitektur web Next.js skor 100 Lighthouse, SIAKAD sekolah anti-down dengan ribuan cetak PDF rapor paralel, serta otomasi WhatsApp & integrasi API teruji."
                : "Healthy, hand-potted plants matched to your light and your patience — delivered in three days, with a care card and a promise we actually keep."}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={isTechMode ? "#favourites" : "#favourites"}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#18362B] text-white text-xs sm:text-sm font-semibold hover:bg-[#122A21] transition-colors shadow-sm"
              >
                {isTechMode ? "Eksplorasi Sistem →" : "Shop all plants →"}
              </a>

              <a
                href={isTechMode ? "/portal" : "#promise"}
                className="text-xs sm:text-sm font-medium text-[#6B736C] underline hover:text-[#18362B] transition-colors"
              >
                {isTechMode ? "Akses Portal Klien (/portal)" : "Not sure? Take the light quiz"}
              </a>
            </div>
          </div>

          {/* Right Column: Large Vertical Image Container (Exact Grove Aspect Ratio & Framing) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-sm overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  isTechMode
                    ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=1200&auto=format&fit=crop"
                }
                alt={isTechMode ? "Arsitektur Sistem Enterprise" : "Plants in modern bright room"}
                className="w-full h-full object-cover object-center"
              />

              {/* Subtle Overlay Badge */}
              <div className="absolute bottom-3 left-3 bg-white/85 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#18362B] font-semibold border border-[#E5E0D5]">
                {isTechMode ? "📷 SLOT GAMBAR HERO (READY)" : "GROVE STUDIOS • LONDON"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM 4-COLUMN FEATURE BAR (Deep Forest Green #18362B) */}
      <div className="bg-[#18362B] text-white border-t border-[#122A21]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#234A3C]">
          {isTechMode ? (
            <>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">Lighthouse 95–100</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Core Web Vitals LCP &lt; 1.0s</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">Parallel PDF Worker</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">500+ Rapor / &lt;45s Batch</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">99.9% Uptime SLA</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Decoupled Anti-Crash Database</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">WhatsApp Real-Time</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Auto-Retry Backoff &lt; 2s</span>
              </div>
            </>
          ) : (
            <>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">Delivered in 2 days</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Direct from nursery to door</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">Potted &amp; ready</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">In a pot you will want to keep</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">30-day plant promise</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Free replacement if it struggles</span>
              </div>
              <div className="py-4 px-4 sm:px-6">
                <span className="block text-xs font-bold text-white">Care card included</span>
                <span className="block text-[11px] text-emerald-200/70 mt-0.5">Water, light and feed tips</span>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
