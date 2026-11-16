"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useModalEffects } from "./use-modal-effects";

const WHATSAPP_NUMBER = "6281398589745";

interface CapabilityItem {
  id: string;
  number: string;
  specCode: string;
  metricBadge: string;
  title: string;
  desc: string;
  deliverables: string[];
  image: string;
  alt: string;
  detailHref: string;
  waMessage: string;
}

const capabilities: CapabilityItem[] = [
  {
    id: "web",
    number: "7–14 Hari Kerja",
    specCode: "ARCH // 01 · WEB ENGINE",
    metricBadge: "< 0,8 Detik Muat",
    title: "Pengembangan Situs Web",
    desc: "Situs web perusahaan dan landing page berkecepatan tinggi (<0,8 detik) dengan struktur SEO Google yang rapi.",
    deliverables: [
      "Skor Google 95–100",
      "Desain Eksekutif Responsif",
      "SEO & Schema Otomatis",
    ],
    image: "/images/hero-web.webp",
    alt: "Pengembangan Situs Web Modern Abinest",
    detailHref: "/jasa-pembuatan-website-jakarta",
    waMessage:
      "Halo Tim Abinest, saya tertarik mendiskusikan pembuatan Situs Web Modern dengan kepemilikan kode penuh.",
  },
  {
    id: "erp",
    number: "2–8 Minggu",
    specCode: "ARCH // 02 · CORE ERP & SIAKAD",
    metricBadge: "Rp0 Lisensi / Staf",
    title: "Sistem ERP & SIAKAD Kustom",
    desc: "Pengelolaan stok multi-gudang, kasir POS, dan portal akademik terintegrasi tanpa biaya lisensi per pengguna.",
    deliverables: [
      "Stok Multi-Gudang Real-Time",
      "Kasir POS & Barcode",
      "Ujian & Rapor SIAKAD",
    ],
    image: "/images/erp-dashboard.webp",
    alt: "Dashboard Sistem ERP dan SIAKAD Abinest",
    detailHref: "/jasa-pembuatan-sistem-erp",
    waMessage:
      "Halo Tim Abinest, saya tertarik berkonsultasi mengenai Sistem ERP atau SIAKAD Kustom tanpa biaya lisensi pengguna.",
  },
  {
    id: "aiml",
    number: "1–4 Minggu",
    specCode: "ARCH // 03 · AI & META CLOUD",
    metricBadge: "99,7% Akurasi OCR",
    title: "Automasi AI & WhatsApp Bisnis",
    desc: "Asisten pelanggan 24 jam melalui WhatsApp Cloud API resmi Meta serta pembacaan faktur otomatis via OCR.",
    deliverables: [
      "WhatsApp Resmi Meta 24/7",
      "Pembaca Nota & Faktur OCR",
      "Sinkronisasi Database ERP",
    ],
    image: "/images/ai-ml-workflow.webp",
    alt: "Automasi AI dan WhatsApp Bisnis Abinest",
    detailHref: "/jasa-automasi-whatsapp",
    waMessage:
      "Halo Tim Abinest, saya tertarik berkonsultasi mengenai implementasi Automasi AI dan WhatsApp Cloud API.",
  },
];

