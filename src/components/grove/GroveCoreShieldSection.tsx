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


function DeliverableHalfPeek({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="w-[185px] rounded-xl bg-[#0B1220] text-white p-2.5 shadow-2xl border border-slate-700/80 font-mono text-[9px]">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800">
          <span className="flex items-center gap-1 text-sky-400 font-bold truncate">
            <FileText className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">BLUEPRINT_v1.pdf</span>
          </span>
          <span className="px-1 py-0.5 bg-emerald-500/20 text-emerald-300 text-[8px] font-semibold rounded shrink-0">
            APPROVED
          </span>
        </div>
        <div className="space-y-1 text-slate-300 text-[8.5px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Arsitektur:</span>
            <span className="text-white font-semibold">Modular Cloud</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">RAB Kunci:</span>
            <span className="text-emerald-400 font-bold">Rp 0 Overbudget</span>
          </div>
        </div>
        <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400">
          <span>Estimasi: 3 Pekan</span>
          <span className="text-blue-400 font-semibold">Sistem Arsitek ✓</span>
        </div>
      </div>
    );
  }

  if (index === 1) {
    return (
      <div className="w-[185px] rounded-xl bg-[#0B1220] text-white p-2.5 shadow-2xl border border-slate-700/80 text-[9px]">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 font-mono text-[8px]">
          <span className="flex items-center gap-1 text-purple-400 font-bold truncate">
            <Palette className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">FIGMA_PROTOTYPE</span>
          </span>
          <span className="px-1 py-0.5 bg-purple-500/20 text-purple-300 rounded shrink-0">
            #1440px
          </span>
        </div>
        <div className="p-1.5 rounded-lg bg-slate-800/70 border border-slate-700/60 space-y-1">
          <div className="flex items-center justify-between text-[8px]">
            <span className="text-slate-300">UX Flow Kustom</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-gradient-to-r from-purple-500 to-blue-500" />
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-[8px] text-sky-300 font-semibold">
          <span>Garansi SLA 99.9%</span>
          <span className="text-emerald-400 font-bold">Legal Materai ✓</span>
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="w-[185px] rounded-xl bg-[#0B1220] text-white p-2.5 shadow-2xl border border-slate-700/80 font-mono text-[9px]">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[8px]">
          <span className="flex items-center gap-1 text-emerald-400 font-bold truncate">
            <Terminal className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">STAGING_SERVER</span>
          </span>
          <span className="px-1 py-0.5 bg-emerald-500/20 text-emerald-300 rounded shrink-0">
            LIVE 24/7
          </span>
        </div>
        <div className="space-y-1 text-slate-300 text-[8.5px]">
          <div className="text-slate-400 truncate">
            staging.abinest.id
          </div>
          <div className="flex items-center gap-1 text-emerald-400 text-[8px]">
            <span>✓ 32/32 Modules Passed</span>
          </div>
        </div>
        <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400">
          <span>Branch: main-v1</span>
          <span className="text-blue-400 font-semibold">Uji Tiap Pekan ✓</span>
        </div>
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="w-[185px] rounded-xl bg-[#0B1220] text-white p-2.5 shadow-2xl border border-slate-700/80 font-mono text-[9px]">
        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[8px]">
          <span className="flex items-center gap-1 text-amber-400 font-bold truncate">
            <Gauge className="w-2.5 h-2.5 shrink-0" />
            <span className="truncate">LOAD_STRESS_TEST</span>
          </span>
          <span className="px-1 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold shrink-0">
            99.9% PASS
          </span>
        </div>
        <div className="space-y-1 text-slate-300 text-[8.5px]">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Response Speed:</span>
            <span className="text-emerald-400 font-bold">&lt;0.8 Detik</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Concurrent User:</span>
            <span className="text-white font-semibold">10,000 Req/s</span>
          </div>
        </div>
        <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400">
          <span>Google Core Vitals</span>
          <span className="text-emerald-400 font-bold">100/100 ✓</span>
        </div>
      </div>
    );
  }

  // index === 4 (Step 05)
  return (
    <div className="w-[185px] rounded-xl bg-[#0B1220] text-white p-2.5 shadow-2xl border border-slate-700/80 font-mono text-[9px]">
      <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-800 text-[8px]">
        <span className="flex items-center gap-1 text-blue-400 font-bold truncate">
          <KeyRound className="w-2.5 h-2.5 shrink-0" />
          <span className="truncate">100%_OWNERSHIP</span>
        </span>
        <span className="px-1 py-0.5 bg-blue-500/20 text-blue-300 rounded font-bold shrink-0">
          DELIVERED
        </span>
      </div>
      <div className="space-y-1 text-slate-300 text-[8.5px]">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Git Repository:</span>
          <span className="text-white font-semibold">Full Transfer</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Database Dump:</span>
          <span className="text-emerald-400 font-bold">PostgreSQL .sql</span>
        </div>
      </div>
      <div className="mt-2 pt-1 border-t border-slate-800/80 flex items-center justify-between text-[8px] text-slate-400">
        <span>Zero Biaya Sewa</span>
        <span className="text-emerald-400 font-bold">Hak Milik Penuh ✓</span>
      </div>
    </div>
  );
}

