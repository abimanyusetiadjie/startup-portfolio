"use client";

import { useState } from "react";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Laptop,
  Users,
  ShieldCheck,
  PackageCheck,
  FileText,
  Palette,
  Terminal,
  Gauge,
  KeyRound,
  Eye,
  X,
  Sparkles,
} from "lucide-react";

export function GroveCoreShieldSection() {
  // Mobile / touch preview modal state
  const [activeModalStep, setActiveModalStep] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      timeline: "Hari 1 – 3",
      icon: ClipboardList,
      color: "blue",
      accentHex: "#2563EB",
      accentBg: "bg-blue-50",
      accentText: "text-[#2563EB]",
      title: "Konsultasi Kebutuhan",
      desc: "Diskusi mendalam alur operasional bisnis Anda langsung bersama sistem arsitek tanpa perantara sales.",
      deliverable: "Dokumen Blueprint & RAB Transparan",
      guarantee: "100% Konsultasi Gratis",
      guaranteeSub: "Tahap Awal",
      popupAlignment: "left-0 sm:left-0",
      arrowAlignment: "left-8",
      previewHeader: "BLUEPRINT_SPEC_v1.0.pdf",
      previewBadge: "APPROVED ✓",
      previewBadgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      renderPreviewContent: () => (
        <div className="space-y-2.5 font-mono">
          <div className="p-2 rounded-xl bg-slate-900 border border-sky-500/30 text-center">
            <div className="flex items-center justify-between gap-1 text-[9.5px]">
              <div className="flex-1 p-1.5 rounded-lg bg-slate-800 border border-sky-500/30">
                <div className="text-[7.5px] text-slate-400">CLIENT</div>
                <div className="font-bold text-sky-300">Web / App</div>
              </div>
              <div className="text-slate-500 text-xs font-bold">──▶</div>
              <div className="flex-1 p-1.5 rounded-lg bg-slate-800 border border-teal-500/30">
                <div className="text-[7.5px] text-slate-400">CORE</div>
                <div className="font-bold text-[#00C9A7]">Next.js API</div>
              </div>
              <div className="text-slate-500 text-xs font-bold">──▶</div>
              <div className="flex-1 p-1.5 rounded-lg bg-slate-800 border border-blue-500/30">
                <div className="text-[7.5px] text-slate-400">DB</div>
                <div className="font-bold text-[#2496ED]">Postgres</div>
              </div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px]">
            <span className="text-emerald-400 font-bold">RAB Kunci: Rp 0 Overbudget</span>
            <span className="text-slate-400 font-medium">Arsitek Abinest ✓</span>
          </div>
        </div>
      ),
    },
    {
      step: "02",
      timeline: "Hari 4 – 7",
      icon: FileCheck2,
      color: "purple",
      accentHex: "#9333EA",
      accentBg: "bg-purple-50",
      accentText: "text-purple-600",
      title: "Desain & Kontrak SLA",
      desc: "Penyusunan prototype interaktif, timeline mingguan, dan perjanjian garansi SLA tertulis bertanda tangan.",
      deliverable: "Figma Prototype & Kontrak Resmi",
      guarantee: "Kontrak Bertanda Tangan",
      guaranteeSub: "Kepastian Hukum",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      previewHeader: "Figma // #Main_Prototype_1440",
      previewBadge: "100% INTERAKTIF",
      previewBadgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      renderPreviewContent: () => (
        <div className="space-y-2.5">
          <div className="rounded-xl bg-slate-900 border border-slate-700/80 p-2 space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#00C9A7]" />
                <span className="font-bold text-slate-200">SOP Alur Bisnis Kustom</span>
              </div>
              <span className="text-[9px] text-purple-400 font-mono">↗ Active</span>
            </div>
            <div className="grid grid-cols-3 gap-1 h-5 text-[8px] text-center">
              <div className="rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">Nav</div>
              <div className="rounded bg-purple-950/70 border border-purple-500/50 flex items-center justify-center text-purple-300 font-bold">Dashboard</div>
              <div className="rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">Data Grid</div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px]">
            <span className="text-sky-300 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-sky-400" />
              <span>Garansi SLA 99.9% Uptime</span>
            </span>
            <span className="text-emerald-400 font-bold">Legal Materai ✓</span>
          </div>
        </div>
      ),
    },
    {
      step: "03",
      timeline: "Minggu 2 – 6",
      icon: Laptop,
      color: "emerald",
      accentHex: "#10B981",
      accentBg: "bg-emerald-50",
      accentText: "text-emerald-600",
      title: "Sprint & Akses Staging",
      desc: "Pembangunan sistem secara modular. Anda dapat menguji fitur langsung tiap pekan secara real-time via Portal.",
      deliverable: "Server Staging & Laporan Sprint",
      guarantee: "Transparan 24/7",
      guaranteeSub: "Uji Tiap Pekan",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      previewHeader: "staging.abinest.id/portal",
      previewBadge: "LIVE 24/7",
      previewBadgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      renderPreviewContent: () => (
        <div className="space-y-2 font-mono text-[9px]">
          <div className="flex items-center justify-between text-slate-200 bg-slate-900 px-2 py-1.5 rounded-lg border border-slate-800">
            <span>Sprint 03: Modul Transaksi &amp; AI</span>
            <span className="text-emerald-400 font-bold">100% PASS</span>
          </div>
          <div className="flex items-center justify-between text-slate-400 bg-slate-900/60 px-2 py-1 rounded-lg border border-slate-800/80">
            <span>Audit Progres Mingguan</span>
            <span className="text-sky-400">Portal Klien ✓</span>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px] text-slate-400">
            <span>Branch: main-v1.0</span>
            <span className="text-blue-400 font-bold">Transparan Tanpa Rahasia</span>
          </div>
        </div>
      ),
    },
    {
      step: "04",
      timeline: "Minggu 7",
      icon: Users,
      color: "amber",
      accentHex: "#F59E0B",
      accentBg: "bg-amber-50",
      accentText: "text-amber-600",
      title: "Uji Beban & Training",
      desc: "Stress-testing sistem agar anti-down pada lonjakan traffic, serta pendampingan staf hingga benar-benar mahir.",
      deliverable: "Laporan Load Test & Modul Training",
      guarantee: "Garansi Sistem Siap Pakai",
      guaranteeSub: "Staf Terlatih Mandiri",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      previewHeader: "STRESS_TEST // k6 Engine",
      previewBadge: "ANTI-DOWN 99.9%",
      previewBadgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      renderPreviewContent: () => (
        <div className="space-y-2 font-mono">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[7.5px] text-slate-400 uppercase">Respons Speed</div>
              <div className="text-base font-black text-emerald-400">&lt;0.8 Detik</div>
              <div className="text-[7.5px] text-slate-500">Core Web Vitals</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
              <div className="text-[7.5px] text-slate-400 uppercase">Kapasitas Uji</div>
              <div className="text-base font-black text-sky-400">10,000 Req/s</div>
              <div className="text-[7.5px] text-slate-500">0% Error Lulus</div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px]">
            <span className="text-emerald-400 font-bold">Score: 100/100/100</span>
            <span className="text-slate-400">Buku Panduan + Video HD</span>
          </div>
        </div>
      ),
    },
    {
      step: "05",
      timeline: "Minggu 8 & Seterusnya",
      icon: ShieldCheck,
      color: "blue",
      accentHex: "#2563EB",
      accentBg: "bg-blue-50",
      accentText: "text-[#2563EB]",
      title: "Serah Terima Penuh",
      desc: "100% source code, database, dan kontrol server diserahkan utuh menjadi aset resmi institusi Anda.",
      deliverable: "Full Git Repo & PostgreSQL Dump",
      guarantee: "Hak Milik 100% Mutlak",
      guaranteeSub: "Aset Digital Mandiri",
      popupAlignment: "right-0 sm:right-0",
      arrowAlignment: "right-8",
      previewHeader: "ENTERPRISE_VAULT // OWNERSHIP",
      previewBadge: "ZERO LOCK-IN",
      previewBadgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      renderPreviewContent: () => (
        <div className="space-y-2 font-mono">
          <div className="grid grid-cols-2 gap-2 text-left">
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
              <div className="text-[7.5px] text-slate-400">REPOSITORY</div>
              <div className="text-[10px] font-bold text-white truncate">GitHub Private</div>
              <div className="text-[7.5px] text-emerald-400 font-bold">✓ Root Access 100%</div>
            </div>
            <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 space-y-0.5">
              <div className="text-[7.5px] text-slate-400">DATABASE</div>
              <div className="text-[10px] font-bold text-white truncate">PostgreSQL Dump</div>
              <div className="text-[7.5px] text-emerald-400 font-bold">✓ Schema Asli</div>
            </div>
          </div>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[9px]">
            <span className="text-emerald-400 font-bold">Aset Sah Milik Anda</span>
            <span className="text-slate-400">Rp 0 Biaya Sewa ✓</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-14 sm:py-20 relative bg-white border-b border-slate-200/80 overflow-visible"
    >
      {/* Background Soft Mesh Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.18em] text-[#1E40AF] bg-blue-100/70 px-3.5 py-1 rounded-full border border-blue-200">
            ALUR KERJA TRANSPARAN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            5 Langkah Terstruktur Menuju Sistem Siap Operasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
            Setiap tahapan memiliki output fisik (<em>deliverable</em>) yang jelas dan terverifikasi. Arahkan kursor ke kartu mana pun untuk melihat pratinjau bukti fisik pekerjaannya.
          </p>
        </div>

        {/* 5-Column Linear Clean Grid with Desktop Hover Pop-ups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 pt-4 sm:pt-6 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveModalStep(idx)}
                className="bg-white border border-slate-200/90 hover:border-blue-400 rounded-3xl p-5 sm:p-5.5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer"
              >
                {/* FLOATING HOVER POP-UP (Appears on Hover on Desktop) */}
                <div
                  className={`hidden lg:block absolute bottom-[calc(100%+14px)] ${s.popupAlignment} w-[310px] pointer-events-none group-hover:pointer-events-auto opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50`}
                >
                  <div className="rounded-2xl bg-[#0B1220] border border-slate-700/90 shadow-[0_20px_45px_rgba(15,23,42,0.38)] p-3.5 text-white select-none relative">
                    {/* Pop-up Header */}
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-sky-400 font-bold truncate max-w-[190px]">
                        <PackageCheck className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{s.previewHeader}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold border ${s.previewBadgeColor}`}>
                        {s.previewBadge}
                      </span>
                    </div>

                    {/* Pop-up Visual Content */}
                    <div className="py-1">
                      {s.renderPreviewContent()}
                    </div>

                    {/* Bottom Triangle Arrow pointing to card */}
                    <div
                      className={`absolute -bottom-2 ${s.arrowAlignment} w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#0B1220] drop-shadow-sm`}
                    />
                  </div>
                </div>

                {/* Card Top: Number, Timeline & Icon */}
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black ${s.accentText}`}>
                      {s.step}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {s.timeline}
                    </span>
                  </div>

                  <div className={`w-10 h-10 rounded-2xl ${s.accentBg} flex items-center justify-center ${s.accentText} group-hover:scale-105 transition-transform shadow-2xs`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>

                  {/* Output Deliverable Badge */}
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-800">
                    <div className="font-bold uppercase tracking-wider text-[8.5px] text-blue-600 flex items-center gap-1">
                      <PackageCheck className="w-3 h-3 text-blue-600" />
                      <span>Deliverable Fisik:</span>
                    </div>
                    <div className="font-semibold text-slate-900 mt-0.5 text-[11.5px] leading-snug">
                      {s.deliverable}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Guarantee & Hover Hint */}
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{s.guarantee}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-normal">
                      {s.guaranteeSub}
                    </span>
                  </div>

                  {/* Interactive Trigger Badge */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-600 group-hover:text-blue-700">
                      <Eye className="w-3 h-3" />
                      <span className="hidden lg:inline">Arahkan kursor lihat bukti</span>
                      <span className="lg:hidden">Ketuk lihat bukti fisik</span>
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TOUCH PREVIEW MODAL (Opens on Tap on Mobile/Tablet) */}
      {activeModalStep !== null && (
        <div
          onClick={() => setActiveModalStep(null)}
          className="lg:hidden fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl bg-[#0B1220] border border-slate-700/90 shadow-2xl p-5 text-white relative animate-in zoom-in-95 duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStep(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Title */}
            <div className="space-y-1 mb-4 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                Tahap {steps[activeModalStep].step} · {steps[activeModalStep].timeline}
              </span>
              <h3 className="text-lg font-bold text-white">
                {steps[activeModalStep].title}
              </h3>
              <p className="text-xs text-slate-400">
                {steps[activeModalStep].deliverable}
              </p>
            </div>

            {/* Modal Visual Content */}
            <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800 mb-4">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono">
                <span className="text-sky-400 font-bold truncate">
                  {steps[activeModalStep].previewHeader}
                </span>
                <span className={`px-2 py-0.5 rounded-full text-[8.5px] font-bold border ${steps[activeModalStep].previewBadgeColor}`}>
                  {steps[activeModalStep].previewBadge}
                </span>
              </div>
              {steps[activeModalStep].renderPreviewContent()}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{steps[activeModalStep].guarantee}</span>
              </span>
              <button
                onClick={() => setActiveModalStep(null)}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
