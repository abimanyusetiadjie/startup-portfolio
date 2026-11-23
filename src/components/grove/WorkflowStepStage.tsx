"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Award,
  CheckCircle2,
  Database,
  FileCheck2,
  GitBranch,
  Globe,
  Layers,
  Lock,
  PlayCircle,
  ShieldCheck,
  Terminal,
} from "lucide-react";

/**
 * 5 authentic, Abinest-branded interactive deliverable stage previews
 * in disciplined Monochrome Executive Slate (#0F172A, #F8FAFC, #475569)
 * — zero mixed neon cyan/teal/rainbow AI gradients.
 */
export function WorkflowStepStage({ step }: { step: string }) {
  if (step === "01") {
    const terms = [
      { label: "Termin 1 · Desain & Cetak Biru", pct: "40%", w: "w-[40%]", tone: "bg-[#0F172A]" },
      { label: "Termin 2 · Uji Server Staging", pct: "40%", w: "w-[40%]", tone: "bg-slate-600" },
      { label: "Termin 3 · Serah Terima Kode", pct: "20%", w: "w-[20%]", tone: "bg-slate-400" },
    ];

    return (
      <div className="rounded-2xl bg-[#F8FAFC] ring-1 ring-slate-200/80 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#0F172A] text-white inline-flex items-center justify-center">
              <Layers className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#475569] font-semibold">
                DOK-01 · CETAK BIRU &amp; RAB
              </div>
              <div className="text-xs font-bold text-[#0F172A]">
                Pemetaan Modul &amp; Anggaran Tetap
              </div>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white ring-1 ring-slate-200 text-[#0F172A] font-mono text-[10.5px] font-bold">
            RAB Terkunci
          </span>
        </div>

        {/* Architecture Flow Nodes */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-200/70">
            <Globe className="w-4 h-4 text-[#0F172A] mx-auto mb-1" />
            <div className="text-[11px] font-bold text-[#0F172A]">Web &amp; Kasir</div>
            <div className="text-[10px] text-[#475569]">Antarmuka Klien</div>
          </div>
          <div className="rounded-xl bg-[#0F172A] p-2.5 shadow-sm text-white">
            <Database className="w-4 h-4 text-slate-300 mx-auto mb-1" />
            <div className="text-[11px] font-bold">Inti API &amp; DB</div>
            <div className="text-[10px] text-slate-300">PostgreSQL</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-slate-200/70">
            <FileCheck2 className="w-4 h-4 text-[#0F172A] mx-auto mb-1" />
            <div className="text-[11px] font-bold text-[#0F172A]">WA &amp; OCR</div>
            <div className="text-[10px] text-[#475569]">Automasi Resmi</div>
          </div>
        </div>

        {/* Termin Payment Breakdown */}
        <div className="rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200/60 space-y-2.5">
          <div className="flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#0F172A]">Skema Pembayaran Bertahap</span>
            <span className="font-mono text-[#0F172A] font-bold">Rp0 Biaya Tersembunyi</span>
          </div>
          <div className="flex h-2 w-full rounded-full overflow-hidden gap-0.5 bg-slate-100">
            {terms.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className={`h-full origin-left ${t.w} ${t.tone}`}
              />
            ))}
          </div>
          <div className="grid grid-cols-3 gap-1.5 text-[10px] text-[#475569]">
            {terms.map((t) => (
              <div key={t.label} className="truncate">
                <span className="font-mono font-bold text-[#0F172A]">{t.pct}</span>{" "}
                <span>{t.label.split(" · ")[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === "02") {
    const clauses = [
      { label: "Perjanjian Kerahasiaan Data (NDA)", meta: "Tertulis & Mengikat" },
      { label: "Jaminan Uptime Server 99,9% (SLA)", meta: "Pasal 4 · Produksi" },
      { label: "Persetujuan Desain UI Interaktif", meta: "Disetujui Sebelum Coding" },
    ];

    return (
      <div className="rounded-2xl bg-[#F8FAFC] ring-1 ring-slate-200/80 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#0F172A] text-white inline-flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#475569] font-semibold">
                DOK-02 · KONTRAK SLA &amp; PURWARUPA UI
              </div>
              <div className="text-xs font-bold text-[#0F172A]">
                Nomor Referensi: SLA-ABN/2026
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0F172A] text-white font-mono text-[10px] font-bold">
            <Lock className="w-3 h-3" />
            NDA Aktif
          </span>
        </div>

        {/* Clauses Checklist */}
        <div className="rounded-xl bg-white shadow-sm ring-1 ring-slate-200/70 divide-y divide-slate-100">
          {clauses.map((c, idx) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="px-3.5 py-2.5 flex items-center justify-between gap-2"
            >
              <div className="flex items-center gap-2 min-w-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A] truncate">
                  {c.label}
                </span>
              </div>
              <span className="font-mono text-[10px] text-[#475569] shrink-0">
                {c.meta}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Official Abinest Sign-off Footer */}
        <div className="rounded-xl bg-[#0F172A] px-4 py-3 text-white flex items-center justify-between gap-3">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              Pihak Pelaksana Resmi
            </div>
            <div className="text-xs font-bold">Abinest Digital Systems · Jakarta &amp; Surabaya</div>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-white/10 text-white font-mono text-[10.5px] font-bold shrink-0">
            Siap Eksekusi
          </span>
        </div>
      </div>
    );
  }

  if (step === "03") {
    const pipelineSteps = [
      { task: "Kompilasi Antarmuka Next.js & TypeScript", time: "4,2 dtk" },
      { task: "Migrasi Skema Basis Data PostgreSQL", time: "1,1 dtk" },
      { task: "Sinkronisasi API & Proteksi Keamanan", time: "0,9 dtk" },
      { task: "Tautan Server Uji Coba Klien Aktif", time: "Live" },
    ];

    return (
      <div className="rounded-2xl bg-[#0F172A] text-white p-4 sm:p-5 space-y-4 ring-1 ring-white/10">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-7 h-7 rounded-lg bg-white/10 text-white inline-flex items-center justify-center shrink-0">
              <Terminal className="w-3.5 h-3.5" />
            </span>
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                STAGING DEPLOYMENT LIVE
              </div>
              <div className="font-mono text-xs text-white truncate">
                https://preview.abinest.id
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-white font-mono text-[10.5px] font-bold shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Build Lulus
          </span>
        </div>

        <div className="space-y-2">
          {pipelineSteps.map((p, idx) => (
            <motion.div
              key={p.task}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className="rounded-xl bg-white/[0.06] ring-1 ring-white/10 px-3.5 py-2 flex items-center justify-between gap-2 text-xs"
            >
              <span className="inline-flex items-center gap-2 text-slate-100 truncate">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{p.task}</span>
              </span>
              <span className="font-mono text-[10.5px] text-slate-300 shrink-0">
                {p.time}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between font-mono text-[10.5px] text-slate-300">
            <span>Progres Sprint Mingguan</span>
            <span className="text-white font-bold">100% Terpantau</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: "12%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="h-full rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    );
  }

  if (step === "04") {
    const loadBars = [62, 74, 86, 92, 95, 98, 96, 99];
    return (
      <div className="rounded-2xl bg-[#F8FAFC] ring-1 ring-slate-200/80 p-4 sm:p-5 space-y-4">
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#0F172A] text-white inline-flex items-center justify-center">
              <Activity className="w-3.5 h-3.5" />
            </span>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-[#475569] font-semibold">
                LAPORAN UJI BEBAN &amp; PELATIHAN
              </div>
              <div className="text-xs font-bold text-[#0F172A]">
                Simulasi Produksi &amp; Panduan Tim Non-IT
              </div>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-white ring-1 ring-slate-200 text-[#0F172A] font-mono text-[10.5px] font-bold">
            0% Error
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl bg-[#0F172A] text-white p-2.5 text-center">
            <div className="text-sm font-bold text-white">10.000</div>
            <div className="text-[10px] text-slate-300">Akses Serentak</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 text-center shadow-sm ring-1 ring-slate-200/70">
            <div className="text-sm font-bold text-[#0F172A]">&lt; 0,8 dtk</div>
            <div className="text-[10px] text-[#475569]">Rata-Rata Muat</div>
          </div>
          <div className="rounded-xl bg-white p-2.5 text-center shadow-sm ring-1 ring-slate-200/70">
            <div className="text-sm font-bold text-[#0F172A]">99,9%</div>
            <div className="text-[10px] text-[#475569]">Stabilitas SLA</div>
          </div>
        </div>

        {/* Animated Load Graph */}
        <div className="rounded-xl bg-white p-3 shadow-sm ring-1 ring-slate-200/70 space-y-2">
          <div className="flex items-end gap-1.5 h-12">
            {loadBars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: "14%" }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex-1 rounded-t bg-[#0F172A]"
              />
            ))}
          </div>
          <div className="flex items-center justify-between text-[10.5px] text-[#475569]">
            <span className="inline-flex items-center gap-1 font-semibold text-[#0F172A]">
              <PlayCircle className="w-3.5 h-3.5 text-[#0F172A]" />
              <span>Video &amp; Modul PDF Pelatihan Staf</span>
            </span>
            <span className="font-mono text-[#0F172A] font-semibold">Siap Pakai</span>
          </div>
        </div>
      </div>
    );
  }

  // Step 05 — Berita Acara Serah Terima (BAST) & 100% Ownership Transfer
  const handoverAssets = [
    { title: "Repositori Kode Git Privat", meta: "100% Milik Klien" },
    { title: "Basis Data Asli & Backup", meta: "Akses Root Penuh" },
    { title: "Domain, Cloud & SSL Aktif", meta: "Atas Nama Usaha" },
    { title: "Garansi Perbaikan Bug", meta: "30 – 90 Hari Gratis" },
  ];

  return (
    <div className="rounded-2xl bg-[#0F172A] text-white p-4 sm:p-5 space-y-4 ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-xl bg-white text-[#0F172A] inline-flex items-center justify-center shadow-sm">
            <Award className="w-4 h-4" />
          </span>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
              BAST-ABN/2026 · SERAH TERIMA RESMI
            </div>
            <div className="text-xs sm:text-[13px] font-bold text-white">
              Pengalihan 100% Hak Milik Aset Digital
            </div>
          </div>
        </div>
        <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white font-mono text-[10px] font-bold shrink-0">
          Terverifikasi
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {handoverAssets.map((a, idx) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.28, delay: idx * 0.06 }}
            className="rounded-xl bg-white/[0.06] ring-1 ring-white/10 p-2.5 space-y-0.5"
          >
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-white">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{a.title}</span>
            </div>
            <div className="font-mono text-[10px] text-slate-300 pl-5">
              {a.meta}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 pt-1 text-[11px] text-slate-300">
        <span className="inline-flex items-center gap-1.5">
          <GitBranch className="w-3.5 h-3.5 text-slate-400" />
          <span>Diterbitkan oleh Abinest Digital Systems</span>
        </span>
        <span className="font-mono text-white font-bold">Rp0 / Staf</span>
      </div>
    </div>
  );
}
