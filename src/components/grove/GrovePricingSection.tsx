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
  Sparkles,
  Code2,
  Clock,
  Database,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6285708677918";

type PricingMode = "beli-putus" | "terima-beres";

export function GrovePricingSection() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("beli-putus");

  const pricingTiers = [
    {
      id: "web",
      tag: "Korporat & Institusi",
      badge: "Siap 2-3 Minggu",
      title: "Modern Web & Landing System",
      currency: "Rp",
      priceNum: "1.5 – 3.5",
      priceUnit: "Juta",
      priceSuffix: "start from",
      subNotes: {
        "beli-putus": "Sekali Bayar · 100% Hak Milik Permanen",
        "terima-beres": "Terima Beres · Managed Cloud & Maintenance",
      },
      icon: Globe,
      accentColor: "#2563EB",
      isPopular: false,
      summary:
        "Website modern berkecepatan tinggi (<0.8 detik) & Google SEO 100/100 untuk melipatgandakan kredibilitas dan konversi bisnis Anda.",
      examples: [
        {
          label: "Company Profile Korporat & Yayasan",
          note: "Tampilan berkelas, kredibel, & ramah investor",
        },
        {
          label: "High-Converting Landing Page",
          note: "Optimasi form penawaran & integrasi WA langsung",
        },
        {
          label: "Katalog & Portofolio Digital",
          note: "Navigasi kilat tanpa lemot di koneksi 4G",
        },
      ],
      features: {
        "beli-putus": [
          "Kecepatan <0.8s & Skor Google SEO 100/100",
          "100% Full Source Code Git (Zero Biaya Sewa)",
          "Bebas Deploy Mandiri di Server / Hosting Sendiri",
        ],
        "terima-beres": [
          "Kecepatan <0.8s & Skor Google SEO 100/100",
          "Dedicated Cloud Server + Backup Harian Otomatis",
          "Maintenance Teknis & Patch Bug Rutin Kami Rawat",
        ],
      },
      ctaLabel: {
        "beli-putus": "Konsultasi Beli Putus",
        "terima-beres": "Konsultasi Terima Beres",
      },
      waMessages: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik paket Modern Web & Landing System dengan skema Beli Putus (100% Hak Milik Permanen). Boleh konsultasi detailnya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik paket Modern Web & Landing System dengan skema Terima Beres (Managed Cloud & Support). Boleh info fasilitas perawatannya?",
      },
    },
    {
      id: "erp",
      tag: "Bisnis, Pabrik & Sekolah",
      badge: "Paling Banyak Dipilih",
      title: "Custom ERP & SIAKAD Sistem",
      currency: "Rp",
      priceNum: "4 – 12",
      priceUnit: "Juta",
      priceSuffix: "start from",
      subNotes: {
        "beli-putus": "Sesuai Modul · Zero Biaya Lisensi Selamanya",
        "terima-beres": "Terima Beres · Garansi SLA 99.9% Uptime",
      },
      icon: Building2,
      accentColor: "#1D4ED8",
      isPopular: true,
      summary:
        "Sistem operasional kustom dari kasir POS, SIAKAD sekolah anti-down, hingga ERP multi-gudang tanpa biaya lisensi per user selamanya.",
      examples: [
        {
          label: "SIAKAD Sekolah & Ujian Anti-Down",
          note: "1.200+ siswa ujian serentak, cetak rapor kilat",
        },
        {
          label: "ERP Multi-Gudang & Logistik",
          note: "Sinkronisasi cabang, barcode, surat jalan & faktur",
        },
        {
          label: "Kasir POS & Keuangan Multi-Cabang",
          note: "Laporan laba rugi real-time & multi-outlet",
        },
      ],
      features: {
        "beli-putus": [
          "Zero Biaya Lisensi User (Bebas Tambah 1.000+ Karyawan/Siswa)",
          "100% Full Source Code & Database PostgreSQL Lengkap",
          "Self-Hosted Mandiri (Server AWS, GCP, VPS, atau Server Kantor)",
        ],
        "terima-beres": [
          "Zero Biaya Lisensi User (Bebas Tambah 1.000+ Karyawan/Siswa)",
          "Garansi Anti-Down SLA 99.9% Uptime Tertulis Resmi",
          "Server Dedicated, Backup Harian & Siaga Engineer <15 Menit",
        ],
      },
      ctaLabel: {
        "beli-putus": "Konsultasi Beli Putus",
        "terima-beres": "Konsultasi Terima Beres",
      },
      waMessages: {
        "beli-putus":
          "Halo Tim Abinest, saya ingin berkonsultasi mengenai Custom ERP / SIAKAD dengan skema Beli Putus (100% Hak Milik & Database Mandiri).",
        "terima-beres":
          "Halo Tim Abinest, saya ingin berkonsultasi mengenai Custom ERP / SIAKAD dengan skema Terima Beres (Managed Cloud & SLA 99.9%).",
      },
    },
    {
      id: "ai-ml",
      tag: "Applied AI & Scale-Up",
      badge: "Otonom 24/7",
      title: "Automation AI/ML & Meta Agent",
      currency: "Rp",
      priceNum: "5",
      priceUnit: "Juta+",
      priceSuffix: "start from",
      subNotes: {
        "beli-putus": "Sekali Bayar · Source Code & Model Penuh",
        "terima-beres": "Terima Beres · Managed Host & Bot 24/7",
      },
      icon: Bot,
      accentColor: "#2563EB",
      isPopular: false,
      summary:
        "Otomatiskan alur kerja manual dengan WhatsApp AI Agent resmi Meta dan ekstraksi ribuan dokumen via Document AI OCR non-stop 24 jam.",
      examples: [
        {
          label: "Document AI OCR Extractor",
          note: "Baca ribuan invoice & faktur akurasi 99.7%",
        },
        {
          label: "WhatsApp AI Agent Resmi Meta",
          note: "Respons kilat <1s, katalog & customer care 24/7",
        },
        {
          label: "Integrasi Workflow Otomatis",
          note: "Sinkronisasi pipa data langsung ke database ERP",
        },
      ],
      features: {
        "beli-putus": [
          "Resmi Meta WhatsApp Cloud API (Anti-Banned)",
          "100% Source Code & Script Otomasi Jadi Aset Perusahaan",
          "Integrasi Langsung ke Server & Database Internal Anda",
        ],
        "terima-beres": [
          "Resmi Meta WhatsApp Cloud API (Anti-Banned)",
          "Hosting Bot Siaga 24/7 & Pemantauan Error Otomatis",
          "Maintenance AI & Pembaruan Knowledge Base SOP Berkala",
        ],
      },
      ctaLabel: {
        "beli-putus": "Konsultasi Beli Putus",
        "terima-beres": "Konsultasi Terima Beres",
      },
      waMessages: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik paket Automation AI/ML dengan skema Beli Putus (100% Source Code & integrasi mandiri). Boleh demo teknisnya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik paket Automation AI/ML dengan skema Terima Beres (Managed Bot & Server Siaga 24/7). Boleh demo teknisnya?",
      },
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
      className="relative py-14 sm:py-20 bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden"
    >
      {/* Background Subtle Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.20] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_30%,black_30%,transparent_80%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.22) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[#1E40AF] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
            <span>Paket Investasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight">
            Investasi Teknologi Terukur.
            <br />
            <span className="text-[#2563EB]">
              Tersedia Pilihan Beli Putus atau Terima Beres.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Pilih model kepemilikan sesuai kesiapan institusi Anda: 100% kepemilikan aset mandiri tanpa biaya sewa, atau terima beres dengan server dan perawatan penuh.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TWO-BUTTON SCHEME SELECTOR (2 TOMBOL PILIHAN SAJA)                        */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-12">
          {/* Pill Toggle */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/90 border border-slate-300/80 shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setPricingMode("beli-putus")}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                pricingMode === "beli-putus"
                  ? "bg-[#0F172A] text-white shadow-md shadow-slate-900/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/50"
              }`}
            >
              <Code2 className="w-4 h-4 text-emerald-400" />
              <span>Beli Putus (100% Permanen)</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-extrabold uppercase tracking-wide">
                Aset Mandiri
              </span>
            </button>

            <button
              type="button"
              onClick={() => setPricingMode("terima-beres")}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                pricingMode === "terima-beres"
                  ? "bg-[#2563EB] text-white shadow-md shadow-blue-600/25"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/50"
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Sewa / Terima Beres</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-white/20 text-blue-100 text-[10px] font-extrabold uppercase tracking-wide">
                Siap Pakai
              </span>
            </button>
          </div>

          {/* Dynamic 1-line note */}
          <motion.div
            key={pricingMode}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3.5 text-center px-4 max-w-2xl"
          >
            <p className="text-xs sm:text-[13px] text-slate-600">
              {pricingMode === "beli-putus" ? (
                <span>
                  <strong className="text-[#0F172A] font-semibold">Skema Beli Putus 100%:</strong> Seluruh source code &amp; database diserahkan utuh ke server Anda tanpa biaya sewa bulanan selamanya.
                </span>
              ) : (
                <span>
                  <strong className="text-[#0F172A] font-semibold">Skema Sewa / Terima Beres:</strong> Server cloud dedicated, SLA 99.9% uptime, backup harian &amp; maintenance teknis kami rawat penuh. Anda tinggal pakai.
                </span>
              )}
            </p>
          </motion.div>
        </div>

        {/* 3-Column Compact & Aesthetic Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlight = tier.isPopular;
            const currentSubNote = tier.subNotes[pricingMode];
            const currentFeatures = tier.features[pricingMode];
            const currentCtaLabel = tier.ctaLabel[pricingMode];
            const currentWaMsg = tier.waMessages[pricingMode];

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.1 }}
                className={`relative rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between ${
                  isHighlight
                    ? "border-2 border-[#2563EB] shadow-[0_16px_40px_rgba(37,99,235,0.12)] -translate-y-1 sm:-translate-y-2 z-10"
                    : "border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Popular Pill Badge */}
                {isHighlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-sky-200" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${
                        isHighlight
                          ? "bg-blue-600 text-white shadow-sm"
                          : "bg-blue-50 text-[#2563EB] border border-blue-200/70"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {tier.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed font-normal">
                      {tier.summary}
                    </p>
                  </div>

                  {/* Dynamic Price Display */}
                  <div className="pt-2 pb-1 border-t border-slate-100">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold text-slate-400">
                        {tier.currency}
                      </span>
                      <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A]">
                        {tier.priceNum}
                      </span>
                      <span className="text-lg font-bold text-slate-700">
                        {tier.priceUnit}
                      </span>
                      <span className="text-[10.5px] uppercase font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200/60 ml-auto">
                        {tier.priceSuffix}
                      </span>
                    </div>

                    {/* Subnote updates dynamically with mode */}
                    <div className="text-[11px] text-slate-500 font-medium mt-1">
                      {currentSubNote}
                    </div>
                  </div>

                  {/* 3 Real Solution Examples */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      3 Contoh Solusi:
                    </div>
                    <div className="space-y-1.5">
                      {tier.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="text-xs bg-slate-50/80 hover:bg-blue-50/50 p-2 rounded-xl border border-slate-200/60 transition-colors flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                          <div className="min-w-0">
                            <span className="font-bold text-[#0F172A] block leading-tight">
                              {ex.label}
                            </span>
                            <span className="text-[10.5px] text-slate-500 block leading-tight mt-0.5">
                              {ex.note}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Feature Checklist (Updates dynamically with mode) */}
                  <div className="pt-1 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {currentFeatures.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA Action Button */}
                <div className="p-5 sm:p-6 pt-0 mt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenWa(currentWaMsg)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer ${
                      isHighlight
                        ? "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:scale-[1.01]"
                        : "bg-[#0F172A] hover:bg-slate-800 text-white hover:scale-[1.01]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{currentCtaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
                  </button>

                  <div className="text-center text-[9.5px] text-slate-400 mt-1.5 font-medium">
                    Diskusi Gratis · Respons &lt;15 Menit · Tanpa Komitmen
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Core Guarantees Banner */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  100% Hak Milik Kode
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Full source code &amp; zero vendor lock-in
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  Rp 0 Lisensi Bulanan
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Unlimited user tanpa biaya sewa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  SLA Anti-Down 99.9%
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Stabilitas sistem terjamin 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  Free Konsultasi &amp; Demo
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Langsung dengan lead engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
