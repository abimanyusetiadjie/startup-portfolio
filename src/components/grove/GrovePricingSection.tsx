"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Code2,
  Clock,
  Database,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6285708677918";

export function GrovePricingSection() {
  const [selectedPillar, setSelectedPillar] = useState<number | null>(null);

  const pricingTiers = [
    {
      id: "web",
      tag: "UMKM & Portofolio",
      badge: "Paling Terjangkau · 3-5 Hari Jadi",
      title: "Website Modern & Landing Page",
      priceDisplay: "Rp 500.000",
      pricePrefix: "Mulai",
      priceNote: "Investasi Sekali Bayar · 100% Hak Milik",
      icon: Globe,
      accentColor: "#059669",
      isPopular: false,
      summary:
        "Website korporat berkecepatan tinggi (<0.8 detik), skor SEO Google 100/100, dan desain eksklusif mobile-first untuk meningkatkan kredibilitas bisnis Anda.",
      examples: [
        {
          name: "Landing Page Produk & Profil UMKM",
          desc: "Toko kuliner, fashion, f&b, dan jasa profesional",
        },
        {
          name: "Website Portofolio & Personal Branding",
          desc: "Dokter, pengacara, arsitek, konsultan & kreator",
        },
        {
          name: "Katalog Digital & Brosur Interaktif",
          desc: "Showroom motor, distributor bahan & mebel",
        },
      ],
      features: [
        "Kecepatan Load Super Cepat (<0.8 Detik)",
        "Skor Google SEO 100/100 (Cepat Terindeks)",
        "Desain Eksklusif Responsif (Mobile, Tablet, Desktop)",
        "Tombol Direct WhatsApp & Integrasi Google Maps",
        "100% Hak Milik Source Code (Zero Sewa Vendor)",
        "Free Setup Domain & Hosting Cepat",
      ],
      waMessage:
        "Halo Tim Abinest, saya ingin berkonsultasi mengenai paket Pembuatan Website Modern mulai 500 Ribu. Boleh minta info detail & diskusikan konsep bisnis saya?",
    },
    {
      id: "erp",
      tag: "UMKM s/d Perusahaan",
      badge: "Paling Banyak Dipilih · Zero Biaya Lisensi",
      title: "Custom ERP & Sistem Operasional",
      priceDisplay: "Rp 2 - 10 Juta",
      pricePrefix: "Mulai",
      priceNote: "Sesuai Skala Fitur · Unlimited User Selamanya",
      icon: Building2,
      accentColor: "#047857",
      isPopular: true,
      summary:
        "Sistem operasional kustom dari kasir POS multi-cabang hingga ERP multi-gudang terpadu dengan SLA anti-down 99.99% tanpa iuran lisensi per user selamanya.",
      examples: [
        {
          name: "Aplikasi Kasir POS & Multi-Outlet (Mulai 2 Jt-an)",
          desc: "Stok real-time cabang, cetak struk, dan laporan kas harian",
        },
        {
          name: "Manajemen Gudang & Logistik (Mulai 4 - 6 Jt-an)",
          desc: "Batch tracking keluar-masuk, barcode scan & surat jalan",
        },
        {
          name: "Enterprise ERP Terpadu (Mulai 8 - 10 Jt-an)",
          desc: "Multi-gudang, keuangan, absensi, payroll & faktur pajak",
        },
      ],
      features: [
        "Zero Biaya Lisensi User (Bebas Tambah 10–5.000 Karyawan)",
        "Arsitektur Anti-Down SLA 99.99% Uptime",
        "Multi-Gudang & Sinkronisasi Stok Cabang Real-Time",
        "Hak Akses Berjenjang (Owner, Manager, Gudang, Kasir)",
        "Audit Trail Keuangan & Enkripsi Database Terisolasi",
        "Source Code & Skema Database Diserahkan Penuh",
      ],
      waMessage:
        "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem Kustom / ERP Operasional (range 2 - 10 Juta) untuk kebutuhan operasional bisnis kami.",
    },
    {
      id: "ai-wa",
      tag: "Automasi Modern",
      badge: "Otonom 24/7 · Efisiensi 10x Lipat",
      title: "Automasi AI & WhatsApp Meta Resmi",
      priceDisplay: "Rp 3.000.000",
      pricePrefix: "Mulai",
      priceNote: "Meta Cloud API Resmi · Anti-Banned",
      icon: Bot,
      accentColor: "#059669",
      isPopular: false,
      summary:
        "Otomatiskan alur kerja manual bisnis dengan WhatsApp AI Agent centang hijau resmi Meta dan Document AI OCR ekstraksi faktur PDF secara instan.",
      examples: [
        {
          name: "Chatbot WhatsApp CS & Sales Resmi (Mulai 3 Jt-an)",
          desc: "Menjawab tanya jawab produk, cek stok, dan order 24/7",
        },
        {
          name: "Document AI OCR Invoice Extractor (Mulai 4 - 6 Jt-an)",
          desc: "Membaca ribuan invoice PDF supplier otomatis akurasi 99.7%",
        },
        {
          name: "Workflow Otomatis & Notifikasi Faktur (Mulai 5 Jt+)",
          desc: "Kirim tagihan via WhatsApp otomatis & rekonsiliasi data",
        },
      ],
      features: [
        "Resmi Meta WhatsApp Cloud API (Bebas Risiko Blokir)",
        "Verifikasi Centang Hijau (Green Tick) Bisnis",
        "AI Agent Cerdas Terlatih Sesuai Data & SOP Bisnis",
        "Ekstraksi Data OCR Faktur & Dokumen (Akurasi 99.7%)",
        "Integrasi Database (PostgreSQL / MySQL / Spreadsheet)",
        "Monitoring Telemetry & Dashboard Analitik Pesan",
      ],
      waMessage:
        "Halo Tim Abinest, saya tertarik paket Automasi AI & WhatsApp mulai 3 Juta. Boleh minta demo teknis dan konsultasi alur kerja sistem kami?",
    },
  ];

  const handleOpenWa = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="harga"
      className="relative py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background Subtle Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.22] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black_30%,transparent_80%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(5, 150, 105, 0.25) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#065F46] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span>Paket Investasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-[1.18]">
            Investasi Teknologi Nyata.
            <br />
            <span className="text-[#059669]">
              Mulai dari UMKM hingga Perusahaan.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            Tanpa biaya tersembunyi. Semua paket mencakup kepemilikan penuh{" "}
            <strong className="text-[#0F172A] font-semibold">100% source code</strong>, bebas biaya lisensi user selamanya, dan dikerjakan langsung oleh senior software engineer.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlight = tier.isPopular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative rounded-3xl bg-white flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? "border-2 border-[#059669] shadow-[0_16px_40px_rgba(5,150,105,0.12)] ring-4 ring-emerald-500/10 lg:-translate-y-2"
                    : "border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:border-emerald-300 hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
                }`}
              >
                {/* Popular Highlight Badge on Top */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#065F46] text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Paling Diminati Pelaku Bisnis</span>
                  </div>
                )}

                <div className="p-6 sm:p-7 space-y-6">
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-[#065F46] text-white shadow-md shadow-emerald-900/20"
                          : "bg-emerald-50 text-[#059669]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
                      {tier.tag}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0F172A] tracking-tight leading-snug">
                      {tier.title}
                    </h3>
                    <div className="inline-block mt-1 text-[11px] font-bold text-[#065F46] bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200/60">
                      {tier.badge}
                    </div>
                  </div>

                  {/* Pricing Tag Display */}
                  <div className="pt-2 pb-1 border-y border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                        {tier.pricePrefix}
                      </span>
                      <span className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                        {tier.priceDisplay}
                      </span>
                    </div>
                    <div className="text-[11px] font-semibold text-slate-500 mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                      <span>{tier.priceNote}</span>
                    </div>
                  </div>

                  {/* Narrative Summary */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {tier.summary}
                  </p>

                  {/* 3 Real-World Examples (Visual Scope Box) */}
                  <div className="bg-[#F8FAFC] rounded-2xl p-3.5 sm:p-4 border border-slate-200/80 space-y-2.5">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-3 h-3 text-[#059669]" />
                      <span>3 Contoh Implementasi Nyata:</span>
                    </div>

                    <div className="space-y-2">
                      {tier.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="text-xs bg-white rounded-xl p-2.5 border border-slate-200/60 shadow-2xs"
                        >
                          <div className="font-bold text-[#0F172A] flex items-center gap-1.5">
                            <span className="w-4 h-4 rounded-full bg-emerald-100 text-[#065F46] text-[10px] font-black flex items-center justify-center shrink-0">
                              {exIdx + 1}
                            </span>
                            <span className="truncate">{ex.name}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 pl-5 leading-tight mt-0.5">
                            {ex.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Feature Checklist */}
                  <div className="space-y-2.5 pt-1">
                    <div className="text-[11px] font-bold text-[#0F172A] uppercase tracking-wide">
                      Termasuk Dalam Paket:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action Button (Direct WhatsApp) */}
                <div className="p-6 sm:p-7 pt-0 mt-4 border-t border-slate-100/80">
                  <button
                    type="button"
                    onClick={() => handleOpenWa(tier.waMessage)}
                    className={`w-full py-3.5 px-5 rounded-2xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all duration-200 shadow-sm cursor-pointer ${
                      isHighlight
                        ? "bg-[#065F46] hover:bg-[#044E39] text-white shadow-[0_8px_20px_rgba(6,95,70,0.25)] hover:scale-[1.02]"
                        : "bg-[#0F172A] hover:bg-slate-800 text-white hover:scale-[1.02]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Konsultasi Paket Ini</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </button>

                  <div className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                    Diskusi Gratis · Respons &lt;15 Menit · Tanpa Komitmen
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Core Guarantees Banner Below Pricing */}
        <div className="mt-12 sm:mt-16 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-[0_4px_25px_rgba(15,23,42,0.03)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  100% Hak Milik Kode
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  Source code &amp; skema database diserahkan penuh. Bebas vendor lock-in.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  Rp 0 Biaya Lisensi User
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  Bebas tambah karyawan atau outlet tanpa biaya langganan bulanan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  SLA Anti-Down 99.99%
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  Garansi sistem stabil di momen lonjakan transaksi bisnis.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0F172A]">
                  Free Konsultasi &amp; Demo
                </h4>
                <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                  Diskusikan arsitektur sistem Anda langsung dengan senior engineer kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
