"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

const capabilities = [
  {
    id: "web",
    number: "01 · 7–14 Hari Kerja",
    title: "Pengembangan Situs Web",
    desc: "Situs web perusahaan dan landing page berkecepatan tinggi (<0,8 detik) dengan struktur SEO Google yang rapi.",
    image: "/images/hero-web.webp",
    alt: "Pengembangan Situs Web Modern Abinest",
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

  return (
    <section
      id="layanan-utama"
      data-section="layanan-utama"
      className="py-20 bg-[#F8FAFC] border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="max-w-xl space-y-2.5"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Layanan Utama
          </h2>
          <p className="text-[15.5px] text-slate-600 leading-relaxed">
            Tiga cakupan rekayasa yang dirancang untuk mempercepat operasional bisnis Anda.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-7">
          {capabilities.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.07)] transition-all overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1200px) 33vw, 380px"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-6 space-y-2.5">
                  <span className="text-xs font-semibold text-blue-600 block">
                    {item.number}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    item.waMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>Diskusikan layanan</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
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
          onClick={() => setShowCompareModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-6 animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
          >
            <div className="px-7 py-5 border-b border-slate-100 flex items-start justify-between gap-4 shrink-0">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Perbandingan Pilihan Layanan Abinest
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Ringkasan sederhana tanpa istilah teknis untuk membantu Anda memilih solusi paling pas.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                aria-label="Tutup tabel perbandingan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="overflow-y-auto px-7 py-5">
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
