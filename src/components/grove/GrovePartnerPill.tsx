"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Briefcase, Award, Landmark } from "lucide-react";

export function GrovePartnerPill() {
  const clientInstitutions = [
    {
      name: "PT Logistik Nusantara",
      city: "Jakarta Barat",
      type: "Supply Chain ERP",
      icon: Briefcase,
    },
    {
      name: "PT Finansial Prima Mandiri",
      city: "Jakarta Selatan",
      type: "Fintech Platform",
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
      name: "PT Sentra Distribusi Nasional",
      city: "Jakarta Pusat",
      type: "Multi-Warehouse ERP",
      icon: Landmark,
    },
  ];

  // Double the array for seamless infinite marquee loop
  const duplicatedInstitutions = [...clientInstitutions, ...clientInstitutions];

  return (
    <section className="py-4 sm:py-5 relative bg-[#F8FAFC] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 mb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-700">
            Terverifikasi di Produksi Klien
          </p>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Dipercaya 25+ Perusahaan Distribusi, Logistik, Retail &amp; Finansial
        </p>
      </div>

      {/* Fluid Dynamic Marquee Track with Gradient Fades */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 26,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-3 w-max hover:[animation-play-state:paused]"
        >
          {duplicatedInstitutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-[0_1px_4px_rgba(15,23,42,0.03)] hover:border-blue-400 hover:shadow-sm transition-all duration-150 cursor-default shrink-0"
              >
                <div className="w-5 h-5 rounded-md bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Icon className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
                  {item.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-300" />
                <span className="text-[11px] text-blue-600 font-medium whitespace-nowrap">
                  {item.type}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block ml-0.5" title="Aktif di Produksi" />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
