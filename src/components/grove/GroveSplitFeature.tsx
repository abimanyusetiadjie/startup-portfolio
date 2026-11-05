"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";

export function GroveSplitFeature() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="case-study" className="bg-[#F4F1EA] py-14 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER (Exact Grove Proportions) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#DDD7C9] shadow-sm">
          {/* Left Side: System Architecture Visual */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-[#EAE5D9]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              alt="Abinest SIAKAD Core & Parallel PDF Architecture"
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute top-4 left-4 bg-[#18362B]/90 backdrop-blur-sm text-emerald-100 px-3 py-1 rounded text-[10px] font-mono border border-white/10 flex items-center gap-1.5 shadow-sm">
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>STUDI KASUS EDTECH • YAYASAN SEKOLAH</span>
            </div>
          </div>

          {/* Right Side: Solid Deep Forest Green Block (#18362B) */}
          <div className="bg-[#18362B] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Eyebrow */}
            <span className="block text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-300/80 mb-2">
              SISTEM SIAKAD &amp; ENTERPRISE SUITE
            </span>

            {/* Headline */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-white mb-4">
              Solusi total ujian &amp; cetak rapor serentak tanpa server down.
            </h2>

            {/* Body Description */}
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-md mb-6">
              Arsitektur terpisah (*decoupled*) antara database SPP/keuangan dan LMS/ujian serentak. Didukung mesin asinkron paralel yang me-render ratusan rapor PDF siswa secara kilat ke Supabase Storage aman dengan Row Level Security terisolasi.
            </p>

            {/* Impact Metric Telemetry */}
            <div className="flex items-baseline gap-4 mb-8 pt-2 border-t border-[#254F40]">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-white">
                  0% Downtime
                </span>
                <span className="block text-[10px] text-emerald-300/70 font-mono mt-0.5">
                  Trafik Puncak 4.200 Siswa
                </span>
              </div>
              <div className="h-8 w-[1px] bg-[#254F40]" />
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400">
                  &lt;45s
                </span>
                <span className="block text-[10px] text-emerald-300/70 font-mono mt-0.5">
                  500+ Rapor PDF Paralel
                </span>
              </div>
            </div>

            {/* White Pill CTA Button */}
            <div>
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#18362B] text-xs sm:text-sm font-bold hover:bg-[#F4F1EA] transition-colors shadow-sm"
              >
                Konsultasi Arsitektur SIAKAD →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
