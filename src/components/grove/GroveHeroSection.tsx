"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Zap, Code2, CheckCircle2 } from "lucide-react";

export function GroveHeroSection() {
  const metrics = [
    {
      num: "01",
      title: "Website <0.8 Detik",
      desc: "Performa Cepat, Ringan & SEO Google 100/100",
      icon: Zap,
    },
    {
      num: "02",
      title: "Sistem Anti-Down 99.99%",
      desc: "SLA Terjamin, Monitoring Proaktif 24/7",
      icon: ShieldCheck,
    },
    {
      num: "03",
      title: "100% Hak Milik Source Code",
      desc: "Database Milik Anda, Zero Vendor Lock-in",
      icon: Code2,
    },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-6 sm:pt-10 pb-14 sm:pb-18 overflow-hidden bg-[#FBFBFA] border-b border-slate-200/70"
    >
      {/* Subtle Atmospheric Grid Mesh & Texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        {/* Soft Technical Dot Matrix */}
        <div
          className="absolute inset-0 opacity-[0.25] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Editorial Rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-slate-200/90 mb-8 sm:mb-12 origin-left"
        />

        {/* Asymmetrical 2-Column Swiss Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* LEFT COLUMN: Headline, Mission, Action, & Editorial Numbered Metrics (Span 7) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8">
            {/* 1. Main Headline */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-[70px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.08]"
              >
                Sistem yang Beres.
                <br />
                <span className="inline-flex items-center gap-2.5 sm:gap-3.5">
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block w-3.5 h-3.5 sm:w-5 sm:h-5 bg-[#2563EB] rounded-[3px] shadow-[0_2px_8px_rgba(37,99,235,0.4)] shrink-0"
                  />
                  <span>Bisnis yang Tenang.</span>
                </span>
              </motion.h1>

              {/* Signature Accent Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-20 sm:w-28 h-1 bg-[#2563EB] rounded-full origin-left"
              />
            </div>

            {/* 2. Sub-Grid: Left Story + Right 3 Numbered Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 pt-2">
              {/* Left Sub-Col: Value Pitch & Primary Action (Span 6) */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="sm:col-span-6 space-y-6 flex flex-col justify-between"
              >
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Kami membangun website berkecepatan tinggi, sistem ERP anti-down, dan automasi WhatsApp &amp; AI untuk perusahaan, institusi, dan UMKM berkembang — tanpa biaya sewa lisensi bulanan.
                </p>

                {/* CTA Action Buttons */}
                <div className="space-y-3 pt-1">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#kontak"
                    className="group w-full inline-flex items-center justify-between px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all duration-200"
                  >
                    <span>Konsultasikan Kebutuhan Anda</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.a>

                  <a
                    href="#portofolio"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-[#2563EB] transition-colors pl-1"
                  >
                    <span>Lihat Portofolio Hasil Kerja</span>
                    <span className="text-slate-400">→</span>
                  </a>
                </div>

                {/* Social Proof Trust Bar */}
                <div className="pt-2 flex items-center gap-3 border-t border-slate-200/80">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 1"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 2"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
                      alt="Avatar 3"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-2xs"
                    />
                  </div>
                  <div className="text-[11px] sm:text-xs font-medium text-slate-700">
                    <span className="font-bold text-[#0F172A]">25+ Klien Aktif</span>
                    <span className="text-slate-400 mx-1.5">·</span>
                    <span className="text-[#2563EB] font-semibold">99.99% SLA</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Sub-Col: Editorial Numbered Metrics 01, 02, 03 (Span 6) */}
              <div className="sm:col-span-6 space-y-4 sm:pl-2">
                {metrics.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.num}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.45 + idx * 0.12, duration: 0.5 }}
                      className="group pb-3 border-b border-slate-200/90 hover:border-blue-400 transition-colors"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-sm sm:text-base font-bold text-[#2563EB] group-hover:scale-105 transition-transform">
                          {item.num}
                        </span>
                        <div className="space-y-0.5">
                          <h4 className="text-xs sm:text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                            <span>{item.title}</span>
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Editorial Portrait with Interactive Floating Badges (Span 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Frame */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-[0_20px_50px_rgba(15,23,42,0.08)] group">
              <Image
                src="/images/hero-editorial-portrait-2x.jpg"
                alt="Profesional Indonesia fokus mengoperasikan sistem Abinest"
                fill
                priority
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Soft Vignette Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Subtle Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-white/90 text-[11px] font-medium flex items-center justify-between">
                <span className="bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  Implementasi Sistem di Lapangan
                </span>
                <span className="font-mono text-[10px] text-white/70">
                  Jakarta · Surabaya
                </span>
              </div>
            </div>

            {/* Floating Living Badge 1: SLA Status (Top Left Float) */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 sm:p-3.5 shadow-[0_10px_30px_rgba(15,23,42,0.08)] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5 whitespace-nowrap">
                  <span>Sistem Siap Operasional</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="text-[10px] text-slate-500 font-medium">
                  SLA 99.99% Tanpa Lisensi
                </div>
              </div>
            </motion.div>

            {/* Floating Living Badge 2: 100% Code Ownership (Bottom Right Float) */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-3 sm:-right-5 bg-slate-900/95 text-white backdrop-blur-md border border-slate-800 rounded-2xl p-3 sm:p-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.3)] flex items-center gap-3 z-20"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-sky-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold text-white whitespace-nowrap">
                  100% Hak Milik Kode
                </div>
                <div className="text-[10px] text-slate-400 font-medium">
                  Zero Vendor Lock-in
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
