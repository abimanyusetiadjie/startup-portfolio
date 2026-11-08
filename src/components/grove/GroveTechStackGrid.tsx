"use client";

import {
  Database,
  Globe,
  MessageSquare,
  Shield,
  Cpu,
  Layers,
  Cloud,
  FileSpreadsheet,
  Lock,
  Terminal,
  Zap,
  Server,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveTechStackGrid() {
  const { language } = useLanguage();

  // 6 columns x 2 rows = 12 colorful app tiles with staggered vertical wave (matching slice_2.png)
  const columns = [
    // Col 1 (Up)
    [
      {
        name: "Next.js 15",
        icon: Globe,
        color: "#FFFFFF",
        bg: "from-zinc-700/40 to-zinc-900",
        ring: "border-white/20",
      },
      {
        name: "Cloudflare WAF",
        icon: Cloud,
        color: "#38BDF8",
        bg: "from-sky-500/25 to-sky-950/60",
        ring: "border-sky-500/30",
      },
    ],
    // Col 2 (Shifted Down)
    [
      {
        name: "WhatsApp API",
        icon: MessageSquare,
        color: "#22C55E",
        bg: "from-emerald-500/25 to-emerald-950/60",
        ring: "border-emerald-500/30",
      },
      {
        name: "Docker Cluster",
        icon: Server,
        color: "#3B82F6",
        bg: "from-blue-500/25 to-blue-950/60",
        ring: "border-blue-500/30",
      },
    ],
    // Col 3 (Up)
    [
      {
        name: "PostgreSQL RLS",
        icon: Database,
        color: "#60A5FA",
        bg: "from-indigo-500/25 to-amber-500/20",
        ring: "border-indigo-400/30",
      },
      {
        name: "PDF Engine",
        icon: FileSpreadsheet,
        color: "#4ADE80",
        bg: "from-green-500/25 to-amber-500/20",
        ring: "border-green-400/30",
      },
    ],
    // Col 4 (Shifted Down)
    [
      {
        name: "Zero-Trust Auth",
        icon: Shield,
        color: "#F43F5E",
        bg: "from-rose-500/25 to-emerald-900/40",
        ring: "border-rose-500/30",
      },
      {
        name: "Edge Caching",
        icon: Zap,
        color: "#2DD4BF",
        bg: "from-teal-500/25 to-teal-950/60",
        ring: "border-teal-400/30",
      },
    ],
    // Col 5 (Up)
    [
      {
        name: "Microservices",
        icon: Cpu,
        color: "#A855F7",
        bg: "from-purple-500/25 to-purple-950/60",
        ring: "border-purple-500/30",
      },
      {
        name: "TypeScript Strict",
        icon: Terminal,
        color: "#38BDF8",
        bg: "from-cyan-500/25 to-cyan-950/60",
        ring: "border-cyan-400/30",
      },
    ],
    // Col 6 (Shifted Down)
    [
      {
        name: "Client Portal",
        icon: Layers,
        color: "#818CF8",
        bg: "from-indigo-500/25 to-indigo-950/60",
        ring: "border-indigo-400/30",
      },
      {
        name: "SLA Telemetry",
        icon: Lock,
        color: "#E06D3B",
        bg: "from-orange-500/25 to-orange-950/60",
        ring: "border-orange-500/30",
      },
    ],
  ];

  return (
    <section id="arsitektur" className="py-10 relative overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
            <span>
              {language === "id" ? "EKOSISTEM LAYANAN" : "OUR SERVICES"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            {language === "id" ? (
              <>
                Layanan IT Menyeluruh yang
                <br />
                Menggerakkan Sistem Anda
              </>
            ) : (
              <>
                Comprehensive IT Services
                <br />
                That Power Your Stack
              </>
            )}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#8E8E93] max-w-md mx-auto leading-relaxed">
            {language === "id"
              ? "Integrasi teknologi modern dari ujung ke ujung untuk menjamin kecepatan, keamanan data, dan skalabilitas jangka panjang."
              : "End-to-end modern technology integrations engineered for speed, data security, and long-term scalability."}
          </p>
        </div>

        {/* 2-Row Staggered Colorful App Icon Grid over Subtle Matrix (matching slice_2.png) */}
        <div className="relative max-w-[760px] mx-auto py-8 px-4">
          {/* Subtle background grid lines & warm center glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-40 rounded-full bg-[#E06D3B]/10 blur-[65px]"
          />

          <div className="relative z-10 grid grid-cols-3 sm:grid-cols-6 gap-5 sm:gap-7 justify-items-center">
            {columns.map((col, colIdx) => {
              const isShiftedDown = colIdx % 2 === 1;
              return (
                <div
                  key={colIdx}
                  className={`flex flex-col gap-5 sm:gap-7 ${
                    isShiftedDown ? "sm:translate-y-5" : ""
                  }`}
                >
                  {col.map((tile, rowIdx) => {
                    const Icon = tile.icon;
                    return (
                      <div
                        key={rowIdx}
                        title={tile.name}
                        className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#18181B] border border-white/[0.08] hover:border-white/25 shadow-[0_10px_25px_rgba(0,0,0,0.6)] flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                      >
                        <div
                          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${tile.bg} border ${tile.ring} flex items-center justify-center transition-transform group-hover:scale-105`}
                        >
                          <Icon
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            style={{ color: tile.color }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>

        {/* Centered "See All" Pill Button + Orange Dash (matching slice_2.png) */}
        <div className="mt-10 flex flex-col items-center">
          <a
            href="#studi-kasus"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full text-[11px] font-medium text-white bg-[#1A1A1A] hover:bg-[#242424] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all"
          >
            {language === "id" ? "Lihat Semua" : "See All"}
          </a>

          <div className="w-6 h-[2px] bg-[#E06D3B] mt-14" />
        </div>
      </div>
    </section>
  );
}
