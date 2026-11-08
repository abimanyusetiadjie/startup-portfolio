"use client";

import { Shield, Server, Globe, Database, MessageSquare, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveCoreShieldSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="pilar"
      className="bg-[#05070B] text-white py-16 sm:py-24 font-sans border-b border-white/10 relative overflow-hidden"
    >
      {/* Central Radiating Warm Amber Light Burst */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#F59E0B]/20 via-[#EA580C]/10 to-transparent blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "4 PILAR REKAYASA SISTEM" : "OUR 4 ARCHITECTURAL PILLARS"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            {lang === "id"
              ? "Pilar kokoh di balik setiap sistem yang kami bangun."
              : "Engineered pillars powering mission-critical systems."}
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Kami merancang sistem dengan arsitektur terisolasi (decoupled). Beban berat pada satu modul tidak akan pernah melumpuhkan modul lainnya."
              : "Every system is built on decoupled micro-services. Peak loads on one component never destabilize the rest of the infrastructure."}
          </p>
        </div>

        {/* 4 Pillars with Central Shield Emblem (Exact Match to Reference Image Diagram) */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto items-center">
          {/* Card 1: Top Left - SIAKAD & CBT Server */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0E17] border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-bold block">
                  PILAR 01 • SERVER STABILITY
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  SIAKAD &amp; CBT Ujian Anti-Down
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
              {lang === "id"
                ? "Dukungan arsitektur cloud cerdas yang mampu menampung 1.200+ siswa ujian serentak tanpa error 502 Bad Gateway dan generator rapor PDF cloud."
                : "Decoupled cloud infrastructure handling 1,200+ concurrent exam sessions with zero downtime and isolated PDF workers."}
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-emerald-400 font-semibold">SLA Uptime 99.98%</span>
              <span>PostgreSQL RLS</span>
            </div>
          </div>

          {/* Card 2: Top Right - Next.js 15 Web Architecture */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0E17] border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-bold block">
                  PILAR 02 • HIGH VELOCITY
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Website Next.js 15 Performa Tinggi
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
              {lang === "id"
                ? "Website profil sekolah, yayasan, dan korporat dengan kecepatan muat instan (< 1 detik), SEO lokal unggul, dan desain eksklusif kelas dunia."
                : "Corporate web architecture delivering instant 0.6s page loads, perfect 100/100 Lighthouse speed scores, and local SEO dominance."}
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-sky-400 font-semibold">Lighthouse 95–100</span>
              <span>Next.js 15 Edge</span>
            </div>
          </div>

          {/* Center Circular Glowing Shield Emblem (Placed prominently in the center) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
            <div className="relative flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-tr from-[#0F1422] to-[#1C253B] border-2 border-amber-500/60 shadow-2xl shadow-orange-500/40">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EA580C] flex flex-col items-center justify-center text-zinc-950 shadow-inner">
                <Shield className="w-8 h-8 fill-zinc-950 stroke-zinc-950" />
                <span className="text-[8px] font-mono font-black tracking-widest mt-0.5">
                  CORE
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Left - Custom Omnichannel ERP */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0E17] border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-bold block">
                  PILAR 03 • CENTRALIZED LEDGER
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  ERP Stok &amp; Kasir Multi-Cabang
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
              {lang === "id"
                ? "Sinkronisasi otomatis stok antar 5 cabang toko, kasir POS kasir cepat, dan pencatatan laba-rugi tanpa selisih serta tanpa biaya sewa bulanan."
                : "Real-time stock ledger syncing multiple warehouse branches and retail POS terminals with zero subscription fees."}
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-amber-400 font-semibold">0% Selisih Stok</span>
              <span>PostgreSQL RLS</span>
            </div>
          </div>

          {/* Card 4: Bottom Right - Official Meta WhatsApp API */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0B0E17] border border-white/10 hover:border-amber-400/50 transition-all duration-300 shadow-xl group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-bold block">
                  PILAR 04 • OFFICIAL API
                </span>
                <h3 className="font-heading text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Bot WhatsApp Meta Cloud Resmi
                </h3>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-4">
              {lang === "id"
                ? "Pengiriman tagihan SPP, notifikasi jatuh tempo, dan kuitansi bayar via Meta Cloud API resmi tanpa software ilegal dan 0% resiko nomor terblokir."
                : "Automated billing dispatch, tuition reminders, and payment receipts via official Meta Cloud API with 0% risk of account suspension."}
            </p>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-emerald-400 font-semibold">Kirim &lt; 1.8 Detik</span>
              <span>Official Meta Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
