"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Building2, Bot, Check, ArrowRight, X } from "lucide-react";
import { getPricingCardTheme } from "./pricing-theme";

const WHATSAPP_NUMBER = "6281398589745";

type PricingMode = "beli-putus" | "terima-beres";

const pricingTiers = [
  {
    id: "web",
    icon: Globe,
    isPopular: false,
    title: "Situs Web Bisnis",
    price: "Rp1,5–3,5 juta",
    summary:
      "Profil perusahaan dan halaman penawaran produk yang terbuka sekejap (<1 detik) & mudah dicari di Google.",
    features: {
      "beli-putus": [
        "Terbuka cepat (<0,8 detik) & rapi di layar HP pembeli",
        "100% seluruh file web menjadi hak milik penuh Anda",
        "Bebas dipasang di layanan hosting mana pun pilihan Anda",
        "Estimasi pengerjaan selesai 7–14 hari kerja",
      ],
      "terima-beres": [
        "Terbuka cepat (<0,8 detik) & rapi di layar HP pembeli",
        "Sudah termasuk alamat domain (.com/.id) dan sewa hosting",
        "Ubah teks, tambah foto, dan perawatan kami yang urus",
        "Estimasi pengerjaan selesai 7–14 hari kerja",
      ],
    },
    waMessages: {
      "beli-putus":
        "Halo Tim Abinest, saya tertarik paket Situs Web Bisnis (Skema Beli Putus). Boleh diskusi detail kebutuhannya?",
      "terima-beres":
        "Halo Tim Abinest, saya tertarik paket Situs Web Bisnis (Skema Terima Beres). Boleh diskusi fasilitas perawatannya?",
    },
  },
  {
    id: "erp",
    icon: Building2,
    isPopular: true,
    title: "Sistem ERP & SIAKAD",
    price: "Rp4–12 juta",
    summary:
      "Aplikasi kasir toko, stok barang multi-gudang, dan portal nilai/SPP sekolah tanpa iuran per karyawan.",
    features: {
      "beli-putus": [
        "Gratis biaya tambahan per kasir, staf, atau siswa selamanya",
        "100% file aplikasi & seluruh data tersimpan milik Anda penuh",
        "Bebas dipasang di server kantor sendiri atau sewa cloud pribadi",
        "Bisa mulai dipakai bertahap per bagian dalam 2–8 minggu",
      ],
      "terima-beres": [
        "Gratis biaya tambahan per kasir, staf, atau siswa selamanya",
        "Jaminan aplikasi tetap aktif 99,9% nyaris tanpa gangguan",
        "Penyimpanan khusus lengkap dengan pencadangan data otomatis harian",
        "Bantuan tim teknis langsung via WhatsApp kurang dari 15 menit",
      ],
    },
    waMessages: {
      "beli-putus":
        "Halo Tim Abinest, saya tertarik paket Sistem ERP & SIAKAD (Skema Beli Putus). Boleh konsultasi kebutuhan modulnya?",
      "terima-beres":
        "Halo Tim Abinest, saya tertarik paket Sistem ERP & SIAKAD (Skema Terima Beres). Boleh konsultasi kebutuhan modulnya?",
    },
  },
  {
    id: "ai-ml",
    icon: Bot,
    isPopular: false,
    title: "Automasi AI & WhatsApp",
    price: "Mulai Rp5 juta",
    summary:
      "Asisten balas chat WhatsApp resmi 24 jam serta pindah data nota/faktur otomatis tanpa ketik manual.",
    features: {
      "beli-putus": [
        "Terhubung resmi ke jalur WhatsApp Bisnis (Meta Resmi)",
        "Baca foto & PDF faktur otomatis tanpa ketik ulang (akurasi 99,7%)",
        "Seluruh pengaturan balasan & alur kerja milik usaha Anda",
        "Tersambung langsung dengan daftar stok & harga toko Anda",
      ],
      "terima-beres": [
        "Membalas pertanyaan pelanggan 24 jam dalam hitungan <1 detik",
        "Pemantauan mesin pembaca nota & koneksi WhatsApp kami jaga penuh",
        "Penyesuaian gaya bahasa & jawaban AI kami bantu rapikan berkala",
        "Pemeliharaan rutin serta laporan rekap chat masuk tiap bulan",
      ],
    },
    waMessages: {
      "beli-putus":
        "Halo Tim Abinest, saya tertarik implementasi Automasi AI & WhatsApp (Skema Beli Putus). Boleh lihat demonya?",
      "terima-beres":
        "Halo Tim Abinest, saya tertarik implementasi Automasi AI & WhatsApp (Skema Terima Beres). Boleh lihat demonya?",
    },
  },
];

