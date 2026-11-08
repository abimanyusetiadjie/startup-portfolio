"use client";

import { ShieldCheck, Activity, Lock, Headphones } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveCoreShieldSection() {
  const quadrants = [
    {
      num: "01",
      cornerPos: "top-4 left-4",
      icon: ShieldCheck,
      title: "Mitigasi Beban Proaktif &\nAnti-Down Ujian Massal",
      desc: "Deteksi otomatis lonjakan ribuan siswa sebelum berdampak pada operasional sekolah atau sistem penilaian.",
    },
    {
      num: "02",
      cornerPos: "top-4 right-4",
      icon: Activity,
      title: "Pemantauan Real-Time\n24/7 Sepanjang Tahun",
      desc: "Telemetri kesehatan database PostgreSQL, antrean background worker PDF, dan webhook WhatsApp setiap detik.",
    },
    {
      num: "03",
      cornerPos: "bottom-4 left-4",
      icon: Lock,
      title: "Kepemilikan Penuh\n100% Source Code & IP",
      desc: "Nol vendor lock-in. Seluruh repositori Git, skema database, dan dokumentasi arsitektur menjadi aset resmi Anda.",
    },
    {
      num: "04",
      cornerPos: "bottom-4 right-4",
      icon: Headphones,
      title: "Respons Engineer Langsung\nDi Bawah 15 Menit",
      desc: "Akses komunikasi langsung dengan tim senior software engineer tanpa perantara birokrasi tiket yang lambat.",
    },
  ];

  return (
    <section id="metodologi" className="py-24 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      {/* Background Soft Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-100/40 via-orange-100/40 to-amber-100/30 blur-[130px] rounded-full"
      />

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            METODOLOGI &amp; JAMINAN KEANDALAN
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Pemantauan &amp; Perlindungan
            <br />
            Sistem 365 Hari Tanpa Henti
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Arsitektur pelindung berlapis yang menjaga sistem institusi Anda tetap stabil, aman, dan siap bertumbuh.
          </p>
        </div>

        {/* 4-Quadrant Hub Diagram Around Glowing Abinest Core */}
        <div className="relative py-8">
          {/* Dashed Cross Lines in Desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-1/2 left-4 right-4 -translate-y-1/2 border-t border-dashed border-slate-300 z-0"
          />
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-4 bottom-4 left-1/2 -translate-x-1/2 border-l border-dashed border-slate-300 z-0"
          />

          {/* Central Radial Core: Abinest Emblem */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            {/* Soft Orange Glow Behind Core */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-4 w-32 h-20 rounded-full bg-orange-400/30 blur-2xl"
            />
            {/* Soft Blue Glow Behind Core */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-4 w-32 h-20 rounded-full bg-blue-400/25 blur-2xl"
            />

            {/* Glowing Core Hub Badge */}
            <div className="relative w-32 h-32 rounded-full bg-white border border-slate-200 shadow-[0_10px_35px_rgba(0,0,0,0.08)] flex flex-col items-center justify-center p-3 group">
              <AbinestLogo size="sm" showTagline={false} />
              <span className="text-[9px] uppercase tracking-widest text-orange-600 font-bold mt-1">
                CORE HUB
              </span>
            </div>
          </div>

          {/* 4 Quadrants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-16 md:gap-x-20 relative z-10">
            {quadrants.map((q) => {
              const Icon = q.icon;
              return (
                <div
                  key={q.num}
                  className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 space-y-3.5 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 relative group"
                >
                  {/* Corner Number Badge */}
                  <span className="inline-flex w-7 h-7 rounded-lg bg-slate-100 text-[#0F172A] font-mono text-xs font-bold items-center justify-center border border-slate-200">
                    {q.num}
                  </span>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-105 group-hover:bg-orange-500 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#0F172A] tracking-tight leading-snug whitespace-pre-line">
                      {q.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
