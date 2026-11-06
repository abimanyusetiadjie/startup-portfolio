"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export function GroveCaseStudiesSection() {
  const { lang } = useLanguage();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const caseStudies = [
    {
      id: "cs-siakad",
      client: "Yayasan Pendidikan Mandiri (Jakarta)",
      category: "EdTech & SIAKAD Sekolah",
      title:
        lang === "id"
          ? "SIAKAD tetap responsif saat 1.200 siswa mengakses bersamaan."
          : "SIAKAD remains lightning-fast with 1,200 simultaneous student logins.",
      problem:
        lang === "id"
          ? "Sekolah mengalami server crash berulang kali setiap musim pembagian rapor dan ujian online. Ratusan wali murid mengeluhkan portal yang down dan reputasi yayasan terancam."
          : "The school suffered repeated crashes during report card season and online exams. Frustrated parents, lost exam progress, and severe institutional downtime.",
      solution:
        lang === "id"
          ? "Kami merancang arsitektur decoupled berbasis Next.js 15 dan memisahkan proses berat (cetak ratusan PDF rapor dan rekap nilai) ke background worker cloud asinkron. Portal utama tetap ringan dan stabil."
          : "We architected a decoupled Next.js 15 infrastructure, offloading intensive tasks (batch PDF generation and grade reconciliation) to asynchronous cloud workers.",
      stats: [
        { label: lang === "id" ? "Server Crash Ujian" : "Exam Server Crash", val: "0%" },
        { label: lang === "id" ? "Cetak 500+ Rapor PDF" : "500+ PDF Reports", val: "< 45 Detik" },
        { label: lang === "id" ? "Uptime Musim Rapor" : "Report Season SLA", val: "99.98%" },
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: "cs-whatsapp",
      client: "SMA Unggulan Al-Hikmah & Pesantren",
      category: "Otomasi WhatsApp API Resmi",
      title:
        lang === "id"
          ? "Otomasi 4.500 tagihan SPP & kwitansi instan terkirim dalam < 2 detik."
          : "4,500 automated tuition invoices dispatched in under 2 seconds.",
      problem:
        lang === "id"
          ? "Tim tata usaha menghabiskan 3–4 hari kerja setiap awal bulan untuk mengirim rincian tagihan SPP secara manual via WhatsApp pribadi staf. Sering salah kirim nomor dan berisiko blokir."
          : "Administration staff spent 3–4 days each month manually typing and dispatching tuition receipts via personal WhatsApp, suffering frequent human errors and account bans.",
      solution:
        lang === "id"
          ? "Kami membangun gateway Meta Cloud API resmi terintegrasi antrean pesan cloud dan database PostgreSQL yayasan. Tagihan, kode bayar, dan kwitansi otomatis terkirim tanpa campur tangan staf."
          : "We deployed an official Meta Cloud API Gateway integrated with distributed cloud message queues and PostgreSQL, automatically generating personalized tuition slips.",
      stats: [
        { label: lang === "id" ? "Kecepatan Kirim" : "Dispatch Speed", val: "< 2s / Pesan" },
        { label: lang === "id" ? "Penghematan Waktu Staf" : "Admin Hours Saved", val: "24 Jam / Bulan" },
        { label: lang === "id" ? "Akurasi Pengiriman" : "Delivery Accuracy", val: "100% Tervalidasi" },
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section id="case-study" className="bg-[#0F1219] text-white py-14 sm:py-20 font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-emerald-400" />
            <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 font-mono">
              {lang === "id" ? "STUDI KASUS PRODUKSI NYATA" : "REAL-WORLD CASE STUDIES"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            {lang === "id"
              ? "Hasil nyata di lapangan."
              : "Measurable results in production."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami membuktikan klaim teknis kami melalui angka nyata di lapangan. Berikut adalah studi kasus rekayasa sistem yang memecahkan kendala operasional klien kami."
              : "We back our engineering standards with hard numbers in production. Here is how our architecture solved operational bottlenecks for our clients."}
          </p>
        </motion.div>

        {/* 2 Focused Case Study Cards (Staggered Entrance + Image Hover Zoom) */}
        <div className="space-y-8 sm:space-y-10">
          {caseStudies.map((cs, idx) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: idx * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-white/20 shadow-xl transition-all duration-300 items-stretch group/card"
            >
              {/* Left / Visual Image with Subtle Scale on Hover */}
              <div
                className={`lg:col-span-5 relative aspect-video lg:aspect-auto min-h-[260px] lg:min-h-[360px] overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="w-full h-full object-cover object-center group-hover/card:scale-103 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono text-emerald-300 border border-white/10">
                  {cs.category}
                </div>
              </div>

              {/* Right / Problem Solution Results */}
              <div
                className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-5 ${
                  idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                    KLIEN: {cs.client}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                    {cs.title}
                  </h3>

                  {/* Problem & Solution Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5 pt-4 border-t border-white/10 text-xs sm:text-sm">
                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                      <span className="font-bold text-rose-400 font-mono text-[11px] block">
                        MASALAH KLIEN:
                      </span>
                      <p className="text-zinc-300 leading-relaxed font-normal text-xs sm:text-sm">
                        {cs.problem}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                      <span className="font-bold text-emerald-400 font-mono text-[11px] block">
                        SOLUSI REKAYASA ABINEST:
                      </span>
                      <p className="text-zinc-200 leading-relaxed font-normal text-xs sm:text-sm">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Measurable Impact Numbers */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap items-baseline gap-5 sm:gap-7">
                    {cs.stats.map((st, i) => (
                      <div key={i}>
                        <span className="font-serif text-2xl sm:text-3xl font-normal text-emerald-400 block">
                          {st.val}
                        </span>
                        <span className="text-[10px] sm:text-xs text-zinc-400 font-mono block mt-0.5">
                          {st.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#konsultasi"
                    onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                    className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full bg-white text-zinc-950 text-xs font-bold hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm group"
                  >
                    <span>{lang === "id" ? "Konsultasi Kebutuhan Serupa" : "Consult Similar System"}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
