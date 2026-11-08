"use client";

import { useState } from "react";
import {
  Shield,
  Activity,
  Zap,
  CheckCircle2,
  ArrowUpRight,
  Lock,
  Server,
  FileSpreadsheet,
  MessageSquare,
  Users,
  Eye,
} from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveHeroSection() {
  const [activeTab, setActiveTab] = useState<"siakad" | "whatsapp" | "telemetry">(
    "siakad"
  );

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
    <section id="beranda" className="relative pt-10 pb-16 overflow-hidden bg-white">
      {/* Background Subtle Warm Radial Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-orange-100/50 via-amber-50/40 to-transparent blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Hero Split: Left 55% Copy + Right 45% Live Interactive Dashboard Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols on large desktop) */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Live Operations Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-bold tracking-wide text-slate-800">
                ABINEST CLOUD ENGINE • 99.99% ALL SYSTEMS OPERATIONAL
              </span>
            </div>

            {/* Headline H1 with Orange Serif Italic Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight text-[#0F172A] leading-[1.12]">
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
            <p className="text-sm sm:text-base text-slate-600 max-w-[540px] leading-relaxed">
              SIAKAD sekolah anti-down, website institusi super cepat Next.js 15 skor 95–100, dan otomasi WhatsApp resmi Meta — dengan garansi SLA 99.9% dan kepemilikan source code 100% di tangan Anda.
            </p>

            {/* Light Theme CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20sistem%20IT."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-200"
              >
                <span>Konsultasi Gratis via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#studi-kasus"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-colors"
              >
                <Eye className="w-4 h-4 text-orange-500" />
                <span>Lihat Studi Kasus</span>
              </a>
            </div>

            {/* Trust Micro-Pills */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Hak Milik Source Code</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Tanpa Biaya Lisensi Bulanan</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Respons Engineer &lt; 15 Menit</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Dashboard Showcase with Floating Metric Badges */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            {/* Ambient Lighting Behind Dashboard */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 bg-gradient-to-tr from-orange-300/30 via-amber-200/20 to-blue-300/20 blur-3xl rounded-3xl"
            />

            {/* Floating Metric Badge 1: Top Right (Exams Concurrent Active) */}
            <div className="hidden sm:flex absolute -top-5 -right-3 z-30 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] items-center gap-3 animate-fadeIn">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Ujian Massal Aktif
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900">
                  1.240 Siswa • 0% Crash
                </div>
              </div>
            </div>

            {/* Floating Metric Badge 2: Bottom Left (PDF Parallel Engine) */}
            <div className="hidden sm:flex absolute -bottom-5 -left-3 z-30 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] items-center gap-3 animate-fadeIn">
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Antrean PDF Rapor
                </span>
                <div className="text-xs font-bold text-slate-900">
                  612 Selesai dalam 4.2 Detik
                </div>
              </div>
            </div>

            {/* Main Realistic Dashboard Window */}
            <div className="relative z-20 bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.09)] rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Window Header Bar */}
              <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="bg-white/90 border border-slate-200 rounded-lg px-3 py-1 text-[11px] font-mono text-slate-600 flex items-center gap-1.5 shadow-inner">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>admin.siakad.abinest.id/live-hub</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 hidden sm:inline">
                  TLS 1.3
                </span>
              </div>

              {/* Inside Dashboard Content */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Dashboard Top Row: Abinest Logo + Switcher */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <AbinestLogo size="sm" showTagline={false} />
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-[10px] font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveTab("siakad")}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        activeTab === "siakad"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      SIAKAD Core
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("whatsapp")}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        activeTab === "whatsapp"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Meta WA API
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("telemetry")}
                      className={`px-2.5 py-1 rounded-lg transition-all ${
                        activeTab === "telemetry"
                          ? "bg-white text-slate-900 shadow-sm"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Telemetri
                    </button>
                  </div>
                </div>

                {/* Tab 1: SIAKAD Core Live Stats */}
                {activeTab === "siakad" && (
                  <div className="space-y-3.5 animate-fadeIn">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1">
                        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <Users className="w-3 h-3 text-blue-500" />
                          <span>Siswa Login</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">
                          1.240
                        </div>
                        <div className="text-[9px] text-emerald-600 font-semibold">
                          Normal • Latensi 18ms
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1">
                        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <Server className="w-3 h-3 text-orange-500" />
                          <span>Beban CPU</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">
                          24.8%
                        </div>
                        <div className="text-[9px] text-emerald-600 font-semibold">
                          Cluster Auto-Scale
                        </div>
                      </div>

                      <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-1">
                        <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                          <Shield className="w-3 h-3 text-emerald-500" />
                          <span>Status RLS</span>
                        </div>
                        <div className="text-base sm:text-lg font-bold text-slate-900">
                          Active
                        </div>
                        <div className="text-[9px] text-slate-500 font-semibold">
                          Zero-Trust Policy
                        </div>
                      </div>
                    </div>

                    {/* Simulated Real-Time System Activity Feed */}
                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-2">
                      <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
                        <span>Aktivitas Sistem Real-Time</span>
                        <span className="text-emerald-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Streaming
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[11px] font-mono text-slate-600">
                        <div className="flex items-center justify-between bg-white px-2 py-1 rounded border border-slate-100">
                          <span>[14:22:08] CBT Exam Sync: Selesai 120 peserta</span>
                          <span className="text-emerald-600">✓ 200 OK</span>
                        </div>
                        <div className="flex items-center justify-between bg-white px-2 py-1 rounded border border-slate-100">
                          <span>[14:22:04] Parallel Worker: PDF Rapor #612 terbit</span>
                          <span className="text-emerald-600">✓ 1.2s</span>
                        </div>
                        <div className="flex items-center justify-between bg-white px-2 py-1 rounded border border-slate-100">
                          <span>[14:21:58] WhatsApp Webhook: Notifikasi SPP terkirim</span>
                          <span className="text-emerald-600">✓ Meta API</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: WhatsApp Meta API Stats */}
                {activeTab === "whatsapp" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-3">
                        <div className="text-[10px] text-emerald-800 font-semibold">
                          Delivery Rate Resmi Meta
                        </div>
                        <div className="text-xl font-bold text-emerald-950 mt-1">
                          99.82%
                        </div>
                        <div className="text-[10px] text-emerald-700 mt-1">
                          Kunci Idempotensi Aktif
                        </div>
                      </div>
                      <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                        <div className="text-[10px] text-slate-500 font-semibold">
                          Rata-rata Waktu Terkirim
                        </div>
                        <div className="text-xl font-bold text-slate-900 mt-1">
                          1.3 Detik
                        </div>
                        <div className="text-[10px] text-slate-500 mt-1">
                          Anti-Duplikasi Database
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-xl p-3 text-xs text-slate-600 space-y-1.5">
                      <div className="font-bold text-slate-800 text-[11px]">
                        Template Pesan Resmi Terverifikasi Meta
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-500">
                        Tagihan SPP, kartu ujian siswa, absensi harian, dan kode OTP masuk langsung ke ponsel wali murid tanpa risiko blokir nomor.
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 3: Telemetry Stats */}
                {activeTab === "telemetry" && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="bg-slate-900 text-white rounded-xl p-3.5 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Node Cluster:</span>
                        <span className="text-emerald-400 font-bold">jkt-prod-01 (Healthy)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">PostgreSQL Memory:</span>
                        <span className="text-cyan-400 font-bold">1.4 GB / 8 GB (17.5%)</span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">Edge DNS Latency:</span>
                        <span className="text-amber-400 font-bold">12 ms across ID</span>
                      </div>
                    </div>
                    <div className="text-[11px] text-slate-500 text-center">
                      Monitoring 24/7 dengan automated health check setiap 3 detik.
                    </div>
                  </div>
                )}

                {/* Bottom Verification Footer */}
                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Garansi SLA 99.9% Uptime</span>
                  </div>
                  <span className="font-semibold text-orange-600">
                    Abinest Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Strip in Clean Light Card */}
        <div className="mt-20 pt-8 pb-8 border-y border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-8 bg-slate-50/70 rounded-2xl px-6 sm:px-8">
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
