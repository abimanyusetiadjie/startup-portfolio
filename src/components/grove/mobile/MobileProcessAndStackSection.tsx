"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, X, Check } from "lucide-react";

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

  return (
    <section
      id="m-cara-kerja"
      data-section="cara-kerja"
      className="bg-[#F1F5F9] py-10 px-5 border-b border-slate-200/90"
    >
      <div className="max-w-md mx-auto space-y-8">
        <div className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-[22px] font-extrabold tracking-tight text-slate-900">
              Alur Kerja 14 Hari
            </h2>
            <p className="text-[13.5px] text-slate-500">
              Ketuk setiap tahap untuk melihat dokumentasi hasil kerja.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200/90 divide-y divide-slate-100 overflow-hidden">
            {workflowSteps.map((step) => (
              <button
                key={step.num}
                type="button"
                onClick={() => setSelectedStep(step)}
                className="w-full px-4 py-3.5 flex items-center justify-between gap-3 text-left hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-[12px] font-mono font-bold text-slate-400 w-5 shrink-0">
                    {step.num}
                  </span>
                  <span className="text-[14px] font-semibold text-slate-900 truncate">
                    {step.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[12px] font-medium text-slate-500">
                    {step.timeline}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Minimal 1-Row Tech Stack Strip */}
        <div id="m-tech-stack" data-section="tech-stack" className="space-y-3 scroll-mt-16">
          <p className="text-[11.5px] font-semibold uppercase tracking-wider text-slate-400 text-center">
            Teknologi Standar Produksi
          </p>

          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max gap-5 animate-marquee-scroll py-1">
              {[...techBadges, ...techBadges].map((item, idx) => (
                <span
                  key={`${item.name}-${idx}`}
                  className="inline-flex items-center gap-2 text-[13px] font-semibold text-slate-600 whitespace-nowrap shrink-0"
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
          onClick={() => setSelectedStep(null)}
          className="fixed inset-0 z-[70] bg-slate-950/50 backdrop-blur-xs flex items-end justify-center animate-in fade-in duration-150"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-white rounded-t-3xl p-5 pb-8 space-y-4 shadow-2xl animate-in slide-in-from-bottom-4 duration-200"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[11.5px] font-semibold text-blue-600">
                  Tahap {selectedStep.num} · {selectedStep.timeline}
                </span>
                <h3 className="text-[17px] font-bold text-slate-900 mt-0.5">
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
