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
  Eye,
  X,
  Sparkles,
  Rocket,
} from "lucide-react";

export function GroveCoreShieldSection() {
  // Mobile / touch preview modal state
  const [activeModalStep, setActiveModalStep] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      timeline: "Hari 1 – 2",
      icon: ClipboardList,
      color: "blue",
      borderColor: "border-blue-500",
      borderHover: "hover:border-blue-600",
      accentBg: "bg-blue-100/80",
      accentText: "text-blue-600",
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      deliverableBg: "bg-blue-50/70 border-blue-200/80 text-blue-900",
      title: "Konsultasi & RAB",
      desc: "Analisis alur bisnis dan penentuan anggaran pasti tanpa biaya tersembunyi.",
      deliverable: "Dokumen Blueprint & RAB",
      guarantee: "100% Gratis",
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
      timeline: "Hari 3 – 4",
      icon: FileCheck2,
      color: "purple",
      borderColor: "border-purple-500",
      borderHover: "hover:border-purple-600",
      accentBg: "bg-purple-100/80",
      accentText: "text-purple-600",
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      deliverableBg: "bg-purple-50/70 border-purple-200/80 text-purple-900",
      title: "Desain & Kontrak",
      desc: "Finalisasi prototype tampilan dan penandatanganan garansi SLA tertulis.",
      deliverable: "Prototype Figma & Kontrak",
      guarantee: "Legal Bermaterai",
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
      timeline: "Hari 5 – 9",
      icon: Laptop,
      color: "emerald",
      borderColor: "border-emerald-500",
      borderHover: "hover:border-emerald-600",
      accentBg: "bg-emerald-100/80",
      accentText: "text-emerald-600",
      badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
      deliverableBg: "bg-emerald-50/70 border-emerald-200/80 text-emerald-900",
      title: "Sprint & Staging",
      desc: "Pembangunan sistem cepat dan uji coba fitur secara live via server staging.",
      deliverable: "Akses Staging Server",
      guarantee: "Uji Coba Tiap Hari",
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
      timeline: "Hari 10 – 11",
      icon: Users,
      color: "amber",
      borderColor: "border-amber-500",
      borderHover: "hover:border-amber-600",
      accentBg: "bg-amber-100/80",
      accentText: "text-amber-600",
      badgeBg: "bg-amber-50 text-amber-700 border-amber-200",
      deliverableBg: "bg-amber-50/70 border-amber-200/80 text-amber-900",
      title: "Uji Beban & Training",
      desc: "Tes ketahanan lonjakan trafik dan pelatihan staf sampai siap pakai mandiri.",
      deliverable: "Hasil Uji & Modul Video",
      guarantee: "Garansi Anti-Down",
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
      timeline: "Hari 12 – 14",
      icon: ShieldCheck,
      color: "rose",
      borderColor: "border-rose-500",
      borderHover: "hover:border-rose-600",
      accentBg: "bg-rose-100/80",
      accentText: "text-rose-600",
      badgeBg: "bg-rose-50 text-rose-700 border-rose-200",
      deliverableBg: "bg-rose-50/70 border-rose-200/80 text-rose-900",
      title: "Serah Terima & Rilis",
      desc: "Penyerahan 100% source code, database, dan sistem langsung go-live resmi.",
      deliverable: "Full Git Repo & DB Dump",
      guarantee: "100% Hak Milik",
      popupAlignment: "right-0 sm:right-0",
      arrowAlignment: "right-8",
      previewHeader: "ENTERPRISE_VAULT // OWNERSHIP",
      previewBadge: "ZERO LOCK-IN",
      previewBadgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
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
      className="py-12 sm:py-16 relative bg-white border-b border-slate-200/80 overflow-visible"
    >
      {/* Background Soft Mesh Ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/70 border border-blue-200 text-[#1E40AF]">
            <Rocket className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]">
              ALUR KERJA KILAT · SIAP &lt;14 HARI KERJA
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            5 Langkah Cepat Menuju Sistem Siap Operasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
            Sistem Anda siap beroperasi penuh dalam waktu kurang dari 14 hari. Arahkan kursor ke tiap kotak untuk melihat bukti fisik pekerjaannya.
          </p>
        </div>

        {/* 5-Column Linear Clean Grid with Bold Distinct Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 sm:pt-4 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                onClick={() => setActiveModalStep(idx)}
                className={`bg-white border-2 ${s.borderColor} ${s.borderHover} rounded-3xl p-4.5 sm:p-5 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer`}
              >
                {/* FLOATING HOVER POP-UP (Desktop Hover) */}
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
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-black ${s.accentText}`}>
                      {s.step}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${s.badgeBg}`}>
                      {s.timeline}
                    </span>
                  </div>

                  <div className={`w-9 h-9 rounded-xl ${s.accentBg} flex items-center justify-center ${s.accentText} group-hover:scale-105 transition-transform shadow-2xs`}>
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-[#0F172A] leading-snug group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[11.5px] text-slate-600 leading-snug font-normal line-clamp-2">
                      {s.desc}
                    </p>
                  </div>

                  {/* Output Deliverable Badge */}
                  <div className={`p-2 rounded-xl border text-[11px] ${s.deliverableBg}`}>
                    <div className="font-bold uppercase tracking-wider text-[8px] opacity-80 flex items-center gap-1">
                      <PackageCheck className="w-3 h-3 shrink-0" />
                      <span>Output:</span>
                    </div>
                    <div className="font-bold mt-0.5 text-[11px] leading-snug truncate">
                      {s.deliverable}
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Guarantee & Hover Hint */}
                <div className="mt-3.5 pt-2.5 border-t border-slate-200 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                    <div className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{s.guarantee}</span>
                    </div>
                    <span className="text-[9.5px] font-semibold text-slate-400 group-hover:text-blue-600 transition-colors">
                      Preview ↗
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TOUCH PREVIEW MODAL */}
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
