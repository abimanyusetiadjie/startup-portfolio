"use client";

import { Building2, GraduationCap, ShieldCheck, Briefcase, Award, Landmark } from "lucide-react";

export function GrovePartnerPill() {
  const clientInstitutions = [
    {
      name: "SMA Islam Terpadu Al-Hikmah",
      city: "Surabaya",
      icon: GraduationCap,
    },
    {
      name: "Yayasan Pendidikan Bina Insani",
      city: "Jakarta Selatan",
      icon: Landmark,
    },
    {
      name: "PT Maju Bersama Distribusi",
      city: "Jakarta Barat",
      icon: Briefcase,
    },
    {
      name: "Klinik Utama & Medika Nusantara",
      city: "Tangerang Selatan",
      icon: ShieldCheck,
    },
    {
      name: "SMK Teknologi & Industri Karya",
      city: "Sidoarjo",
      icon: Award,
    },
    {
      name: "CV Sentosa Retail Multi-Cabang",
      city: "Surabaya",
      icon: Building2,
    },
  ];

  return (
    <section className="py-10 relative bg-[#FAF9F6] border-b border-slate-200/70">
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 flex flex-col items-center">
        {/* Trust Headline */}
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-slate-500 text-center mb-6">
          Dipercaya oleh 20+ Sekolah, Yayasan, dan UMKM di Jakarta, Surabaya &amp; Sekitarnya
        </p>

        {/* Grayscale Client Emblem Bar */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {clientInstitutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/80 border border-slate-200/80 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 hover:border-slate-300 transition-all duration-300 shadow-[0_2px_10px_rgba(15,23,42,0.02)]"
              >
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 group-hover:bg-orange-50 group-hover:text-[#C2672B] transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-medium text-slate-500">
                    {item.city}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
