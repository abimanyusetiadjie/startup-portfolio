"use client";

import {
  Cloud,
  Shield,
  Database,
  Cpu,
  Terminal,
  Lock,
  Activity,
  Layers,
  Server,
  Zap,
  Globe,
  Code2,
  Workflow,
  Sparkles,
  Network,
  Radio,
} from "lucide-react";

export function GroveHeroSection() {
  const metrics = [
    {
      value: "24/7",
      label: "Proactive monitoring & rapid response support.",
    },
    {
      value: "92%",
      label: "First-contact resolution rate for critical tickets.",
    },
    {
      value: "99%",
      label: "Guaranteed system uptime across managed cloud.",
    },
    {
      value: "10X",
      label: "Faster deployment & workflow automation speed.",
    },
  ];

  return (
    <section id="home" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background Radial Amber Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-orange-500/10 blur-[130px] rounded-full"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Hero: 2-Column Asymmetric Layout (55% / 45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (55% -> 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                WELCOME TO TECHROOS
              </span>
            </div>

            {/* Headline H1 with Orange Gradient Highlights */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.12]">
              You Don&apos;t Just{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                Need
              </span>{" "}
              Another IT Guy.
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                You Need a Roos.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-[500px] leading-relaxed">
              We engineer proactive cloud infrastructure, mission-critical system automation, and relentless technical support that keeps your operations running at scale with zero downtime.
            </p>

            {/* Dark CTA Button with Orange Glow */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#121318] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.35)] transition-all duration-300"
              >
                <span>Get Started</span>
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                <span>Explore Methodology</span>
                <span className="text-orange-400">→</span>
              </a>
            </div>
          </div>

          {/* Right Column (45% -> 5 cols): Tech Node Network Matrix */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] flex items-center justify-center p-4">
              {/* Radial glow directly behind the node matrix */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/15 via-transparent to-amber-500/10 blur-2xl rounded-full"
              />

              {/* Connecting circuit lines and glowing orange vertical accent */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full z-20"
                viewBox="0 0 360 360"
                fill="none"
              >
                {/* Horizontal & Branch connector lines */}
                <path
                  d="M 60 150 L 140 150 L 140 220 L 210 220"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                />
                <path
                  d="M 140 80 L 140 150"
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="1.2"
                />
                <circle cx="140" cy="150" r="3" fill="#F97316" />

                {/* Vertical glowing orange accent line on the right */}
                <line
                  x1="324"
                  y1="50"
                  x2="324"
                  y2="300"
                  stroke="url(#orange-accent-glow)"
                  strokeWidth="2.5"
                />
                <circle cx="324" cy="120" r="4" fill="#FF6B00" />
                <circle cx="324" cy="240" r="4" fill="#FF6B00" />

                <defs>
                  <linearGradient
                    id="orange-accent-glow"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#FF6B00" stopOpacity="0.2" />
                    <stop offset="35%" stopColor="#FF6B00" stopOpacity="1" />
                    <stop offset="70%" stopColor="#D97706" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF6B00" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>

              {/* 4x4 Grid of Dark Glassmorphism Node Tiles */}
              <div className="grid grid-cols-4 gap-3 relative z-10">
                {/* Row 1 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318]/50 border border-white/[0.04] flex items-center justify-center text-zinc-700" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318]/50 border border-white/[0.04] flex items-center justify-center text-zinc-700" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>

                {/* Row 2 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Database className="w-5 h-5" />
                </div>
                {/* Orange Highlighted Center Node */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-orange-500/25 to-amber-600/15 border border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.3)] flex items-center justify-center text-orange-400">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Activity className="w-5 h-5" />
                </div>

                {/* Row 3 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318]/50 border border-white/[0.04] flex items-center justify-center text-zinc-700" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Lock className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Server className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318]/50 border border-white/[0.04] flex items-center justify-center text-zinc-700" />

                {/* Row 4 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318]/50 border border-white/[0.04] flex items-center justify-center text-zinc-700" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] flex items-center justify-center text-zinc-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar Hero: 4-Column Metric Strip with Top & Bottom Borders */}
        <div className="mt-20 pt-8 pb-8 border-y border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-2">
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {m.value}
              </div>
              <p className="text-xs sm:text-[13px] text-zinc-400 leading-snug">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
