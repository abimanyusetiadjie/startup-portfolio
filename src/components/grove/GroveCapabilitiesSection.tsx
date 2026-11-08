"use client";

import { useState } from "react";
import { ShieldCheck, Cpu, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveCapabilitiesSection() {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(2);

  const panels =
    language === "id"
      ? [
          {
            title: "Pemantauan Infrastruktur Global",
            tag: "Edge Telemetry",
            image: "/images/projects/corporate-web.svg",
            photoBg:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#061826]/85 via-[#071E30]/70 to-[#040C14]/95",
            accent: "#38BDF8",
          },
          {
            title: "Arsitektur Cloud Anti-Down",
            tag: "High Concurrency",
            image: "/images/projects/siakad-dashboard.svg",
            photoBg:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#1A0E0A]/80 via-[#0B192C]/75 to-[#1F110B]/95",
            accent: "#E06D3B",
          },
          {
            title: "Pusat Kendali SIAKAD & Enterprise",
            tag: "24/7 Command Center",
            image: "/images/projects/hero-showcase.svg",
            photoBg:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
            tint: "from-[#0B1D2E]/65 via-[#2B150E]/65 to-[#090D14]/95",
            accent: "#E06D3B",
          },
          {
            title: "Keamanan Database & Enkripsi RLS",
            tag: "Zero-Trust Security",
            image: "/images/projects/whatsapp-gateway.svg",
            photoBg:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#091E1A]/80 via-[#0E2420]/75 to-[#06100E]/95",
            accent: "#10B981",
          },
          {
            title: "Klaster Server & Otomasi Worker",
            tag: "Dedicated Clusters",
            image: "/images/projects/client-portal.svg",
            photoBg:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#051533]/80 via-[#092252]/70 to-[#040B1C]/95",
            accent: "#3B82F6",
          },
        ]
      : [
          {
            title: "Global Telemetry & Edge Routing",
            tag: "Edge Telemetry",
            image: "/images/projects/corporate-web.svg",
            photoBg:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#061826]/85 via-[#071E30]/70 to-[#040C14]/95",
            accent: "#38BDF8",
          },
          {
            title: "High-Concurrency Cloud Corridors",
            tag: "High Concurrency",
            image: "/images/projects/siakad-dashboard.svg",
            photoBg:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#1A0E0A]/80 via-[#0B192C]/75 to-[#1F110B]/95",
            accent: "#E06D3B",
          },
          {
            title: "Mission-Critical IT Command Center",
            tag: "24/7 Command Center",
            image: "/images/projects/hero-showcase.svg",
            photoBg:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80",
            tint: "from-[#0B1D2E]/65 via-[#2B150E]/65 to-[#090D14]/95",
            accent: "#E06D3B",
          },
          {
            title: "Zero-Trust RLS & Cyber Defense",
            tag: "Zero-Trust Security",
            image: "/images/projects/whatsapp-gateway.svg",
            photoBg:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#091E1A]/80 via-[#0E2420]/75 to-[#06100E]/95",
            accent: "#10B981",
          },
          {
            title: "Dedicated Server & Worker Clusters",
            tag: "Dedicated Clusters",
            image: "/images/projects/client-portal.svg",
            photoBg:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
            tint: "from-[#051533]/80 via-[#092252]/70 to-[#040B1C]/95",
            accent: "#3B82F6",
          },
        ];

  const bottomPerks =
    language === "id"
      ? [
          {
            icon: ShieldCheck,
            title: "Keamanan & Stabilitas Tanpa Kompromi",
            desc: "Proteksi berlapis PostgreSQL RLS & mitigasi lonjakan trafik ribuan user.",
          },
          {
            icon: Cpu,
            title: "Arsitektur Kustom Sesuai Alur Kerja",
            desc: "Bukan template pasaran; setiap modul dirancang presisi mengikuti SOP Anda.",
          },
          {
            icon: Zap,
            title: "Otomasi Cepat & Dukungan Proaktif",
            desc: "Integrasi langsung WhatsApp API resmi Meta & pemantauan sistem 24/7.",
          },
        ]
      : [
          {
            icon: ShieldCheck,
            title: "Proactive Security & Zero Downtime",
            desc: "Multi-layered PostgreSQL RLS protection and high-concurrency load balancing.",
          },
          {
            icon: Cpu,
            title: "Tailored Architecture for Your Stack",
            desc: "Built around your exact operational workflows with 100% IP ownership.",
          },
          {
            icon: Zap,
            title: "Fast Automation & 24/7 Engineer Support",
            desc: "Real-time official Meta WhatsApp pipelines and round-the-clock monitoring.",
          },
        ];

  return (
    <section id="layanan" className="py-10 relative">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
            <span>
              {language === "id" ? "APA YANG KAMI KERJAKAN" : "WHAT WE DO"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            {language === "id" ? (
              <>
                Apa yang Kami Bangun, Dan
                <br />
                Bagaimana Itu Membantu Anda
              </>
            ) : (
              <>
                What We Do, And How It
                <br />
                Helps You
              </>
            )}
          </h2>
        </div>

        {/* 5-Panel Horizontal Image Accordion Strip (matching slice_1.png bottom) */}
        <div className="flex flex-col md:flex-row gap-1.5 h-auto md:h-[310px] w-full rounded-lg overflow-hidden">
          {panels.map((panel, idx) => {
            const isExpanded = activeIndex === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`relative cursor-pointer overflow-hidden rounded-md border border-white/10 transition-all duration-500 ease-out min-h-[160px] md:min-h-0 ${
                  isExpanded ? "md:flex-[2.1]" : "md:flex-[1]"
                }`}
              >
                {/* Photographic Environment Background */}
                <img
                  src={panel.photoBg}
                  alt={panel.title}
                  className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />

                {/* Rich Cinematic Color Grading Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${panel.tint}`}
                />

                {/* Subtle HUD / Architecture SVG Overlay inside the panel */}
                <img
                  src={panel.image}
                  alt=""
                  aria-hidden="true"
                  className={`absolute inset-x-2 top-3 w-[calc(100%-16px)] h-36 object-cover rounded opacity-35 mix-blend-screen pointer-events-none transition-opacity duration-500 ${
                    isExpanded ? "opacity-50" : "opacity-25"
                  }`}
                />

                {/* Bottom Caption Inside Panel */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end">
                  <span
                    className="text-[9px] font-mono uppercase tracking-widest mb-1"
                    style={{ color: panel.accent }}
                  >
                    {panel.tag}
                  </span>
                  <p
                    className={`text-xs font-medium text-white leading-snug transition-all ${
                      isExpanded ? "opacity-100" : "opacity-80 line-clamp-1"
                    }`}
                  >
                    {panel.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Description Below the 5-Panel Strip (matching slice_2.png top) */}
        <p className="text-center text-[12px] sm:text-[13px] text-[#8E8E93] max-w-2xl mx-auto mt-6 leading-relaxed">
          {language === "id"
            ? "Solusi IT kami dirancang untuk menghilangkan hambatan teknis harian Anda — mulai dari pemantauan server SIAKAD 24/7, optimasi performa web, hingga otomasi penagihan dan laporan PDF secara instan."
            : "Our IT solutions are engineered to eliminate daily technical bottlenecks — from 24/7 cloud infrastructure monitoring and high-speed web apps to automated reporting pipelines."}
        </p>

        {/* 3-Column Feature Row Below Description (matching slice_2.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-4">
          {bottomPerks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div key={idx} className="space-y-2">
                <div className="w-7 h-7 rounded-md bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/75">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-[13px] font-medium text-white leading-snug">
                  {perk.title}
                </h3>
                <p className="text-[12px] text-[#8E8E93] leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Signature Centered Orange Dash Divider */}
        <div className=" flex justify-center mt-14">
          <div className="w-6 h-[2px] bg-[#E06D3B]" />
        </div>
      </div>
    </section>
  );
}
