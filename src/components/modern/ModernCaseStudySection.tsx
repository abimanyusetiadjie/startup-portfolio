"use client";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Database,
  FileCheck2,
  FileSpreadsheet,
  GitBranch,
  Layers,
  Lock,
  Server,
  ShieldCheck,
  TrendingDown,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const PIPELINE_STAGES = [
  {
    step: "01",
    title: "Portal Akademik Guru",
    sub: "Next.js RSC + Action",
    desc: "Guru mengonfirmasi nilai kelas via Server Action.",
    icon: Server,
  },
  {
    step: "02",
    title: "Next.js Edge Dispatcher",
    sub: "Token & RLS Verification",
    desc: "Validasi sesi JWT dan pembuatan batch payload.",
    icon: Lock,
  },
  {
    step: "03",
    title: "Upstash Distributed Queue",
    sub: "High-Throughput Buffer",
    desc: "Antrean terdistribusi anti-loss dengan auto-retry 5x.",
    icon: Workflow,
  },
  {
    step: "04",
    title: "Parallel PDF Workers",
    sub: "Edge Serverless Cluster",
    desc: "15 worker paralel merender 500+ rapor serentak.",
    icon: FileSpreadsheet,
  },
  {
    step: "05",
    title: "Supabase Private Storage",
    sub: "Signed URL (60 Menit)",
    desc: "Dokumen rapor siap diunduh secara aman oleh wali murid.",
    icon: FileCheck2,
  },
];

export function ModernCaseStudySection() {
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

  return (
    <section id="arsitektur" className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-xs font-semibold text-[#059669]">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">STUDI KASUS ARSITEKTUR PRODUKSI</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Bagaimana Kami Menangani 4.200 Siswa Ujian &amp;{" "}
            <span className="text-[#0052FF]">Cetak Rapor Serentak.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Studi rekayasa nyata pada Yayasan Pendidikan Multi-Kampus: memindahkan proses render PDF dari server utama ke antrean asinkron terdistribusi.
          </p>
        </div>

        {/* Deep Dive Bento Box (White Slate with High Contrast Sub-Cards) */}
        <div className="rounded-3xl border border-slate-200/90 bg-slate-50/50 p-6 sm:p-10 lg:p-12 shadow-sm space-y-10">
          {/* Top Row: Problem vs Solution Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* The Challenge (Left 5 Cols) */}
            <div className="lg:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-2xs">
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                  TANTANGAN SEBELUM REKAYASA
                </span>
                <h3 className="font-heading text-xl font-bold text-[#09090B] mt-4 mb-3">
                  Kemacetan Database &amp; Timeout Massal
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  Saat pekan ujian serentak, ribuan siswa mengerjakan ujian online di LMS sementara ratusan guru mencetak rapor PDF. Beban CPU server utama melonjak hingga 100%, menyebabkan database lock dan server tumbang selama berjam-jam.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 font-mono">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] text-[#64748B] block">DOWNTIME UJIAN</span>
                  <span className="text-base font-bold text-rose-600">Sering Crash</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <span className="text-[10px] text-[#64748B] block">WAKTU RENDER</span>
                  <span className="text-base font-bold text-rose-600">&gt; 15 Menit</span>
                </div>
              </div>
            </div>

            {/* The Architectural Breakthrough (Right 7 Cols) */}
            <div className="lg:col-span-7 rounded-2xl bg-[#0A0D14] text-white p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#10B981] bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    SOLUSI ARSITEKTUR ABINEST
                  </span>
                  <span className="text-xs font-mono text-slate-400">Zero-Downtime Decoupling</span>
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mt-4 mb-3">
                  Isolasi Beban &amp; Parallel Worker Cluster
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Kami memisahkan beban kerja database SPP dari portal LMS ujian, dan mendistribusikan proses render PDF rapor ke antrean asinkron (Upstash QStash). Dokumen disimpan langsung ke Supabase Storage dengan akses Signed URL 60 menit.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-3 gap-3 font-mono">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">UPTIME PEAK</span>
                  <span className="text-lg sm:text-xl font-bold text-[#10B981]">99.98%</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">500+ RAPOR</span>
                  <span className="text-lg sm:text-xl font-bold text-white">&lt; 45 Detik</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-[10px] text-slate-400 block">BEBAN CPU</span>
                  <span className="text-lg sm:text-xl font-bold text-[#0052FF]">&lt; 15%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: 5-Stage Visual Pipeline Diagram */}
          <div className="pt-8 border-t border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#0052FF]">
                  PIPELINE TOPOLOGI ASINKRON
                </span>
                <h4 className="font-heading text-lg font-bold text-[#09090B]">
                  Alur Pemrosesan Rapor Tanpa Sentuhan CPU Server Utama
                </h4>
              </div>
              <span className="text-xs font-mono text-[#10B981] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ● Auto-Retry Exponential Backoff Active
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {PIPELINE_STAGES.map((stage, idx) => {
                const Icon = stage.icon;
                const isLast = idx === PIPELINE_STAGES.length - 1;
                return (
                  <div key={stage.step} className="relative flex flex-col justify-between p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#0052FF] transition-colors shadow-2xs group">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-mono font-bold text-[#0052FF] bg-blue-50 px-2 py-0.5 rounded">
                          {stage.step}
                        </span>
                        <Icon className="h-4 w-4 text-[#64748B] group-hover:text-[#0052FF] transition-colors" />
                      </div>
                      <h5 className="font-heading text-xs sm:text-sm font-bold text-[#09090B]">
                        {stage.title}
                      </h5>
                      <p className="text-[11px] font-mono text-[#0052FF] mt-0.5">
                        {stage.sub}
                      </p>
                      <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    {!isLast && (
                      <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                        <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
