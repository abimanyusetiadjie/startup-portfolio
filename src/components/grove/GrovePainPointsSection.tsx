"use client";

import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle, ShieldAlert, Clock, Layers, ArrowRight } from "lucide-react";

export function GrovePainPointsSection() {
  const { lang } = useLanguage();

  const painPoints = [
    {
      num: "01",
      icon: AlertTriangle,
      title: lang === "id" ? "Website/Sistem Down saat Dibutuhkan" : "Systems Crashing During Peak Hours",
      desc:
        lang === "id"
          ? "Pembagian rapor, ujian online serentak, atau peak season menyebabkan server crash. Orang tua dan siswa kecewa, reputasi institusi menurun, dan operasional terganggu."
          : "Report card distribution, concurrent online exams, or peak seasons overload ordinary servers. Users are frustrated and operations grind to a halt.",
      impact: lang === "id" ? "Solusi: Arsitektur Decoupled Anti-Crash" : "Solution: Decoupled Anti-Crash Architecture",
    },
    {
      num: "02",
      icon: ShieldAlert,
      title: lang === "id" ? "Data Sensitif Tidak Terlindungi dengan Baik" : "Vulnerable & Unprotected Sensitive Data",
      desc:
        lang === "id"
          ? "Nilai siswa, rekap keuangan yayasan, dan data pribadi wali murid hanya dilindungi login biasa tanpa isolasi tingkat baris database (RLS) — sangat rawan kebocoran."
          : "Student grades, institutional finances, and confidential records lack row-level security isolation — exposing your data to severe leak risks.",
      impact: lang === "id" ? "Solusi: PostgreSQL Row Level Security" : "Solution: PostgreSQL Row Level Security",
    },
    {
      num: "03",
      icon: Clock,
      title: lang === "id" ? "Proses Manual yang Memakan Waktu" : "Exhausting & Error-Prone Manual Work",
      desc:
        lang === "id"
          ? "Kirim tagihan SPP, notifikasi absensi siswa, dan kwitansi pembayaran masih dilakukan manual satu per satu via WhatsApp staf. Menghabiskan puluhan jam kerja setiap bulan."
          : "Sending tuition invoices, attendance notifications, and payment receipts manually via WhatsApp exhausts staff hours and causes frequent mistakes.",
      impact: lang === "id" ? "Solusi: Meta WhatsApp Cloud API Gateway" : "Solution: Automated Meta WhatsApp Gateway",
    },
    {
      num: "04",
      icon: Layers,
      title: lang === "id" ? "Sistem yang Kaku & Sulit Dikembangkan" : "Rigid & Unscalable Legacy Software",
      desc:
        lang === "id"
          ? "Setelah sistem live, penambahan modul baru menjadi sangat mahal, rumit, dan berisiko merusak sistem lama karena kode ditulis secara monolitik tanpa standar modern."
          : "Adding new features or integrations becomes costly and risky because the underlying software is tangled, undocumented, and unscalable.",
      impact: lang === "id" ? "Solusi: Modular Next.js 15 & Clean Code" : "Solution: Modular Modern Next.js 15 Stack",
    },
  ];

  return (
    <section className="bg-[#11141C] text-white py-16 sm:py-24 font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-3">
            <span className="w-6 h-[1.5px] bg-rose-400" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-rose-300 font-semibold">
              {lang === "id" ? "KENDALA OPERASIONAL NYATA" : "COMMON FIELD CHALLENGES"}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            {lang === "id"
              ? "Masalah yang sering kami temui di lapangan."
              : "The critical problems we solve in production."}
          </h2>

          <p className="mt-3.5 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
            {lang === "id"
              ? "Banyak yayasan dan bisnis kehilangan waktu, reputasi, dan biaya besar karena mengandalkan sistem lama yang tidak dirancang untuk menangani beban tinggi."
              : "Many institutions suffer lost hours, damaged trust, and high overhead because their software was never architected for modern peak concurrency."}
          </p>
        </div>

        {/* 4 Pain Point Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {painPoints.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.num}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-xs text-zinc-400">
                        MASALAH #{item.num}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-rose-400 font-semibold">
                      RISIKO TINGGI
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 mt-2.5 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-white/10 flex items-center justify-between text-xs font-mono text-emerald-400">
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
