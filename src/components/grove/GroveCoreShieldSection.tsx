"use client";

import { useState } from "react";
import Image from "next/image";
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
      className="scroll-mt-16 bg-[#FAFAFA] border-b border-[#EAEAEA]"
    >
      <div className="max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white">
        {/* Vercel Dual-Tone Header */}
        <div className="px-8 py-14 border-b border-[#EAEAEA] relative">
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 left-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute top-3 right-3 font-mono text-xs text-neutral-300"
          >
            +
          </span>
          <div className="space-y-3 max-w-3xl">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666] block">
              03 / PROTOKOL EKSEKUSI
            </span>
            <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.035em] leading-[1.18]">
              <span className="text-[#0A0A0A]">Alur kerja 14 hari.</span>{" "}
              <span className="text-[#666666] font-normal">
                Tahapan terstruktur dari penguncian anggaran hingga serah terima kode penuh tanpa biaya tersembunyi.
              </span>
            </h2>
          </div>
        </div>

        {/* Interactive 2-Column Split Studio Stepper (Spacious & Zero Cramping) */}
        <div className="grid grid-cols-12 divide-x divide-[#EAEAEA]">
          {/* Left 6 Cols: Spacious Interactive Step List */}
          <div className="col-span-6 divide-y divide-[#EAEAEA]">
            {steps.map((s, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className={`w-full text-left px-8 py-5 transition-colors flex items-start gap-4 cursor-pointer relative ${
                    isActive
                      ? "bg-[#FAFAFA]"
                      : "bg-white hover:bg-[#FAFAFA]/60"
                  }`}
                >
                  {isActive && (
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-[2.5px] bg-[#0A0A0A]"
                    />
                  )}
                  <span
                    className={`mt-0.5 shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full font-mono text-xs font-semibold transition-colors ${
                      isActive
                        ? "bg-[#0A0A0A] text-white"
                        : "bg-[#FAFAFA] border border-[#EAEAEA] text-[#666666]"
                    }`}
                  >
                    {s.step}
                  </span>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3
                        className={`text-[15.5px] font-semibold tracking-[-0.015em] ${
                          isActive ? "text-[#0A0A0A]" : "text-[#404040]"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span className="font-mono text-[11px] text-[#666666] shrink-0">
                        {s.timeline}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-[#666666] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right 6 Cols: Live Documentation Stage */}
          <div className="col-span-6 p-8 bg-[#FAFAFA]/60 flex flex-col justify-center">
            <div className="rounded-2xl bg-white border border-[#EAEAEA] shadow-[0_12px_36px_-12px_rgba(0,0,0,0.06)] overflow-hidden">
              <div className="px-5 py-3.5 border-b border-[#EAEAEA] bg-[#FAFAFA] flex items-center justify-between gap-2 text-xs">
                <span className="font-mono font-semibold text-[#0A0A0A]">
                  DOKUMENTASI TAHAP {activeStep.step}
                </span>
                <span className="font-mono text-[#666666]">
                  {activeStep.timeline}
                </span>
              </div>

              <div className="p-4">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-neutral-100 border border-[#EAEAEA]">
                  <Image
                    src={activeStep.imageSrc}
                    alt={activeStep.title}
                    fill
                    sizes="(max-width: 1200px) 48vw, 540px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="px-5 pb-5 pt-1 space-y-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 px-3 py-1 text-xs font-medium text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Hasil: {activeStep.deliverable}</span>
                </div>
                <p className="text-[13.5px] text-[#666666] leading-relaxed">
                  {activeStep.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
