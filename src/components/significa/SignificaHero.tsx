"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SignificaShowreelModal } from "./SignificaShowreelModal";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const SHOWREEL_SLIDES = [
  {
    id: "amen",
    index: "01",
    shortLabel: "Toko Amen",
    client: "Toko Amen Snack",
    caption: "1,446-SKU live catalog & WhatsApp AI assistant",
    image: "/images/portfolio/amen-system.jpg",
    alt: "Toko Amen Snack live catalog 1,446 SKUs and WhatsApp AI assistant",
    href: "/karya/toko-amen-snack",
    fit: "center" as const,
  },
  {
    id: "propsmart",
    index: "02",
    shortLabel: "PropSmart",
    client: "PropSmart SaaS",
    caption: "Property management, 9.45% Rental Yield BI & ML pricing",
    image: "/images/portfolio/propsmart-dashboard.png",
    alt: "PropSmart Executive Financial and Occupancy Dashboard showing 32 rooms and 9.45% Net Rental Yield",
    href: "/karya/propsmart-saas",
    fit: "top" as const,
  },
  {
    id: "heavytrack",
    index: "03",
    shortLabel: "HeavyTrack",
    client: "HeavyTrack WMS",
    caption: "Offline-first (<5ms) heavy equipment spare parts warehouse",
    image: "/images/portfolio/heavytrack-dashboard.png",
    alt: "HeavyTrack WMS operational dashboard for heavy equipment spare parts",
    href: "/karya/heavytrack-wms",
    fit: "top" as const,
  },
  {
    id: "lacak-korupsi",
    index: "04",
    shortLabel: "Lacak Korupsi",
    client: "Lacak Korupsi",
    caption: "Investigative news portal & 38-province GIS analytics",
    image: "/images/portfolio/lacak-korupsi-peta.png",
    alt: "Lacak Korupsi news portal and provincial data intelligence chart",
    href: "/karya/lacak-korupsi",
    fit: "top" as const,
  },
  {
    id: "looku",
    index: "05",
    shortLabel: "Look.u AI",
    client: "Look.u AI",
    caption: "Zero-hallucination Hybrid RAG fashion stylist (594 SKUs)",
    image: "/images/portfolio/looku-system.jpg",
    alt: "Look.u AI Hybrid RAG fashion styling interface",
    href: "/karya/looku-ai",
    fit: "center" as const,
  },
];

const HERO_PROOF = [
  { value: "16+", label: "Shipped systems" },
  { value: "100%", label: "Code ownership" },
  { value: "Rp0", label: "Per-user fee" },
];

const PROVEN_SECTORS = [
  "Ritel & F&B",
  "Properti & Kos",
  "Gudang Alat Berat",
  "Konstruksi B2B",
  "Pendidikan",
  "Media & Data",
  "HRIS & CRM",
];

export function SignificaHero() {
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || showreelOpen || quoteOpen) return;
    const timer = window.setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % SHOWREEL_SLIDES.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [paused, showreelOpen, quoteOpen]);

  const activeSlide = SHOWREEL_SLIDES[slideIdx] ?? SHOWREEL_SLIDES[0];

  return (
    <>
      <section
        id="beranda"
        className="sig-paper-hero pt-[104px] sm:pt-[120px] pb-12 sm:pb-16"
      >
        <div className="sig-container relative z-10">
          {/* 1. Modern B2B SaaS Header Row — Instant Paint (Zero Opacity Flash / Optimal LCP) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pb-9 sm:pb-12">
            <div className="lg:col-span-7 space-y-5">
              <h1 className="font-bold text-[#0F172A] tracking-[-0.03em] leading-[1.06] text-[clamp(2.2rem,4.1vw+0.8rem,4.25rem)]">
                Think. Design.
                <br />
                Develop. Automate.
                <br />
                <span className="text-[#0D7A67]">Scale.</span>
              </h1>

              <p className="text-[16px] sm:text-[17.5px] leading-[1.55] text-[#475569] max-w-xl">
                Websites under 0.8s, custom ERP/POS/WMS, and applied AI — built
                for real operations with full code ownership.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setQuoteOpen(true)}
                  className="sig-btn-primary"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setShowreelOpen(true)}
                  className="sig-btn-outline"
                >
                  <span>Try live demo</span>
                </button>
              </div>
            </div>

            <dl className="lg:col-span-5 grid grid-cols-3 gap-5 border-t border-[#CBD5E1]/75 pt-5 lg:pb-1">
              {HERO_PROOF.map((item) => (
                <div key={item.label} className="space-y-0.5">
                  <dd className="text-[24px] sm:text-[28px] font-bold tracking-[-0.025em] text-[#0F172A] tabular-nums">
                    {item.value}
                  </dd>
                  <dt className="text-[12.5px] sm:text-[13px] text-[#64748B] leading-snug">
                    {item.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* 2. Unobstructed Elevated Working-System Showcase */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] lg:max-h-[640px] rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#F1F5F9] border border-[#E2E8F0] shadow-[0_24px_64px_-24px_rgba(15,23,42,0.12)]">
              <Link
                href={activeSlide.href}
                aria-label={`Inspect ${activeSlide.client}`}
                className="block absolute inset-0"
              >
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={activeSlide.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.42, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 94vw, (max-width: 1440px) 92vw, 1280px"
                      className={`object-cover ${
                        activeSlide.fit === "top"
                          ? "object-top"
                          : "object-center"
                      }`}
                    />
                  </motion.div>
                </AnimatePresence>
              </Link>
            </div>

            {/* 3. Clean Interactive System Selector Bar Below Frame (Direct 1-Click Switch) */}
            <div className="pt-4 sm:pt-5 flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#E2E8F0] pb-4">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
                {SHOWREEL_SLIDES.map((s, idx) => {
                  const isActive = idx === slideIdx;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSlideIdx(idx)}
                      className={`shrink-0 px-3 py-1.5 rounded-[9px] text-[13px] sm:text-[13.5px] font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-[#0D7A67]/10 text-[#0D7A67]"
                          : "text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]"
                      }`}
                    >
                      <span className="font-mono text-[11px] mr-1.5 opacity-75">
                        {s.index}
                      </span>
                      {s.shortLabel}
                    </button>
                  );
                })}
              </div>

              <Link
                href={activeSlide.href}
                className="group inline-flex items-center gap-1.5 text-[13.5px] font-medium text-[#0F172A] hover:text-[#0D7A67] transition-colors shrink-0"
              >
                <span className="truncate max-w-[300px] sm:max-w-none">
                  {activeSlide.caption}
                </span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Sector Proof Strip (Clean B2B Indonesian Trust Anchor) */}
      <div className="bg-white border-b border-[#E2E8F0]">
        <div className="sig-container py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-[12.5px] font-medium text-[#64748B] shrink-0">
            Teruji di sektor operasional nyata
          </span>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13.5px] font-medium text-[#334155]">
            {PROVEN_SECTORS.map((sector) => (
              <span key={sector}>{sector}</span>
            ))}
          </div>
        </div>
      </div>

      <SignificaShowreelModal
        open={showreelOpen}
        onClose={() => setShowreelOpen(false)}
      />
      <SignificaQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
