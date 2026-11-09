"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ArrowUpRight, Star } from "lucide-react";
import { GroveHeroCockpit } from "./GroveHeroCockpit";

export function GroveHeroSection() {
  const trustMetrics = [
    {
      value: "<0.8s Web",
      label: "Kecepatan Loading Halaman",
      desc: "Website instan di HP dengan skor performa Google PageSpeed 98–100 dan SEO maksimal.",
    },
    {
      value: "99.99% ERP",
      label: "Sistem Anti-Down Teruji",
      desc: "Arsitektur multi-warehouse & inventori stabil menangani puluhan ribu transaksi per bulan.",
    },
    {
      value: "10x AI Efisiensi",
      label: "Automasi AI & Machine Learning",
      desc: "Document AI OCR & Meta WhatsApp Agent memangkas puluhan jam kerja manual per minggu.",
    },
    {
      value: "100% Source Code",
      label: "Hak Milik Penuh Tanpa Sewa",
      desc: "Seluruh kode program diserahkan menjadi aset resmi perusahaan Anda tanpa biaya bulanan.",
    },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-4 sm:pt-6 pb-12 sm:pb-16 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Ambient Forest & Mint Glow Diffused in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-0 w-[580px] h-[480px] bg-gradient-to-br from-emerald-100/40 via-teal-50/35 to-slate-100/20 blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Trust Micro-Bar Inspired by Reference */}
        <div className="flex items-center justify-end mb-4 sm:mb-2">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/80 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>100% Hak Milik Source Code · Enterprise SLA 99.99%</span>
          </div>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column (7 cols): Editorial Typography + Reference Aesthetics */}
          <div className="lg:col-span-7 space-y-6">
            {/* Bold Editorial Headline with Hand-Drawn Gradient Doodle Loop */}
            <h1 className="text-4xl sm:text-6xl lg:text-[62px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
              Solusi Digital{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10 text-[#065F46] font-serif italic font-normal px-1">
                  Presisi
                </span>
                {/* Hand-Drawn Colorful Gradient Loop SVG Matching Reference */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 250 85"
                  fill="none"
                  className="absolute -top-3.5 -left-3.5 w-[calc(100%+28px)] h-[calc(100%+26px)] pointer-events-none select-none -z-0"
                >
                  <defs>
                    <linearGradient id="doodleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#059669" />
                      <stop offset="45%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#0D9488" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 18,46 C 14,20 46,7 122,7 C 198,7 238,20 236,44 C 234,68 184,80 114,80 C 40,80 10,63 18,36 C 22,24 40,15 68,11"
                    stroke="url(#doodleGrad)"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                  />
                </svg>
              </span>
              <br />
              untuk Masalah Bisnis yang Kompleks.
            </h1>

            {/* Sub-headline: 20% Punchy, High-Clarity Indonesian Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-[580px] leading-relaxed font-normal">
              Kami merancang <strong className="font-semibold text-[#0F172A]">Website Berkecepatan Tinggi</strong>, <strong className="font-semibold text-[#0F172A]">Sistem ERP Kustom</strong>, dan <strong className="font-semibold text-[#0F172A]">Automasi AI &amp; Machine Learning</strong> terpadu — mentransformasi operasional bisnis Anda dengan garansi <strong className="font-semibold text-[#0F172A]">100% hak milik kode program</strong> tanpa biaya sewa lisensi bulanan.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-5">
              <a
                href="#kontak"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-[0_10px_25px_rgba(5,150,105,0.28)] hover:shadow-[0_14px_32px_rgba(5,150,105,0.38)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Konsultasikan Kebutuhan Anda</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#portofolio"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#064E3B] transition-colors py-3 px-3"
              >
                <span>Lihat Portofolio Karya</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#064E3B] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Laurel Wreath Emblem + Rotating Stamp Badge Row (Reference Aesthetics) */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-slate-200/80">
              {/* Laurel Wreath Trust Proof */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#065F46] flex items-center justify-center shrink-0 border border-emerald-200">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m-4-16a8 8 0 00-4 7c0 3.5 2 6 4 7m8-14a8 8 0 014 7c0 3.5-2 6-4 7" />
                  </svg>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-[340px]">
                  <strong className="text-slate-900 font-bold">Rekam jejak delivery teruji:</strong> 100% kepemilikan source code diserahkan penuh di 25+ implementasi produksi.
                </p>
              </div>

              {/* Rotating Circular Stamp Badge Inspired by Reference Image */}
              <div className="relative w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center shrink-0 self-end sm:self-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-800 text-[8.2px] font-extrabold tracking-[0.24em] uppercase">
                    <defs>
                      <path
                        id="stampPath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text>
                      <textPath href="#stampPath" startOffset="0%">
                        • ABINEST NUSANTARA • WEB • ERP • AI/ML •
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#064E3B] text-white flex items-center justify-center shadow-md">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-300" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): 80% Visual Dynamic Cockpit (Web, ERP, AI/ML) */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-2">
            <GroveHeroCockpit />
          </div>
        </div>

        {/* 4-Column Trust Bar with Deep Forest Hairline Borders */}
        <div className="mt-8 sm:mt-10 pt-6 pb-6 border-y border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white rounded-3xl px-6 sm:px-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-sm">
          {trustMetrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-3 border-l-2 border-[#059669]">
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A]">
                {m.value}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {m.label}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
