"use client";

import { motion } from "framer-motion";
import { Building2, GraduationCap, ShieldCheck, Briefcase, Award, Landmark, CheckCircle } from "lucide-react";

export function GrovePartnerPill() {
  const clientInstitutions = [
    {
      name: "PT Logistik Nusantara",
      city: "Jakarta Barat",
      type: "Supply Chain & Fleet ERP",
      icon: Briefcase,
    },
    {
      name: "PT Finansial Prima Mandiri",
      city: "Jakarta Selatan",
      type: "Fintech Web Platform",
      icon: Building2,
    },
    {
      name: "PT Sentosa Manufaktur Global",
      city: "Surabaya",
      type: "Custom ERP & Inventory",
      icon: ShieldCheck,
    },
    {
      name: "Medika AI Diagnostik",
      city: "Tangerang Selatan",
      type: "Document AI & OCR",
      icon: Award,
    },
    {
      name: "PT Retail Multi-Cabang",
      city: "Surabaya",
      type: "Omnichannel POS & ML",
      icon: Landmark,
    },
    {
      name: "Yayasan Pendidikan Bina Insani",
      city: "Jakarta",
      type: "Digital Portal & Web",
      icon: GraduationCap,
    },
  ];

  // Double the array for seamless infinite marquee loop
  const duplicatedInstitutions = [...clientInstitutions, ...clientInstitutions];

  return (
    <section className="py-7 relative bg-[#F8FAFC] border-y border-slate-200/70 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Terverifikasi di Produksi Klien
          </p>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          20+ Institusi Pendidikan, Yayasan &amp; Perusahaan Nasional
        </p>
      </div>

      {/* Fluid Dynamic Marquee Track with Gradient Fades */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-4 w-max hover:[animation-play-state:paused]"
        >
          {duplicatedInstitutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:border-emerald-300 hover:shadow-md transition-all duration-200 cursor-default shrink-0"
              >
                <div className="w-8 h-8 rounded-xl bg-slate-100/90 flex items-center justify-center text-slate-600 group-hover:bg-emerald-50 group-hover:text-[#064E3B] transition-colors shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="pr-1">
                  <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#064E3B] transition-colors whitespace-nowrap">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5 whitespace-nowrap">
                    <span>{item.city}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-emerald-700 font-semibold">{item.type}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
