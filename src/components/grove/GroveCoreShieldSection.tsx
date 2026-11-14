"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ClipboardList,
  FileCheck2,
  Laptop,
  Users,
  ShieldCheck,
  PackageCheck,
  X,
  Rocket,
} from "lucide-react";

export function GroveCoreShieldSection() {
  const [activeModalStep, setActiveModalStep] = useState<number | null>(null);
  const [activeMobileStep, setActiveMobileStep] = useState(0);
  const stepSliderRef = useRef<HTMLDivElement>(null);

  const scrollToStep = (idx: number) => {
    setActiveMobileStep(idx);
    const container = stepSliderRef.current;
    if (!container) return;
    const child = container.children[idx] as HTMLElement | undefined;
    if (child) {
      const containerRect = container.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const targetLeft =
        container.scrollLeft +
        (childRect.left - containerRect.left) -
        (container.clientWidth - child.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  };

  const handleStepScroll = () => {
    const container = stepSliderRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + container.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;
    Array.from(container.children).forEach((el, idx) => {
      const rect = (el as HTMLElement).getBoundingClientRect();
      const elCenter = rect.left + rect.width / 2;
      const dist = Math.abs(containerCenter - elCenter);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });
    if (closestIdx !== activeMobileStep) {
      setActiveMobileStep(closestIdx);
    }
  };

  const stepQuickLabels = ["01 · RAB", "02 · Desain", "03 · Sprint", "04 · Uji", "05 · Rilis"];

  const steps = [
    {
      step: "01",
      timeline: "Hari 1 – 2",
      icon: ClipboardList,
      borderColor: "border-blue-500",
      borderHover: "hover:border-blue-600",
      headerBg: "bg-blue-50/90 border-b border-blue-200",
      accentBg: "bg-blue-100/80",
      accentText: "text-blue-600",
      badgeBg: "bg-white text-blue-700 border-blue-300",
      deliverableBg: "bg-blue-50/70 border-blue-200 text-blue-950",
      title: "Konsultasi & RAB",
      desc: "Analisis alur bisnis dan penentuan anggaran pasti tanpa biaya tersembunyi.",
      deliverable: "Dokumen Blueprint & RAB",
      guarantee: "100% Gratis",
      popupAlignment: "left-0 sm:left-0",
      arrowAlignment: "left-8",
      imageSrc: "/images/steps/step-01-blueprint.jpg",
      previewHeader: "Blueprint & Anggaran RAB",
      previewBadge: "APPROVED ✓",
      previewBadgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      caption: "Cetak biru arsitektur sistem dan rincian RAB kunci Rp 0 biaya tak terduga.",
    },
    {
      step: "02",
      timeline: "Hari 3 – 4",
      icon: FileCheck2,
      borderColor: "border-purple-500",
      borderHover: "hover:border-purple-600",
      headerBg: "bg-purple-50/90 border-b border-purple-200",
      accentBg: "bg-purple-100/80",
      accentText: "text-purple-600",
      badgeBg: "bg-white text-purple-700 border-purple-300",
      deliverableBg: "bg-purple-50/70 border-purple-200 text-purple-950",
      title: "Desain & Kontrak",
      desc: "Finalisasi prototype tampilan dan penandatanganan garansi SLA tertulis.",
      deliverable: "Prototype Figma & Kontrak",
      guarantee: "Legal Bermaterai",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      imageSrc: "/images/steps/step-02-contract.jpg",
      previewHeader: "Kontrak Resmi & Prototype",
      previewBadge: "LEGAL MATERAI",
      previewBadgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      caption: "Perjanjian SLA 99.9% uptime berbadan hukum dan mockup antarmuka interaktif.",
    },
    {
      step: "03",
      timeline: "Hari 5 – 9",
      icon: Laptop,
      borderColor: "border-emerald-500",
      borderHover: "hover:border-emerald-600",
      headerBg: "bg-emerald-50/90 border-b border-emerald-200",
      accentBg: "bg-emerald-100/80",
      accentText: "text-emerald-600",
      badgeBg: "bg-white text-emerald-700 border-emerald-300",
      deliverableBg: "bg-emerald-50/70 border-emerald-200 text-emerald-950",
      title: "Sprint & Staging",
      desc: "Pembangunan sistem cepat dan uji coba fitur secara live via server staging.",
      deliverable: "Akses Staging Server",
      guarantee: "Uji Coba Tiap Hari",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      imageSrc: "/images/steps/step-03-staging.jpg",
      previewHeader: "Live Staging Server",
      previewBadge: "LIVE 24/7",
      previewBadgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      caption: "Server staging aktif untuk uji coba langsung tiap modul pekanan.",
    },
    {
      step: "04",
      timeline: "Hari 10 – 11",
      icon: Users,
      borderColor: "border-amber-500",
      borderHover: "hover:border-amber-600",
      headerBg: "bg-amber-50/90 border-b border-amber-200",
      accentBg: "bg-amber-100/80",
      accentText: "text-amber-600",
      badgeBg: "bg-white text-amber-700 border-amber-300",
      deliverableBg: "bg-amber-50/70 border-amber-200 text-amber-950",
      title: "Uji Beban & Training",
      desc: "Tes ketahanan lonjakan trafik dan pelatihan staf sampai siap pakai mandiri.",
      deliverable: "Hasil Uji & Modul Video",
      guarantee: "Garansi Anti-Down",
      popupAlignment: "left-1/2 -translate-x-1/2 sm:left-1/2 sm:-translate-x-1/2",
      arrowAlignment: "left-1/2 -translate-x-1/2",
      imageSrc: "/images/steps/step-04-testing.jpg",
      previewHeader: "Uji Beban & Panduan Staf",
      previewBadge: "ANTI-DOWN 99.9%",
      previewBadgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      caption: "Laporan uji kecepatan <0.8 detik serta video panduan operasional staf.",
    },
    {
      step: "05",
      timeline: "Hari 12 – 14",
      icon: ShieldCheck,
      borderColor: "border-rose-500",
      borderHover: "hover:border-rose-600",
      headerBg: "bg-rose-50/90 border-b border-rose-200",
      accentBg: "bg-rose-100/80",
      accentText: "text-rose-600",
      badgeBg: "bg-white text-rose-700 border-rose-300",
      deliverableBg: "bg-rose-50/70 border-rose-200 text-rose-950",
      title: "Serah Terima & Rilis",
      desc: "Penyerahan 100% source code, database, dan sistem langsung go-live resmi.",
      deliverable: "Full Git Repo & DB Dump",
      guarantee: "100% Hak Milik",
      popupAlignment: "right-0 sm:right-0",
      arrowAlignment: "right-8",
      imageSrc: "/images/steps/step-05-handover.jpg",
      previewHeader: "100% Hak Milik Klien",
      previewBadge: "ZERO LOCK-IN",
      previewBadgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      caption: "Source code lengkap, database dump asli, dan kontrol server diserahkan utuh.",
    },
  ];

  return (
    <section
      id="cara-kerja"
      className="py-10 sm:py-16 relative bg-white border-b border-slate-300/80 overflow-x-clip lg:overflow-visible"
    >
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto space-y-2.5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#1E40AF]">
            <Rocket className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
              ALUR KERJA KILAT · SIAP &lt;14 HARI KERJA
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            5 Langkah Cepat Menuju Sistem Siap Operasi
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg mx-auto font-normal">
            Sistem Anda siap beroperasi penuh dalam waktu kurang dari 14 hari. Arahkan kursor ke tiap kotak untuk melihat foto bukti fisik deliverable-nya.
          </p>
        </motion.div>

        {/* Mobile Quick Step Pills & Swipe Hint (< lg) */}
        <div className="lg:hidden space-y-2">
          <div className="grid grid-cols-5 gap-1 rounded-xl border border-slate-200 bg-slate-100/90 p-1">
            {stepQuickLabels.map((label, idx) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToStep(idx)}
                className={`py-2 px-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer truncate ${
                  activeMobileStep === idx
                    ? "bg-blue-600 text-white shadow-xs"
                    : "bg-white/85 text-slate-600 hover:text-slate-900"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between px-1 text-[11px] font-medium text-slate-500">
            <span className="font-bold text-slate-600">
              Langkah 0{activeMobileStep + 1} dari 0{steps.length}
            </span>
            <span className="text-blue-600 font-semibold">Geser untuk lihat foto &amp; tahapan →</span>
          </div>
        </div>

        {/* 5-Column Structured Grid on Desktop, Horizontal Scroll-Snap Slider on Mobile */}
        <div
          ref={stepSliderRef}
          onScroll={handleStepScroll}
          className="flex lg:grid lg:grid-cols-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-smooth no-scrollbar gap-3.5 lg:gap-4 pt-1 sm:pt-4 -mx-4 px-4 pb-2 lg:mx-0 lg:px-0 lg:pb-0 relative items-stretch"
        >
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.36, delay: idx * 0.06, ease: "easeOut" }}
                onClick={() => setActiveModalStep(idx)}
                className={`w-[80vw] max-w-[295px] sm:w-[310px] shrink-0 snap-center lg:w-auto lg:max-w-none lg:shrink bg-white border-2 ${s.borderColor} ${s.borderHover} rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group cursor-pointer overflow-visible`}
              >
                {/* FLOATING HOVER POP-UP (Desktop Hover with Real HD Photo) */}
                <div
                  className={`hidden lg:block absolute bottom-[calc(100%+14px)] ${s.popupAlignment} w-[300px] pointer-events-none group-hover:pointer-events-auto opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50`}
                >
                  <div className="rounded-2xl bg-[#0B1220] border border-slate-700/90 shadow-[0_20px_45px_rgba(15,23,42,0.4)] p-3 text-white select-none relative">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-sky-400 font-bold truncate max-w-[180px]">
                        <PackageCheck className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{s.previewHeader}</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded-md text-[8.5px] font-bold border ${s.previewBadgeColor}`}>
                        {s.previewBadge}
                      </span>
                    </div>

                    <div className="relative w-full h-[155px] rounded-xl overflow-hidden bg-slate-100 mb-2 border border-slate-800">
                      <Image
                        src={s.imageSrc}
                        alt={s.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>

                    <p className="text-[10px] text-slate-300 leading-snug">
                      {s.caption}
                    </p>

                    <div
                      className={`absolute -bottom-2 ${s.arrowAlignment} w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#0B1220] drop-shadow-sm`}
                    />
                  </div>
                </div>

                {/* 1. Card Header Strip */}
                <div className={`px-4 py-2.5 flex items-center justify-between rounded-t-[14px] ${s.headerBg}`}>
                  <span className={`text-lg font-black leading-none ${s.accentText}`}>
                    {s.step}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${s.badgeBg}`}>
                    {s.timeline}
                  </span>
                </div>

                {/* Mobile & Tablet Direct Thumbnail (< lg) */}
                <div className="lg:hidden relative w-full aspect-[16/9] bg-slate-100 border-b border-slate-200 overflow-hidden">
                  <Image
                    src={s.imageSrc}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* 2. Card Body */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className={`w-8 h-8 rounded-lg ${s.accentBg} flex items-center justify-center ${s.accentText} group-hover:scale-105 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-sm sm:text-[15px] font-extrabold text-[#0F172A] leading-snug group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[11.5px] text-slate-600 leading-snug font-normal line-clamp-2">
                      {s.desc}
                    </p>
                  </div>

                  {/* Output Box */}
                  <div className={`p-2 rounded-lg border text-[11px] ${s.deliverableBg}`}>
                    <div className="font-bold uppercase tracking-wider text-[8.5px] opacity-80 flex items-center gap-1">
                      <PackageCheck className="w-3 h-3 shrink-0" />
                      <span>Output Fisik:</span>
                    </div>
                    <div className="font-bold mt-0.5 text-[11px] leading-snug truncate">
                      {s.deliverable}
                    </div>
                  </div>
                </div>

                {/* 3. Card Footer Strip */}
                <div className="px-4 py-2.5 border-t border-slate-200 bg-slate-50/90 rounded-b-[14px] flex items-center justify-between text-[11px] font-bold text-slate-700">
                  <div className="flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{s.guarantee}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 group-hover:text-blue-600 transition-colors">
                    Lihat Foto ↗
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TOUCH PREVIEW MODAL */}
      {activeModalStep !== null && (
        <div
          onClick={() => setActiveModalStep(null)}
          className="lg:hidden fixed inset-0 bg-slate-950/75 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm rounded-2xl bg-[#0B1220] border border-slate-700 shadow-2xl p-5 text-white relative animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActiveModalStep(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 cursor-pointer"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1 mb-3 pr-8">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                Tahap {steps[activeModalStep].step} · {steps[activeModalStep].timeline}
              </span>
              <h3 className="text-base font-bold text-white">
                {steps[activeModalStep].title}
              </h3>
              <p className="text-[11.5px] text-slate-300">
                {steps[activeModalStep].deliverable}
              </p>
            </div>

            <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-slate-100 mb-3 border border-slate-800">
              <Image
                src={steps[activeModalStep].imageSrc}
                alt={steps[activeModalStep].title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {steps[activeModalStep].caption}
            </p>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
              <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>{steps[activeModalStep].guarantee}</span>
              </span>
              <button
                onClick={() => setActiveModalStep(null)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs cursor-pointer"
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
