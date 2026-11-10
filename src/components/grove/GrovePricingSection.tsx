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
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6285708677918";

type PricingMode = "beli-putus" | "terima-beres";

export function GrovePricingSection() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("beli-putus");

  const pricingTiers = [
    {
      id: "web",
      icon: Globe,
      isPopular: false,
      title: "Modern Web & Landing System",
      currency: "Rp",
      priceNum: "1.5 – 3.5",
      priceUnit: "Juta",
      priceSuffix: "start from",
      summary:
        "Website berkecepatan tinggi (<0.8s) & Google SEO 100/100 untuk melipatgandakan kredibilitas dan konversi penjualan institusi Anda.",
      
      // Mode-specific badges & tags
      tags: {
        "beli-putus": "Aset Digital Mandiri",
        "terima-beres": "Siap Pakai & Bebas Repot",
      },
      badges: {
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
      title: "Custom ERP & SIAKAD Sistem",
      currency: "Rp",
      priceNum: "4 – 12",
      priceUnit: "Juta",
      priceSuffix: "start from",
      summary:
        "Sistem operasional kustom dari kasir POS, SIAKAD sekolah anti-down, hingga ERP multi-gudang tanpa biaya lisensi per user selamanya.",
      
      // Mode-specific badges & tags
      tags: {
        "beli-putus": "PostgreSQL & Source Code Penuh",
        "terima-beres": "Dedicated Cloud & SLA 99.9%",
      },
      badges: {
        "beli-putus": "PALING BANYAK DIPILIH · ZERO BIAYA BULANAN",
        "terima-beres": "PALING BANYAK DIPILIH · GARANSI ANTI-DOWN",
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
      title: "Automation AI/ML & Meta Agent",
      currency: "Rp",
      priceNum: "5",
      priceUnit: "Juta+",
      priceSuffix: "start from",
      summary:
        "Otomatiskan alur kerja manual dengan WhatsApp AI Agent resmi Meta dan ekstraksi ribuan dokumen via Document AI OCR non-stop 24 jam.",
      
      // Mode-specific badges & tags
      tags: {
        "beli-putus": "Server & AI Pipeline Mandiri",
        "terima-beres": "Managed AI Agent & Host 24/7",
      },
      badges: {
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#2496ED] animate-pulse" />
            <span>Paket Investasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight">
            Investasi Teknologi Terukur.
            <br />
            <span className={isBeliPutus ? "text-[#00C9A7]" : "text-[#2496ED]"}>
              Tersedia Pilihan Beli Putus atau Terima Beres.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Pilih model kepemilikan sesuai kesiapan institusi Anda: 100% kepemilikan aset mandiri tanpa biaya sewa, atau terima beres dengan server dan perawatan penuh.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* TWO-BUTTON SCHEME SELECTOR (BRAND TEAL MINT vs DOCKER BLUE)              */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center justify-center mb-10 sm:mb-12">
          {/* Pill Toggle */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 shadow-inner max-w-full">
            {/* BUTTON 1: Beli Putus (Hijau Teal Mint Abinest #00C9A7) */}
            <button
              type="button"
              onClick={() => setPricingMode("beli-putus")}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isBeliPutus
                  ? "bg-gradient-to-r from-[#00C9A7] to-[#0D9488] text-white shadow-md shadow-teal-500/25 ring-2 ring-[#00C9A7]/30"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/40"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>Beli Putus (100% Permanen)</span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                  isBeliPutus
                    ? "bg-white/20 text-white"
                    : "bg-teal-100 text-teal-800"
                }`}
              >
                Aset Mandiri
              </span>
            </button>

            {/* BUTTON 2: Sewa / Terima Beres (Docker Blue #2496ED) */}
            <button
              type="button"
              onClick={() => setPricingMode("terima-beres")}
              className={`px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                !isBeliPutus
                  ? "bg-[#2496ED] hover:bg-[#1F82CE] text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-300/40"
              }`}
            >
              <Cloud className="w-4 h-4 text-white" />
              <span>Sewa / Terima Beres</span>
              <span
                className={`hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wide ${
                  !isBeliPutus
                    ? "bg-white/20 text-white"
                    : "bg-blue-100 text-blue-800"
                }`}
              >
                Siap Pakai
              </span>
            </button>
          </div>

          {/* Dynamic 1-line note with subtle animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={pricingMode}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="mt-3.5 text-center px-4 max-w-2xl"
            >
              {isBeliPutus ? (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 border border-teal-200/90 text-teal-900 text-xs sm:text-[13px] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                  <span>
                    <strong className="font-bold text-teal-950">Skema Beli Putus 100%:</strong> Seluruh source code &amp; database diserahkan utuh tanpa biaya sewa bulanan selamanya.
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-900 text-xs sm:text-[13px] shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#2496ED]" />
                  <span>
                    <strong className="font-bold text-blue-950">Skema Sewa / Terima Beres:</strong> Server cloud dedicated, garansi SLA 99.9% uptime &amp; maintenance teknis kami rawat penuh.
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 3-Column Dynamic Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlight = tier.isPopular;
            const currentTag = tier.tags[pricingMode];
            const currentBadge = tier.badges[pricingMode];
            const currentSubNote = tier.subNotes[pricingMode];
            const currentExamples = tier.examples[pricingMode];
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
                    ? isBeliPutus
                      ? "border-2 border-[#00C9A7] shadow-[0_16px_40px_rgba(0,201,167,0.16)] -translate-y-1 sm:-translate-y-2 z-10"
                      : "border-2 border-[#2496ED] shadow-[0_16px_40px_rgba(36,150,237,0.16)] -translate-y-1 sm:-translate-y-2 z-10"
                    : "border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300"
                }`}
              >
                {/* Popular Pill Badge on Middle Card */}
                {isHighlight && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap transition-colors duration-200 ${
                      isBeliPutus
                        ? "bg-gradient-to-r from-[#00C9A7] to-[#0D9488]"
                        : "bg-[#2496ED]"
                    }`}
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                    <span>{currentBadge}</span>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Top Bar: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold transition-colors duration-200 ${
                        isHighlight
                          ? isBeliPutus
                            ? "bg-gradient-to-r from-[#00C9A7] to-[#0D9488] text-white shadow-sm"
                            : "bg-[#2496ED] text-white shadow-sm"
                          : isBeliPutus
                          ? "bg-teal-50 text-[#0D9488] border border-teal-200/70"
                          : "bg-blue-50 text-[#2496ED] border border-blue-200/70"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Mode-specific Tag or Badge */}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border transition-colors duration-200 ${
                        isBeliPutus
                          ? "bg-teal-50 text-teal-800 border-teal-200/80"
                          : "bg-blue-50 text-blue-800 border-blue-200/80"
                      }`}
                    >
                      {currentTag}
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
                      <span
                        className={`text-[10.5px] uppercase font-bold px-2 py-0.5 rounded-md border ml-auto transition-colors duration-200 ${
                          isBeliPutus
                            ? "bg-teal-50 text-teal-700 border-teal-200/60"
                            : "bg-blue-50 text-blue-700 border-blue-200/60"
                        }`}
                      >
                        {tier.priceSuffix}
                      </span>
                    </div>

                    {/* Subnote updates dynamically with mode */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pricingMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className={`text-[11px] font-semibold mt-1 transition-colors duration-200 ${
                          isBeliPutus ? "text-teal-700" : "text-blue-700"
                        }`}
                      >
                        {currentSubNote}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* 3 Real Solution Examples (Dynamic per mode) */}
                  <div className="space-y-1.5 pt-1 border-t border-slate-100">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      3 Contoh Solusi:
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={pricingMode}
                        initial={{ opacity: 0, y: 3 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5"
                      >
                        {currentExamples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className={`text-xs p-2 rounded-xl border transition-colors flex items-start gap-2 ${
                              isBeliPutus
                                ? "bg-slate-50/80 hover:bg-teal-50/50 border-slate-200/60"
                                : "bg-slate-50/80 hover:bg-blue-50/50 border-slate-200/60"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 mt-1.5 transition-colors duration-200 ${
                                isBeliPutus ? "bg-[#00C9A7]" : "bg-[#2496ED]"
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

                  {/* Key Feature Checklist (Dynamic per mode) */}
                  <div className="pt-1 border-t border-slate-100">
                    <AnimatePresence mode="wait">
                      <motion.ul
                        key={pricingMode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-1.5 text-xs text-slate-700"
                      >
                        {currentFeatures.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2">
                            <CheckCircle2
                              className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                                isBeliPutus ? "text-[#00C9A7]" : "text-[#2496ED]"
                              }`}
                            />
                            <span className="leading-snug">{feat}</span>
                          </li>
                        ))}
                      </motion.ul>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card CTA Action Button (Dynamic Colors & Messages) */}
                <div className="p-5 sm:p-6 pt-0 mt-2">
                  <button
                    type="button"
                    onClick={() => handleOpenWa(currentWaMsg)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer ${
                      isHighlight
                        ? isBeliPutus
                          ? "bg-gradient-to-r from-[#00C9A7] to-[#0D9488] hover:from-[#00B899] hover:to-[#0B7268] text-white shadow-[0_4px_16px_rgba(0,201,167,0.3)] hover:scale-[1.01]"
                          : "bg-[#2496ED] hover:bg-[#1D4ED8] text-white shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:scale-[1.01]"
                        : isBeliPutus
                        ? "bg-[#0F172A] hover:bg-[#0D9488] text-white hover:scale-[1.01]"
                        : "bg-[#0F172A] hover:bg-[#2496ED] text-white hover:scale-[1.01]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>{currentCtaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white/80" />
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
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  isBeliPutus
                    ? "bg-teal-50 text-[#00C9A7]"
                    : "bg-blue-50 text-[#2496ED]"
                }`}
              >
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
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  isBeliPutus
                    ? "bg-teal-50 text-[#00C9A7]"
                    : "bg-blue-50 text-[#2496ED]"
                }`}
              >
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
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  isBeliPutus
                    ? "bg-teal-50 text-[#00C9A7]"
                    : "bg-blue-50 text-[#2496ED]"
                }`}
              >
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
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  isBeliPutus
                    ? "bg-teal-50 text-[#00C9A7]"
                    : "bg-blue-50 text-[#2496ED]"
                }`}
              >
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
