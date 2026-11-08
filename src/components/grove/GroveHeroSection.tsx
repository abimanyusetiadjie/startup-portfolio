"use client";

import { ArrowUpRight, ArrowDown, Shield, Server, Database, Globe, MessageSquare, Zap, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { lang } = useLanguage();

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

  const stats = [
    {
      value: "99.98%",
      label: lang === "id" ? "SLA Uptime Bergaransi" : "Guaranteed Uptime SLA",
      detail: lang === "id" ? "Monitoring 24/7 Aktif" : "24/7 Active Telemetry",
    },
    {
      value: "1.200+",
      label: lang === "id" ? "Siswa Ujian CBT Aktif" : "Concurrent CBT Students",
      detail: lang === "id" ? "0% Server Crash" : "Zero Server Lag",
    },
    {
      value: "< 1.8s",
      label: lang === "id" ? "Kecepatan WA Meta API" : "WA Dispatch Latency",
      detail: lang === "id" ? "Resmi Anti-Banned" : "Official Meta Cloud",
    },
    {
      value: "100%",
      label: lang === "id" ? "Hak Milik Source Code" : "Full IP Code Ownership",
      detail: lang === "id" ? "Tanpa Biaya Sewa Bulanan" : "Zero Monthly SaaS Rent",
    },
  ];

  const techLogos = [
    { name: "Next.js 15", sub: "Edge Runtime" },
    { name: "PostgreSQL", sub: "RLS Isolated" },
    { name: "Meta Cloud API", sub: "Official WhatsApp" },
    { name: "Supabase", sub: "Cloud Infrastructure" },
    { name: "Vercel", sub: "Global Serverless" },
    { name: "Docker", sub: "Decoupled Workers" },
    { name: "TypeScript", sub: "Type-Safe Strict" },
  ];

  return (
    <section
      id="beranda"
      className="relative w-full bg-[#06080C] text-white pt-32 sm:pt-40 pb-16 sm:pb-20 font-sans overflow-hidden border-b border-white/10"
    >
      {/* Ambient Warm Amber Light Cone (Matches Reference Mockup Glow) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[550px] bg-gradient-to-b from-[#F59E0B]/15 via-[#EA580C]/5 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#D97706]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Split Grid: Copy & Actions (Left) + Tech Node Ecosystem Graphic (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-sm shadow-orange-500" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-amber-300 font-semibold">
                {lang === "id"
                  ? "YOUR TRUSTED IT & SOFTWARE PARTNER"
                  : "YOUR TRUSTED IT & SOFTWARE PARTNER"}
              </span>
            </div>

            {/* Main Headline with Warm Amber Highlight */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-[1.12]">
              {lang === "id" ? (
                <>
                  Next-Generation Software &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#FDE68A]">
                    Digital Systems
                  </span>{" "}
                  for Institutions.
                </>
              ) : (
                <>
                  Next-Generation Software &amp;{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] via-[#FB923C] to-[#FDE68A]">
                    Digital Systems
                  </span>{" "}
                  for Institutions.
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed">
              {lang === "id"
                ? "Studio rekayasa software terpercaya untuk sekolah, yayasan, dan bisnis. Kami membangun sistem SIAKAD anti-down saat ribuan siswa ujian serentak, website institusi Next.js 15, dan integrasi WhatsApp resmi Meta — dengan 100% kepemilikan kode sumber."
                : "Trusted software engineering studio. We architect resilient school SIS platforms that endure peak exam load, ultra-fast Next.js 15 websites, and official Meta WhatsApp automations — delivered with 100% full source code ownership."}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Abinest%20Studio,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20website%20/%20sistem."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 font-bold text-xs sm:text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-orange-500/25"
              >
                <span>
                  {lang === "id"
                    ? "Konsultasi Gratis via WhatsApp"
                    : "Get Started on WhatsApp"}
                </span>
                <ArrowUpRight className="w-4 h-4 text-zinc-950" />
              </a>

              <a
                href="#pilar"
                onClick={(e) => handleSmoothScroll(e, "#pilar")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all text-xs sm:text-sm font-medium tracking-wide active:scale-[0.98]"
              >
                <span>
                  {lang === "id" ? "Lihat 4 Pilar Arsitektur ↓" : "Explore 4 Pillars ↓"}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Node Network Diagram (SVG Graphic from Reference) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Backlight Glow behind Diagram */}
            <div className="absolute inset-0 bg-[#F59E0B]/10 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-[#0D111A]/90 border border-white/15 p-6 shadow-2xl backdrop-blur-md flex flex-col justify-between overflow-hidden">
              {/* Circuit Grid Subtle Lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#F59E0B_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

              {/* Top Diagram Header */}
              <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-amber-400 font-semibold tracking-wider">
                  ABINEST DECOUPLED ARCHITECTURE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                  ACTIVE
                </span>
              </div>

              {/* Central Core & Orbiting System Nodes */}
              <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
                {/* Center Node */}
                <div className="relative flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1E2538] to-[#0A0D15] border-2 border-amber-500/60 shadow-xl shadow-orange-500/20 z-20">
                  <div className="text-center">
                    <Shield className="w-7 h-7 text-amber-400 mx-auto" />
                    <span className="text-[10px] font-mono font-bold text-white block mt-1">
                      CORE HUB
                    </span>
                  </div>
                </div>

                {/* Satellite Connected Cards */}
                <div className="w-full grid grid-cols-2 gap-3 mt-5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                    <Server className="w-4 h-4 text-amber-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-white block truncate">SIAKAD CBT</span>
                      <span className="text-[10px] text-zinc-400 font-mono">1.200+ Siswa</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                    <Database className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-white block truncate">PostgreSQL RLS</span>
                      <span className="text-[10px] text-zinc-400 font-mono">Isolated Data</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-white block truncate">Meta Cloud WA</span>
                      <span className="text-[10px] text-zinc-400 font-mono">&lt; 1.8s Dispatch</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-white block truncate">Next.js 15 Edge</span>
                      <span className="text-[10px] text-zinc-400 font-mono">Lighthouse 100</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Diagram Status */}
              <div className="relative z-10 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Cluster: Jakarta-Edge-01</span>
                <span className="text-amber-400">0% Downtime SLA</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Stats Counters (Directly Matching Reference Image Strip) */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono block">
                {s.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-200 block">
                {s.label}
              </span>
              <span className="text-[11px] font-mono text-amber-400/90 block">
                {s.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Trusted By & Tech Stack Logo Strip */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-500 block text-center mb-6 font-semibold">
            {lang === "id"
              ? "EKOSISTEM TEKNOLOGI & INFRASTRUKTUR CLOUD TERSTANDAR"
              : "SUPPORTED TECH STACK & CLOUD ECOSYSTEM"}
          </span>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
            {techLogos.map((tech, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-colors flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span className="text-xs font-bold text-zinc-200">{tech.name}</span>
                <span className="text-[10px] font-mono text-zinc-400 hidden sm:inline">
                  ({tech.sub})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
