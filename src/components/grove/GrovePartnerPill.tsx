"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Briefcase, Award, Landmark, CheckCircle2 } from "lucide-react";

export function GrovePartnerPill() {
  const verifiedDeployments = [
    {
      sector: "Distribusi Multi-Gudang",
      metric: "18.000+ SKU",
      badge: "SLA 99.9%",
      icon: Briefcase,
    },
    {
      sector: "Institusi Pendidikan & SIAKAD",
      metric: "1.240 Siswa Serentak",
      badge: "Anti-Down",
      icon: Award,
    },
    {
      sector: "Fintech & Otomasi Dokumen",
      metric: "10.000+ Faktur/Bln",
      badge: "Akurasi 99.7%",
      icon: Building2,
    },
    {
      sector: "Manufaktur & SCM",
      metric: "Mutasi Multi-Pabrik",
      badge: "100% Hak Milik",
      icon: ShieldCheck,
    },
    {
      sector: "Retail Omnichannel POS",
      metric: "42 Cabang Realtime",
      badge: "Rp 0 Lisensi",
      icon: Landmark,
    },
    {
      sector: "Klinik & Healthcare",
      metric: "Asisten WA 24/7",
      badge: "Meta Cloud API",
      icon: ShieldCheck,
    },
    {
      sector: "Rantai Pasok & Logistik",
      metric: "Zero Latensi Data",
      badge: "PostgreSQL Pool",
      icon: Briefcase,
    },
    {
      sector: "Yayasan Akademik",
      metric: "600 Rapor PDF / 4 Mnt",
      badge: "Auto-Failover",
      icon: Award,
    },
  ];

  // Double the array for seamless infinite marquee loop
  const duplicated = [...verifiedDeployments, ...verifiedDeployments];

  return (
    <section className="py-3 sm:py-3.5 relative bg-white border-b border-slate-200/70 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 mb-2 flex items-center justify-between text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
          <p className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-slate-600">
            Terverifikasi di Produksi Klien
          </p>
        </div>
        <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
          Dipercaya 25+ Perusahaan Distribusi, Sekolah, Retail &amp; Finansial
        </p>
      </div>

      {/* Edge Blur Gradients for Smooth Seamless Entry/Exit */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

      {/* Single Sleek Marquee Track */}
      <motion.div
        className="flex items-center gap-2.5 w-max py-0.5"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 34,
        }}
      >
        {duplicated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50/90 hover:bg-blue-50/60 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 shrink-0 text-xs"
            >
              <div className="w-4 h-4 rounded-full bg-blue-100/80 text-blue-700 flex items-center justify-center shrink-0">
                <Icon className="w-2.5 h-2.5" />
              </div>
              <span className="font-semibold text-slate-800 text-[11.5px] whitespace-nowrap">
                {item.sector}
              </span>
              <span className="text-slate-300 text-[10px]">·</span>
              <span className="text-[10.5px] text-slate-500 font-medium whitespace-nowrap">
                {item.metric}
              </span>
              <span className="px-1.5 py-0.2 rounded text-[9.5px] font-bold bg-blue-50 text-blue-700 border border-blue-200/80 whitespace-nowrap">
                {item.badge}
              </span>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
