"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ShieldCheck, Cpu, Zap, Lock, Eye, CheckCircle2 } from "lucide-react";

export function GroveCraftsmanshipStory() {
  const { lang } = useLanguage();

  const standards = [
    {
      num: "01",
      icon: Cpu,
      title: lang === "id" ? "Arsitektur Anti-Lelet" : "Decoupled Anti-Lag Architecture",
      desc:
        lang === "id"
          ? "Proses berat seperti ekspor ratusan PDF rapor, rekapitulasi nilai massal, dan blast notifikasi WhatsApp diproses di background worker cloud terpisah agar aplikasi utama tidak pernah terasa lambat."
          : "Heavy computation such as mass report generation, batch grading, and automated WhatsApp broadcasts are offloaded to asynchronous background queues.",
      badge: "DECOUPLED QUEUE",
    },
    {
      num: "02",
      icon: Lock,
      title: lang === "id" ? "Keamanan Data Berlapis (PostgreSQL RLS)" : "Multi-Layer Data Security (PostgreSQL RLS)",
      desc:
        lang === "id"
          ? "Data nilai siswa, informasi keuangan yayasan, dan catatan transaksi dilindungi enkripsi ketat dan Row Level Security. Data antar cabang dan akun terisolasi penuh secara otomatis di level basis data."
          : "Student records, foundation finances, and sensitive tokens are protected by strict Row Level Security (RLS) and cryptographic isolation at the database layer.",
      badge: "ROW LEVEL SECURITY",
    },
    {
      num: "03",
      icon: Zap,
      title: lang === "id" ? "Performa Website Kelas Enterprise" : "Enterprise Web Velocity (Lighthouse 95–100)",
      desc:
        lang === "id"
          ? "Dibangun di atas fondasi Next.js 15 App Router dengan optimasi bundle ketat. Menjamin halaman terbuka seketika di ponsel guru maupun laptop wali murid dengan skor Lighthouse 95–100."
          : "Built on Next.js 15 App Router with rigorous bundle budgets, targeting 95–100 Lighthouse performance and sub-second Largest Contentful Paint (LCP).",
      badge: "NEXT.JS 15 EDGE",
    },
    {
      num: "04",
      icon: Eye,
      title: lang === "id" ? "Transparansi Penuh Melalui Client Portal" : "Full Visibility via Client Portal",
      desc:
        lang === "id"
          ? "Setiap institusi klien diberikan akun resmi di Client Portal kami untuk memantau kemajuan pengerjaan, memeriksa milestone, melihat log sistem, dan mengunduh invoice secara terbuka."
          : "Every partner receives dedicated Client Portal credentials to inspect sprint velocity, live milestone deliverables, telemetry health, and official invoices.",
      badge: "POLARIS DASHBOARD",
    },
  ];

  return (
    <section id="engineering" className="bg-[#F8FAFC] text-slate-900 py-16 sm:py-24 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="w-6 h-[2px] bg-[#0F766E]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0F766E] font-mono">
              {lang === "id" ? "STANDAR TEKNIS ABINEST" : "ENGINEERING STANDARDS"}
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] tracking-tight">
            {lang === "id"
              ? "Standar yang kami pegang di setiap proyek."
              : "The engineering principles behind every system."}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami bukan pembuat website instan. Kami adalah mitra rekayasa teknologi yang memastikan sistem Anda cepat, aman, dan siap bertumbuh untuk jangka panjang."
              : "We do not ship fragile templates. We are software engineering partners ensuring your digital systems are secure, blazing-fast, and built to endure."}
          </p>
        </div>

        {/* 4 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {standards.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#0F766E]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 text-[#0F766E] flex items-center justify-center">
                        <Icon className="h-4.5 w-4.5" />
                      </div>
                      <span className="font-mono text-xs text-slate-500 font-semibold">PRINSIP #{s.num}</span>
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#0F766E] bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200 font-bold">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#0F766E] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed font-normal">
                    {s.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-dashed border-slate-200 flex items-center gap-2 text-xs font-mono font-bold text-[#0F766E]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>Jaminan Standar Produksi 100%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
