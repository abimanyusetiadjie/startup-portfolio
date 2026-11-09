"use client";

import { useState } from "react";
import { Star, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";

export function GroveTestimonialsGrid() {
  const [showAll, setShowAll] = useState(false);

  const testimonials = [
    {
      name: "Drs. H. Ahmad Fauzi, M.Pd.",
      role: "Kepala Sekolah",
      institution: "SMA Islam Terpadu Al-Hikmah · Surabaya",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      highlight: "0% Crash Saat 1.240 Siswa Ujian",
      quote:
        "Sebelumnya setiap ujian semester server kami selalu down dan membuat panik guru serta orang tua. Sejak menggunakan SIAKAD dari Abinest, 1.240 siswa login bersamaan tanpa hambatan sedikit pun dan cetak 600 rapor PDF selesai dalam 4 menit.",
    },
    {
      name: "Ir. Bambang Sutrisno, M.M.",
      role: "Ketua Pengurus Yayasan",
      institution: "Yayasan Pendidikan Bina Insani · Jakarta Selatan",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      highlight: "Pendaftar PPDB Online Naik +40%",
      quote:
        "Website yayasan kami sekarang terbuka kurang dari 1 detik di HP orang tua. Staf TU juga bisa mengupdate berita dan jadwal PPDB sendiri tanpa perlu panggil teknisi. Tahun ini pendaftar online naik 40%.",
    },
    {
      name: "Hendra Wijaya, S.T.",
      role: "Direktur Operasional",
      institution: "PT Maju Bersama Distribusi · Jakarta Barat",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      highlight: "Hemat 12 Jam Kerja Admin / Minggu",
      quote:
        "Automasi WhatsApp resmi dari Abinest memangkas pekerjaan kirim tagihan yang dulunya memakan waktu 12 jam per minggu menjadi serba otomatis. Nomor kantor aman tidak pernah terblokir dan tagihan lunas 35% lebih cepat.",
    },
    {
      name: "dr. Nadia Putri, MARS",
      role: "Manajer Operasional & Layanan",
      institution: "Klinik Utama Medika Nusantara · Tangerang Selatan",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      highlight: "100% Source Code & Portal Transparan",
      quote:
        "Yang paling membuat kami tenang adalah Portal Klien mereka. Setiap minggu kami tahu persis apa yang sedang dikerjakan tanpa harus menebak-nebak, dan di akhir proyek seluruh source code diserahkan penuh tanpa biaya bulanan.",
    },
    {
      name: "Clarissa Tan, B.Bus.",
      role: "Owner & Managing Director",
      institution: "CV Sentosa Retail Multi-Cabang · Surabaya",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      highlight: "Rekap Laporan 5 Cabang Otomatis",
      quote:
        "Dulu admin saya sering lembur menyatukan laporan Excel dari 5 cabang dan sering selisih angka. Sekarang dashboard sistem otomatis merekap stok dan omzet harian secara real-time, bisa saya pantau langsung dari HP.",
    },
    {
      name: "Rizky Pratama, M.Kom.",
      role: "Koordinator Sarana & IT",
      institution: "SMK Teknologi & Industri Karya · Sidoarjo",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      highlight: "Respons Engineer <15 Menit",
      quote:
        "Janji respons di bawah 15 menit benar-benar terbukti. Saat tim tata usaha kami butuh penyesuaian format cetak laporan menjelang pembagian rapor, engineer Abinest langsung merespons dan menyelesaikannya hari itu juga.",
    },
  ];

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section
      id="testimoni"
      className="py-14 sm:py-16 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-10">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#065F46] bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
            KEPERCAYAAN PIMPINAN INSTITUSI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Apa Kata Kepala Sekolah, Ketua Yayasan, &amp; Pemilik Bisnis
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Pengalaman nyata dari para pengambil keputusan yang telah mempercayakan website, sistem, dan automasi mereka kepada Abinest.
          </p>
        </div>

        {/* 3 Prominent Cards (Expandable to 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-emerald-200 transition-all duration-200 animate-fadeIn"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    {item.highlight}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star key={sIdx} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-slate-300 shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-[#0F172A] truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-semibold text-[#065F46] truncate">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-slate-500 truncate">
                    {item.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button to Expand / Collapse */}
        <div className="text-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 shadow-xs transition-all"
          >
            <span>{showAll ? "Tampilkan 3 Testimoni Saja" : "Lihat 3 Testimoni Lainnya"}</span>
            {showAll ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
          </button>
        </div>
      </div>
    </section>
  );
}
