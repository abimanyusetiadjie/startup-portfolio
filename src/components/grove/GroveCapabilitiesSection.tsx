"use client";

import { ShieldCheck, Cpu, Zap } from "lucide-react";

export function GroveCapabilitiesSection() {
  const collageImages = [
    {
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
      alt: "Server rack datacenter",
      overlay: "from-blue-900/60 via-transparent to-orange-950/40",
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
      alt: "Cybersecurity matrix code",
      overlay: "from-emerald-950/60 via-transparent to-black/60",
    },
    {
      url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
      alt: "Engineer command center",
      overlay: "from-orange-950/50 via-transparent to-blue-950/60",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
      alt: "Data telemetry dashboard",
      overlay: "from-blue-900/50 via-transparent to-orange-900/40",
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80",
      alt: "Futuristic engineer workstation",
      overlay: "from-black/70 via-transparent to-orange-900/50",
    },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Zero-Downtime Architecture",
      desc: "Menjaga operasional tetap berjalan mulus 24/7 tanpa risiko terhenti di saat-saat paling krusial.",
    },
    {
      icon: Zap,
      title: "End-to-End Automation",
      desc: "Mengeliminasi pekerjaan manual yang berulang melalui pipeline otomatisasi sistem terintegrasi.",
    },
    {
      icon: Cpu,
      title: "Enterprise-Grade Security",
      desc: "Proteksi berlapis untuk data sensitif, akses berbasis peran (RLS), dan integritas infrastruktur bisnis.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            WHAT WE STAND FOR
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-semibold tracking-tight text-white leading-tight">
            We Fix. We Automate.
            <br />
            You Level Up.
          </h2>
        </div>

        {/* Visual Tengah: Galeri Kolase Horizontal 5 Foto Cyberpunk/Server/Engineer dalam Banner Melengkung */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-[#121318]">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1.5 h-[260px] sm:h-[320px] p-1.5">
            {collageImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-xl h-full group ${
                  idx === 2 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${img.overlay} mix-blend-multiply opacity-80`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C]/90 via-transparent to-transparent opacity-60" />
              </div>
            ))}
          </div>

          {/* Subtle Ambient High-Contrast Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-orange-500/10 mix-blend-screen" />
        </div>

        {/* Deskripsi Tengah */}
        <p className="text-center text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto mt-8 leading-relaxed">
          Kami mengambil alih seluruh beban dan kompleksitas teknis — dari arsitektur cloud, mitigasi downtime, hingga otomatisasi workflow — sehingga tim Anda dapat sepenuhnya fokus pada ekspansi dan skala bisnis.
        </p>

        {/* 3-Column Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 pt-4">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#121318] border border-white/[0.08] rounded-2xl p-6 sm:p-7 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] space-y-3 group hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
