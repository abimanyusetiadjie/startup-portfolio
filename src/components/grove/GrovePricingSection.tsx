"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Building2,
  Bot,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  Code2,
  Clock,
  Database,
} from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6285708677918";

export function GrovePricingSection() {
  const pricingTiers = [
    {
      id: "web",
      tag: "UMKM & Personal",
      badge: "Siap 3-5 Hari",
      title: "Website & Landing Page",
      currency: "Rp",
      priceNum: "500",
      priceUnit: "Ribu",
      priceSuffix: "start from",
      priceSubNote: "Sekali Bayar · 100% Hak Milik",
      icon: Globe,
      accentColor: "#059669",
      isPopular: false,
      summary:
        "Website modern berkecepatan tinggi (<0.8 detik) & Google SEO 100/100 untuk melipatgandakan kredibilitas bisnis Anda.",
      examples: [
        {
          label: "Landing Page Produk & UMKM",
          note: "Toko kuliner, fashion, f&b, & jasa",
        },
        {
          label: "Portofolio & Personal Branding",
          note: "Dokter, lawyer, konsultan, kreator",
        },
        {
          label: "Katalog & Brosur Digital",
          note: "Showroom motor/mobil, mebel, dsb",
        },
      ],
      features: [
        "Kecepatan <0.8s & Skor Google SEO 100/100",
        "100% Hak Milik Source Code (Zero Biaya Sewa)",
        "Desain Eksklusif Mobile-First & Direct WA",
      ],
      waMessage:
        "Halo Tim Abinest, saya tertarik paket Pembuatan Website Modern mulai 500 Ribu. Boleh minta info detail & diskusikan konsep bisnis saya?",
    },
    {
      id: "erp",
      tag: "UMKM s/d Enterprise",
      badge: "Paling Banyak Dipilih",
      title: "Custom ERP & Sistem Operasional",
      currency: "Rp",
      priceNum: "2 – 10",
      priceUnit: "Juta",
      priceSuffix: "start from",
      priceSubNote: "Sesuai Modul · Zero Biaya Lisensi",
      icon: Building2,
      accentColor: "#047857",
      isPopular: true,
      summary:
        "Sistem operasional kustom dari kasir POS multi-outlet hingga ERP multi-gudang anti-down 99.99% tanpa iuran lisensi bulanan.",
      examples: [
        {
          label: "Kasir POS & Stok Cabang (Mulai 2 Jt)",
          note: "Stok real-time, struk, kas harian",
        },
        {
          label: "Gudang & Logistik (Mulai 4 - 6 Jt)",
          note: "Batch tracking, barcode, surat jalan",
        },
        {
          label: "Enterprise ERP Terpadu (Mulai 8 - 10 Jt)",
          note: "Multi-gudang, payroll, keuangan, pajak",
        },
      ],
      features: [
        "Zero Biaya Lisensi User (Bebas Tambah Karyawan)",
        "SLA Anti-Down 99.99% Uptime & Audit Trail",
        "Multi-Gudang & Sinkronisasi Stok Real-Time",
      ],
      waMessage:
        "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem Kustom / ERP Operasional (range 2 - 10 Juta) untuk kebutuhan bisnis kami.",
    },
    {
      id: "ai-ml",
      tag: "AI & Machine Learning",
      badge: "Otonom 24/7",
      title: "Automation AI/ML",
      currency: "Rp",
      priceNum: "3",
      priceUnit: "Juta+",
      priceSuffix: "start from",
      priceSubNote: "Meta API Resmi · Model Cerdas 24/7",
      icon: Bot,
      accentColor: "#059669",
      isPopular: false,
      summary:
        "Otomatiskan alur kerja manual dengan WhatsApp AI Agent resmi Meta dan ekstraksi faktur Document AI OCR non-stop 24 jam.",
      examples: [
        {
          label: "Chatbot WA Sales & CS Resmi (Mulai 3 Jt)",
          note: "Respon instan <1s, katalog, order 24/7",
        },
        {
          label: "Document AI OCR Extractor (Mulai 4 - 6 Jt)",
          note: "Baca ribuan invoice PDF akurasi 99.7%",
        },
        {
          label: "Workflow & Auto-Faktur (Mulai 5 Jt+)",
          note: "Reminder tagihan WA & rekonsiliasi DB",
        },
      ],
      features: [
        "Resmi Meta WhatsApp Cloud API (Centang Hijau)",
        "AI Agent Cerdas Terlatih Sesuai SOP Perusahaan",
        "Document AI OCR Faktur Otomatis (Akurasi 99.7%)",
      ],
      waMessage:
        "Halo Tim Abinest, saya tertarik paket Automation AI/ML mulai 3 Juta. Boleh minta demo teknis dan konsultasi alur kerja sistem kami?",
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
            backgroundImage: `radial-gradient(rgba(5, 150, 105, 0.22) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-100/30 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[#065F46] text-xs font-bold tracking-wide uppercase shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#059669] animate-pulse" />
            <span>Paket Investasi Transparan</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-[-0.03em] leading-tight">
            Investasi Teknologi Terukur.
            <br />
            <span className="text-[#059669]">
              Mulai dari Skala UMKM hingga Perusahaan.
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-xl mx-auto">
            Semua paket mencakup <strong className="text-[#0F172A] font-semibold">100% hak milik source code</strong>, bebas biaya sewa lisensi tahunan, dan asistensi implementasi penuh.
          </p>
        </div>

        {/* 3-Column Compact & Aesthetic Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-7 items-stretch">
          {pricingTiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isHighlight = tier.isPopular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`relative rounded-3xl bg-white flex flex-col justify-between transition-all duration-300 ${
                  isHighlight
                    ? "border-2 border-[#059669] shadow-[0_16px_36px_rgba(5,150,105,0.12)] ring-4 ring-emerald-500/10 lg:-translate-y-2"
                    : "border border-slate-200/90 shadow-[0_4px_16px_rgba(15,23,42,0.03)] hover:border-emerald-300 hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
                }`}
              >
                {/* Popular Highlight Badge */}
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#065F46] text-white text-[10.5px] font-extrabold uppercase tracking-wider px-3.5 py-0.5 rounded-full shadow-sm flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3 h-3 text-emerald-300" />
                    <span>Paling Banyak Dipilih</span>
                  </div>
                )}

                <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isHighlight
                          ? "bg-[#065F46] text-white shadow-sm"
                          : "bg-emerald-50 text-[#059669]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10.5px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full tracking-wide">
                      {tier.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0F172A] tracking-tight leading-snug">
                      {tier.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-snug mt-1">
                      {tier.summary}
                    </p>
                  </div>

                  {/* Aesthetic Price Display Block */}
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs font-bold text-slate-400">
                          {tier.currency}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight leading-none">
                          {tier.priceNum}
                        </span>
                        <span className="text-sm sm:text-base font-extrabold text-slate-700 ml-0.5">
                          {tier.priceUnit}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-[#065F46] bg-emerald-100/70 px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {tier.priceSuffix}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium mt-1 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-[#059669]" />
                      <span>{tier.priceSubNote}</span>
                    </div>
                  </div>

                  {/* 3 Contoh Implementasi (Compact Capsule List) */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#059669]" />
                      <span>3 Contoh Solusi:</span>
                    </div>
                    <div className="space-y-1.5">
                      {tier.examples.map((ex, exIdx) => (
                        <div
                          key={exIdx}
                          className="text-xs bg-slate-50/80 hover:bg-emerald-50/50 p-2 rounded-xl border border-slate-200/60 transition-colors flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#059669] shrink-0 mt-1.5" />
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

                  {/* Key Feature Checklist (3 Compact Items) */}
                  <div className="pt-1 border-t border-slate-100">
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {tier.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
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
                    onClick={() => handleOpenWa(tier.waMessage)}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm cursor-pointer ${
                      isHighlight
                        ? "bg-[#065F46] hover:bg-[#044E39] text-white shadow-[0_4px_16px_rgba(6,95,70,0.2)] hover:scale-[1.01]"
                        : "bg-[#0F172A] hover:bg-slate-800 text-white hover:scale-[1.01]"
                    }`}
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Konsultasi Paket Ini</span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-300" />
                  </button>

                  <div className="text-center text-[9.5px] text-slate-400 mt-1.5 font-medium">
                    Diskusi Gratis · Respons &lt;15 Menit · Tanpa Komitmen
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 4 Core Guarantees Banner (Compact Bar) */}
        <div className="mt-10 sm:mt-12 bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
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
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
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
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  SLA Anti-Down 99.99%
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Stabilitas sistem terjamin 24/7
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-[#0F172A] truncate">
                  Free Konsultasi &amp; Demo
                </h4>
                <p className="text-[10px] text-slate-500 truncate">
                  Langsung dengan senior engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
