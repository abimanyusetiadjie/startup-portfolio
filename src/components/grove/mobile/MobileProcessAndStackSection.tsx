"use client";

import { useState } from "react";
import { ChevronRight, X, Check } from "lucide-react";
import { useModalEffects } from "../use-modal-effects";
import { WorkflowStepStage } from "../WorkflowStepStage";

interface StepItem {
  num: string;
  title: string;
  timeline: string;
  deliverable: string;
  caption: string;
}

const workflowSteps: StepItem[] = [
  {
    num: "01",
    title: "Konsultasi & Rincian Biaya",
    timeline: "Hari 1–2",
    deliverable: "Dokumen Cetak Biru & Anggaran Tetap",
    caption: "Pemetaan alur bisnis dan penguncian anggaran sebelum pengerjaan dimulai.",
  },
  {
    num: "02",
    title: "Desain Antarmuka & Kontrak",
    timeline: "Hari 3–4",
    deliverable: "Purwarupa Interaktif & Perjanjian SLA",
    caption: "Persetujuan desain tampilan interaktif serta penandatanganan perjanjian SLA dan NDA.",
  },
  {
    num: "03",
    title: "Pengembangan & Uji Coba",
    timeline: "Hari 5–9",
    deliverable: "Akses Server Pengujian Langsung",
    caption: "Pembangunan fitur secara bertahap dengan akses server uji coba harian.",
  },
  {
    num: "04",
    title: "Pengujian Beban & Pelatihan",
    timeline: "Hari 10–11",
    deliverable: "Laporan Uji & Panduan Operasional",
    caption: "Pengujian stabilitas lonjakan pengguna dan pelatihan staf hingga mahir.",
  },
  {
    num: "05",
    title: "Serah Terima & Peluncuran",
    timeline: "Hari 12–14",
    deliverable: "Repositori Git, Basis Data & BAST",
    caption: "Penyerahan seluruh kode program, basis data asli, dan aktivasi resmi sistem.",
  },
];

const techBadges = [
  { name: "Next.js", color: "#081629" },
  { name: "TypeScript", color: "#0284C7" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "React", color: "#0EA5E9" },
  { name: "Python", color: "#2563EB" },
  { name: "WhatsApp Cloud API", color: "#0D9488" },
  { name: "Docker", color: "#0284C7" },
  { name: "n8n", color: "#0F766E" },
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
      className="scroll-mt-20 bg-[#F8FAFC] py-14 px-5"
    >
      <div className="max-w-md mx-auto space-y-9">
        <div className="space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white text-[#0F172A] font-semibold text-[11px] tracking-wide ring-1 ring-slate-200">
              Prosedur Eksekusi
            </span>
            <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#0F172A] leading-tight">
              Rilis terukur dalam{" "}
              <span className="text-[#475569] font-normal">
                14 hari kerja.
              </span>
            </h2>
            <p className="text-[13.5px] text-[#475569]">
              Ketuk tahap di bawah untuk melihat dokumentasi &amp; hasil kerjanya.
            </p>
          </div>

          <div className="space-y-2.5">
            {workflowSteps.map((step) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="w-full rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 px-4 py-4 flex items-center justify-between gap-3 text-left hover:bg-slate-50 active:scale-[0.99] transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 min-w-0">
                  <span className="mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0F172A] text-[11px] font-mono font-bold text-white shrink-0">
                    {step.num}
                  </span>
                  <div className="min-w-0 space-y-0.5">
                    <span className="block text-[14px] font-bold text-[#0F172A] leading-snug">
                      {step.title}
                    </span>
                    <span className="block font-mono text-[11px] text-[#475569]">
                      {step.timeline} · {step.deliverable}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Floating Pill Tech Stack Strip */}
        <div id="m-tech-stack" data-section="tech-stack" className="space-y-3 scroll-mt-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[11px] font-semibold text-[#475569] shadow-sm ring-1 ring-slate-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F172A]" />
              <span>Teknologi Standar Produksi</span>
            </span>
          </div>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max gap-3 animate-marquee-scroll py-2">
              {[...techBadges, ...techBadges].map((item, idx) => (
                <span
                  key={`${item.name}-${idx}`}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 text-[12.5px] font-semibold text-[#0F172A] whitespace-nowrap shrink-0"
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
          className="fixed inset-0 z-[70] bg-slate-950/55 backdrop-blur-sm flex items-end justify-center"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-t-3xl max-h-[85dvh] overflow-y-auto overscroll-contain p-5 pb-8 space-y-4 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11.5px] font-semibold text-[#475569]">
                  Prosedur Tahap {selectedStep.num} · {selectedStep.timeline}
                </span>
                <h3
                  id="mobile-process-modal-title"
                  className="text-[17px] font-bold text-[#0F172A] mt-0.5"
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

            <WorkflowStepStage step={selectedStep.num} />

            <div className="space-y-1.5">
              <div className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0F172A]">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{selectedStep.deliverable}</span>
              </div>
              <p className="text-[13px] text-[#475569] leading-relaxed">
                {selectedStep.caption}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedStep(null)}
              className="w-full h-11 rounded-full bg-[#0F172A] text-white text-[13.5px] font-semibold cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
