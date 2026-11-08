"use client";

import {
  AlertTriangle,
  Clock,
  FileSpreadsheet,
  FileCode2,
  ShieldCheck,
  Headphones,
  LayoutDashboard,
  Unlock,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const painPoints = [
    {
      icon: Clock,
      badge: "Masalah #1 · Website",
      title: "Website Lambat & Susah Diupdate Sendiri",
      problem:
        "Website butuh waktu lama saat dibuka dari HP orang tua atau calon klien, tampilannya kaku, dan staf admin harus bergantung pada programmer luar hanya untuk memperbarui berita atau info pendaftaran.",
      solution:
        "Dengan Abinest: Website terbuka di bawah 0,8 detik dan staf TU/admin bisa mengubah teks, foto, serta pengumuman semudah mengetik di Word.",
    },
    {
      icon: AlertTriangle,
      badge: "Masalah #2 · Sistem & SIAKAD",
      title: "Sistem Sering Down Saat Ujian & PPDB",
      problem:
        "Saat 1.000+ siswa login ujian serentak, pengisian nilai rapor, atau pendaftaran murid baru (PPDB), server mendadak macet (error) sehingga kegiatan sekolah lumpuh dan dikeluhkan wali murid.",
      solution:
        "Dengan Abinest: Arsitektur anti-down dengan jaminan SLA 99.9% uptime menjaga sistem tetap lancar meski diakses ribuan pengguna bersamaan.",
    },
    {
      icon: FileSpreadsheet,
      badge: "Masalah #3 · Operasional",
      title: "Kerja Manual Menumpuk & Rawan Salah Rekap",
      problem:
        "Staf administrasi habis waktu berjam-jam setiap minggu hanya untuk mengirim pengingat SPP/tagihan satu per satu ke WhatsApp, menyalin data antar-Excel, dan membuat laporan PDF secara manual.",
      solution:
        "Dengan Abinest: Pengiriman tagihan WhatsApp, rekap pembayaran, dan pembuatan ratusan dokumen PDF berjalan otomatis dalam hitungan detik.",
    },
  ];

  const differentiators = [
    {
      icon: FileCode2,
      title: "100% Kepemilikan Source Code",
      desc: "Seluruh kode program dan database diserahkan penuh menjadi hak milik resmi institusi Anda selamanya.",
    },
    {
      icon: ShieldCheck,
      title: "SLA 99.9% Uptime Anti-Down",
      desc: "Jaminan tertulis sistem tetap berjalan stabil di momen kritis seperti ujian serentak, PPDB, dan pembagian rapor.",
    },
    {
      icon: Headphones,
      title: "Respons Engineer <15 Menit",
      desc: "Kendala teknis di jam kerja langsung ditangani oleh tim engineer pembuat sistem tanpa oper-operan admin CS.",
    },
    {
      icon: LayoutDashboard,
      title: "Portal Klien Transparan",
      desc: "Pantau langsung persentase progres mingguan, daftar revisi, dan jadwal penyelesaian proyek dari HP atau laptop Anda.",
    },
    {
      icon: Unlock,
      title: "Tanpa Biaya Lisensi Bulanan",
      desc: "Bebas dari ketergantungan vendor (zero vendor lock-in) dan tidak ada pungutan biaya sewa per siswa atau per user.",
    },
    {
      icon: GraduationCap,
      title: "Training & Serah Terima Lengkap",
      desc: "Dilengkapi buku panduan bahasa Indonesia yang mudah dipahami serta sesi pelatihan langsung sampai staf Anda mahir.",
    },
  ];

  return (
    <section id="mengapa-abinest" className="py-24 relative bg-[#FAF9F6]">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-24">
        {/* PART 1: PROBLEM / PAIN POINT SECTION */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
              MASALAH YANG SERING TERJADI
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Apakah Sekolah, Yayasan, atau Bisnis Anda Mengalami Kendala Ini?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Banyak pimpinan institusi sudah mengeluarkan anggaran besar untuk IT, namun masih pusing karena tiga masalah klasik berikut:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {painPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-3xl p-7 sm:p-8 shadow-[0_8px_30px_rgba(15,23,42,0.03)] flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200/70">
                        {item.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2.5 bg-emerald-50/70 border border-emerald-200/70 rounded-2xl p-3.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-xs font-medium text-emerald-950 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: VALUE PROPOSITION / MENGAPA ABINEST */}
        <div className="pt-8 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#C2672B] bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
              MENGAPA MEMILIH ABINEST
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#0F172A] leading-tight">
              Rasa Aman &amp; Kepastian Penuh bagi Pengambil Keputusan
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Kami tidak sekadar menulis kode, melainkan memastikan investasi teknologi Anda memberikan hasil nyata tanpa beban biaya bulanan yang mengikat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 space-y-3.5 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#C2672B] group-hover:bg-[#D97736] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    {diff.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
