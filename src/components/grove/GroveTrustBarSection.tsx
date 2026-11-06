"use client";

import { useLanguage } from "@/context/LanguageContext";

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
    <section id="trust-bar" className="bg-white text-slate-900 py-12 sm:py-16 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. TOP METRICS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-slate-100">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight ${
                    m.highlight ? "text-[#0F766E]" : "text-[#0F172A]"
                  }`}
                >
                  {m.value}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                {m.label}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
                {m.sub}
              </p>
            </div>
          ))}
        </div>

        {/* 2. CLIENT TRUST & INSTITUTION LOGO STRIP */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="shrink-0 space-y-0.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0F766E] font-bold block">
              SOCIAL PROOF
            </span>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {lang === "id"
                ? "Dipercaya oleh yayasan pendidikan, sekolah, dan bisnis di Indonesia:"
                : "Trusted by educational foundations, schools, and enterprises in Indonesia:"}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {clientInstitutions.map((c, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0F766E]/40 hover:bg-white transition-all flex items-center gap-2.5 group shadow-2xs"
              >
                <div className="w-2 h-2 rounded-full bg-[#10B981] group-hover:scale-125 transition-transform" />
                <div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#0F766E] transition-colors block leading-tight">
                    {c.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block leading-none mt-0.5">
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
