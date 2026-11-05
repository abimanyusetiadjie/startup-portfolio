"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  FileSpreadsheet,
  GitBranch,
  Globe,
  Lock,
  MessageSquare,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const LIVE_QUEUE_FEED = [
  {
    id: "JOB-9104",
    title: "SIAKAD_PDF_BATCH • 500 Rapor Semester Ganjil",
    status: "COMPLETED",
    latency: "34ms",
    worker: "qstash-worker-sin1",
  },
  {
    id: "WH-2281",
    title: "WA_GATEWAY • Notifikasi Tagihan SPP Multi-Kampus",
    status: "DELIVERED",
    latency: "61ms",
    worker: "wa-dispatcher-01",
  },
  {
    id: "SYNC-770",
    title: "ATOMIC_STOCK_LOCK • Sinkronisasi 4 Marketplace",
    status: "SYNCED",
    latency: "42ms",
    worker: "supabase-realtime",
  },
];

export function ModernHeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt Physics for the Interactive System Topology
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 180,
    damping: 24,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 bg-[#FFFFFF] text-[#09090B]">
      {/* Subtle Architectural Grid Background Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[500px] w-full max-w-7xl bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,82,255,0.06),transparent)]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. HERO HEADER (Clean, Confident, Anti-AI-Slop) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Eyebrow Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10B981]" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-[#09090B]">
              PRODUCTION CLUSTER • UPTIME SLA 99.98%
            </span>
          </motion.div>

          {/* Headline Utama: Human, Direct, Authoritative */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl lg:text-[68px] font-extrabold tracking-tight leading-[1.06] text-[#09090B]"
          >
            Infrastruktur Perangkat Lunak untuk Sistem yang{" "}
            <span className="text-[#0052FF] underline decoration-[#0052FF]/20 underline-offset-8">
              Menolak Down.
            </span>
          </motion.h1>

          {/* Subheadline: Concise, Value-Oriented */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal"
          >
            Kami merekayasa sistem informasi institusi, pemrosesan antrean data paralel, dan aplikasi web mission-critical dengan arsitektur terpisah dan jaminan reliabilitas mutlak.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <motion.a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#0052FF] text-white font-semibold text-sm sm:text-base shadow-md shadow-[#0052FF]/25 hover:bg-[#1D4ED8] transition-colors"
            >
              <span>Konsultasi Teknis Arsitektur</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </motion.a>

            <motion.a
              href="#sistem"
              onClick={(e) => handleSmoothScroll(e, "#sistem")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-[#09090B] border border-slate-200 font-semibold text-sm sm:text-base hover:bg-slate-50 transition-colors shadow-2xs"
            >
              Lihat Solusi Rekayasa
            </motion.a>
          </motion.div>
        </div>

        {/* 2. REAL ENGINEERING ARTIFACT (Stripe/Linear-grade Interactive System Canvas) */}
        <div className="max-w-6xl mx-auto mt-14 sm:mt-18 relative">
          {/* FLOATING METRIC 1: SLA Card (Left-Top) */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="hidden lg:flex items-center gap-3 absolute -top-6 -left-6 z-20 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-xl shadow-slate-900/5 text-[#09090B]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#0052FF] border border-blue-100">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-bold text-[#09090B]">99.98%</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-[#10B981] font-semibold">
                  ACTIVE SLA
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium">Uptime Beban Puncak Ujian</p>
            </div>
          </motion.div>

          {/* FLOATING METRIC 2: Latency Card (Right-Top) */}
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="hidden lg:flex items-center gap-3 absolute -top-6 -right-6 z-20 bg-white border border-slate-200 rounded-2xl px-5 py-3.5 shadow-xl shadow-slate-900/5 text-[#09090B]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-[#10B981] border border-emerald-100">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xl font-bold text-[#09090B]">&lt;38ms</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 text-[#0052FF] font-semibold">
                  EDGE WORKER
                </span>
              </div>
              <p className="text-xs text-[#64748B] font-medium">Latensi Sinkronisasi Database</p>
            </div>
          </motion.div>

          {/* 3D PERSPECTIVE TOPOLOGY CONSOLE */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="rounded-3xl border border-slate-200/90 bg-[#0A0D14] text-white p-5 sm:p-8 lg:p-10 shadow-2xl shadow-slate-900/10 overflow-hidden relative"
          >
            {/* Top Console Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                  <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-[1px] bg-slate-800 mx-1" />
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
                  <Terminal className="h-3.5 w-3.5 text-[#0052FF]" />
                  <span>cluster-jkt-01.abinest.cloud/topology</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-[#10B981]">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
                  ALL NODES HEALTHY
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-slate-400">
                  <GitBranch className="h-3.5 w-3.5 text-[#0052FF]" />
                  v3.8-edge
                </span>
              </div>
            </div>

            {/* 3 Decoupled Nodes Visualization Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    NEXT.JS EDGE SSR
                  </span>
                  <Globe className="h-4 w-4 text-[#0052FF]" />
                </div>
                <p className="font-mono text-2xl font-bold text-white mt-2">100 / 100</p>
                <p className="text-xs text-[#10B981] font-mono mt-1">LCP 0.6s • CLS 0.00</p>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    PARALLEL PDF ENGINE
                  </span>
                  <FileSpreadsheet className="h-4 w-4 text-[#10B981]" />
                </div>
                <p className="font-mono text-2xl font-bold text-white mt-2">1,240 PDF/m</p>
                <p className="text-xs text-slate-400 font-mono mt-1">Distributed QStash Worker</p>
              </div>

              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    POSTGRES RLS ENGINE
                  </span>
                  <Lock className="h-4 w-4 text-[#0052FF]" />
                </div>
                <p className="font-mono text-2xl font-bold text-white mt-2">100% Isolated</p>
                <p className="text-xs text-[#10B981] font-mono mt-1">Zero-Trust Multi-Tenant</p>
              </div>
            </div>

            {/* Live Queue Stream Ticker */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-4">
              <div className="flex items-center justify-between text-xs mb-3">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#0052FF]" />
                  <span className="font-semibold text-slate-200 uppercase tracking-wider">
                    Live Worker Queue &amp; Real-Time Dispatcher
                  </span>
                </div>
                <span className="font-mono text-[11px] text-[#10B981]">Backoff Auto-Retry Active</span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                {LIVE_QUEUE_FEED.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-[#0052FF] font-semibold shrink-0">[{item.id}]</span>
                      <span className="text-slate-300 truncate">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-slate-400">{item.worker}</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-[#10B981] font-bold text-[10px]">
                        {item.status} ({item.latency})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Proof Bar */}
            <div className="mt-5 pt-4 border-t border-slate-800/90 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
              <span className="flex items-center gap-1.5 font-mono text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-[#10B981]" />
                Arsitektur Teruji di 4.200 Siswa &amp; Jutaan Transaksi
              </span>
              <Link
                href="/portal"
                className="font-mono text-[#0052FF] hover:underline flex items-center gap-1"
              >
                <span>Inspeksi Client Portal (/portal)</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