const schemeComparisonRows = [
  {
    aspect: "Hak Milik Aplikasi & Data",
    beliPutus:
      "100% file program & seluruh catatan data usaha diserahkan utuh menjadi aset Anda selamanya.",
    terimaBeres: "Hak penggunaan penuh selama masa kontrak berlangganan aktif.",
  },
  {
    aspect: "Biaya Bulanan",
    beliPutus: "Rp0 selamanya (cukup bayar pembuatan di awal sesuai kesepakatan).",
    terimaBeres:
      "Iuran ringan per bulan (sudah termasuk sewa tempat penyimpanan data & perawatan rutin).",
  },
  {
    aspect: "Pengurus Server & Teknis",
    beliPutus:
      "Dipasang di hosting atau komputer kantor milik Anda sendiri (cocok jika punya tim IT).",
    terimaBeres:
      "Seluruh urusan server, cadangan data harian, & perbaikan ditangani penuh oleh tim Abinest.",
  },
  {
    aspect: "Paling Cocok Untuk",
    beliPutus:
      "Perusahaan atau yayasan yang ingin memiliki aset digital mandiri tanpa beban sewa bulanan.",
    terimaBeres:
      "Pemilik usaha atau sekolah yang ingin sistem langsung siap pakai tanpa perlu merekrut staf IT.",
  },
];

export function GrovePricingSection() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("beli-putus");
  const [showCompareModal, setShowCompareModal] = useState(false);
  const isBeliPutus = pricingMode === "beli-putus";

  return (
    <section
      id="harga"
      data-section="harga"
      className="py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
              Investasi yang Transparan
            </h2>
            <p className="text-[15.5px] text-slate-600 leading-relaxed">
              {isBeliPutus
                ? "Skema Beli Putus: aplikasi dan seluruh data usaha diserahkan utuh tanpa biaya bulanan."
                : "Skema Terima Beres: server, cadangan data harian, dan perawatan sistem kami tangani penuh."}
            </p>
          </div>

          <div className="inline-flex p-1 rounded-xl bg-slate-100 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setPricingMode("beli-putus")}
              className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                isBeliPutus
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Beli Putus
            </button>
            <button
              type="button"
              onClick={() => setPricingMode("terima-beres")}
              className={`px-5 py-2 rounded-lg text-[13px] font-semibold transition-all cursor-pointer ${
                !isBeliPutus
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Terima Beres
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-7 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const theme = getPricingCardTheme(tier.isPopular, isBeliPutus);

            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.32, delay: idx * 0.06 }}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${theme.card}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${theme.icon}`} />
                      <h3 className={`text-lg font-bold ${theme.title}`}>
                        {tier.title}
                      </h3>
                    </div>
                    {tier.isPopular && (
                      <span className={`text-xs font-semibold ${theme.badge}`}>
                        Populer
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <div
                      className={`text-[30px] font-black tracking-tight ${theme.price}`}
                    >
                      {tier.price}
                    </div>
                    <p className={`text-[13.5px] leading-relaxed ${theme.summary}`}>
                      {tier.summary}
                    </p>
                  </div>

                  <div className={`border-t my-5 ${theme.divider}`} />

                  <ul className={`space-y-3 text-[13.5px] ${theme.featureText}`}>
                    {tier.features[pricingMode].map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 shrink-0 mt-0.5 ${theme.check}`}
                        />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    tier.waMessages[pricingMode]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 w-full h-11 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors ${theme.button}`}
                >
                  <span>Konsultasikan Paket Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center pt-1">
          <button
            type="button"
            onClick={() => setShowCompareModal(true)}
            className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors cursor-pointer"
          >
            Pelajari perbedaan skema Beli Putus dan Terima Beres →
          </button>
        </div>
      </div>

      {/* Modal Perbandingan Ringkas */}
      {showCompareModal && (
        <div
          onClick={() => setShowCompareModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/45 backdrop-blur-xs flex items-center justify-center p-6 animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 p-7 space-y-5 animate-in zoom-in-95 duration-150"
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Perbandingan Beli Putus dan Terima Beres
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">
                  Sesuaikan dengan kesiapan tim teknis dan anggaran operasional Anda.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center cursor-pointer"
                aria-label="Tutup perbandingan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="divide-y divide-slate-100">
              {schemeComparisonRows.map((row) => (
                <div key={row.aspect} className="py-3.5 grid grid-cols-12 gap-4 text-sm">
                  <div className="col-span-4 font-semibold text-slate-900">
                    {row.aspect}
                  </div>
                  <div className="col-span-4 text-slate-600">
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-teal-700 mb-0.5">
                      Beli Putus
                    </span>
                    {row.beliPutus}
                  </div>
                  <div className="col-span-4 text-slate-600">
                    <span className="block text-[11px] font-bold uppercase tracking-wide text-blue-700 mb-0.5">
                      Terima Beres
                    </span>
                    {row.terimaBeres}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
