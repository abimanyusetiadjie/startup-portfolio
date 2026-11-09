"use client";

import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Zap,
  Clock,
  Sparkles,
  Download,
} from "lucide-react";

export function GroveCaseStudySection() {
  const caseStudies = [
    {
      category: "STUDI KASUS 01 · SISTEM SIAKAD SEKOLAH",
      institution: "SMA Islam Terpadu Al-Hikmah",
      location: "Surabaya, Jawa Timur",
      icon: GraduationCap,
      headline: "SIAKAD Anti-Down untuk 1.240 Siswa Saat Ujian Massal — 0% Crash",
      metrics: [
        { value: "0% Crash", label: "Saat 1.240 Siswa Ujian Serentak" },
        { value: "4 Menit", label: "Cetak 600 Rapor PDF Kurikulum Merdeka" },
        { value: "99.98%", label: "Uptime Sistem Tahunan Tertulis" },
      ],
      problemStory:
        "Server lama selalu macet (error 504) saat ratusan siswa login bersamaan di jam pertama ujian, dan proses unduh 600 rapor PDF membuat sistem hang berhari-hari.",
      solutionStory:
        "Abinest membangun ulang arsitektur sistem dengan memisahkan jalur ujian siswa dari komputasi cetak rapor di latar belakang, lengkap dengan serah terima 100% source code.",
      clientQuote: {
        text: "1.240 siswa ujian serentak tanpa kendala server mati sedikit pun. Cetak 600 rapor Kurikulum Merdeka selesai dalam 4 menit tanpa mengganggu jam mengajar guru.",
        author: "Drs. H. Ahmad Fauzi, M.Pd.",
        role: "Kepala Sekolah SMA IT Al-Hikmah",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      },
      visualType: "cbt-dashboard",
    },
    {
      category: "STUDI KASUS 02 · WEBSITE YAYASAN & PPDB ONLINE",
      institution: "Yayasan Pendidikan Bina Insani",
      location: "Jakarta Selatan, DKI Jakarta",
      icon: Building2,
      headline: "Website Sekolah Loading 0,7 Detik & Pendaftar PPDB Online Naik 40%",
      metrics: [
        { value: "0,7 Detik", label: "Kecepatan Halaman di HP Orang Tua" },
        { value: "+40%", label: "Kenaikan Pendaftar PPDB Online" },
        { value: "99 / 100", label: "Skor Google PageSpeed Mobile" },
      ],
      problemStory:
        "Website lama butuh waktu lebih dari 8 detik untuk dibuka di HP sehingga banyak calon orang tua murid keluar sebelum mengisi formulir pendaftaran PPDB.",
      solutionStory:
        "Abinest merancang website berteknologi Next.js 15 yang instan di HP, mempermudah alur daftar murid baru, dan menyediakan editor pengumuman yang mudah dioperasikan staf TU.",
      clientQuote: {
        text: "Website kami langsung terbuka dalam sekejap di HP orang tua. Staf TU bisa update berita sendiri semudah mengetik di Word, dan pendaftar PPDB tahun ini naik 40%.",
        author: "Ir. Bambang Sutrisno, M.M.",
        role: "Ketua Pengurus Yayasan Bina Insani",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      },
      visualType: "web-ppdb",
    },
    {
      category: "STUDI KASUS 03 · AUTOMASI WHATSAPP & WORKFLOW",
      institution: "PT Maju Bersama Distribusi",
      location: "Jakarta Barat, DKI Jakarta",
      icon: Briefcase,
      headline: "Automasi WhatsApp Memangkas 12 Jam Kerja Admin per Minggu",
      metrics: [
        { value: "-12 Jam", label: "Penghematan Waktu Admin / Minggu" },
        { value: "<2 Detik", label: "Kecepatan Kirim Invoice via WhatsApp" },
        { value: "0 Kasus", label: "Nomor Terblokir (Meta Cloud API)" },
      ],
      problemStory:
        "Staf admin keuangan menghabiskan belasan jam setiap minggu hanya untuk membuat ratusan PDF tagihan dan mengirim pesan manual ke pelanggan yang rawan salah nominal.",
      solutionStory:
        "Abinest menghubungkan data tagihan langsung ke WhatsApp resmi Meta Cloud API dan pembuat PDF otomatis, sehingga notifikasi jatuh tempo terkirim mandiri sesuai jadwal.",
      clientQuote: {
        text: "Pekerjaan kirim tagihan yang dulunya memakan waktu berhari-hari kini selesai serba otomatis. Bebas dari kerja manual, dan pembayaran masuk 35% lebih cepat.",
        author: "Hendra Wijaya, S.T.",
        role: "Direktur Operasional PT Maju Bersama",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      },
      visualType: "wa-automation",
    },
  ];

  return (
    <section
      id="studi-kasus"
      className="py-24 relative bg-[#FAF9F6] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              HASIL NYATA &amp; TERUKUR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Bukti Kinerja Sistem di Sekolah &amp; Perusahaan Klien Kami
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Setiap sistem yang kami serah terimakan memiliki dampak operasional yang langsung dapat dirasakan oleh pimpinan dan staf.
          </p>
        </div>

        {/* 3 Showcase Case Study Cards */}
        <div className="space-y-12">
          {caseStudies.map((cs, idx) => {
            const Icon = cs.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] space-y-8"
              >
                {/* Header Row: Category Badge + Institution */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#C2672B] flex items-center justify-center font-bold shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-[#0F172A]">
                          {cs.institution}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                          Klien Terverifikasi
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">{cs.location}</div>
                    </div>
                  </div>

                  <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider self-start sm:self-auto">
                    {cs.category}
                  </span>
                </div>

                {/* Main Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-snug">
                  {cs.headline}
                </h3>

                {/* ========================================================================= */}
                {/* THE MASSIVE PRODUCT UI MOCKUP (IMAGE-FIRST SHOWPIECE)                      */}
                {/* ========================================================================= */}
                <div className="rounded-2xl sm:rounded-3xl bg-slate-900 p-3 sm:p-5 shadow-[0_25px_60px_rgba(15,23,42,0.18)] ring-1 ring-slate-800">
                  {/* Browser Chrome Header */}
                  <div className="bg-slate-800 rounded-t-xl px-4 py-2.5 flex items-center justify-between text-slate-400 text-xs mb-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-slate-900 text-slate-300 text-[10px] sm:text-[11px] font-mono flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {idx === 0 && "https://siakad.alhikmah.sch.id/cbt-concurrency"}
                      {idx === 1 && "https://binainsani.sch.id/ppdb-online-2026"}
                      {idx === 2 && "https://erp.majubersama.id/whatsapp-dispatch"}
                    </div>
                    <div className="text-[10px] font-bold text-emerald-400 hidden sm:inline-block">
                      VERIFIKASI PROYEK NYATA
                    </div>
                  </div>

                  {/* High-Fidelity UI Screens based on Project Type */}
                  <div className="bg-[#FAF9F6] rounded-b-xl p-4 sm:p-6 text-xs text-[#0F172A] font-sans">
                    {cs.visualType === "cbt-dashboard" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              STATUS UJIAN AKTIF
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">
                              1.240 Siswa
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              ● 0% Server Crash / Macet
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              LATENSI SISTEM
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-[#C2672B] mt-1">
                              38 ms
                            </div>
                            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
                              Respon Sangat Cepat
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              PEMBAGIAN RAPOR
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                              600 Rapor PDF
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              Selesai dalam 4 Menit
                            </div>
                          </div>
                        </div>

                        {/* Live Activity Matrix Bar */}
                        <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex items-center justify-between flex-wrap gap-2 shadow-sm text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <strong className="text-slate-800">Ujian CBT Kurikulum Merdeka Sedang Berjalan</strong>
                          </div>
                          <div className="text-slate-500 text-[11px]">
                            Alokasi Server: <strong className="text-[#0F172A]">Cloud Multi-Zone (Anti-Down)</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {cs.visualType === "web-ppdb" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              WAKTU BUKA DI HP
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                              0,7 Detik
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              Sebelumnya &gt;8 Detik
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              PENDAFTAR ONLINE
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-[#C2672B] mt-1">
                              +40% Naik
                            </div>
                            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
                              Formulir Mobile Ringan
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              GOOGLE LIGHTHOUSE
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                              99 / 100
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              Skor Kecepatan Sempurna
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex items-center justify-between flex-wrap gap-2 shadow-sm text-xs">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-amber-500" />
                            <strong className="text-slate-800">Alur Pendaftaran PPDB Terintegrasi Otomatis ke Database TU</strong>
                          </div>
                          <div className="text-slate-500 text-[11px]">
                            Teknologi: <strong className="text-[#0F172A]">Next.js 15 + Tailwind CSS</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {cs.visualType === "wa-automation" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              WAKTU ADMIN DIHEMAT
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-[#C2672B] mt-1">
                              12 Jam/Mgg
                            </div>
                            <div className="text-[10px] text-slate-500 font-semibold mt-0.5">
                              Bebas Kerja Manual Excel
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              KECEPATAN KIRIM WA
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-[#0F172A] mt-1">
                              &lt;2 Detik
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              Otomatis Invoice + PDF
                            </div>
                          </div>
                          <div className="rounded-xl bg-white border border-slate-200 p-3.5 shadow-sm">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                              PEMBAYARAN MASUK
                            </span>
                            <div className="text-xl sm:text-2xl font-black text-emerald-700 mt-1">
                              35% Lebih Cepat
                            </div>
                            <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                              Link Virtual Account Langsung
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-xl border border-slate-200 p-3.5 flex items-center justify-between flex-wrap gap-2 shadow-sm text-xs">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                            <strong className="text-slate-800">WhatsApp Resmi Meta Cloud API: Nol Risiko Pemblokiran Nomor</strong>
                          </div>
                          <div className="text-slate-500 text-[11px]">
                            Integrasi: <strong className="text-[#0F172A]">Webhook + QStash Auto-Retry</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 3 Prominent Outcome Metric Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cs.metrics.map((m, mIdx) => (
                    <div
                      key={mIdx}
                      className="rounded-2xl bg-[#FAF9F6] border border-slate-200/80 p-4 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-[#C2672B]">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Brief 2-Sentence Context & Executive Testimonial Quote */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2 items-center">
                  <div className="lg:col-span-6 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <p>
                      <strong className="text-[#0F172A] font-semibold">Tantangan:</strong>{" "}
                      {cs.problemStory}
                    </p>
                    <p>
                      <strong className="text-[#0F172A] font-semibold">Solusi Abinest:</strong>{" "}
                      {cs.solutionStory}
                    </p>
                  </div>

                  <div className="lg:col-span-6 bg-[#FAF9F6] border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5">
                    <img
                      src={cs.clientQuote.avatar}
                      alt={cs.clientQuote.author}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                    />
                    <div>
                      <p className="text-xs text-slate-700 italic leading-snug">
                        &ldquo;{cs.clientQuote.text}&rdquo;
                      </p>
                      <div className="text-[11px] font-bold text-[#0F172A] mt-1.5">
                        {cs.clientQuote.author}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {cs.clientQuote.role}
                      </div>
                    </div>
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
