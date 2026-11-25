"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const HERO_TEASERS = [
  {
    title: "Nusantara Capital. Web korporat muat 0,48 detik.",
    source: "Dari proyek kami",
    thumb: "/images/hero-slide-web.webp",
    alt: "Pratinjau Website Nusantara Capital",
    href: "/#karya",
  },
  {
    title: "Sinar Distribusi. ERP 4 gudang & 18.420 SKU sinkron.",
    source: "Dari proyek kami",
    thumb: "/images/hero-slide-erp.webp",
    alt: "Pratinjau Dasbor ERP Multi-Gudang",
    href: "/#karya",
  },
  {
    title: "WhatsApp AI Resmi. Balas 24/7 & baca faktur otomatis.",
    source: "Dari layanan kami",
    thumb: "/images/hero-slide-ai.webp",
    alt: "Pratinjau Automasi WhatsApp AI & OCR",
    href: "/jasa-automasi-whatsapp",
  },
  {
    title: "Portal SIAKAD CBT. 1.240 siswa ujian 0% gangguan.",
    source: "Dari demo interaktif",
    thumb: "/images/case-studies/siakad-education-portal.jpg",
    alt: "Pelaksanaan Ujian CBT Sekolah SIAKAD",
    href: "/demo",
  },
];

const SHOWCASE_PANELS = [
  {
    bg: "#DAD6CE",
    ink: "#171717",
    tagBg: "#E1251B",
    tagText: "#FFFFFF",
    eyebrow: "PAGESPEED",
    metric: "100 / 100",
    sub: "Waktu Muat 0,48 dtk",
    image: "/images/hero-slide-web.webp",
    alt: "Antarmuka Web Korporat Cepat Abinest",
  },
  {
    bg: "#3C846E",
    ink: "#FFFFFF",
    tagBg: "#171717",
    tagText: "#FFD124",
    eyebrow: "BELI PUTUS",
    metric: "Rp0 / Staf",
    sub: "18.420 SKU · 4 Gudang",
    image: "/images/hero-slide-erp.webp",
    alt: "Dasbor ERP Multi-Gudang dan Kasir POS",
  },
  {
    bg: "#DE6D3B",
    ink: "#171717",
    tagBg: "#171717",
    tagText: "#FFFFFF",
    eyebrow: "META API",
    metric: "OCR 99,7%",
    sub: "Balas Chat AI < 1 dtk",
    image: "/images/hero-slide-ai.webp",
    alt: "Automasi WhatsApp Cloud API dan OCR Faktur",
  },
  {
    bg: "#E2B2A2",
    ink: "#171717",
    tagBg: "#171717",
    tagText: "#FFFFFF",
    eyebrow: "SIAKAD CBT",
    metric: "1.240 Siswa",
    sub: "Ujian Serentak 0% Down",
    image: "/images/case-studies/modern-web-finance.jpg",
    alt: "Implementasi Sistem Produksi di Kantor Klien",
  },
];

export function SignificaHero() {
  const handleSmoothAnchor = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const idx = href.indexOf("#");
    if (idx === -1) return;
    const hash = href.slice(idx);
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="beranda"
      className="pt-[104px] sm:pt-[118px] pb-12 sm:pb-16 bg-[#F7F7F7]"
    >
      <div className="sig-container">
        {/* 1. Significa Iconic 3-Line Display Headline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pb-7 sm:pb-11"
        >
          <h1 className="font-bold text-[#171717] tracking-[-0.025em] leading-[1.09] text-[clamp(1.92rem,4.4vw+0.9rem,4.5rem)]">
            Rancang. Bangun.
            <br />
            Luncurkan. Otomasi.
            <br />
            <span className="text-[#6F6F71]">Tumbuh.</span>
          </h1>
        </motion.div>

        {/* 2. Significa 4-Column Horizontal Project Teaser Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-7 sm:pb-9">
          {HERO_TEASERS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={(e) => handleSmoothAnchor(e, item.href)}
              className="group flex items-center gap-3.5 p-2.5 -m-2.5 rounded-[24px] hover:bg-[#EDEDED] transition-colors duration-200"
            >
              <div className="relative w-[96px] h-[72px] rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8] shrink-0">
                <Image
                  src={item.thumb}
                  alt={item.alt}
                  fill
                  sizes="96px"
                  className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[15.5px] sm:text-[16.5px] font-medium text-[#171717] leading-[1.3] line-clamp-2">
                  {item.title}
                </p>
                <span className="block text-[13px] text-[#6F6F71] mt-1">
                  {item.source}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Significa Signature 4-Panel Editorial Color-Blocked Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="relative rounded-[20px] overflow-hidden border border-[#E8E8E8]"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]">
            {SHOWCASE_PANELS.map((panel) => (
              <div
                key={panel.eyebrow}
                style={{ backgroundColor: panel.bg, color: panel.ink }}
                className="relative flex flex-col justify-between pt-6 sm:pt-9 px-4 sm:px-6 overflow-hidden group"
              >
                {/* Editorial Top Stamp */}
                <div className="space-y-2 relative z-10">
                  <span
                    style={{
                      backgroundColor: panel.tagBg,
                      color: panel.tagText,
                    }}
                    className="inline-flex items-center px-2.5 py-1 rounded-[6px] font-mono text-[10px] font-bold tracking-wider uppercase"
                  >
                    {panel.eyebrow}
                  </span>
                  <div className="text-lg sm:text-2xl font-bold tracking-[-0.02em] leading-tight">
                    {panel.metric}
                  </div>
                  <div className="text-[11.5px] sm:text-[13px] opacity-80 leading-snug">
                    {panel.sub}
                  </div>
                </div>

                {/* Peeking Device Mockup Frame from Bottom Edge */}
                <div className="relative mt-6 sm:mt-8 -mb-3 sm:-mb-4 mx-auto w-full max-w-[260px]">
                  <div className="rounded-t-[20px] sm:rounded-t-[24px] bg-[#171717] p-[6px] sm:p-[8px] pb-0 shadow-[0_20px_40px_rgba(0,0,0,0.22)] group-hover:-translate-y-1.5 transition-transform duration-300">
                    {/* Tiny Hardware Notch Bar */}
                    <div className="w-12 h-1 rounded-full bg-white/20 mx-auto mb-1.5" />
                    <div className="relative aspect-[4/3] sm:aspect-[10/9] w-full rounded-t-[14px] overflow-hidden bg-white">
                      <Image
                        src={panel.image}
                        alt={panel.alt}
                        fill
                        priority
                        sizes="(max-width: 768px) 46vw, 24vw"
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Dark Pill Button — Exact Match to Significa's 'Play showreel' CTA */}
          <div className="absolute left-4 bottom-4 sm:left-7 sm:bottom-7 lg:left-[18%] lg:top-[44%] lg:bottom-auto z-20">
            <Link
              href="/demo"
              className="sig-btn-primary shadow-[0_14px_34px_rgba(23,23,23,0.34)] hover:ring-[#FFD124]/50"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Coba demo interaktif</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
