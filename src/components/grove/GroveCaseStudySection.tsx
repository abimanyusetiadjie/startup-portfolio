"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  ArrowRight,
  Globe,
  Database,
  School,
  Lock,
} from "lucide-react";

export function GroveCaseStudySection() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const cases = [
    {
      id: "modern-web",
      tabTitle: "1. Web Korporat (<0.8s)",
      tag: "FINANCIAL & INVESTMENT WEB",
      clientSector: "Sektor Pembiayaan & Investasi",
      location: "Jakarta Selatan, DKI Jakarta",
      icon: Globe,
      headline: "Website Modern Memuat Kilat 0,5 Detik & Konversi Inbound Naik +180%",
      imagePreview: "/images/case-studies/modern-web-finance.jpg",
      fallbackImage: "/images/capabilities/capabilities-web-preview.jpg",
      visualUrl: "apexcapital.co.id",
      metrics: [
        { value: "0,5s", label: "Loading Speed HP", note: "Sebelumnya >6.8 detik" },
        { value: "+180%", label: "Leads Inbound", note: "Pengunjung tanpa drop-off" },
        { value: "100/100", label: "Google PageSpeed", note: "Lolos Core Web Vitals" },
      ],
      challengeBrief: "CMS lama berat (>6.8s di HP), calon investor keluar sebelum web selesai memuat, dan SEO tertinggal.",
      solutionBrief: "Arsitektur Next.js Edge SSR dengan automated CDN caching & struktur data ramah bot pencarian Google.",
      impactBrief: "Halaman terbuka kilat 0.5 detik, bounce rate anjlok 65%, dan leads konsultasi naik 1.8x dalam 60 hari.",
      clientQuote: {
        text: "Website kami kini langsung terbuka sekejap mata di smartphone calon investor. Peringkat Google melesat dan leads masuk konsisten setiap hari.",
        author: "Hendra Kusuma, S.E., M.B.A.",
        role: "VP of Digital Growth · Sektor Finansial",
        monogram: "HK",
      },
    },
    {
      id: "siakad-sekolah",
      tabTitle: "2. SIAKAD Anti-Down (Sekolah)",
      tag: "DIGITAL CAMPUS & EXAM PORTAL",
      clientSector: "Yayasan Pendidikan & Sekolah Unggulan",
      location: "Jawa Timur & Jawa Barat",
      icon: School,
      headline: "SIAKAD Sekolah Anti-Down: 1.240 Siswa Ujian Serentak 0% Server Crash",
      imagePreview: "/images/case-studies/siakad-education-portal.jpg",
      fallbackImage: "/images/capabilities/capabilities-erp-preview.jpg",
      visualUrl: "siakad.bina-insan.sch.id",
      metrics: [
        { value: "1.240", label: "Siswa Login Serentak", note: "Ujian online tanpa lag" },
        { value: "0% Crash", label: "Uptime Selama Ujian", note: "Database auto-failover" },
        { value: "4 Menit", label: "600 Rapor Digital", note: "Sebelumnya butuh 4 hari" },
      ],
      challengeBrief: "Server sekolah langganan down tiap ujian semester & PPDB, serta rekap 600 buku rapor guru lembur berhari-hari.",
      solutionBrief: "Database connection pooling PostgreSQL & worker queue untuk mengisolasi beban lonjakan ujian dari rapor.",
      impactBrief: "1.240 siswa ujian online serentak lancar tanpa hambatan, dan 600 rapor digital PDF selesai dalam 4 menit.",
      clientQuote: {
        text: "Tidak ada lagi drama server down saat ujian online serentak. Rapor semester selesai dalam hitungan menit dan 100% jadi aset yayasan kami.",
        author: "Drs. H. Mulyadi, M.Pd.",
        role: "Ketua Dewan Pembina Yayasan",
        monogram: "MY",
      },
    },
    {
      id: "erp-multigudang",
      tabTitle: "3. Custom ERP Multi-Gudang",
      tag: "ENTERPRISE SUPPLY CHAIN & LOGISTICS",
      clientSector: "Distribusi Nasional & Rantai Pasok",
      location: "Jakarta Barat & Surabaya",
      icon: Database,
      headline: "Sistem ERP Multi-Gudang Mengotomasi 18.000 SKU & Menghemat 40 Jam/Minggu",
      imagePreview: "/images/case-studies/erp-multi-warehouse.jpg",
      fallbackImage: "/images/capabilities/capabilities-aiml-preview.jpg",
      visualUrl: "erp.nexus-distribusi.com",
      metrics: [
        { value: "0% Selisih", label: "Real-Time 4 Gudang", note: "Barcode scanner terpadu" },
        { value: "40 Jam", label: "Hemat per Minggu", note: "Rekonsiliasi otomatis" },
        { value: "Rp 0", label: "Biaya Lisensi User", note: "100% Hak Milik Klien" },
      ],
      challengeBrief: "Biaya software sewa impor puluhan juta per bulan, sinkronisasi stok 4 gudang lambat, dan sering selisih fisik.",
      solutionBrief: "ERP kustom berbasis PostgreSQL clustering, multi-location audit trail, serta integrasi reminder WA otomatis.",
      impactBrief: "Bebas lisensi per-user selamanya, rekonsiliasi stok otomatis seketika, dan menghemat ratusan juta rupiah per tahun.",
      clientQuote: {
        text: "Kami bebas menambah ratusan staf tanpa cemas biaya lisensi per-user yang membengkak. Sistem stabil dan data terlindungi penuh.",
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
      className="py-12 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-300/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Section Header & Bordered Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1E40AF]">
            <Briefcase className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold tracking-wider uppercase">
              STUDI KASUS &amp; BUKTI KINERJA NYATA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Bukti Kinerja Nyata di Lapangan
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto font-normal">
            Pelajari bagaimana arsitektur kustom Abinest menyelesaikan kendala operasional nyata dan melipatgandakan efisiensi institusi klien.
          </p>

          {/* Crisp Bordered Tab Bar — Always 1 row on mobile & desktop */}
          <div className="pt-2 flex items-center justify-center">
            <div className="grid grid-cols-3 sm:inline-flex w-full sm:w-auto gap-1 p-1 sm:p-1.5 rounded-xl bg-white border border-slate-300 shadow-2xs">
              {cases.map((cs, idx) => {
                const active = selectedCaseIdx === idx;
                return (
                  <button
                    key={cs.id}
                    type="button"
                    onClick={() => setSelectedCaseIdx(idx)}
                    className={`px-2 sm:px-4 py-2 rounded-lg text-[11px] sm:text-[13px] font-bold transition-all cursor-pointer truncate ${
                      active
                        ? "bg-[#2563EB] text-white shadow-xs"
                        : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-100"
                    }`}
                  >
                    {cs.tabTitle}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* MASTER STRUCTURED CASE STUDY CARD (Card Header + 12-Col Body) */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="ui-card overflow-hidden shadow-md"
          >
            {/* Card Header Bar */}
            <div className="ui-card-header flex-wrap">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#1D4ED8] flex items-center justify-center font-bold border border-blue-200 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-bold text-[#0F172A] leading-tight">
                    {currentCase.clientSector}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {currentCase.location}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-slate-700 text-[10.5px] font-bold tracking-wide">
                  {currentCase.tag}
                </span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10.5px] font-bold">
                  Implementasi Terverifikasi
                </span>
              </div>
            </div>

            {/* Card Body: 12-Col Split Layout */}
            <div className="ui-card-body">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                {/* LEFT COLUMN: Clean Screenshot Card (No Mac Dots, Clean URL Header Strip) */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="rounded-xl bg-white border border-slate-300 shadow-xs overflow-hidden flex flex-col group">
                    <div className="bg-slate-50 border-b border-slate-200 px-3.5 py-2 flex items-center justify-between text-slate-600">
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono">
                        <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="font-semibold text-slate-700">https://{currentCase.visualUrl}</span>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Pratinjau Sistem Live
                      </span>
                    </div>

                    <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[440px] bg-slate-100 overflow-hidden">
                      <Image
                        src={currentCase.imagePreview}
                        alt={currentCase.headline}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        priority
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src !== currentCase.fallbackImage) {
                            target.src = currentCase.fallbackImage;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Structured Specs, Divided Stats, List Group Story & Quote */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <h3 className="text-lg sm:text-xl lg:text-[22px] font-extrabold tracking-tight text-[#0F172A] leading-snug">
                    {currentCase.headline}
                  </h3>

                  {/* 3-Cell Divided Metric Grid */}
                  <div className="grid grid-cols-3 border border-slate-300 rounded-xl divide-x divide-slate-200 bg-slate-50 overflow-hidden">
                    {currentCase.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-2.5 sm:p-3 text-center space-y-0.5">
                        <div className="text-base sm:text-xl font-black text-[#2563EB]">
                          {m.value}
                        </div>
                        <div className="text-[10.5px] font-bold text-slate-800 leading-tight">
                          {m.label}
                        </div>
                        <div className="text-[9.5px] text-slate-500 font-medium truncate">
                          {m.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bootstrap List-Group Story */}
                  <div className="ui-list-group text-[11.5px] leading-snug">
                    <div className="px-3.5 py-2.5 flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">✕ Kendala:</span>
                      <span className="text-slate-600">{currentCase.challengeBrief}</span>
                    </div>
                    <div className="px-3.5 py-2.5 flex items-start gap-2 bg-slate-50/50">
                      <span className="text-blue-600 font-bold shrink-0">⚡ Solusi:</span>
                      <span className="text-slate-700">{currentCase.solutionBrief}</span>
                    </div>
                    <div className="px-3.5 py-2.5 flex items-start gap-2 bg-emerald-50/40">
                      <span className="text-emerald-700 font-bold shrink-0">✓ Dampak:</span>
                      <span className="text-slate-900 font-semibold">{currentCase.impactBrief}</span>
                    </div>
                  </div>

                  {/* Crisp Callout Testimonial */}
                  <div className="bg-slate-50 border border-slate-200 border-l-4 border-l-[#2563EB] rounded-r-xl p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      {currentCase.clientQuote.monogram}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] text-slate-700 italic leading-snug line-clamp-2">
                        &ldquo;{currentCase.clientQuote.text}&rdquo;
                      </p>
                      <div className="text-[10.5px] font-bold text-[#0F172A] mt-0.5">
                        {currentCase.clientQuote.author}{" "}
                        <span className="font-normal text-slate-500">
                          · {currentCase.clientQuote.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button Pair */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href="#kontak"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-[#0F172A] hover:bg-[#2563EB] shadow-xs transition-colors"
                    >
                      <span>Konsultasikan Solusi Serupa</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <Link
                      href="/demo"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-[13px] font-bold text-[#1D4ED8] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors"
                    >
                      <span>Coba Simulasi Live (/demo)</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
