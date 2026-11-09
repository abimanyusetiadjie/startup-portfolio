"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, MessageSquare } from "lucide-react";

export function GroveHeroSection() {
  return (
    <section
      id="beranda"
      className="relative pt-8 sm:pt-12 pb-16 sm:pb-20 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Ambient Diffused Backlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-emerald-100/40 via-teal-50/30 to-transparent blur-[120px] rounded-full -z-0"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Main Centered Content Container */}
        <div className="max-w-[880px] mx-auto text-center space-y-6 sm:space-y-7">
          {/* 1. Eyebrow Pill Badge (Matching Image) */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200/90 text-[11px] sm:text-xs font-semibold text-slate-700 shadow-xs">
            <span>100% Hak Milik Source Code · SLA 99.99%</span>
          </div>

          {/* 2. Headline with Signature Italic Accent on "Beres" (Matching Image) */}
          <h1 className="text-4xl sm:text-6xl lg:text-[72px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Website, Sistem &amp; Automasi yang<br />
            <span className="font-serif italic font-normal text-[#065F46] tracking-normal">
              Beres
            </span>{" "}
            yang Ribet.
          </h1>

          {/* 3. Subtitle (Matching Image) */}
          <p className="text-base sm:text-lg text-slate-600 max-w-[680px] mx-auto leading-relaxed font-normal">
            Kami membangun website cepat, sistem anti-down, dan automasi WhatsApp &amp; AI untuk bisnis, perusahaan, dan UMKM — tanpa biaya sewa lisensi bulanan.
          </p>

          {/* 4. Two CTA Buttons (Matching Image, Colored in Emerald Theme) */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#kontak"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-[0_10px_25px_rgba(5,150,105,0.25)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Konsultasikan Kebutuhan Anda
            </a>

            <a
              href="#portofolio"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 shadow-xs transition-all duration-200"
            >
              Lihat Hasil Kerja
            </a>
          </div>

          {/* 5. Social Proof Avatars & Trust Text (Matching Image) */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 1"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 2"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                alt="Avatar 3"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Dipercaya 25+ Perusahaan &amp; Bisnis · 99.99% Uptime
            </span>
          </div>
        </div>

        {/* 6. Bottom 3 Value Cards in Green Theme (Matching Image Exactly) */}
        <div className="mt-12 sm:mt-14 max-w-[1060px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Card 1: Website <0.8s */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-emerald-300 hover:shadow-md transition-all group">
            <div className="w-11 h-11 mx-auto rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Website &lt;0.8s
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Halaman cepat, ringan &amp; SEO-ready
            </p>
          </div>

          {/* Card 2: Sistem Anti-Down 99.99% */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-emerald-300 hover:shadow-md transition-all group">
            <div className="w-11 h-11 mx-auto rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Sistem Anti-Down 99.99%
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              SLA terjamin, monitoring 24/7
            </p>
          </div>

          {/* Card 3: Automasi 10x Lebih Cepat */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.02)] hover:border-emerald-300 hover:shadow-md transition-all group">
            <div className="w-11 h-11 mx-auto rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
              Automasi 10x Lebih Cepat
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Integrasi WhatsApp, AI &amp; workflow otomatis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
