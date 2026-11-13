"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Cloud,
  Scale,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6281398589745";

type PricingMode = "beli-putus" | "terima-beres";

export function GrovePricingSection() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("beli-putus");

  const pricingTiers = [
    {
      id: "web",
      icon: Globe,
      isPopular: false,
      headerTag: {
        "beli-putus": "PAKET WEB · ASET MANDIRI",
        "terima-beres": "PAKET WEB · MANAGED CLOUD",
      },
      title: "Modern Web & Landing System",
      currency: "Rp",
      priceNum: "1.5 – 3.5",
      priceUnit: "Juta",
      priceSuffix: "start from",
      summary:
        "Website berkecepatan tinggi (<0.8s) & Google SEO 100/100 untuk melipatgandakan kredibilitas dan konversi penjualan institusi Anda.",
      tags: {
        "beli-putus": "100% Hak Milik",
        "terima-beres": "Managed Cloud",
      },
      subNotes: {
        "beli-putus": "Sekali Bayar · 100% Hak Milik Permanen",
        "terima-beres": "Terima Beres · Managed Cloud & Maintenance",
      },
      examples: {
        "beli-putus": [
          {
            label: "Company Profile Korporat & Yayasan",
            note: "100% Source code Git diserahkan utuh",
          },
          {
            label: "High-Converting Landing Page",
            note: "Deploy bebas di hosting/server sendiri",
          },
          {
            label: "Katalog & Portofolio Digital",
            note: "Bebas biaya sewa bulanan selamanya",
          },
        ],
        "terima-beres": [
          {
            label: "Company Profile Korporat & Yayasan",
            note: "Cloud server dedicated & domain kami kelola",
          },
          {
            label: "High-Converting Landing Page",
            note: "Update banner & maintenance teknis berkala",
          },
          {
            label: "Katalog & Portofolio Digital",
            note: "Backup otomatis & pemantauan anti-down 24/7",
          },
        ],
      },
      features: {
        "beli-putus": [
          "Kecepatan <0.8s & Skor Google SEO 100/100",
          "100% Full Source Code Git & Hak Cipta Mutlak",
          "Bebas Deploy di Hosting / VPS Sendiri (Zero Lock-in)",
        ],
        "terima-beres": [
          "Kecepatan <0.8s & Skor Google SEO 100/100",
          "Dedicated Cloud Server + Setup Domain & SSL Gratis",
          "Maintenance Teknis & Patch Bug Rutin Kami Rawat",
        ],
      },
      ctaLabel: {
        "beli-putus": "Ambil Skema Beli Putus",
        "terima-beres": "Pilih Skema Terima Beres",
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
      icon: Building2,
      isPopular: true,
      headerTag: {
        "beli-putus": "PALING BANYAK DIPILIH · ZERO BIAYA BULANAN",
        "terima-beres": "PALING BANYAK DIPILIH · GARANSI ANTI-DOWN",
      },
      title: "Custom ERP & SIAKAD Sistem",
      currency: "Rp",
      priceNum: "4 – 12",
      priceUnit: "Juta",
      priceSuffix: "start from",
      summary:
        "Sistem operasional kustom dari kasir POS, SIAKAD sekolah anti-down, hingga ERP multi-gudang tanpa biaya lisensi per user selamanya.",
      tags: {
        "beli-putus": "PostgreSQL & Source Code Penuh",
        "terima-beres": "Dedicated Cloud & SLA 99.9%",
      },
      subNotes: {
        "beli-putus": "Sesuai Modul · Zero Biaya Lisensi Selamanya",
        "terima-beres": "Terima Beres · Garansi SLA 99.9% Uptime",
      },
      examples: {
        "beli-putus": [
          {
            label: "SIAKAD Sekolah & Ujian Anti-Down",
            note: "Database PostgreSQL & dump asli diserahkan",
          },
          {
            label: "ERP Multi-Gudang & Logistik",
            note: "Unlimited user tanpa pungutan per-kepala",
          },
          {
            label: "Kasir POS & Keuangan Multi-Cabang",
            note: "Self-hosted di server internal / cloud mandiri",
          },
        ],
        "terima-beres": [
          {
            label: "SIAKAD Sekolah & Ujian Anti-Down",
            note: "Garansi ujian lancar tanpa server down",
          },
          {
            label: "ERP Multi-Gudang & Logistik",
            note: "Backup database harian otomatis multi-lokasi",
          },
          {
            label: "Kasir POS & Keuangan Multi-Cabang",
            note: "Engineer siaga via WhatsApp <15 menit",
          },
        ],
      },
      features: {
        "beli-putus": [
          "Zero Biaya Lisensi User (Bebas Tambah 10.000+ Siswa/Karyawan)",
          "Full Source Code & Skema Database PostgreSQL Lengkap",
          "Bebas Hosting di Server Kantor / AWS / VPS Pribadi",
        ],
        "terima-beres": [
          "Zero Biaya Lisensi User (Bebas Tambah 10.000+ Siswa/Karyawan)",
          "Garansi Tertulis Anti-Down SLA 99.9% Uptime Resmi",
          "Server Dedicated, Backup Harian & Siaga Engineer <15 Menit",
        ],
      },
      ctaLabel: {
        "beli-putus": "Ambil Skema Beli Putus",
        "terima-beres": "Pilih Skema Terima Beres",
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
      icon: Bot,
      isPopular: false,
      headerTag: {
        "beli-putus": "PAKET OTOMASI · PIPELINE MANDIRI",
        "terima-beres": "PAKET OTOMASI · BOT SIAGA 24/7",
      },
      title: "Automation AI/ML & Meta Agent",
      currency: "Rp",
      priceNum: "5",
      priceUnit: "Juta+",
      priceSuffix: "start from",
      summary:
        "Otomatiskan alur kerja manual dengan WhatsApp AI Agent resmi Meta dan ekstraksi ribuan dokumen via Document AI OCR non-stop 24 jam.",
      tags: {
        "beli-putus": "Kode & Pipeline Asli",
        "terima-beres": "Server Bot Siaga 24/7",
      },
      subNotes: {
        "beli-putus": "Sekali Bayar · Source Code & Model Penuh",
        "terima-beres": "Terima Beres · Managed Host & Bot 24/7",
      },
      examples: {
        "beli-putus": [
          {
            label: "Document AI OCR Extractor",
            note: "Pipeline ekstraksi dokumen mandiri tanpa sewa",
          },
          {
            label: "WhatsApp AI Agent Resmi Meta",
            note: "Script bot terhubung ke Cloud API akun perusahaan",
          },
          {
            label: "Integrasi Workflow Otomatis",
            note: "Akses webhook & database internal 100% privat",
          },
        ],
        "terima-beres": [
          {
            label: "Document AI OCR Extractor",
            note: "Server OCR dokumen dipantau & dituning otomatis",
          },
          {
            label: "WhatsApp AI Agent Resmi Meta",
            note: "Bot online 24 jam nonstop tanpa server lokal",
          },
          {
            label: "Integrasi Workflow Otomatis",
            note: "Monitoring error & retry otomatis jika webhook fail",
          },
        ],
      },
      features: {
        "beli-putus": [
          "Resmi Meta WhatsApp Cloud API (Anti-Banned)",
          "100% Script Otomasi & Prompt AI Jadi Aset Institusi",
          "Integrasi Langsung ke Server & Database Internal Anda",
        ],
        "terima-beres": [
          "Resmi Meta WhatsApp Cloud API (Anti-Banned)",
          "Hosting Bot Siaga 24/7 & Pemantauan Error Otomatis",
          "Maintenance Prompt AI & Penyesuaian SOP Berkala",
        ],
      },
      ctaLabel: {
        "beli-putus": "Ambil Skema Beli Putus",
        "terima-beres": "Pilih Skema Terima Beres",
      },
      waMessages: {
        "beli-putus":
          "Halo Tim Abinest, saya tertarik paket Automation AI/ML dengan skema Beli Putus (100% Source Code & integrasi mandiri). Boleh demo teknisnya?",
        "terima-beres":
          "Halo Tim Abinest, saya tertarik paket Automation AI/ML dengan skema Terima Beres (Managed Bot & Server Siaga 24/7). Boleh demo teknisnya?",
      },
    },
  ];

  const schemeComparisonRows = [
    {
      aspect: "Kepemilikan Source Code & Database",
      beliPutus: "✓ 100% Full Git Repo & DB Dump diserahkan utuh ke klien",
      terimaBeres: "✓ Kode tetap milik klien, hak akses & backup terbuka",
    },
    {
      aspect: "Biaya Langganan / Lisensi Per-User",
      beliPutus: "Rp 0 selamanya (unlimited staf, siswa, & cabang)",
      terimaBeres: "Rp 0 biaya per-user · hanya biaya perawatan & cloud terukur",
    },
    {
      aspect: "Infrastruktur Server & Domain",
      beliPutus: "Di-deploy ke VPS / Cloud / Server kantor milik klien sendiri",
      terimaBeres: "Dikelola penuh di server dedicated Abinest + SSL & Backup harian",
    },
    {
      aspect: "Garansi Maintenance & Tanggap Darurat",
      beliPutus: "Garansi bug-fix awal + dokumentasi lengkap tim IT internal",
      terimaBeres: "Jaminan SLA 99.9% uptime + engineer siaga <15 menit",
    },
    {
      aspect: "Paling Cocok Untuk",
      beliPutus: "Institusi / bisnis yang sudah punya tim IT atau server sendiri",
      terimaBeres: "Pemilik usaha / sekolah yang ingin langsung pakai tanpa urus server",
    },
  ];

  const handleOpenWa = (message: string) => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const isBeliPutus = pricingMode === "beli-putus";

  return (
    <section
      id="harga"
      className="relative py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-300/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1E40AF] text-[11px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2496ED] animate-pulse" />
            <span>Paket Investasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight">
            Investasi Teknologi Terukur.
            <br />
            <span className={isBeliPutus ? "text-[#0D9488]" : "text-[#2563EB]"}>
              Tersedia Pilihan Beli Putus atau Terima Beres.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Pilih model kepemilikan sesuai kesiapan institusi Anda: 100% kepemilikan aset mandiri tanpa biaya sewa, atau terima beres dengan server dan perawatan penuh.
          </p>
        </motion.div>

        {/* Crisp Segmented Mode Switcher + Bootstrap Callout Alert */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="grid grid-cols-2 sm:inline-flex w-full sm:w-auto p-1 sm:p-1.5 rounded-xl bg-white border border-slate-300 shadow-xs gap-1 sm:gap-1.5">
            <button
              type="button"
              onClick={() => setPricingMode("beli-putus")}
              className={`px-2.5 sm:px-6 py-2.5 rounded-lg text-[11px] sm:text-sm font-bold transition-all duration-150 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                isBeliPutus
                  ? "bg-[#0D9488] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Beli Putus (100%)</span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                  isBeliPutus
                    ? "bg-white/20 text-white"
                    : "bg-teal-50 text-teal-800 border border-teal-200"
                }`}
              >
                Aset Mandiri
              </span>
            </button>

            <button
              type="button"
              onClick={() => setPricingMode("terima-beres")}
              className={`px-2.5 sm:px-6 py-2.5 rounded-lg text-[11px] sm:text-sm font-bold transition-all duration-150 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                !isBeliPutus
                  ? "bg-[#2563EB] text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="truncate">Sewa / Terima Beres</span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wide ${
                  !isBeliPutus
                    ? "bg-white/20 text-white"
                    : "bg-blue-50 text-blue-800 border border-blue-200"
                }`}
              >
                Siap Pakai
              </span>
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={pricingMode}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-2xl"
            >
              {isBeliPutus ? (
                <div className="px-4 py-2.5 rounded-xl bg-teal-50/80 border border-teal-300 border-l-4 border-l-[#0D9488] text-teal-950 text-xs sm:text-[13px] flex items-center gap-2.5 shadow-2xs">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>
                    <strong className="font-bold">Skema Beli Putus 100%:</strong> Seluruh source code &amp; database diserahkan utuh tanpa biaya sewa bulanan selamanya.
                  </span>
                </div>
              ) : (
                <div className="px-4 py-2.5 rounded-xl bg-blue-50/80 border border-blue-300 border-l-4 border-l-[#2563EB] text-blue-950 text-xs sm:text-[13px] flex items-center gap-2.5 shadow-2xs">
                  <Cloud className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>
                    <strong className="font-bold">Skema Sewa / Terima Beres:</strong> Server cloud dedicated, garansi SLA 99.9% uptime &amp; maintenance teknis kami rawat penuh.
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3-Column Pricing Cards (Symmetrical Bootstrap Card Anatomy: Header -> Body/ListGroup -> Footer) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlight = tier.isPopular;
            const currentHeaderTag = tier.headerTag[pricingMode];
            const currentTag = tier.tags[pricingMode];
            const currentSubNote = tier.subNotes[pricingMode];
            const currentExamples = tier.examples[pricingMode];
            const currentFeatures = tier.features[pricingMode];
            const currentCtaLabel = tier.ctaLabel[pricingMode];
            const currentWaMsg = tier.waMessages[pricingMode];

            const highlightBorder = isBeliPutus
              ? "border-2 border-[#0D9488] shadow-[0_14px_35px_rgba(13,148,136,0.14)]"
              : "border-2 border-[#2563EB] shadow-[0_14px_35px_rgba(37,99,235,0.14)]";

            const bannerClass = isHighlight
              ? isBeliPutus
                ? "bg-[#0D9488] text-white border-b border-teal-700"
                : "bg-[#2563EB] text-white border-b border-blue-700"
              : "bg-slate-100 text-slate-700 border-b border-slate-200";

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className={`rounded-2xl bg-white overflow-hidden flex flex-col justify-between transition-all duration-200 ${
                  isHighlight
                    ? highlightBorder
                    : "border border-slate-300 shadow-xs hover:border-slate-400 hover:shadow-md"
                }`}
              >
                {/* 1. Integrated Top Card Banner */}
                <div className={`px-5 py-2.5 text-[10.5px] font-extrabold uppercase tracking-wider flex items-center justify-between gap-2 ${bannerClass}`}>
                  <span className="inline-flex items-center gap-1.5 truncate">
                    {isHighlight && <Sparkles className="w-3.5 h-3.5 shrink-0" />}
                    <span className="truncate">{currentHeaderTag}</span>
                  </span>
                  <span className="shrink-0 opacity-85">0{idx + 1}</span>
                </div>

                {/* 2. Structured Card Header (Title, Summary & Price Block) */}
                <div className="px-5 py-5 bg-slate-50/70 border-b border-slate-200 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                          isHighlight
                            ? isBeliPutus
                              ? "bg-teal-50 text-[#0D9488] border-teal-200"
                              : "bg-blue-50 text-[#2563EB] border-blue-200"
                            : "bg-white text-slate-700 border-slate-300"
                        }`}
                      >
                        <Icon className="w-[18px] h-[18px]" />
                      </div>
                      <h3 className="text-lg font-extrabold text-[#0F172A] tracking-tight leading-snug">
                        {tier.title}
                      </h3>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200 space-y-1">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-slate-500">
                        {tier.currency}
                      </span>
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-[#0F172A]">
                        {tier.priceNum}
                      </span>
                      <span className="text-base font-bold text-slate-700">
                        {tier.priceUnit}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md border ml-auto ${
                          isBeliPutus
                            ? "bg-teal-50 text-teal-800 border-teal-200"
                            : "bg-blue-50 text-blue-800 border-blue-200"
                        }`}
                      >
                        {tier.priceSuffix}
                      </span>
                    </div>
                    <div
                      className={`text-[11px] font-bold ${
                        isBeliPutus ? "text-teal-700" : "text-blue-700"
                      }`}
                    >
                      {currentSubNote} · {currentTag}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.summary}
                  </p>
                </div>

                {/* 3. Card Body (List Group + Feature Checklist) */}
                <div className="p-5 flex-1 space-y-4">
                  <div className="space-y-1.5">
                    <div className="text-[10.5px] font-bold uppercase tracking-wider text-slate-500">
                      3 Contoh Implementasi Nyata:
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pricingMode}
                        initial={{ opacity: 0, y: 2 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -2 }}
                        transition={{ duration: 0.16 }}
                        className="ui-list-group bg-slate-50/40"
                      >
                        {currentExamples.map((ex, exIdx) => (
                          <div key={exIdx} className="px-3 py-2.5 flex items-start gap-2 text-xs">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 ${
                                isBeliPutus ? "bg-[#0D9488]" : "bg-[#2563EB]"
                              }`}
                            />
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
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={pricingMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.16 }}
                        className="space-y-2 text-xs text-slate-700"
                      >
                        {currentFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-4 h-4 shrink-0 mt-0.5 ${
                                isBeliPutus ? "text-[#0D9488]" : "text-[#2563EB]"
                              }`}
                            />
                            <span className="leading-snug font-medium">{feat}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </div>
                </div>

                {/* 4. Card Footer */}
                <div className="ui-card-footer space-y-2">
                  <button
                    type="button"
                    onClick={() => handleOpenWa(currentWaMsg)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 transition-all duration-150 shadow-xs cursor-pointer ${
                      isHighlight
                        ? isBeliPutus
                          ? "bg-[#0D9488] hover:bg-[#0F766E] text-white"
                          : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white"
                        : isBeliPutus
                        ? "bg-[#0F172A] hover:bg-[#0D9488] text-white"
                        : "bg-[#0F172A] hover:bg-[#2563EB] text-white"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{currentCtaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="text-center text-[10px] text-slate-500 font-medium">
                    Diskusi Gratis · Respons &lt;15 Menit · Tanpa Komitmen
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Structured Ownership Comparison Table (Beli Putus vs Terima Beres) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="ui-card overflow-hidden"
        >
          <div className="ui-card-header bg-slate-100/80 flex-wrap">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A] text-white flex items-center justify-center shrink-0">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">
                  Perbandingan Detail: Skema Beli Putus vs Sewa / Terima Beres
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Pilih yang paling pas dengan kesiapan tim dan anggaran operasional bisnis Anda.
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-[11px] font-bold text-slate-700">
              Bebas Biaya Tersembunyi
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[660px] text-xs sm:text-[13px]">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-300 divide-x divide-slate-700/80">
                  <th className="py-3 px-4 font-bold w-[28%]">Poin Perbandingan</th>
                  <th
                    className={`py-3 px-4 font-bold w-[36%] transition-colors ${
                      isBeliPutus ? "bg-[#0F766E]" : ""
                    }`}
                  >
                    1. Beli Putus (100% Permanen)
                  </th>
                  <th
                    className={`py-3 px-4 font-bold w-[36%] transition-colors ${
                      !isBeliPutus ? "bg-[#1D4ED8]" : ""
                    }`}
                  >
                    2. Sewa / Terima Beres (Managed)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {schemeComparisonRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`divide-x divide-slate-200 hover:bg-slate-50 ${
                      rIdx % 2 === 1 ? "bg-slate-50/50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-[#0F172A]">
                      {row.aspect}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        isBeliPutus ? "bg-teal-50/35 font-medium text-slate-900" : ""
                      }`}
                    >
                      {row.beliPutus}
                    </td>
                    <td
                      className={`py-3 px-4 ${
                        !isBeliPutus ? "bg-blue-50/35 font-medium text-slate-900" : ""
                      }`}
                    >
                      {row.terimaBeres}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* 4 Core Guarantees Bar (Divided Bootstrap Cells) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.36, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-slate-300 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 shadow-xs overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="p-4 sm:p-5 flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                isBeliPutus
                  ? "bg-teal-50 text-[#0D9488] border-teal-200"
                  : "bg-blue-50 text-[#2563EB] border-blue-200"
              }`}
            >
              <Code2 className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-extrabold text-[#0F172A] truncate">
                100% Hak Milik Kode
              </h4>
              <p className="text-[11px] text-slate-500 truncate">
                Full source code &amp; zero lock-in
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                isBeliPutus
                  ? "bg-teal-50 text-[#0D9488] border-teal-200"
                  : "bg-blue-50 text-[#2563EB] border-blue-200"
              }`}
            >
              <Database className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-extrabold text-[#0F172A] truncate">
                Rp 0 Lisensi Bulanan
              </h4>
              <p className="text-[11px] text-slate-500 truncate">
                Unlimited user tanpa biaya sewa
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                isBeliPutus
                  ? "bg-teal-50 text-[#0D9488] border-teal-200"
                  : "bg-blue-50 text-[#2563EB] border-blue-200"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-extrabold text-[#0F172A] truncate">
                SLA Anti-Down 99.9%
              </h4>
              <p className="text-[11px] text-slate-500 truncate">
                Stabilitas sistem terjamin 24/7
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 flex items-center gap-3">
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                isBeliPutus
                  ? "bg-teal-50 text-[#0D9488] border-teal-200"
                  : "bg-blue-50 text-[#2563EB] border-blue-200"
              }`}
            >
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-extrabold text-[#0F172A] truncate">
                Free Konsultasi &amp; Demo
              </h4>
              <p className="text-[11px] text-slate-500 truncate">
                Langsung dengan lead engineer
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
