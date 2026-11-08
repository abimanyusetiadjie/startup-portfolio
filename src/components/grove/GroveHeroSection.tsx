"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

export function GroveHeroSection() {
  const metrics = [
    {
      value: "99.9%",
      label: "Jaminan SLA Uptime",
      desc: "Infrastruktur cloud sekolah & bisnis tanpa risiko down saat jam sibuk.",
    },
    {
      value: "< 0.8s",
      label: "Kecepatan Website",
      desc: "Buka halaman instan di jaringan seluler dengan Next.js 15 Edge.",
    },
    {
      value: "< 2s",
      label: "Pengiriman Otomasi",
      desc: "Integrasi resmi Meta WhatsApp Cloud API dengan delivery instan.",
    },
    {
      value: "100%",
      label: "Hak Milik Source Code",
      desc: "Seluruh repositori Git & skema database menjadi aset resmi Anda.",
    },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-12 sm:pt-16 pb-20 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Soft Ambient Diffuse Warm Glows Behind Floating Cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-10 w-[550px] h-[450px] bg-gradient-to-br from-orange-200/40 via-amber-100/40 to-sky-100/30 blur-[130px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/4 w-[400px] h-[300px] bg-amber-100/30 blur-[100px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Hero Split: Left 55% Punchy Typography + Right 45% Frosted Acrylic 3D Floating Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[480px]">
          {/* Left Column (7 cols): Bold Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Massive Editorial Headline matching the reference image */}
            <h1 className="text-4xl sm:text-6xl lg:text-[68px] font-bold tracking-tight text-[#0F172A] leading-[1.05]">
              We Build Digital
              <br />
              Systems That&apos;
              <br />
              <span className="font-serif italic font-normal text-[#C2672B] tracking-normal mr-2">
                Just
              </span>
              <span className="font-extrabold text-[#0F172A]">
                Work.
              </span>
            </h1>

            {/* Sub-headline Covering Full Startup Scope: Modern Web, Custom Systems, and Intelligent Automation */}
            <p className="text-base sm:text-lg text-slate-600 max-w-[540px] leading-relaxed font-normal">
              We design modern high-performance websites, custom enterprise systems, and intelligent WhatsApp automation for growing businesses, schools, and UMKM—reliable, scalable, secure.
            </p>

            {/* Action Buttons matching the reference image layout */}
            <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              <a
                href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20memulai%20proyek%20pembuatan%20website%2Fsistem%2Fotomasi."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-[0_8px_25px_rgba(217,119,54,0.35)] hover:shadow-[0_12px_30px_rgba(217,119,54,0.45)] transition-all duration-200"
              >
                <span>Start a project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#studi-kasus"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-[#C2672B] transition-colors py-2"
              >
                <span>View our work</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C2672B] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Micro-Trust Highlights */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-200/60">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tanpa Biaya Lisensi Bulanan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respons Engineer &lt; 15 Menit</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): 3 Layered Frosted Acrylic Stat Cards matching exact reference photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6">
            {/* Diffuse Watercolor Ambient Aura (Peach, Copper & Soft Blue) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/35 via-orange-300/25 to-blue-200/20 blur-2xl rounded-full"
            />

            {/* The 3 Layered Glass Cards Container */}
            <div className="relative w-full max-w-[420px] h-[360px] sm:h-[400px]">
              {/* CARD 1 (Top-Right): 99.9% Uptime */}
              <div className="absolute top-0 right-0 sm:right-2 z-20 w-[210px] sm:w-[240px] rounded-3xl bg-white/75 backdrop-blur-2xl border border-white/80 p-6 sm:p-7 shadow-[0_25px_50px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                  99.9%
                </div>
                <div className="text-xs font-medium text-slate-600 mt-1.5">
                  Uptime
                </div>
              </div>

              {/* CARD 2 (Middle-Left, Overlapping): 2.5k Active Users with Trendline & Sparkle */}
              <div className="absolute top-20 sm:top-24 left-0 sm:left-2 z-30 w-[200px] sm:w-[230px] rounded-3xl bg-white/75 backdrop-blur-xl border border-white/80 p-5 sm:p-6 shadow-[0_25px_50px_rgba(0,0,0,0.07),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-300 hover:-translate-y-1">
                {/* Sparkle star top right */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                    2.5k
                  </div>
                  <span className="text-amber-500/80 text-xs font-serif select-none">
                    ✦
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Active Users
                </div>

                {/* Delicate Upward Trending Line SVG inside Card */}
                <div className="mt-3 pt-2">
                  <svg className="w-full h-8 overflow-visible" viewBox="0 0 160 35" fill="none">
                    <path
                      d="M 5 28 C 35 28, 55 18, 85 22 C 115 26, 135 12, 155 6"
                      stroke="#C2672B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="155" cy="6" r="2.5" fill="#C2672B" />
                  </svg>
                </div>
              </div>

              {/* CARD 3 (Bottom-Right, Foreground Accent): +40% Efficiency Improved with Warm Copper Accent */}
              <div className="absolute bottom-2 sm:bottom-4 right-0 sm:right-4 z-40 w-[220px] sm:w-[250px] rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-5 sm:p-6 shadow-[0_30px_60px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.95)] transition-all duration-300 hover:-translate-y-1">
                {/* Sparkle star top right */}
                <div className="flex items-center justify-between">
                  <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#C2672B]">
                    +40%
                  </div>
                  <span className="text-[#C2672B]/80 text-xs font-serif select-none">
                    ✦
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-600 mt-1">
                  Efficiency Improved
                </div>

                {/* Delicate Upward Trending Line SVG inside Card */}
                <div className="mt-3 pt-2">
                  <svg className="w-full h-8 overflow-visible" viewBox="0 0 180 35" fill="none">
                    <path
                      d="M 5 30 C 45 30, 75 22, 115 24 C 145 26, 160 10, 175 6"
                      stroke="#C2672B"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle cx="175" cy="6" r="2.5" fill="#C2672B" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proven 4-Metric Performance Strip */}
        <div className="mt-20 pt-8 pb-8 border-y border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white/70 rounded-2xl px-6 sm:px-8 shadow-sm">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-2 border-l-2 border-[#D97736]/40">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                {m.value}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                {m.label}
              </h3>
              <p className="text-xs text-slate-500 leading-snug">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