export function GroveCoreShieldSection() {
  const steps = [
    {
      step: "01",
      timeline: "Hari 1 – 3",
      icon: ClipboardList,
      title: "Konsultasi Kebutuhan",
      desc: "Diskusi mendalam mengenai alur operasional bisnis Anda langsung bersama sistem arsitek.",
      deliverable: "Dokumen Blueprint & RAB Transparan",
      guarantee: "100% Gratis",
    },
    {
      step: "02",
      timeline: "Hari 4 – 7",
      icon: FileCheck2,
      title: "Desain & Kontrak SLA",
      desc: "Penyusunan prototype interaktif, timeline mingguan, dan perjanjian garansi SLA bertanda tangan.",
      deliverable: "Figma Prototype & Kontrak Resmi",
      guarantee: "Kontrak Bertanda Tangan",
    },
    {
      step: "03",
      timeline: "Minggu 2 – 6",
      icon: Laptop,
      title: "Sprint & Akses Staging",
      desc: "Pembangunan sistem secara modular. Anda dapat menguji fitur langsung tiap pekan via Portal Klien.",
      deliverable: "Server Staging & Laporan Sprint",
      guarantee: "Transparan 24/7",
    },
    {
      step: "04",
      timeline: "Minggu 7",
      icon: Users,
      title: "Uji Beban & Training",
      desc: "Stress-testing sistem agar anti-down pada lonjakan traffic, serta pelatihan staf hingga benar-benar mahir.",
      deliverable: "Laporan Load Test & Modul Training",
      guarantee: "Buku Panduan ID",
    },
    {
      step: "05",
      timeline: "Minggu 8 & Seterusnya",
      icon: ShieldCheck,
      title: "Serah Terima Penuh",
      desc: "100% source code, skema database, dan kontrol server diserahkan utuh menjadi aset resmi institusi Anda.",
      deliverable: "Full Git Repo & DB Dump",
      guarantee: "Hak Milik 100%",
    },
  ];

  const comparisonRows = [
    {
      metric: "Total Biaya 3 Tahun (TCO)",
      abinest: "Investasi sekali di awal. Hemat hingga 70%+ dalam 3 tahun tanpa iuran bulanan.",
      saas: "Biaya sewa bulanan terus membengkak (Rp 20–80 Jt/tahun) seiring bertambahnya user.",
      agency: "Biaya awal murah tapi ada tagihan tersembunyi untuk maintenance bulanan.",
      highlight: true,
    },
    {
      metric: "Kepemilikan Source Code & Data",
      abinest: "100% Hak Milik Klien. Git repo, database dump & root access diserahkan penuh.",
      saas: "0% Kepemilikan. Data tersandera di server vendor luar negeri.",
      agency: "Source code ditahan sebagai alasan kontrak maintenance tahunan.",
      highlight: true,
    },
    {
      metric: "Tambah Karyawan / Siswa / User",
      abinest: "Rp 0 (Bebas tambah 1.000 hingga 10.000 user tanpa biaya ekstra sepeser pun).",
      saas: "Dikenakan biaya tambahan per user (Rp 50.000 - Rp 350.000 / user / bulan).",
      agency: "Sering meminta biaya lisensi instance tambahan saat user bertambah.",
      highlight: true,
    },
    {
      metric: "Kustomisasi Alur Kerja Bisnis",
      abinest: "100% Kustom sesuai SOP unik bisnis Anda tanpa batasan template.",
      saas: "Kaku. Bisnis Anda yang harus mengalah dan menyesuaikan alur software.",
      agency: "Terbatas pada plugin CMS umum yang mudah konflik dan lambat.",
      highlight: false,
    },
    {
      metric: "Respons Perbaikan & SLA",
      abinest: "Garansi SLA 99.9% tertulis, respons engineer <15 menit di jam kerja.",
      saas: "Tiket antrean customer service umum (estimasi 2 – 3 hari kerja).",
      agency: "Tidak ada jaminan SLA tertulis, sulit dihubungi setelah pelunasan.",
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
        {/* PART 1: VISUAL HORIZONTAL PIPELINE (5 LANGKAH KERJA & DELIVERABLE FISIK) */}
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
              Setiap tahapan memiliki output fisik (*deliverable*) yang jelas sehingga Anda memegang kendali penuh atas investasi teknologi bisnis Anda.
            </p>
          </div>

                    {/* Horizontal Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400/80 hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Interactive Deliverable Half-Peek Mockup (Reveals with Ambient Glow on Hover) */}
                  <div
                    className="absolute -bottom-6 -right-6 w-[185px] pointer-events-none select-none transition-all duration-500 ease-out z-0 translate-y-8 translate-x-6 rotate-6 opacity-0 scale-90 blur-[1px] group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-0 group-hover:opacity-100 group-hover:scale-100 group-hover:blur-0"
                    aria-hidden="true"
                  >
                    {/* Ambient Glow Aura */}
                    <div className="absolute inset-0 bg-blue-500/25 blur-xl rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Miniature Artifact Card */}
                    <div className="relative shadow-[0_16px_36px_rgba(15,23,42,0.30)] rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                      <DeliverableHalfPeek index={idx} />
                    </div>
                  </div>

                  {/* Card Main Foreground Content */}
                  <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#2563EB]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs">
                        {s.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF] group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:text-white transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {s.desc}
                    </p>

                    {/* Output Fisik Deliverable Badge */}
                    <div className="pt-2">
                      <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200/70 text-[10.5px] text-[#1E40AF] group-hover:bg-white/95 group-hover:border-blue-300 group-hover:shadow-xs transition-all duration-300">
                        <div className="font-bold uppercase tracking-wider text-[9px] text-blue-600 flex items-center justify-between">
                          <span className="flex items-center gap-1">
                            <PackageCheck className="w-3 h-3" />
                            <span>Deliverable Fisik:</span>
                          </span>
                          <span className="text-[8px] font-semibold text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            Preview ↗
                          </span>
                        </div>
                        <div className="font-semibold text-slate-800 mt-0.5">
                          {s.deliverable}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Guarantee Row */}
                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-bold text-blue-700 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{s.guarantee}</span>
                    </div>
                    <span className="text-[9.5px] text-slate-400 group-hover:text-blue-600 font-semibold transition-colors hidden sm:inline">
                      Bukti Fisik
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 2: VISUAL PROOF OF 100% SOURCE CODE & CLIENT PORTAL OWNERSHIP        */}
        {/* ========================================================================= */}
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_15px_40px_rgba(15,23,42,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (5 cols): Tangible Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-wider">
                <FileCode2 className="w-3.5 h-3.5" />
                Jaminan Zero Vendor Lock-in
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
                100% Source Code &amp; Database Menjadi Hak Milik Perusahaan Anda.
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Banyak perusahaan terjebak software sewa bulanan impor yang mahal dan membatasi jumlah user. Di Abinest, sistem yang kami bangun adalah <strong>aset resmi perusahaan Anda selamanya</strong> tanpa biaya lisensi per user.
              </p>

              <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Serah terima full repository GitHub &amp; file backup database PostgreSQL</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Garansi tertulis SLA 99.9% Uptime resmi bertanda tangan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Portal Klien untuk tracking revisi, sprint milestone, dan garansi pasca-rilis</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all"
                >
                  <span>Mulai Konsultasi Tanpa Komitmen</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column (7 cols): VISUAL TERMINAL & HANDOVER REPO PACKAGE */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-2xl bg-slate-900 p-4 sm:p-6 shadow-[0_25px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-800 text-xs font-mono text-slate-300 space-y-4">
                {/* Handover Terminal Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <span className="text-slate-100 font-bold">
                      abinest-handover-package · v2.4.0 (Official Enterprise Release)
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-blue-950 text-sky-400 font-semibold border border-blue-800/80">
                    STATUS: FULL OWNERSHIP
                  </span>
                </div>

                {/* File Tree Visual */}
                <div className="space-y-1.5 text-[11px] leading-relaxed font-mono">
                  <div className="text-sky-400 font-bold flex items-center gap-1.5">
                    <FolderTree className="w-3.5 h-3.5" />
                    📁 repository/core-system/ (100% Hak Milik Klien)
                  </div>
                  <div className="pl-4 text-slate-400">├── 📁 src/ (Next.js 15 &amp; High-Throughput Microservices)</div>
                  <div className="pl-4 text-slate-400">├── 📁 database/ (PostgreSQL Schema &amp; Connection Pooling)</div>
                  <div className="pl-4 text-slate-400">├── 📁 automations/ (Document AI OCR &amp; Meta WhatsApp Agent)</div>
                  <div className="pl-4 text-slate-400">├── 📄 docker-compose.yml (High-Availability Cloud Ready)</div>
                  <div className="pl-4 text-slate-300 font-semibold">├── 📜 SERTI_GARANSI_SLA_99.9.pdf (Garansi Resmi Tertulis)</div>
                  <div className="pl-4 text-slate-300 font-semibold">└── 📘 DOKUMENTASI_ARSITEKTUR_DAN_API.pdf (Buku Panduan Lengkap)</div>
                </div>

                {/* Handover Proof Cards Inside Terminal */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl bg-slate-800/90 border border-slate-700/80 p-3 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      AKSES REPOSITORY
                    </div>
                    <div className="text-slate-100 font-bold text-xs flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-sky-400" />
                      github.com/perusahaan-klien/system
                    </div>
                    <div className="text-[10px] text-sky-400">
                      Private &amp; Ditransfer 100% ke Akun Anda
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-800/90 border border-slate-700/80 p-3 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">
                      BIAYA BULANAN / USER
                    </div>
                    <div className="text-slate-100 font-bold text-xs flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      Rp 0,- / Karyawan (Tanpa Biaya Lisensi)
                    </div>
                    <div className="text-[10px] text-slate-400">
                      Bebas Digunakan Selamanya
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PART 3: MASTER COMPARISON TABLE (ABINEST vs SOFTWARE SEWA SAAS)           */}
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
              Abinest (100% Hak Milik) vs Software Sewa Bulanan
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
              Bandingkan secara objektif mengapa kepemilikan kode program dari Abinest jauh lebih menguntungkan untuk pertumbuhan jangka panjang bisnis Anda.
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
                      <span className="text-sm">Abinest Studio</span>
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
