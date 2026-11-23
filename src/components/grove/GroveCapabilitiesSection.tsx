"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Database, Globe, MessageSquare, X, Zap } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useModalEffects } from "./use-modal-effects";

function CapabilityDiagram({ id }: { id: string }) {
  if (id === "web") {
    return (
      <div className="my-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-4 space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 text-[#0A0A0A] font-medium">
            <Globe className="w-3.5 h-3.5 text-[#0070F3]" />
            <span>Core Web Vitals</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold">
            100 / 100
          </span>
        </div>
        <div className="rounded-lg bg-white border border-[#EAEAEA] p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-[#0A0A0A] inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#0070F3]" />
              <span>Waktu Muat HP</span>
            </span>
            <span className="font-mono font-semibold text-[#0070F3]">0,48 dtk</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-neutral-100 overflow-hidden">
            <div className="h-full w-[18%] rounded-full bg-gradient-to-r from-[#0070F3] to-teal-500" />
          </div>
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#666666] px-1">
          <span>Schema JSON-LD &amp; SEO</span>
          <span className="font-medium text-emerald-700">✓ Halaman 1 Google</span>
        </div>
      </div>
    );
  }

  if (id === "erp") {
    const items = [
      { label: "Stok 4 Gudang", meta: "0% Selisih" },
      { label: "Kasir POS Cabang", meta: "Real-Time" },
      { label: "Portal SIAKAD CBT", meta: "1.240 Siswa" },
    ];
    return (
      <div className="my-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-4 space-y-2.5">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 text-[#0A0A0A] font-medium">
            <Database className="w-3.5 h-3.5 text-[#0A0A0A]" />
            <span>Sistem Terpusat</span>
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[#0A0A0A] text-white font-semibold">
            Rp0 / Staf
          </span>
        </div>
        <div className="rounded-lg bg-white border border-[#EAEAEA] divide-y divide-[#EAEAEA]">
          {items.map((row) => (
            <div
              key={row.label}
              className="px-3 py-2 flex items-center justify-between text-xs"
            >
              <span className="font-medium text-[#0A0A0A]">{row.label}</span>
              <span className="font-mono text-[11px] text-emerald-700">
                {row.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-xl border border-[#EAEAEA] bg-[#FAFAFA] p-4 space-y-2.5">
      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="inline-flex items-center gap-1.5 text-[#0A0A0A] font-medium">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Meta Cloud API</span>
        </span>
        <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 font-semibold">
          24/7 Aktif
        </span>
      </div>
      <div className="rounded-lg bg-white border border-[#EAEAEA] p-3 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-medium text-[#0A0A0A]">Balasan Chat AI</span>
          <span className="font-mono text-[11px] text-[#0070F3]">&lt; 1 detik</span>
        </div>
        <div className="h-px bg-[#EAEAEA]" />
        <div className="flex items-center justify-between">
          <span className="font-medium text-[#0A0A0A]">Baca Faktur OCR</span>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-emerald-700">
            <CheckCircle2 className="w-3 h-3" />
            99,7%
          </span>
        </div>
      </div>
      <div className="text-[11px] text-[#666666] px-1">
        Terhubung langsung ke stok &amp; jurnal ERP Anda
      </div>
    </div>
  );
}

const WHATSAPP_NUMBER = "6281398589745";

const capabilities = [
  {
    id: "web",
    number: "01 · 7–14 Hari Kerja",
    title: "Pengembangan Situs Web",
    desc: "Situs web perusahaan dan landing page berkecepatan tinggi (<0,8 detik) dengan struktur SEO Google yang rapi.",
    image: "/images/hero-web.webp",
    alt: "Pengembangan Situs Web Modern Abinest",
    detailHref: "/jasa-pembuatan-website-jakarta",
    waMessage:
      "Halo Tim Abinest, saya tertarik mendiskusikan pembuatan Situs Web Modern dengan kepemilikan kode penuh.",
  },
  {
    id: "erp",
    number: "02 · 2–8 Minggu",
    title: "Sistem ERP & SIAKAD Kustom",
    desc: "Pengelolaan stok multi-gudang, kasir POS, dan portal akademik terintegrasi tanpa biaya lisensi per pengguna.",
    image: "/images/erp-dashboard.webp",
    alt: "Dashboard Sistem ERP dan SIAKAD Abinest",
    detailHref: "/jasa-pembuatan-sistem-erp",
    waMessage:
      "Halo Tim Abinest, saya tertarik berkonsultasi mengenai Sistem ERP atau SIAKAD Kustom tanpa biaya lisensi pengguna.",
  },
  {
    id: "aiml",
    number: "03 · 1–4 Minggu",
    title: "Automasi AI & WhatsApp Bisnis",
    desc: "Asisten pelanggan 24 jam melalui WhatsApp Cloud API resmi Meta serta pembacaan faktur otomatis via OCR.",
    image: "/images/ai-ml-workflow.webp",
    alt: "Automasi AI dan WhatsApp Bisnis Abinest",
    detailHref: "/jasa-automasi-whatsapp",
    waMessage:
      "Halo Tim Abinest, saya tertarik berkonsultasi mengenai implementasi Automasi AI dan WhatsApp Cloud API.",
  },
];

const serviceComparisonRows = [
  {
    aspect: "Masalah yang Diselesaikan",
    web: "Usaha belum punya situs resmi, tampilannya lambat di HP, atau sulit ditemukan di Google.",
    erp: "Stok barang sering selisih, pembukuan masih manual di Excel, atau ujian sekolah lambat.",
    ai: "Admin kewalahan balas chat WhatsApp pembeli dan sering salah ketik saat input nota/faktur.",
  },
  {
    aspect: "Cocok untuk Usaha Apa",
    web: "UMKM, toko, klinik, kontraktor, yayasan, dan perusahaan jasa.",
    erp: "Distributor, toko grosir, ritel/kafe, klinik kesehatan, hingga sekolah dan kampus.",
    ai: "Tim admin penjualan, layanan pelanggan 24 jam, dan bagian keuangan.",
  },
  {
    aspect: "Kapan Siap Dipakai",
    web: "1 – 2 minggu kerja",
    erp: "2 – 8 minggu (bisa langsung dipakai bertahap per bagian)",
    ai: "1 – 4 minggu kerja",
  },
  {
    aspect: "Manfaat Langsung",
    web: "Halaman terbuka cepat (<1 detik) di HP dan lebih mudah muncul saat dicari calon pembeli.",
    erp: "Stok gudang & kasir terpantau langsung dari HP, laporan laba rugi keluar otomatis.",
    ai: "Pertanyaan WhatsApp dijawab otomatis 24 jam dan data faktur langsung masuk ke laporan.",
  },
  {
    aspect: "Kepemilikan Sistem",
    web: "100% file situs web dan alamat domain menjadi hak milik penuh Anda.",
    erp: "100% aplikasi dan seluruh catatan data transaksi menjadi aset penuh usaha Anda.",
    ai: "100% alur kerja balasan otomatis dan akun resmi WhatsApp milik usaha Anda.",
  },
  {
    aspect: "Biaya Bulanan per Staf / Siswa",
    web: "Rp0 (gratis selamanya jika pilih skema Beli Putus).",
    erp: "Rp0 — bebas tambah berapa pun kasir, karyawan, cabang, atau siswa.",
    ai: "Rp0 biaya sewa aplikasi (hanya bayar pemakaian chat/AI sesuai volume pesan).",
  },
];

export function GroveCapabilitiesSection() {
  const [showCompareModal, setShowCompareModal] = useState(false);
  useModalEffects(showCompareModal, () => setShowCompareModal(false));

  return (
    <section
      id="layanan-utama"
      data-section="layanan-utama"
      className="scroll-mt-16 bg-[#FAFAFA] border-b border-[#EAEAEA]"
    >
      <div className="max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white">
        {/* Vercel Dual-Tone Section Header */}
        <div className="px-8 py-14 border-b border-[#EAEAEA] relative">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 left-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 right-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666] block">
              01 / CAKUPAN REKAYASA
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.035em] leading-[1.18]">
              <span className="text-[#0A0A0A]">Layanan utama terintegrasi.</span>{" "}
              <span className="text-[#666666] font-normal">
                Tiga fondasi sistem untuk mempercepat akuisisi pelanggan dan efisiensi operasional bisnis Anda.
              </span>
            </h2>
          </div>
        </div>

        {/* Connected 3-Cell Geist Matrix with Crisp Vector UI Diagrams */}
        <div className="grid grid-cols-3 divide-x divide-[#EAEAEA] border-b border-[#EAEAEA]">
          {capabilities.map((item) => (
            <article
              key={item.id}
              className="group p-8 bg-white hover:bg-[#FAFAFA]/75 transition-colors flex flex-col justify-between relative"
            >
              {/* Top Shimmer Hairline on Hover */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#0A0A0A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />

              <div>
                <div className="space-y-2.5">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] font-mono text-[11px] font-medium text-[#666666]">
                    {item.number}
                  </span>
                  <h3 className="text-[20px] font-semibold tracking-[-0.025em] text-[#0A0A0A] leading-snug pt-1">
                    {item.title}
                  </h3>
                  <p className="text-[14px] text-[#666666] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Crisp Native Vector UI Diagram — 100% Legible at Any Screen Width */}
                <CapabilityDiagram id={item.id} />
              </div>

              <div className="pt-4 border-t border-[#EAEAEA]/80 flex items-center justify-between gap-3">
                <Link
                  href={item.detailHref}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white group-hover:bg-[#0A0A0A] text-[#0A0A0A] group-hover:text-white border border-[#EAEAEA] group-hover:border-[#0A0A0A] text-xs font-medium transition-all"
                >
                  <span>Detail layanan</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    item.waMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "capabilities_card",
                      service: item.title,
                    })
                  }
                  className="text-xs font-medium text-[#666666] hover:text-[#0A0A0A] transition-colors"
                >
                  Diskusikan ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Tombol Pembuka Tabel Perbandingan */}
        <div className="px-8 py-6 bg-[#FAFAFA]/60 flex items-center justify-between">
          <span className="text-xs text-[#666666]">
            Bingung memilih arsitektur yang paling sesuai dengan tahap bisnis Anda?
          </span>
          <button
            type="button"
            onClick={() => setShowCompareModal(true)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            Bingung memilih? Lihat tabel perbandingan layanan dengan bahasa sederhana →
          </button>
        </div>
      </div>

      {/* Modal Perbandingan 3 Layanan (Bahasa Gamblang Non-IT) */}
      {showCompareModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="capabilities-compare-modal-title"
          onClick={() => setShowCompareModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[calc(100dvh-2rem)] sm:max-h-[85dvh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col"
          >
            <div className="px-5 sm:px-7 py-4 sm:py-5 border-b border-slate-100 flex items-start justify-between gap-4 shrink-0">
              <div>
                <h3
                  id="capabilities-compare-modal-title"
                  className="text-lg sm:text-xl font-bold text-slate-900"
                >
                  Perbandingan Pilihan Layanan Abinest
                </h3>
                <p className="text-[13px] sm:text-sm text-slate-500 mt-0.5">
                  Ringkasan sederhana tanpa istilah teknis untuk membantu Anda memilih solusi paling pas.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Tutup tabel perbandingan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto overflow-x-auto overscroll-contain px-5 sm:px-7 py-4 sm:py-5">
              <table className="w-full text-left border-collapse text-[13.5px]">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-900">
                    <th className="py-3 pr-4 font-bold w-1/4">Aspek</th>
                    <th className="py-3 px-4 font-bold w-1/4">1. Situs Web Usaha</th>
                    <th className="py-3 px-4 font-bold w-1/4 text-blue-700">
                      2. Sistem Kasir, Stok &amp; Sekolah
                    </th>
                    <th className="py-3 pl-4 font-bold w-1/4">
                      3. Asisten WhatsApp &amp; Baca Nota
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {serviceComparisonRows.map((row) => (
                    <tr key={row.aspect} className="align-top">
                      <td className="py-3.5 pr-4 font-semibold text-slate-900">
                        {row.aspect}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 leading-relaxed">
                        {row.web}
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 bg-blue-50/35 leading-relaxed">
                        {row.erp}
                      </td>
                      <td className="py-3.5 pl-4 text-slate-600 leading-relaxed">
                        {row.ai}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
