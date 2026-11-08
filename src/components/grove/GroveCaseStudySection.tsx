"use client";

import { ArrowUpRight } from "lucide-react";

export function GroveCaseStudySection() {
  return (
    <section id="case-studies" className="py-20 relative">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            FEATURED OUTCOME
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Engineering Real-World Results
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Studi kasus mendalam bagaimana arsitektur terisolasi memecahkan kemacetan sistem di skala produksi.
          </p>
        </div>

        {/* Stacked Deck Visual Effect */}
        <div className="relative pt-6">
          {/* Top Stacked Card Layer 2 */}
          <div
            aria-hidden="true"
            className="mx-auto w-[86%] h-6 rounded-t-3xl bg-[#121318]/40 border-t border-x border-white/[0.04] -mb-3 relative z-0"
          />
          {/* Top Stacked Card Layer 1 */}
          <div
            aria-hidden="true"
            className="mx-auto w-[93%] h-6 rounded-t-3xl bg-[#121318]/70 border-t border-x border-white/[0.06] -mb-3 relative z-10"
          />

          {/* Main Large Dark Card */}
          <div className="relative z-20 bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.9)] rounded-3xl p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (5 cols): Badge + Title + Desc + Button */}
              <div className="lg:col-span-5 space-y-5">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono uppercase tracking-[0.2em] text-orange-400">
                  CASE STUDY
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-white leading-snug">
                  Scaling Infrastructure: How We Cut Cloud Costs by 40% &amp; Eliminated Downtime
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  Dengan memisahkan klaster pemrosesan data berat ke antrean asinkron dan menerapkan auto-scaling dinamis, beban CPU saat ujian nasional 1.200+ siswa terpangkas drastis tanpa satu pun insiden lag.
                </p>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0A0A0C] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): 2 Side-by-Side Images (Technician VR/AR + Cyber Green-Blue Hologram) */}
              <div className="lg:col-span-7 grid grid-cols-12 gap-3.5">
                <div className="col-span-7 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                    alt="VR/AR Engineer Telemetry"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0C]/80 via-transparent to-blue-500/20" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-zinc-300 bg-[#0A0A0C]/80 px-2.5 py-1 rounded-md border border-white/10">
                    Telemetry Node 01
                  </span>
                </div>

                <div className="col-span-5 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 relative shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80"
                    alt="Cybersecurity Hologram Visualization"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-[#0A0A0C]/90" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-mono text-emerald-400 bg-[#0A0A0C]/80 px-2.5 py-1 rounded-md border border-white/10">
                    RLS Encrypted
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
