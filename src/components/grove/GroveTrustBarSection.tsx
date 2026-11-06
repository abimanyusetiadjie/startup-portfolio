"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Activity, Users, Zap, CheckCircle2 } from "lucide-react";

export function GroveTrustBarSection() {
  const { lang } = useLanguage();

  const metrics = [
    {
      value: "18+",
      label: lang === "id" ? "Sistem Aktif Beroperasi" : "Active Production Systems",
      sub: lang === "id" ? "Sekolah, Yayasan & B2B" : "Schools & B2B Enterprises",
    },
    {
      value: "99.9%",
      label: lang === "id" ? "Uptime Sejak 2024" : "Uptime SLA Since 2024",
      sub: lang === "id" ? "Jaminan tanpa downtime" : "Zero downtime guarantee",
      highlight: true,
    },
    {
      value: "0%",
      label: lang === "id" ? "Server Crash Peak Season" : "Peak Season Crash Rate",
      sub: lang === "id" ? "Ujian & pembagian rapor" : "Concurrent exams & reports",
    },
    {
      value: "< 2s",
      label: lang === "id" ? "Pengiriman WhatsApp API" : "WhatsApp API Dispatch",
      sub: lang === "id" ? "Otomatis tagihan SPP" : "Automated tuition alerts",
    },
  ];

  const clientInstitutions = [
    { name: "Yayasan Pendidikan Mandiri", type: "Yayasan & Sekolah Swasta" },
    { name: "SMA Unggulan Al-Hikmah", type: "Institusi Pendidikan" },
    { name: "Mitra Retail Nusantara", type: "Enterprise Omnichannel ERP" },
    { name: "Global Logistics Hub", type: "Sistem Inventori B2B" },
    { name: "Pesantren Bina Insan", type: "SIAKAD & Billing SPP" },
  ];

  return (
    <section id="trust-bar" className="bg-[#0F1219] text-white py-12 sm:py-16 font-sans border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. TOP METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-white/10">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
                  m.highlight ? "text-emerald-400" : "text-white"
                }`}>
                  {m.value}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-semibold text-zinc-200">
                {m.label}
              </h4>
              <p className="text-[11px] sm:text-xs text-zinc-400 font-mono">
                {m.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 2. CLIENT TRUST & INSTITUTION LOGO STRIP */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="shrink-0 space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-emerald-400 font-semibold block">
              SOCIAL PROOF
            </span>
            <p className="text-xs text-zinc-400">
              {lang === "id"
                ? "Dipercaya oleh yayasan pendidikan, sekolah, dan bisnis di Indonesia:"
                : "Trusted by educational foundations, schools, and enterprises in Indonesia:"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {clientInstitutions.map((c, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-emerald-500/30 transition-colors flex items-center gap-2 group"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400/80 group-hover:scale-125 transition-transform" />
                <div>
                  <span className="text-xs font-semibold text-zinc-200 group-hover:text-white transition-colors block leading-tight">
                    {c.name}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 block leading-none mt-0.5">
                    {c.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
