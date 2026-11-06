"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Search, Compass, Code2, Rocket, Headphones } from "lucide-react";

export function GroveWorkflowSection() {
  const { lang } = useLanguage();

  const steps = [
    {
      num: "01",
      icon: Search,
      title: lang === "id" ? "Discovery & Analisis Kebutuhan" : "Discovery & Technical Scoping",
      desc:
        lang === "id"
          ? "Kami mendengarkan alur kerja institusi Anda, memetakan beban pengguna puncak (peak load), dan mengidentifikasi bottleneck operasional yang ingin diselesaikan."
          : "We map your institutional workflows, identify peak traffic bottlenecks, and define the core technical requirements without jargon.",
    },
    {
      num: "02",
      icon: Compass,
      title: lang === "id" ? "Desain & Arsitektur Sistem" : "Architecture & Database Design",
      desc:
        lang === "id"
          ? "Menyusun skema database terisolasi (PostgreSQL RLS), arsitektur anti-down, dan wireframe antarmuka yang ramah pengguna sebelum baris kode pertama ditulis."
          : "We engineer decoupled database schemas, anti-crash queue models, and high-fidelity wireframes before writing production code.",
    },
    {
      num: "03",
      icon: Code2,
      title: lang === "id" ? "Development & Sprint Testing" : "Modular Development & Testing",
      desc:
        lang === "id"
          ? "Pembangunan bertahap dengan update transparan di Client Portal Anda. Dilengkapi uji beban ekstrem (stress testing) simulasi ribuan siswa serentak."
          : "Iterative sprints tracked live in your Client Portal. We conduct extreme load simulations to guarantee resilience under exam traffic.",
    },
    {
      num: "04",
      icon: Rocket,
      title: lang === "id" ? "Go-Live & Pelatihan Pengguna" : "Go-Live & Comprehensive Training",
      desc:
        lang === "id"
          ? "Peluncuran sistem didampingi langsung oleh teknisi senior. Kami memberikan pelatihan lengkap dan buku panduan untuk guru, staf tata usaha, dan admin."
          : "Production rollout backed by on-site/remote senior engineers, including hands-on onboarding sessions for teachers and admin staff.",
    },
    {
      num: "05",
      icon: Headphones,
      title: lang === "id" ? "Support & Garansi SLA 99.9%" : "Continuous SLA Support & Evolution",
      desc:
        lang === "id"
          ? "Pemantauan server 24/7 dengan garansi SLA uptime 99.9%. Kami siap mendampingi pengembangan modul dan fitur baru seiring institusi Anda bertumbuh."
          : "24/7 automated telemetry monitoring with 99.9% uptime SLA guarantee, continuous security patches, and incremental feature additions.",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#0F766E]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
              {lang === "id" ? "ALUR KERJA TERSTRUKTUR" : "HOW WE WORK"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            {lang === "id"
              ? "Bagaimana kami bekerja bersama Anda."
              : "How we collaborate to build your system."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {lang === "id"
              ? "Proses rekayasa bertahap yang transparan, terukur, dan membebaskan Anda dari kekhawatiran teknis."
              : "A predictable, transparent engineering process designed to eliminate project surprises and technical debt."}
          </p>
        </div>

        {/* 5-Step Linear Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0F766E]/40 hover:bg-white shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                    <span className="font-mono text-xs text-[#0F766E] font-bold">
                      TAHAP {st.num}
                    </span>
                    <Icon className="h-4 w-4 text-slate-400 group-hover:text-[#0F766E] transition-colors" />
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
