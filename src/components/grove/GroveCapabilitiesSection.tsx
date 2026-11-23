"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Database, Globe, MessageSquare, X, Zap } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { useModalEffects } from "./use-modal-effects";

function CapabilityDiagram({ id }: { id: string }) {
  if (id === "web") {
    return (
      <div className="my-6 rounded-2xl bg-gradient-to-br from-indigo-50/90 via-sky-50/70 to-white p-4 space-y-3 ring-1 ring-indigo-100/80">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 text-[#0A2540] font-semibold">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#635BFF] to-[#0EA5E9] text-white inline-flex items-center justify-center shadow-sm">
              <Globe className="w-3.5 h-3.5" />
            </span>
            <span>Core Web Vitals</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold shadow-sm">
            100 / 100
          </span>
        </div>
        <div className="rounded-xl bg-white shadow-sm p-3 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#0A2540] inline-flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-[#635BFF]" />
              <span>Waktu Muat HP</span>
            </span>
            <span className="font-mono font-bold text-[#635BFF]">0,48 dtk</span>
          </div>
          <div className="h-2 w-full rounded-full bg-indigo-100/80 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "22%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="h-full rounded-full bg-gradient-to-r from-[#635BFF] to-[#00D4FF]"
            />
          </div>
        </div>
        <div className="flex items-center justify-between text-[11.5px] text-[#425466] px-1">
          <span>Schema JSON-LD &amp; SEO</span>
          <span className="font-semibold text-emerald-600">✓ Halaman 1 Google</span>
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
      <div className="my-6 rounded-2xl bg-gradient-to-br from-emerald-50/90 via-teal-50/70 to-white p-4 space-y-2.5 ring-1 ring-emerald-100/80">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="inline-flex items-center gap-1.5 text-[#0A2540] font-semibold">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white inline-flex items-center justify-center shadow-sm">
              <Database className="w-3.5 h-3.5" />
            </span>
            <span>Sistem Terpusat</span>
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#0A2540] text-cyan-300 font-bold">
            Rp0 / Staf
          </span>
        </div>
        <div className="rounded-xl bg-white shadow-sm divide-y divide-slate-100">
          {items.map((row) => (
            <div
              key={row.label}
              className="px-3 py-2 flex items-center justify-between text-xs"
            >
              <span className="font-semibold text-[#0A2540]">{row.label}</span>
              <span className="font-mono text-[11px] font-semibold text-emerald-600">
                {row.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-2xl bg-gradient-to-br from-violet-50/90 via-fuchsia-50/60 to-cyan-50/50 p-4 space-y-2.5 ring-1 ring-violet-100/80">
      <div className="flex items-center justify-between text-[11px] font-mono">
        <span className="inline-flex items-center gap-1.5 text-[#0A2540] font-semibold">
          <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white inline-flex items-center justify-center shadow-sm">
            <MessageSquare className="w-3.5 h-3.5" />
          </span>
          <span>Meta Cloud API</span>
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          24/7 Aktif
        </span>
      </div>
      <div className="rounded-xl bg-white shadow-sm p-3 space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#0A2540]">Balasan Chat AI</span>
          <span className="font-mono text-[11px] font-bold text-[#635BFF]">&lt; 1 detik</span>
        </div>
        <div className="h-px bg-slate-100" />
        <div className="flex items-center justify-between">
          <span className="font-semibold text-[#0A2540]">Baca Faktur OCR</span>
          <span className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5" />
            99,7%
          </span>
        </div>
      </div>
      <div className="text-[11.5px] text-[#425466] px-1">
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

  const cardThemeMap: Record<
    string,
    { badge: string; cta: string; glow: string }
  > = {
    web: {
      badge: "bg-indigo-50 text-[#635BFF]",
      cta: "bg-gradient-to-r from-[#635BFF] to-[#0EA5E9] text-white shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35",
      glow: "hover:shadow-[0_28px_60px_rgba(99,91,255,0.14)]",
    },
    erp: {
      badge: "bg-emerald-50 text-emerald-700",
      cta: "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35",
      glow: "hover:shadow-[0_28px_60px_rgba(16,185,129,0.14)]",
    },
    aiml: {
      badge: "bg-violet-50 text-violet-700",
      cta: "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md shadow-violet-500/20 hover:shadow-violet-500/35",
      glow: "hover:shadow-[0_28px_60px_rgba(139,92,246,0.14)]",
    },
  };

  return (
    <section
      id="layanan-utama"
      data-section="layanan-utama"
      className="scroll-mt-20 py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle Ambient Mesh Wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[340px] rounded-full bg-gradient-to-r from-indigo-100/50 via-cyan-100/40 to-emerald-100/40 blur-[100px] -z-0"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 space-y-12">
        {/* Fluid Stripe-Inspired Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-[#635BFF] font-semibold text-xs tracking-wide">
            Cakupan Rekayasa
          </span>
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] text-[#0A2540] leading-[1.12]">
            Tiga fondasi digital untuk{" "}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#0EA5E9] to-[#10B981] bg-clip-text text-transparent">
              akselerasi bisnis Anda.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#425466] leading-relaxed">
            Dari situs web super cepat hingga sistem ERP kustom dan automasi WhatsApp AI—semuanya dirancang tanpa biaya lisensi per staf.
          </p>
        </div>

        {/* Floating Soft-Shadow Cards (Zero Boxy Grid Lines) */}
        <div className="grid grid-cols-3 gap-7">
          {capabilities.map((item, idx) => {
            const cardStyle = cardThemeMap[item.id] ?? cardThemeMap.web;
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group rounded-[28px] p-7 bg-white shadow-[0_18px_45px_rgba(10,37,64,0.07)] ring-1 ring-slate-900/[0.05] transition-shadow flex flex-col justify-between ${cardStyle.glow}`}
              >
                <div>
                  <div className="space-y-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full font-mono text-[11px] font-semibold ${cardStyle.badge}`}
                    >
                      {item.number}
                    </span>
                    <h3 className="text-[21px] font-bold tracking-[-0.025em] text-[#0A2540] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[14px] text-[#425466] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Animated Chromatic Native UI Diagram */}
                  <CapabilityDiagram id={item.id} />
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={item.detailHref}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${cardStyle.cta}`}
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
                    className="text-xs font-semibold text-[#425466] hover:text-[#635BFF] transition-colors"
                  >
                    Diskusikan ↗
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Floating Soft Comparison Strip */}
        <div className="rounded-2xl bg-[#F6F9FC] px-7 py-5 ring-1 ring-slate-900/[0.04] flex items-center justify-between gap-4">
          <span className="text-[13.5px] text-[#425466]">
            Bingung memilih arsitektur yang paling sesuai dengan tahap bisnis Anda?
          </span>
          <button
            type="button"
            onClick={() => setShowCompareModal(true)}
            className="text-sm font-semibold text-[#635BFF] hover:text-[#4F46E5] transition-colors cursor-pointer shrink-0"
          >
            Lihat tabel perbandingan layanan (bahasa sederhana) →
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
