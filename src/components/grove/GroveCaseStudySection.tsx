"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Briefcase,
  ArrowRight,
  Globe,
  Database,
  BrainCircuit,
  AlertCircle,
  Cpu,
  TrendingUp,
  School,
  CheckCircle2,
} from "lucide-react";

export function GroveCaseStudySection() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const cases = [
    {
      id: "modern-web",
      tabTitle: "1. Web Korporat (<0.8s)",
      tag: "HEADLESS WEB & LEAD GENERATION",
      clientSector: "Sektor Pembiayaan & Investasi",
      location: "Jakarta Selatan, DKI Jakarta",
      icon: Globe,
      headline: "Website Modern Memuat Kilat 0,5 Detik & Konversi Inbound Naik +180%",
      imagePreview: "/images/capabilities/capabilities-web-preview.jpg",
      visualUrl: "preview.abinest.id/modern-web-architecture",
      metrics: [
        { value: "0,5 Detik", label: "Loading Speed di HP Klien", note: "Sebelumnya >6.8 detik" },
        { value: "+180%", label: "Kenaikan Leads Organik", note: "Pengunjung tidak lagi drop-off" },
        { value: "100 / 100", label: "Skor Google PageSpeed & SEO", note: "Lolos Core Web Vitals" },
      ],
      beforeStory: "Website lama memakai CMS berat yang memuat >6.8 detik di perangkat mobile. Calon klien dan investor keluar sebelum proposal selesai terbuka, dan peringkat Google tertinggal di halaman belakang.",
      solutionStory: "Abinest merekayasa ulang seluruh web dengan Next.js Edge SSR, Edge CDN Caching otomatis, serta arsitektur SEO terstruktur yang ramah bot mesin pencari Google.",
      impactStory: "Halaman terbuka instan dalam 0.5 detik, bounce rate anjlok hingga 65%, dan jumlah formulir konsultasi masuk meningkat 1.8 kali lipat dalam 60 hari pertama pasca-rilis.",
      clientQuote: {
        text: "Website kami kini langsung terbuka sekejap mata di smartphone calon investor. Peringkat Google melesat ke halaman pertama dan leads masuk konsisten setiap hari.",
        author: "Hendra Kusuma, S.E., M.B.A.",
        role: "VP of Digital Growth · Sektor Finansial",
        monogram: "HK",
      },
    },
    {
      id: "siakad-sekolah",
      tabTitle: "2. SIAKAD Anti-Down (Sekolah)",
      tag: "HIGH-CONCURRENCY ARCHITECTURE",
      clientSector: "Yayasan Pendidikan & Sekolah Unggulan",
      location: "Jawa Timur & Jawa Barat",
      icon: School,
      headline: "SIAKAD Sekolah Anti-Down: 1.240 Siswa Ujian Serentak 0% Server Crash",
      imagePreview: "/images/capabilities/capabilities-erp-preview.jpg",
      visualUrl: "preview.abinest.id/siakad-high-concurrency",
      metrics: [
        { value: "1.240 Siswa", label: "Login Serentak Tanpa Lag", note: "Ujian online & pemilihan modul" },
        { value: "0% Crash", label: "Uptime 100% Selama Ujian", note: "Auto-failover database" },
        { value: "4 Menit", label: "600 PDF Rapor Terbit", note: "Sebelumnya butuh 4 hari kerja" },
      ],
      beforeStory: "Setiap pekan ujian semester atau pendaftaran peserta didik baru (PPDB), server sekolah langganan down dan guru panik. Rekap 600 buku rapor siswa memakan waktu berhari-hari kerja lembur.",
      solutionStory: "Abinest mengimplementasikan arsitektur database connection pooling PostgreSQL dengan background worker queue untuk mengisolasi beban ujian dari server utama rapor.",
      impactStory: "1.240 siswa ujian serentak tanpa lag, server stabil 0% error, dan seluruh rapor digital format PDF selesai digenerate secara otonom dalam 4 menit bersih.",
      clientQuote: {
        text: "Kepala sekolah dan guru tidak lagi pusing server down saat ujian online serentak. Rapor semester selesai dalam hitungan menit, dan 100% sistem ini menjadi aset hak milik yayasan kami.",
        author: "Drs. H. Mulyadi, M.Pd.",
        role: "Ketua Dewan Pembina Yayasan Pendidikan",
        monogram: "MY",
      },
    },
    {
      id: "erp-multigudang",
      tabTitle: "3. Custom ERP Multi-Gudang",
      tag: "ENTERPRISE ERP & ZERO LICENSE",
      clientSector: "Distribusi Nasional & Rantai Pasok",
      location: "Jakarta Barat & Surabaya",
      icon: Database,
      headline: "Sistem ERP Multi-Gudang Mengotomasi 18.000 SKU & Menghemat 40 Jam/Minggu",
      imagePreview: "/images/capabilities/capabilities-aiml-preview.jpg",
      visualUrl: "preview.abinest.id/enterprise-multi-warehouse",
      metrics: [
        { value: "0% Selisih", label: "Sinkronisasi 4 Gudang Real-Time", note: "Barcode scanner terintegrasi" },
        { value: "40 Jam/Mgg", label: "Waktu Rekonsiliasi Dihemat", note: "Laporan harian otomatis" },
        { value: "Rp 0 Lisensi", label: "Bebas Biaya Per-User Selamanya", note: "100% Hak Milik Klien" },
      ],
      beforeStory: "Perusahaan terbebani biaya software impor puluhan juta per bulan yang membatasi jumlah akun karyawan. Sinkronisasi antar 4 gudang lambat dan rentan salah hitung stok fisik.",
      solutionStory: "Abinest membangun ERP kustom dari nol dengan PostgreSQL clustering, multi-location audit trail, dan integrasi WhatsApp reminder faktur otomatis.",
      impactStory: "Bebas biaya lisensi bulanan selamanya, rekonsiliasi stok selesai otomatis dalam hitungan detik, dan perusahaan menghemat ratusan juta rupiah per tahun.",
      clientQuote: {
        text: "Kami bebas menambah ratusan staf tanpa cemas biaya lisensi per-user yang membengkak. Sistem stabil, transparan, dan seluruh data terlindungi sebagai aset bisnis kami.",
        author: "Ir. Bambang Sutrisno, M.M.",
        role: "Direktur Operasional & Supply Chain",
        monogram: "BS",
      },
    },
  ];

  const currentCase = cases[selectedCaseIdx];
  const Icon = currentCase.icon;

  return (
    <section
      id="portofolio"
      className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF]">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold tracking-wider uppercase">
              STUDI KASUS &amp; BUKTI KINERJA NYATA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Bukti Kinerja Nyata di Lapangan
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Pelajari bagaimana arsitektur rekayasa Abinest menyelesaikan kendala operasional nyata dan melipatgandakan efisiensi institusi klien.
          </p>

          {/* Interactive Case Switcher Tabs */}
          <div className="pt-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            {cases.map((cs, idx) => {
              const active = selectedCaseIdx === idx;
              return (
                <button
                  key={cs.id}
                  type="button"
                  onClick={() => setSelectedCaseIdx(idx)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    active
                      ? "bg-[#2563EB] text-white shadow-md scale-102"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cs.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Case Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(15,23,42,0.04)] space-y-6"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center font-bold shrink-0 border border-blue-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#0F172A]">
                      {currentCase.clientSector}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-200">
                      Implementasi Terverifikasi
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

            {/* 3 Prominent Quantitative Metrics Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentCase.metrics.map((m, mIdx) => (
                <div
                  key={mIdx}
                  className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-4 text-center space-y-0.5 shadow-2xs"
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#2563EB]">
                    {m.value}
                  </div>
                  <div className="text-xs font-bold text-slate-800">
                    {m.label}
                  </div>
                  <div className="text-[10.5px] text-slate-500 font-medium">
                    {m.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Frame & Live Preview Bar */}
            <div className="rounded-2xl bg-slate-900 p-3 sm:p-4 shadow-[0_20px_50px_rgba(15,23,42,0.16)] ring-1 ring-slate-800">
              <div className="bg-slate-800 rounded-t-xl px-3.5 py-2 flex items-center justify-between text-slate-400 text-xs mb-1">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="px-3 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3 h-3 text-sky-400" />
                  <span>https://{currentCase.visualUrl}</span>
                </div>
                <span className="text-[10px] font-bold text-sky-400 hidden sm:inline">
                  GARANSI SLA 99.9% AKTIF
                </span>
              </div>

              <div className="relative w-full h-[220px] sm:h-[280px] rounded-b-xl overflow-hidden my-1">
                <Image
                  src={currentCase.imagePreview}
                  alt={currentCase.headline}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            {/* HIGH-IMPACT 3-COLUMN BEFORE vs SOLUTION vs IMPACT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Box 1: Kondisi Sebelum */}
              <div className="rounded-2xl p-4 bg-rose-50/60 border border-rose-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-800">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Tantangan (Sebelum Abinest)</span>
                </div>
                <p className="text-xs text-rose-950/80 leading-relaxed">
                  {currentCase.beforeStory}
                </p>
              </div>

              {/* Box 2: Solusi Arsitektur */}
              <div className="rounded-2xl p-4 bg-blue-50/60 border border-blue-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-blue-800">
                  <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Solusi Arsitektur Abinest</span>
                </div>
                <p className="text-xs text-blue-950/80 leading-relaxed">
                  {currentCase.solutionStory}
                </p>
              </div>

              {/* Box 3: Dampak Nyata */}
              <div className="rounded-2xl p-4 bg-emerald-50/60 border border-emerald-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800">
                  <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Dampak Nyata Terukur</span>
                </div>
                <p className="text-xs text-emerald-950/80 leading-relaxed">
                  {currentCase.impactStory}
                </p>
              </div>
            </div>

            {/* Testimonial Quote Row */}
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs border border-white">
                {currentCase.clientQuote.monogram}
              </div>
              <div className="min-w-0">
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
