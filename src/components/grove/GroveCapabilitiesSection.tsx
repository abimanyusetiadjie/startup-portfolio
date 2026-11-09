"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Database,
  BrainCircuit,
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
  Layers,
  FileCheck,
  Bot,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<"website" | "erp" | "aiml">("website");

  // Web interactive preview mode (Desktop vs Mobile)
  const [webDeviceView, setWebDeviceView] = useState<"desktop" | "mobile">("desktop");

  // ERP live simulation state
  const [activeErpWarehouse, setActiveErpWarehouse] = useState<"JKT" | "SBY" | "BDG" | "SMR">("JKT");

  // AI live test state
  const [aiAnalysisRunning, setAiAnalysisRunning] = useState(false);
  const [aiConfidence, setAiConfidence] = useState(99.6);

  const triggerAiRun = () => {
    setAiAnalysisRunning(true);
    setTimeout(() => {
      setAiConfidence(99.9);
      setAiAnalysisRunning(false);
    }, 1200);
  };

  return (
    <section id="layanan-utama" className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      {/* Ambient Forest & Mint Backlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-emerald-100/35 via-teal-50/30 to-slate-100/20 blur-[130px] rounded-full"
      />

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10 space-y-9">
        {/* Section Header: Minimal Copy, High Impact */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase">
              3 PILAR LAYANAN INTI STARTUP
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Karya &amp; Arsitektur Nyata yang Kami{" "}
            <span className="font-serif italic font-normal text-[#065F46]">
              Bangun
            </span>{" "}
            Untuk Anda.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Bukan sekadar mockup statis. Telusuri kapabilitas visual dan kinerja teknis dari solusi Website, Sistem ERP, dan Automasi AI/ML kami di bawah ini.
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
              <Globe className="w-4 h-4 text-emerald-400" />
              <span>1. Modern Web &lt;0.8s</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("erp")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "erp"
                  ? "bg-[#064E3B] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <Database className="w-4 h-4 text-emerald-400" />
              <span>2. Custom ERP &amp; Operasional</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("aiml")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === "aiml"
                  ? "bg-[#064E3B] text-white shadow-md scale-105"
                  : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200"
              }`}
            >
              <BrainCircuit className="w-4 h-4 text-emerald-400" />
              <span>3. Automasi AI &amp; Machine Learning</span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* ========================================================================= */}
          {/* PILAR 01: JASA PEMBUATAN WEBSITE MODERN (80% VISUAL)                      */}
          {/* ========================================================================= */}
          {activeTab === "website" && (
            <motion.div
              key="website"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column (5 cols): 20% Punchy Benefits */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                    <Globe className="w-3.5 h-3.5" />
                    Pilar 01 · High-Performance Web
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                    Website Perusahaan &amp; Produk yang Terbuka Dalam 0,7 Detik.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Pengunjung tidak menunggu website lelet. Kami merancang arsitektur web berbasis Next.js 15 yang instan diakses di smartphone, ramah algoritma Google SEO, dan dirancang khusus untuk mengubah pengunjung menjadi leads bisnis.
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Skor PageSpeed 98–100:</strong> Optimasi gambar WebP/AVIF otomatis dan zero JS bloat.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Headless CMS Mudah Dikelola:</strong> Staf Anda bisa update artikel dan produk semudah mengetik pesan.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>100% Hak Milik:</strong> Diserahkan dengan repositori Git penuh tanpa langganan sewa platform.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#kontak"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                    >
                      <span>Konsultasi Pembuatan Website</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column (7 cols): 80% Realistic Interactive UI Mockup */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between px-2 text-xs">
                    <span className="font-bold text-slate-700 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Live Architecture Viewport
                    </span>
                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-[11px]">
                      <button
                        onClick={() => setWebDeviceView("desktop")}
                        className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                          webDeviceView === "desktop" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                        }`}
                      >
                        Desktop Browser
                      </button>
                      <button
                        onClick={() => setWebDeviceView("mobile")}
                        className={`px-2.5 py-1 rounded font-semibold transition-colors ${
                          webDeviceView === "mobile" ? "bg-white text-slate-900 shadow-xs" : "text-slate-500"
                        }`}
                      >
                        Mobile (iPhone)
                      </button>
                    </div>
                  </div>

                  {/* Browser Shell */}
                  <div className="rounded-2xl bg-slate-900 p-3 shadow-[0_20px_50px_rgba(15,23,42,0.18)] ring-1 ring-slate-800">
                    <div className="bg-slate-800 rounded-t-xl px-3.5 py-2 flex items-center justify-between text-slate-400 text-xs mb-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-300">https://abinest.id/modern-web</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-800">
                        100/100 SPEED
                      </span>
                    </div>

                    {/* Inner Mockup Viewport */}
                    <div className={`bg-[#F8FAFC] rounded-b-xl overflow-hidden p-4 sm:p-5 transition-all ${
                      webDeviceView === "mobile" ? "max-w-[320px] mx-auto rounded-xl border-4 border-slate-700" : ""
                    }`}>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-[#064E3B] text-white flex items-center justify-center font-bold text-xs">
                              A
                            </div>
                            <span className="font-bold text-xs text-slate-900">Abinest Tech</span>
                          </div>
                          <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                            Edge Jakarta 28ms
                          </span>
                        </div>

                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">High Conversion</span>
                          <h4 className="text-base sm:text-lg font-black text-[#0F172A] leading-snug">
                            Next-Gen Web Architecture for High-Growth Startups
                          </h4>
                          <p className="text-[11px] text-slate-600 line-clamp-2">
                            Headless frontends built with React 19, TypeScript, and edge dynamic caching for sub-second page delivery anywhere in Indonesia.
                          </p>
                        </div>

                        {/* Metric Highlights */}
                        <div className="grid grid-cols-3 gap-2 text-center pt-1">
                          <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-xs">
                            <div className="text-xs sm:text-sm font-extrabold text-[#059669]">0.38s</div>
                            <div className="text-[9px] text-slate-500 font-medium">LCP Score</div>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-xs">
                            <div className="text-xs sm:text-sm font-extrabold text-[#059669]">100/100</div>
                            <div className="text-[9px] text-slate-500 font-medium">SEO Index</div>
                          </div>
                          <div className="bg-white p-2 rounded-xl border border-slate-200/80 shadow-xs">
                            <div className="text-xs sm:text-sm font-extrabold text-[#0F172A]">0.00</div>
                            <div className="text-[9px] text-slate-500 font-medium">CLS Zero Shift</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PILAR 02: CUSTOM ENTERPRISE ERP & OPERATIONS (80% VISUAL)                 */}
          {/* ========================================================================= */}
          {activeTab === "erp" && (
            <motion.div
              key="erp"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column (7 cols): High-Resolution Visual ERP Dashboard */}
                <div className="lg:col-span-7 space-y-3 order-2 lg:order-1">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)] relative group">
                    <div className="relative w-full h-[320px] sm:h-[380px]">
                      <Image
                        src="/images/erp-dashboard.jpg"
                        alt="Custom Enterprise ERP System Dashboard by Abinest"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating Live Telemetry Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/80 text-white flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="font-bold text-[11px]">Multi-Warehouse Active Telemetry</div>
                          <div className="text-[9px] text-slate-400">Hub: Jakarta, Surabaya, Bandung, Semarang</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
                        Zero Downtime
                      </span>
                    </div>
                  </div>

                  {/* Quick Warehouse Selector */}
                  <div className="flex items-center justify-between text-xs px-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-slate-500 font-semibold text-[11px]">Pilih Hub:</span>
                      {(["JKT", "SBY", "BDG", "SMR"] as const).map((w) => (
                        <button
                          key={w}
                          onClick={() => setActiveErpWarehouse(w)}
                          className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold border transition-colors ${
                            activeErpWarehouse === w
                              ? "bg-[#064E3B] text-white border-[#064E3B]"
                              : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {w}
                        </button>
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">99.8% Stok Akurat</span>
                  </div>
                </div>

                {/* Right Column (5 cols): 20% Punchy Copy */}
                <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                    <Database className="w-3.5 h-3.5" />
                    Pilar 02 · Custom Enterprise ERP
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                    Sistem Operasional Terpadu yang Dibangun Sesuai Alur Bisnis Anda.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Jangan memaksa proses bisnis Anda mengikuti software kaku buatan luar negeri dengan biaya lisensi per user yang mahal. Abinest merancang sistem ERP kustom yang menyatukan alur gudang, inventori, faktur, dan persetujuan bertingkat dengan hak milik penuh.
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Multi-Gudang &amp; Logistik:</strong> Sinkronisasi inventori real-time antar cabang tanpa selisih stok.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Faktur &amp; Pajak Otomatis:</strong> Integrasi e-faktur, laporan laba rugi otomatis, dan rekonsiliasi instan.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Zero User Licensing Fee:</strong> Tambah 100 atau 1.000 staf tanpa tambahan biaya lisensi selamanya.</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="#kontak"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[#059669] hover:bg-[#047857] shadow-sm transition-all"
                    >
                      <span>Diskusikan Kebutuhan ERP Anda</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ========================================================================= */}
          {/* PILAR 03: APPLIED AI & MACHINE LEARNING (80% VISUAL)                       */}
          {/* ========================================================================= */}
          {activeTab === "aiml" && (
            <motion.div
              key="aiml"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                {/* Left Column (5 cols): 20% Punchy Copy */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#065F46] border border-emerald-200 text-xs font-bold uppercase tracking-wider">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    Pilar 03 · Automasi AI &amp; Machine Learning
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                    Automasi Cerdas yang Menghemat Puluhan Jam Kerja per Minggu.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    AI bukan sekadar gimmick. Kami mengimplementasikan model Machine Learning dan Document AI yang secara langsung memproses ribuan faktur otomatis, memprediksi kebutuhan stok, dan melayani pelanggan 24/7 melalui Agen AI WhatsApp resmi.
                  </p>

                  <div className="space-y-2.5 pt-1 text-xs text-slate-700">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Document AI (OCR + LLM):</strong> Ekstraksi PO, invoice, dan kontrak PDF dalam hitungan detik (akurasi &gt;99%).</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>AI WhatsApp Agent Resmi Meta:</strong> Chatbot pintar yang menjawab pertanyaan stok dan cek status pesanan otomatis.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Model ML Khusus Perusahaan:</strong> Data internal perusahaan Anda aman dan tidak digunakan untuk melatih AI publik.</span>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={triggerAiRun}
                      disabled={aiAnalysisRunning}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#064E3B] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer"
                    >
                      <RotateCcw className={`w-3.5 h-3.5 ${aiAnalysisRunning ? "animate-spin text-emerald-600" : ""}`} />
                      <span>{aiAnalysisRunning ? "Model Sedang Berjalan..." : "Uji Coba Ekstraksi AI"}</span>
                    </button>
                    <span className="text-xs font-bold text-emerald-700">{aiConfidence}% Akurasi</span>
                  </div>
                </div>

                {/* Right Column (7 cols): High-Resolution AI Workflow Visual */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(15,23,42,0.12)] relative group">
                    <div className="relative w-full h-[320px] sm:h-[380px]">
                      <Image
                        src="/images/ai-ml-workflow.jpg"
                        alt="Applied AI & Machine Learning Pipeline by Abinest"
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Floating Live AI Processing Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md rounded-xl p-3 border border-slate-700/80 text-white flex items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-emerald-400" />
                        <div>
                          <div className="font-bold text-[11px]">Autonomous Document &amp; Agent Engine</div>
                          <div className="text-[9px] text-slate-400">Latency: 0.8s · Meta Cloud Gateway Active</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 shrink-0">
                        {aiConfidence}% Confidence
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs px-1 text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      Didukung Python, PyTorch, LangChain &amp; Meta Cloud API
                    </span>
                    <span className="font-semibold text-slate-700">Enterprise Data Isolation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
