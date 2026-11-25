"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";

const HERO_TEASERS = [
  {
    id: "nusantara",
    title: "Nusantara Capital. Corporate web built for 0.48s load.",
    source: "From our work",
    thumb: "/images/significa/work-nusantara-editorial.jpg",
    alt: "Nusantara Capital corporate website preview",
    href: "/karya/nusantara-capital",
  },
  {
    id: "sinar",
    title: "Sinar Distribusi. Multi-warehouse ERP & POS system.",
    source: "From our work",
    thumb: "/images/significa/work-sinar-erp-editorial.jpg",
    alt: "Sinar Distribusi ERP dashboard preview",
    href: "/karya/sinar-distribusi",
  },
  {
    id: "wawasan-erp",
    title: "Own vs. Rent ERP: Real 3-year cost breakdown.",
    source: "From our insights",
    thumb: "/images/hero-slide-ai.webp",
    alt: "Abinest engineering insights preview",
    href: "/wawasan/beli-putus-vs-sewa-saas-erp",
  },
  {
    id: "siakad",
    title: "SIAKAD CBT. 1,240 students live with 0% downtime.",
    source: "From our work",
    thumb: "/images/significa/work-siakad-cbt-editorial.jpg",
    alt: "SIAKAD CBT academic portal preview",
    href: "/karya/siakad-ujian-cbt",
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
    sub: "0.48s Mobile Load",
    image: "/images/hero-slide-web.webp",
    alt: "High-speed corporate web architecture",
  },
  {
    bg: "#3C846E",
    ink: "#FFFFFF",
    tagBg: "#171717",
    tagText: "#FFD124",
    eyebrow: "FULL OWNERSHIP",
    metric: "Rp0 / Seat",
    sub: "18,420 SKUs · 4 Hubs",
    image: "/images/hero-slide-erp.webp",
    alt: "Multi-warehouse ERP and POS dashboard",
  },
  {
    bg: "#DE6D3B",
    ink: "#171717",
    tagBg: "#171717",
    tagText: "#FFFFFF",
    eyebrow: "META CLOUD API",
    metric: "99.7% OCR",
    sub: "AI Reply Under 1s",
    image: "/images/hero-slide-ai.webp",
    alt: "WhatsApp Cloud API and OCR automation",
  },
  {
    bg: "#E2B2A2",
    ink: "#171717",
    tagBg: "#171717",
    tagText: "#FFFFFF",
    eyebrow: "SIAKAD CBT",
    metric: "1,240 Users",
    sub: "Zero Exam Downtime",
    image: "/images/case-studies/modern-web-finance.jpg",
    alt: "Production deployment for enterprise clients",
  },
];

export function SignificaHero() {
  const [hoveredTeaser, setHoveredTeaser] = useState<string | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <>
      <section
        id="beranda"
        className="pt-[104px] sm:pt-[118px] pb-12 sm:pb-16 bg-[#F7F7F7]"
      >
        <div className="sig-container">
          {/* 1. Significa Iconic 3-Line English Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="pb-7 sm:pb-11"
          >
            <h1 className="font-bold text-[#171717] tracking-[-0.025em] leading-[1.09] text-[clamp(2rem,4.4vw+0.9rem,4.5rem)]">
              Think. Design.
              <br />
              Develop. Automate.
              <br />
              <span className="text-[#6F6F71]">Scale.</span>
            </h1>
          </motion.div>

          {/* 2. Significa 4-Column Horizontal Teaser Strip with Fluid Sliding Hover Pill */}
          <div
            onMouseLeave={() => setHoveredTeaser(null)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-7 sm:pb-9"
          >
            {HERO_TEASERS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onMouseEnter={() => setHoveredTeaser(item.id)}
                onFocus={() => setHoveredTeaser(item.id)}
                className="relative group flex items-center gap-3.5 p-2.5 -m-2.5 rounded-[24px]"
              >
                {hoveredTeaser === item.id && (
                  <motion.span
                    layoutId="sig-hero-teaser-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    className="absolute inset-0 rounded-[24px] bg-[#EDEDED] -z-0"
                  />
                )}
                <div className="relative z-10 w-[96px] h-[72px] rounded-[16px] overflow-hidden bg-[#EDEDED] border border-[#E8E8E8] shrink-0">
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="96px"
                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
                  />
                </div>
                <div className="relative z-10 min-w-0 flex-1">
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

            {/* Floating Dark Pill Button — Opens Interactive Showreel Modal */}
            <div className="absolute left-4 bottom-4 sm:left-7 sm:bottom-7 lg:left-[18%] lg:top-[44%] lg:bottom-auto z-20">
              <button
                type="button"
                onClick={() => setShowreelOpen(true)}
                className="sig-btn-primary shadow-[0_14px_34px_rgba(23,23,23,0.34)] hover:ring-[#FFD124]/50"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Try live demo</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
    </>
  );
}
