"use client";

import { useState } from "react";
import {
  Globe,
  Server,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Users,
  Sparkles,
  Play,
  RotateCcw,
  Zap,
  Download,
  Activity,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"website" | "sistem" | "automasi">("sistem");

  // Interactive Concurrency Simulation State for SIAKAD
  const [isSimulatingExam, setIsSimulatingExam] = useState(false);
  const [studentCount, setStudentCount] = useState(1240);

  // Interactive WhatsApp Delivery Simulation State
  const [isWaSent, setIsWaSent] = useState(false);

  const runExamSimulation = () => {
    setIsSimulatingExam(true);
    setStudentCount(1240);
    setTimeout(() => {
      setStudentCount(1480);
    }, 1500);
    setTimeout(() => {
      setIsSimulatingExam(false);
    }, 3500);
  };

  const triggerWaDemo = () => {
    setIsWaSent(true);
    setTimeout(() => {
      setIsWaSent(false);
    }, 4500);
  };

  return (
    <section id="layanan-utama" className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Ambient Forest & Mint Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-emerald-100/35 via-teal-50/30 to-slate-100/20 blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-10">
        {/* Section Header: Minimal Copy, High Impact */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#059669]" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              SHOWROOM INTERAKTIF 3 PILAR LAYANAN
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Tampilan &amp; Kinerja Nyata Sistem yang Kami{" "}
            <span className="font-serif italic font-normal text-[#065F46]">
              Bangun
            </span>{" "}
            Untuk Anda.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Bukan sekadar konsep. Uji coba langsung simulasi beban sistem dan lihat tampilan nyata website, SIAKAD, serta automasi WhatsApp di bawah ini.
          </p>

          {/* 3 Interactive Switcher Tabs */}
          <div className="pt-2 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <button
              type="button"
              onClick={() => setActiveTab("website")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "website"
                  ? "bg-[#064E3B] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Globe className="w-4 h-4 text-[#059669]" />
              <span>1. Website Kilat &lt;0.8s</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sistem")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "sistem"
                  ? "bg-[#064E3B] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Server className="w-4 h-4 text-[#059669]" />
              <span>2. SIAKAD &amp; Sistem Anti-Down</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("automasi")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "automasi"
                  ? "bg-[#064E3B] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <MessageSquare className="w-4 h-4 text-[#059669]" />
              <span>3. Automasi WhatsApp Resmi</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILAR 01: JASA PEMBUATAN WEBSITE                                          */}
        {/* ========================================================================= */}
        {activeTab === "website" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column (5 cols): Punchy Benefits */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <Globe className="w-3.5 h-3.5" />
                  Pilar 01 · Website Institusi &amp; Bisnis
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Website Sekolah &amp; Perusahaan yang Terbuka Dalam 0,7 Detik di HP.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Calon orang tua murid dan klien menilai kredibilitas institusi Anda dari kecepatan dan kerapian website di ponsel. Dibangun dengan Next.js 15 agar selalu berada di halaman pertama Google.
                </p>

                {/* 3 Metric Chips */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">0.7s</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Kecepatan di HP</div>
                  </div>
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">98/100</div>
                    <div className="text-[10px] font-semibold text-emerald-800 mt-0.5">Skor Lighthouse</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#059669]">100%</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Hak Milik Source Code</div>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Mudah diupdate staf TU tanpa perlu koding (Word-like editor)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Terhubung langsung ke formulir pendaftaran murid baru (PPDB)</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                  >
                    <span>Diskusikan Pembuatan Website</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): Smartphone Mockup & Google Lighthouse Gauge */}
              <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center gap-6 py-2">
                {/* Smartphone Mockup */}
                <div className="w-[270px] sm:w-[290px] rounded-[38px] bg-slate-900 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-800 shrink-0">
                  <div className="h-4 flex items-center justify-center mb-1">
                    <div className="w-14 h-3 bg-black rounded-full" />
                  </div>
                  <div className="rounded-[28px] overflow-hidden bg-[#F8FAFC] border border-slate-200/60 text-[#0F172A] text-xs">
                    <div className="bg-white px-3.5 py-2 border-b border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-bold text-[10px]">
                        <span className="w-2 h-2 rounded-full bg-[#059669]" />
                        SMA IT Al-Hikmah
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[8px] font-bold">
                        PPDB 2026
                      </span>
                    </div>
                    <div className="p-3.5 space-y-2 bg-gradient-to-b from-white to-emerald-50/20 border-b border-slate-100">
                      <span className="inline-block text-[8px] font-bold uppercase tracking-wider text-[#065F46]">
                        AKREDITASI A · SURABAYA
                      </span>
                      <div className="font-extrabold text-xs leading-snug text-[#0F172A]">
                        Membentuk Generasi Pemimpin Cerdas Berakhlak Qur&apos;ani.
                      </div>
                      <div className="flex gap-1.5 pt-1">
                        <div className="px-2.5 py-1 rounded-full bg-[#059669] text-white text-[9px] font-bold">
                          Daftar Online
                        </div>
                        <div className="px-2.5 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-[9px] font-semibold">
                          Info Biaya
                        </div>
                      </div>
                    </div>
                    <div className="p-3 space-y-1.5">
                      <div className="text-[9px] font-bold text-slate-500 uppercase">Kabar Prestasi</div>
                      <div className="bg-white rounded-xl border border-slate-200/80 p-2 flex items-center gap-2 shadow-xs">
                        <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#065F46] font-bold flex items-center justify-center text-xs shrink-0">
                          🏆
                        </div>
                        <div className="text-[9px] font-bold text-slate-800 truncate">
                          Juara 1 Olimpiade Sains Nasional 2026
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Lighthouse Gauge Card */}
                <div className="w-full sm:w-[190px] space-y-3">
                  <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm text-center space-y-2.5">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-slate-500">
                      GOOGLE LIGHTHOUSE
                    </div>
                    <div className="relative w-18 h-18 mx-auto flex items-center justify-center">
                      <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
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
                        <span className="text-xl font-black text-emerald-600 leading-none">98</span>
                        <span className="text-[7px] font-bold text-slate-400">/ 100</span>
                      </div>
                    </div>
                    <div className="text-[11px] font-bold text-slate-800">Skor Mobile</div>
                    <div className="text-[9px] text-slate-500">
                      FCP: <strong className="text-emerald-600">0.72s</strong>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white border border-slate-200 p-2.5 shadow-xs flex items-center gap-2 text-[11px] font-semibold text-slate-700">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Halaman 1 Google Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILAR 02: JASA SISTEM (SIAKAD & LIVE CONCURRENCY TEST SIMULATOR)          */}
        {/* ========================================================================= */}
        {activeTab === "sistem" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column (7 cols): MacBook UI Frame + LIVE INTERACTIVE SIMULATOR */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-slate-900 p-2.5 sm:p-3 shadow-[0_20px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-800">
                  {/* Browser Bar */}
                  <div className="bg-slate-800 rounded-t-xl px-3.5 py-2 flex items-center justify-between text-slate-400 text-xs mb-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="px-3 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-mono flex items-center gap-1.5">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      https://siakad.alhikmah.sch.id/cbt-live
                    </div>
                    <div className="text-[10px] font-bold text-emerald-400">
                      SLA 99.9% AKTIF
                    </div>
                  </div>

                  {/* Browser Content with Concurrency Monitor */}
                  <div className="bg-[#F8FAFC] rounded-b-xl p-3.5 sm:p-4 space-y-3 text-xs">
                    {/* Live Metric Banner */}
                    <div className="bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between flex-wrap gap-2 shadow-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#065F46] flex items-center justify-center font-bold">
                          <Users className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[9px] font-bold uppercase text-slate-400">
                            UJIAN CBT BERBASIS KOMPUTER
                          </div>
                          <div className="text-sm font-extrabold text-[#0F172A]">
                            {studentCount.toLocaleString("id-ID")} Siswa Aktif Serentak
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          0% Crash
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          CPU: {isSimulatingExam ? "34%" : "18%"}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                          Latensi: {isSimulatingExam ? "44ms" : "38ms"}
                        </span>
                      </div>
                    </div>

                    {/* Table Preview */}
                    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs divide-y divide-slate-100 text-[11px]">
                      <div className="px-3 py-2 flex items-center justify-between">
                        <span className="font-semibold text-slate-800">1. Ahmad Fauzan (XII-IPA 1)</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[9px] font-bold">
                          Selesai (Nilai 94)
                        </span>
                      </div>
                      <div className="px-3 py-2 flex items-center justify-between">
                        <span className="font-semibold text-slate-800">2. Siti Nabila (XII-IPA 1)</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-bold">
                          Mengerjakan No. 38
                        </span>
                      </div>
                      <div className="px-3 py-2 flex items-center justify-between">
                        <span className="font-semibold text-slate-800">3. Budi Santoso (XII-IPS 2)</span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[9px] font-bold">
                          Mengerjakan No. 24
                        </span>
                      </div>
                    </div>

                    {/* LIVE INTERACTIVE SIMULATOR TRIGGER (COMBINED FROM BENTO GRID) */}
                    <div className="pt-1 flex items-center justify-between bg-emerald-50/70 border border-emerald-200/80 rounded-xl p-2.5">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-[#065F46] animate-pulse" />
                        <span className="text-[11px] font-semibold text-slate-700">
                          {isSimulatingExam
                            ? "Simulasi Ujian Masal Berjalan: Server Tetap Dingin..."
                            : "Uji simulasi beban server 1.240 siswa ujian serentak:"}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={runExamSimulation}
                        disabled={isSimulatingExam}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-bold text-white bg-[#064E3B] hover:bg-[#059669] transition-all disabled:opacity-60"
                      >
                        {isSimulatingExam ? (
                          <>
                            <RotateCcw className="w-3 h-3 animate-spin" />
                            <span>Menguji...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3 fill-current" />
                            <span>Mulai Tes Beban</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column (5 cols): Punchy Benefits */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <Server className="w-3.5 h-3.5" />
                  Pilar 02 · Sistem &amp; SIAKAD Anti-Down
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Sistem Tetap Lancar Saat 1.200+ Siswa Ujian Bersamaan.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Tidak ada lagi server macet (error 504) saat momen pembagian rapor atau ujian semester. Arsitektur kami memisahkan jalur ujian dan pencetakan dokumen di latar belakang.
                </p>

                {/* 3 Metric Chips */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">0%</div>
                    <div className="text-[10px] font-semibold text-emerald-800 mt-0.5">Crash Saat Ujian</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">4 Menit</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">600 Cetak Rapor</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#059669]">99.9%</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">SLA Uptime Tertulis</div>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Akses hak terpisah antara Kepala Sekolah, Guru, TU, dan Wali Murid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% kepemilikan source code tanpa biaya sewa per siswa bulanan</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
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
        {/* PILAR 03: JASA AUTOMASI (WHATSAPP META CLOUD API & LIVE TEST DISPATCH)    */}
        {/* ========================================================================= */}
        {activeTab === "automasi" && (
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left Column (5 cols): Punchy Benefits */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                  <MessageSquare className="w-3.5 h-3.5" />
                  Pilar 03 · Automasi WhatsApp &amp; Workflow
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                  Kirim Tagihan SPP &amp; Rapor Otomatis Tanpa Takut Nomor Terblokir.
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Staf keuangan tidak perlu lagi menyalin tagihan satu per satu. Menggunakan Meta Cloud API resmi dengan centang hijau, notifikasi invoice dan PDF kuitansi terkirim dalam 2 detik.
                </p>

                {/* 3 Metric Chips */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-emerald-700">&lt;2s</div>
                    <div className="text-[10px] font-semibold text-emerald-800 mt-0.5">Kecepatan Kirim</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#0F172A]">-12 Jam</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Kerja Manual / Mgg</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] border border-slate-200 p-3 text-center">
                    <div className="text-xl sm:text-2xl font-black text-[#059669]">0 Blokir</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">Resmi Meta API</div>
                  </div>
                </div>

                <div className="space-y-2 pt-1 text-xs text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Terhubung langsung ke rekening Virtual Account (BCA, Mandiri, BSI, dll)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Kuitansi format PDF otomatis terkirim begitu pembayaran terverifikasi</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#kontak"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                  >
                    <span>Diskusikan Automasi WhatsApp</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column (7 cols): Smartphone WhatsApp Mockup & Interactive Test Dispatch */}
              <div className="lg:col-span-7 flex flex-col items-center justify-center gap-3">
                <div className="w-full max-w-[360px] rounded-[36px] bg-slate-900 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.2)] ring-1 ring-slate-800">
                  <div className="h-4 flex items-center justify-center mb-1">
                    <div className="w-14 h-3 bg-black rounded-full" />
                  </div>

                  <div className="rounded-[26px] overflow-hidden bg-[#E5DDD5] text-slate-800 text-xs">
                    {/* Header */}
                    <div className="bg-[#075E54] text-white px-3 py-2 flex items-center justify-between shadow-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold flex items-center justify-center text-[10px]">
                          AH
                        </div>
                        <div>
                          <div className="flex items-center gap-1 font-bold text-[11px]">
                            SMA IT Al-Hikmah
                            <span className="w-3 h-3 rounded-full bg-emerald-400 text-slate-950 flex items-center justify-center text-[8px] font-black">
                              ✓
                            </span>
                          </div>
                          <div className="text-[9px] text-emerald-200">Official Meta Cloud API</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-bold bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100">
                        OFFICIAL
                      </span>
                    </div>

                    {/* Chat Bubble */}
                    <div className="p-3 space-y-2.5 min-h-[260px]">
                      <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-xs space-y-2 border border-slate-100">
                        <div className="text-[10px] leading-relaxed text-slate-800">
                          Yth. <strong>Bapak/Ibu Wali Murid</strong> dari <strong>Ahmad Rizky (XI-IPA 1)</strong>, rincian SPP <strong>November 2026</strong> telah diterbitkan:
                        </div>
                        <div className="bg-emerald-50/60 border border-emerald-200/80 rounded-xl p-2">
                          <div className="text-[9px] text-slate-500">Total Tagihan:</div>
                          <div className="text-sm font-extrabold text-[#065F46]">Rp 750.000,-</div>
                          <div className="text-[8px] text-slate-400">Jatuh Tempo: 10 Nov 2026</div>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-lg p-1.5 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="px-1.5 py-0.5 rounded bg-red-100 text-red-600 font-bold text-[8px]">PDF</span>
                            <span className="text-[9px] font-semibold text-slate-700">Invoice_SPP_Nov.pdf</span>
                          </div>
                          <Download className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="w-full py-1.5 rounded-lg bg-[#25D366] text-white font-bold text-center text-[10px] shadow-xs">
                          Bayar Sekarang (Virtual Account)
                        </div>
                        <div className="text-right text-[8px] text-slate-400 flex items-center justify-end gap-1">
                          <span>09:15</span>
                          <span className="text-emerald-500 font-bold">✓✓</span>
                        </div>
                      </div>

                      {/* Dynamic simulation bubble on click */}
                      {isWaSent && (
                        <div className="bg-emerald-100/90 text-emerald-900 rounded-xl p-2 text-[10px] font-semibold text-center border border-emerald-300 animate-fadeIn">
                          ⚡ Pesan WhatsApp Uji Coba Berhasil Terkirim dalam 0.8 Detik!
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Interactive Send Demo Button */}
                <button
                  type="button"
                  onClick={triggerWaDemo}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-[#064E3B] bg-white border border-emerald-200 hover:bg-emerald-50 shadow-xs transition-all"
                >
                  <Zap className="w-3.5 h-3.5 text-[#059669]" />
                  <span>{isWaSent ? "Pesan Sedang Terkirim..." : "Coba Tes Kirim Pesan Demo (Live)"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
