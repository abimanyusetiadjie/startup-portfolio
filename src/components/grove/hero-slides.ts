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
    label: "Website Cepat",
    src: "/images/hero-web.webp",
    alt: "Arsitektur Website Cepat Modern Abinest",
    desktopDesc:
      "Website perusahaan dan halaman penawaran berkecepatan kilat (<0,8 detik), rapi di ponsel, ramah pencarian Google, dan 100% hak milik Anda.",
    mobileDesc:
      "Website usaha & halaman penawaran cepat (<0,8 detik), rapi di HP, ramah Google, dan 100% hak milik Anda.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Website Cepat untuk bisnis kami.",
  },
  {
    id: "erp",
    number: "02",
    label: "ERP · SIAKAD · POS",
    src: "/images/erp-dashboard.webp",
    alt: "Dasbor Sistem ERP, SIAKAD, dan Kasir POS Terpadu",
    desktopDesc:
      "Satu sistem terpadu untuk stok multi-gudang (ERP), kasir toko (POS), dan portal sekolah (SIAKAD)—100% hak milik penuh tanpa biaya per pengguna.",
    mobileDesc:
      "Kelola stok multi-gudang (ERP), kasir toko (POS), & portal SIAKAD sekolah tanpa biaya bulanan per staf.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem ERP, SIAKAD, atau POS Kasir tanpa biaya lisensi per pengguna.",
  },
  {
    id: "aiml",
    number: "03",
    label: "Automasi AI/ML",
    src: "/images/ai-ml-workflow.webp",
    alt: "Automasi AI/ML WhatsApp Bisnis Resmi dan Pembaca Dokumen",
    desktopDesc:
      "Asisten pelanggan otomatis 24 jam di WhatsApp Bisnis resmi serta sistem baca faktur & prediksi data berbasis AI/ML yang terhubung ke operasional usaha.",
    mobileDesc:
      "Asisten chat WhatsApp resmi 24 jam & pembaca nota otomatis berbasis AI/ML yang terhubung langsung ke stok Anda.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai implementasi Automasi AI/ML dan WhatsApp Bisnis resmi.",
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
