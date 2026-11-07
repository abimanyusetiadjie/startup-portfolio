"use client";

import { ArrowUpRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { lang } = useLanguage();

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="beranda"
      className="relative w-full bg-[#080B11] text-white pt-32 sm:pt-36 pb-16 sm:pb-24 font-sans overflow-hidden border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Editorial Subdued Studio Label */}
        <div className="mb-6">
          <span className="text-xs font-mono tracking-widest text-emerald-400 uppercase font-semibold">
            {lang === "id"
              ? "STUDIO REKAYASA PERANGKAT LUNAK B2B"
              : "B2B SOFTWARE ENGINEERING STUDIO"}
          </span>
        </div>

        {/* Human-Crafted Hero Headline */}
        <h1 className="font-heading text-3xl sm:text-5xl lg:text-[3.75rem] font-bold text-white tracking-tight leading-[1.1] max-w-4xl">
          {lang === "id" ? (
            <>
              Sistem digital berkinerja tinggi untuk institusi yang menuntut keandalan.
            </>
          ) : (
            <>
              High-performance digital software engineered for institutions that demand reliability.
            </>
          )}
        </h1>

        {/* Clear, Honest Subheadline */}
        <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed">
          {lang === "id"
            ? "Kami merancang dan membangun SIAKAD sekolah anti-down untuk ribuan siswa ujian serentak, website institusi super cepat, dan custom ERP terintegrasi — dengan 100% kepemilikan kode sumber dan tanpa biaya langganan bulanan."
            : "We architect resilient school SIS platforms that never crash during concurrent exams, ultra-fast corporate websites, and custom omnichannel ERPs — backed by 100% full source code ownership."}
        </p>

        {/* Action Buttons & Human Commitments */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Abinest%20Studio,%20saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20website%20/%20sistem."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs sm:text-sm hover:bg-zinc-100 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/40"
          >
            <span>
              {lang === "id"
                ? "Konsultasi via WhatsApp"
                : "Chat on WhatsApp"}
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-950" />
          </a>

          <a
            href="#portofolio"
            onClick={(e) => handleSmoothScroll(e, "#portofolio")}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all text-xs sm:text-sm font-medium tracking-wide active:scale-[0.98]"
          >
            <span>
              {lang === "id" ? "Eksplorasi Portofolio Karya ↓" : "Explore Selected Works ↓"}
            </span>
          </a>
        </div>

        {/* Client Social Proof Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span className="text-zinc-500 font-semibold uppercase">
              {lang === "id" ? "MITRA SISTEM KAMI:" : "PARTNER INSTITUTIONS:"}
            </span>
            <span className="text-zinc-200">Yayasan Bina Insan</span>
            <span>·</span>
            <span className="text-zinc-200">SMA Unggulan Al-Hikmah</span>
            <span>·</span>
            <span className="text-zinc-200">Mitra Retail Nusantara</span>
            <span>·</span>
            <span className="text-zinc-200">Global Logistics B2B</span>
          </div>

          <div className="flex items-center gap-2 text-zinc-400">
            <span>Next.js 15 Edge • PostgreSQL RLS • Meta Cloud API</span>
          </div>
        </div>

        {/* HERO SHOWCASE: LARGE VISUAL IMAGE VIEWPORT (70% Visual, 0% AI Slop) */}
        <div className="mt-10 sm:mt-12 relative rounded-2xl sm:rounded-3xl border border-white/15 bg-[#0F1420] shadow-2xl overflow-hidden group">
          {/* Subtle reflection overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080B11]/60 via-transparent to-transparent pointer-events-none z-10" />

          {/* High-Resolution Portfolio Screen */}
          <div className="relative aspect-[16/9] w-full bg-[#0B0F19] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/projects/hero-showcase.svg"
              alt="Abinest Software Architecture & SIAKAD Cloud Dashboard Showcase"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.01]"
              loading="eager"
            />
          </div>

          {/* Showcase Caption Bar */}
          <div className="p-4 sm:p-5 bg-[#0B0F19] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-zinc-200 font-medium">
                {lang === "id"
                  ? "Pratinjau Nyata: Sistem Monitoring Ujian CBT & Rapor Cloud 1.200+ Siswa"
                  : "Live Preview: 1,200+ Student CBT Exam Monitoring & Cloud Report Card Engine"}
              </span>
            </div>
            <a
              href="#portofolio"
              onClick={(e) => handleSmoothScroll(e, "#portofolio")}
              className="text-emerald-400 hover:text-emerald-300 font-mono font-medium underline underline-offset-4 inline-flex items-center gap-1"
            >
              <span>{lang === "id" ? "Lihat Seluruh Portofolio" : "View All Projects"}</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
