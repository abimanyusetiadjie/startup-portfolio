"use client";

import { CheckCircle2, ShieldCheck, Code2, Clock, Users, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveProcessAndWarrantySection() {
  const { lang } = useLanguage();

  const steps = [
    {
      step: "01",
      timing: lang === "id" ? "Hari 1 – 3" : "Days 1 – 3",
      title: lang === "id" ? "Audit Kebutuhan & Cetak Biru Arsitektur" : "Technical Audit & Architecture Blueprint",
      desc:
        lang === "id"
          ? "Kami membedah alur operasional sekolah atau bisnis Anda, memetakan skema database, dan menyusun spesifikasi kebutuhan sistem dengan nilai investasi tetap (fixed-price)."
          : "We analyze your operational workflows, design the database schema, and deliver a comprehensive fixed-price technical specification.",
    },
    {
      step: "02",
      timing: lang === "id" ? "Minggu 1 – 2" : "Weeks 1 – 2",
      title: lang === "id" ? "Desain Antarmuka & Penyiapan Infrastruktur" : "UI/UX Prototyping & Cloud Infrastructure",
      desc:
        lang === "id"
          ? "Merancang antarmuka yang bersih dan mudah dipakai guru atau staf tata usaha, bersamaan dengan penyiapan kerangka Next.js dan keamanan database PostgreSQL RLS."
          : "Crafting intuitive interfaces tailored for school staff usability alongside Next.js and PostgreSQL RLS security provisioning.",
    },
    {
      step: "03",
      timing: lang === "id" ? "Minggu 2 – 5" : "Weeks 2 – 5",
      title: lang === "id" ? "Pengerjaan Sprint & Pengujian di Client Portal" : "Sprint Execution & Testing on Client Portal",
      desc:
        lang === "id"
          ? "Anda tidak perlu menebak progres. Setiap modul yang selesai dapat langsung diuji di server staging dan dipantau perkembangannya melalui Client Portal resmi."
          : "Inspect weekly feature releases and test live staging deployments directly through your private Abinest Client Portal account.",
    },
    {
      step: "04",
      timing: lang === "id" ? "Minggu 6" : "Week 6",
      title: lang === "id" ? "Migrasi Data, Pelatihan & Serah Terima 100% Kode" : "Data Migration, Training & 100% IP Handover",
      desc:
        lang === "id"
          ? "Kami bantu migrasi data lama (Excel/MySQL), melatih tim Anda hingga mahir, menyerahkan 100% repositori kode sumber Git, dan mengaktifkan garansi resmi."
          : "Automated migration from legacy spreadsheets, hands-on staff training, complete Git repository transfer, and SLA warranty activation.",
    },
  ];

  return (
    <section
      id="alur-kerja"
      className="bg-[#FFFFFF] text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-[#0F766E] uppercase">
            {lang === "id" ? "ALUR KERJA TERSTRUKTUR" : "STRUCTURED DEVELOPMENT PROCESS"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mt-2">
            {lang === "id"
              ? "Proses jelas. Dari rancangan hingga serah terima kode."
              : "A predictable journey from scoping to deployment."}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Setiap proyek dijalankan dengan metodologi sprint yang terukur. Anda memegang kendali penuh atas jadwal, fitur, dan kepemilikan aset perangkat lunak."
              : "Every project follows structured milestones. You maintain full visibility over delivery velocity, features, and source code assets."}
          </p>
        </div>

        {/* 4 Clean Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#0F172A] text-white">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#0F766E]">
                    {item.timing}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-[#0F172A] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-[#0F766E]">
                <span>Deliverable Terverifikasi</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* 3 Contractual Guarantees (Prominent & Real) */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#090D16] text-white p-8 sm:p-12 border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
              {lang === "id" ? "JAMINAN HUKUM & KUALITAS KONTRAK" : "LEGAL & QUALITY ASSURANCE"}
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold mt-2">
              {lang === "id"
                ? "Perlindungan penuh bagi investasi teknologi Anda."
                : "Comprehensive protection for your IT investment."}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm text-zinc-300">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 mb-3">
                <Code2 className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-white">
                {lang === "id" ? "100% Hak Milik Source Code" : "100% Full IP & Code Ownership"}
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Seluruh repositori Git, skema database, dan lisensi diserahkan penuh kepada institusi Anda. Tidak ada biaya sewa lisensi per-siswa atau per-user."
                  : "All Git repositories, database schemas, and licenses belong entirely to your institution with zero per-user SaaS subscription rent."}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-white">
                {lang === "id" ? "Garansi Pemeliharaan 3–6 Bulan" : "3–6 Months Warranty Maintenance"}
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Jaminan perbaikan bug gratis dan pendampingan teknis saat momen puncak operasional seperti minggu ujian sekolah atau tutup buku tahunan."
                  : "Complimentary bug-fixing warranty and standby technical support during mission-critical exam or annual closing periods."}
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400 mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-heading text-base font-bold text-white">
                {lang === "id" ? "Perjanjian Kerahasiaan (NDA) & SLA" : "Official NDA & 99.9% Uptime SLA"}
              </h4>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Setiap proyek diikat dengan kontrak resmi, perjanjian kerahasiaan data siswa/perusahaan (NDA), serta garansi SLA Uptime server 99.9%."
                  : "Every project is legally governed by an official contract, student/corporate NDA privacy agreement, and 99.9% uptime SLA."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