function DeliverablePills({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 pt-1">
      {items.map((label) => (
        <span
          key={label}
          className="inline-flex items-center px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200/80 text-[11.5px] font-medium text-slate-700"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function CapabilityActionFooter({
  item,
  className = "",
}: {
  item: CapabilityItem;
  className?: string;
}) {
  return (
    <div
      className={`pt-4 border-t border-slate-100 flex items-center justify-between gap-3 ${className}`}
    >
      <Link
        href={item.detailHref}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
      >
        <span>Detail layanan</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
        className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
      >
        Diskusikan via WA
      </a>
    </div>
  );
}

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

  const [webCap, erpCap, aiCap] = capabilities;

  return (
    <section
      id="layanan-utama"
      data-section="layanan-utama"
      className="scroll-mt-16 py-24 bg-[#F1F5F9] border-b border-slate-200/90 relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-4"
        >
          <div className="max-w-xl space-y-2.5">
            <div className="font-mono text-xs font-semibold uppercase tracking-widest text-blue-600">
              [01 // ARSITEKTUR &amp; CAKUPAN LAYANAN]
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Layanan Utama
            </h2>
            <p className="text-[15.5px] text-slate-600 leading-relaxed">
              Tiga cakupan rekayasa berarsitektur modular untuk mempercepat operasional dan kredibilitas bisnis Anda.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 font-mono text-xs text-slate-500 bg-white border border-slate-200/90 rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span>BELI PUTUS · 100% HAK MILIK KODE</span>
          </div>
        </motion.div>

        {/* Asymmetric 12-Column Architectural Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Card 1: Web Engine (5 Cols) */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 group rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="px-5 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between text-[11px] font-mono">
                <span className="font-semibold text-slate-700">
                  {webCap.specCode}
                </span>
                <span className="text-blue-600 font-semibold">
                  {webCap.number}
                </span>
              </div>

              <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={webCap.image}
                  alt={webCap.alt}
                  fill
                  sizes="(max-width: 1200px) 42vw, 480px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/85 backdrop-blur-sm border border-white/15 px-2.5 py-1 font-mono text-[11px] font-medium text-white">
                  {webCap.metricBadge}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {webCap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {webCap.desc}
                </p>
                <DeliverablePills items={webCap.deliverables} />
              </div>
            </div>

            <CapabilityActionFooter item={webCap} className="px-6 pb-6 mt-1" />
          </motion.article>

          {/* Card 2: Featured Wide ERP & SIAKAD (7 Cols) */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.06 }}
            className="lg:col-span-7 group rounded-2xl bg-white border border-slate-300 ring-1 ring-slate-900/5 shadow-[0_6px_24px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.09)] transition-all overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="px-6 py-3 bg-[#0F172A] text-white flex items-center justify-between text-xs font-mono">
                <span className="text-slate-200 font-semibold">
                  {erpCap.specCode}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded bg-blue-500/20 border border-sky-400/30 px-2.5 py-0.5 text-[10.5px] font-semibold text-sky-300">
                  SISTEM UTAMA · RP0/USER
                </span>
              </div>

              <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-[260px] bg-slate-100 overflow-hidden">
                <Image
                  src={erpCap.image}
                  alt={erpCap.alt}
                  fill
                  sizes="(max-width: 1200px) 58vw, 680px"
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <span className="absolute bottom-3 right-3 rounded-md bg-slate-900/85 backdrop-blur-sm border border-white/15 px-2.5 py-1 font-mono text-[11px] font-medium text-emerald-300">
                  {erpCap.metricBadge} · {erpCap.number}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {erpCap.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  {erpCap.desc}
                </p>
                <DeliverablePills items={erpCap.deliverables} />
              </div>
            </div>

            <CapabilityActionFooter item={erpCap} className="px-6 pb-6 mt-1" />
          </motion.article>

          {/* Card 3: Full-Width Horizontal Split AI & Meta Cloud (12 Cols) */}
          <motion.article
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: 0.12 }}
            className="lg:col-span-12 group rounded-2xl bg-white border border-slate-200/90 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)] transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch"
          >
            <div className="lg:col-span-7 p-7 sm:p-8 flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2.5 text-[11px] font-mono">
                  <span className="font-semibold text-blue-600">
                    {aiCap.specCode}
                  </span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500 font-semibold">
                    {aiCap.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                  {aiCap.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
                  {aiCap.desc}
                </p>
                <DeliverablePills items={aiCap.deliverables} />
              </div>

              <CapabilityActionFooter item={aiCap} />
            </div>

            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-50/90 border-t lg:border-t-0 lg:border-l border-slate-200/80 flex items-center">
              <div className="w-full rounded-xl bg-[#0F172A] p-1.5 border border-slate-800 shadow-lg">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-slate-900">
                  <Image
                    src={aiCap.image}
                    alt={aiCap.alt}
                    fill
                    sizes="(max-width: 1200px) 42vw, 460px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  <span className="absolute bottom-2.5 right-2.5 rounded-md bg-slate-900/90 backdrop-blur-sm border border-white/15 px-2.5 py-1 font-mono text-[11px] font-medium text-sky-300">
                    {aiCap.metricBadge}
                  </span>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        {/* Tombol Pembuka Tabel Perbandingan (Tertutup secara default agar hemat ruang scroll) */}
        <div className="text-center pt-1">
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
