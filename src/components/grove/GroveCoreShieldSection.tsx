"use client";

import {
  CheckCircle2,
  XCircle,
  ClipboardList,
  FileCheck2,
  Laptop,
  Users,
  ShieldCheck,
  ArrowRight,
  FileCode2,
  FolderTree,
  Lock,
  Sparkles,
  PackageCheck,
  Scale,
  FileText,
  Palette,
  Terminal,
  Gauge,
  KeyRound,
} from "lucide-react";


export function GroveCoreShieldSection() {
  const comparisonRows = [
    {
      metric: "Pengelolaan Server & Perawatan IT",
      abinest: "Bebas Pilih: Bisa terima beres dirawat tim engineer kami, atau dikelola mandiri oleh tim IT Anda.",
      saas: "Wajib ikut server vendor luar negeri, data tersandera dan lambat diakses dari jaringan lokal Indonesia.",
      agency: "Sering lepas tangan setelah website selesai, server dibiarkan tanpa backup rutin.",
      highlight: true,
    },
    {
      metric: "Biaya Tambah User / Karyawan / Siswa",
      abinest: "Rp 0 / User: Bebas tambah 1.000 hingga 10.000 user tanpa pungutan biaya lisensi per kepala.",
      saas: "Iuran terus membengkak (Rp 50.000 – Rp 350.000 / user / bulan), membatasi pertumbuhan bisnis.",
      agency: "Sering meminta biaya lisensi instance tambahan saat jumlah pengguna membludak.",
      highlight: true,
    },
    {
      metric: "Kepemilikan Data & Kemerdekaan Kode",
      abinest: "100% Milik Anda: Backup database bisa diunduh kapan saja, dan source code bebas diambil alih.",
      saas: "Data Tersandera: Jika berhenti bayar sewa bulanan, sistem dimatikan dan data perusahaan hilang.",
      agency: "Source code sengaja ditahan sebagai alasan perpanjangan kontrak wajib setiap tahun.",
      highlight: true,
    },
    {
      metric: "Kustomisasi Alur Operasional Bisnis",
      abinest: "100% Mengikuti SOP unik bisnis Anda tanpa kompromi template kaku.",
      saas: "Kaku: Alur operasional bisnis Anda yang dipaksa mengalah pada keterbatasan software impor.",
      agency: "Terbatas pada plugin CMS umum yang mudah konflik dan rentan peretasan.",
      highlight: false,
    },
    {
      metric: "Kecepatan Bantuan & SLA Respons",
      abinest: "Respons <15 menit di jam operasional langsung bersama tim senior engineer via WhatsApp grup.",
      saas: "Mengisi tiket antrean customer service umum luar negeri (estimasi balasan 2–3 hari kerja).",
      agency: "Tidak ada jaminan SLA tertulis, sulit dihubungi setelah pelunasan proyek.",
      highlight: false,
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-14 sm:py-20 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-16 sm:space-y-20">
                {/* ========================================================================= */}
        {/* PART 1: BENTO STUDIO GRID (5 LANGKAH KERJA & DEDICATED VISUAL STAGES)    */}
        {/* ========================================================================= */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              ALUR KERJA TRANSPARAN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
              5 Langkah Terstruktur Menuju Sistem Siap Operasi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Setiap tahapan memiliki output fisik (*deliverable*) yang jelas dan terverifikasi, sehingga Anda memegang kendali penuh atas investasi teknologi bisnis Anda.
            </p>
          </div>

          {/* BENTO GRID: ROW 1 (3 Landscape Cards: Steps 01, 02, 03) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CARD 01: Konsultasi Kebutuhan */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
              {/* Subtle Ambient Backlight on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-[#2563EB]">01</span>
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF] group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <ClipboardList className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Hari 1 – 3
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                    Konsultasi Kebutuhan
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Diskusi mendalam mengenai alur operasional bisnis Anda langsung bersama sistem arsitek tanpa perantara sales.
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="p-3 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs text-[#1E40AF]">
                  <div className="font-bold uppercase tracking-wider text-[9.5px] text-blue-600 flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5" />
                    <span>Deliverable Fisik:</span>
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Dokumen Blueprint &amp; RAB Transparan
                  </div>
                </div>

                {/* DEDICATED VISUAL STAGE: Architectural Blueprint */}
                <div className="mt-4 rounded-2xl bg-[#0B1220] border border-slate-800 p-4 shadow-md relative overflow-hidden group-hover:border-sky-500/50 group-hover:shadow-[0_12px_28px_rgba(56,189,248,0.15)] transition-all duration-300">
                  <div className="h-[145px] w-full flex flex-col justify-between font-mono text-white select-none">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                      <div className="flex items-center gap-1.5 text-sky-400 font-bold">
                        <FileText className="w-3.5 h-3.5" />
                        <span>BLUEPRINT_SPEC_v1.0.pdf</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-bold border border-emerald-500/30">
                        APPROVED ✓
                      </span>
                    </div>

                    <div className="py-2 px-0.5 relative">
                      <div className="flex items-center justify-between gap-1 text-[9.5px]">
                        <div className="flex-1 p-2 rounded-xl bg-slate-900 border border-sky-500/40 text-center">
                          <div className="text-[7.5px] text-slate-400">CLIENT</div>
                          <div className="font-bold text-sky-300">Web / App</div>
                        </div>
                        <div className="text-slate-500 text-xs font-bold">──▶</div>
                        <div className="flex-1 p-2 rounded-xl bg-slate-900 border border-teal-500/40 text-center">
                          <div className="text-[7.5px] text-slate-400">CORE</div>
                          <div className="font-bold text-[#00C9A7]">Next.js API</div>
                        </div>
                        <div className="text-slate-500 text-xs font-bold">──▶</div>
                        <div className="flex-1 p-2 rounded-xl bg-slate-900 border border-blue-500/40 text-center">
                          <div className="text-[7.5px] text-slate-400">DB</div>
                          <div className="font-bold text-[#2496ED]">Postgres</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                      <span className="text-emerald-400 font-bold">RAB Kunci: Rp 0 Overbudget</span>
                      <span className="text-slate-400 font-medium">Arsitek Abinest ✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>100% Konsultasi Gratis</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Tahap Awal</span>
              </div>
            </div>

            {/* CARD 02: Desain & Kontrak SLA */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-purple-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
              {/* Subtle Ambient Backlight on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-purple-600">02</span>
                    <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:scale-105 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <FileCheck2 className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Hari 4 – 7
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                    Desain &amp; Kontrak SLA
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Penyusunan prototype interaktif, timeline mingguan, dan perjanjian garansi SLA tertulis bertanda tangan hukum.
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="p-3 rounded-2xl bg-purple-50/70 border border-purple-200/60 text-xs text-purple-900">
                  <div className="font-bold uppercase tracking-wider text-[9.5px] text-purple-600 flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5" />
                    <span>Deliverable Fisik:</span>
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Figma Prototype &amp; Kontrak Resmi
                  </div>
                </div>

                {/* DEDICATED VISUAL STAGE: Figma Canvas */}
                <div className="mt-4 rounded-2xl bg-[#0B1220] border border-slate-800 p-4 shadow-md relative overflow-hidden group-hover:border-purple-500/50 group-hover:shadow-[0_12px_28px_rgba(168,85,247,0.15)] transition-all duration-300">
                  <div className="h-[145px] w-full flex flex-col justify-between text-white select-none">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-purple-400 font-bold">
                        <Palette className="w-3.5 h-3.5" />
                        <span>Figma // #Main_Prototype_1440</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-bold border border-purple-500/30">
                        100% INTERAKTIF
                      </span>
                    </div>

                    <div className="py-1.5">
                      <div className="rounded-xl bg-slate-900/90 border border-slate-700/80 p-2.5 space-y-2">
                        <div className="flex items-center justify-between text-[10px]">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                            <span className="font-bold text-slate-200">SOP Alur Bisnis Kustom</span>
                          </div>
                          <span className="text-[9px] text-purple-400 font-mono">↗ Designer Active</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1.5 h-6">
                          <div className="rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[8px] text-slate-400">Nav</div>
                          <div className="rounded bg-purple-950/60 border border-purple-500/40 flex items-center justify-center text-[8px] text-purple-300 font-bold">Dashboard</div>
                          <div className="rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-[8px] text-slate-400">Data Grid</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
                      <span className="text-sky-300 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-sky-400" />
                        <span>Garansi SLA 99.9% Uptime</span>
                      </span>
                      <span className="text-emerald-400 font-bold">Legal Materai ✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-purple-700 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-purple-600" />
                  <span>Kontrak Bertanda Tangan</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Kepastian Hukum</span>
              </div>
            </div>

            {/* CARD 03: Sprint & Akses Staging */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
              {/* Subtle Ambient Backlight on Hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black text-emerald-600">03</span>
                    <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-2xs">
                      <Laptop className="w-5 h-5" />
                    </div>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    Minggu 2 – 6
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                    Sprint &amp; Akses Staging
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Pembangunan sistem secara modular. Anda dapat menguji fitur langsung tiap pekan secara real-time via Portal Klien.
                  </p>
                </div>

                {/* Deliverable Badge */}
                <div className="p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 text-xs text-emerald-900">
                  <div className="font-bold uppercase tracking-wider text-[9.5px] text-emerald-600 flex items-center gap-1.5">
                    <PackageCheck className="w-3.5 h-3.5" />
                    <span>Deliverable Fisik:</span>
                  </div>
                  <div className="font-semibold text-slate-800 mt-0.5">
                    Server Staging &amp; Laporan Sprint
                  </div>
                </div>

                {/* DEDICATED VISUAL STAGE: Staging Browser & Logs */}
                <div className="mt-4 rounded-2xl bg-[#0B1220] border border-slate-800 p-4 shadow-md relative overflow-hidden group-hover:border-emerald-500/50 group-hover:shadow-[0_12px_28px_rgba(16,185,129,0.15)] transition-all duration-300">
                  <div className="h-[145px] w-full flex flex-col justify-between font-mono text-white select-none">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>staging.abinest.id/portal</span>
                      </div>
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold border border-emerald-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>LIVE 24/7</span>
                      </span>
                    </div>

                    <div className="py-1 space-y-1.5 text-[9px]">
                      <div className="flex items-center justify-between text-slate-300 bg-slate-900/80 px-2 py-1.5 rounded-lg border border-slate-800">
                        <span>Sprint 03: Modul Transaksi &amp; AI</span>
                        <span className="text-emerald-400 font-bold">100% PASS</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-400 bg-slate-900/50 px-2 py-1 rounded-lg border border-slate-800/60">
                        <span>Audit Progres Mingguan</span>
                        <span className="text-sky-400">Portal Klien ✓</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                      <span>Branch: main-v1.0</span>
                      <span className="text-blue-400 font-bold">Transparan Tanpa Rahasia</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-emerald-700 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Transparan 24/7</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Uji Tiap Pekan</span>
              </div>
            </div>
          </div>

          {/* BENTO GRID: ROW 2 (2 Wide Flagship Cards: Steps 04 & 05) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CARD 04: Uji Beban & Training */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-amber-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
                {/* Left (5 cols): Description & Deliverable */}
                <div className="sm:col-span-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-amber-500">04</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      Minggu 7
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Users className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] leading-snug">
                    Uji Beban &amp; Training
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    Stress-testing sistem agar anti-down pada lonjakan traffic, serta pendampingan staf hingga benar-benar mahir.
                  </p>

                  <div className="p-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900">
                    <div className="font-bold uppercase tracking-wider text-[9px] text-amber-600 flex items-center gap-1">
                      <PackageCheck className="w-3 h-3" />
                      <span>Deliverable Fisik:</span>
                    </div>
                    <div className="font-semibold text-slate-800 mt-0.5">
                      Laporan Load Test &amp; Modul Training
                    </div>
                  </div>
                </div>

                {/* Right (7 cols): Widescreen Visual Dashboard */}
                <div className="sm:col-span-7 rounded-2xl bg-[#0B1220] border border-slate-800 p-4 shadow-md relative overflow-hidden group-hover:border-amber-500/50 group-hover:shadow-[0_12px_28px_rgba(245,158,11,0.15)] transition-all duration-300">
                  <div className="h-[185px] w-full flex flex-col justify-between font-mono text-white select-none">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                      <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                        <Gauge className="w-3.5 h-3.5" />
                        <span>STRESS_TEST // k6 &amp; Locust Engine</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-bold border border-emerald-500/30">
                        ANTI-DOWN 99.9%
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 py-2">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-[8px] text-slate-400 uppercase tracking-wider">Kecepatan Respons</div>
                        <div className="text-xl font-black text-emerald-400">&lt;0.8 Detik</div>
                        <div className="text-[8px] text-slate-500">Google Core Web Vitals</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                        <div className="text-[8px] text-slate-400 uppercase tracking-wider">Kapasitas Lonjakan</div>
                        <div className="text-xl font-black text-sky-400">10,000 Req/s</div>
                        <div className="text-[8px] text-slate-500">0% Error Lulus Uji</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
                      <div className="flex items-center gap-1 text-emerald-400 font-bold">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20">Perf 100</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20">SEO 100</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20">A11y 100</span>
                      </div>
                      <span className="text-slate-400 font-medium">Buku Panduan ID + Video HD</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-amber-700 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600" />
                  <span>Garansi Sistem Siap Pakai</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Staf Terlatih Mandiri</span>
              </div>
            </div>

            {/* CARD 05: Serah Terima Penuh Hak Milik */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center relative z-10">
                {/* Left (5 cols): Description & Deliverable */}
                <div className="sm:col-span-5 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#2563EB]">05</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-100 text-[#1E40AF] border border-blue-200">
                      Minggu 8 &amp; Seterusnya
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF] group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-2xs">
                    <ShieldCheck className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] leading-snug">
                    Serah Terima Penuh
                  </h3>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    100% source code, skema database, dan kontrol server diserahkan utuh menjadi aset resmi institusi Anda tanpa biaya lisensi bulanan.
                  </p>

                  <div className="p-2.5 rounded-2xl bg-blue-50/70 border border-blue-200/60 text-xs text-blue-900">
                    <div className="font-bold uppercase tracking-wider text-[9.5px] text-blue-600 flex items-center gap-1">
                      <PackageCheck className="w-3.5 h-3.5" />
                      <span>Deliverable Fisik:</span>
                    </div>
                    <div className="font-semibold text-slate-800 mt-0.5">
                      Full Git Repo &amp; PostgreSQL Dump
                    </div>
                  </div>
                </div>

                {/* Right (7 cols): Widescreen Visual Vault */}
                <div className="sm:col-span-7 rounded-2xl bg-[#0B1220] border border-slate-800 p-4 shadow-md relative overflow-hidden group-hover:border-blue-500/50 group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.15)] transition-all duration-300">
                  <div className="h-[185px] w-full flex flex-col justify-between font-mono text-white select-none">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                      <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                        <KeyRound className="w-3.5 h-3.5" />
                        <span>ENTERPRISE_VAULT // 100% OWNERSHIP</span>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-bold border border-blue-500/30">
                        ZERO LOCK-IN
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 py-2">
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <div className="text-[8px] text-slate-400">REPOSITORY RESMI</div>
                        <div className="text-xs font-bold text-white truncate">GitHub Private Repo</div>
                        <div className="text-[8px] text-emerald-400 font-bold">✓ Hak Akses Root 100%</div>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
                        <div className="text-[8px] text-slate-400">DATABASE BACKUP</div>
                        <div className="text-xs font-bold text-white truncate">PostgreSQL .sql.gz</div>
                        <div className="text-[8px] text-emerald-400 font-bold">✓ Database Dump Asli</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[9px]">
                      <span className="text-emerald-400 font-bold">Aset Milik Perusahaan Selamanya</span>
                      <span className="text-slate-400 font-medium">Bebas Biaya Sewa Bulanan ✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-700 relative z-10">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Hak Milik 100% Mutlak</span>
                </div>
                <span className="text-[11px] text-slate-500 font-medium">Aset Digital Mandiri</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: MASTER COMPARISON TABLE (FLEKSIBILITAS ABINEST vs SEWA BULANAN)   */}
        {/* ========================================================================= */}
        <div id="perbandingan" className="space-y-8 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF]">
              <Scale className="w-3.5 h-3.5 text-blue-600" />
              <span className="text-[11px] font-bold tracking-wider uppercase">
                ANALISA TOTAL COST OF OWNERSHIP (TCO)
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
              Bandingkan: Solusi Fleksibel Abinest vs Software Sewa Bulanan
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
              Pahami mengapa solusi fleksibel Abinest jauh lebih aman, transparan, dan melindungi aset bisnis jangka panjang dibanding sistem sewa SaaS impor konvensional.
            </p>
          </div>

          {/* Responsive Comparison Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200/90 shadow-sm bg-white">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-xs">
                  <th className="py-4 px-5 font-bold text-slate-700 w-1/4">
                    Kriteria Evaluasi
                  </th>
                  <th className="py-4 px-5 font-bold text-[#1D4ED8] bg-blue-50/70 border-x border-blue-100 w-1/3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]" />
                      <span className="text-sm">Skema Abinest (Fleksibel)</span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-blue-600 text-white font-extrabold">
                        Rekomendasi
                      </span>
                    </div>
                  </th>
                  <th className="py-4 px-5 font-bold text-slate-500 w-1/4">
                    Software Sewa SaaS (Impor)
                  </th>
                  <th className="py-4 px-5 font-bold text-slate-500 w-1/5">
                    Agensi Konvensional
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {comparisonRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`hover:bg-slate-50/50 transition-colors ${
                      row.highlight ? "bg-blue-50/10" : ""
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-[#0F172A]">
                      {row.metric}
                    </td>
                    <td className="py-4 px-5 bg-blue-50/40 border-x border-blue-100 font-semibold text-[#0F172A]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{row.abinest}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.saas}</span>
                      </div>
                    </td>
                    <td className="py-4 px-5 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
