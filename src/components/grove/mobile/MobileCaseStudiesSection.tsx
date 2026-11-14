"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { useModalEffects } from "../use-modal-effects";

interface CaseItem {
  id: string;
  sector: string;
  title: string;
  image: string;
  fallback: string;
  metrics: { value: string; label: string }[];
  summary: string;
  quote: string;
  author: string;
}

const caseList: CaseItem[] = [
  {
    id: "web-korporat",
    sector: "Sektor Finansial · Jakarta",
    title: "Situs Web Perusahaan dengan Waktu Muat 0,5 Detik",
    image: "/images/case-studies/modern-web-finance.jpg",
    fallback: "/images/capabilities/capabilities-web-preview.jpg",
    metrics: [
      { value: "+180%", label: "Prospek Masuk" },
      { value: "0,5 detik", label: "Waktu Muat Seluler" },
    ],
    summary:
      "Migrasi dari situs web lama yang lambat (>6,8 detik di HP) ke sistem baru berkecepatan tinggi. Pengunjung yang langsung keluar turun 65% dan prospek masuk naik 1,8 kali dalam 60 hari.",
    quote:
      "Situs kami kini terbuka seketika di ponsel calon investor dan prospek masuk jauh lebih konsisten.",
    author: "Hendra Kusuma, Sektor Pembiayaan",
  },
  {
    id: "siakad-sekolah",
    sector: "Pendidikan · Portal SIAKAD",
    title: "1.240 Siswa Ujian Serentak 0% Tumbang",
    image: "/images/case-studies/siakad-education-portal.jpg",
    fallback: "/images/capabilities/capabilities-erp-preview.jpg",
    metrics: [
      { value: "1.240", label: "Siswa Serentak" },
      { value: "4 menit", label: "Terbit 600 Rapor" },
    ],
    summary:
      "Memisahkan jalur akses ujian daring dari proses pencetakan rapor digital agar ratusan siswa tetap lancar ujian bersamaan.",
    quote:
      "Tidak ada lagi gangguan aplikasi saat ujian berlangsung. Rekap rapor ratusan siswa selesai dalam hitungan menit.",
    author: "Drs. H. Mulyadi, Pembina Yayasan Pendidikan",
  },
  {
    id: "erp-gudang",
    sector: "Distribusi · Multi-Gudang",
    title: "Hemat 40 Jam Kerja/Minggu (18.000 Barang)",
    image: "/images/case-studies/erp-multi-warehouse.jpg",
    fallback: "/images/capabilities/capabilities-aiml-preview.jpg",
    metrics: [
      { value: "0%", label: "Selisih 4 Gudang" },
      { value: "Rp0", label: "Biaya Lisensi Staf" },
    ],
    summary:
      "Menggantikan sistem berlangganan mahal dengan aplikasi stok & kasir kustom yang terhubung ke pemindai barcode serta pengingat otomatis ke WhatsApp.",
    quote:
      "Kami bebas menambah jumlah staf gudang tanpa khawatir pembengkakan biaya lisensi per pengguna.",
    author: "Ir. Bambang Sutrisno, Direktur Operasional",
  },
];

export function MobileCaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  useModalEffects(Boolean(selectedCase), () => setSelectedCase(null));

  return (
    <section
      id="m-portofolio"
      data-section="portofolio"
      className="bg-white py-10 border-b border-slate-100"
    >
      <div className="max-w-md mx-auto space-y-5">
        <div className="px-5 space-y-1">
          <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">
            Studi Kasus Pilihan
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Implementasi sistem dengan hasil terukur.
          </p>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 px-5 py-1">
          {caseList.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedCase(item)}
              className="w-[82vw] max-w-[330px] shrink-0 snap-center rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.04)] overflow-hidden flex flex-col justify-between cursor-pointer active:scale-[0.99] transition-transform"
            >
              <div>
                <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 84vw, 330px"
                    className="object-cover object-center"
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      if (img.src !== item.fallback) img.src = item.fallback;
                    }}
                  />
                </div>

                <div className="p-4.5 space-y-3.5">
                  <div>
                    <span className="text-[11px] font-semibold text-blue-600 block mb-1">
                      {item.sector}
                    </span>
                    <h3 className="text-[15.5px] font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-slate-100 pt-1">
                    {item.metrics.map((m) => (
                      <div key={m.label} className="pr-3 first:pl-0 last:pl-3 last:pr-0">
                        <div className="text-[20px] font-black tracking-tight text-slate-900">
                          {m.value}
                        </div>
                        <div className="text-[11.5px] font-medium text-slate-500">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-4.5 py-3 border-t border-slate-100 flex items-center justify-between text-[13px] font-semibold text-blue-600">
                <span>Baca Ringkasan</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCase && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-case-modal-title"
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-sm flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-t-3xl max-h-[82dvh] overflow-y-auto overscroll-contain p-5 pb-8 space-y-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-[11.5px] font-semibold text-blue-600">
                  {selectedCase.sector}
                </span>
                <h3
                  id="mobile-case-modal-title"
                  className="text-[17px] font-bold text-slate-900 leading-snug mt-0.5"
                >
                  {selectedCase.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCase(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Tutup studi kasus"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-[13.5px] text-slate-700 leading-relaxed">
              {selectedCase.summary}
            </p>

            <blockquote className="pt-3 border-t border-slate-100 text-[13px] text-slate-600 italic leading-relaxed">
              &ldquo;{selectedCase.quote}&rdquo;
              <footer className="not-italic text-[12px] font-semibold text-slate-900 mt-1.5">
                — {selectedCase.author}
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <Link
                href="/demo"
                onClick={() => setSelectedCase(null)}
                className="h-11 rounded-xl border border-slate-200 text-slate-800 text-[13px] font-semibold flex items-center justify-center"
              >
                Lihat Demo
              </Link>
              <a
                href="#m-kontak"
                onClick={() => setSelectedCase(null)}
                className="h-11 rounded-xl bg-blue-600 text-white text-[13px] font-semibold flex items-center justify-center gap-1"
              >
                <span>Konsultasi Serupa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
