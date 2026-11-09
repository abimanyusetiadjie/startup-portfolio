"use client";

import { useState } from "react";
import { Star, ShieldCheck, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";

export function GroveTestimonialsGrid() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      name: "Hendra Kusuma, S.E., M.B.A.",
      role: "VP of Marketing & Digital Growth",
      institution: "PT Finansial Prima Mandiri · Jakarta",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      highlight: "Website Loading 0,5s & Inbound Leads +180%",
      quote:
        "Website korporat kami sekarang langsung terbuka dalam sekejap mata di HP calon klien dan investor. Skor Google PageSpeed 100/100 benar-benar mengangkat peringkat SEO kami di halaman satu Google, menghasilkan kenaikan leads hampir 2x lipat.",
    },
    {
      name: "Ir. Bambang Sutrisno, M.M.",
      role: "Direktur Operasional & Supply Chain",
      institution: "PT Logistik Nusantara · Jakarta Barat",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      highlight: "Hemat Ratusan Juta Tanpa Biaya Lisensi User",
      quote:
        "Sebelumnya kami terbebani biaya software ERP luar negeri puluhan juta tiap bulan yang membatasi jumlah user. Bersama Abinest, kami memiliki sistem ERP kustom multi-gudang dengan 100% kepemilikan source code tanpa biaya sewa lisensi selamanya.",
    },
    {
      name: "Sandra Wijaya, S.Ak., B.A.",
      role: "Head of Finance & Automation",
      institution: "Sentosa Retail & Supply Chain · Surabaya",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      highlight: "Automasi AI Memproses 6.000 Faktur Otomatis",
      quote:
        "Pipeline Document AI dan WhatsApp Agent resmi Meta dari Abinest memangkas waktu kerja finance kami hingga 40 jam per minggu. Ribuan invoice PDF supplier terekstraksi dalam hitungan detik dengan akurasi 99.7% tanpa salah input angka.",
    },
    {
      name: "dr. Nadia Putri, MARS",
      role: "Direktur Operasional",
      institution: "Medika AI Diagnostik & Healthcare Hub · Tangerang",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      highlight: "100% Source Code & Portal Klien Transparan",
      quote:
        "Yang paling membuat kami tenang bermitra dengan Abinest adalah transparansi Portal Klien. Setiap minggu progres sprint terlihat jelas, dan di akhir proyek seluruh repositori Git serta dokumentasi API diserahkan penuh menjadi aset perusahaan kami.",
    },
    {
      name: "Clarissa Tan, B.Bus.",
      role: "Managing Director",
      institution: "PT Retail Sentosa Global · Surabaya",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      highlight: "Sinkronisasi 5 Cabang & AI Forecasting",
      quote:
        "Dulu tim kami sering selisih data stok saat menyatukan laporan dari 5 cabang berbeda. Sekarang sistem ERP kustom otomatis menyinkronkan stok dan memprediksi kebutuhan restock dengan Machine Learning secara akurat.",
    },
    {
      name: "Rizky Pratama, M.Kom.",
      role: "VP of Engineering",
      institution: "PT Digital Sinergi Nusantara · Bandung",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      highlight: "Respons Engineer <15 Menit & Arsitektur Solid",
      quote:
        "Standar rekayasa perangkat lunak Abinest sangat rapi: Clean Architecture, TypeScript type-safe, dan Docker containerized. Janji respons tim engineering di bawah 15 menit saat jam kerja benar-benar ditepati dengan luar biasa.",
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              KEPERCAYAAN EKSEKUTIF BISNIS
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Apa Kata Para Pimpinan Perusahaan Tentang Hasil Rekayasa Kami
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Testimoni jujur dari direktur operasional, pimpinan marketing, dan kepala finance yang telah membuktikan efisiensi sistem Abinest.
          </p>
        </div>

        {/* 3 Prominent Curated Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star rating + Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Terverifikasi
                  </span>
                </div>

                {/* Highlight Title */}
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-snug">
                  &ldquo;{t.highlight}&rdquo;
                </h3>

                {/* Quote Body */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {t.quote}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0F172A] truncate">
                    {t.name}
                  </div>
                  <div className="text-[11px] font-medium text-emerald-700 truncate">
                    {t.role}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {t.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Drawer Toggle */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-xs"
          >
            <span>{showAll ? "Tampilkan 3 Cerita Utama Saja" : "Lihat 3 Cerita Klien Lainnya"}</span>
            {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  );
}
