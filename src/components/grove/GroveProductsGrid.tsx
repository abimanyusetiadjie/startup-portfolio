"use client";

import { ArrowUpRight } from "lucide-react";

const ABINEST_SYSTEMS = [
  {
    id: "siakad-core",
    badge: "EdTech Core",
    name: "SIAKAD Modern v2.4",
    metric: "SLA 99.9%",
    subtitle: "Arsitektur terpisah • SPP & Ujian serentak",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Konsultasi Sistem SIAKAD",
    href: "#konsultasi?system=siakad",
  },
  {
    id: "pdf-worker",
    badge: "Async Worker",
    name: "Parallel PDF Engine",
    metric: "500+ PDF / <45s",
    subtitle: "Upstash QStash • S3 Signed URL",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Konsultasi Mesin Rapor",
    href: "#konsultasi?system=pdf_engine",
  },
  {
    id: "omnichannel-hub",
    badge: "Omnichannel Hub",
    name: "Atomic Stock Hub",
    metric: "< 150ms Sync",
    subtitle: "Sinkronisasi 4 marketplace • 0% oversell",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Konsultasi Omnichannel",
    href: "#konsultasi?system=omnichannel",
  },
  {
    id: "whatsapp-gateway",
    badge: "WhatsApp API",
    name: "Resilient WA Gateway",
    metric: "< 2s Dispatch",
    subtitle: "Meta Cloud API • Backoff Retry 5x",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    ctaLabel: "Konsultasi Otomasi WA",
    href: "#konsultasi?system=whatsapp",
  },
];

export function GroveProductsGrid() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(targetId.replace("#", ""));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="systems" className="bg-[#F4F1EA] py-16 sm:py-20 font-sans border-b border-[#E7E2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-10">
          <div>
            <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A] mb-1">
              PRODUK &amp; SOLUSI UNGGULAN
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1A201C]">
              Sistem Rekayasa Unggulan Abinest
            </h2>
          </div>
          <a
            href="#case-study"
            onClick={(e) => handleSmoothScroll(e, "#case-study")}
            className="text-xs sm:text-sm font-semibold text-[#18362B] underline hover:text-[#D15B3A] transition-colors"
          >
            Lihat Studi Kasus Arsitektur →
          </a>
        </div>

        {/* 4-Item Grid (Exact Grove Card Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {ABINEST_SYSTEMS.map((system) => (
            <div
              key={system.id}
              className="group bg-white rounded-xl border border-[#E5E0D5] p-3.5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#18362B]/50 transition-all duration-300"
            >
              <div>
                {/* Visual Image / Screenshot Container */}
                <div className="relative aspect-square rounded-lg bg-[#FAF9F6] border border-[#F0ECE4] overflow-hidden mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={system.image}
                    alt={system.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 left-2.5 bg-[#18362B]/90 backdrop-blur-sm px-2.5 py-0.5 rounded text-[10px] font-mono font-medium text-emerald-200 border border-white/10 shadow-xs">
                    {system.badge}
                  </div>
                </div>

                {/* Info Row: Title & Performance Metric */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-heading text-sm font-bold text-[#1A201C] group-hover:text-[#18362B] transition-colors">
                    {system.name}
                  </h3>
                  <span className="font-mono text-xs font-semibold text-[#18362B]">
                    {system.metric}
                  </span>
                </div>

                {/* Subtitle */}
                <p className="text-[11px] text-[#717872] mt-0.5 mb-4 line-clamp-2">
                  {system.subtitle}
                </p>
              </div>

              {/* Action Button: Pill Outline */}
              <a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                className="w-full py-2 px-3 rounded-full border border-[#D5D0C4] bg-white text-xs font-semibold text-[#1A201C] hover:border-[#18362B] hover:bg-[#18362B] hover:text-white transition-all duration-200 text-center block"
              >
                {system.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
