"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Database,
  BrainCircuit,
  ArrowRight,
  Clock,
  CheckCircle2,
  Layers,
  Table2,
} from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

export function GroveCapabilitiesSection() {
  const capabilities = [
    {
      id: "web",
      stepTag: "PILAR 01",
      tag: "Next.js · Headless Web",
      title: "Modern Web Architecture",
      desc: "Website korporat berkecepatan tinggi (<0.8 detik), SEO Google 100/100, dan UI/UX konversi tinggi untuk melipatgandakan leads bisnis Anda.",
      badges: ["<0.8s Loading", "SEO 100/100", "Zero Bloat"],
      delivery: "7 – 14 Hari Kerja",
      fitFor: "UMKM, Sekolah & Korporat",
      priceHint: "Mulai Rp 1.5 Juta",
      icon: Globe,
      waMessage:
        "Halo Tim Abinest, saya tertarik mendiskusikan arsitektur Website Modern (<0.8s load) & 100% hak milik kode untuk perusahaan kami.",
      visual: (
        <div className="relative w-full aspect-[16/10] bg-slate-100 border-b border-slate-200 overflow-hidden group">
          <Image
            src="/images/hero-web.webp"
            alt="Modern Web Architecture by Abinest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ),
    },
    {
      id: "erp",
      stepTag: "PILAR 02",
      tag: "Enterprise ERP · Multi-Warehouse",
      title: "Custom Enterprise ERP & SIAKAD",
      desc: "Sistem operasional terpadu: multi-gudang, inventori, SIAKAD sekolah, & faktur otomatis tanpa biaya lisensi per user selamanya — 100% hak milik kode program.",
      badges: ["Multi-Gudang", "Bebas Lisensi User", "SLA 99.9%"],
      delivery: "2 – 8 Minggu",
      fitFor: "Distribusi, Pabrik & Sekolah",
      priceHint: "Mulai Rp 4 Juta",
      icon: Database,
      waMessage:
        "Halo Tim Abinest, saya tertarik konsultasi Custom ERP / SIAKAD Sekolah tanpa biaya lisensi bulanan.",
      visual: (
        <div className="relative w-full aspect-[16/10] bg-slate-100 border-b border-slate-200 overflow-hidden group">
          <Image
            src="/images/erp-dashboard.webp"
            alt="Custom Enterprise ERP System Dashboard by Abinest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ),
    },
    {
      id: "aiml",
      stepTag: "PILAR 03",
      tag: "Applied AI & Machine Learning",
      title: "Automasi AI & Machine Learning",
      desc: "Ekstraksi faktur otomatis via Document AI OCR (akurasi 99.7%) dan chatbot agen AI WhatsApp resmi Meta untuk memangkas kerja manual bisnis Anda.",
      badges: ["Document AI OCR", "Meta WhatsApp API", "Private Model"],
      delivery: "1 – 4 Minggu",
      fitFor: "Finance & Customer Care",
      priceHint: "Mulai Rp 5 Juta+",
      icon: BrainCircuit,
      waMessage:
        "Halo Tim Abinest, saya tertarik konsultasi implementasi Automasi AI/ML (Document OCR / Meta WhatsApp AI Agent).",
      visual: (
        <div className="relative w-full aspect-[16/10] bg-slate-100 border-b border-slate-200 overflow-hidden group">
          <Image
            src="/images/ai-ml-workflow.webp"
            alt="Applied AI & Machine Learning Pipeline by Abinest"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ),
    },
  ];

  const comparisonRows = [
    {
      aspect: "Masalah Utama yang Diselesaikan",
      web: "Website lambat, tampilan kurang meyakinkan, & sulit muncul di Google lokal.",
      erp: "Stok sering selisih, rekap keuangan manual, & server ujian/PPDB sering down.",
      aiml: "Admin kewalahan balas chat WhatsApp & salah ketik saat input ratusan faktur.",
    },
    {
      aspect: "Target Pengguna Ideal",
      web: "UMKM, Profil Perusahaan, Yayasan, Sekolah, & Landing Page Produk.",
      erp: "Distributor Multi-Gudang, Ritel/POS, Klinik, & Kampus / SIAKAD Sekolah.",
      aiml: "Tim Finance/Akuntansi, Customer Service 24/7, & Funnel Sales B2B.",
    },
    {
      aspect: "Estimasi Waktu Siap Pakai",
      web: "7 – 14 Hari Kerja",
      erp: "2 – 8 Minggu (Bertahap per Modul)",
      aiml: "1 – 4 Minggu",
    },
    {
      aspect: "Standar Kinerja & Keandalan",
      web: "Loading <0.8 detik · Google PageSpeed 95–100",
      erp: "Jaminan SLA 99.9% Uptime · Database PostgreSQL",
      aiml: "Meta Cloud API Resmi · Respon Bot <1 detik",
    },
    {
      aspect: "Hak Milik Source Code",
      web: "✓ 100% Milik Klien (Git Repo)",
      erp: "✓ 100% Milik Klien + DB Dump",
      aiml: "✓ 100% Script & Prompt Milik Klien",
    },
    {
      aspect: "Biaya Lisensi Per-User / Bulanan",
      web: "Rp 0 (Skema Beli Putus)",
      erp: "Rp 0 (Unlimited Staf / Siswa)",
      aiml: "Rp 0 Lisensi Software (Bayar Pemakaian API)",
    },
  ];

  return (
    <section
      id="layanan-utama"
      className="py-14 sm:py-16 relative bg-white border-b border-slate-300/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1D4ED8] text-[11px] font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>3 PILAR SOLUSI TERPADU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Layanan Rekayasa Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Tiga pilar solusi terstruktur dengan kepemilikan 100% kode program, batasan ruang lingkup yang jelas, dan garansi SLA 99.9%.
          </p>
        </motion.div>

        {/* 3-Column Card Grid (Compact on Mobile, Equal-Height Header/Media/Body/Footer on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="ui-card overflow-hidden hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group"
              >
                {/* 1. Card Header */}
                <div className="ui-card-header py-3 px-4 sm:px-5">
                  <div className="inline-flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-extrabold text-[#0F172A] tracking-wide">
                      {item.stepTag}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-white border border-slate-300 text-[10.5px] font-bold text-slate-700 truncate max-w-[180px]">
                    {item.tag}
                  </span>
                </div>

                {/* 2. Consistent Aspect-Ratio Card Visual */}
                {item.visual}

                {/* 3. Card Body (Compact & Content-Dense) */}
                <div className="ui-card-body p-4 sm:p-5 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="text-base sm:text-xl font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Compact 3-Column Specification Meta Grid */}
                  <div className="grid grid-cols-3 divide-x divide-slate-200 border border-slate-200 rounded-xl bg-slate-50/80 text-[10.5px] sm:text-[11px] overflow-hidden">
                    <div className="p-2 flex flex-col justify-center min-w-0">
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#2563EB] shrink-0" />
                        <span className="truncate">Rilis</span>
                      </span>
                      <span className="font-bold text-[#0F172A] mt-0.5 truncate">
                        {item.delivery}
                      </span>
                    </div>
                    <div className="p-2 flex flex-col justify-center min-w-0">
                      <span className="text-slate-500 font-medium truncate">
                        Cocok Untuk
                      </span>
                      <span className="font-bold text-blue-700 mt-0.5 truncate">
                        {item.fitFor}
                      </span>
                    </div>
                    <div className="p-2 flex flex-col justify-center bg-white min-w-0">
                      <span className="text-slate-500 font-medium truncate">
                        Estimasi
                      </span>
                      <span className="font-extrabold text-[#0F172A] mt-0.5 truncate">
                        {item.priceHint}
                      </span>
                    </div>
                  </div>

                  {/* Compact Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Card Footer */}
                <div className="ui-card-footer py-3 px-4 sm:px-5">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-bold text-white bg-[#0F172A] hover:bg-[#2563EB] transition-colors shadow-2xs"
                  >
                    <span>Diskusikan Arsitektur Ini</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Crisp Bootstrap-Style Service Comparison Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="ui-card overflow-hidden"
        >
          <div className="ui-card-header bg-slate-100/80 flex-wrap">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#2563EB] text-white flex items-center justify-center shrink-0">
                <Table2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">
                  Tabel Perbandingan Layanan &amp; Spesifikasi Teknis
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Bandingkan kecocokan tiap pilar berdasarkan kebutuhan dan target waktu usaha Anda.
                </p>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-white border border-slate-300 text-[11px] font-bold text-slate-700">
              100% Transparan
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[740px] text-xs sm:text-[13px]">
              <thead>
                <tr className="bg-[#0F172A] text-white border-b border-slate-300 divide-x divide-slate-700/80">
                  <th className="py-3.5 px-4 font-bold w-[22%]">Aspek Perbandingan</th>
                  <th className="py-3.5 px-4 font-bold w-[26%]">
                    <span className="text-sky-300 block text-[10px] uppercase tracking-wider font-mono">
                      Pilar 01
                    </span>
                    Modern Web (&lt;0.8s)
                  </th>
                  <th className="py-3.5 px-4 font-bold w-[26%] bg-[#1E3A8A]">
                    <span className="text-sky-200 block text-[10px] uppercase tracking-wider font-mono">
                      Pilar 02 · Terpopuler
                    </span>
                    Custom ERP &amp; SIAKAD
                  </th>
                  <th className="py-3.5 px-4 font-bold w-[26%]">
                    <span className="text-sky-300 block text-[10px] uppercase tracking-wider font-mono">
                      Pilar 03
                    </span>
                    Automasi AI &amp; WhatsApp
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {comparisonRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`divide-x divide-slate-200 transition-colors hover:bg-blue-50/40 ${
                      rIdx % 2 === 1 ? "bg-slate-50/60" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-4 font-bold text-[#0F172A] align-top">
                      {row.aspect}
                    </td>
                    <td className="py-3 px-4 align-top leading-relaxed">
                      {row.web.startsWith("✓") ? (
                        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{row.web.replace("✓ ", "")}</span>
                        </span>
                      ) : (
                        row.web
                      )}
                    </td>
                    <td className="py-3 px-4 align-top leading-relaxed bg-blue-50/25 font-medium text-slate-800">
                      {row.erp.startsWith("✓") ? (
                        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{row.erp.replace("✓ ", "")}</span>
                        </span>
                      ) : (
                        row.erp
                      )}
                    </td>
                    <td className="py-3 px-4 align-top leading-relaxed">
                      {row.aiml.startsWith("✓") ? (
                        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span>{row.aiml.replace("✓ ", "")}</span>
                        </span>
                      ) : (
                        row.aiml
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
