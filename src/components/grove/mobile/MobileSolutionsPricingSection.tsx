"use client";

import { useState, useRef } from "react";
import { Globe, Building2, Bot, Check, ArrowRight, X } from "lucide-react";
import { getPricingCardTheme } from "../pricing-theme";

const WHATSAPP_NUMBER = "6281398589745";

type PricingMode = "beli-putus" | "terima-beres";

export function MobileSolutionsPricingSection() {
  const [mode, setMode] = useState<PricingMode>("beli-putus");
  const [activeCardIdx, setActiveCardIdx] = useState(0);
  const [showCompareSheet, setShowCompareSheet] = useState(false);
  const [compareTab, setCompareTab] = useState<"skema" | "layanan">("skema");
  const sliderRef = useRef<HTMLDivElement>(null);

  const isBeliPutus = mode === "beli-putus";

  const scrollToCard = (idx: number) => {
    setActiveCardIdx(idx);
    const container = sliderRef.current;
    if (!container) return;
    const child = container.children[idx] as HTMLElement | undefined;
    if (child) {
      const cRect = container.getBoundingClientRect();
      const chRect = child.getBoundingClientRect();
      const targetLeft =
        container.scrollLeft +
        (chRect.left - cRect.left) -
        (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  };

  const handleSliderScroll = () => {
    const container = sliderRef.current;
    if (!container) return;
    const center = container.getBoundingClientRect().left + container.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(container.children).forEach((el, idx) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const dist = Math.abs(center - (rect.left + rect.width / 2));
      if (dist < minDist) {
        minDist = dist;
        closest = idx;
      }
    });
    if (closest !== activeCardIdx) {
      setActiveCardIdx(closest);
    }
  };

  const packages = [
    {
      id: "web",
      icon: Globe,
      title: "Situs Web Bisnis",
      price: "Rp1,5–3,5 juta",
      popular: false,
      tagline: "Profil perusahaan dan halaman penawaran yang terbuka cepat di bawah 0,8 detik.",
      features: {
        "beli-putus": [
          "Terbuka cepat (<0,8 detik) & rapi di layar HP pembeli",
          "100% seluruh file web menjadi hak milik penuh Anda",
          "Bebas dipasang di layanan hosting pilihan Anda",
          "Selesai dalam 7–14 hari kerja",
        ],
        "terima-beres": [
          "Terbuka cepat (<0,8 detik) & rapi di layar HP pembeli",
          "Termasuk alamat domain & sewa penyimpanan web khusus",
          "Ubah teks, tambah foto, dan perawatan kami tangani",
          "Selesai dalam 7–14 hari kerja",
        ],
      },
      waMsg: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik paket Situs Web Bisnis (Skema Beli Putus). Boleh diskusi detail kebutuhannya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik paket Situs Web Bisnis (Skema Terima Beres). Boleh diskusi detail fasilitasnya?",
      },
    },
    {
      id: "erp",
      icon: Building2,
      title: "Sistem ERP & SIAKAD",
      price: "Rp4–12 juta",
      popular: true,
      tagline: "Aplikasi kasir toko, stok multi-gudang, dan portal sekolah tanpa iuran staf.",
      features: {
        "beli-putus": [
          "Gratis biaya tambahan per kasir, staf, atau siswa selamanya",
          "100% file aplikasi & seluruh data tersimpan milik Anda penuh",
          "Bebas dipasang di komputer kantor atau hosting pribadi",
          "Rilis bertahap per bagian dalam 2–8 minggu",
        ],
        "terima-beres": [
          "Gratis biaya tambahan per kasir, staf, atau siswa selamanya",
          "Jaminan aplikasi tetap aktif 99,9% nyaris tanpa gangguan",
          "Penyimpanan khusus lengkap dengan cadangan data harian",
          "Bantuan tim teknis langsung via WhatsApp <15 menit",
        ],
      },
      waMsg: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik paket Sistem ERP & SIAKAD (Skema Beli Putus). Boleh diskusi kebutuhan modulnya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik paket Sistem ERP & SIAKAD (Skema Terima Beres). Boleh diskusi kebutuhan modulnya?",
      },
    },
    {
      id: "ai",
      icon: Bot,
      title: "Automasi AI & WhatsApp",
      price: "Mulai Rp5 juta",
      popular: false,
      tagline: "Asisten balas chat WhatsApp resmi 24 jam dan baca nota/faktur otomatis.",
      features: {
        "beli-putus": [
          "Terhubung ke jalur resmi WhatsApp Bisnis dari Meta",
          "Baca foto/PDF nota faktur otomatis tanpa ketik ulang (99,7%)",
          "Seluruh pengaturan balasan & alur kerja milik usaha Anda",
          "Tersambung langsung dengan data stok & harga usaha Anda",
        ],
        "terima-beres": [
          "Membalas chat pelanggan 24 jam dalam hitungan <1 detik",
          "Pemantauan mesin pembaca nota & koneksi WhatsApp 24 jam",
          "Penyesuaian gaya bahasa & jawaban AI secara berkala",
          "Pemeliharaan rutin dan laporan chat masuk bulanan",
        ],
      },
      waMsg: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik implementasi Automasi AI & WhatsApp (Skema Beli Putus). Boleh lihat demonya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik implementasi Automasi AI & WhatsApp (Skema Terima Beres). Boleh lihat demonya?",
      },
    },
  ];

  const comparisonRows = [
    {
      label: "Hak Milik Aplikasi & Data",
      beliPutus: "100% file program & seluruh catatan data usaha menjadi aset milik Anda.",
      terimaBeres: "Hak pemakaian penuh selama masa kontrak berlangganan berjalan.",
    },
    {
      label: "Biaya Bulanan",
      beliPutus: "Rp0 selamanya (cukup bayar pembuatan di awal sesuai kesepakatan).",
      terimaBeres: "Iuran tetap per bulan (sudah termasuk sewa hosting & perawatan).",
    },
    {
      label: "Pengurus Teknis",
      beliPutus: "Dipasang di hosting atau komputer kantor milik Anda sendiri.",
      terimaBeres: "Server, cadangan data harian, & perbaikan ditangani penuh tim Abinest.",
    },
    {
      label: "Paling Cocok Untuk",
      beliPutus: "Usaha yang ingin aset mandiri permanen tanpa sewa bulanan.",
      terimaBeres: "Pemilik usaha atau sekolah yang ingin langsung pakai tanpa staf IT.",
    },
  ];

  const serviceComparisonRows = [
    {
      aspect: "Masalah yang Diselesaikan",
      items: [
        { name: "Situs Web", text: "Belum ada situs resmi, lambat di HP, atau sulit dicari di Google." },
        { name: "Sistem Usaha", text: "Stok sering selisih, pembukuan manual Excel, atau ujian sekolah lambat." },
        { name: "Asisten WA & AI", text: "Admin kewalahan balas WhatsApp & salah ketik saat catat faktur." },
      ],
    },
    {
      aspect: "Siapa yang Paling Terbantu",
      items: [
        { name: "Situs Web", text: "UMKM, toko, klinik, kontraktor, yayasan, dan jasa." },
        { name: "Sistem Usaha", text: "Distributor, toko grosir, ritel/kafe, klinik, & sekolah/kampus." },
        { name: "Asisten WA & AI", text: "Admin penjualan, CS 24 jam, & staf pembukuan/keuangan." },
      ],
    },
    {
      aspect: "Kapan Siap & Biaya Staf",
      items: [
        { name: "Situs Web", text: "Jadi 1–2 minggu · Rp0 biaya bulanan per staf." },
        { name: "Sistem Usaha", text: "Jadi 2–8 minggu · Rp0 biaya tambahan per kasir/siswa." },
        { name: "Asisten WA & AI", text: "Jadi 1–4 minggu · Rp0 sewa aplikasi (bayar kuota chat)." },
      ],
    },
  ];

  return (
    <section
      id="m-layanan"
      data-section="layanan-utama"
      className="bg-[#F1F5F9] py-10 border-b border-slate-200/90"
    >
      <div className="max-w-md mx-auto space-y-5">
        <div className="px-5 space-y-1">
          <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">
            Layanan &amp; Investasi
          </h2>
          <p className="text-[13.5px] text-slate-500">
            Pilih kepemilikan aset penuh atau layanan terkelola.
          </p>
        </div>

        <div id="m-harga" data-section="harga" className="px-5 space-y-2.5 scroll-mt-16">
          <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-200/90">
            <button
              type="button"
              onClick={() => setMode("beli-putus")}
              className={`py-2 px-3 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                isBeliPutus
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Beli Putus
            </button>
            <button
              type="button"
              onClick={() => setMode("terima-beres")}
              className={`py-2 px-3 rounded-lg text-[12.5px] font-semibold transition-all cursor-pointer ${
                !isBeliPutus
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Terima Beres
            </button>
          </div>

          <p className="text-[12.5px] text-slate-500 text-center">
            {isBeliPutus
              ? "Kode program dan basis data menjadi hak milik Anda sepenuhnya."
              : "Server, pencadangan harian, dan SLA 99,9% kami kelola penuh."}
          </p>
        </div>

        {/* Horizontal Peek Slider */}
        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 px-5 py-1"
        >
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const theme = getPricingCardTheme(pkg.popular, isBeliPutus);

            return (
              <article
                key={pkg.id}
                className={`w-[82vw] max-w-[330px] shrink-0 snap-center rounded-2xl p-5 flex flex-col justify-between transition-all ${theme.card}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${theme.icon}`} />
                      <h3 className={`text-[15.5px] font-bold ${theme.title}`}>
                        {pkg.title}
                      </h3>
                    </div>
                    {pkg.popular && (
                      <span
                        className={`text-[11px] font-semibold ${theme.badge}`}
                      >
                        Populer
                      </span>
                    )}
                  </div>

                  <div className="mb-2">
                    <div
                      className={`text-[25px] font-black tracking-tight ${theme.price}`}
                    >
                      {pkg.price}
                    </div>
                    <p className={`text-[13px] leading-snug mt-1 ${theme.summary}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  <div className={`border-t my-4 ${theme.divider}`} />

                  <ul className={`space-y-2.5 text-[13px] ${theme.featureText}`}>
                    {pkg.features[mode].map((feat, fIdx) => (
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
                    pkg.waMsg[mode]
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full h-11 rounded-xl text-[13.5px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${theme.button}`}
                >
                  <span>Konsultasikan Paket Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="px-5 flex flex-col items-center space-y-3">
          <div className="flex items-center gap-1.5">
            {packages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Pilih Paket ${idx + 1}`}
                onClick={() => scrollToCard(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  activeCardIdx === idx
                    ? isBeliPutus
                      ? "w-5 bg-teal-600"
                      : "w-5 bg-blue-600"
                    : "w-1.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setShowCompareSheet(true)}
            className="text-[13px] font-semibold text-blue-600 hover:text-blue-700 py-1 cursor-pointer"
          >
            Lihat Perbandingan Skema →
          </button>
        </div>
      </div>

      {/* Bottom Sheet Comparison Modal */}
      {showCompareSheet && (
        <div
          onClick={() => setShowCompareSheet(false)}
          className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-t-3xl max-h-[82vh] overflow-y-auto p-5 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-200"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 sticky top-0 bg-white">
              <div>
                <h3 className="text-[16px] font-bold text-slate-900">
                  Panduan Pilih Layanan &amp; Skema
                </h3>
                <p className="text-[12px] text-slate-500">
                  Penjelasan sederhana tanpa istilah teknis.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowCompareSheet(false)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center cursor-pointer"
                aria-label="Tutup perbandingan"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 p-1 rounded-xl bg-slate-100 text-[12.5px] font-semibold">
              <button
                type="button"
                onClick={() => setCompareTab("skema")}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  compareTab === "skema"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600"
                }`}
              >
                Beli Putus vs Terima Beres
              </button>
              <button
                type="button"
                onClick={() => setCompareTab("layanan")}
                className={`py-2 rounded-lg transition-all cursor-pointer ${
                  compareTab === "layanan"
                    ? "bg-white text-slate-900 shadow-xs"
                    : "text-slate-600"
                }`}
              >
                Pilih Layanan Cocok
              </button>
            </div>

            {compareTab === "skema" ? (
              <div className="divide-y divide-slate-100">
                {comparisonRows.map((row) => (
                  <div key={row.label} className="py-3.5 space-y-2 first:pt-1">
                    <div className="text-[12.5px] font-bold text-slate-900">
                      {row.label}
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-[12px] leading-snug">
                      <div>
                        <span className="block font-semibold text-teal-700 mb-0.5">
                          Beli Putus
                        </span>
                        <span className="text-slate-600">{row.beliPutus}</span>
                      </div>
                      <div>
                        <span className="block font-semibold text-blue-700 mb-0.5">
                          Terima Beres
                        </span>
                        <span className="text-slate-600">{row.terimaBeres}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {serviceComparisonRows.map((row) => (
                  <div key={row.aspect} className="py-3.5 space-y-2 first:pt-1">
                    <div className="text-[12.5px] font-bold text-slate-900">
                      {row.aspect}
                    </div>
                    <div className="space-y-2 text-[12px] leading-snug">
                      {row.items.map((item) => (
                        <div key={item.name} className="text-slate-600">
                          <span className="font-semibold text-slate-900">{item.name}: </span>
                          {item.text}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowCompareSheet(false)}
              className="w-full h-11 rounded-xl bg-slate-900 text-white text-[13.5px] font-semibold cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
