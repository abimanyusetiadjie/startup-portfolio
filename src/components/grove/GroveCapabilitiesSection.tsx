"use client";

import { ShieldCheck, Cpu, Zap, Database, ArrowUpRight } from "lucide-react";

export function GroveCapabilitiesSection() {
  const showcasePanels = [
    {
      title: "Arsitektur SIAKAD Anti-Down",
      tag: "High Concurrency",
      photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      accent: "#EA580C",
    },
    {
      title: "Keamanan PostgreSQL RLS",
      tag: "Data Isolation",
      photo: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      accent: "#2563EB",
    },
    {
      title: "Website Institusi Next.js 15",
      tag: "Lighthouse 95–100",
      photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      accent: "#0D9488",
    },
    {
      title: "Otomasi WhatsApp Resmi Meta",
      tag: "Meta Cloud API",
      photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      accent: "#16A34A",
    },
    {
      title: "Portal Klien & Milestone SLA",
      tag: "100% Transparency",
      photo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80",
      accent: "#7C3AED",
    },
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Arsitektur Anti-Down & Auto-Scaling",
      desc: "Dirancang khusus agar sistem tetap dingin dan responsif saat ribuan siswa login ujian serentak, KRS, atau PPDB massal.",
      tag: "0% Crash Ujian",
    },
    {
      icon: Zap,
      title: "Otomasi Meta Cloud API & Worker PDF",
      desc: "Pencetakan ratusan rapor Kurikulum Merdeka di latar belakang tanpa lag, sinkron dengan broadcast WhatsApp wali murid.",
      tag: "< 2 Detik Pengiriman",
    },
    {
      icon: Database,
      title: "Keamanan Database RLS & IP Penuh",
      desc: "Proteksi data sensitif institusi di level baris PostgreSQL. Seluruh kode sumber, repositori, dan skema 100% milik Anda.",
      tag: "Zero Vendor Lock-In",
    },
  ];

  return (
    <section id="layanan" className="py-24 relative bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            NILAI &amp; PRINSIP REKAYASA ABINEST
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Kami Bangun Sistem yang Bertahan Lama.
            <br />
            Bukan Sekadar Selesai.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
            Solusi software house modern untuk sekolah, yayasan, dan enterprise yang mengutamakan kecepatan akses, stabilitas server, dan keamanan data.
          </p>
        </div>

        {/* 5-Panel Showcase Banner in Clean Light Framing */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-2">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 h-[260px] sm:h-[320px]">
            {showcasePanels.map((panel, idx) => (
              <div
                key={idx}
                className={`relative overflow-hidden rounded-2xl h-full group ${
                  idx === 0 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <img
                  src={panel.photo}
                  alt={panel.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col justify-end">
                  <span
                    className="text-[10px] font-mono uppercase tracking-wider font-semibold mb-1"
                    style={{ color: panel.accent }}
                  >
                    {panel.tag}
                  </span>
                  <h3 className="text-xs sm:text-[13px] font-semibold text-white leading-snug">
                    {panel.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Pillar Feature Cards in Crisp White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200/60">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-[#0F172A] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
