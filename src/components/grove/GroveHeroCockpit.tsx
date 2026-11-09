"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Globe,
  Database,
  BrainCircuit,
  RotateCcw,
  CheckCheck,
  Activity,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Bot,
  FileSearch,
  Sparkles,
} from "lucide-react";

type CockpitTab = "web" | "erp" | "aiml";

export function GroveHeroCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("web");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditScore, setAuditScore] = useState(100);

  // ERP simulation: Monthly transaction scale
  const [erpScale, setErpScale] = useState(25000);

  // AI Document Extraction simulation
  const [aiExtracting, setAiExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<{
    poNumber: string;
    vendor: string;
    totalAmount: string;
    confidence: string;
  } | null>({
    poNumber: "PO-2026-9812",
    vendor: "PT Global Logistics Corp",
    totalAmount: "Rp 148.500.000",
    confidence: "99.8%",
  });

  // Smooth 3D Perspective Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const triggerAudit = () => {
    if (isAuditing) return;
    setIsAuditing(true);
    setAuditScore(78);
    setTimeout(() => setAuditScore(91), 300);
    setTimeout(() => setAuditScore(97), 650);
    setTimeout(() => {
      setAuditScore(100);
      setIsAuditing(false);
    }, 1000);
  };

  const triggerAiDemo = (preset: "invoice" | "contract" | "po") => {
    setAiExtracting(true);
    setTimeout(() => {
      if (preset === "invoice") {
        setExtractedData({
          poNumber: "INV-2026-0422",
          vendor: "Sentosa Supply Chain Hub",
          totalAmount: "Rp 340.250.000",
          confidence: "99.9%",
        });
      } else if (preset === "contract") {
        setExtractedData({
          poNumber: "CTR-B2B-881",
          vendor: "PT Finansial Prima Mandiri",
          totalAmount: "Rp 1.250.000.000",
          confidence: "99.4%",
        });
      } else {
        setExtractedData({
          poNumber: "PO-2026-9812",
          vendor: "PT Global Logistics Corp",
          totalAmount: "Rp 148.500.000",
          confidence: "99.8%",
        });
      }
      setAiExtracting(false);
    }, 600);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative w-full max-w-[550px] mx-auto select-none"
    >
      {/* Ambient Diffuse Backlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-emerald-200/20 blur-2xl rounded-[36px] -z-10"
      />

      {/* Main Glass Cockpit Frame */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[32px] p-4 sm:p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-shadow duration-300 overflow-hidden"
      >
        {/* Cockpit Header: Mode Selector with Fluid Animated Pill */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-800">
              Live Showcase Engine
            </span>
          </div>

          {/* 3 Core Startup Pillars Switcher */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200/60 text-xs">
            <button
              onClick={() => setActiveTab("web")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "web"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Web</span>
            </button>

            <button
              onClick={() => setActiveTab("erp")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "erp"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Database className="w-3.5 h-3.5 text-emerald-400" />
              <span>ERP</span>
            </button>

            <button
              onClick={() => setActiveTab("aiml")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "aiml"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5 text-emerald-400" />
              <span>AI &amp; ML</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Body (80% Visual) */}
        <div className="pt-5 min-h-[340px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* ----------------------------------------------------------------- */}
            {/* TAB 1: MODERN HIGH-PERFORMANCE WEB ENGINE                          */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "web" && (
              <motion.div
                key="web"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Next.js 15 · Headless Web Architecture
                    </span>
                    <h4 className="text-base font-extrabold text-[#0F172A]">
                      Ultra-Fast Web &amp; Digital Experience
                    </h4>
                  </div>
                  <button
                    onClick={triggerAudit}
                    disabled={isAuditing}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#064E3B] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${isAuditing ? "animate-spin text-emerald-600" : ""}`} />
                    <span>{isAuditing ? "Mengaudit..." : "Uji Kecepatan"}</span>
                  </button>
                </div>

                {/* Visual Showcase: Circular Score Dial + Browser Frame */}
                <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  {/* Dial (4 cols) */}
                  <div className="sm:col-span-4 flex flex-col items-center justify-center">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#E2E8F0"
                          strokeWidth="8"
                          fill="transparent"
                        />
                        <motion.circle
                          cx="50"
                          cy="50"
                          r="40"
                          stroke="#059669"
                          strokeWidth="8"
                          strokeDasharray={251.2}
                          strokeDashoffset={251.2 - (251.2 * auditScore) / 100}
                          strokeLinecap="round"
                          fill="transparent"
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-black text-[#0F172A] tracking-tight">
                          {auditScore}
                        </span>
                        <span className="text-[9px] font-bold text-emerald-600 uppercase">
                          PERFECT
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-500 font-semibold mt-1">Google PageSpeed</span>
                  </div>

                  {/* Telemetry Numbers (8 cols) */}
                  <div className="sm:col-span-8 grid grid-cols-2 gap-2">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-[10px] font-medium text-slate-500">First Contentful (FCP)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.38 Detik</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-[10px] font-medium text-slate-500">Largest Paint (LCP)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.64 Detik</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-[10px] font-medium text-slate-500">Cumulative Shift (CLS)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.00 (Stabil)</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80 shadow-xs">
                      <div className="text-[10px] font-medium text-slate-500">Edge Response (TTFB)</div>
                      <div className="text-sm font-extrabold text-[#059669]">28 ms</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    SEO 100/100 · Mobile-First Responsive · Jamstack CDN
                  </span>
                  <span className="font-bold text-[#064E3B]">Sub-0.8s Guarantee</span>
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* TAB 2: CUSTOM ENTERPRISE ERP & OPERATIONS                          */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "erp" && (
              <motion.div
                key="erp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Supply Chain · Multi-Warehouse · Keuangan
                    </span>
                    <h4 className="text-base font-extrabold text-[#0F172A]">
                      Sistem ERP Kustom Tanpa Biaya Lisensi
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-[#064E3B] border border-emerald-200">
                    SLA 99.99%
                  </span>
                </div>

                {/* ERP Visual Dashboard Preview */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs bg-[#0F172A] p-3 text-white">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px]">
                    <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                      <Activity className="w-3.5 h-3.5" />
                      ERP Operations Live Feed
                    </span>
                    <span className="text-slate-400">4 Cabang Aktif</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5 py-3">
                    <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                      <div className="text-[9px] text-slate-400">Total GMV Bulan Ini</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white">Rp 1,48 M</div>
                      <div className="text-[9px] text-emerald-400 font-medium">↑ +24.8% vs lalu</div>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                      <div className="text-[9px] text-slate-400">Akurasi Stok Gudang</div>
                      <div className="text-xs sm:text-sm font-extrabold text-white">99.8%</div>
                      <div className="text-[9px] text-slate-400">14.280 SKU Aktif</div>
                    </div>
                    <div className="bg-slate-800/80 p-2 rounded-xl border border-slate-700">
                      <div className="text-[9px] text-slate-400">Waktu Rekonsiliasi</div>
                      <div className="text-xs sm:text-sm font-extrabold text-emerald-400">&lt;2 Menit</div>
                      <div className="text-[9px] text-slate-400">Otomatisasi Penuh</div>
                    </div>
                  </div>

                  {/* Volume Slider */}
                  <div className="pt-1 space-y-1.5">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-slate-300">Simulasi Beban Transaksi:</span>
                      <span className="font-bold text-emerald-400">
                        {erpScale.toLocaleString("id-ID")} Transaksi/Bulan
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10000"
                      max="100000"
                      step="5000"
                      value={erpScale}
                      onChange={(e) => setErpScale(Number(e.target.value))}
                      className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-0.5">
                  <span className="font-medium text-slate-700">
                    Modul: CRM, Invoicing, Inventory, HR &amp; Payroll
                  </span>
                  <span className="font-semibold text-emerald-700">100% Milik Anda</span>
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* TAB 3: APPLIED AI & MACHINE LEARNING AUTOMATION                   */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "aiml" && (
              <motion.div
                key="aiml"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      Document AI · AI Agents · Meta WhatsApp
                    </span>
                    <h4 className="text-base font-extrabold text-[#0F172A]">
                      Automasi AI &amp; Machine Learning
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Custom Model Terlatih
                  </span>
                </div>

                {/* Document AI Extraction Interactive Simulator */}
                <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-3.5 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <FileSearch className="w-3.5 h-3.5 text-[#059669]" />
                      Document AI Extraction Engine
                    </span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      OCR + LLM Parser
                    </span>
                  </div>

                  {/* Output Card */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200 space-y-2">
                    {aiExtracting ? (
                      <div className="py-6 flex flex-col items-center justify-center gap-2">
                        <RotateCcw className="w-5 h-5 text-emerald-600 animate-spin" />
                        <span className="text-xs text-slate-600 font-medium">Memproses dokumen dengan Vision AI...</span>
                      </div>
                    ) : extractedData ? (
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <div className="text-[9px] text-slate-400 font-semibold uppercase">Nomor Referensi</div>
                          <div className="font-bold text-[#0F172A]">{extractedData.poNumber}</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-semibold uppercase">Confidence Score</div>
                          <div className="font-bold text-emerald-600">{extractedData.confidence} (Akurat)</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-semibold uppercase">Vendor / Rekanan</div>
                          <div className="font-bold text-slate-700 truncate">{extractedData.vendor}</div>
                        </div>
                        <div>
                          <div className="text-[9px] text-slate-400 font-semibold uppercase">Total Nilai Bersih</div>
                          <div className="font-extrabold text-[#059669]">{extractedData.totalAmount}</div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Presets to test */}
                  <div className="flex items-center gap-2 pt-0.5 overflow-x-auto pb-0.5">
                    <span className="text-[10px] text-slate-500 font-semibold shrink-0">Tes Parsing:</span>
                    <button
                      onClick={() => triggerAiDemo("invoice")}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-[#064E3B] border border-emerald-200 hover:bg-emerald-100 transition-colors shrink-0"
                    >
                      + Invoice Supplier
                    </button>
                    <button
                      onClick={() => triggerAiDemo("contract")}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors shrink-0"
                    >
                      + Kontrak SPK
                    </button>
                    <button
                      onClick={() => triggerAiDemo("po")}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 hover:border-slate-300 transition-colors shrink-0"
                    >
                      + Purchase Order
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-0.5">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Bot className="w-3.5 h-3.5 text-[#059669]" />
                    WhatsApp AI Agent Resmi Meta terhubung ke Database
                  </span>
                  <span className="font-bold text-[#064E3B]">0.8s Response</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cockpit Footer Status Line */}
        <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <Layers className="w-3.5 h-3.5 text-[#059669]" />
            Arsitektur Standar Enterprise · Siap Produksi
          </span>
          <span className="font-semibold text-slate-700">100% Source Code Handover</span>
        </div>
      </motion.div>
    </div>
  );
}
