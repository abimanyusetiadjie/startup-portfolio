"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  MessageSquare,
  RotateCcw,
  CheckCheck,
  Activity,
  Gauge,
  Send,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";

type CockpitTab = "speed" | "concurrency" | "whatsapp";

export function GroveHeroCockpit() {
  const [activeTab, setActiveTab] = useState<CockpitTab>("speed");
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditScore, setAuditScore] = useState(100);
  const [studentLoad, setStudentLoad] = useState(1500);
  const [waMessages, setWaMessages] = useState<Array<{ id: number; text: string; time: string; tag: string }>>([
    {
      id: 1,
      text: "Halo Bapak Hendra, tagihan SPP Bulan November an. Ahmad Farhan (Kelas X-A) telah terbit. Unduh kuitansi resmi:",
      time: "09:41",
      tag: "SPP Otomatis",
    },
  ]);

  // Smooth 3D Perspective Tilt on Mouse Move
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

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
    setAuditScore(75);
    setTimeout(() => setAuditScore(92), 350);
    setTimeout(() => setAuditScore(98), 700);
    setTimeout(() => {
      setAuditScore(100);
      setIsAuditing(false);
    }, 1100);
  };

  const triggerWaSend = (tag: string, text: string) => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    setWaMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        time: timeStr,
        tag,
      },
    ]);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="relative w-full max-w-[540px] mx-auto"
    >
      {/* Ambient Diffuse Backlight Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 bg-gradient-to-tr from-emerald-500/15 via-teal-400/10 to-emerald-200/20 blur-2xl rounded-[36px] -z-10"
      />

      {/* Main Glass Cockpit Frame */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-[32px] p-5 sm:p-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-shadow duration-300 overflow-hidden"
      >
        {/* Cockpit Header: Mode Selector with Fluid Animated Pill */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-slate-800">
              Interactive Engine
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-slate-100/90 p-1 rounded-full border border-slate-200/60 text-xs">
            <button
              onClick={() => setActiveTab("speed")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "speed"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Speed</span>
            </button>

            <button
              onClick={() => setActiveTab("concurrency")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "concurrency"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>CBT Load</span>
            </button>

            <button
              onClick={() => setActiveTab("whatsapp")}
              className={`relative px-3 py-1.5 rounded-full font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === "whatsapp"
                  ? "text-white bg-[#064E3B] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Dynamic Interactive Body */}
        <div className="pt-6 min-h-[310px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {/* ----------------------------------------------------------------- */}
            {/* TAB 1: SPEED BENCHMARK (GOOGLE LIGHTHOUSE 100)                     */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "speed" && (
              <motion.div
                key="speed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Google PageSpeed Mobile
                    </span>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      Next.js 15 Edge Architecture
                    </h4>
                  </div>
                  <button
                    onClick={triggerAudit}
                    disabled={isAuditing}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#064E3B] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${isAuditing ? "animate-spin text-emerald-600" : ""}`} />
                    <span>{isAuditing ? "Menguji..." : "Uji Ulang"}</span>
                  </button>
                </div>

                {/* Score Gauge & Key Timers */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4">
                  {/* Circular Dial (4 cols) */}
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
                          SEMPURNA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Numbers (8 cols) */}
                  <div className="sm:col-span-8 grid grid-cols-2 gap-2.5">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-medium text-slate-500">First Paint (FCP)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.38 Detik</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-medium text-slate-500">Largest Paint (LCP)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.62 Detik</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-medium text-slate-500">Layout Shift (CLS)</div>
                      <div className="text-sm font-extrabold text-[#059669]">0.00 (Stabil)</div>
                    </div>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200/80">
                      <div className="text-[10px] font-medium text-slate-500">Edge Response (TTFB)</div>
                      <div className="text-sm font-extrabold text-[#059669]">28 ms</div>
                    </div>
                  </div>
                </div>

                {/* Micro reassurance banner */}
                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Zero Javascript Bloat · CDN Edge Jakarta &amp; Surabaya
                  </span>
                  <span className="font-semibold text-[#064E3B]">SEO Skoring 100/100</span>
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* TAB 2: CONCURRENCY CBT SIMULATOR (ANTI-DOWN ENGINE)               */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "concurrency" && (
              <motion.div
                key="concurrency"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Simulasi Beban Ujian Serentak
                    </span>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      Postgres Connection Pooling
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-[#064E3B] border border-emerald-200">
                    SLA 99.98%
                  </span>
                </div>

                {/* Slider Control */}
                <div className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Jumlah Siswa / User Login:</span>
                    <span className="text-base font-black text-[#059669]">
                      {studentLoad.toLocaleString("id-ID")} Siswa
                    </span>
                  </div>

                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="250"
                    value={studentLoad}
                    onChange={(e) => setStudentLoad(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
                  />

                  {/* Preset Pills */}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    {[500, 1200, 2500, 5000].map((preset) => (
                      <button
                        key={preset}
                        onClick={() => setStudentLoad(preset)}
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                          studentLoad === preset
                            ? "bg-[#064E3B] text-white border-[#064E3B]"
                            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {preset.toLocaleString("id-ID")}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Real-time Dynamic Stats */}
                <div className="grid grid-cols-3 gap-2.5 text-center">
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80">
                    <div className="text-[10px] font-medium text-slate-500">Respon Latensi</div>
                    <div className="text-sm font-extrabold text-[#059669]">
                      {studentLoad > 3000 ? "46 ms" : "32 ms"}
                    </div>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80">
                    <div className="text-[10px] font-medium text-slate-500">Server Crash Rate</div>
                    <div className="text-sm font-extrabold text-[#059669]">0.00% (Aman)</div>
                  </div>
                  <div className="bg-[#F8FAFC] p-2.5 rounded-xl border border-slate-200/80">
                    <div className="text-[10px] font-medium text-slate-500">DB Pool Active</div>
                    <div className="text-sm font-extrabold text-[#0F172A]">
                      {Math.round(studentLoad / 120)} / 200
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ----------------------------------------------------------------- */}
            {/* TAB 3: WHATSAPP META OFFICIAL DISPATCH                             */}
            {/* ----------------------------------------------------------------- */}
            {activeTab === "whatsapp" && (
              <motion.div
                key="whatsapp"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Meta Cloud API Gateway
                    </span>
                    <h4 className="text-base font-bold text-[#0F172A]">
                      Automasi Tanpa Risiko Blokir
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Centang Hijau Resmi
                  </span>
                </div>

                {/* Simulated WhatsApp Chat Stream */}
                <div className="bg-[#EFEAE2] border border-[#DDD5CA] rounded-2xl p-3.5 max-h-[175px] overflow-y-auto space-y-2.5">
                  {waMessages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-white rounded-xl rounded-tr-none p-3 shadow-sm border border-slate-200/50 max-w-[90%] ml-auto space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-3 text-[10px]">
                        <span className="font-bold text-[#059669] flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {msg.tag}
                        </span>
                        <span className="text-slate-400">{msg.time}</span>
                      </div>
                      <p className="text-xs text-slate-800 leading-relaxed font-normal">
                        {msg.text}
                      </p>
                      <div className="flex items-center justify-end gap-1 text-[10px] text-slate-400 pt-0.5">
                        <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                        <span>Terkirim</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Trigger Pills */}
                <div className="flex items-center gap-2 pt-1 overflow-x-auto pb-1">
                  <button
                    onClick={() =>
                      triggerWaSend(
                        "Broadcast Nilai",
                        "Pengumuman: Nilai Ujian Semester Gasal telah siap diakses di Portal Siswa. Klik: siakad.sch.id"
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-[#064E3B] text-white hover:bg-[#047857] transition-colors shrink-0 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>+ Kirim Nilai</span>
                  </button>
                  <button
                    onClick={() =>
                      triggerWaSend(
                        "Invoice Otomatis",
                        "Invoice #INV-2026-880 senilai Rp 14.500.000 telah diverifikasi lunas. Terima kasih atas kerjasama Anda."
                      )
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors shrink-0 cursor-pointer"
                  >
                    <span>+ Invoice Lunas</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cockpit Footer Status Line */}
        <div className="mt-5 pt-3.5 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
          <span className="flex items-center gap-1.5 font-medium">
            <Layers className="w-3.5 h-3.5 text-[#059669]" />
            Live Client Production Mirror
          </span>
          <span className="font-semibold text-slate-700">Latency: 28ms</span>
        </div>
      </motion.div>
    </div>
  );
}
