"use client";

import { useState } from "react";
import { Star, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export function GroveTestimonialsGrid() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      name: "Hendra Kusuma, S.E., M.B.A.",
      role: "VP of Digital Growth",
      institution: "Institusi Finansial & Pembiayaan · Jakarta",
      monogram: "HK",
      avatarBg: "from-blue-600 to-indigo-700",
      verifiedBadge: "Kontrak SLA Aktif",
      highlight: "Website Loading 0,5s & Inbound Leads +180%",
      metricImpact: "+180% Leads Organik",
      quote:
        "Website korporat kami sekarang langsung terbuka dalam sekejap mata di HP calon klien dan investor. Skor Google PageSpeed 100/100 benar-benar mengangkat visibilitas kami di Google, menghasilkan lonjakan leads inbound hingga 1.8 kali lipat.",
    },
    {
      name: "Drs. H. Mulyadi, M.Pd.",
      role: "Ketua Dewan Pembina Yayasan",
      institution: "Yayasan Pendidikan & Sekolah · Jawa Timur",
      monogram: "MY",
      avatarBg: "from-indigo-600 to-purple-700",
      verifiedBadge: "SIAKAD Anti-Down",
      highlight: "1.240 Siswa Ujian Serentak 0% Server Crash",
      metricImpact: "1.240 User Serentak 0% Lag",
      quote:
        "Sebelumnya server sekolah selalu tumbang setiap kali ada ujian semester online serentak. Bersama Abinest, 1.200 lebih siswa lancar mengerjakan ujian tanpa satu pun error, dan rapor PDF selesai dicetak dalam hitungan menit.",
    },
    {
      name: "Ir. Bambang Sutrisno, M.M.",
      role: "Direktur Operasional & Supply Chain",
      institution: "Distribusi Logistik Multi-Gudang · Jakarta Barat",
      monogram: "BS",
      avatarBg: "from-slate-700 to-slate-900",
      verifiedBadge: "100% Hak Milik Kode",
      highlight: "Hemat Ratusan Juta Tanpa Biaya Lisensi User",
      metricImpact: "Rp 0 Lisensi Bulanan",
      quote:
        "Sebelumnya kami terbebani biaya software impor puluhan juta tiap bulan yang membatasi jumlah akun karyawan. Abinest membangun sistem ERP kustom multi-gudang dengan 100% kepemilikan source code tanpa iuran lisensi selamanya.",
    },
    {
      name: "Sandra Wijaya, S.Ak., B.A.",
      role: "Head of Finance & Automation",
      institution: "Sentosa Retail & SCM · Surabaya",
      monogram: "SW",
      avatarBg: "from-cyan-600 to-blue-700",
      verifiedBadge: "Document AI OCR",
      highlight: "Automasi AI Memproses 6.000 Faktur Otomatis",
      metricImpact: "Hemat 40 Jam/Minggu",
      quote:
        "Pipeline Document AI OCR dari Abinest memangkas waktu kerja finance kami secara dramatis. Ribuan invoice PDF supplier terekstraksi dalam hitungan detik dengan akurasi 99.7% tanpa salah ketik manual.",
    },
    {
      name: "dr. Nadia Putri, MARS",
      role: "Direktur Operasional",
      institution: "Medika Healthcare Hub · Tangerang",
      monogram: "NP",
      avatarBg: "from-blue-700 to-teal-800",
      verifiedBadge: "SLA 99.9% Terikat",
      highlight: "100% Source Code & Portal Klien Transparan",
      metricImpact: "SLA Response <15 Menit",
      quote:
        "Yang paling membuat kami tenang bermitra dengan Abinest adalah transparansi Portal Klien. Setiap minggu progres sprint terlihat jelas, dan di akhir proyek seluruh repositori Git serta dokumentasi API diserahkan penuh menjadi aset kami.",
    },
    {
      name: "Rizky Pratama, M.Kom.",
      role: "VP of Engineering",
      institution: "PT Digital Sinergi · Bandung",
      monogram: "RP",
      avatarBg: "from-blue-800 to-slate-900",
      verifiedBadge: "Clean Architecture",
      highlight: "Respons Engineer <15 Menit & Arsitektur Solid",
      metricImpact: "Code Quality 100%",
      quote:
        "Standar rekayasa perangkat lunak Abinest sangat rapi: Clean Architecture, TypeScript type-safe, dan Docker containerized. Janji respons tim engineering di bawah 15 menit saat jam operasional benar-benar ditepati.",
    },
  ];

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section
      id="testimoni"
      className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF]">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold tracking-wider uppercase">
              KEPERCAYAAN EKSEKUTIF BISNIS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Apa Kata Para Pimpinan Perusahaan Tentang Hasil Rekayasa Kami
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Testimoni jujur dari direktur operasional, yayasan pendidikan, dan pimpinan finance yang telah membuktikan keandalan sistem Abinest.
          </p>
        </div>

        {/* 3 Prominent Curated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header: Verified Monogram + Verified Badge */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.avatarBg} text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs border border-white`}
                    >
                      {t.monogram}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-bold text-[#0F172A] leading-tight truncate">
                        {t.name}
                      </h4>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                    {t.verifiedBadge}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-medium pb-2 border-b border-slate-100">
                  {t.institution}
                </div>

                {/* Measurable Metric Impact Box */}
                <div className="bg-blue-50/60 border border-blue-200/70 rounded-xl px-3 py-1.5 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#1E40AF]">{t.highlight}</span>
                  <span className="text-[10px] font-extrabold bg-[#2563EB] text-white px-2 py-0.5 rounded-md">
                    {t.metricImpact}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* 5-Star Rating */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-medium text-slate-500">Hasil Terverifikasi</span>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors shadow-2xs cursor-pointer"
          >
            <span>{showAll ? "Tampilkan Lebih Sedikit" : "Lihat 3 Testimoni Lainnya"}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
