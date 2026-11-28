"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Minus, Plus, X } from "lucide-react";
import { useModalEffects } from "@/components/grove/use-modal-effects";

type ShowreelTab = "web" | "erp" | "ai";

export function SignificaShowreelModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<ShowreelTab>("web");
  const [skuStock, setSkuStock] = useState(48);
  const [waStep, setWaStep] = useState<0 | 1>(0);

  useModalEffects(open, onClose);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="sig-showreel-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#171717]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl max-h-[90dvh] overflow-y-auto overscroll-contain rounded-[2px] bg-[#111111] text-white border border-white/15"
          >
            {/* Top Bar */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-wider text-white/60">
                  Pratinjau Interaktif · Abinest
                </p>
                <h2
                  id="sig-showreel-title"
                  className="text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-white"
                >
                  Uji cepat 3 produk inti kami secara langsung.
                </h2>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup pratinjau interaktif"
                className="w-10 h-10 rounded-[14px] bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Interactive Tab Pills */}
            <div className="px-6 sm:px-8 pt-5 flex flex-wrap gap-2">
              {[
                { id: "web" as const, label: "01 · Web Cepat 0,48 dtk" },
                { id: "erp" as const, label: "02 · Sinkronisasi ERP" },
                { id: "ai" as const, label: "03 · Balasan WhatsApp AI" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  className={`px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors cursor-pointer ${
                    tab === item.id
                      ? "bg-white text-[#111111]"
                      : "bg-white/10 text-white/75 hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Live Mini Interactive Stage */}
            <div className="p-6 sm:p-8">
              {tab === "web" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 relative aspect-[16/10] rounded-[16px] overflow-hidden border border-white/15 bg-[#242424]">
                    <Image
                      src="/images/portfolio/toko-amen-snack-web.webp"
                      alt="Tangkapan layar langsung website produksi dan katalog 1.446 SKU Toko Amen Snack"
                      fill
                      quality={85}
                      sizes="(max-width: 1024px) 92vw, 520px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex px-2.5 py-1 rounded-[8px] bg-[#3C846E] text-white text-[11px] font-mono">
                      PAGESPEED 100 / 100
                    </div>
                    <h3 className="text-[22px] font-semibold leading-snug text-white">
                      Muat di bawah 0,8 detik pada jaringan 4G seluler.
                    </h3>
                    <p className="text-[14.5px] text-white/70 leading-relaxed">
                      Dibangun di atas arsitektur web modern yang ringan agar iklan Google &amp; Meta tidak bocor karena halaman lambat.
                    </p>
                    <ul className="space-y-2 text-[13.5px] text-white/85">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#FFD124]" />
                        <span>100% hak milik kode program &amp; domain</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#FFD124]" />
                        <span>Rilis siap tayang dalam 7–14 hari kerja</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {tab === "erp" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 rounded-[16px] bg-[#242424] border border-white/15 p-5 sm:p-6 space-y-5">
                    <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-3">
                      <div>
                        <div className="text-[11px] font-mono text-[#FFD124] uppercase">
                          SKU BRG-101 · GUDANG TANGERANG
                        </div>
                        <div className="text-[16px] font-semibold text-white mt-0.5">
                          Kertas HVS A4 80gr (Dus 5 Rim)
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-[8px] bg-[#3C846E]/30 text-[#7CE5C3] text-[12px] font-mono">
                        ● LIVE SYNC
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-[12px] bg-[#171717] border border-white/10 p-4">
                        <div className="text-[11px] font-mono text-white/60 uppercase">
                          Stok Aktif
                        </div>
                        <div className="text-[30px] font-bold text-white tabular-nums mt-1">
                          {skuStock} dus
                        </div>
                      </div>
                      <div className="rounded-[12px] bg-[#171717] border border-white/10 p-4">
                        <div className="text-[11px] font-mono text-white/60 uppercase">
                          Nilai Aset SKU
                        </div>
                        <div className="text-[22px] font-bold text-[#FFD124] tabular-nums mt-2">
                          Rp{(skuStock * 265000).toLocaleString("id-ID")}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => setSkuStock((s) => Math.max(0, s - 1))}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[12px] bg-white text-[#171717] hover:bg-[#FFD124] text-[13.5px] font-medium transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5" />
                        <span>Simulasi -1 Faktur Keluar</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSkuStock((s) => s + 5)}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[12px] bg-white/10 hover:bg-white/20 text-white text-[13.5px] font-medium transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>+5 Restock Masuk</span>
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex px-2.5 py-1 rounded-[8px] bg-[#DE6D3B] text-[#171717] text-[11px] font-mono font-bold">
                      RP0 BIAYA PER STAF
                    </div>
                    <h3 className="text-[22px] font-semibold leading-snug text-white">
                      Coba ubah stok di kiri—faktur &amp; aset langsung sinkron.
                    </h3>
                    <p className="text-[14.5px] text-white/70 leading-relaxed">
                      Tanpa iuran bulanan per karyawan atau per cabang. Tambah 50 staf gudang dan kasir baru tanpa membengkakkan biaya software.
                    </p>
                  </div>
                </div>
              )}

              {tab === "ai" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-7 rounded-[16px] bg-[#242424] border border-white/15 p-5 sm:p-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[12px] font-mono text-white/70">
                      <span>WHATSAPP CLOUD API RESMI META</span>
                      <span className="text-[#FFD124]">RESPON 0,42 DTK</span>
                    </div>

                    <div className="space-y-3 text-[13.5px]">
                      <div className="max-w-[85%] rounded-[14px] rounded-tl-sm bg-white/10 text-white px-4 py-3 leading-relaxed">
                        &ldquo;Halo admin, HVS A4 80gr ready berapa dus di Tangerang? Ambil 10 dus kena harga berapa?&rdquo;
                      </div>

                      {waStep === 1 ? (
                        <div className="ml-auto max-w-[90%] rounded-[14px] rounded-tr-sm bg-[#3C846E] text-white px-4 py-3 leading-relaxed space-y-1.5">
                          <div className="text-[11px] font-mono text-[#FFD124]">
                            AI AGENT · SINKRON STOK ERP REAL-TIME
                          </div>
                          <p>
                            Halo Pak! Stok Gudang Tangerang saat ini <strong>{skuStock} dus tersedia</strong>. Harga normal Rp265.000/dus, khusus pembelian ≥10 dus <strong>Rp248.000/dus</strong>. Ketik ORDER untuk terbitkan faktur otomatis.
                          </p>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setWaStep(1)}
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[12px] bg-[#FFD124] text-[#171717] text-[13.5px] font-semibold hover:opacity-90 transition-opacity cursor-pointer"
                        >
                          <span>Jalankan balasan AI otomatis</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex px-2.5 py-1 rounded-[8px] bg-white/15 text-[#FFD124] text-[11px] font-mono">
                      META CLOUD API + OCR 99,7%
                    </div>
                    <h3 className="text-[22px] font-semibold leading-snug text-white">
                      Balas prospek 24/7 &amp; baca faktur supplier otomatis.
                    </h3>
                    <p className="text-[14.5px] text-white/70 leading-relaxed">
                      Berjalan lewat jalur API resmi Meta yang aman dari pemblokiran nomor, terhubung langsung ke basis data katalog &amp; gudang Anda.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Bar */}
            <div className="px-6 sm:px-8 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 bg-white/[0.03]">
              <span className="text-[13px] text-white/65">
                Ingin menjajal simulasi lengkap termasuk SIAKAD CBT &amp; Scan Faktur OCR?
              </span>
              <Link
                href="/demo"
                onClick={onClose}
                className="inline-flex items-center gap-2 px-5 h-[42px] rounded-full bg-white text-[#111111] hover:bg-white/85 text-[14px] font-medium transition-colors"
              >
                <span>Buka sandbox lengkap</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
