"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronDown } from "lucide-react";

export function GroveFaqSection() {
  const { lang } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: lang === "id"
        ? "Berapa lama pengerjaan sistem atau website di Abinest?"
        : "How long does system or web development usually take?",
      a: lang === "id"
        ? "Untuk website profil institusi berkecepatan tinggi (Next.js 15), timeline pengerjaan biasanya berkisar antara 2–4 minggu. Untuk sistem kompleks seperti SIAKAD Sekolah terpadu atau ERP Omnichannel dengan background worker cetak rapor dan WhatsApp gateway, estimasi waktu adalah 6–10 minggu dengan sistem rilis bertahap (milestone) yang bisa dipantau langsung di Client Portal."
        : "High-performance institutional websites take 2–4 weeks. Complex enterprise systems like complete school SIAKAD or omnichannel ERP with cloud PDF workers take 6–10 weeks, delivered in transparent weekly milestones.",
    },
    {
      q: lang === "id"
        ? "Apakah kami mendapatkan hak milik kode sumber (source code) sepenuhnya?"
        : "Do we get full intellectual property and source code ownership?",
      a: lang === "id"
        ? "Ya, 100%. Kami memegang prinsip Zero Vendor Lock-in. Seluruh kode sumber, repository Git, skema database, dan dokumentasi teknis akan diserahkan penuh kepada institusi Anda setelah serah terima proyek. Anda memiliki kebebasan penuh mengelola sistem di server Anda sendiri."
        : "Yes, 100%. We enforce a strict Zero Vendor Lock-in policy. Full Git repositories, database migrations, and technical architecture manuals are handed over to your team upon completion.",
    },
    {
      q: lang === "id"
        ? "Bagaimana dengan garansi dan pemeliharaan (maintenance) setelah go-live?"
        : "How does post-launch maintenance, SLA, and warranty work?",
      a: lang === "id"
        ? "Setiap sistem yang kami luncurkan dilindungi garansi bug-fix dan pendampingan teknisi gratis selama 3–6 bulan, didukung jaminan SLA uptime 99.9%. Kami juga menyediakan paket managed support berkelanjutan untuk pemantauan server 24/7, pencadangan otomatis harian (daily backup), dan penambahan fitur baru seiring bertambahnya kebutuhan."
        : "Every deployment includes a 3–6 month free warranty for bug fixes and SLA 99.9% uptime monitoring. We also provide ongoing managed maintenance packages covering automated daily backups and feature evolution.",
    },
    {
      q: lang === "id"
        ? "Bagaimana Abinest menjamin keamanan data siswa atau keuangan institusi kami?"
        : "How does Abinest ensure student data and institutional financial security?",
      a: lang === "id"
        ? "Keamanan data adalah prioritas utama kami. Kami menerapkan PostgreSQL Row Level Security (RLS) di level database, enkripsi SSL/TLS berlapis, serta token otentikasi terisolasi. Ini memastikan tidak ada satu pun data nilai siswa atau laporan keuangan yang bisa diakses oleh akun yang tidak berwenang."
        : "We implement PostgreSQL Row Level Security (RLS) at the core database layer, cryptographic token isolation, and automated backup snapshots to guarantee full data privacy and zero cross-tenant leakages.",
    },
    {
      q: lang === "id"
        ? "Apakah sistem Abinest bisa diintegrasikan dengan database atau aplikasi lama kami?"
        : "Can Abinest systems integrate with our existing database or software?",
      a: lang === "id"
        ? "Tentu saja bisa. Tim insinyur kami berpengalaman membangun API bridge dan pipeline migrasi data (ETL) dari Excel, database MySQL/PHP lama, mesin absensi sidik jari, gerbang pembayaran (Payment Gateway / Virtual Account Bank), hingga marketplace online seperti Shopee dan Tokopedia."
        : "Yes. Our engineers build custom API connectors and migration pipelines from legacy MySQL/PHP databases, biometric attendance devices, bank Virtual Accounts, and major e-commerce marketplaces.",
    },
  ];

  return (
    <section id="faq" className="bg-[#F8FAFC] text-slate-900 py-14 sm:py-20 font-sans border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#0F766E]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
              {lang === "id" ? "PERTANYAAN UMUM (FAQ)" : "FREQUENTLY ASKED QUESTIONS"}
            </span>
            <span className="w-6 h-[2px] bg-[#0F766E]" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            {lang === "id"
              ? "Jawaban untuk pertanyaan Anda."
              : "Clear answers to key questions."}
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
            {lang === "id"
              ? "Transparansi adalah fondasi kerja kami. Berikut adalah jawaban atas hal-hal yang sering ditanyakan sebelum memulai proyek bersama Abinest."
              : "Everything you need to know about our project timelines, data security, code ownership, and ongoing support."}
          </p>
        </motion.div>

        {/* Accordion List (Height & Opacity Animation via Framer Motion) */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors duration-200"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0F172A] pr-2">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center shrink-0 transition-all duration-300 ease-out ${
                      isOpen
                        ? "rotate-180 bg-teal-50 text-[#0F766E] border-teal-200"
                        : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-dashed border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
