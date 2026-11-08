"use client";

import {
  Cloud,
  Shield,
  Database,
  Cpu,
  Terminal,
  Lock,
  Server,
  Code2,
  Activity,
  Sparkles,
  Layers,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveHeroSection() {
  const { language } = useLanguage();

  const stats =
    language === "id"
      ? [
          {
            value: "99.9%",
            desc: "Jaminan SLA Uptime sistem akademik & enterprise tanpa down sepanjang tahun.",
          },
          {
            value: "15m",
            desc: "Rata-rata waktu respons langsung dari tim engineer untuk penanganan kendala.",
          },
          {
            value: "30%+",
            desc: "Efisiensi beban kerja staf lewat otomasi antrean PDF & WhatsApp API.",
          },
          {
            value: "200+",
            desc: "Modul produksi, portal klien, & arsitektur cloud yang telah terimplementasi.",
          },
        ]
      : [
          {
            value: "99.9%",
            desc: "Guaranteed SLA uptime for mission-critical academic and enterprise systems.",
          },
          {
            value: "15m",
            desc: "Average engineer response time for critical infrastructure support.",
          },
          {
            value: "30%+",
            desc: "Operational cost & time savings via automated PDF & WhatsApp pipelines.",
          },
          {
            value: "200+",
            desc: "Production modules, custom portals, & cloud architectures deployed.",
          },
        ];

  return (
    <section id="beranda" className="relative pt-8 pb-16 overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
        {/* Top Hero Split: Left Copy + Right 4x4 Circuit Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow with orange dash */}
            <div className="flex items-center gap-2.5">
              <span className="w-3.5 h-[2px] bg-[#E06D3B]" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8E8E93] font-medium">
                {language === "id"
                  ? "REKAYASA SISTEM & OTOMASI ENTERPRISE"
                  : "IT SERVICES FOR MODERN ENTERPRISES"}
              </span>
            </div>

            {/* 3-Line Headline with Italic Serif Coral Accent */}
            <h1 className="text-3xl sm:text-5xl lg:text-[50px] font-medium tracking-tight text-white leading-[1.15]">
              {language === "id" ? (
                <>
                  Anda Fokus pada{" "}
                  <span className="font-serif italic font-normal text-[#E06D3B]">
                    Pertumbuhan.
                  </span>
                  <br />
                  Dan Kami Jalankan IT Anda
                  <br />
                  Tanpa Hambatan.
                </>
              ) : (
                <>
                  You Focus on{" "}
                  <span className="font-serif italic font-normal text-[#E06D3B]">
                    Growth.
                  </span>
                  <br />
                  And We Will Run Your IT
                  <br />
                  Smooth.
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-[13px] sm:text-[14px] text-[#8E8E93] max-w-[460px] leading-relaxed">
              {language === "id"
                ? "Kami merancang website institusi berkecepatan tinggi, SIAKAD sekolah anti-down, dan otomasi WhatsApp resmi Meta dengan kepemilikan source code 100% di tangan Anda."
                : "From proactive SIAKAD cloud architecture and 95–100 Lighthouse web apps to official Meta WhatsApp automation — we engineer systems built to last."}
            </p>

            {/* Dark Matte Pill CTA */}
            <div className="pt-1">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[12px] font-medium text-white bg-[#1A1A1A] hover:bg-[#242424] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all"
              >
                {language === "id" ? "Mulai Sekarang" : "Get Started"}
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Exact 4x4 Circuit Tile Grid from slice_1.png */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[340px] h-[300px] sm:h-[340px] flex items-center justify-center">
              {/* Subtle ambient glow behind the circuit matrix */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute w-40 h-40 rounded-full bg-[#E06D3B]/15 blur-[60px]"
              />

              {/* SVG L-Shaped Circuit Connector Lines (matching slice_1.png) */}
              <svg
                className="pointer-events-none absolute inset-0 w-full h-full z-20"
                viewBox="0 0 340 340"
                fill="none"
              >
                {/* Left L-Connector: from bottom of Tile(row 2, col 1) down to left of Coral Tile(row 3, col 2) */}
                <path
                  d="M 52 146 L 52 208 L 102 208"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="1.2"
                />
                <rect
                  x="49"
                  y="143"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#121212"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.2"
                />
                <circle cx="102" cy="208" r="2.5" fill="#E06D3B" />

                {/* Right L-Connector: from right of Tile(row 2, col 4) out and down to Tile(row 4, col 4) */}
                <path
                  d="M 304 120 L 322 120 L 322 256"
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth="1.2"
                />
                <rect
                  x="301"
                  y="117"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#121212"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.2"
                />
                <rect
                  x="319"
                  y="253"
                  width="6"
                  height="6"
                  rx="1"
                  fill="#121212"
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth="1.2"
                />
              </svg>

              {/* 4x4 Tile Grid */}
              <div className="grid grid-cols-4 gap-3 sm:gap-3.5 relative z-10">
                {/* Row 1 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#161616]/40 border border-white/[0.03]" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#161616]/40 border border-white/[0.03]" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/75 shadow-inner">
                  <Code2 className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#161616]/40 border border-white/[0.03]" />

                {/* Row 2 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/12 flex items-center justify-center text-white/80 shadow-md">
                  <Cloud className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.07] flex items-center justify-center text-white/60">
                  <Terminal className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.07] flex items-center justify-center text-white/60">
                  <Database className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/12 flex items-center justify-center text-white/85 shadow-md">
                  <Activity className="w-5 h-5" />
                </div>

                {/* Row 3 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#161616]/40 border border-white/[0.03]" />
                {/* Coral/Orange Highlighted Target Tile (Row 3, Col 2) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-[#2D1A12] to-[#1A120E] border border-[#E06D3B]/45 flex items-center justify-center text-[#E06D3B] shadow-[0_0_25px_rgba(224,109,59,0.25)]">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-white/75">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.08] flex items-center justify-center text-white/75">
                  <Lock className="w-5 h-5" />
                </div>

                {/* Row 4 */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.07] flex items-center justify-center text-white/60">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#161616]/40 border border-white/[0.03]" />
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/[0.07] flex items-center justify-center text-white/70">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#1A1A1A] border border-white/12 flex items-center justify-center text-white/85 shadow-md">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Stats Row with Left Vertical Divider Lines (matching slice_1.png) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16 pt-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="border-l border-white/10 pl-4 sm:pl-5 space-y-1.5"
            >
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {stat.value}
              </div>
              <p className="text-[11px] sm:text-[12px] text-[#8E8E93] leading-relaxed max-w-[210px]">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* "Works With" Glowing Platform Bar (matching slice_1.png) */}
        <div className="mt-20 flex flex-col items-center">
          <span className="text-[11px] font-medium text-[#8E8E93] mb-3 tracking-wide">
            {language === "id" ? "Kompatibel Dengan" : "Works With"}
          </span>

          <div className="relative flex items-center justify-center">
            {/* Warm Copper Radial Glow Behind Pill */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-full bg-[#E06D3B]/20 blur-2xl"
            />

            <div className="relative z-10 inline-flex items-center gap-7 sm:gap-10 px-8 sm:px-10 py-3.5 rounded-2xl bg-[#1B1817]/90 border border-white/10 shadow-xl">
              {/* Windows Icon */}
              <div className="flex flex-col items-center gap-1 text-white hover:text-[#E06D3B] transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                </svg>
                <span className="text-[8px] uppercase tracking-widest text-white/50">
                  Windows
                </span>
              </div>

              {/* Apple / macOS Icon */}
              <div className="flex items-center justify-center text-white/90 hover:text-white transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3" />
                </svg>
              </div>

              {/* Linux / Server Icon */}
              <div className="flex items-center justify-center text-white/85 hover:text-white transition-colors">
                <Server className="w-5 h-5" />
              </div>

              {/* Cloud / Android / Edge Icon */}
              <div className="flex items-center justify-center text-white/85 hover:text-white transition-colors">
                <Cloud className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Signature Centered Orange Dash Divider */}
          <div className="w-6 h-[2px] bg-[#E06D3B] mt-14" />
        </div>
      </div>
    </section>
  );
}
