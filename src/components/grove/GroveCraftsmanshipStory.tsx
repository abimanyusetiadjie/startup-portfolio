"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Cpu, Zap, Lock, Eye, CheckCircle2 } from "lucide-react";

export function GroveCraftsmanshipStory() {
  const { lang } = useLanguage();

  const standards = [
    {
      num: "01",
      icon: Cpu,
      title: lang === "id" ? "Arsitektur Anti-Lelet" : "Decoupled Anti-Lag Architecture",
      desc:
        lang === "id"
          ? "Proses komputasi berat seperti ekspor ratusan PDF rapor dan pengiriman massal WhatsApp dialihkan ke background worker cloud terpisah agar portal utama tetap instan."
          : "Heavy computation such as mass report generation and WhatsApp broadcasts are offloaded to asynchronous background queues so the main app stays blazing fast.",
      badge: "DECOUPLED QUEUE",
    },
    {
      num: "02",
      icon: Lock,
      title: lang === "id" ? "Keamanan Data Berlapis (PostgreSQL RLS)" : "Multi-Layer Data Security (PostgreSQL RLS)",
      desc:
        lang === "id"
          ? "Data nilai siswa, keuangan yayasan, dan catatan transaksi dilindungi enkripsi SSL dan PostgreSQL Row Level Security (RLS) terisolasi penuh di level basis data."
          : "Student records and foundation finances are safeguarded by strict Row Level Security (RLS) and cryptographic isolation at the database layer.",
      badge: "ROW LEVEL SECURITY",
    },
    {
      num: "03",
      icon: Zap,
      title: lang === "id" ? "Performa Website Kelas Enterprise" : "Enterprise Web Velocity (Lighthouse 95–100)",
      desc:
        lang === "id"
          ? "Dibangun di atas Next.js 15 App Router dengan optimasi bundle ketat, menjamin halaman terbuka seketika dengan skor Google Lighthouse 95–100."
          : "Built on Next.js 15 App Router with rigorous bundle budgets, targeting 95–100 Google Lighthouse scores and sub-second load times.",
      badge: "NEXT.JS 15 EDGE",
    },
    {
      num: "04",
      icon: Eye,
      title: lang === "id" ? "Transparansi Penuh via Client Portal" : "Full Visibility via Client Portal",
      desc:
        lang === "id"
          ? "Setiap institusi klien mendapatkan akses resmi di Client Portal kami untuk memantau progres mingguan, status server SLA, dan mengunduh invoice secara terbuka."
          : "Every client partner receives dedicated credentials to inspect sprint milestone velocity, live server telemetry health, and official invoices.",
      badge: "POLARIS DASHBOARD",
    },
  ];

  return (
    <section id="engineering" className="bg-[#F8FAFC] text-slate-900 py-14 sm:py-20 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#0F766E]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
              {lang === "id" ? "STANDAR TEKNIS ABINEST" : "ENGINEERING STANDARDS"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            {lang === "id"
              ? "Standar yang kami pegang."
              : "Engineering principles we uphold."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami bukan pembuat website instan. Kami adalah mitra rekayasa teknologi yang memastikan sistem Anda cepat, aman, dan siap bertumbuh untuk jangka panjang."
              : "We do not ship fragile templates. We are software engineering partners ensuring your digital systems are secure, blazing-fast, and built to endure."}
          </p>
        </motion.div>

        {/* 4 Standards Grid (2x2 with Staggered Entrance & Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {standards.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-[#0F766E]/50 shadow-xs hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-[#0F766E] flex items-center justify-center group-hover:bg-[#0F766E] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-semibold">PRINSIP #{s.num}</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#0F766E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 font-bold">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors duration-200">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-slate-200 flex items-center gap-2 text-[11px] font-mono font-bold text-[#0F766E]">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Jaminan Standar Produksi 100%</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
