"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Building2,
  Briefcase,
  Users,
  Sparkles,
  ArrowRight,
  Globe,
  Database,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

export function GroveCaseStudySection() {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const cases = [
    {
      id: "finansial-prima",
      tabTitle: "1. Web Modern (Finansial Prima)",
      tag: "HEADLESS WEB & LEAD CONVERSION",
      institution: "PT Finansial Prima Mandiri",
      location: "Jakarta Selatan, DKI Jakarta",
      icon: Globe,
      headline: "Arsitektur Web Modern Loading 0,5 Detik & Konversi Leads Naik +180%",
      imagePreview: "/images/finansial-web-preview.jpg",
      metrics: [
        { value: "0,5 Detik", label: "Kecepatan Halaman di HP Investor" },
        { value: "+180%", label: "Kenaikan Inbound Leads Organik" },
        { value: "100 / 100", label: "Skor Google PageSpeed & SEO" },
      ],
      problemStory:
        "Website lama lambat dibuka (>6.8 detik di HP) dan sulit masuk halaman pertama Google, sehingga puluhan calon investor keluar sebelum melihat proposal pendanaan.",
      solutionStory:
        "Abinest merancang ulang web berbasis Next.js 15 Edge SSR dengan optimasi gambar otomatis dan headless CMS, membuat halaman instan dibuka dan peringkat Google naik tajam.",
      clientQuote: {
        text: "Website kami kini langsung terbuka dalam sekejap mata di HP investor dan klien korporat. Konversi leads inbound meningkat hampir dua kali lipat sejak peluncuran.",
        author: "Hendra Kusuma, S.E., M.B.A.",
        role: "VP of Marketing & Digital Growth",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      },
      visualUrl: "https://finansialprima.co.id/corporate",
      statsBar: [
        { label: "WAKTU BUKA DI HP", value: "0,5 Detik", sub: "Sebelumnya >6.8 Detik" },
        { label: "CONVERSION RATE", value: "+180% Naik", sub: "Formulir Lead Cepat" },
        { label: "GOOGLE LIGHTHOUSE", value: "100 / 100", sub: "Skor Sempurna" },
      ],
    },
    {
      id: "logistik-nusantara",
      tabTitle: "2. Custom ERP (Logistik Nusantara)",
      tag: "CUSTOM ENTERPRISE ERP & SUPPLY CHAIN",
      institution: "PT Logistik Nusantara Distribusi",
      location: "Jakarta Barat, DKI Jakarta",
      icon: Database,
      headline: "Sistem ERP Multi-Gudang Mengotomasi 18.000 SKU & Menghemat 40 Jam/Minggu",
      imagePreview: "/images/erp-dashboard.jpg",
      metrics: [
        { value: "0% Selisih", label: "Sinkronisasi 4 Gudang Real-Time" },
        { value: "40 Jam/Mgg", label: "Waktu Rekonsiliasi Dihemat" },
        { value: "100% Hak Milik", label: "Bebas Biaya Lisensi Per-User" },
      ],
      problemStory:
        "Staf gudang dan finance terhambat oleh sistem lama yang lambat dan biaya sewa software luar negeri puluhan juta per bulan yang membatasi jumlah akun user.",
      solutionStory:
        "Abinest membangun sistem ERP kustom terpusat berbasis PostgreSQL pooling yang menghubungkan cabang Jakarta, Surabaya, Bandung, dan Semarang tanpa biaya lisensi per user selamanya.",
      clientQuote: {
        text: "Kami menghemat ratusan juta rupiah per tahun karena bebas biaya lisensi bulanan. Seluruh alur multi-gudang dan faktur terpantau akurat secara real-time.",
        author: "Ir. Bambang Sutrisno, M.M.",
        role: "Direktur Operasional & Supply Chain",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      },
      visualUrl: "https://erp.logistiknusantara.id/multi-warehouse",
      statsBar: [
        { label: "STATUS GUDANG", value: "18.240 SKU", sub: "● 0% Selisih Stok" },
        { label: "LATENSI DATA", value: "34 ms", sub: "Koneksi Cepat" },
        { label: "BIAYA LISENSI USER", value: "Rp 0 / Bulan", sub: "100% Hak Milik Klien" },
      ],
    },
    {
      id: "sentosa-ai",
      tabTitle: "3. AI Automasi (Sentosa Retail)",
      tag: "DOCUMENT AI & WHATSAPP META AGENT",
      institution: "Sentosa Retail & Supply Chain Hub",
      location: "Surabaya, Jawa Timur",
      icon: BrainCircuit,
      headline: "Automasi AI Memproses 6.000 Faktur Bulanan Otomatis Dalam 1,2 Detik",
      imagePreview: "/images/ai-ml-workflow.jpg",
      metrics: [
        { value: "1,2 Detik", label: "Ekstraksi Invoice Otomatis OCR + LLM" },
        { value: "99.7%", label: "Tingkat Akurasi Parsing Dokumen" },
        { value: "0 Kasus Blokir", label: "WhatsApp Resmi Meta Cloud API" },
      ],
      problemStory:
        "Tim keuangan menghabiskan ratusan jam setiap bulan hanya untuk membaca manual ribuan invoice PDF supplier dan mengetik ulang nomor PO yang rawan salah.",
      solutionStory:
        "Abinest mengintegrasikan Document AI pipeline dan WhatsApp AI Agent resmi Meta yang otomatis mengekstrak data faktur dan memverifikasi pembayaran secara otonom.",
      clientQuote: {
        text: "Pekerjaan rekap invoice bulanan yang dulunya butuh lembur berhari-hari kini selesai otomatis dalam sekejap. Tim finance bisa fokus pada analisa finansial strategis.",
        author: "Sandra Wijaya, S.Ak., B.A.",
        role: "Head of Finance & Business Automation",
        avatar:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      },
      visualUrl: "https://ai.sentosahub.id/document-pipeline",
      statsBar: [
        { label: "FAKTUR TERPROSES", value: "6.400 / Bulan", sub: "Otomatisasi Penuh" },
        { label: "KECEPATAN AI", value: "1,2 Detik", sub: "OCR + LLM Extraction" },
        { label: "AKURASI PARSING", value: "99.7%", sub: "Bebas Human Error" },
      ],
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
              STUDI KASUS &amp; PORTOFOLIO NYATA
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Bukti Kinerja Nyata di Perusahaan Klien Kami
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Klik pilar proyek di bawah ini untuk melihat metrik operasional dan dampak nyata yang dihasilkan tanpa perlu scroll panjang.
          </p>

          {/* Interactive Project Switcher Tabs */}
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
                      ? "bg-[#1D4ED8] text-white shadow-md scale-105"
                      : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {cs.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* SINGLE COMPACT INTERACTIVE SHOWCASE CARD (TIGHT & DENSE) */}
        <AnimatePresence mode="wait">
        <motion.div key={currentCase.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.22 }} className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1E40AF] flex items-center justify-center font-bold shrink-0 border border-blue-200">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-[#0F172A]">
                    {currentCase.institution}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-semibold border border-blue-200">
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

          {/* Large High-Fidelity UI Frame (80% Visual) */}
          <div className="rounded-2xl bg-slate-900 p-3 sm:p-4 shadow-[0_20px_50px_rgba(15,23,42,0.16)] ring-1 ring-slate-800">
            {/* Browser Bar */}
            <div className="bg-slate-800 rounded-t-xl px-3.5 py-2 flex items-center justify-between text-slate-400 text-xs mb-1">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500" />
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <div className="px-3 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-sky-400" />
                {currentCase.visualUrl}
              </div>
              <span className="text-[10px] font-bold text-sky-400 hidden sm:inline">
                VERIFIKASI PRODUKSI AKTIF
              </span>
            </div>

            {/* If there's an image preview, render it with high-fidelity */}
            {currentCase.imagePreview ? (
              <div className="relative w-full h-[240px] sm:h-[300px] rounded-b-xl overflow-hidden my-1">
                <Image
                  src={currentCase.imagePreview}
                  alt={currentCase.headline}
                  fill
                  className="object-cover object-center"
                />
              </div>
            ) : null}

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
                    <div className="text-[10px] text-blue-600 font-semibold mt-0.5">
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
                <div className="text-xl sm:text-2xl font-black text-[#1D4ED8]">
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
                <strong className="text-[#0F172A] font-semibold">Tantangan Klien:</strong>{" "}
                {currentCase.problemStory}
              </p>
              <p>
                <strong className="text-[#0F172A] font-semibold">Solusi Rekayasa Abinest:</strong>{" "}
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
