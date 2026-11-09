"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Server,
  Globe,
  MessageSquare,
  FileCode2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export function GroveBentoGrid() {
  // Card 1: Interactive Concurrency Exam Simulation
  const [examSimulating, setExamSimulating] = useState(false);
  const [studentsCount, setStudentsCount] = useState(1240);

  // Card 3: Interactive WhatsApp Delivery Preview State
  const [waSent, setWaSent] = useState(false);

  const triggerExamSim = () => {
    setExamSimulating(true);
    setTimeout(() => {
      setExamSimulating(false);
    }, 4000);
  };

  return (
    <section
      id="layanan-utama"
      className="py-24 relative bg-white border-y border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8">
        {/* Section Header: Pure Editorial, No Cluttered Badges */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97736]" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Layanan Utama &amp; Kapabilitas Abinest
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Arsitektur Modular untuk Kebutuhan Digital yang{" "}
            <span className="font-serif italic font-normal text-[#C2672B]">
              Kritis.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Tiga pilar layanan utama yang dirancang untuk menghilangkan kekhawatiran klasik para pimpinan institusi: server down, website lemot, dan kerja manual yang menguras waktu.
          </p>
        </div>

        {/* 12-Column Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* ========================================================================= */}
          {/* CARD 1 (7 COLS): JASA PEMBUATAN SISTEM (SIAKAD & ERP ANTI-DOWN)           */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#FAF9F6] border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
          >
            <div className="space-y-6">
              {/* Header inside Card */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2672B] block">
                    Pilar 01 · Skalabilitas Tinggi
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    Jasa Pembuatan Sistem (SIAKAD &amp; ERP)
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                    Sistem informasi akademik sekolah, manajemen yayasan, dan ERP operasional yang diuji ketahanan bebannya agar tetap dingin saat ribuan login bersamaan.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-sm">
                  <Server className="w-5 h-5 text-[#C2672B]" />
                </div>
              </div>

              {/* Interactive Telemetry Box: Live Concurrency Simulator */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <span className="text-xs font-bold text-[#0F172A]">
                      Live Telemetri Server SIAKAD
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                      SLA 99.9% Terjamin
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={triggerExamSim}
                    disabled={examSimulating}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0F172A] hover:bg-slate-800 disabled:opacity-50 transition-all"
                  >
                    {examSimulating ? (
                      <>
                        <Activity className="w-3.5 h-3.5 animate-spin" />
                        <span>Simulasi Berjalan...</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Uji Beban 1.240 Siswa</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Simulated Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      Pengguna Login
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#0F172A] mt-0.5">
                      {examSimulating ? "1.240 / 1.240" : "Standby (1.240)"}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium">
                      {examSimulating ? "Ujian Serentak" : "Siap Ujian CBT"}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      CPU Server Load
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#0F172A] mt-0.5">
                      {examSimulating ? "24.8%" : "8.2%"}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium">
                      Tetap Dingin
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      Latensi Respon
                    </div>
                    <div className="text-base sm:text-lg font-bold text-[#0F172A] mt-0.5">
                      {examSimulating ? "68 ms" : "32 ms"}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-medium">
                      Sub-100ms
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase">
                      Server Crash
                    </div>
                    <div className="text-base sm:text-lg font-bold text-emerald-700 mt-0.5">
                      0 Kasus (0%)
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">
                      Tanpa Downtime
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span>Isolasi Database PostgreSQL RLS</span>
                  <span className="font-semibold text-slate-700">
                    Background Worker PDF Rapor Kurikulum Merdeka
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-6 mt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Source Code Milik Sekolah Tanpa Biaya Per Siswa</span>
              </div>
              <Link
                href="/jasa-pembuatan-sistem-sekolah"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#C2672B] hover:text-[#0F172A] transition-colors"
              >
                <span>Pelajari Detail Sistem Sekolah</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 2 (5 COLS): JASA PEMBUATAN WEBSITE CEPAT & MUDAH DIUPDATE            */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5 bg-[#FAF9F6] border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2672B] block">
                    Pilar 02 · Performa &amp; SEO
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    Jasa Pembuatan Website
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Website profil sekolah, yayasan, dan perusahaan yang terbuka instan kurang dari 0,8 detik di HP serta mudah diupdate staf TU sendiri.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-sm">
                  <Globe className="w-5 h-5 text-[#C2672B]" />
                </div>
              </div>

              {/* Interactive Performance Meter Card */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-[#0F172A]">
                    Hasil Audit Google PageSpeed
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Next.js 15 Edge
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                      99
                    </div>
                    <div className="text-[10px] font-semibold text-slate-600 mt-0.5">
                      Skor Performa
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                      0.7s
                    </div>
                    <div className="text-[10px] font-semibold text-slate-600 mt-0.5">
                      Buka di HP
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF9F6] border border-slate-200/60">
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#C2672B]">
                      100
                    </div>
                    <div className="text-[10px] font-semibold text-slate-600 mt-0.5">
                      Skor SEO Google
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-orange-50/60 border border-orange-200/60 text-xs text-slate-700 space-y-1">
                  <div className="font-bold text-[#0F172A]">
                    Panel Kelola Konten Praktis
                  </div>
                  <p className="text-[11px] text-slate-600">
                    Staf tata usaha dapat mengunggah foto kegiatan, pengumuman, dan berita tanpa bantuan programmer luar.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">
                Pendaftaran PPDB Online &amp; Company Profile
              </span>
              <Link
                href="/jasa-pembuatan-website-jakarta"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#C2672B] hover:text-[#0F172A] transition-colors"
              >
                <span>Lihat Fitur Website</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 3 (5 COLS): JASA AUTOMASI WHATSAPP & WORKFLOW (META CLOUD API)       */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 bg-[#FAF9F6] border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2672B] block">
                    Pilar 03 · Eliminasi Kerja Manual
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    Jasa Automasi WhatsApp &amp; Kerja
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Pengiriman tagihan SPP, invoice, kuitansi PDF, dan pengingat jatuh tempo otomatis langsung via jalur resmi Meta WhatsApp Cloud API.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5 text-[#C2672B]" />
                </div>
              </div>

              {/* Simulated Meta WhatsApp Notification Demo */}
              <div className="rounded-2xl bg-white border border-slate-200/80 p-4 space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5 font-bold text-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp Resmi (Verified Meta)</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Pengiriman &lt;2 Detik</span>
                </div>

                {/* Simulated Chat Bubble */}
                <div className="rounded-xl bg-emerald-50/50 border border-emerald-100 p-3 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-[10px] text-emerald-800 font-semibold">
                    <span>Notifikasi SPP Otomatis</span>
                    <span>10.15 WIB · Terkirim</span>
                  </div>
                  <p className="text-slate-700 leading-snug">
                    Yth. Wali Murid, tagihan SPP an. <strong>Ahmad Fauzi</strong> bulan berjalan telah terbit beserta rincian PDF terlampir.
                  </p>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-700">
                    <span>✓ Bebas Blokir Nomor</span>
                    <span>•</span>
                    <span>Kuitansi PDF Instan</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600 pt-1">
                  <span>Hemat 12 Jam Kerja Admin / Minggu</span>
                  <span className="font-bold text-emerald-700">0% Salah Input</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">
                Integrasi Excel, Sheets &amp; Database
              </span>
              <Link
                href="/jasa-automasi-whatsapp"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#C2672B] hover:text-[#0F172A] transition-colors"
              >
                <span>Pelajari Automasi WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* ========================================================================= */}
          {/* CARD 4 (7 COLS): 100% HAK MILIK SOURCE CODE & ZERO LOCK-IN                */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7 bg-[#FAF9F6] border border-slate-200/90 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-300 transition-all duration-300 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
          >
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C2672B] block">
                    Kedaulatan Klien · Zero Lock-In
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    100% Hak Milik Source Code &amp; Portal Klien Transparan
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
                    Seluruh repositori Git, skema database, dan dokumentasi arsitektur menjadi aset resmi institusi Anda. Tidak ada keterikatan biaya lisensi bulanan per siswa.
                  </p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0F172A] shrink-0 shadow-sm">
                  <FileCode2 className="w-5 h-5 text-[#C2672B]" />
                </div>
              </div>

              {/* Minimalist Terminal / Repository Ownership Visualizer */}
              <div className="rounded-2xl bg-[#0F172A] text-slate-200 p-5 space-y-3 font-mono text-xs shadow-lg">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-semibold text-slate-300">
                      abinest-client-portal // source-handover
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold">100% Milik Klien</span>
                </div>

                <div className="space-y-1.5 text-[11px] leading-relaxed">
                  <p className="text-slate-400">
                    $ git clone git@github.com:klien-institusi/siakad-core.git
                  </p>
                  <p className="text-emerald-300">
                    ✓ Repositori lengkap, skema PostgreSQL RLS, &amp; aset resmi diserahterimakan.
                  </p>
                  <p className="text-slate-400">
                    $ abinest-license check --billing
                  </p>
                  <p className="text-amber-300">
                    &gt; Biaya Lisensi Bulanan: Rp 0 (Bebas Biaya Per Siswa / Pengguna).
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Portal Tracking Mingguan Aktif</span>
                  <span className="text-slate-300 font-sans font-semibold">
                    Termasuk Training Staf &amp; BAST Resmi
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200/70 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Didampingi Kontrak Kerja Tertulis &amp; Garansi Resmi</span>
              </div>
              <Link
                href="/login"
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#C2672B] transition-colors"
              >
                <span>Lihat Portal Pemantauan Klien</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
