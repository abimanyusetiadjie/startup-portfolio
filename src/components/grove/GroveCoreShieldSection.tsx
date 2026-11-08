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
} from "lucide-react";

export function GroveCoreShieldSection() {
  const steps = [
    {
      step: "Langkah 01",
      timeline: "Hari 1 – 3 · Gratis",
      icon: ClipboardList,
      title: "Konsultasi & Pemetaan Kebutuhan",
      desc: "Anda cukup menceritakan masalah dan alur kerja yang diinginkan dalam bahasa sehari-hari. Tim kami yang menerjemahkannya menjadi solusi sistem yang rapi.",
      guarantee: "Jaminan: Diskusi awal 100% gratis tanpa ikatan apa pun.",
    },
    {
      step: "Langkah 02",
      timeline: "Hari 4 – 7",
      icon: FileCheck2,
      title: "Proposal & Desain Solusi",
      desc: "Kami menyerahkan dokumen rincian fitur, tampilan awal (mockup), jadwal pengerjaan mingguan, serta rincian biaya tetap di awal tanpa biaya tambahan tersembunyi.",
      guarantee: "Jaminan: Kontrak kerja resmi & garansi SLA 99.9% tertulis.",
    },
    {
      step: "Langkah 03",
      timeline: "Minggu 2 – 6",
      icon: Laptop,
      title: "Pembangunan & Demo Berkala",
      desc: "Setiap minggu kami mendemokan hasil pengerjaan kepada Anda. Anda bisa memantau persentase progres dan mengajukan catatan revisi langsung lewat Portal Klien.",
      guarantee: "Jaminan: Transparansi penuh via Portal Klien 24/7.",
    },
    {
      step: "Langkah 04",
      timeline: "Minggu 7",
      icon: Users,
      title: "Uji Coba & Training Staf",
      desc: "Sebelum diluncurkan, sistem diuji kekuatan servernya agar anti-down. Kami juga melatih staf TU, guru, atau admin Anda secara langsung sampai benar-benar mahir.",
      guarantee: "Jaminan: Buku panduan & video tutorial bahasa Indonesia.",
    },
    {
      step: "Langkah 05",
      timeline: "Minggu 8 & Seterusnya",
      icon: ShieldCheck,
      title: "Serah Terima & Pendampingan",
      desc: "Sistem resmi beroperasi penuh. Kami menyerahkan 100% source code dan akses database kepada institusi Anda, disertai masa garansi pendampingan pasca-rilis.",
      guarantee: "Jaminan: 100% Hak Milik Source Code & Respons <15 Menit.",
    },
  ];

  const engagementModels = [
    {
      badge: "OPSI UTAMA · PALING POPULER",
      icon: Unlock,
      title: "1. Proyek Sekali Bayar (Kepemilikan Penuh 100%)",
      subtitle: "Bayar sesuai pembangunan, miliki sistemnya selamanya tanpa biaya sewa bulanan.",
      points: [
        "Pembayaran aman secara bertahap mengikuti progres (milestone) yang sudah disepakati.",
        "Setelah sistem selesai, 100% source code dan database diserahkan penuh menjadi aset resmi Anda.",
        "Tidak ada biaya lisensi bulanan, tidak ada pungutan biaya per siswa atau per pengguna.",
        "Sudah termasuk garansi pemeliharaan dan pendampingan penuh setelah sistem resmi berjalan.",
      ],
      highlighted: true,
    },
    {
      badge: "OPSI PENDUKUNG · 100% OPSIONAL",
      icon: Wrench,
      title: "2. Pendampingan & Maintenance Berkala (Opsional)",
      subtitle: "Khusus bagi institusi yang tidak memiliki staf IT internal dan ingin terima beres sepanjang tahun.",
      points: [
        "Tidak wajib diambil — Anda bebas mengelola sistem sendiri menggunakan tim internal Anda.",
        "Jika diambil, tim engineer kami yang mengurus pemantauan server 24/7, backup harian, dan pembaruan keamanan.",
        "Prioritas respons teknis di bawah 15 menit saat momen penting seperti ujian sekolah, PPDB, atau tutup buku.",
        "Kontrak fleksibel yang bisa dihentikan kapan saja tanpa mengunci akses atau data sistem Anda.",
      ],
      highlighted: false,
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-24 relative overflow-hidden bg-[#FAF9F6] border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-24">
        {/* PART 1: 5-STEP TRANSPARENT PROCESS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
              ALUR KERJA YANG JELAS &amp; MENENANGKAN
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-tight">
              5 Langkah Mudah dari Diskusi Awal hingga Sistem Siap Dipakai
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Anda tidak perlu memahami bahasa pemrograman. Kami memandu seluruh tahapan dengan jadwal yang terukur dan laporan mingguan yang transparan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:border-orange-200 transition-all"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C2672B]">
                        {s.step}
                      </span>
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {s.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#C2672B]">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      {s.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-emerald-700 leading-snug">
                      ✓ {s.guarantee}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: ENGAGEMENT MODEL / MODEL KERJA SAMA */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
              MODEL KERJA SAMA TRANSPARAN
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Bebas Biaya Tersembunyi &amp; Tidak Mengikat
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami memberikan kepastian anggaran sejak hari pertama. Pilih skema kerja sama yang paling nyaman bagi kebijakan anggaran institusi Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1060px] mx-auto">
            {engagementModels.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-3xl p-7 sm:p-9 flex flex-col justify-between ${
                    m.highlighted
                      ? "bg-white border-2 border-[#D97736] shadow-[0_16px_40px_rgba(217,119,54,0.1)]"
                      : "bg-white border border-slate-200/90 shadow-sm"
                  }`}
                >
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          m.highlighted
                            ? "bg-[#D97736] text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {m.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#C2672B] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A]">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600">
                        {m.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-3 pt-2 border-t border-slate-100">
                      {m.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 pt-4 border-t border-slate-100">
                    <a
                      href="#kontak"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#C2672B] hover:text-[#0F172A] transition-colors"
                    >
                      <span>Konsultasikan Kebutuhan Sistem Anda</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
