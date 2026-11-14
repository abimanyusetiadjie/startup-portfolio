"use client";

import { useState, useEffect } from "react";

export const HERO_WHATSAPP_NUMBER = "6281398589745";
export const HERO_SLIDE_INTERVAL_MS = 5500;

export interface HeroSlide {
  id: "web" | "erp" | "aiml";
  number: string;
  label: string;
  src: string;
  alt: string;
  desktopDesc: string;
  mobileDesc: string;
  waMessage: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "web",
    number: "01",
    label: "Situs Web",
    src: "/images/hero-web.webp",
    alt: "Arsitektur Situs Web Modern Abinest",
    desktopDesc:
      "Situs web perusahaan dan landing page berkecepatan tinggi (<0,8 detik), rapi di ponsel, ramah pencarian Google, dan 100% hak milik Anda.",
    mobileDesc:
      "Situs web perusahaan & landing page cepat (<0,8 detik), rapi di HP, ramah Google, dan 100% milik Anda.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Situs Web Modern untuk bisnis kami.",
  },
  {
    id: "erp",
    number: "02",
    label: "Sistem ERP",
    src: "/images/erp-dashboard.webp",
    alt: "Dashboard Sistem ERP dan Operasional Terpadu",
    desktopDesc:
      "Dasbor stok multi-gudang, kasir POS, keuangan, hingga portal SIAKAD terintegrasi—100% hak milik penuh tanpa biaya lisensi per pengguna.",
    mobileDesc:
      "Kelola stok multi-gudang, kasir, keuangan, & SIAKAD sekolah dalam satu dasbor tanpa biaya per staf.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem ERP Kustom atau SIAKAD tanpa biaya lisensi per pengguna.",
  },
  {
    id: "aiml",
    number: "03",
    label: "Automasi AI",
    src: "/images/ai-ml-workflow.webp",
    alt: "Automasi WhatsApp Resmi Meta dan Pembaca Dokumen AI",
    desktopDesc:
      "Asisten pelanggan 24 jam via WhatsApp Cloud API resmi Meta dan pembaca faktur AI otomatis yang terhubung langsung ke operasional bisnis.",
    mobileDesc:
      "Asisten chat WhatsApp resmi 24 jam dan pembaca faktur AI otomatis yang terhubung ke stok usaha Anda.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai implementasi Automasi AI dan WhatsApp Bisnis resmi Meta.",
  },
];

export function buildHeroWaHref(slide: HeroSlide): string {
  return `https://wa.me/${HERO_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    slide.waMessage
  )}`;
}

/**
 * Shared synchronized carousel state for desktop and mobile hero sections.
 * Resets the timer whenever the active slide changes manually.
 */
export function useHeroSlideCarousel(
  slideCount = HERO_SLIDES.length,
  intervalMs = HERO_SLIDE_INTERVAL_MS
) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || slideCount <= 1) return;

    const timer = setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % slideCount);
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [activeIdx, isPaused, slideCount, intervalMs]);

  return {
    activeIdx,
    setActiveIdx,
    isPaused,
    setIsPaused,
  };
}
