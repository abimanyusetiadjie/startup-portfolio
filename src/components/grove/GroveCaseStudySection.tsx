"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, X } from "lucide-react";
import { useModalEffects } from "./use-modal-effects";

interface CaseItem {
  id: string;
  sector: string;
  impactHeadline: string;
  subMetric: string;
  fullTitle: string;
  imagePreview: string;
  fallbackImage: string;
  modalObjectPosition: string;
  metrics: { value: string; label: string }[];
  summary: string;
  quote: string;
  author: string;
}

const cases: CaseItem[] = [
  {
    id: "modern-web",
    sector: "Situs Web Finansial · Jakarta",
    impactHeadline: "+180% Prospek Masuk",
    subMetric: "Waktu muat HP 0,5 detik · Skor Google 100/100",
    fullTitle: "Waktu Muat 0,5 Detik dan Pertumbuhan Prospek +180%",
    imagePreview: "/images/case-studies/modern-web-finance.jpg",
    fallbackImage: "/images/capabilities/capabilities-web-preview.jpg",
    modalObjectPosition: "object-[58%_50%]",
    metrics: [
      { value: "0,5 detik", label: "Waktu Muat Seluler" },
      { value: "+180%", label: "Prospek Masuk" },
      { value: "100/100", label: "Skor Google PageSpeed" },
    ],
    summary:
      "Kami memindahkan situs web dari sistem lama yang lambat (6,8 detik di HP) ke arsitektur web berkecepatan tinggi yang ramah pencarian Google. Pengunjung yang langsung keluar turun 65% dalam 60 hari.",
    quote:
      "Situs kami kini langsung terbuka di ponsel calon investor, dan permintaan konsultasi masuk lebih konsisten setiap hari.",
    author: "Hendra Kusuma, Sektor Finansial",
  },
  {
    id: "siakad-sekolah",
    sector: "Portal SIAKAD · Pendidikan",
    impactHeadline: "1.240 Siswa Serentak",
    subMetric: "Ujian daring 0% tumbang · 600 rapor selesai 4 menit",
    fullTitle: "Ujian Daring 1.240 Siswa Berjalan Stabil Tanpa Gangguan",
    imagePreview: "/images/case-studies/siakad-education-portal.jpg",
    fallbackImage: "/images/capabilities/capabilities-erp-preview.jpg",
    modalObjectPosition: "object-[56%_45%]",
    metrics: [
      { value: "1.240", label: "Siswa Serentak" },
      { value: "0%", label: "Gangguan Sistem" },
      { value: "4 menit", label: "Terbit 600 Rapor" },
    ],
    summary:
      "Memisahkan jalur akses ujian daring dari proses pencetakan rapor digital agar ratusan siswa dapat mengerjakan soal bersamaan dengan lancar.",
    quote:
      "Tidak ada lagi kendala aplikasi melambat saat ujian berlangsung. Rekap rapor semester kini selesai dalam hitungan menit.",
    author: "Drs. H. Mulyadi, Pembina Yayasan Pendidikan",
  },
  {
    id: "erp-multigudang",
    sector: "ERP Multi-Gudang · Distribusi",
    impactHeadline: "Hemat 40 Jam/Minggu",
    subMetric: "0% selisih stok 4 gudang · Rp0 biaya per staf",
    fullTitle: "Sinkronisasi 18.000 Barang dan Efisiensi 40 Jam Kerja per Minggu",
    imagePreview: "/images/case-studies/erp-multi-warehouse.jpg",
    fallbackImage: "/images/capabilities/capabilities-aiml-preview.jpg",
    modalObjectPosition: "object-[55%_35%]",
    metrics: [
      { value: "0%", label: "Selisih 4 Gudang" },
      { value: "40 jam", label: "Hemat per Minggu" },
      { value: "Rp0", label: "Biaya Lisensi Staf" },
    ],
    summary:
      "Menggantikan aplikasi berlangganan mahal dengan sistem stok & kasir kustom yang terhubung ke pemindai barcode dan pengingat otomatis ke WhatsApp.",
    quote:
      "Kami bebas menambah ratusan staf operasional tanpa memikirkan pembengkakan biaya sewa per karyawan.",
    author: "Ir. Bambang Sutrisno, Direktur Operasional",
  },
];

