"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFaqAccordionSection() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q:
        lang === "id"
          ? "Apakah source code benar-benar menjadi milik institusi kami 100%?"
          : "Do we genuinely get 100% source code and IP ownership?",
      a:
        lang === "id"
          ? "Ya, 100% hak milik Anda (Full Intellectual Property). Setelah pelunasan, seluruh repositori Git, skema database PostgreSQL, dan dokumentasi arsitektur diserahkan penuh. Kami tidak memungut biaya lisensi sewa bulanan per-siswa maupun per-pengguna."
          : "Yes, 100% Full IP Ownership. Upon final milestone completion, all Git repositories, PostgreSQL database schemas, and technical docs are completely transferred to your organization with zero recurring per-seat SaaS rent.",
    },
    {
      q:
        lang === "id"
          ? "Berapa lama estimasi waktu pengerjaan Website atau sistem SIAKAD / ERP?"
          : "How long does it take to develop a Corporate Website or SIAKAD / ERP?",
      a:
        lang === "id"
          ? "Untuk Website Institusi / Korporat Next.js 15 rata-rata selesai dalam 2–3 minggu. Untuk sistem skala enterprise seperti SIAKAD Sekolah Anti-Down atau Custom ERP berkisar antara 4–8 minggu dengan rilis modul bertahap mingguan yang dapat langsung diuji di Client Portal."
          : "High-performance Next.js 15 websites take 2–3 weeks. Comprehensive SIAKAD platforms or custom ERPs range between 4–8 weeks with weekly staging sprint milestones.",
    },
    {
      q:
        lang === "id"
          ? "Bagaimana sistem menjamin 0% server down saat ribuan siswa ujian serentak?"
          : "How does the architecture prevent server crashes during concurrent exams?",
      a:
        lang === "id"
          ? "Kami menerapkan arsitektur decoupled (terisolasi). Database dilindungi oleh PostgreSQL Row Level Security (RLS) dengan connection pooling teroptimasi, antrean cetak rapor dipindahkan ke cloud worker terpisah, dan frontend berjalan di Next.js 15 Edge Runtime sehingga beban berat ujian tidak memacetkan server utama."
          : "We engineer a decoupled serverless cluster. Direct PostgreSQL connection pooling with RLS security handles heavy CBT queries while PDF workloads run on isolated background queues.",
    },
    {
      q:
        lang === "id"
          ? "Apakah data siswa, guru, atau stok lama dari Excel bisa dimigrasi?"
          : "Can you migrate legacy student, academic, or inventory data from Excel?",
      a:
        lang === "id"
          ? "Bisa dan kami bantu penuh. Tim insinyur kami membangun skrip ETL otomatis untuk memindahkan data dari file Excel, spreadsheet CSV, maupun database MySQL/PHP lama sehingga staf Anda tidak perlu menginput ulang secara manual."
          : "Yes. Our engineers build automated ETL migration pipelines to import your legacy Excel spreadsheets, CSVs, or old MySQL/PHP databases seamlessly.",
    },
    {
      q:
        lang === "id"
          ? "Bagaimana skema pembayaran dan garansi pasca go-live?"
          : "What are the payment milestones and post-launch warranties?",
      a:
        lang === "id"
          ? "Pembayaran dibagi dalam 3 termin aman: 30% Kickoff & Blueprint Arsitektur → 40% Demo Live di Client Portal → 30% Serah Terima 100% Source Code & Pelatihan. Setiap proyek dilengkapi garansi pemeliharaan & bug-fixing gratis 3–6 bulan dan jaminan SLA Uptime 99.98%."
          : "Payments follow 3 safe milestones: 30% Kickoff → 40% Staging Demo on Client Portal → 30% 100% Source Code Handover. Every system includes 3–6 months of complimentary bug-fixing and 99.98% SLA warranty.",
    },
  ];

  return (
    <section
      id="faq"
      className="bg-[#05070B] text-white py-16 sm:py-24 font-sans border-b border-white/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header (Matches "Ask Less, Know More" from Reference) */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "PERTANYAAN UMUM" : "FREQUENTLY ASKED QUESTIONS"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            Ask Less, Know More.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            {lang === "id"
              ? "Jawaban langsung dan transparan untuk pertanyaan paling mendasar seputar arsitektur, lisensi, dan garansi proyek."
              : "Clear, upfront answers regarding system architecture, source code ownership, and warranties."}
          </p>
        </div>

        {/* Minimalist Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0C1018] border border-white/10 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-heading text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-amber-400">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-amber-400" : "text-zinc-400"
                      }`}
                    />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
