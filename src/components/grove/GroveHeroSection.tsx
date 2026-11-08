"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Clock, FileCode2 } from "lucide-react";

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
      className="relative pt-10 sm:pt-14 pb-20 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Ambient Warm Light Glows (85% Off-White, 10% Navy, 5% Orange Accent) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-6 w-[520px] h-[440px] bg-gradient-to-br from-orange-200/35 via-amber-100/30 to-slate-100/20 blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (7 cols): Clear, Benefit-Driven Indonesian Copywriting */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#0F172A]">
                Software House &amp; Konsultan Teknologi · Sekolah, Yayasan &amp; Bisnis
              </span>
            </div>

            {/* Headline answering What, For Whom, and What Outcome in 5 seconds */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
              Website Cepat, Sistem Anti-Down, &amp; Automasi Kerja yang{" "}
              <span className="font-serif italic font-normal text-[#C2672B] tracking-normal">
                Pasti
              </span>{" "}
              <span className="font-extrabold text-[#0F172A]">
                Beres.
              </span>
            </h1>

            {/* Sub-headline explaining the 3 pillars + core competitive advantages */}
            <p className="text-base sm:text-[17px] text-slate-600 max-w-[600px] leading-relaxed font-normal">
              Kami membangun <strong className="font-semibold text-[#0F172A]">website institusi &amp; perusahaan</strong> yang cepat dibuka, <strong className="font-semibold text-[#0F172A]">sistem SIAKAD &amp; operasional</strong> yang tetap stabil di jam tersibuk, serta <strong className="font-semibold text-[#0F172A]">automasi WhatsApp &amp; laporan</strong> yang memangkas kerja manual — dengan jaminan <strong className="font-semibold text-[#0F172A]">100% source code milik Anda</strong> tanpa biaya lisensi bulanan.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
              <a
                href="#kontak"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-[0_8px_25px_rgba(217,119,54,0.32)] hover:shadow-[0_12px_30px_rgba(217,119,54,0.42)] transition-all duration-200"
              >
                <span>Konsultasikan Kebutuhan Sistem Anda</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#studi-kasus"
                className="group inline-flex items-center justify-center sm:justify-start gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#C2672B] transition-colors py-2.5 px-2"
              >
                <span>Lihat Hasil Kerja Kami</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C2672B] group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Reassurance Micro-Copy for Decision Makers */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium border-t border-slate-200/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respons Engineer &lt;15 Menit (Jam Kerja)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Pantau Progres via Portal Klien</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Termasuk Training Staf &amp; Dokumentasi</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Clean Executive Proof Dashboard & Frosted Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4">
            {/* Soft Warm Aura */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-slate-200/25 blur-2xl rounded-full"
            />

            <div className="relative w-full max-w-[440px] space-y-4">
              {/* Main Executive Summary Card */}
              <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C2672B] block">
                      RINGKASAN DAMPAK OPERASIONAL
                    </span>
                    <h2 className="text-sm font-bold text-[#0F172A] mt-0.5">
                      Bukti Kinerja Sistem Klien Abinest
                    </h2>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    SLA 99.9% Aktif
                  </span>
                </div>

                {/* 3 Clear Outcome Cards Inside */}
                <div className="grid grid-cols-2 gap-3.5">
                  {/* Stat 1: Uptime */}
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200/70 p-4">
                    <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                      99.9%
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">
                      Uptime Saat Ujian &amp; PPDB
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      0% crash saat 1.240+ siswa login bersamaan.
                    </p>
                  </div>

                  {/* Stat 2: Speed & Users */}
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200/70 p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A]">
                        0.7 dtk
                      </div>
                      <span className="text-amber-500 text-xs font-serif select-none">
                        ✦
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-700 mt-1">
                      Kecepatan Buka Web
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                      Mudah diupdate sendiri oleh staf TU &amp; admin.
                    </p>
                  </div>
                </div>

                {/* Stat 3: Efficiency Improved (Full Width Highlight) */}
                <div className="mt-3.5 rounded-2xl bg-gradient-to-r from-orange-50/90 via-amber-50/60 to-white border border-orange-200/80 p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#C2672B]">
                        -12 Jam/Mgg
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-white text-[#C2672B] border border-orange-200">
                        Hemat Waktu Kerja
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-[#0F172A] mt-1">
                      Tagihan SPP, Invoice &amp; Rapor PDF Terkirim Otomatis via WhatsApp
                    </div>
                  </div>
                  <div className="hidden sm:block shrink-0">
                    <svg className="w-16 h-9 overflow-visible" viewBox="0 0 100 35" fill="none">
                      <path
                        d="M 5 30 C 30 28, 45 18, 65 20 C 80 22, 90 10, 98 4"
                        stroke="#C2672B"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                      <circle cx="98" cy="4" r="3" fill="#C2672B" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Guarantee Footer Inside Card */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <FileCode2 className="w-3.5 h-3.5 text-[#0F172A]" />
                    100% Serah Terima Source Code
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Kontrak &amp; Garansi Resmi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Trust Bar (Metric Bar) */}
        <div className="mt-14 pt-7 pb-7 border-y border-slate-200/90 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 bg-white rounded-2xl px-6 sm:px-8 shadow-[0_6px_25px_rgba(15,23,42,0.03)]">
          {trustMetrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-3 border-l-2 border-[#D97736]">
              <div className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A]">
                {m.value}
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {m.label}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
