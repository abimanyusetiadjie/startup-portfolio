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
    src: "/images/hero-slide-web.jpg",
    alt: "Arsitektur Website Cepat Modern Abinest",
    desktopDesc:
      "Terbuka kurang dari 0,8 detik, tampil meyakinkan di HP, dan mudah ditemukan di Google.",
    mobileDesc:
      "Terbuka <0,8 detik, meyakinkan di HP, dan mudah ditemukan di Google.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan Website Cepat untuk bisnis kami.",
  },
  {
    id: "erp",
    number: "02",
    label: "ERP · SIAKAD · POS",
    src: "/images/hero-slide-erp.jpg",
    alt: "Dasbor Sistem ERP, SIAKAD, dan Kasir POS Terpadu",
    desktopDesc:
      "Stok, kasir, keuangan, hingga nilai siswa rapi dalam satu dasbor—tanpa biaya per pengguna.",
    mobileDesc:
      "Stok, kasir, keuangan, hingga nilai siswa dalam satu dasbor—tanpa biaya per pengguna.",
    waMessage:
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai Sistem ERP, SIAKAD, atau POS Kasir tanpa biaya lisensi per pengguna.",
  },
  {
    id: "aiml",
    number: "03",
    label: "Automasi AI/ML",
    src: "/images/hero-slide-ai.jpg",
    alt: "Automasi AI/ML WhatsApp Bisnis Resmi dan Pembaca Dokumen",
    desktopDesc:
      "Chat pelanggan dibalas 24 jam dan nota terbaca otomatis—tim Anda fokus ke hal yang lebih penting.",
    mobileDesc:
      "Chat pelanggan dibalas 24 jam, nota terbaca otomatis—tim fokus ke hal penting.",
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
