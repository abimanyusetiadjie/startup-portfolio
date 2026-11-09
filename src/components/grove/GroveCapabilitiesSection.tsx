"use client";

import { useState } from "react";
import {
  Globe,
  Server,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle2,
  FileCode2,
  Download,
  ExternalLink,
  Users,
  Clock,
  Sparkles,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"website" | "sistem" | "automasi">("website");

  return (
    <section id="layanan" className="py-24 relative bg-[#FAF9F6] border-b border-slate-200/80 overflow-hidden">
      {/* Ambient Warm Sunset Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-orange-200/30 via-amber-100/35 to-rose-100/20 blur-[140px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-16">
        {/* Section Header: Minimal Copy, High Impact */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D97736]" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              SHOWROOM VISUAL PRODUK ABINEST
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12]">
            Tampilan Nyata Sistem yang Kami{" "}
            <span className="font-serif italic font-normal text-[#C2672B]">
              Bangun
            </span>{" "}
            Untuk Anda.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Bukan sekadar konsep di atas kertas. Lihat langsung bagaimana website, sistem SIAKAD, dan automasi WhatsApp kami bekerja di layar perangkat Anda.
          </p>

          {/* Quick Pillar Switcher Tabs */}
          <div className="pt-3 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("website")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "website"
                  ? "bg-[#0F172A] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Globe className="w-4 h-4 text-[#D97736]" />
              <span>1. Jasa Website Kilat</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sistem")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "sistem"
                  ? "bg-[#0F172A] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Server className="w-4 h-4 text-[#D97736]" />
              <span>2. SIAKAD &amp; Sistem Anti-Down</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("automasi")}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "automasi"
                  ? "bg-[#0F172A] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#D97736]" />
              <span>3. Automasi WhatsApp Resmi</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILAR 01: JASA PEMBUATAN WEBSITE (NEXT.JS 15 + MOBILE & PAGESPEED MOCKUP) */}
        {/* ========================================================================= */}
        {activeTab === "website" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (5 cols): Punchy Benefits & CTAs */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#C2672B] border border-orange-200 text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  Pilar 01 · Website Institusi &amp; Bisnis
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Website Sekolah &amp; Perusahaan yang Dibuka Kurang dari 0,8 Detik.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Calon wali murid dan klien menilai kredibilitas institusi Anda dari kecepatan dan kerapian website di ponsel mereka. Dibangun dengan Next.js 15 agar selalu berada di halaman pertama Google.
                </p>

                {/* 3 Visual Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">0.7s</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">Kecepatan di HP</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">98/100</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 mt-0.5">Skor Lighthouse</div>
                  </div>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#D97736]">100%</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">Source Code Milik Anda</div>
                  </div>
                </div>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mudah diupdate staf TU tanpa perlu koding (Word-like editor)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Terhubung langsung ke formulir pendaftaran murid baru (PPDB)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Optimasi SEO lokal: Muncul di pencarian Google sekolah/bisnis sekitar</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-md transition-all"
                  >
                    <span>Diskusikan Pembuatan Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): TANGIBLE DEVICE MOCKUP (Mobile + Lighthouse Gauge) */}
              <div className="lg:col-span-7 relative flex items-center justify-center py-4">
                {/* Soft Sunset Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-slate-200/25 blur-2xl rounded-full"
                />

                <div className="relative w-full max-w-[540px] flex flex-col sm:flex-row items-center justify-center gap-6">
                  {/* Smartphone Mockup */}
                  <div className="w-[280px] sm:w-[300px] rounded-[42px] bg-slate-900 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.22)] ring-1 ring-slate-800">
                    {/* Speaker & Camera Notch */}
                    <div className="h-5 flex items-center justify-center mb-1">
                      <div className="w-16 h-3.5 bg-black rounded-full" />
                    </div>

                    {/* Phone Screen UI */}
                    <div className="rounded-[32px] overflow-hidden bg-[#FAF9F6] border border-slate-200/60 text-[#0F172A] text-xs font-sans">
                      {/* Mini Navbar */}
                      <div className="bg-white px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 font-bold text-[11px]">
                          <span className="w-2 h-2 rounded-full bg-[#D97736]" />
                          SMA IT Al-Hikmah
                        </div>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold">
                          PPDB 2026 Dibuka
                        </span>
                      </div>

                      {/* Phone Hero Banner */}
                      <div className="p-4 space-y-2.5 bg-gradient-to-b from-white to-orange-50/40 border-b border-slate-100">
                        <span className="inline-block text-[9px] font-bold uppercase tracking-wider text-[#C2672B]">
                          AKREDITASI A · SURABAYA
                        </span>
                        <div className="font-extrabold text-sm leading-snug text-[#0F172A]">
                          Membentuk Generasi Pemimpin Cerdas Berakhlak Qur&apos;ani.
                        </div>
                        <p className="text-[10px] text-slate-500 leading-relaxed">
                          Kurikulum Merdeka berbasis digital dengan fasilitas laboratorium modern.
                        </p>
                        <div className="flex gap-2 pt-1">
                          <div className="px-3 py-1.5 rounded-full bg-[#D97736] text-white text-[10px] font-bold">
                            Daftar Sekarang
                          </div>
                          <div className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[10px] font-semibold">
                            Info Biaya
                          </div>
                        </div>
                      </div>

                      {/* Mini News Card */}
                      <div className="p-3.5 space-y-2">
                        <div className="flex items-center justify-between text-[10px] font-bold text-slate-600">
                          <span>Kabar Prestasi Terbaru</span>
                          <span className="text-[#D97736]">Lihat Semua</span>
                        </div>
                        <div className="bg-white rounded-xl border border-slate-200/80 p-2.5 flex items-center gap-2.5 shadow-sm">
                          <div className="w-10 h-10 rounded-lg bg-orange-100 text-[#C2672B] font-bold flex items-center justify-center text-xs shrink-0">
                            🏆
                          </div>
                          <div>
                            <div className="font-bold text-[10px] text-slate-800 line-clamp-1">
                              Juara 1 Olimpiade Sains Nasional 2026
                            </div>
                            <div className="text-[9px] text-slate-400 mt-0.5">
                              Oleh Ananda M. Rizky · Kemarin
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Google PageSpeed Card */}
                  <div className="w-full sm:w-[200px] space-y-3">
                    {/* Gauge Card */}
                    <div className="rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200 p-5 shadow-[0_15px_35px_rgba(15,23,42,0.08)] text-center space-y-3">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        GOOGLE LIGHTHOUSE
                      </div>

                      {/* Circular Gauge */}
                      <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            className="text-slate-100"
                            strokeWidth="3.5"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="text-emerald-500"
                            strokeDasharray="98, 100"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            stroke="currentColor"
                            fill="none"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <div className="absolute flex flex-col items-center">
                          <span className="text-2xl font-black text-emerald-600 leading-none">98</span>
                          <span className="text-[8px] font-bold text-slate-400">/ 100</span>
                        </div>
                      </div>

                      <div className="text-xs font-bold text-slate-800">Performa Mobile</div>
                      <div className="text-[10px] text-slate-500">
                        First Contentful Paint: <strong className="text-emerald-600">0.72s</strong>
                      </div>
                    </div>

                    {/* SEO Ready Pill */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-3 shadow-sm flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>Halaman 1 Google Siap Bersaing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILAR 02: JASA PEMBUATAN SISTEM (SIAKAD & ERP ANTI-DOWN LAPTOP MOCKUP)   */}
        {/* ========================================================================= */}
        {activeTab === "sistem" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (7 cols): TANGIBLE MACBOOK / SAFARI BROWSER MOCKUP */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-slate-200/25 blur-2xl rounded-full"
                />

                {/* MacBook / Browser Frame */}
                <div className="relative w-full rounded-2xl bg-slate-900 p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(15,23,42,0.2)] ring-1 ring-slate-800">
                  {/* Browser Top Bar */}
                  <div className="bg-slate-800 rounded-t-xl px-4 py-2 flex items-center justify-between text-slate-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-4 py-1 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      https://siakad.alhikmah.sch.id/cbt-concurrency
                    </div>
                    <div className="text-[10px] font-semibold text-emerald-400">
                      SLA 99.9% AKTIF
                    </div>
                  </div>

                  {/* Browser Content (SIAKAD Dashboard UI) */}
                  <div className="bg-[#FAF9F6] rounded-b-xl p-4 sm:p-5 space-y-4 text-xs font-sans">
                    {/* Live Concurrency Status Bar */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 flex items-center justify-between shadow-sm flex-wrap gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#C2672B] flex items-center justify-center font-bold">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                            UJIAN CBT KURIKULUM MERDEKA
                          </div>
                          <div className="text-base font-extrabold text-[#0F172A]">
                            1.240 Siswa Login Bersamaan
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          0% Crash (Normal)
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
                          CPU: 18%
                        </span>
                      </div>
                    </div>

                    {/* Table Preview */}
                    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                      <div className="bg-slate-50/80 px-4 py-2.5 border-b border-slate-100 flex items-center justify-between font-bold text-[11px] text-slate-700">
                        <span>Monitoring Ujian &amp; Nilai Real-Time</span>
                        <span className="text-slate-400 font-normal">Auto-Refresh tiap 5 dtk</span>
                      </div>
                      <div className="divide-y divide-slate-100 text-[11px]">
                        <div className="px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2 font-semibold text-slate-800">
                            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-[10px]">
                              1
                            </span>
                            <span>Ahmad Fauzan · Kelas XII-IPA 1</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                            Selesai (Nilai 94)
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2 font-semibold text-slate-800">
                            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-[10px]">
                              2
                            </span>
                            <span>Siti Nabila · Kelas XII-IPA 1</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                            Mengerjakan No. 38
                          </span>
                        </div>
                        <div className="px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2 font-semibold text-slate-800">
                            <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-600 font-bold flex items-center justify-center text-[10px]">
                              3
                            </span>
                            <span>Budi Santoso · Kelas XII-IPS 2</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-bold">
                            Mengerjakan No. 24
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Punchy Benefits */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#C2672B] border border-orange-200 text-xs font-bold uppercase tracking-wider">
                  <Server className="w-3.5 h-3.5" />
                  Pilar 02 · Sistem &amp; SIAKAD Anti-Down
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Sistem Tetap Lancar Saat 1.240 Siswa Ujian Bersamaan.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Tidak ada lagi server macet (error 504) saat momen krusial pembagian rapor atau ujian semester. Arsitektur kami memisahkan jalur ujian dan pencetakan dokumen di latar belakang.
                </p>

                {/* 3 Visual Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">0%</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 mt-0.5">Crash Saat Ujian</div>
                  </div>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">4 Menit</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">600 Cetak Rapor PDF</div>
                  </div>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#D97736]">99.9%</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">SLA Uptime Tertulis</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dirancang ramah bagi guru senior tanpa butuh pelatihan rumit</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Akses hak terpisah antara Kepala Sekolah, Guru, TU, dan Wali Murid</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Backup otomatis harian: Data nilai dan riwayat keuangan aman selamanya</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-md transition-all"
                  >
                    <span>Konsultasikan Kebutuhan Sistem</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILAR 03: JASA AUTOMASI WHATSAPP (OFFICIAL META CLOUD API CHAT MOCKUP)   */}
        {/* ========================================================================= */}
        {activeTab === "automasi" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (5 cols): Benefits */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#C2672B] border border-orange-200 text-xs font-bold uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Pilar 03 · Automasi WhatsApp &amp; Workflow
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Kirim Tagihan SPP &amp; Rapor Otomatis Tanpa Takut Nomor Terblokir.
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Staf keuangan tidak perlu lagi menyalin tagihan satu per satu ke WhatsApp. Menggunakan Meta Cloud API resmi dengan centang hijau, notifikasi invoice dan PDF kuitansi terkirim dalam 2 detik.
                </p>

                {/* 3 Visual Metric Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">&lt;2s</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-emerald-800 mt-0.5">Kecepatan Kirim</div>
                  </div>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">-12 Jam</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">Kerja Manual / Mgg</div>
                  </div>
                  <div className="rounded-2xl bg-[#FAF9F6] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#D97736]">0 Blokir</div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-500 mt-0.5">Resmi Meta API</div>
                  </div>
                </div>

                <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-700 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Terhubung langsung ke rekening Virtual Account (BCA, Mandiri, BSI, dll)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kuitansi lunas format PDF langsung terkirim saat pembayaran terverifikasi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Uang SPP dan pembayaran tagihan masuk 35% lebih cepat</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#D97736] hover:bg-[#C2672B] shadow-md transition-all"
                  >
                    <span>Diskusikan Automasi WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): TANGIBLE WHATSAPP CONVERSATION MOCKUP */}
              <div className="lg:col-span-7 relative flex items-center justify-center py-4">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/30 via-orange-200/20 to-slate-200/25 blur-2xl rounded-full"
                />

                {/* WhatsApp Mobile Frame */}
                <div className="relative w-full max-w-[380px] rounded-[36px] bg-slate-900 p-3 shadow-[0_25px_60px_rgba(15,23,42,0.22)] ring-1 ring-slate-800">
                  {/* Phone Top Notch */}
                  <div className="h-5 flex items-center justify-center mb-1">
                    <div className="w-16 h-3.5 bg-black rounded-full" />
                  </div>

                  {/* WhatsApp App Interface */}
                  <div className="rounded-[28px] overflow-hidden bg-[#E5DDD5] text-slate-800 text-xs font-sans">
                    {/* WhatsApp Top Header Bar */}
                    <div className="bg-[#075E54] text-white px-3.5 py-2.5 flex items-center justify-between shadow-md">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-xs">
                          AH
                        </div>
                        <div>
                          <div className="flex items-center gap-1 font-bold text-xs">
                            SMA IT Al-Hikmah
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[9px] font-black">
                              ✓
                            </span>
                          </div>
                          <div className="text-[10px] text-emerald-200">
                            Akun Bisnis Terverifikasi Meta
                          </div>
                        </div>
                      </div>
                      <div className="text-[10px] font-bold bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100">
                        OFFICIAL
                      </div>
                    </div>

                    {/* Chat Bubble Area */}
                    <div className="p-3.5 space-y-3 min-h-[300px]">
                      {/* Security Notice */}
                      <div className="text-center">
                        <span className="bg-[#FCF4CB] text-[#554B26] text-[9px] font-medium px-2.5 py-1 rounded-md shadow-xs inline-block">
                          🔒 Pesan ini dikirim resmi dari sistem administrasi sekolah
                        </span>
                      </div>

                      {/* Official Message Bubble */}
                      <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-sm space-y-2.5 max-w-[92%] border border-slate-100">
                        <div className="text-[11px] leading-relaxed text-slate-800">
                          Yth. <strong>Bapak/Ibu Wali Murid</strong> dari ananda <strong>Ahmad Rizky (Kelas XI-IPA 1)</strong>,
                          <br /><br />
                          Berikut kami sampaikan rincian tagihan SPP &amp; Biaya Operasional untuk bulan <strong>November 2026</strong>:
                        </div>

                        {/* Amount Box */}
                        <div className="bg-orange-50/70 border border-orange-200/80 rounded-xl p-2.5">
                          <div className="text-[10px] text-slate-500 font-medium">Total Nominal Tagihan:</div>
                          <div className="text-base font-extrabold text-[#C2672B]">Rp 750.000,-</div>
                          <div className="text-[9px] text-slate-400 mt-0.5">Jatuh Tempo: 10 November 2026</div>
                        </div>

                        {/* Attached PDF Card */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-red-100 text-red-600 font-bold flex items-center justify-center text-[10px]">
                              PDF
                            </div>
                            <div className="text-[10px] font-semibold text-slate-700">
                              Invoice_SPP_Nov2026.pdf
                              <div className="text-[8px] text-slate-400">142 KB</div>
                            </div>
                          </div>
                          <Download className="w-4 h-4 text-slate-500" />
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-1 space-y-1.5">
                          <div className="w-full py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-center text-[11px] shadow-sm flex items-center justify-center gap-1">
                            <span>Bayar Sekarang (Virtual Account)</span>
                          </div>
                          <div className="w-full py-1.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-center text-[10px]">
                            Konfirmasi Pembayaran
                          </div>
                        </div>

                        <div className="text-right text-[8px] text-slate-400 flex items-center justify-end gap-1">
                          <span>09:15</span>
                          <span className="text-emerald-500 font-bold">✓✓</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
