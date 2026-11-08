"use client";

import { ShieldCheck, Activity, Lock, Headphones } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveCoreShieldSection() {
  const { language } = useLanguage();

  const quadrants =
    language === "id"
      ? [
          {
            num: "01",
            cornerPos: "top-0 left-0",
            icon: ShieldCheck,
            title: "Mitigasi Proaktif &\nAnti-Down Ujian",
            desc: "Deteksi otomatis lonjakan beban ribuan siswa sebelum berdampak pada operasional sekolah.",
          },
          {
            num: "02",
            cornerPos: "top-0 right-0",
            icon: Activity,
            title: "Pemantauan Real-Time\n24/7 Tanpa Henti",
            desc: "Telemetri kesehatan database, antrean worker PDF, dan webhook WhatsApp setiap detik.",
          },
          {
            num: "03",
            cornerPos: "bottom-0 left-0",
            icon: Lock,
            title: "Kepemilikan Penuh\n100% Source Code",
            desc: "Tidak ada vendor lock-in. Seluruh repositori, skema database, & dokumentasi milik Anda.",
          },
          {
            num: "04",
            cornerPos: "bottom-0 right-0",
            icon: Headphones,
            title: "Respons Engineer\nLangsung < 15 Menit",
            desc: "Akses komunikasi langsung dengan tim engineer inti tanpa birokrasi tiket yang lambat.",
          },
        ]
      : [
          {
            num: "01",
            cornerPos: "top-0 left-0",
            icon: ShieldCheck,
            title: "Proactive Threat &\nLoad Mitigation",
            desc: "Automated load balancing and anomaly detection before traffic spikes impact users.",
          },
          {
            num: "02",
            cornerPos: "top-0 right-0",
            icon: Activity,
            title: "Real-Time Telemetry\n& Health Checks",
            desc: "Continuous monitoring across PostgreSQL nodes, PDF queues, and WhatsApp webhooks.",
          },
          {
            num: "03",
            cornerPos: "bottom-0 left-0",
            icon: Lock,
            title: "100% Full Source\nCode Ownership",
            desc: "Zero vendor lock-in. Complete repositories, database schemas, and IP belong to you.",
          },
          {
            num: "04",
            cornerPos: "bottom-0 right-0",
            icon: Headphones,
            title: "Direct Engineer\nResponse < 15m",
            desc: "Instant access to senior systems engineers whenever your institution needs support.",
          },
        ];

  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
            <span>
              {language === "id" ? "JAMINAN KEANDALAN" : "RELIABILITY"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            {language === "id" ? (
              <>
                Pemantauan & Dukungan 24/7
                <br />
                Sepanjang Tahun, 365 Hari
              </>
            ) : (
              <>
                24/7 Monitoring and Support All
                <br />
                Year Round, 365
              </>
            )}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#8E8E93] max-w-md mx-auto leading-relaxed">
            {language === "id"
              ? "Arsitektur pelindung berlapis yang menjaga sistem institusi Anda tetap stabil setiap saat."
              : "Always-on infrastructure protection keeping your critical systems resilient around the clock."}
          </p>
        </div>

        {/* 4-Quadrant Open Diagram with Dashed Cross-Lines & Central Dual-Glow Shield (matching slice_2 & slice_3) */}
        <div className="relative py-6">
          {/* Horizontal Dashed Divider Line (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-1/2 left-8 right-8 -translate-y-1/2 border-t border-dashed border-white/12 z-0"
          />
          {/* Vertical Dashed Divider Line (Desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block pointer-events-none absolute top-6 bottom-6 left-1/2 -translate-x-1/2 border-l border-dashed border-white/12 z-0"
          />

          {/* Central Glowing Shield Emblem at Exact Center Intersection */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            {/* Top Warm Orange Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 w-28 h-20 rounded-full bg-[#E06D3B]/45 blur-2xl"
            />
            {/* Bottom Electric Blue Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 w-28 h-20 rounded-full bg-blue-500/45 blur-2xl"
            />

            {/* Outer Ring */}
            <div className="relative w-24 h-24 rounded-full bg-[#121215] border border-white/15 shadow-[0_0_40px_rgba(0,0,0,0.9)] flex items-center justify-center">
              {/* Shield Shape SVG with Brand Name Inside */}
              <svg
                className="w-16 h-16 text-white/20 absolute"
                viewBox="0 0 24 24"
                fill=" #18181C"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="relative z-10 text-[10px] font-semibold tracking-tight text-white">
                Abinest <span className="text-white/70 font-normal">IT</span>
              </span>
            </div>
          </div>

          {/* 2x2 Quadrant Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-24 md:gap-x-24 relative z-10">
            {quadrants.map((q) => {
              const Icon = q.icon;
              return (
                <div
                  key={q.num}
                  className="relative flex flex-col items-center text-center px-6 py-4"
                >
                  {/* Outer Corner Number Badge (01, 02, 03, 04) */}
                  <span
                    className={`hidden md:inline-flex absolute ${q.cornerPos} w-6 h-6 rounded bg-[#18181B] border border-white/[0.06] items-center justify-center text-[9px] font-mono text-[#8E8E93]`}
                  >
                    {q.num}
                  </span>

                  {/* Centered Icon */}
                  <div className="w-8 h-8 rounded-lg bg-[#1A1A1D] border border-white/10 flex items-center justify-center text-white mb-3.5 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* 2-Line Centered Title */}
                  <h3 className="text-[14px] font-medium text-white leading-snug whitespace-pre-line mb-2">
                    {q.title}
                  </h3>

                  {/* 2-Line Centered Description */}
                  <p className="text-[11px] sm:text-[12px] text-[#8E8E93] max-w-[240px] leading-relaxed">
                    {q.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signature Centered Orange Dash Divider */}
        <div className="flex justify-center mt-12">
          <div className="w-6 h-[2px] bg-[#E06D3B]" />
        </div>
      </div>
    </section>
  );
}
