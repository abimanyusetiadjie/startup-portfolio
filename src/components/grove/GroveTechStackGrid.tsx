"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Server, Database, Globe, MessageSquare, Shield, Cpu, Cloud, Code2, Terminal, Zap } from "lucide-react";

export function GroveTechStackGrid() {
  const { lang } = useLanguage();

  const stacks = [
    {
      name: "Next.js 15 App Router",
      category: "Frontend & Edge Runtime",
      icon: Globe,
      desc: lang === "id" ? "Server-side rendering super cepat dengan skor Google Lighthouse 100/100." : "Blazing fast SSR and Edge compute with perfect 100 Lighthouse speed scores.",
    },
    {
      name: "PostgreSQL & Supabase",
      category: "Secure Database",
      icon: Database,
      desc: lang === "id" ? "Isolasi data antar cabang & sekolah dengan Row Level Security (RLS)." : "Multi-tenant data isolation secured by PostgreSQL Row Level Security.",
    },
    {
      name: "Meta Cloud API",
      category: "Official WhatsApp",
      icon: MessageSquare,
      desc: lang === "id" ? "Jalur resmi Meta untuk penagihan SPP & notifikasi instan 0% resiko banned." : "Official Meta pipeline for automated billing dispatch with 0% ban risk.",
    },
    {
      name: "Docker & Cloud Workers",
      category: "Decoupled Processing",
      icon: Server,
      desc: lang === "id" ? "Mesin background terisolasi untuk cetak 500+ PDF rapor tanpa membebani web." : "Isolated worker queues generating 500+ PDF report cards concurrently.",
    },
    {
      name: "Vercel Enterprise Edge",
      category: "Global CDN & Hosting",
      icon: Cloud,
      desc: lang === "id" ? "Penyebaran aset global dengan latency ultra-rendah dan garansi SLA 99.98%." : "Global low-latency edge deployment backed by a 99.98% uptime SLA.",
    },
    {
      name: "TypeScript & Strict Safety",
      category: "Code Quality",
      icon: Code2,
      desc: lang === "id" ? "Arsitektur kode tahan uji dengan type-checking ketat untuk stabilitas jangka panjang." : "Type-safe robust architecture ensuring long-term maintainability.",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="bg-[#05070B] text-white py-16 sm:py-24 font-sans border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "STANDAR TEKNOLOGI & INFRASTRUKTUR" : "STANDARDIZED DIGITAL STACK"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            Comprehensive Services for Your Digital Stack.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            {lang === "id"
              ? "Kami hanya menggunakan teknologi modern berskala industri yang terbukti tangguh dan mudah dirawat."
              : "We build exclusively with battle-tested enterprise technologies engineered for endurance."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {stacks.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0B0E17] border border-white/10 hover:border-amber-400/40 transition-all duration-300 shadow-xl group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase font-semibold block mb-1">
                  {item.category}
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
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
