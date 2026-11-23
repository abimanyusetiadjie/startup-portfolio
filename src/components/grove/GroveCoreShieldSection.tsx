"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WorkflowStepStage } from "./WorkflowStepStage";

const steps = [
  {
    step: "01",
    timeline: "Hari 1–2",
    title: "Konsultasi & Rincian Biaya",
    deliverable: "Dokumen Cetak Biru & Anggaran Tetap (RAB)",
    desc: "Pemetaan alur bisnis dan penguncian anggaran tetap sebelum pengerjaan dimulai agar bebas biaya tak terduga.",
  },
  {
    step: "02",
    timeline: "Hari 3–4",
    title: "Desain Antarmuka & Kontrak SLA",
    deliverable: "Purwarupa Interaktif & Perjanjian Kerja Sama (NDA)",
    desc: "Persetujuan desain tampilan interaktif serta penandatanganan perjanjian SLA dan NDA tertulis atas nama usaha Anda.",
  },
  {
    step: "03",
    timeline: "Hari 5–9",
    title: "Pengembangan & Server Uji Coba",
    deliverable: "Tautan Server Staging Real-Time (preview.abinest.id)",
    desc: "Pembangunan sistem cepat dengan server uji coba langsung yang dapat Anda pantau progresnya setiap hari.",
  },
  {
    step: "04",
    timeline: "Hari 10–11",
    title: "Uji Beban & Pelatihan Staf",
    deliverable: "Laporan Uji Performa & Panduan Video Staf",
    desc: "Simulasi lonjakan pengguna dan pelatihan operasional langsung hingga staf non-IT Anda siap mandiri.",
  },
  {
    step: "05",
    timeline: "Hari 12–14",
    title: "Serah Terima & Peluncuran Resmi",
    deliverable: "Repositori Kode Penuh, Basis Data & Dokumen BAST",
    desc: "Penyerahan seluruh kode program, basis data asli, dokumentasi server, dan aktivasi resmi sistem produksi.",
  },
];

export function GroveCoreShieldSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx] ?? steps[0];

  return (
    <section
      id="cara-kerja"
      data-section="cara-kerja"
      className="scroll-mt-20 py-24 bg-[#F8FAFC] relative overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-8 space-y-14">
        {/* Open Fluid Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="space-y-3 max-w-2xl"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#0F172A] font-semibold text-xs tracking-wide ring-1 ring-slate-200">
            Prosedur Eksekusi Terukur
          </span>
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] text-[#0F172A] leading-[1.12]">
            Dari ide ke sistem produksi{" "}
            <span className="text-[#475569] font-normal">
              dalam 14 hari kerja.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#475569] leading-relaxed">
            Lima tahapan prosedural yang transparan—mulai dari RAB tertulis, kontrak SLA &amp; NDA, server uji coba langsung, hingga serah terima kode 100%.
          </p>
        </motion.div>

        {/* Fluid 2-Column Kinetic Procedural Stepper */}
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Executive Timeline Spine + Sliding Highlight */}
          <div className="col-span-6 relative space-y-2.5">
            {/* Subtle Vertical Spine */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-[35px] top-8 bottom-8 w-[1.5px] bg-slate-200"
            />

            {steps.map((s, idx) => {
              const isActive = idx === activeIdx;
              const isPassed = idx < activeIdx;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="relative w-full text-left px-5 py-4 rounded-2xl transition-colors flex items-start gap-4 cursor-pointer"
                >
                  {isActive && (
                    <motion.div
                      layoutId="workflow-active-card"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-2xl bg-white shadow-[0_14px_36px_-10px_rgba(15,23,42,0.1)] ring-1 ring-slate-900/10 -z-0"
                    />
                  )}
                  <span
                    className={`relative z-10 mt-0.5 shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all ${
                      isActive
                        ? "bg-[#0F172A] text-white shadow-sm ring-4 ring-slate-100"
                        : isPassed
                          ? "bg-slate-700 text-white"
                          : "bg-white text-[#475569] ring-1 ring-slate-200"
                    }`}
                  >
                    {s.step}
                  </span>

                  <div className="relative z-10 flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className={`text-[16px] font-bold tracking-tight ${
                          isActive ? "text-[#0F172A]" : "text-[#475569]"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-[11px] font-semibold shrink-0 px-2.5 py-0.5 rounded-full ${
                          isActive
                            ? "bg-slate-100 text-[#0F172A]"
                            : "text-slate-400"
                        }`}
                      >
                        {s.timeline}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-[#475569] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 6 Cols: Floating Executive Deliverable Stage */}
          <div className="col-span-6 relative">
            <div className="relative rounded-[28px] bg-white shadow-[0_24px_60px_-15px_rgba(15,23,42,0.1)] ring-1 ring-slate-200/80 overflow-hidden">
              <div className="px-6 py-4 bg-[#0F172A] text-white flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="font-mono font-semibold text-slate-200">
                    PROSEDUR TAHAP {activeStep.step} / 05
                  </span>
                </div>
                <span className="font-mono text-slate-300">
                  {activeStep.timeline}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.step}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="p-6 space-y-4"
                >
                  <WorkflowStepStage step={activeStep.step} />

                  <div className="space-y-2.5 pt-1">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 px-3.5 py-1 text-xs font-semibold text-[#0F172A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Hasil Resmi: {activeStep.deliverable}</span>
                    </div>
                    <p className="text-[14px] text-[#475569] leading-relaxed">
                      {activeStep.desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
