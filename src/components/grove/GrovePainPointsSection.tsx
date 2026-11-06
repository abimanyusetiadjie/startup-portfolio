"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle, ShieldAlert, Clock, Layers, ArrowRight } from "lucide-react";

export function GrovePainPointsSection() {
  const { lang } = useLanguage();

  const painPoints = [
    {
      num: "01",
      icon: AlertTriangle,
      title: lang === "id" ? "Sistem Down saat Dibutuhkan" : "Systems Crashing During Peak Hours",
      desc:
        lang === "id"
          ? "Pembagian rapor, ujian online, atau peak season menyebabkan server crash. Wali murid komplain dan operasional terganggu."
          : "Report card releases, concurrent exams, or peak traffic overload ordinary servers. Users complain and operations stall.",
      impact: lang === "id" ? "Solusi: Arsitektur Decoupled Anti-Crash" : "Solution: Decoupled Anti-Crash Architecture",
    },
    {
      num: "02",
      icon: ShieldAlert,
      title: lang === "id" ? "Data Sensitif Kurang Aman" : "Vulnerable & Unprotected Data",
      desc:
        lang === "id"
          ? "Nilai siswa dan catatan keuangan yayasan hanya dilindungi login biasa tanpa isolasi basis data (RLS) — rawan bocor."
          : "Student grades and institutional finances lack row-level database isolation — exposing sensitive data to leaks.",
      impact: lang === "id" ? "Solusi: PostgreSQL Row Level Security" : "Solution: PostgreSQL Row Level Security",
    },
    {
      num: "03",
      icon: Clock,
      title: lang === "id" ? "Proses Manual Memakan Waktu" : "Exhausting Manual Workflows",
      desc:
        lang === "id"
          ? "Kirim tagihan SPP, notifikasi absensi, dan kwitansi masih manual via WA staf. Menghabiskan puluhan jam kerja/bulan."
          : "Sending tuition invoices and attendance alerts manually via personal WhatsApp wastes dozens of staff hours monthly.",
      impact: lang === "id" ? "Solusi: Meta WhatsApp Cloud API" : "Solution: Automated Meta WhatsApp Gateway",
    },
    {
      num: "04",
      icon: Layers,
      title: lang === "id" ? "Sistem Kaku & Sulit Dikembangkan" : "Rigid & Unscalable Legacy Systems",
      desc:
        lang === "id"
          ? "Penambahan modul baru sangat mahal, rumit, dan berisiko merusak sistem lama karena kode tidak modular."
          : "Adding new features is costly and risky because legacy code is tightly coupled without modern architecture.",
      impact: lang === "id" ? "Solusi: Modular Next.js 15 & Clean Code" : "Solution: Modular Modern Next.js 15 Stack",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] text-slate-900 py-14 sm:py-20 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-rose-500" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-rose-600 font-bold">
              {lang === "id" ? "KENDALA OPERASIONAL NYATA" : "COMMON FIELD CHALLENGES"}
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            {lang === "id"
              ? "Masalah yang sering kami temui di lapangan."
              : "Problems we regularly solve in production."}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {lang === "id"
              ? "Banyak yayasan dan bisnis kehilangan waktu, reputasi, dan biaya besar karena mengandalkan sistem lama yang tidak dirancang untuk menangani beban tinggi."
              : "Many institutions suffer lost hours, damaged trust, and high overhead because their software was never architected for modern peak concurrency."}
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {painPoints.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-semibold">
                        MASALAH #{item.num}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-rose-600 font-bold bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                      RISIKO TINGGI
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-dashed border-slate-200 flex items-center justify-between text-xs font-mono font-bold text-[#0F766E]">
                  <span>{item.impact}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
