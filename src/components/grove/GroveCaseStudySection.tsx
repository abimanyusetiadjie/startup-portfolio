"use client";

import { ArrowUpRight } from "lucide-react";

export function GroveCaseStudySection() {
  return (
    <section id="studi-kasus" className="py-24 relative bg-white border-t border-slate-200/80">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            BUKTI EKSEKUSI NYATA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Rekayasa Hasil yang Terukur
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Studi kasus bagaimana arsitektur terpisah memecahkan kebuntuan server dan memangkas biaya operasional.
          </p>
        </div>

        {/* Stacked Deck Visual Effect in Light Theme */}
        <div className="relative pt-6">
          {/* Top Stacked Card Layer 2 */}
          <div
            aria-hidden="true"
            className="mx-auto w-[86%] h-6 rounded-t-3xl bg-slate-100/90 border-t border-x border-slate-200 -mb-3 relative z-0"
          />
          {/* Top Stacked Card Layer 1 */}
          <div
            aria-hidden="true"
            className="mx-auto w-[93%] h-6 rounded-t-3xl bg-slate-200/80 border-t border-x border-slate-300 -mb-3 relative z-10"
          />

          {/* Main Large White Card */}
          <div className="relative z-20 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200 text-[10px] font-mono uppercase tracking-[0.2em] font-semibold">
                  CASE STUDY UNGGULAN
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#0F172A] leading-snug">
                  Skalabilitas SIAKAD: Mencegah Downtime 100% Saat Ujian Nasional 1.200 Siswa
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dengan memisahkan database utama dengan antrean pemroses dokumen rapor paralel, beban CPU server saat ujian massal terpangkas sebesar 72% tanpa sedikit pun keluhan lag dari para guru maupun siswa.
                </p>

                <div className="pt-2">
                  <a
                    href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20tertarik%20melihat%20detail%20studi%20kasus%20SIAKAD."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)] transition-all"
                  >
                    <span>Konsultasikan Kasus Serupa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): 2 Side-by-Side Images */}
              <div className="lg:col-span-7 grid grid-cols-12 gap-3.5">
                <div className="col-span-7 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 relative shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                    alt="Pusat Kendali Ujian SIAKAD"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-white bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10">
                    SIAKAD 0% Downtime
                  </span>
                </div>

                <div className="col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 relative shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                    alt="Keamanan Data RLS"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/70" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-white/10">
                    RLS Enkripsi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
