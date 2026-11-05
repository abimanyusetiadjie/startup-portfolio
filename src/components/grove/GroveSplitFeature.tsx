"use client";

import { CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function GroveSplitFeature() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section id="case-study" className="bg-[#F4F1EA] py-14 sm:py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 50/50 SPLIT CONTAINER WITH SYNCHRONIZED REVEAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden border border-[#DDD7C9] shadow-sm"
        >
          {/* Left Side: System Architecture Visual with Smooth Zoom Effect */}
          <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-auto lg:min-h-[480px] bg-[#EAE5D9] overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
              alt="Abinest SIAKAD Core & Parallel PDF Architecture"
              className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            />

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-4 left-4 bg-[#18362B]/90 backdrop-blur-sm text-emerald-100 px-3 py-1 rounded text-[10px] font-mono border border-white/10 flex items-center gap-1.5 shadow-sm"
            >
              <ShieldCheck className="h-3 w-3 text-emerald-400" />
              <span>STUDI KASUS EDTECH • YAYASAN SEKOLAH</span>
            </motion.div>
          </div>

          {/* Right Side: Solid Deep Forest Green Block (#18362B) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="bg-[#18362B] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center"
          >
            {/* Eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="block text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-emerald-300/80 mb-2"
            >
              SISTEM SIAKAD &amp; ENTERPRISE SUITE
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug text-white mb-4"
            >
              Solusi total ujian &amp; cetak rapor serentak tanpa server down.
            </motion.h2>

            {/* Body Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed max-w-md mb-6"
            >
              Arsitektur terpisah (*decoupled*) antara database SPP/keuangan dan LMS/ujian serentak. Didukung mesin asinkron paralel yang me-render ratusan rapor PDF siswa secara kilat ke Supabase Storage aman dengan Row Level Security terisolasi.
            </motion.p>

            {/* Impact Metric Telemetry with Staggered Pop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, type: "spring", stiffness: 120 }}
              className="flex items-baseline gap-4 mb-8 pt-2 border-t border-[#254F40]"
            >
              <div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="font-mono text-2xl sm:text-3xl font-bold text-white inline-block cursor-default"
                >
                  0% Downtime
                </motion.span>
                <span className="block text-[10px] text-emerald-300/70 font-mono mt-0.5">
                  Trafik Puncak 4.200 Siswa
                </span>
              </div>
              <div className="h-8 w-[1px] bg-[#254F40]" />
              <div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="font-mono text-2xl sm:text-3xl font-bold text-emerald-400 inline-block cursor-default"
                >
                  &lt;45s
                </motion.span>
                <span className="block text-[10px] text-emerald-300/70 font-mono mt-0.5">
                  500+ Rapor PDF Paralel
                </span>
              </div>
            </motion.div>

            {/* White Pill CTA Button with Spring Physics */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#18362B] text-xs sm:text-sm font-bold hover:bg-[#F4F1EA] transition-colors shadow-sm"
              >
                Konsultasi Arsitektur SIAKAD →
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
