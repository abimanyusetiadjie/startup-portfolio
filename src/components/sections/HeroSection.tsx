"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  GitBranch,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react";

const SERVICE_PILLS = [
  "Web Modern",
  "Sistem SIAKAD",
  "WA Automation",
  "API Integration",
  "Consulting",
] as const;

const LIVE_QUEUE_TELEMETRY = [
  {
    id: "JOB-9841",
    task: "SIAKAD_PDF_REPORT • Kelas XII-IPA-1 (36 Siswa)",
    status: "COMPLETED",
    latency: "38ms",
    worker: "qstash-edge-sin1",
  },
  {
    id: "WH-4410",
    task: "WA_WEBHOOK_DISPATCH • Notifikasi Tagihan & Jadwal",
    status: "DELIVERED",
    latency: "64ms",
    worker: "wa-gateway-id01",
  },
  {
    id: "SYNC-209",
    task: "OMNICHANNEL_STOCK_LOCK • 4 Marketplace Atomic Sync",
    status: "SYNCED",
    latency: "49ms",
    worker: "supabase-realtime",
  },
] as const;

export function HeroSection() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 bg-[#F8FAFC]">
      {/* Subtle Background Radial Highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[580px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(37,99,235,0.08),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Bagian Header Hero (Center-Aligned) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-triloe-soft mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
              SOFTWARE ENGINEERING &amp; AUTOMATION STUDIO
            </span>
          </div>

          {/* Headline Utama */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-[#09090B]">
            Rekayasa Sistem{" "}
            <span className="text-[#2563EB]">Skala Enterprise</span> &amp;{" "}
            <span className="text-[#2563EB]">
              Otomasi Bisnis Berkecepatan Tinggi
            </span>
          </h1>

          {/* Sub-headline Ringkas & Tajam (Menghindari Wall-of-Text) */}
          <p className="mt-5 text-base sm:text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Arsitektur web Next.js skor{" "}
            <span className="font-mono font-semibold text-[#09090B]">
              Lighthouse 95–100
            </span>
            , sistem SIAKAD terpisah anti-down dengan mesin cetak PDF rapor paralel,
            serta otomasi WhatsApp &amp; API berketahanan tinggi.
          </p>

          {/* Baris Tombol CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "konsultasi")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#2563EB] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#2563EB]/25 hover:bg-[#1D4ED8] transition-colors"
            >
              Mulai Konsultasi Teknis →
            </motion.a>

            <motion.a
              href="#showcase-visual"
              onClick={(e) => handleSmoothScroll(e, "showcase-visual")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#09090B] border border-[#E2E8F0] font-semibold text-sm sm:text-base shadow-triloe-soft hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
            >
              Lihat Katalog Visual &amp; Sistem
            </motion.a>
          </div>
        </motion.div>

        {/* 2. Kontainer Visual Utama dengan "Triloe Cutout Corner" + 3 Floating Stat Cards */}
        <div className="max-w-6xl mx-auto mt-12 relative">
          {/* FLOATING CARD 1: Kiri Atas - Contrast Obsidian Card (#0F172A) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden md:flex items-center gap-3.5 z-20 absolute -top-6 -left-4 lg:-left-8 bg-[#0F172A] text-white px-5 py-4 rounded-2xl border border-slate-800 shadow-2xl"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#10B981]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-semibold tracking-tight text-white">
                  99.9%
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#10B981]/15 text-[#10B981]">
                  PRODUCTION
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium mt-0.5">
                Uptime &amp; Reliability SLA
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD 2: Kiri Bawah - Surface White Card (#FFFFFF) dengan Ikon Emerald */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="hidden md:flex items-center gap-3.5 z-20 absolute -bottom-6 left-6 lg:left-10 bg-[#FFFFFF] text-[#09090B] px-5 py-4 rounded-2xl border border-[#E2E8F0] shadow-xl shadow-slate-900/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 text-[#10B981]">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-semibold tracking-tight text-[#09090B]">
                  &lt;100ms
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#10B981]/10 text-[#10B981]">
                  EDGE SSR
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium mt-0.5">
                Latensi Respon API &amp; Edge Runtime
              </p>
            </div>
          </motion.div>

          {/* FLOATING CARD 3: Kanan Atas - Surface White Card (#FFFFFF) dengan Badge Bintang */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="hidden md:flex items-center gap-3.5 z-20 absolute -top-6 -right-4 lg:-right-8 bg-[#FFFFFF] text-[#09090B] px-5 py-4 rounded-2xl border border-[#E2E8F0] shadow-xl shadow-slate-900/5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB]">
              <Star className="h-5 w-5 fill-[#2563EB]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-2xl font-semibold tracking-tight text-[#09090B]">
                  5.0 ★
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#2563EB]/10 text-[#2563EB]">
                  VERIFIED B2B
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium mt-0.5">
                Kepuasan Klien &amp; Garansi Sistem
              </p>
            </div>
          </motion.div>

          {/* KONTAINER SHOWCASE ARSITEKTUR INTERAKTIF */}
          <div className="relative rounded-3xl min-h-[480px] lg:min-h-[540px] border border-[#E2E8F0] bg-[#0F172A] text-white shadow-soft-lg overflow-hidden p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
            {/* Subtle Architectural Grid Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:32px_32px]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-1/4 h-72 w-72 rounded-full bg-[#2563EB]/20 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-12 left-1/4 h-64 w-64 rounded-full bg-[#10B981]/15 blur-3xl"
            />

            {/* Top Telemetry Header Bar */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-800/90">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                </div>
                <div className="h-4 w-[1px] bg-slate-800 mx-1" />
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
                  <Terminal className="h-3.5 w-3.5 text-[#2563EB]" />
                  <span>triloe-enterprise-telemetry://cluster-id-jkt-01</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-xs font-mono font-semibold text-[#10B981]">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  ALL SYSTEMS OPERATIONAL
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-400">
                  <GitBranch className="h-3.5 w-3.5 text-[#2563EB]" />
                  v4.2.0-stable
                </span>
              </div>
            </div>

            {/* Middle Architecture Pipeline & Telemetry Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 my-6">
              {/* Left 7 Cols: Decoupled Architecture Nodes + Live Worker Queue */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* 3 Decoupled Core Nodes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        NEXT.JS EDGE SSR
                      </span>
                      <Globe className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <p className="font-mono text-xl font-semibold text-white mt-2">
                      99 / 100
                    </p>
                    <p className="text-xs text-[#10B981] font-mono mt-1">
                      LCP 0.8s • CLS 0.01
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        SIAKAD PDF ENGINE
                      </span>
                      <FileSpreadsheet className="h-4 w-4 text-[#10B981]" />
                    </div>
                    <p className="font-mono text-xl font-semibold text-white mt-2">
                      1,240 PDF/m
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Parallel QStash Worker
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-900/90 border border-slate-800/90 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        POSTGRES RLS
                      </span>
                      <Lock className="h-4 w-4 text-[#2563EB]" />
                    </div>
                    <p className="font-mono text-xl font-semibold text-white mt-2">
                      100% Isolated
                    </p>
                    <p className="text-xs text-[#10B981] font-mono mt-1">
                      Zero-Trust Multi-Role
                    </p>
                  </div>
                </div>

                {/* Live Queue Stream Table */}
                <div className="rounded-2xl bg-slate-900/95 border border-slate-800/90 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-[#2563EB]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                        Live Asynchronous Worker &amp; Webhook Stream
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#10B981]">
                      Exponential Backoff Active
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {LIVE_QUEUE_TELEMETRY.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-xl bg-slate-950/70 border border-slate-800/80 px-3.5 py-2.5 text-xs"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="font-mono font-semibold text-[#2563EB] shrink-0">
                            [{item.id}]
                          </span>
                          <span className="text-slate-200 truncate">
                            {item.task}
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <span className="font-mono text-slate-400">
                            {item.worker}
                          </span>
                          <span className="font-mono font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                            {item.status} ({item.latency})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Real-Time System Blueprint & Code Telemetry */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-slate-900/95 border border-slate-800/90 p-4 sm:p-5 pb-16 lg:pb-20">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200">
                      <Cpu className="h-4 w-4 text-[#2563EB]" />
                      Decoupled Pipeline Topology
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-[#2563EB]/20 text-blue-300">
                      Supabase + Upstash
                    </span>
                  </div>

                  <div className="rounded-xl bg-slate-950/90 border border-slate-800 p-3.5 font-mono text-xs leading-relaxed text-slate-300 space-y-1.5">
                    <div className="text-slate-500">
                      {"// Resilient Exponential Backoff & RLS Guard"}
                    </div>
                    <div>
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-emerald-300">retryDelay</span> ={" "}
                      <span className="text-amber-300">baseMs</span> *{" "}
                      <span className="text-purple-300">2 ** attempt</span> +{" "}
                      <span className="text-amber-300">jitter</span>;
                    </div>
                    <div className="pt-1 flex items-center justify-between text-[11px] border-t border-slate-800/80">
                      <span className="text-slate-400">
                        Max Retries:{" "}
                        <strong className="text-white">5 attempts</strong>
                      </span>
                      <span className="text-[#10B981]">
                        DLQ Rate: 0.00%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture Flow Pills inside Telemetry */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-2.5 text-center">
                    <Server className="h-4 w-4 text-[#2563EB] mx-auto mb-1" />
                    <span className="block font-mono text-[11px] font-semibold text-white">
                      RSC + Actions
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      Zero Client Bloat
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-2.5 text-center">
                    <Database className="h-4 w-4 text-[#10B981] mx-auto mb-1" />
                    <span className="block font-mono text-[11px] font-semibold text-white">
                      Realtime Sync
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      WebSockets Push
                    </span>
                  </div>
                  <div className="rounded-xl bg-slate-950/70 border border-slate-800 p-2.5 text-center">
                    <MessageSquare className="h-4 w-4 text-[#2563EB] mx-auto mb-1" />
                    <span className="block font-mono text-[11px] font-semibold text-white">
                      WA Gateway
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      &lt;2s Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar (Left of the Cutout Corner) */}
            <div className="relative z-10 flex items-center gap-4 text-xs text-slate-400 pb-16 sm:pb-14 lg:pb-2">
              <span className="inline-flex items-center gap-1.5 font-mono text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                Dual-Design System Isolation:
              </span>
              <span className="hidden sm:inline font-mono text-slate-400">
                (marketing) Triloe Light B2B • (portal) Shopify Polaris
              </span>
            </div>

            {/* TRILOE CUTOUT CORNER (Sudut Kanan Bawah dengan Inverted Radius Mulus) */}
            <div className="cutout-corner-mask z-20 max-w-full">
              <div className="flex flex-wrap items-center justify-end gap-2 pt-1 pl-1">
                {SERVICE_PILLS.map((pill) => (
                  <span
                    key={pill}
                    className="px-4 py-2 rounded-full bg-white border border-[#E2E8F0] text-xs sm:text-sm font-semibold text-[#09090B] shadow-sm transition-colors duration-200 cursor-default hover:border-[#2563EB] hover:text-[#2563EB]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Responsive Stat Cards Grid (Shown below main container on small screens) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 md:hidden">
            <div className="rounded-2xl bg-[#0F172A] text-white p-4 border border-slate-800">
              <p className="font-mono text-2xl font-semibold text-white">
                99.9%
              </p>
              <p className="text-xs text-slate-300 mt-1">
                Uptime &amp; Reliability SLA
              </p>
            </div>
            <div className="rounded-2xl bg-white text-[#09090B] p-4 border border-[#E2E8F0] shadow-triloe-soft">
              <p className="font-mono text-2xl font-semibold text-[#09090B]">
                &lt;100ms
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Latensi Respon API &amp; Edge Runtime
              </p>
            </div>
            <div className="rounded-2xl bg-white text-[#09090B] p-4 border border-[#E2E8F0] shadow-triloe-soft">
              <p className="font-mono text-2xl font-semibold text-[#09090B]">
                5.0 ★
              </p>
              <p className="text-xs text-[#64748B] mt-1">
                Kepuasan Klien &amp; Garansi Sistem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
