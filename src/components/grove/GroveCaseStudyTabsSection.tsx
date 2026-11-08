"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export function GroveCaseStudyTabsSection() {
  // 4 Tabs: Managed IT, Cloud & DevOps (Active by default), Cybersecurity, Automation
  const [activeTab, setActiveTab] = useState<number>(1);

  const tabs = [
    {
      label: "Managed IT",
      title: "Proactive Managed IT That Eliminates Friction",
      desc: "Layanan pemeliharaan sistem menyeluruh yang bertindak sebagai departemen IT internal Anda — menangani infrastruktur harian, pembaruan keamanan, dan optimasi jaringan.",
      bullets: [
        "Jaminan respons insiden kritis di bawah 15 menit 24/7.",
        "Pemeliharaan preventif dan patching otomatis lintas server.",
        "Dukungan helpdesk tingkat lanjut untuk kelancaran operasional tim.",
        "Laporan kesehatan sistem dan SLA berkala yang transparan.",
      ],
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
      badge: "Managed Infrastructure Tier 1",
    },
    {
      label: "Cloud & DevOps",
      title: "Custom Solutions Built to Last, Tailored",
      desc: "Kami merekayasa arsitektur cloud terdistribusi dan pipeline CI/CD modern yang dirancang untuk menahan lonjakan beban puncak tanpa kompromi performa atau pembengkakan biaya.",
      bullets: [
        "Arsitektur elastis multi-region dengan load balancing cerdas.",
        "Deployment otomatis nol-downtime via containerized Docker/K8s.",
        "Optimasi biaya komputasi cloud dan alokasi resource dinamis.",
        "Pencadangan data terenkripsi dan strategi Disaster Recovery instan.",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      badge: "High-Availability Cloud Engine",
    },
    {
      label: "Cybersecurity",
      title: "Zero-Trust Security & Layered Protection",
      desc: "Pertahanan siber proaktif berbasis prinsip Zero-Trust untuk melindungi aset digital, database institusi, dan kredensial pengguna dari ancaman internal maupun eksternal.",
      bullets: [
        "Kebijakan ketat Row-Level Security (RLS) di level database.",
        "Audit kerentanan berkala dan pengujian penetrasi sistem.",
        "Enkripsi penuh end-to-end TLS 1.3 dan penyimpanan AES-256.",
        "Penerapan Web Application Firewall (WAF) & mitigasi DDoS.",
      ],
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
      badge: "Zero-Trust Security Layer",
    },
    {
      label: "Automation",
      title: "End-to-End Workflow & API Automation",
      desc: "Otomasi proses bisnis yang menghilangkan pekerjaan repetitif dan manual melalui integrasi webhook resmi, antrean asinkron, dan pipeline komunikasi real-time.",
      bullets: [
        "Integrasi resmi WhatsApp Cloud API Meta untuk notifikasi instan.",
        "Antrean pemroses background worker asinkron (PDF rapor & invoice).",
        "Kunci idempotensi kriptografis untuk mencegah duplikasi data.",
        "Sinkronisasi real-time antar ERP, database, dan payment gateway.",
      ],
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
      badge: "Event-Driven Automation Engine",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            TAILORED SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            IT Support That
            <br />
            Actually Shows Up
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Dukungan teknis responsif yang langsung ditangani oleh tim engineer inti tanpa birokrasi berbelit.
          </p>
        </div>

        {/* Horizontal Tab Navigation (4 Tabs with glowing bottom indicator on active) */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-14 border-b border-white/[0.08] pb-1 overflow-x-auto no-scrollbar">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`relative px-5 py-3 text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-3xl p-6 sm:p-10 lg:p-12">
          {/* Left Column (Detail Layanan: Title + Desc + 4 Bullets + CTA) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono uppercase tracking-wider text-orange-400">
                {current.badge}
              </span>
              <h3 className="text-xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {current.desc}
              </p>
            </div>

            {/* 4 Bullet points with checkmark (✓) technical deliverables */}
            <ul className="space-y-3 pt-2">
              {current.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300"
                >
                  <div className="w-5 h-5 rounded-full bg-orange-500/15 text-orange-400 flex items-center justify-center shrink-0 mt-0.5 border border-orange-500/30">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button "Learn More" */}
            <div className="pt-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0A0A0C] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column (Visual Layanan: Dark blue data center photo with matrix dots overlay) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0A0A0C] group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Blue / Cyan Matrix Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-[#051326]/60 to-[#0A1A33]/40" />

              {/* Stylized Matrix Dots Overlay Pattern */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.25)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_90%)]"
              />

              {/* Corner Watermark */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-zinc-400 bg-[#0A0A0C]/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/10">
                <span className="font-mono text-orange-400">99.9% Uptime Verified</span>
                <span>Active Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
