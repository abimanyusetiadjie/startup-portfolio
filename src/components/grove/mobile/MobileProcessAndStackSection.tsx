"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, X, Check } from "lucide-react";
import { useModalEffects } from "../use-modal-effects";

interface StepItem {
  num: string;
  title: string;
  timeline: string;
  deliverable: string;
  caption: string;
  image: string;
}

const workflowSteps: StepItem[] = [
  {
    num: "01",
    title: "Konsultasi & Rincian Biaya",
    timeline: "Hari 1–2",
    deliverable: "Dokumen Cetak Biru & Anggaran Tetap",
    caption: "Pemetaan alur bisnis dan penguncian anggaran sebelum pengerjaan dimulai.",
    image: "/images/steps/step-01-blueprint.jpg",
  },
  {
    num: "02",
    title: "Desain Antarmuka & Kontrak",
    timeline: "Hari 3–4",
    deliverable: "Purwarupa Figma & Perjanjian SLA",
    caption: "Persetujuan desain tampilan interaktif serta penandatanganan perjanjian SLA.",
    image: "/images/steps/step-02-contract.jpg",
  },
  {
    num: "03",
    title: "Pengembangan & Uji Coba",
    timeline: "Hari 5–9",
    deliverable: "Akses Server Pengujian Langsung",
    caption: "Pembangunan fitur secara bertahap dengan akses server uji coba harian.",
    image: "/images/steps/step-03-staging.jpg",
  },
  {
    num: "04",
    title: "Pengujian Beban & Pelatihan",
    timeline: "Hari 10–11",
    deliverable: "Laporan Uji & Panduan Operasional",
    caption: "Pengujian stabilitas lonjakan pengguna dan pelatihan staf hingga mahir.",
    image: "/images/steps/step-04-testing.jpg",
  },
  {
    num: "05",
    title: "Serah Terima & Peluncuran",
    timeline: "Hari 12–14",
    deliverable: "Repositori Git & Basis Data Penuh",
    caption: "Penyerahan seluruh kode program, basis data asli, dan aktivasi resmi sistem.",
    image: "/images/steps/step-05-handover.jpg",
  },
];

const techBadges = [
  { name: "Next.js", color: "#0F172A" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "React", color: "#0284C7" },
  { name: "Python", color: "#2563EB" },
  { name: "WhatsApp Cloud API", color: "#16A34A" },
  { name: "Docker", color: "#0EA5E9" },
  { name: "n8n", color: "#EA4B71" },
  { name: "AWS", color: "#F59E0B" },
  { name: "Nginx", color: "#059669" },
];

export function MobileProcessAndStackSection() {
  const [selectedStep, setSelectedStep] = useState<StepItem | null>(null);
  useModalEffects(Boolean(selectedStep), () => setSelectedStep(null));

  return (
    <section
      id="m-cara-kerja"
      data-section="cara-kerja"
      className="scroll-mt-20 bg-[#F6F9FC] py-14 px-5"
    >
      <div className="max-w-md mx-auto space-y-9">
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-[#635BFF] font-semibold text-[11px] tracking-wide">
              Alur Eksekusi
            </span>
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#0A2540] leading-tight">
              Rilis terukur dalam{" "}
              <span className="bg-gradient-to-r from-[#635BFF] to-[#0EA5E9] bg-clip-text text-transparent">
                14 hari kerja.
              </span>
            </h2>
            <p className="text-[13.5px] text-[#425466]">
              Ketuk tahap di bawah untuk melihat dokumentasi &amp; hasil kerjanya.
            </p>
          </div>

          <div className="space-y-2.5">
            {workflowSteps.map((step) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="w-full rounded-2xl bg-white shadow-[0_10px_28px_rgba(10,37,64,0.05)] ring-1 ring-slate-900/[0.04] px-4 py-4 flex items-center justify-between gap-3 text-left hover:shadow-[0_14px_34px_rgba(99,91,255,0.1)] active:scale-[0.99] transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#635BFF] to-[#0EA5E9] text-[11px] font-mono font-bold text-white shadow-sm shrink-0">
                    {step.num}
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-[14px] font-bold text-[#0A2540] leading-snug">
                      {step.title}
                    </span>
                    <span className="block font-mono text-[11px] text-[#425466]">
                      {step.timeline} · {step.deliverable}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-[#635BFF] shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Vibrant Floating Pill Tech Stack Strip */}
        <div id="m-tech-stack" data-section="tech-stack" className="space-y-3 scroll-mt-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[#425466] shadow-sm ring-1 ring-slate-900/[0.05]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
              <span>Teknologi Standar Produksi</span>
            </span>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-3 animate-marquee-scroll py-2">
              {[...techBadges, ...techBadges].map((item, idx) => (
                <span
                  key={`${item.name}-${idx}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-900/[0.05] text-[12.5px] font-semibold text-[#0A2540] whitespace-nowrap shrink-0"
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span>{item.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedStep && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-process-modal-title"
          onClick={() => setSelectedStep(null)}
          className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-sm flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-t-3xl max-h-[82dvh] overflow-y-auto overscroll-contain p-5 pb-8 space-y-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11.5px] font-semibold text-blue-600">
                  Tahap {selectedStep.num} · {selectedStep.timeline}
                </span>
                <h3
                  id="mobile-process-modal-title"
                  className="text-[17px] font-bold text-slate-900 mt-0.5"
                >
                  {selectedStep.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedStep(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Tutup tahap"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={selectedStep.image}
                alt={selectedStep.title}
                fill
                sizes="(max-width: 768px) 92vw, 420px"
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-slate-900">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedStep.deliverable}</span>
              </div>
              <p className="text-[13px] text-slate-600 leading-relaxed">
                {selectedStep.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedStep(null)}
              className="w-full h-11 rounded-xl bg-slate-900 text-white text-[13.5px] font-semibold cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
