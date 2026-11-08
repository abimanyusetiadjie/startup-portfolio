"use client";

import { Star } from "lucide-react";

export function GroveTestimonialsGrid() {
  const row1 = [
    {
      name: "Drs. H. Ahmad Fauzi, M.Pd.",
      role: "Kepala Sekolah SMA Islam Terpadu",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Dengan SIAKAD Abinest, ujian serentak 1.240 siswa berjalan tanpa hambatan sedikit pun dan cetak 600 rapor Kurikulum Merdeka selesai dalam hitungan detik.",
    },
    {
      name: "Hendra Wijaya, S.T.",
      role: "Direktur Operasional Logistik & Distribusi",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Integrasi WhatsApp Cloud API resmi mereka memangkas waktu penagihan invoice hingga 40%. Pengiriman stabil di bawah 2 detik tanpa pernah ada nomor terblokir.",
    },
    {
      name: "dr. Nadia Putri, MARS",
      role: "Manajer Sistem Informasi Klinik & RS",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      quote: "Transparansi via Portal Klien membuat kami tenang. Setiap minggu progres terlihat nyata dan 100% source code diserahkan penuh tanpa biaya lisensi bulanan.",
    },
  ];

  const row2 = [
    {
      name: "Ir. Bambang Sutrisno",
      role: "Ketua Yayasan Pendidikan Bina Insani",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      quote: "Website baru kami melonjak ke skor Google Lighthouse 99 dan pendaftaran murid baru naik drastis berkat kecepatan buka halaman yang instan.",
    },
    {
      name: "Clarissa Tan, MBA",
      role: "Head of Digital, Retail Multi-Cabang",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      quote: "Keamanan PostgreSQL RLS yang diterapkan benar-benar rapi. Tim audit internal kami sangat terkesan dengan isolasi hak akses data antar cabang.",
    },
    {
      name: "Rizky Pratama, M.Kom.",
      role: "Kepala Pusat Komputer Perguruan Tinggi",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      quote: "Respons tim engineer di bawah 15 menit bukan sekadar janji. Saat masa KRS puncak, server tetap dingin dan uptime tercatat 99.99%.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            TESTIMONI KLIEN NYATA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Mengapa Pimpinan Institusi
            <br />
            Memilih Abinest
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Pengalaman langsung para kepala sekolah, ketua yayasan, dan pimpinan teknologi di Indonesia.
          </p>
        </div>
      </div>

      {/* 2-Row Wall of Love in Clean White Cards */}
      <div className="max-w-[1340px] mx-auto px-4 space-y-4">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {row1.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* 5 Orange Stars */}
              <div className="flex items-center gap-1 mt-6 pt-3 border-t border-slate-100">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">5.0 / 5.0</span>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Subtle Horizontal Offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:translate-x-6">
          {row2.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-slate-200 shadow-sm"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500">{item.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* 5 Orange Stars */}
              <div className="flex items-center gap-1 mt-6 pt-3 border-t border-slate-100">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-2">5.0 / 5.0</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
