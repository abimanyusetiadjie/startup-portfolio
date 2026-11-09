"use client";

import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Laptop,
  Users,
  ShieldCheck,
  Unlock,
  Wrench,
  ArrowRight,
  FileCode2,
  FolderTree,
  Lock,
  Sparkles,
} from "lucide-react";

export function GroveCoreShieldSection() {
  const steps = [
    {
      step: "01",
      timeline: "Hari 1 – 3",
      icon: ClipboardList,
      title: "Konsultasi Kebutuhan",
      desc: "Diskusi santai mengenai alur kerja yang diinginkan tanpa istilah teknis rumit.",
      guarantee: "100% Gratis",
    },
    {
      step: "02",
      timeline: "Hari 4 – 7",
      icon: FileCheck2,
      title: "Proposal & Mockup",
      desc: "Kami menyerahkan desain awal, timeline mingguan, dan biaya tetap transparan.",
      guarantee: "Kontrak Resmi",
    },
    {
      step: "03",
      timeline: "Minggu 2 – 6",
      icon: Laptop,
      title: "Pembangunan & Demo",
      desc: "Setiap minggu Anda melihat demo langsung dan memantau progres via Portal Klien.",
      guarantee: "Transparan 24/7",
    },
    {
      step: "04",
      timeline: "Minggu 7",
      icon: Users,
      title: "Uji Beban & Training",
      desc: "Sistem diuji agar anti-down. Tim operasional dan admin bisnis Anda kami latih sampai benar-benar mahir.",
      guarantee: "Buku Panduan ID",
    },
    {
      step: "05",
      timeline: "Minggu 8 & Seterusnya",
      icon: ShieldCheck,
      title: "Serah Terima Penuh",
      desc: "100% source code dan database diserahkan penuh menjadi aset resmi institusi Anda.",
      guarantee: "Hak Milik 100%",
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-14 sm:py-16 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-16">
        {/* ========================================================================= */}
        {/* PART 1: VISUAL HORIZONTAL PIPELINE (5 LANGKAH KERJA)                      */}
        {/* ========================================================================= */}
        <div className="space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
              ALUR KERJA TRANSPARAN
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
              5 Langkah Mudah Menuju Sistem yang Siap Beroperasi
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
              Anda tidak perlu pusing memikirkan hal teknis. Kami memandu seluruh proses dari diskusi awal hingga sistem digunakan staf Anda.
            </p>
          </div>

          {/* Horizontal Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 relative group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#2563EB]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200">
                        {s.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1E40AF] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center gap-1.5 text-[11px] font-bold text-blue-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{s.guarantee}</span>
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

              <p className="text-sm text-slate-600 leading-relaxed">
                Banyak perusahaan terjebak software impor dengan biaya sewa bulanan mahal yang terus membengkak per user. Di Abinest, sistem yang kami bangun adalah <strong>aset resmi perusahaan Anda selamanya</strong> tanpa biaya lisensi per user.
              </p>

              <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Serah terima full repository GitHub &amp; file backup database</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Garansi tertulis SLA 99.9% Uptime resmi bertanda tangan</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Portal Klien untuk tracking revisi, milestone, dan garansi pasca-rilis</span>
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
                    📁 repository/enterprise-erp-core/ (100% Hak Milik Klien)
                  </div>
                  <div className="pl-4 text-slate-400">├── 📁 src/ (Next.js 15 &amp; High-Throughput Microservices)</div>
                  <div className="pl-4 text-slate-400">├── 📁 database/ (PostgreSQL Schema &amp; Multi-Warehouse Sync)</div>
                  <div className="pl-4 text-slate-400">├── 📁 automations/ (Document AI OCR &amp; Meta WhatsApp Agent)</div>
                  <div className="pl-4 text-slate-400">├── 📄 docker-compose.yml (High-Availability Cloud Ready)</div>
                  <div className="pl-4 text-slate-300 font-semibold">├── 📜 SERTI_GARANSI_SLA_99.99.pdf (Garansi Resmi Tertulis)</div>
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
                      github.com/perusahaan-klien/enterprise-system
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
      </div>
    </section>
  );
}
