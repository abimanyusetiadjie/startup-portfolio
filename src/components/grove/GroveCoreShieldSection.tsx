"use client";

import { ShieldCheck, Cloud, Workflow, TrendingUp, Box } from "lucide-react";

export function GroveCoreShieldSection() {
  const quadrants = [
    {
      position: "top-left",
      icon: ShieldCheck,
      title: "Proactive Monitoring",
      desc: "Pemantauan real-time 24/7 mendeteksi anomali performa dan potensi kendala sebelum pengguna Anda terpengaruh.",
    },
    {
      position: "top-right",
      icon: Cloud,
      title: "Cloud & DevOps Scale",
      desc: "Arsitektur cloud elastis dan CI/CD otomatis untuk menjamin skalabilitas saat lonjakan trafik beban puncak.",
    },
    {
      position: "bottom-left",
      icon: Workflow,
      title: "Workflow Automation",
      desc: "Pipeline otomasi cerdas yang mengeliminasi friksi manual pada operasional, integrasi API, dan pelaporan.",
    },
    {
      position: "bottom-right",
      icon: TrendingUp,
      title: "Dedicated vCIO Strategy",
      desc: "Konsultasi arsitektur berkelanjutan untuk menyelaraskan roadmap teknologi dengan target pertumbuhan bisnis.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/10 via-orange-500/15 to-amber-500/10 blur-[130px] rounded-full"
      />

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            OUR APPROACH
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            We Don&apos;t Just Support IT.
            <br />
            We Fuel Growth.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Metodologi holistik 4 pilar yang menggabungkan keandalan infrastruktur dengan akselerasi otomatisasi.
          </p>
        </div>

        {/* Radial Hub Layout: 4 Quadrants Around Glowing Center "TechRoos" Core */}
        <div className="relative py-8">
          {/* Dashed Cross Lines in Desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-1/2 left-4 right-4 -translate-y-1/2 border-t border-dashed border-white/10 z-0"
          />
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-4 bottom-4 left-1/2 -translate-x-1/2 border-l border-dashed border-white/10 z-0"
          />

          {/* Central Radial Core: Dual Blue-Orange Glow + TechRoos Emblem */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            {/* Top Orange Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 w-32 h-20 rounded-full bg-orange-500/40 blur-2xl"
            />
            {/* Bottom Blue Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 w-32 h-20 rounded-full bg-blue-500/40 blur-2xl"
            />

            {/* Glowing Core Hub Badge */}
            <div className="relative w-28 h-28 rounded-full bg-[#121318] border border-white/20 shadow-[0_0_50px_rgba(249,115,22,0.35)] flex flex-col items-center justify-center p-2 group">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white mb-1 shadow-inner">
                <Box className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-xs font-semibold tracking-tight text-white">
                TechRoos
              </span>
              <span className="text-[9px] uppercase tracking-wider text-orange-400 font-mono">
                Core Hub
              </span>
            </div>
          </div>

          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-20 md:gap-x-24 relative z-10">
            {quadrants.map((q, idx) => {
              const Icon = q.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 space-y-3 group hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                    {q.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
