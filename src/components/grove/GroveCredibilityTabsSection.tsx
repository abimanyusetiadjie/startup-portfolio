"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  GitBranch,
  HelpCircle,
  CheckCircle2,
  Quote,
  ArrowUpRight,
  ChevronDown,
  ShieldCheck,
  Database,
  Code2,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type CredibilityTab = "case-studies" | "workflow" | "faq";

export function GroveCredibilityTabsSection() {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<CredibilityTab>("case-studies");
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  const tabs = [
    {
      id: "case-studies" as CredibilityTab,
      icon: Award,
      label:
        lang === "id"
          ? "Studi Kasus & Testimoni"
          : "Case Studies & Testimonials",
    },
    {
      id: "workflow" as CredibilityTab,
      icon: GitBranch,
      label:
        lang === "id"
          ? "4 Langkah Kerja Kami"
          : "How We Work (4 Steps)",
    },
    {
      id: "faq" as CredibilityTab,
      icon: HelpCircle,
      label:
        lang === "id"
          ? "FAQ & Jaminan Garansi"
          : "FAQ & SLA Warranty",
    },
  ];

  const caseStudies = [
    {
      client: "SMA Unggulan Al-Hikmah & Yayasan Bina Insan",
      category: lang === "id" ? "SIAKAD & Ujian CBT 1.240 Siswa" : "School SIS & 1,240-Student CBT",
      problem:
        lang === "id"
          ? "Server SIAKAD lama selalu mengalami Error 502 (crash) saat ribuan siswa login ujian akhir semester bersamaan dan proses cetak rapor PDF memakan waktu berhari-hari."
          : "Legacy server repeatedly crashed (502 Bad Gateway) during simultaneous semester exams and report card printing froze the database.",
      solution:
        lang === "id"
          ? "Migrasi penuh ke Next.js 15 App Router, isolasi database PostgreSQL RLS, serta pemisahan mesin cetak rapor PDF ke Dedicated Cloud Worker."
          : "Re-architected with Next.js 15, PostgreSQL RLS, and an isolated background PDF Cloud Worker queue.",
      results: [
        lang === "id" ? "0% Server Down saat 1.240 siswa ujian serentak" : "0% downtime during 1,240 concurrent exams",
        lang === "id" ? "540 Rapor PDF selesai dicetak dalam 38 detik" : "540 PDF report cards generated in 38 seconds",
        lang === "id" ? "Tunggakan SPP turun 42% berkat pengingat WA otomatis" : "42% faster tuition collection via automated WA reminders",
      ],
    },
    {
      client: "Mitra Retail Nusantara & Global Logistics B2B",
      category: lang === "id" ? "Custom ERP & Otomasi WhatsApp" : "Omnichannel ERP & WA Billing",
      problem:
        lang === "id"
          ? "Selisih stok barang antar 5 gudang cabang yang sering tidak sinkron dan pengiriman tagihan B2B manual yang lambat serta rawan nomor WA terblokir."
          : "Frequent inventory discrepancies across 5 branches and manual WhatsApp invoicing prone to number bans.",
      solution:
        lang === "id"
          ? "Pembangunan Custom ERP Ledger terpusat dengan sinkronisasi real-time dan integrasi resmi Meta Cloud API menggunakan antrean QStash."
          : "Built a centralized real-time ERP ledger integrated with official Meta Cloud API and QStash message queues.",
      results: [
        lang === "id" ? "0% Selisih stok antar 5 cabang & gudang utama" : "0% inventory drift across 5 branch warehouses",
        lang === "id" ? "Pengiriman invoice WA otomatis < 1.8 detik (0% Banned)" : "< 1.8s automated WA invoice dispatch (0% number ban)",
        lang === "id" ? "Hemat Rp 36 Jt/tahun dari biaya sewa SaaS per-user" : "Saved $2,400/yr in per-seat SaaS subscription fees",
      ],
    },
  ];

  const testimonials = [
    {
      initials: "AF",
      name: "Drs. H. Ahmad Fauzi, M.Pd.",
      role:
        lang === "id"
          ? "Ketua Yayasan Pendidikan Bina Insan"
          : "Chairman, Bina Insan Education Foundation",
      quote:
        lang === "id"
          ? "Sebelumnya setiap musim ujian semester, tim TU dan IT kami selalu was-was karena server lama sering macet. Sejak beralih ke arsitektur SIAKAD Abinest, 1.200 lebih siswa ujian serentak berjalan sangat mulus dan orang tua menerima tagihan SPP tepat waktu."
          : "Previously, every exam week caused panic due to server crashes. Since migrating to Abinest's SIAKAD, 1,200+ students take exams simultaneously without a single hiccup.",
    },
    {
      initials: "HW",
      name: "Hendra Wijaya, S.T.",
      role:
        lang === "id"
          ? "Direktur Operasional, Mitra Retail Nusantara"
          : "Operations Director, Mitra Retail Nusantara",
      quote:
        lang === "id"
          ? "Yang paling membuat kami percaya pada Abinest adalah transparansi progres di Client Portal dan serah terima 100% source code. Kami memiliki aset sistem sendiri tanpa tercekik biaya langganan bulanan per pengguna."
          : "What impressed us most is the live transparency in the Client Portal and 100% source code handover. We own our software outright with zero monthly per-seat fees.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      icon: Database,
      duration: lang === "id" ? "Hari 1 – 3" : "Days 1 – 3",
      title: lang === "id" ? "Audit Kebutuhan & Rancangan Arsitektur" : "Technical Discovery & Architecture Blueprint",
      desc:
        lang === "id"
          ? "Kami membedah alur operasional sekolah/bisnis Anda, merancang skema database, dan menyusun dokumen spesifikasi serta rincian biaya tetap (fixed-price) tanpa biaya tersembunyi."
          : "We audit your operational bottlenecks, design the database schema, and provide a fixed-price technical specification with zero hidden fees.",
    },
    {
      step: "02",
      icon: Code2,
      duration: lang === "id" ? "Minggu 1 – 2" : "Weeks 1 – 2",
      title: lang === "id" ? "Desain UI/UX & Setup Infrastruktur Cloud" : "UI/UX Prototyping & Cloud Provisioning",
      desc:
        lang === "id"
          ? "Pembuatan desain antarmuka yang ramah pengguna (mudah dipakai guru/staf senior) sekaligus penyiapan kerangka Next.js 15 & keamanan PostgreSQL RLS."
          : "Interactive UI/UX prototyping tailored for staff usability alongside Next.js 15 and PostgreSQL RLS security provisioning.",
    },
    {
      step: "03",
      icon: ShieldCheck,
      duration: lang === "id" ? "Minggu 2 – 5" : "Weeks 2 – 5",
      title: lang === "id" ? "Eksekusi Sprint & Pantau Live di Client Portal" : "Transparent Sprint Execution via Client Portal",
      desc:
        lang === "id"
          ? "Anda tidak perlu menebak progres. Melalui akun Client Portal resmi, Anda dapat mencoba langsung fitur yang selesai di staging server setiap minggu."
          : "Track weekly sprint completions and test live staging deployments directly inside your dedicated Abinest Client Portal.",
    },
    {
      step: "04",
      icon: Rocket,
      duration: lang === "id" ? "Minggu 6" : "Week 6",
      title: lang === "id" ? "Migrasi Data, Pelatihan & Serah Terima 100% Kode" : "Data Migration, Training & 100% IP Handover",
      desc:
        lang === "id"
          ? "Kami bantu migrasi data lama (Excel/MySQL), melatih tim Anda hingga mahir, menyerahkan 100% source code Git, dan mengaktifkan garansi SLA Uptime 99.9%."
          : "Automated migration from legacy Excel/MySQL data, staff onboarding, full Git repository transfer, and 99.9% SLA warranty activation.",
    },
  ];

  const faqs = [
    {
      q:
        lang === "id"
          ? "Berapa lama waktu pengerjaan Website atau sistem SIAKAD / ERP?"
          : "How long does it take to build a Corporate Website or SIAKAD / ERP system?",
      a:
        lang === "id"
          ? "Untuk Website Institusi/Korporat Next.js 15 rata-rata selesai dalam 2–3 minggu. Untuk sistem skala menengah-besar seperti SIAKAD Sekolah atau Custom ERP berkisar antara 4–8 minggu, dengan rilis modul bertahap setiap minggu yang bisa langsung diuji di Client Portal."
          : "High-performance Next.js 15 websites take 2–3 weeks. Comprehensive SIAKAD or custom ERP systems take 4–8 weeks with weekly staging releases visible in our Client Portal.",
    },
    {
      q:
        lang === "id"
          ? "Apakah bisa migrasi data siswa, keuangan, atau stok dari Excel / sistem lama?"
          : "Can you migrate our existing student, financial, or inventory data from Excel or legacy systems?",
      a:
        lang === "id"
          ? "Sangat bisa. Tim engineer kami menyiapkan skrip migrasi otomatis (ETL pipeline) untuk memindahkan data dari file Excel, CSV, maupun database MySQL/PHP lama sehingga staf Anda tidak perlu menginput ulang dari nol."
          : "Yes. Our engineers build automated ETL migration scripts to import your existing Excel sheets, CSVs, or legacy MySQL/PHP databases cleanly without manual re-entry.",
    },
    {
      q:
        lang === "id"
          ? "Apakah source code benar-benar menjadi milik institusi kami 100%?"
          : "Do we genuinely get 100% source code and IP ownership?",
      a:
        lang === "id"
          ? "Ya, 100% milik Anda (Full IP Ownership). Setelah pelunasan proyek, seluruh repositori Git, skema database, dan dokumentasi diserahkan penuh kepada institusi Anda. Tidak ada biaya sewa bulanan per-siswa atau per-user."
          : "Yes, 100% Full IP Ownership. Upon project completion, the entire Git repository, database schema, and documentation are transferred to your organization with zero per-user SaaS rent.",
    },
    {
      q:
        lang === "id"
          ? "Bagaimana dengan garansi dan dukungan teknis setelah sistem Go-Live?"
          : "What kind of technical support and warranty do we get after Go-Live?",
      a:
        lang === "id"
          ? "Setiap proyek dilengkapi Garansi Pemeliharaan & Bug-Fixing Gratis selama 3 hingga 6 bulan pertama serta jaminan SLA Uptime 99.9%. Tim kami juga siap mendampingi secara langsung saat momen krusial seperti minggu ujian sekolah atau tutup buku."
          : "Every system includes 3 to 6 months of complimentary warranty maintenance, 99.9% uptime SLA monitoring, and dedicated standby support during peak exam or closing periods.",
    },
  ];

  return (
    <section
      id="bantuan"
      className="bg-[#F8FAFC] text-slate-900 py-14 sm:py-20 font-sans border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Header & Interactive Tab Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-[#0F766E]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
                {lang === "id"
                  ? "BUKTI NYATA, ALUR KERJA & BANTUAN"
                  : "PROVEN TRACK RECORD, PROCESS & FAQ"}
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
              {lang === "id"
                ? "Rekam jejak terukur & proses transparan."
                : "Verified results & predictable engineering."}
            </h2>
          </div>

          {/* 3-Tab Switcher (Zero Dead Scroll) */}
          <div
            role="tablist"
            aria-label="Informasi Kredibilitas dan Bantuan"
            className="inline-flex flex-wrap p-1.5 rounded-2xl bg-slate-200/80 border border-slate-300/80 gap-1"
          >
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0F172A] text-white shadow-md"
                      : "text-slate-600 hover:text-[#0F172A] hover:bg-white/60"
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-emerald-400" : "text-slate-500"
                    }`}
                  />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* TAB CONTENT PANELS */}
        <AnimatePresence mode="wait">
          {activeTab === "case-studies" && (
            <motion.div
              key="case-studies"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* 2 Case Study Cards (Problem -> Solusi -> Hasil Kuantitatif) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {caseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0F766E] bg-[#F0FDFA] border border-[#CCFBF1] px-3 py-1 rounded-full">
                          {cs.category}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          STUDI KASUS #{idx + 1}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0F172A] mb-4">
                        {cs.client}
                      </h3>

                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200/60">
                          <span className="font-bold text-rose-900 block mb-0.5">
                            {lang === "id" ? "Kendala Sebelumnya:" : "The Challenge:"}
                          </span>
                          <p className="text-slate-700 leading-relaxed">{cs.problem}</p>
                        </div>

                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                          <span className="font-bold text-slate-900 block mb-0.5">
                            {lang === "id" ? "Solusi Arsitektur Abinest:" : "Abinest Architecture:"}
                          </span>
                          <p className="text-slate-700 leading-relaxed">{cs.solution}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quantitative Outcomes */}
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#0F766E] font-bold block mb-2.5">
                        {lang === "id" ? "HASIL TERUKUR DI LAPANGAN:" : "MEASURABLE IMPACT:"}
                      </span>
                      <div className="space-y-1.5">
                        {cs.results.map((res, rIdx) => (
                          <div
                            key={rIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A]"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 2 Verified Client Testimonials Strip */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {testimonials.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#0F172A] text-white p-6 border border-slate-800 flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <Quote className="w-6 h-6 text-emerald-400 shrink-0 opacity-80" />
                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-xs flex items-center justify-center">
                          {item.initials}
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-white">
                            {item.name}
                          </div>
                          <div className="text-[11px] text-emerald-400">
                            {item.role}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/10 text-zinc-300">
                        Verified Client
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "workflow" && (
            <motion.div
              key="workflow"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {workflowSteps.map((wf) => {
                const Icon = wf.icon;
                return (
                  <div
                    key={wf.step}
                    className="rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#0F172A] text-emerald-400">
                          TAHAP {wf.step}
                        </span>
                        <span className="text-xs font-mono text-[#0F766E] font-semibold">
                          {wf.duration}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-[#F0FDFA] border border-[#CCFBF1] text-[#0F766E] flex items-center justify-center mb-3.5">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="font-heading text-base sm:text-lg font-bold text-[#0F172A] mb-2">
                        {wf.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {wf.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-[#0F766E]">
                      <span>Deliverable Terverifikasi</span>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
            >
              <div className="lg:col-span-8 space-y-3">
                {faqs.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                        className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                      >
                        <span className="font-heading text-sm sm:text-base font-bold text-[#0F172A]">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#0F766E] shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Guarantee Summary Box */}
              <div className="lg:col-span-4 rounded-2xl bg-[#0F172A] text-white p-6 border border-slate-800 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>GARANSI RESMI KONTRAK</span>
                </div>
                <h3 className="font-heading text-lg font-bold">
                  {lang === "id"
                    ? "Perlindungan Penuh Investasi Teknologi Anda"
                    : "Complete Protection for Your IT Investment"}
                </h3>
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {lang === "id"
                        ? "Perjanjian Kerahasiaan Data (NDA) & Kontrak Resmi"
                        : "Official NDA & SLA Contract Protection"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {lang === "id"
                        ? "Serah Terima 100% Repository Kode & Database"
                        : "100% Source Code & Schema Handover"}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>
                      {lang === "id"
                        ? "Garansi Perbaikan Bug Gratis 3–6 Bulan Pasca Rilis"
                        : "3–6 Months Free Post-Launch Bug Warranty"}
                    </span>
                  </li>
                </ul>
                <a
                  href="#konsultasi"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-400 text-zinc-950 font-bold text-xs hover:bg-emerald-300 transition-colors"
                >
                  <span>
                    {lang === "id"
                      ? "Tanyakan Kebutuhan Spesifik Anda"
                      : "Ask a Specific Question"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
