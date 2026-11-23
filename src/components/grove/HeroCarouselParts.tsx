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
} from "lucide-react";
import { HERO_SLIDES } from "./hero-slides";

interface HeroSyncedHeadlineProps {
  className: string;
}

/**
 * Primary editorial headline with Vercel Geist typography & cobalt-teal accent.
 */
export function HeroSyncedHeadline({ className }: HeroSyncedHeadlineProps) {
  return (
    <h1 className={className}>
      Kami Membangun Sistem yang{" "}
      <span className="bg-gradient-to-r from-[#0070F3] via-sky-500 to-teal-500 bg-clip-text text-transparent">
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

/**
 * Clean editorial lead copy without redundant duplicate underlines.
 */
export function HeroSyncedIntro({ className }: HeroSyncedIntroProps) {
  return (
    <p className={className}>
      Dari <span className="font-medium text-[#0A0A0A]">Website cepat</span>,{" "}
      <span className="font-medium text-[#0A0A0A]">ERP, SIAKAD, Kasir POS</span>, hingga{" "}
      <span className="font-medium text-[#0A0A0A]">Automasi AI &amp; WhatsApp resmi</span>—dirancang presisi agar langsung siap pakai dan 100% menjadi aset Anda.
    </p>
  );
}

interface HeroSyncedDescriptionProps {
  activeIdx: number;
  onSelect: (idx: number) => void;
  variant: "desktop" | "mobile";
}

/**
 * Vercel Segmented Pill Switcher paired with a CLS-free description stack.
 */
export function HeroSyncedDescription({
  activeIdx,
  onSelect,
  variant,
}: HeroSyncedDescriptionProps) {
  const isDesktop = variant === "desktop";
  const idPrefix = isDesktop ? "hero" : "m-hero";

  return (
    <div className={isDesktop ? "space-y-3.5 max-w-lg" : "space-y-3"}>
      <div
        role="tablist"
        aria-label="Fokus layanan Abinest"
        className={
          isDesktop
            ? "inline-flex items-center p-1 rounded-full bg-neutral-100 border border-[#EAEAEA]"
            : "flex items-center justify-between gap-1 p-1 rounded-full bg-neutral-100 border border-[#EAEAEA]"
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
              className={`relative rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 font-medium ${
                isDesktop
                  ? "px-3.5 py-1.5 text-[12.5px]"
                  : "flex-1 py-1.5 px-2 text-center text-[11px] sm:text-[12px]"
              } ${
                isActive
                  ? "text-[#0A0A0A] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                  : "text-[#666666] hover:text-[#0A0A0A]"
              }`}
            >
              {isDesktop && (
                <span className="font-mono text-[10.5px] mr-1.5 text-neutral-400">
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
              className={`col-start-1 row-start-1 leading-relaxed font-normal text-[#666666] transition-all duration-300 ${
                isDesktop ? "text-[15.5px]" : "text-[13.5px]"
              } ${
                isActive
                  ? "opacity-100 translate-y-0 z-10"
                  : "opacity-0 translate-y-1 z-0 pointer-events-none select-none"
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
    { label: "Performa", val: "100" },
    { label: "SEO", val: "100" },
    { label: "Akses", val: "100" },
    { label: "Standar", val: "100" },
  ];

  return (
    <div className="space-y-4">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EAEAEA]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0A0A0A] text-white shrink-0">
            <Globe className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-medium text-[#0A0A0A] truncate">
            nusantaracapital.co.id
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/80 font-mono text-[11px] font-medium text-emerald-700 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          0,48 dtk LCP
        </span>
      </div>

      {/* Main Performance Highlight */}
      <div className="rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="font-mono text-[10.5px] uppercase tracking-wider text-[#666666]">
              Audit Google Core Web Vitals
            </div>
            <div className="text-lg sm:text-xl font-semibold tracking-[-0.025em] text-[#0A0A0A] mt-0.5">
              Terbuka Instan di Layar HP
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-lg sm:text-xl font-semibold tracking-tight text-emerald-600">
              +180%
            </div>
            <div className="text-[11px] text-[#666666]">Prospek WA</div>
          </div>
        </div>

        {/* 4 Crisp Lighthouse Score Rings */}
        <div className="grid grid-cols-4 gap-2 pt-1">
          {scores.map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white border border-[#EAEAEA] py-2.5 px-2 flex flex-col items-center justify-center text-center"
            >
              <div className="w-9 h-9 rounded-full border-2 border-emerald-500 bg-emerald-50/70 flex items-center justify-center font-mono text-xs font-semibold text-emerald-700">
                {s.val}
              </div>
              <span className="text-[11px] font-medium text-[#0A0A0A] mt-1.5">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Speed Comparison Bar */}
      <div className="rounded-xl bg-white border border-[#EAEAEA] p-3.5 space-y-2.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-[#0A0A0A] inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-[#0070F3]" />
            <span>Arsitektur Next.js Abinest</span>
          </span>
          <span className="font-mono font-semibold text-[#0070F3]">0,48 detik</span>
        </div>
        <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
          <div className="h-full w-[14%] rounded-full bg-gradient-to-r from-[#0070F3] to-teal-500" />
        </div>
        <div className="flex items-center justify-between text-[11px] text-[#666666]">
          <span>Rata-rata template web lama</span>
          <span className="font-mono">4,80 detik</span>
        </div>
      </div>
    </div>
  );
}

function SlideErpVisual() {
  const rows = [
    { name: "Gudang Jakarta Pusat", qty: "10.155 SKU", status: "Sinkron" },
    { name: "Cabang Surabaya Timur", qty: "7.496 SKU", status: "Sinkron" },
    { name: "Portal SIAKAD · Ujian CBT", qty: "1.240 Siswa", status: "0% Down" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EAEAEA]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[#0A0A0A] text-white shrink-0">
            <Database className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-medium text-[#0A0A0A] truncate">
            Abinest ERP · SIAKAD · POS
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A0A0A] font-mono text-[11px] font-medium text-white shrink-0">
          Rp0 / Staf
        </span>
      </div>

      {/* 2 Big Scannable KPI Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] p-3.5">
          <div className="font-mono text-[10.5px] text-[#666666] uppercase">
            Total Stok 4 Gudang
          </div>
          <div className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#0A0A0A] mt-1">
            24.180
          </div>
          <div className="text-[11.5px] font-medium text-emerald-600 mt-0.5">
            0% selisih inventaris
          </div>
        </div>
        <div className="rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] p-3.5">
          <div className="font-mono text-[10.5px] text-[#666666] uppercase">
            Omzet Kasir Hari Ini
          </div>
          <div className="text-xl sm:text-2xl font-semibold tracking-[-0.03em] text-[#0A0A0A] mt-1">
            Rp148,5 jt
          </div>
          <div className="text-[11.5px] text-[#666666] mt-0.5">
            312 struk · 6 cabang
          </div>
        </div>
      </div>

      {/* Crisp Live Sync Rows */}
      <div className="rounded-xl bg-white border border-[#EAEAEA] divide-y divide-[#EAEAEA] overflow-hidden">
        {rows.map((r) => (
          <div
            key={r.name}
            className="px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs"
          >
            <span className="font-medium text-[#0A0A0A] truncate">{r.name}</span>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-[#666666]">{r.qty}</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10.5px] font-medium text-emerald-700">
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
      <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#EAEAEA]">
        <div className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-emerald-600 text-white shrink-0">
            <MessageSquare className="w-3.5 h-3.5" />
          </span>
          <span className="font-mono text-xs font-medium text-[#0A0A0A] truncate">
            Meta Cloud API Resmi · 24/7
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200/80 font-mono text-[11px] font-medium text-[#0070F3] shrink-0">
          OCR 99,7%
        </span>
      </div>

      {/* Crisp WhatsApp Conversation Simulation */}
      <div className="rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] p-3.5 space-y-2.5">
        <div className="max-w-[88%] rounded-xl rounded-tl-sm bg-white border border-[#EAEAEA] px-3.5 py-2.5 text-xs text-[#0A0A0A] leading-relaxed">
          <span className="block font-mono text-[10px] text-[#666666] mb-0.5">
            Pelanggan · 09:14
          </span>
          Stok Pipa PVC AW 4&quot; tersedia 150 batang untuk kirim Bekasi besok?
        </div>

        <div className="ml-auto max-w-[92%] rounded-xl rounded-tr-sm bg-[#0A0A0A] text-white px-3.5 py-2.5 text-xs leading-relaxed">
          <span className="flex items-center justify-between font-mono text-[10px] text-emerald-400 mb-0.5">
            <span>Asisten AI Abinest</span>
            <span>0,6 detik</span>
          </span>
          Tersedia 420 btg di Gudang Bekasi. Total 150 btg = <strong>Rp17.700.000</strong>. Kirim foto PO untuk diproses otomatis.
        </div>
      </div>

      {/* Verified OCR Extraction Bar */}
      <div className="rounded-xl bg-white border border-[#EAEAEA] p-3.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-700 shrink-0">
            <FileCheck2 className="w-4 h-4" />
          </span>
          <div className="min-w-0">
            <div className="text-xs font-semibold text-[#0A0A0A] truncate">
              Faktur_PO_7782.pdf → Masuk ERP
            </div>
            <div className="text-[11px] text-[#666666] truncate">
              PPN 11% tervalidasi · 0 salah ketik
            </div>
          </div>
        </div>
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
      </div>
    </div>
  );
}

/**
 * Live Vector-Sharp Interactive React Product Stage synced with activeIdx.
 * 100% crisp & readable at every viewport from 390px mobile to 4K desktop.
 */
export function HeroShowcaseFrame({
  activeIdx,
  className = "",
}: HeroShowcaseFrameProps) {
  const activeSlide = HERO_SLIDES[activeIdx] ?? HERO_SLIDES[0];

  return (
    <div
      className={`rounded-2xl bg-gradient-to-b from-white to-[#FAFAFA] border border-[#EAEAEA] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.07)] ${className}`}
    >
      <div className="rounded-xl bg-white border border-[#EAEAEA]/90 p-4 sm:p-5 flex flex-col justify-between min-h-[340px] sm:min-h-[370px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {activeIdx === 0 && <SlideWebVisual />}
            {activeIdx === 1 && <SlideErpVisual />}
            {activeIdx === 2 && <SlideAiVisual />}
          </motion.div>
        </AnimatePresence>

        {/* Unified Bottom Trust Bar */}
        <div className="mt-4 pt-3 border-t border-[#EAEAEA] flex items-center justify-between gap-2 text-[11px] text-[#666666]">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#0A0A0A]">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Hak Milik Kode &amp; Database</span>
          </span>
          <span className="font-mono text-neutral-400">
            {activeSlide.number} / 03
          </span>
        </div>
      </div>
    </div>
  );
}
