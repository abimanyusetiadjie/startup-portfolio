"use client";

import { ArrowRight, CheckCircle2, Building2, GraduationCap, Briefcase } from "lucide-react";

export function GroveCaseStudySection() {
  const caseStudies = [
    {
      category: "STUDI KASUS 01 · SISTEM SIAKAD SEKOLAH",
      institution: "SMA Islam Terpadu Al-Hikmah",
      location: "Surabaya, Jawa Timur",
      icon: GraduationCap,
      headline: "SIAKAD Anti-Down untuk 1.240 Siswa Saat Ujian Massal — 0% Crash",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
      metrics: [
        { value: "0% Crash", label: "Saat 1.240 Siswa Ujian" },
        { value: "4 Menit", label: "Cetak 600 Rapor PDF" },
        { value: "99.98%", label: "Uptime Tahunan" },
      ],
      background:
        "Sekolah menengah atas dengan 1.240 siswa aktif dan 85 tenaga pendidik yang menyelenggarakan ujian berbasis komputer (CBT) serta pembagian rapor Kurikulum Merdeka secara digital.",
      problem:
        "Setiap kali ujian semester dimulai dan ratusan siswa login di menit yang sama, server lama langsung macet (error 504). Selain itu, proses unduh 600 rapor PDF selalu membuat sistem hang selama berhari-hari.",
      solution:
        "Abinest membangun ulang SIAKAD dengan arsitektur server anti-down yang memisahkan jalur ujian siswa dengan pemrosesan cetak rapor otomatis di latar belakang, lengkap dengan serah terima 100% source code.",
      result:
        "Ujian serentak 1.240 siswa berjalan 100% mulus tanpa satu pun keluhan server mati, dan pencetakan 600 rapor PDF selesai dalam 4 menit tanpa mengganggu aktivitas guru.",
    },
    {
      category: "STUDI KASUS 02 · WEBSITE YAYASAN & PPDB",
      institution: "Yayasan Pendidikan Bina Insani",
      location: "Jakarta Selatan, DKI Jakarta",
      icon: Building2,
      headline: "Website Sekolah Loading 0,7 Detik & Pendaftar PPDB Naik 40%",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
      metrics: [
        { value: "0,7 Detik", label: "Kecepatan Buka di HP" },
        { value: "+40%", label: "Kenaikan Pendaftar PPDB" },
        { value: "99 / 100", label: "Skor Google PageSpeed" },
      ],
      background:
        "Yayasan pendidikan yang menaungi unit SD, SMP, dan SMA di Jakarta Selatan dan mengandalkan website resmi sebagai pusat informasi pendaftaran murid baru (PPDB) bagi orang tua.",
      problem:
        "Website lama membutuhkan waktu lebih dari 8 detik untuk dibuka di HP sehingga banyak calon wali murid menutup halaman sebelum mendaftar. Staf humas juga kesulitan mengupdate berita karena tampilan admin yang rumit.",
      solution:
        "Abinest merancang ulang website menggunakan teknologi Next.js 15 berkecepatan tinggi, menyederhanakan alur formulir pendaftaran PPDB di HP, dan menyediakan dashboard admin yang sangat mudah dioperasikan staf TU.",
      result:
        "Waktu buka website turun drastis menjadi 0,7 detik, peringkat pencarian Google naik ke halaman pertama, dan jumlah pendaftar PPDB online meningkat 40% dibanding tahun sebelumnya.",
    },
    {
      category: "STUDI KASUS 03 · AUTOMASI WHATSAPP & LAPORAN",
      institution: "PT Maju Bersama Distribusi",
      location: "Jakarta Barat, DKI Jakarta",
      icon: Briefcase,
      headline: "Automasi WhatsApp Memangkas 12 Jam Kerja Admin Per Minggu",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
      metrics: [
        { value: "-12 Jam", label: "Kerja Manual / Minggu" },
        { value: "<2 Detik", label: "Pengiriman Invoice WA" },
        { value: "0 Blokir", label: "Jalur Resmi Meta API" },
      ],
      background:
        "Perusahaan distribusi barang kebutuhan ritel dengan ratusan mitra toko UMKM di Jabodetabek yang memiliki transaksi tagihan harian dan pengingat jatuh tempo rutin.",
      problem:
        "Empat staf admin keuangan menghabiskan lebih dari 12 jam setiap minggu hanya untuk mengecek tabel Excel, membuat PDF tagihan, dan mengirim pesan pengingat satu per satu ke WhatsApp pelanggan — serta sempat mengalami pemblokiran nomor.",
      solution:
        "Abinest mengintegrasikan sistem rekap tagihan perusahaan langsung ke WhatsApp resmi Meta Cloud API dan pembuat PDF otomatis, sehingga setiap pengingat jatuh tempo dan bukti lunas terkirim mandiri sesuai jadwal.",
      result:
        "Bebas 100% dari kerja kirim pesan manual, menghemat 12 jam kerja admin per minggu, nol kasus salah kirim nominal tagihan, dan pembayaran mitra masuk 35% lebih cepat.",
    },
  ];

  return (
    <section
      id="studi-kasus"
      className="py-24 relative bg-[#FAF9F6] border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            PORTOFOLIO &amp; BUKTI HASIL KERJA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Hasil Terukur di Sekolah, Yayasan, &amp; Perusahaan Klien Kami
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Setiap proyek dirancang untuk menyelesaikan masalah operasional nyata dengan ukuran keberhasilan yang jelas.
          </p>
        </div>

        {/* 3 Case Study Cards */}
        <div className="space-y-10">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.04)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                  {/* Left Column (5 cols): Visual + Institution + Measurable Metrics */}
                  <div className="lg:col-span-5 space-y-5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-orange-50 text-[#C2672B] border border-orange-200 text-[10px] font-bold uppercase tracking-wider">
                        {cs.category}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        {cs.location}
                      </span>
                    </div>

                    {/* Institution Badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#0F172A]">
                        <Icon className="w-5 h-5 text-[#C2672B]" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#0F172A]">
                          {cs.institution}
                        </div>
                        <div className="text-xs text-slate-500">
                          Klien Terverifikasi Abinest
                        </div>
                      </div>
                    </div>

                    {/* Image Thumbnail */}
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-slate-200 relative">
                      <img
                        src={cs.image}
                        alt={cs.headline}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* 3 Key Metric Boxes */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {cs.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-3 text-center"
                        >
                          <div className="text-base sm:text-lg font-extrabold text-[#C2672B]">
                            {m.value}
                          </div>
                          <div className="text-[10px] sm:text-[11px] font-semibold text-slate-700 mt-0.5 leading-tight">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (7 cols): Structured Case Study Breakdown */}
                  <div className="lg:col-span-7 space-y-6">
                    <h3 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight text-[#0F172A] leading-snug">
                      {cs.headline}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* 1. Latar Belakang */}
                      <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-4 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                          1. Latar Belakang Klien
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {cs.background}
                        </p>
                      </div>

                      {/* 2. Masalah */}
                      <div className="rounded-2xl bg-rose-50/40 border border-rose-200/60 p-4 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 block">
                          2. Masalah Sebelumnya
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {cs.problem}
                        </p>
                      </div>
                    </div>

                    {/* 3. Solusi Abinest */}
                    <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-4 sm:p-5 space-y-1.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] block">
                        3. Solusi yang Dibangun Abinest
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>

                    {/* 4. Hasil Terukur */}
                    <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-4 sm:p-5 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 block">
                          4. Hasil Nyata &amp; Dampak Terukur
                        </span>
                        <p className="text-xs sm:text-sm font-medium text-emerald-950 leading-relaxed">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mid-Page Conversion CTA Point #2 (After Case Studies) */}
        <div className="mt-14 rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
              Ingin Hasil yang Sama Stabilnya untuk Institusi atau Bisnis Anda?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Ceritakan kendala website, sistem, atau pekerjaan manual Anda saat ini. Kami siapkan rancangan solusinya secara gratis.
            </p>
          </div>
          <a
            href="#kontak"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-[0_8px_20px_rgba(217,119,54,0.3)] transition-all"
          >
            <span>Konsultasikan Kebutuhan Sistem Anda</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
