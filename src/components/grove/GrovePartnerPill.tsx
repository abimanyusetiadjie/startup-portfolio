"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Briefcase, Award, Landmark, CheckCircle2 } from "lucide-react";

export function GrovePartnerPill() {
  const clientSectors = [
    {
      sector: "Distribusi & Multi-Gudang",
      metric: "18.000+ SKU · 4 Cabang Terhubung",
      badge: "SLA 99.9% Uptime",
      icon: Briefcase,
    },
    {
      sector: "Institusi Pendidikan & SIAKAD",
      metric: "1.240 Siswa Ujian Serentak · Zero Crash",
      badge: "SIAKAD Anti-Down",
      icon: Award,
    },
    {
      sector: "Fintech & Otomasi Dokumen",
      metric: "10.000+ Faktur/Bulan · Akurasi 99.7%",
      badge: "Document AI OCR",
      icon: Building2,
    },
    {
      sector: "Manufaktur & SCM",
      metric: "Multi-Pabrik · Otomasi Mutasi Stok",
      badge: "100% Hak Milik Kode",
      icon: ShieldCheck,
    },
    {
      sector: "Retail Omnichannel POS",
      metric: "42 Cabang Kasir Terintegrasi Real-Time",
      badge: "Zero Lisensi Bulanan",
      icon: Landmark,
    },
    {
      sector: "Klinik Medika & Healthcare",
      metric: "Rekam Medis & Asisten WA Booking 24/7",
      badge: "Meta Cloud API Resmi",
      icon: ShieldCheck,
    },
  ];

  // Double the array for seamless infinite marquee loop
  const duplicatedSectors = [...clientSectors, ...clientSectors];

  return (
    <section className="py-4 sm:py-5 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">
            Terverifikasi di Lingkungan Produksi Klien
          </p>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Dipercaya 25+ Perusahaan Distribusi, Institusi Pendidikan, Retail &amp; Finansial
        </p>
      </div>

      {/* Edge Blur Gradients */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10" />

      {/* Infinite Horizontal Running Track */}
      <motion.div
        className="flex items-center gap-3 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 38,
        }}
      >
        {duplicatedSectors.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all shrink-0"
            >
              <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0 border border-blue-100">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap">
                    {item.sector}
                  </span>
                  <span className="px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 text-[9.5px] font-semibold border border-blue-200 whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">
                  {item.metric}
                </span>
              </div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
