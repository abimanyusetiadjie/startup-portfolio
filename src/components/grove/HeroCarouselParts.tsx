"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Globe,
  ShieldCheck,
  Database,
  MessageSquare,
  FileCheck2,
  Zap,
  TrendingUp,
} from "lucide-react";
import { HERO_SLIDES } from "./hero-slides";

interface HeroSyncedHeadlineProps {
  className: string;
}

/**
 * Abinest Ocean-to-Teal luminous display headline.
 */
export function HeroSyncedHeadline({ className }: HeroSyncedHeadlineProps) {
  return (
    <h1 className={className}>
      Kami Membangun Sistem yang{" "}
      <span className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00C9A7] bg-clip-text text-transparent">
        Bekerja Untuk Anda.
      </span>
    </h1>
  );
}

interface HeroSyncedIntroProps {
  activeIdx: number;
  onSelect?: (idx: number) => void;
  className: string;
}

export function HeroSyncedIntro({ className }: HeroSyncedIntroProps) {
  return (
    <p className={className}>
      Dari <span className="font-semibold text-[#081629]">Website super cepat</span>,{" "}
      <span className="font-semibold text-[#081629]">ERP, SIAKAD, Kasir POS</span>, hingga{" "}
      <span className="font-semibold text-[#081629]">Automasi AI &amp; WhatsApp resmi</span>—dirancang hidup, presisi, dan 100% menjadi aset usaha Anda.
    </p>
  );
}

interface HeroSyncedDescriptionProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
  variant: "desktop" | "mobile";
}

/**
 * Fluid spring-animated pill selector (layoutId sliding Ocean-to-Teal indicator).
 */
