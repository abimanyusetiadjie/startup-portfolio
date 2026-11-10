"use client";

import { useState } from "react";
import {
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  Headphones,
  Award,
  Terminal,
  Zap,
  Database,
  Cloud,
  Bot,
  Server,
  Code2,
} from "lucide-react";

export function GroveEngineeringTrustSection() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  const teamRoles = [
    {
      role: "Principal Systems Architect",
      expertise: "High-Concurrency & Distributed Database Pooling",
      experience: "8+ Tahun Rekayasa Sistem Skala Enterprise",
      standards: "Clean Architecture · Zero Vendor Lock-in",
      monogram: "SA",
    },
    {
      role: "Lead Cloud Infrastructure Engineer",
      expertise: "Docker Containerization, Auto-Scaling & SLA 99.9%",
      experience: "Multi-Cloud Deployments (Jakarta & SG Edge)",
      standards: "Automated Daily Backup · Anti-Downtime",
      monogram: "CI",
    },
    {
      role: "Applied AI & Automation Specialist",
      expertise: "Document AI OCR Pipeline & Meta Cloud API Official",
      experience: "Ekstraksi Ribuan Faktur Akurasi 99.7%",
      standards: "Private Model · Zero Data Leakage",
      monogram: "AI",
    },
  ];

  const techMatrix = [
    {
      name: "Next.js & React 19",
      role: "Fullstack Web & Edge SSR",
      spec: "Server Components · Load <0.8 Detik",
    },
    {
      name: "TypeScript (Strict)",
      role: "Type Safety Architecture",
      spec: "100% Type-Safe · Zero Silent Bugs",
    },
    {
      name: "PostgreSQL Pooling",
      role: "Enterprise Database Core",
      spec: "ACID Compliant · Multi-Warehouse Sync",
    },
    {
      name: "Docker Container",
      role: "Infrastructure as Code",
      spec: "Cloud-Ready · Instant Auto-Failover",
    },
    {
      name: "Python Document AI",
      role: "OCR & Machine Learning",
      spec: "Ekstraksi Invoice Akurasi 99.7%",
    },
    {
      name: "Go (Golang)",
      role: "High-Throughput Services",
      spec: "Low-Latency Background Worker Queue",
    },
    {
      name: "Redis In-Memory",
      role: "Distributed Cache",
      spec: "Sub-Millisecond Read Latency (<1ms)",
    },
    {
      name: "Cloudflare & Meta API",
      role: "Security & Communication",
      spec: "DDoS Shield · WhatsApp Cloud API Resmi",
    },
  ];

  const faqs = [
    {
      q: "Apakah 100% source code dan database benar-benar diserahkan ke institusi kami?",
      a: "Ya, 100% hak milik mutlak. Setelah proyek selesai, seluruh repositori kode Git, skema database PostgreSQL, dan dokumentasi arsitektur kami transfer utuh ke akun resmi perusahaan Anda. Tidak ada kode yang disandera atau disembunyikan.",
    },
    {
      q: "Jika bisnis kami bertambah 1.000 karyawan atau siswa di masa depan, apakah ada biaya lisensi ekstra?",
      a: "Sama sekali tidak ada (Rp 0). Berbeda dengan sistem SaaS luar negeri yang menagih biaya sewa membengkak per akun pengguna, sistem yang kami bangun bebas Anda gunakan untuk puluhan ribu karyawan, cabang, atau siswa tanpa biaya lisensi bulanan selamanya.",
    },
    {
      q: "Bagaimana jika terjadi lonjakan traffic atau kendala teknis di luar jam kerja normal?",
      a: "Seluruh sistem kami lengkapi dengan automated health-check monitoring 24/7. Tim kami memegang komitmen tertulis SLA Uptime 99.9% dan respons darurat teknis yang siaga mendampingi Anda di momen-momen kritis bisnis.",
    },
    {
      q: "Berapa lama rata-rata proses pengerjaan dari blueprint hingga sistem siap digunakan?",
      a: "Website Modern berkecepatan tinggi umumnya selesai dalam 2–3 minggu. Sistem ERP Kustom atau SIAKAD Sekolah modular berkisar 4–8 minggu. Setiap tahapan memiliki server staging live agar Anda bisa memantau dan menguji progres tiap pekan.",
    },
    {
      q: "Bagaimana sistem termin pembayaran dan jaminan keamanan proyek?",
      a: "Pembayaran dilakukan secara bertahap berbasis pencapaian milestone resmi (Down Payment, Staging Approval, hingga Final Handover). Seluruh komitmen, hak milik kode, dan SLA tertuang sah di dalam Perjanjian Kerja Sama (PKS) berkekuatan hukum.",
    },
    {
      q: "Apakah staf operasional non-teknis kami akan dilatih sampai benar-benar mahir?",
      a: "Pasti. Paket implementasi kami mencakup sesi pelatihan interaktif langsung bagi admin dan staf lapangan, dilengkapi buku panduan Bahasa Indonesia serta video rekaman tutorial yang dapat diakses kapan saja.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-14 sm:py-20 relative bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#1E40AF]">
            <Award className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold tracking-wider uppercase">
              STANDAR REKAYASA &amp; FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Transparansi Tim &amp; Standar Rekayasa
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Kami mengutamakan kejujuran arsitektur, kepemilikan penuh klien, dan kejelasan alur kerja sebelum Anda menginvestasikan anggaran perusahaan.
          </p>
        </div>

        {/* 2-Column Grid: Team Leadership (Left) + Critical FAQ (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* LEFT: Engineering Team & Technical Rigor (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-6 sm:p-7 space-y-6 shadow-xs">
              <div className="space-y-1.5 pb-3 border-b border-slate-200">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E40AF] flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  Engineering Leadership
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F172A]">
                  Arsitek di Balik Sistem Anda
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sistem Anda dibangun langsung oleh praktisi rekayasa berpengalaman, bukan diserahkan ke pihak ketiga tanpa pengawasan.
                </p>
              </div>

              {/* 3 Engineering Specialists */}
              <div className="space-y-3.5">
                {teamRoles.map((lead, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 hover:border-blue-300 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {lead.monogram}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#0F172A] leading-snug">
                        {lead.role}
                      </h4>
                      <p className="text-[11px] text-[#2563EB] font-medium leading-tight mt-0.5">
                        {lead.expertise}
                      </p>
                      <p className="text-[10px] text-slate-500 leading-tight mt-1">
                        Standar: {lead.standards}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Architecture Badges */}
              <div className="pt-2 border-t border-slate-200 space-y-2 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>TypeScript Type-Safe &amp; Clean Architecture</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Garansi Respons Bugfix &lt;15 Menit di Jam Kerja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Automated Database Backup Harian Multi-Lokasi</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Interactive 6-Item B2B Accordion FAQ (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition-all border ${
                    isOpen
                      ? "bg-blue-50/20 border-blue-300 shadow-xs"
                      : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm font-bold text-[#0F172A]">
                      {faq.q}
                    </span>
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#2563EB] text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {isOpen ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 font-normal">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CLEAN ARCHITECTURE & TECHNOLOGY MATRIX (REPLACES NOISY TICKER)            */}
        {/* ========================================================================= */}
        <div className="pt-6 border-t border-slate-200/80 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0F172A] tracking-tight">
                Fondasi Teknologi &amp; Arsitektur Kelas Industri
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Standar teknologi modern tanpa dependensi usang, memastikan kecepatan maksimal dan keamanan aset kode Anda.
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold shrink-0 self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Zero Bloatware · 100% Hak Milik</span>
            </div>
          </div>

          {/* 8-Tile Clean Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {techMatrix.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-blue-400 hover:bg-white hover:shadow-sm transition-all duration-200 group"
              >
                <div className="flex items-center justify-between pb-2">
                  <span className="text-xs font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors truncate">
                    {t.name}
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-blue-700 leading-snug">
                  {t.role}
                </p>
                <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                  {t.spec}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
