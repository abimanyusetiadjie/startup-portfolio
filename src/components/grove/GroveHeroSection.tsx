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
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export function GroveHeroSection() {
  const metrics = [
    {
      value: "99.9%",
      label: "Jaminan SLA Uptime",
      desc: "Infrastruktur cloud sekolah & enterprise tanpa risiko down sepanjang tahun.",
    },
    {
      value: "< 15 mnt",
      label: "Respons Engineer",
      desc: "Penanganan kendala langsung oleh tim engineer inti tanpa birokrasi tiket.",
    },
    {
      value: "0%",
      label: "Crash Saat Ujian",
      desc: "Teruji stabil saat 1.200+ siswa ujian serentak dan cetak 600+ PDF rapor.",
    },
    {
      value: "100%",
      label: "Hak Milik Source Code",
      desc: "Seluruh repositori Git, skema database, dan IP menjadi aset penuh Anda.",
    },
  ];

  return (
    <section id="beranda" className="relative pt-12 pb-16 overflow-hidden bg-white">
      {/* Soft Ambient Light Warm Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-gradient-to-b from-orange-100/60 via-amber-50/40 to-transparent blur-[120px] rounded-full"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Hero Split: Left 55% Copy + Right 45% Light Matrix Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-800">
                SOLUSI IT ANDAL UNTUK UMKM &amp; INSTITUSI
              </span>
            </div>

            {/* Headline H1 with Orange Serif Italic Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
              Anda Fokus pada{" "}
              <span className="font-serif italic font-normal text-orange-600 underline decoration-orange-300 decoration-wavy decoration-2 underline-offset-8">
                Pertumbuhan.
              </span>
              <br />
              Dan Kami Jalankan IT Anda
              <br />
              Tanpa Hambatan.
            </h1>

            {/* Sub-headline */}
            <p className="text-sm sm:text-base text-slate-600 max-w-[520px] leading-relaxed">
              SIAKAD sekolah anti-down, website institusi super cepat Next.js 15 skor 95–100, dan otomasi WhatsApp resmi Meta — dirancang untuk stabilitas jangka panjang dengan kepemilikan source code 100% di tangan Anda.
            </p>

            {/* Light Theme CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20sistem%20IT."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-200"
              >
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#layanan"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200 transition-colors"
              >
                <span>Lihat Layanan Kami</span>
                <span className="text-orange-500">→</span>
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Tanpa Biaya Lisensi Bulanan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Full Source Code Repositori</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Garansi Go-Live &amp; SLA 99.9%</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Light Mode 4x4 Circuit Node Grid */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] flex items-center justify-center p-4">
              {/* Soft background ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-200/30 via-amber-100/20 to-blue-100/30 blur-2xl rounded-3xl"
              />

              {/* Connecting circuit lines in clean slate */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full z-20"
                viewBox="0 0 360 360"
                fill="none"
              >
                <path
                  d="M 60 150 L 140 150 L 140 220 L 210 220"
                  stroke="rgba(148, 163, 184, 0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="140" cy="150" r="3.5" fill="#F97316" />

                {/* Orange Vertical Accent Line */}
                <line
                  x1="324"
                  y1="50"
                  x2="324"
                  y2="300"
                  stroke="#F97316"
                  strokeWidth="2.5"
                  strokeDasharray="6 4"
                />
                <circle cx="324" cy="120" r="4.5" fill="#FF7A00" />
                <circle cx="324" cy="240" r="4.5" fill="#FF7A00" />
              </svg>

              {/* 4x4 Light Node Cards */}
              <div className="grid grid-cols-4 gap-3 relative z-10">
                {/* Row 1 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Cloud className="w-5 h-5 text-sky-500" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Cpu className="w-5 h-5 text-purple-500" />
                </div>

                {/* Row 2 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Terminal className="w-5 h-5 text-slate-700" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Database className="w-5 h-5 text-blue-600" />
                </div>
                {/* Featured Highlight Center Node */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 border border-orange-400 shadow-[0_6px_20px_rgba(249,115,22,0.4)] flex items-center justify-center text-white">
                  <Shield className="w-6 h-6 fill-white" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Activity className="w-5 h-5 text-emerald-500" />
                </div>

                {/* Row 3 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Lock className="w-5 h-5 text-rose-500" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Server className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300" />

                {/* Row 4 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Zap className="w-5 h-5 text-amber-500" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-300" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Layers className="w-5 h-5 text-teal-500" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 hover:border-orange-200 transition-all">
                  <Globe className="w-5 h-5 text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Strip in Clean Light Card */}
        <div className="mt-20 pt-8 pb-8 border-y border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-50/50 rounded-2xl px-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="space-y-1.5 pl-2 border-l-2 border-orange-500/40">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0F172A]">
                {m.value}
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-800">
                {m.label}
              </h3>
              <p className="text-xs text-slate-500 leading-snug">
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