export function HeroSyncedDescription({
  activeIdx,
  onSelect,
  variant,
}: HeroSyncedDescriptionProps) {
  const isDesktop = variant === "desktop";
  const idPrefix = isDesktop ? "hero" : "m-hero";

  return (
    <div className={isDesktop ? "space-y-4 max-w-lg" : "space-y-3"}>
      <div
        role="tablist"
        aria-label="Fokus layanan Abinest"
        className={
          isDesktop
            ? "inline-flex items-center p-1.5 rounded-full bg-white/85 backdrop-blur-md shadow-[0_8px_24px_rgba(8,22,41,0.06)] ring-1 ring-slate-900/[0.06]"
            : "flex items-center justify-between gap-1 p-1 rounded-full bg-white/90 backdrop-blur-md shadow-sm ring-1 ring-slate-900/[0.06]"
        }
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIdx;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              id={`${idPrefix}-tab-${slide.id}`}
              aria-selected={isActive}
              aria-controls={`${idPrefix}-panel-${slide.id}`}
              onClick={() => onSelect(idx)}
              className={`relative z-10 rounded-full transition-colors cursor-pointer whitespace-nowrap shrink-0 font-semibold ${
                isDesktop
                  ? "px-4 py-1.5 text-[12.5px]"
                  : "flex-1 py-1.5 px-2 text-center text-[11px] sm:text-[12px]"
              } ${
                isActive ? "text-white" : "text-[#475569] hover:text-[#081629]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`${idPrefix}-active-tab-bg`}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0284C7] to-[#00C9A7] shadow-[0_4px_12px_rgba(2,132,199,0.28)] -z-10"
                />
              )}
              {isDesktop && (
                <span
                  className={`font-mono text-[10.5px] mr-1.5 ${
                    isActive ? "text-white/80" : "text-slate-400"
                  }`}
                >
                  {slide.number}
                </span>
              )}
              <span>{slide.label}</span>
            </button>
          );
        })}
      </div>

      <div className="grid">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIdx;
          const descText = isDesktop ? slide.desktopDesc : slide.mobileDesc;
          return (
            <p
              key={slide.id}
              id={`${idPrefix}-panel-${slide.id}`}
              role="tabpanel"
              aria-labelledby={`${idPrefix}-tab-${slide.id}`}
              aria-hidden={!isActive}
              className={`col-start-1 row-start-1 leading-relaxed font-normal text-[#475569] transition-all duration-300 ${
                isDesktop ? "text-[16px]" : "text-[14px]"
              } ${
                isActive
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-1.5 z-0 pointer-events-none select-none"
              }`}
            >
              {descText}
            </p>
          );
        })}
      </div>
    </div>
  );
}

interface HeroShowcaseFrameProps {
  activeIdx: number;
  sizes?: string;
  className?: string;
}

function SlideWebVisual() {
  const scores = [
    { label: "Performa", val: "100", delay: 0.05 },
    { label: "SEO", val: "100", delay: 0.12 },
    { label: "Akses", val: "100", delay: 0.19 },
    { label: "Standar", val: "100", delay: 0.26 },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] text-white shadow-sm shrink-0">
            <Globe className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-semibold text-[#081629] truncate">
            nusantaracapital.co.id
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 font-mono text-[11px] font-semibold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00C9A7] animate-pulse" />
          0,48 dtk LCP
        </span>
      </div>

      {/* Animated Core Web Vitals Stage */}
      <div className="rounded-2xl bg-gradient-to-br from-[#F4F8FB] to-sky-50/50 p-4 space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#0284C7] font-semibold">
              Google PageSpeed Live
            </div>
            <div className="text-lg sm:text-xl font-bold tracking-tight text-[#081629] mt-0.5">
              Terbuka Instan di HP
            </div>
          </div>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-xl bg-gradient-to-br from-[#0D9488] to-[#00C9A7] px-3 py-1.5 text-white shadow-[0_8px_20px_rgba(13,148,136,0.26)] shrink-0 text-right"
          >
            <div className="text-sm sm:text-base font-bold leading-none">+180%</div>
            <div className="text-[10px] text-teal-50 mt-0.5">Prospek WA</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {scores.map((s) => (
            <motion.div
              key={s.label}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 22, delay: s.delay }}
              className="rounded-xl bg-white shadow-[0_6px_18px_rgba(8,22,41,0.05)] py-2.5 px-2 flex flex-col items-center justify-center text-center"
            >
              <div className="w-9 h-9 rounded-full border-2 border-[#0D9488] bg-teal-50 flex items-center justify-center font-mono text-xs font-bold text-[#0F766E]">
                {s.val}
              </div>
              <span className="text-[11px] font-semibold text-[#081629] mt-1.5">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Speed Bar */}
      <div className="rounded-2xl bg-[#F4F8FB] p-3.5 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-[#081629] inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>Arsitektur Next.js Abinest</span>
          </span>
          <span className="font-mono font-bold text-[#0284C7]">0,48 detik</span>
        </div>
        <div className="h-2 w-full rounded-full bg-slate-200/75 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "16%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#00C9A7]"
          />
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#475569]">
          <span>Rata-rata template web biasa</span>
          <span className="font-mono">4,80 detik</span>
        </div>
      </div>
    </div>
  );
}

function SlideErpVisual() {
  const bars = [38, 52, 46, 68, 82, 96];
  const rows = [
    { name: "Gudang Jakarta Pusat", qty: "10.155 SKU", status: "Sinkron" },
    { name: "Portal SIAKAD · Ujian CBT", qty: "1.240 Siswa", status: "0% Down" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#0D9488] to-[#00C9A7] text-white shadow-sm shrink-0">
            <Database className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-semibold text-[#081629] truncate">
            Abinest ERP · SIAKAD · POS
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#081629] to-[#0F2744] font-mono text-[11px] font-semibold text-[#00E5BE] shrink-0">
          Rp0 / Staf
        </span>
      </div>

      {/* Animated Chart & KPI Row */}
      <div className="rounded-2xl bg-gradient-to-br from-[#081629] to-[#0F2D4E] p-4 text-white space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-sky-300">
              Omzet Kasir &amp; Distribusi
            </div>
            <div className="text-xl sm:text-2xl font-bold tracking-tight mt-0.5">
              Rp148,5 Juta
            </div>
          </div>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#00C9A7]/15 text-[#2DD4BF] text-[11px] font-semibold">
            <TrendingUp className="w-3 h-3" />
            24.180 SKU
          </span>
        </div>

        <div className="flex items-end gap-2 h-16 pt-2">
          {bars.map((pct, i) => (
            <motion.div
              key={i}
              initial={{ height: "12%" }}
              animate={{ height: `${pct}%` }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: "easeOut" }}
              className={`flex-1 rounded-t-md ${
                i === bars.length - 1
                  ? "bg-gradient-to-t from-[#0EA5E9] to-[#00E5BE]"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Live Sync Rows */}
      <div className="rounded-2xl bg-[#F4F8FB] divide-y divide-slate-200/60 overflow-hidden">
        {rows.map((r) => (
          <div
            key={r.name}
            className="px-4 py-2.5 flex items-center justify-between gap-2 text-xs"
          >
            <span className="font-semibold text-[#081629] truncate">{r.name}</span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-[#475569]">{r.qty}</span>
              <span className="px-2 py-0.5 rounded-full bg-teal-100 text-[10.5px] font-semibold text-teal-800">
                {r.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideAiVisual() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#081629] to-[#0284C7] text-white shadow-sm shrink-0">
            <MessageSquare className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-semibold text-[#081629] truncate">
            Meta Cloud API Resmi · 24/7
          </span>
        </div>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-50 text-[#0284C7] font-mono text-[11px] font-semibold shrink-0">
          OCR 99,7%
        </span>
      </div>

      {/* Animated Sequential Chat Bubbles */}
      <div className="rounded-2xl bg-gradient-to-br from-[#F4F8FB] to-cyan-50/50 p-3.5 space-y-2.5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-[88%] rounded-2xl rounded-tl-sm bg-white shadow-sm px-3.5 py-2.5 text-xs text-[#081629] leading-relaxed"
        >
          <span className="block font-mono text-[10px] text-slate-400 mb-0.5">
            Pelanggan · 09:14
          </span>
          Stok Pipa PVC AW 4&quot; tersedia 150 batang untuk kirim Bekasi besok?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.18 }}
          className="ml-auto max-w-[92%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-[#081629] via-[#0F2744] to-[#0284C7] text-white shadow-[0_8px_20px_rgba(8,22,41,0.22)] px-3.5 py-2.5 text-xs leading-relaxed"
        >
          <span className="flex items-center justify-between font-mono text-[10px] text-[#00E5BE] mb-0.5">
            <span>Asisten AI Abinest</span>
            <span>⚡ 0,6 detik</span>
          </span>
          Tersedia 420 btg di Gudang Bekasi. Total = <strong>Rp17.700.000</strong>. Kirim foto PO untuk diproses otomatis.
        </motion.div>
      </div>

      {/* Verified OCR Extraction Card */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.32 }}
        className="rounded-2xl bg-teal-50/80 p-3.5 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#0D9488] text-white shadow-sm shrink-0">
            <FileCheck2 className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-bold text-[#081629] truncate">
              Faktur_PO_7782.pdf → Masuk ERP
            </div>
            <div className="text-[11px] text-teal-800 truncate">
              PPN 11% tervalidasi · 0 salah ketik
            </div>
          </div>
        </div>
        <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
      </motion.div>
    </div>
  );
}

/**
 * Floating Frosted-Glass Interactive Product Stage with spring transitions.
 */
export function HeroShowcaseFrame({
  activeIdx,
  className = "",
}: HeroShowcaseFrameProps) {
  const activeSlide = HERO_SLIDES[activeIdx] ?? HERO_SLIDES[0];

  return (
    <div className={`relative ${className}`}>
      {/* Soft Luminous Ocean-Teal Aura Behind Card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-3 rounded-[32px] bg-gradient-to-tr from-[#0284C7]/20 via-[#0EA5E9]/20 to-[#00C9A7]/25 blur-2xl opacity-80"
      />

      <div className="relative rounded-[28px] bg-white/95 backdrop-blur-xl p-5 sm:p-6 shadow-[0_28px_70px_-15px_rgba(8,22,41,0.14)] ring-1 ring-white/90 flex flex-col justify-between min-h-[360px] sm:min-h-[385px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 10, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.985 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            {activeIdx === 0 && <SlideWebVisual />}
            {activeIdx === 1 && <SlideErpVisual />}
            {activeIdx === 2 && <SlideAiVisual />}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Trust Strip */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 text-[11.5px] text-[#475569]">
          <span className="inline-flex items-center gap-1.5 font-semibold text-[#081629]">
            <ShieldCheck className="w-4 h-4 text-[#0284C7]" />
            <span>100% Hak Milik Kode &amp; Database</span>
          </span>
          <span className="font-mono text-slate-400">
            {activeSlide.number} / 03
          </span>
        </div>
      </div>
    </div>
  );
}
