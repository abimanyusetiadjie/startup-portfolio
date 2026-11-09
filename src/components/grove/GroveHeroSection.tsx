"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function GroveHeroSection() {
  const trustMetrics = [
    {
      value: "99.9% Uptime",
      label: "Jaminan Sistem Anti-Down",
      desc: "Tetap berjalan stabil saat 1.000+ siswa ujian serentak, PPDB, atau transaksi padat.",
    },
    {
      value: "<0.8s Website",
      label: "Kecepatan Buka Halaman",
      desc: "Website langsung terbuka instan di HP dengan skor performa Google 95–100.",
    },
    {
      value: "<2s Sistem",
      label: "Respon & Automasi WhatsApp",
      desc: "Notifikasi tagihan SPP, invoice, dan cetak laporan PDF selesai dalam hitungan detik.",
    },
    {
      value: "100% Source Code",
      label: "Kepemilikan Penuh di Tangan Anda",
      desc: "Seluruh kode program menjadi aset resmi institusi Anda tanpa biaya sewa bulanan.",
    },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-12 sm:pt-20 pb-20 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Ambient Forest & Mint Glow Diffused in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-0 w-[620px] h-[520px] bg-gradient-to-br from-emerald-100/40 via-teal-50/35 to-slate-100/20 blur-[140px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols): Clean, Corporate Swiss Typography */}
          <div className="lg:col-span-7 space-y-7">
            {/* Eyebrow Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-[0_2px_8px_rgba(15,23,42,0.03)]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#0F172A]">
                Software House &amp; Konsultan Teknologi · Sekolah, Yayasan &amp; Bisnis
              </span>
            </div>

            {/* Headline with Signature Deep Forest Green Serif Italic Accent */}
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] font-extrabold tracking-tight text-[#0F172A] leading-[1.08]">
              Website Cepat, Sistem Anti-Down, &amp; Automasi yang{" "}
              <span className="font-serif italic font-normal text-[#065F46] tracking-normal">
                Pasti
              </span>{" "}
              Beres.
            </h1>

            {/* Sub-headline: Clear, Non-Technical Indonesian Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-[580px] leading-relaxed font-normal">
              Kami merancang <strong className="font-semibold text-[#0F172A]">website company profile &amp; institusi</strong> yang cepat (&lt;0.8 dtk), <strong className="font-semibold text-[#0F172A]">sistem SIAKAD &amp; operasional</strong> yang anti-down saat jam sibuk, serta <strong className="font-semibold text-[#0F172A]">automasi WhatsApp resmi Meta</strong> yang memangkas kerja manual — dengan garansi <strong className="font-semibold text-[#0F172A]">100% source code milik Anda</strong> tanpa biaya sewa lisensi bulanan.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="#kontak"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-[0_10px_25px_rgba(5,150,105,0.28)] hover:shadow-[0_14px_32px_rgba(5,150,105,0.38)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Konsultasikan Kebutuhan Anda</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#studi-kasus"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#064E3B] transition-colors py-3 px-3"
              >
                <span>Lihat Hasil Kerja Kami</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#064E3B] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Reassurance Micro-Copy for School Principals & Foundation Chairs */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-600 font-medium border-t border-slate-200/80">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respons Engineer &lt;15 Menit (Jam Kerja)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Portal Klien untuk Tracking Transparan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Termasuk Buku Panduan &amp; Training Staf</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): 3 Floating Glassmorphism Cards Matching Reference */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-6 min-h-[460px] sm:min-h-[500px]">
            {/* Luminous Warm Mint & Sage Glow Behind Glass Cards */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-100/35 via-teal-50/30 to-slate-100/25 blur-3xl rounded-full scale-110"
            />

            {/* Mobile Stack & Desktop Floating Container */}
            <div className="relative w-full max-w-[440px] sm:h-[480px] flex flex-col sm:block gap-4">
              {/* Card 1: 99.9% Uptime (Top Right) */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="sm:absolute sm:top-2 sm:right-2 w-full sm:w-[260px] rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.1)] transition-shadow"
              >
                <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                  99.9%
                </div>
                <div className="text-sm font-semibold text-slate-600 mt-2">
                  Uptime
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-medium">
                  SLA Sistem Anti-Down
                </div>
              </motion.div>

              {/* Card 2: 2.5k Active Users (Middle Left) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 6.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="sm:absolute sm:top-36 sm:left-2 w-full sm:w-[250px] rounded-3xl bg-white/80 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_20px_50px_rgba(15,23,42,0.06)] z-10 hover:shadow-[0_25px_60px_rgba(15,23,42,0.1)] transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A]">
                    2.5k
                  </span>
                  <span className="text-emerald-500 text-xs select-none">✦</span>
                </div>
                <div className="text-sm font-semibold text-slate-600 mt-2">
                  Active Users
                </div>
                {/* Delicate rising organic chart curve in emerald */}
                <div className="mt-3 relative">
                  <svg
                    className="w-full h-8 overflow-visible"
                    viewBox="0 0 100 24"
                    fill="none"
                  >
                    <path
                      d="M 2 20 C 25 18, 48 14, 68 8 C 82 4, 92 2, 98 2"
                      stroke="#059669"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <circle cx="98" cy="2" r="2.5" fill="#059669" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-medium">
                  Siswa &amp; Staf Terkoneksi
                </div>
              </motion.div>

              {/* Card 3: +40% Efficiency Improved (Bottom Right) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 6.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="sm:absolute sm:bottom-2 sm:right-4 w-full sm:w-[280px] rounded-3xl bg-white/85 backdrop-blur-xl border border-white/90 p-6 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)] z-20 hover:shadow-[0_30px_70px_rgba(15,23,42,0.12)] transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#059669]">
                    +40%
                  </span>
                  <span className="text-emerald-500 text-xs select-none">✦</span>
                </div>
                <div className="text-sm font-semibold text-slate-600 mt-2">
                  Efficiency Improved
                </div>
                {/* Delicate rising organic chart curve */}
                <div className="mt-3 relative">
                  <svg
                    className="w-full h-8 overflow-visible"
                    viewBox="0 0 100 24"
                    fill="none"
                  >
                    <path
                      d="M 2 20 C 30 18, 50 12, 72 10 C 86 8, 92 4, 98 2"
                      stroke="#059669"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <circle cx="98" cy="2" r="2.5" fill="#059669" />
                  </svg>
                </div>
                <div className="text-[11px] text-slate-400 mt-1 font-medium">
                  Pangkas Kerja Manual TU &amp; Admin
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Bar with Deep Forest Hairline Borders */}
        <div className="mt-16 pt-8 pb-8 border-y border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white rounded-3xl px-6 sm:px-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-sm">
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
