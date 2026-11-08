"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface CaseStudyItem {
  id: string;
  tabTitle: string;
  client: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
  quote: string;
  author: string;
  authorRole: string;
}

export function GroveCaseStudyTabsSection() {
  const { lang } = useLanguage();
  const [activeTabId, setActiveTabId] = useState("siakad");

  const caseStudies: CaseStudyItem[] = [
    {
      id: "siakad",
      tabTitle: lang === "id" ? "SIAKAD & CBT 1.200 Siswa" : "School SIS & CBT Exams",
      client: "SMA Unggulan Al-Hikmah & Yayasan Bina Insan",
      category: lang === "id" ? "SISTEM AKADEMIK & UJIAN" : "ACADEMIC & EXAM SYSTEM",
      image: "/images/projects/siakad-dashboard.svg",
      problem:
        lang === "id"
          ? "Server ujian lama selalu mengalami error 502 Bad Gateway saat 1.000+ siswa login bersamaan, dan proses cetak rapor PDF memakan waktu berhari-hari hingga database terkunci."
          : "Legacy exam server repeatedly crashed under concurrent exam logins, and manual semester report card generation locked the main database for days.",
      solution:
        lang === "id"
          ? "Migrasi menyeluruh ke Next.js 15 dengan isolasi database PostgreSQL RLS dan pemisahan antrean cetak rapor PDF ke background worker terpisah."
          : "Engineered a decoupled Next.js 15 architecture backed by PostgreSQL RLS security and dedicated background cloud PDF workers.",
      results: [
        lang === "id" ? "0% Server Down saat 1.240 siswa ujian serentak" : "0% downtime during 1,240 concurrent exams",
        lang === "id" ? "540 Rapor PDF selesai dicetak dalam 38 detik" : "540 PDF report cards generated in 38 seconds",
        lang === "id" ? "Tunggakan SPP terpangkas 42% berkat notifikasi WA otomatis" : "42% faster tuition collection via automated WA reminders",
      ],
      quote:
        lang === "id"
          ? "Ujian serentak 1.200 lebih siswa berjalan sangat mulus tanpa ada komplain server macet dari orang tua maupun pengawas ujian."
          : "1,200+ students completed exams concurrently without a single server lag complaint.",
      author: "Drs. H. Ahmad Fauzi, M.Pd.",
      authorRole: lang === "id" ? "Ketua Yayasan Pendidikan Bina Insan" : "Chairman, Bina Insan Foundation",
    },
    {
      id: "website",
      tabTitle: lang === "id" ? "Website Institusi Next.js 15" : "High-Speed Corporate Web",
      client: "Yayasan Pendidikan Bina Insan",
      category: lang === "id" ? "WEB ARSITEKTUR & BRANDING" : "WEB ARCHITECTURE & SEO",
      image: "/images/projects/corporate-web.svg",
      problem:
        lang === "id"
          ? "Website lama lambat dimuat (> 5 detik di smartphone), struktur SEO buruk sehingga tidak ditemukan calon wali murid, dan formulir pendaftaran PPDB sering error."
          : "Legacy school website took over 5 seconds to load on mobile, lacked modern SEO structure, and online admission forms frequently failed.",
      solution:
        lang === "id"
          ? "Membangun ulang website dengan Next.js 15 Edge Runtime, optimasi aset gambar otomatis WebP/AVIF, dan integrasi pendaftaran PPDB online langsung ke WhatsApp admin."
          : "Rebuilt with Next.js 15 Edge Runtime, automatic WebP/AVIF asset compression, and end-to-end encrypted admission workflows.",
      results: [
        lang === "id" ? "Skor Performa Google Lighthouse 100/100" : "Perfect 100/100 Google Lighthouse score",
        lang === "id" ? "Kecepatan muat halaman 0.6 detik (LCP)" : "Sub-second 0.6s Largest Contentful Paint",
        lang === "id" ? "Lonjakan pendaftar siswa baru online sebesar 65%" : "65% increase in online student admissions",
      ],
      quote:
        lang === "id"
          ? "Tampilan website sangat berwibawa, loadingnya secepat kilat, dan calon wali murid merasa sangat mudah mendaftar lewat smartphone."
          : "The website feels executive and loads instantly on every parent's smartphone.",
      author: "H. Mustofa Kamal, S.E.",
      authorRole: lang === "id" ? "Kepala Hubungan Masyarakat & PPDB" : "Head of Admissions & PR",
    },
    {
      id: "erp",
      tabTitle: lang === "id" ? "ERP Stok Multi-Cabang" : "Omnichannel Retail ERP",
      client: "Mitra Retail Nusantara & Global Logistics",
      category: lang === "id" ? "SISTEM INVENTORI B2B" : "ENTERPRISE INVENTORY & POS",
      image: "/images/projects/omnichannel-hub.svg",
      problem:
        lang === "id"
          ? "Selisih data stok fisik antar 5 cabang toko ritel yang sering tidak sinkron dan ketergantungan biaya langganan software per-user yang terus membengkak setiap tahun."
          : "Persistent inventory discrepancies between 5 branch stores and high recurring per-user SaaS license fees.",
      solution:
        lang === "id"
          ? "Custom ERP terpusat dengan sinkronisasi real-time antar toko, kasir POS kasir cepat, dan skema beli putus tanpa biaya sewa lisensi per-pengguna."
          : "Centralized real-time inventory ledger and retail POS system delivered under 100% full source code ownership.",
      results: [
        lang === "id" ? "0% Selisih stok barang antar 5 cabang toko" : "Zero inventory drift across 5 retail stores",
        lang === "id" ? "Hemat Rp 36 Juta per tahun dari biaya sewa SaaS" : "Saved $2,400/yr in recurring SaaS subscriptions",
        lang === "id" ? "Laporan keuangan & laba rugi otomatis harian" : "Automated daily P&L and financial accounting",
      ],
      quote:
        lang === "id"
          ? "Kami memegang kendali penuh atas sistem dan database kami sendiri tanpa harus membayar sewa bulanan per kasir."
          : "We own our entire software infrastructure outright with zero recurring seat fees.",
      author: "Hendra Wijaya, S.T.",
      authorRole: lang === "id" ? "Direktur Operasional Mitra Retail" : "Operations Director",
    },
  ];

  const currentStudy = caseStudies.find((c) => c.id === activeTabId) || caseStudies[0];

  return (
    <section
      id="studi-kasus"
      className="bg-[#06080D] text-white py-16 sm:py-24 font-sans border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "HASIL NYATA & STUDI KASUS" : "MEASURABLE CASE STUDIES"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            {lang === "id"
              ? "Bukti keandalan di lingkungan kerja nyata."
              : "Real results measured in production."}
          </h2>
        </div>

        {/* Tab Buttons (Horizontal Pills) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 sm:mb-12">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveTabId(item.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeTabId === item.id
                  ? "bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 shadow-lg shadow-orange-500/25"
                  : "bg-white/[0.04] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {item.tabTitle}
            </button>
          ))}
        </div>

        {/* Tabbed Content Card (Split Layout: Case Details on Left, High-Res UI Mockup on Right) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl sm:rounded-3xl bg-[#0D111A] border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Left Column: Problem, Solution, Quantitative Metrics */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[10px] font-mono tracking-wider font-semibold uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                  {currentStudy.category}
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mt-3">
                  {currentStudy.client}
                </h3>
              </div>

              {/* Challenge Box */}
              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/25 text-xs text-rose-200">
                <span className="font-bold text-rose-300 block mb-1">
                  {lang === "id" ? "KENDALA SEBELUMNYA:" : "THE BOTTLENECK:"}
                </span>
                <p className="leading-relaxed">{currentStudy.problem}</p>
              </div>

              {/* Solution Box */}
              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/25 text-xs text-amber-200">
                <span className="font-bold text-amber-300 block mb-1">
                  {lang === "id" ? "SOLUSI ARSITEKTUR ABINEST:" : "ABINEST ARCHITECTURE:"}
                </span>
                <p className="leading-relaxed">{currentStudy.solution}</p>
              </div>

              {/* Measured Impact Checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-mono text-zinc-400 uppercase font-semibold block mb-2">
                  {lang === "id" ? "HASIL TERUKUR DI LAPANGAN:" : "MEASURED IMPACT:"}
                </span>
                {currentStudy.results.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>

              {/* Verified Client Quote */}
              <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                <Quote className="w-5 h-5 text-amber-400 shrink-0 opacity-80 mt-1" />
                <div>
                  <p className="text-xs text-zinc-300 italic leading-relaxed">
                    &ldquo;{currentStudy.quote}&rdquo;
                  </p>
                  <span className="text-[11px] font-bold text-white block mt-2">
                    {currentStudy.author}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-400">
                    {currentStudy.authorRole}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Res UI Mockup Viewport */}
            <div className="lg:col-span-6 bg-[#080B11] p-3 sm:p-5 rounded-2xl border border-white/10 shadow-inner">
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={currentStudy.image}
                  alt={currentStudy.client}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                <span>Status: Sistem Aktif Beroperasi</span>
                <span className="text-amber-400">SLA 99.98% Terverifikasi</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
