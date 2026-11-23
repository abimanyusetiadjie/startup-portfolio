"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    timeline: "Hari 1–2",
    title: "Konsultasi & Rincian Biaya",
    deliverable: "Dokumen Cetak Biru & Anggaran Tetap (RAB)",
    desc: "Pemetaan alur bisnis dan penguncian anggaran tetap sebelum pengerjaan dimulai agar bebas biaya tak terduga.",
    imageSrc: "/images/steps/step-01-blueprint.jpg",
  },
  {
    step: "02",
    timeline: "Hari 3–4",
    title: "Desain Antarmuka & Kontrak SLA",
    deliverable: "Purwarupa Interaktif & Perjanjian Kerja Sama",
    desc: "Persetujuan desain tampilan interaktif serta penandatanganan perjanjian SLA dan NDA tertulis.",
    imageSrc: "/images/steps/step-02-contract.jpg",
  },
  {
    step: "03",
    timeline: "Hari 5–9",
    title: "Pengembangan & Server Uji Coba",
    deliverable: "Tautan Server Staging Real-Time",
    desc: "Pembangunan sistem cepat dengan server uji coba langsung yang dapat Anda pantau progresnya setiap hari.",
    imageSrc: "/images/steps/step-03-staging.jpg",
  },
  {
    step: "04",
    timeline: "Hari 10–11",
    title: "Uji Beban & Pelatihan Staf",
    deliverable: "Laporan Uji Performa & Panduan Operasional",
    desc: "Simulasi lonjakan pengguna dan pelatihan operasional langsung hingga staf non-IT Anda siap mandiri.",
    imageSrc: "/images/steps/step-04-testing.jpg",
  },
  {
    step: "05",
    timeline: "Hari 12–14",
    title: "Serah Terima & Peluncuran Resmi",
    deliverable: "Repositori Kode Penuh, Basis Data & BAST",
    desc: "Penyerahan seluruh kode program, basis data asli, dokumentasi server, dan aktivasi resmi sistem.",
    imageSrc: "/images/steps/step-05-handover.jpg",
  },
];

export function GroveCoreShieldSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStep = steps[activeIdx] ?? steps[0];

  return (
    <section
      id="cara-kerja"
      data-section="cara-kerja"
      className="scroll-mt-20 py-24 bg-[#F6F9FC] relative"
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
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-[#635BFF] font-semibold text-xs tracking-wide">
            Alur Kerja Terukur
          </span>
          <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] text-[#0A2540] leading-[1.12]">
            Dari ide ke sistem produksi{" "}
            <span className="bg-gradient-to-r from-[#635BFF] to-[#10B981] bg-clip-text text-transparent">
              dalam 14 hari kerja.
            </span>
          </h2>
          <p className="text-[15.5px] text-[#425466] leading-relaxed">
            Tahapan transparan dengan server uji coba langsung setiap minggu—tanpa biaya tersembunyi di tengah proyek.
          </p>
        </motion.div>

        {/* Fluid 2-Column Kinetic Stepper (Zero Boxy Grid Walls) */}
        <div className="grid grid-cols-12 gap-10 items-center">
          {/* Left 6 Cols: Sliding Highlight Stepper */}
          <div className="col-span-6 space-y-2.5">
            {steps.map((s, idx) => {
              const isActive = idx === activeIdx;
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
                      className="absolute inset-0 rounded-2xl bg-white shadow-[0_14px_36px_-10px_rgba(99,91,255,0.16)] ring-1 ring-[#635BFF]/15 -z-0"
                    />
                  )}
                  <span
                    className={`relative z-10 mt-0.5 shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-bold transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-[#635BFF] to-[#0EA5E9] text-white shadow-sm"
                        : "bg-white text-[#425466] shadow-sm"
                    }`}
                  >
                    {s.step}
                  </span>

                  <div className="relative z-10 flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className={`text-[16px] font-bold tracking-tight ${
                          isActive ? "text-[#0A2540]" : "text-[#425466]"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-[11px] font-semibold shrink-0 ${
                          isActive ? "text-[#635BFF]" : "text-slate-400"
                        }`}
                      >
                        {s.timeline}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-[#425466] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 6 Cols: Floating Animated Documentation Stage */}
          <div className="col-span-6 relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#635BFF]/15 via-[#00D4FF]/15 to-emerald-400/15 blur-2xl"
            />
            <div className="relative rounded-[28px] bg-white shadow-[0_24px_60px_-15px_rgba(10,37,64,0.12)] ring-1 ring-slate-900/[0.05] overflow-hidden">
              <div className="px-6 py-4 bg-gradient-to-r from-[#0A2540] to-[#16365E] text-white flex items-center justify-between gap-2 text-xs">
                <span className="font-mono font-semibold text-cyan-300">
                  DOKUMENTASI TAHAP {activeStep.step}
                </span>
                <span className="font-mono text-white/80">
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
                >
                  <div className="p-5 pb-3">
                    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={activeStep.imageSrc}
                        alt={activeStep.title}
                        fill
                        sizes="(max-width: 1200px) 48vw, 540px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>Hasil: {activeStep.deliverable}</span>
                    </div>
                    <p className="text-[14px] text-[#425466] leading-relaxed">
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
