"use client";

import Image from "next/image";
import {
  Globe,
  Database,
  BrainCircuit,
  ArrowRight,
  Zap,
  Bot,
  Activity,
  Clock,
  Building,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const capabilities = [
    {
      id: "web",
      tag: "Next.js · Headless Web",
      title: "Modern Web Architecture",
      desc: "Website korporat berkecepatan tinggi (<0.8 detik), SEO Google 100/100, dan UI/UX konversi tinggi untuk melipatgandakan leads bisnis Anda.",
      badges: ["<0.8s Loading", "SEO 100/100", "Zero Bloat"],
      delivery: "2 – 3 Minggu",
      fitFor: "Korporat & Institusi",
      icon: Globe,
      waMessage: "Halo Tim Abinest, saya tertarik mendiskusikan arsitektur Website Modern (<0.8s load) & 100% hak milik kode untuk perusahaan kami.",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group bg-slate-900">
          <Image
            src="/images/capabilities/capabilities-web-preview.jpg"
            alt="Modern Web Architecture by Abinest"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
          {/* Floating Performance Badge */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 text-white flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="font-bold truncate">Edge CDN &amp; SEO 100/100</span>
            </div>
            <span className="text-sky-400 font-bold bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/40 shrink-0">
              &lt;0.8s FCP
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "erp",
      tag: "Enterprise ERP · Multi-Warehouse",
      title: "Custom Enterprise ERP & SIAKAD",
      desc: "Sistem operasional terpadu: multi-gudang, inventori, SIAKAD sekolah, & faktur otomatis tanpa biaya lisensi per user selamanya — 100% hak milik kode program.",
      badges: ["Multi-Gudang", "Bebas Lisensi User", "SLA 99.9%"],
      delivery: "4 – 8 Minggu",
      fitFor: "Distribusi, Pabrik & Sekolah",
      icon: Database,
      waMessage: "Halo Tim Abinest, saya tertarik konsultasi Custom ERP / SIAKAD Sekolah tanpa biaya lisensi bulanan.",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
          <Image
            src="/images/capabilities/capabilities-erp-preview.jpg"
            alt="Custom Enterprise ERP System Dashboard by Abinest"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Floating Live Telemetry Badge */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 text-white flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="font-bold truncate">Multi-Warehouse Live Feed</span>
            </div>
            <span className="text-sky-400 font-bold bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/40 shrink-0">
              99.8% Stok Akurat
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "aiml",
      tag: "Applied AI & Machine Learning",
      title: "Automasi AI & Machine Learning",
      desc: "Ekstraksi faktur otomatis via Document AI OCR (akurasi 99.7%) dan chatbot agen AI WhatsApp resmi Meta untuk memangkas kerja manual bisnis Anda.",
      badges: ["Document AI OCR", "Meta WhatsApp API", "Private Model"],
      delivery: "2 – 4 Minggu",
      fitFor: "Finance & Customer Care",
      icon: BrainCircuit,
      waMessage: "Halo Tim Abinest, saya tertarik konsultasi implementasi Automasi AI/ML (Document OCR / Meta WhatsApp AI Agent).",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
          <Image
            src="/images/capabilities/capabilities-aiml-preview.jpg"
            alt="Applied AI & Machine Learning Pipeline by Abinest"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          {/* Floating AI Status Badge */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-900/90 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/80 text-white flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="font-bold truncate">Document AI &amp; Meta Agent</span>
            </div>
            <span className="text-sky-400 font-bold bg-blue-500/20 px-2 py-0.5 rounded border border-blue-500/40 shrink-0">
              0.8s Response
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="layanan-utama"
      className="py-14 sm:py-16 relative bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 space-y-10 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Layanan Rekayasa Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Tiga pilar solusi terpadu dengan kepemilikan 100% kode program dan garansi SLA 99.9%.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* 1. Visual Showcase */}
                <div className="w-full mb-5">
                  {item.visual}
                </div>

                {/* 2. Text Content */}
                <div className="space-y-3.5">
                  {/* Category Pill Tag */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#1E40AF] border border-blue-200 text-[11px] font-bold">
                    <Icon className="w-3.5 h-3.5 text-blue-600" />
                    <span>{item.tag}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>

                  {/* Delivery & Target Fit Meta */}
                  <div className="flex items-center justify-between text-[11px] py-1.5 px-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      <span>Delivery: <strong className="text-slate-900 font-bold">{item.delivery}</strong></span>
                    </div>
                    <span className="text-[10.5px] text-blue-700 font-semibold">{item.fitFor}</span>
                  </div>

                  {/* Feature Pill Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {item.badges.map((b, bIdx) => (
                      <span
                        key={bIdx}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* CTA Action Button */}
                  <div className="pt-2 border-t border-slate-100">
                    <a
                      href={`https://wa.me/6285708677918?text=${encodeURIComponent(item.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-[#0B1220] hover:bg-[#1D4ED8] transition-colors shadow-xs group-hover:shadow-md"
                    >
                      <span>Diskusikan Arsitektur Ini</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
