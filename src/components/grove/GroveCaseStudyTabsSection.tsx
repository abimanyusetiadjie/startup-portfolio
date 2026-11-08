"use client";

import Link from "next/link";
import { Check, ArrowRight, Globe, Server, Zap, Sparkles } from "lucide-react";

export function GroveCaseStudyTabsSection() {
  const pillars = [
    {
      id: "pilar-website",
      number: "Pilar Layanan 01",
      icon: Globe,
      title: "Jasa Pembuatan Website",
      subtitle: "Cepat Dibuka, Mudah Dikelola Sendiri, & Mudah Ditemukan di Google",
      forWhom: "Sekolah, Yayasan Pendidikan, UMKM, Klinik, & Perusahaan Menengah",
      benefitDesc:
        "Tampilkan citra institusi yang kredibel dan profesional. Website dirancang agar langsung terbuka dalam hitungan persekian detik di HP orang tua maupun calon pelanggan, serta bisa diperbarui sendiri oleh staf Anda kapan saja.",
      features: [
        "Terbuka sangat cepat (<0,8 detik) sehingga pengunjung tidak batal membuka halaman.",
        "Staf TU atau admin bisa mengupdate berita, pengumuman, dan foto sendiri tanpa perlu coding.",
        "Struktur ramah Google (SEO-friendly) agar sekolah atau bisnis Anda mudah muncul di halaman pertama.",
        "Tampilan rapi dan nyaman dibaca di semua ukuran layar HP, tablet, maupun laptop.",
      ],
      realOutcome:
        "Contoh Hasil Nyata: Website Yayasan Pendidikan Bina Insani terbuka dalam 0,7 detik (Skor Google 99/100) dan meningkatkan pendaftar PPDB online sebesar +40%.",
      pageHref: "/jasa-pembuatan-website-jakarta",
      waText:
        "Halo Abinest, saya ingin mendiskusikan kebutuhan Pembuatan Website untuk institusi/perusahaan kami.",
      highlight: false,
    },
    {
      id: "pilar-sistem",
      number: "Pilar Layanan 02 · Paling Banyak Dipilih",
      icon: Server,
      title: "Jasa Pembuatan Sistem",
      subtitle: "SIAKAD Sekolah, Sistem Yayasan, ERP Ringan, & Dashboard Anti-Down",
      forWhom: "SMA/SMK/MA, SMP, SD, Yayasan Multi-Unit, & Operasional Perusahaan",
      benefitDesc:
        "Kelola akademik, keuangan SPP, absensi, ujian online, hingga stok dan laporan cabang dalam satu sistem terpadu. Dirancang khusus agar tetap berjalan stabil tanpa macet di momen paling sibuk sekalipun.",
      features: [
        "Sistem tetap jalan lancar saat 1.200+ siswa ujian bersamaan atau saat pendaftaran PPDB membludak (SLA 99.9% Uptime).",
        "Akses aman terpisah sesuai jabatan: Kepala Sekolah, Guru, Wali Kelas, Staf Keuangan, Siswa, dan Orang Tua.",
        "Cetak ratusan rapor PDF Kurikulum Merdeka secara serentak di latar belakang tanpa membuat sistem menjadi berat.",
        "100% source code menjadi hak milik institusi Anda tanpa biaya sewa bulanan per siswa.",
      ],
      realOutcome:
        "Contoh Hasil Nyata: SIAKAD SMA IT Al-Hikmah melayani 1.240 siswa ujian serentak dengan 0% server crash dan memangkas waktu cetak 600 rapor dari 3 hari menjadi 4 menit.",
      pageHref: "/jasa-pembuatan-sistem-sekolah",
      waText:
        "Halo Abinest, saya ingin mendiskusikan kebutuhan Pembuatan Sistem (SIAKAD / ERP / Sistem Kustom) untuk institusi kami.",
      highlight: true,
    },
    {
      id: "pilar-automasi",
      number: "Pilar Layanan 03",
      icon: Zap,
      title: "Jasa Automasi Kerja & WhatsApp",
      subtitle: "Ubah Pekerjaan Manual yang Menumpuk Menjadi Otomatis & Bebas Salah Input",
      forWhom: "Bagian Keuangan Sekolah, Admin PPDB, Customer Service, & Tim Operasional",
      benefitDesc:
        "Hemat belasan jam kerja staf setiap minggu. Sistem akan mengirimkan pengingat tagihan, bukti bayar, informasi kelulusan, dan rekapitulasi laporan secara otomatis tepat waktu tanpa perlu diketik satu per satu.",
      features: [
        "Notifikasi tagihan SPP atau invoice terkirim otomatis ke WhatsApp orang tua/pelanggan, admin tidak perlu kirim manual satu per satu.",
        "Menggunakan jalur resmi Meta Cloud API sehingga nomor WhatsApp institusi Anda aman dan tidak rawan diblokir.",
        "Pembuatan kuitansi PDF, kartu ujian, dan rekap pembayaran harian langsung terdata otomatis tanpa salah ketik.",
        "Bisa dihubungkan langsung dengan sistem maupun catatan Excel/Google Sheets yang sudah biasa dipakai tim Anda.",
      ],
      realOutcome:
        "Contoh Hasil Nyata: Automasi WhatsApp & rekap tagihan di PT Maju Bersama Distribusi berhasil memangkas 12 jam kerja manual admin setiap minggu dan mempercepat pelunasan tagihan hingga 35%.",
      pageHref: "/jasa-automasi-whatsapp",
      waText:
        "Halo Abinest, saya ingin mendiskusikan kebutuhan Automasi WhatsApp & Alur Kerja untuk institusi/perusahaan kami.",
      highlight: false,
    },
  ];

  return (
    <section
      id="layanan-utama"
      className="py-24 relative bg-white border-y border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            3 PILAR LAYANAN UTAMA ABINEST
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Solusi Teknologi Tepat Guna Sesuai Kebutuhan Institusi Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Pilih layanan yang paling mendesak bagi organisasi Anda saat ini — mulai dari pembaruan website, pembangunan sistem terpadu, hingga automasi pekerjaan harian.
          </p>
        </div>

        {/* 3 Large Distinct Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  p.highlight
                    ? "bg-[#FAF9F6] border-2 border-[#D97736] shadow-[0_20px_50px_rgba(217,119,54,0.12)] relative"
                    : "bg-[#FAF9F6] border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:border-slate-300"
                }`}
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        p.highlight
                          ? "bg-[#D97736] text-white"
                          : "bg-slate-200/70 text-slate-700"
                      }`}
                    >
                      {p.number}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-[#0F172A] shadow-sm">
                      <Icon className="w-5 h-5 text-[#C2672B]" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A] tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#C2672B] leading-snug">
                      {p.subtitle}
                    </p>
                  </div>

                  {/* Target Audience Pill */}
                  <div className="rounded-2xl bg-white border border-slate-200/80 p-3.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      COCOK UNTUK:
                    </span>
                    <p className="text-xs font-semibold text-[#0F172A] mt-0.5">
                      {p.forWhom}
                    </p>
                  </div>

                  {/* Benefit Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {p.benefitDesc}
                  </p>

                  {/* 4 Benefit-Driven Features */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-200/70">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F172A] block">
                      Apa yang Anda Dapatkan:
                    </span>
                    <ul className="space-y-2.5">
                      {p.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                            <Check className="w-3 h-3" />
                          </span>
                          <span className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Real Outcome Box & CTAs */}
                <div className="mt-8 pt-5 border-t border-slate-200/80 space-y-4">
                  <div className="rounded-2xl bg-orange-50/70 border border-orange-200/70 p-3.5">
                    <div className="flex items-start gap-2">
                      <Sparkles className="w-4 h-4 text-[#C2672B] shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-slate-800 leading-relaxed">
                        {p.realOutcome}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <a
                      href={`https://wa.me/6285708677918?text=${encodeURIComponent(p.waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                        p.highlight
                          ? "bg-[#D97736] hover:bg-[#C2672B] text-white shadow-[0_8px_20px_rgba(217,119,54,0.3)]"
                          : "bg-[#0F172A] hover:bg-slate-800 text-white"
                      }`}
                    >
                      <span>Diskusikan Kebutuhan Ini</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>

                    <Link
                      href={p.pageHref}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-600 hover:text-[#C2672B] transition-colors"
                    >
                      <span>Pelajari Detail Layanan &amp; Estimasi</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