export function GroveCaseStudySection() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  useModalEffects(Boolean(selectedCase), () => setSelectedCase(null));

  return (
    <section
      id="portofolio"
      data-section="portofolio"
      className="py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-12">
        <div className="max-w-xl space-y-2.5">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Studi Kasus Pilihan
          </h2>
          <p className="text-[15.5px] text-slate-600 leading-relaxed">
            Dampak langsung yang dirasakan klien pada kecepatan, ketahanan, dan efisiensi operasional.
          </p>
        </div>

        {/* Grid Bento 3 Kolom Visual-First (Minim Teks & Tanpa Overlay pada Gambar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {cases.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              onClick={() => setSelectedCase(item)}
              className="group rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Pure Clean Image Frame — Strictly Zero Badge or Text Overlay */}
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.imagePreview}
                    alt={item.fullTitle}
                    fill
                    sizes="(max-width: 1200px) 33vw, 380px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    priority={idx === 0}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src !== item.fallbackImage) {
                        target.src = item.fallbackImage;
                      }
                    }}
                  />
                </div>

                {/* Ultra-Minimal Result Typography */}
                <div className="p-6 space-y-1.5">
                  <span className="text-xs font-semibold text-blue-600 block">
                    {item.sector}
                  </span>
                  <h3 className="text-[22px] font-extrabold tracking-tight text-slate-900 leading-snug">
                    {item.impactHeadline}
                  </h3>
                  <p className="text-[13.5px] text-slate-500">
                    {item.subMetric}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-1">
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>Lihat studi kasus</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Modal Detail Ringkas (Terbuka hanya saat kartu diklik) */}
      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 z-50 bg-slate-950/55 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-[840px] max-h-[calc(100dvh-2rem)] sm:max-h-[85dvh] overflow-y-auto overscroll-contain bg-white rounded-2xl shadow-2xl border border-slate-200 grid grid-cols-1 md:grid-cols-12"
          >
            <div className="relative md:col-span-6 h-44 sm:h-52 md:h-auto md:min-h-[360px] w-full bg-slate-100 overflow-hidden">
              <Image
                src={selectedCase.imagePreview}
                alt={selectedCase.fullTitle}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className={`object-cover ${selectedCase.modalObjectPosition}`}
              />
            </div>

            <div className="md:col-span-6 p-5 lg:p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-[11.5px] font-semibold text-blue-600 block mb-0.5">
                      {selectedCase.sector}
                    </span>
                    <h3
                      id="case-study-modal-title"
                      className="text-[17px] lg:text-[18px] font-extrabold text-slate-900 leading-snug"
                    >
                      {selectedCase.fullTitle}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedCase(null)}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 transition-colors cursor-pointer"
                    aria-label="Tutup detail studi kasus"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2.5 py-2.5 border-y border-slate-100">
                  {selectedCase.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-base lg:text-[18px] font-black tracking-tight text-slate-900">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-[13px] text-slate-600 leading-relaxed">
                  {selectedCase.summary}
                </p>

                <blockquote className="text-[12.5px] text-slate-600 italic leading-relaxed border-l-2 border-slate-200 pl-3">
                  &ldquo;{selectedCase.quote}&rdquo;
                  <footer className="not-italic text-xs font-semibold text-slate-900 mt-1">
                    — {selectedCase.author}
                  </footer>
                </blockquote>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1.5">
                <Link
                  href="/demo"
                  onClick={() => setSelectedCase(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-xs font-semibold transition-colors"
                >
                  <span>Coba Simulasi Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#kontak"
                  onClick={() => setSelectedCase(null)}
                  className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                >
                  Konsultasikan Solusi Serupa →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
