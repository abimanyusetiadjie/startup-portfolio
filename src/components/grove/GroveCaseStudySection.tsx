"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  GraduationCap,
  Briefcase,
  Users,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function GroveCaseStudySection() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const cases = [
    {
      id: "al-hikmah",
      tabTitle: "SMA IT Al-Hikmah (SIAKAD 1.240 Siswa)",
      tag: "SISTEM SIAKAD & CBT",
      institution: "SMA Islam Terpadu Al-Hikmah",
      location: "Surabaya, Jawa Timur",
      icon: GraduationCap,
      headline: "SIAKAD Anti-Down untuk 1.240 Siswa Saat Ujian Massal — 0% Crash",
      metrics: [
        { value: "0% Crash", label: "Saat 1.240 Siswa Ujian Serentak" },
        { value: "4 Menit", label: "Cetak 600 Rapor Kurikulum Merdeka" },
        { value: "99.98%", label: "Uptime Sistem Tahunan Tertulis" },
      ],
      problemStory:
        "Server lama selalu macet (error 504) saat ratusan siswa login bersamaan di jam pertama ujian, dan cetak 600 rapor PDF membuat sistem hang berhari-hari.",
      solutionStory:
        "Abinest memisahkan jalur ujian siswa dari pemrosesan cetak rapor di latar belakang dengan arsitektur anti-down, lengkap dengan serah terima 100% source code.",
      clientQuote: {
        text: "1.240 siswa ujian serentak tanpa kendala server mati sedikit pun. Cetak 600 rapor Kurikulum Merdeka selesai dalam 4 menit tanpa mengganggu jam mengajar guru.",
        author: "Drs. H. Ahmad Fauzi, M.Pd.",
        role: "Kepala Sekolah SMA IT Al-Hikmah",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      },
      visualUrl: "https://siakad.alhikmah.sch.id/cbt-concurrency",
      statsBar: [
        { label: "STATUS UJIAN AKTIF", value: "1.240 Siswa", sub: "● 0% Server Crash" },
        { label: "LATENSI SISTEM", value: "38 ms", sub: "Respon Cepat" },
        { label: "PEMBAGIAN RAPOR", value: "600 Rapor PDF", sub: "Selesai 4 Menit" },
      ],
    },
    {
      id: "bina-insani",
      tabTitle: "Yayasan Bina Insani (Website PPDB +40%)",
      tag: "WEBSITE YAYASAN & PPDB",
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
        "Abinest merancang website berteknologi Next.js 15 yang instan di HP, mempermudah alur pendaftaran, dan menyediakan editor berita yang mudah dioperasikan staf TU.",
      clientQuote: {
        text: "Website kami langsung terbuka dalam sekejap di HP orang tua. Staf TU bisa update berita sendiri semudah mengetik di Word, dan pendaftar PPDB tahun ini naik 40%.",
        author: "Ir. Bambang Sutrisno, M.M.",
        role: "Ketua Pengurus Yayasan Bina Insani",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      },
      visualUrl: "https://binainsani.sch.id/ppdb-online-2026",
      statsBar: [
        { label: "WAKTU BUKA DI HP", value: "0,7 Detik", sub: "Sebelumnya >8 Detik" },
        { label: "PENDAFTAR ONLINE", value: "+40% Naik", sub: "Formulir Mobile Ringan" },
        { label: "GOOGLE LIGHTHOUSE", value: "99 / 100", sub: "Skor Sempurna" },
      ],
    },
    {
      id: "maju-bersama",
      tabTitle: "PT Maju Bersama (WhatsApp -12 Jam)",
      tag: "AUTOMASI WHATSAPP & WORKFLOW",
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
      visualUrl: "https://erp.majubersama.id/whatsapp-dispatch",
      statsBar: [
        { label: "WAKTU ADMIN DIHEMAT", value: "12 Jam/Mgg", sub: "Bebas Manual Excel" },
        { label: "KECEPATAN KIRIM WA", value: "<2 Detik", sub: "Otomatis Invoice + PDF" },
        { label: "PEMBAYARAN MASUK", value: "35% Lebih Cepat", sub: "Virtual Account Langsung" },
      ],
    },
  ];

  const currentCase = cases[selectedCaseIdx];
  const Icon = currentCase.icon;

  return (
    <section
      id="studi-kasus"
      className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              HASIL NYATA &amp; TERUKUR
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Bukti Kinerja Sistem di Sekolah &amp; Perusahaan Klien Kami
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Klik institusi di bawah ini untuk melihat bukti operasional dan dampak nyata yang mereka rasakan tanpa perlu *scrolling* panjang.
          </p>

          {/* Interactive Project Switcher Tabs (KILLS DEAD SCROLL) */}
          <div className="pt-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {cases.map((cs, idx) => {
              const active = selectedCaseIdx === idx;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    active
                      ? "bg-[#064E3B] text-white shadow-md scale-105"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cs.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
        <motion.div key={currentCase.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22 }} className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#065F46] flex items-center justify-center font-bold shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#0F172A]">
                    {currentCase.institution}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold border border-emerald-200">
                    Klien Terverifikasi
                  </span>
                </div>
                <div className="text-xs text-slate-500">{currentCase.location}</div>
              </div>
            </div>

            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider self-start sm:self-auto">
              {currentCase.tag}
            </span>
          </div>

          {/* Headline */}
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F172A] leading-snug">
            {currentCase.headline}
          </h3>

          {/* Large High-Fidelity UI Frame */}
          <div className="rounded-2xl bg-slate-900 p-3 sm:p-4 shadow-[0_20px_50px_rgba(15,23,42,0.16)] ring-1 ring-slate-800">
            {/* Browser Bar */}
            <div className="bg-slate-800 rounded-t-xl px-3.5 py-2 flex items-center justify-between text-slate-400 text-xs mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                {currentCase.visualUrl}
              </div>
              <span className="text-[10px] font-bold text-emerald-400 hidden sm:inline">
                VERIFIKASI SISTEM AKTIF
              </span>
            </div>

            {/* Content Stats Box Inside Frame */}
            <div className="bg-[#F8FAFC] rounded-b-xl p-3.5 sm:p-4 text-xs font-sans space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {currentCase.statsBar.map((item, sIdx) => (
                  <div key={sIdx} className="rounded-xl bg-white border border-slate-200 p-3 shadow-xs">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                      {item.label}
                    </span>
                    <div className="text-lg sm:text-xl font-black text-[#0F172A] mt-0.5">
                      {item.value}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Prominent Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {currentCase.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center"
              >
                <div className="text-xl sm:text-2xl font-black text-[#065F46]">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-slate-700 mt-0.5">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Context & Testimonial Quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 pt-1 items-center">
            <div className="lg:col-span-6 space-y-1.5 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong className="text-[#0F172A] font-semibold">Tantangan:</strong>{" "}
                {currentCase.problemStory}
              </p>
              <p>
                <strong className="text-[#0F172A] font-semibold">Solusi Abinest:</strong>{" "}
                {currentCase.solutionStory}
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-3.5 flex items-center gap-3">
              <img
                src={currentCase.clientQuote.avatar}
                alt={currentCase.clientQuote.author}
                className="w-11 h-11 rounded-full object-cover border border-slate-300 shrink-0"
              />
              <div>
                <p className="text-xs text-slate-700 italic leading-snug">
                  &ldquo;{currentCase.clientQuote.text}&rdquo;
                </p>
                <div className="text-[11px] font-bold text-[#0F172A] mt-1">
                  {currentCase.clientQuote.author}
                </div>
                <div className="text-[10px] text-slate-500">
                  {currentCase.clientQuote.role}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
