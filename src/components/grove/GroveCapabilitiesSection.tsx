"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Globe,
  Database,
  BrainCircuit,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Bot,
  Activity,
  Layers,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

export function GroveCapabilitiesSection() {
  const capabilities = [
    {
      id: "web",
      tag: "Next.js 15 · Headless Web",
      title: "Modern Web Architecture",
      desc: "Website korporat berkecepatan tinggi (<0.8 detik), SEO Google 100/100, dan UI/UX konversi tinggi untuk melipatgandakan leads bisnis Anda.",
      badges: ["<0.8s Loading", "SEO 100/100", "Zero Bloat"],
      icon: Globe,
      link: "#kontak",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] bg-slate-900 rounded-2xl p-3 border border-slate-800 shadow-inner flex flex-col justify-between overflow-hidden">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-rose-500" />
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <span className="font-mono text-[9px] text-slate-300">https://abinest.id/fast-web</span>
            <span className="text-sky-400 font-bold bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-800 text-[9px]">
              100 SPEED
            </span>
          </div>

          {/* Browser Interior Preview */}
          <div className="bg-[#F8FAFC] rounded-xl p-3.5 text-slate-900 space-y-2.5 my-auto">
            <div className="flex items-center justify-between text-[10px]">
              <span className="font-extrabold text-[#1D4ED8] flex items-center gap-1">
                <Zap className="w-3 h-3 text-blue-600" />
                Edge CDN Jakarta &amp; Surabaya
              </span>
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                0.38s FCP
              </span>
            </div>
            <div className="text-xs font-bold text-[#0F172A] leading-tight">
              Ultra-Fast Responsive Digital Platform
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center pt-1">
              <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-[10px]">
                <div className="font-black text-blue-600">0.38s</div>
                <div className="text-[8px] text-slate-400 font-medium">FCP Load</div>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-[10px]">
                <div className="font-black text-blue-600">100/100</div>
                <div className="text-[8px] text-slate-400 font-medium">SEO Score</div>
              </div>
              <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-[10px]">
                <div className="font-black text-slate-900">0.00</div>
                <div className="text-[8px] text-slate-400 font-medium">Zero CLS</div>
              </div>
            </div>
          </div>

          {/* Bottom Footer Telemetry */}
          <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-800">
            <span>Next.js 15 App Router</span>
            <span className="text-sky-400 font-semibold">100% Mobile Ready</span>
          </div>
        </div>
      ),
    },
    {
      id: "erp",
      tag: "Enterprise ERP · Multi-Warehouse",
      title: "Custom Enterprise ERP",
      desc: "Sistem operasional terpadu: multi-gudang, inventori, & faktur otomatis tanpa biaya lisensi per user selamanya — 100% hak milik kode program.",
      badges: ["Multi-Gudang", "Bebas Lisensi User", "SLA 99.99%"],
      icon: Database,
      link: "#kontak",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
          <Image
            src="/images/erp-dashboard.jpg"
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
      icon: BrainCircuit,
      link: "#kontak",
      visual: (
        <div className="relative w-full h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner group">
          <Image
            src="/images/ai-ml-workflow.jpg"
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
        {/* Section Header: Clean, Confident, Zero AI Fluff */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A] leading-tight">
            Layanan Rekayasa Digital
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Tiga pilar solusi terpadu untuk mengakselerasi pertumbuhan bisnis dan operasional Anda.
          </p>
        </div>

        {/* 3-Column Visual-First Bento Grid (80% Visual, 20% Text, No Tabs, No Clunky Wrap) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* 1. Visual Showcase (80% Dominant Asset) */}
                <div className="w-full mb-5">
                  {item.visual}
                </div>

                {/* 2. Text Content (20% Clean & Punchy) */}
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

                  {/* CTA Action Link */}
                  <div className="pt-2 border-t border-slate-100">
                    <a
                      href={item.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] group-hover:translate-x-1 transition-all"
                    >
                      <span>Konsultasikan Kebutuhan Ini</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
