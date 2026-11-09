"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function GroveHeroSection() {
  // 3 Pilar Utama Abinest disajikan secara terstruktur, tenang, dan langsung terbaca
  const threePillars = [
    {
      num: "01",
      title: "Website Cepat <0.8 Detik",
      desc: "Skor Google SEO 100/100, ringan tanpa lag di semua perangkat",
    },
    {
      num: "02",
      title: "Sistem ERP Anti-Down 99.99%",
      desc: "Integrasi multi-gudang, inventaris, dan keuangan real-time",
    },
    {
      num: "03",
      title: "Automasi WhatsApp & AI",
      desc: "Meta Cloud API resmi 24/7, faktur otomatis & 100% hak milik kode",
    },
  ];

  return (
    <section
      id="beranda"
      className="relative pt-6 sm:pt-8 pb-12 sm:pb-16 overflow-hidden bg-[#FBFBFA] border-b border-slate-200/70"
    >
      {/* Subtle Atmospheric Grid Mesh */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.20] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_25%,black_40%,transparent_85%)]"
          style={{
            backgroundImage: `radial-gradient(rgba(37, 99, 235, 0.25) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-[450px] h-[250px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Asymmetrical 2-Column Swiss Editorial Layout (Sesuai Referensi Gambar 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* KOLOM KIRI: Headline Humanis, Misi, Aksi, & 3 Pilar Bernomor (Span 7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* 1. Headline Utama yang Humanis & Tegas */}
            <div className="space-y-2.5">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold tracking-[-0.03em] text-[#0F172A] leading-[1.12]"
              >
                Sistem Digital yang Rapi.
                <br />
                <span className="inline-flex items-center gap-2.5 sm:gap-3 text-[#2563EB]">
                  <span className="inline-block w-3.5 h-3.5 sm:w-4 sm:h-4 bg-[#2563EB] rounded-[3px] shadow-[0_2px_8px_rgba(37,99,235,0.35)] shrink-0" />
                  <span>Operasional Bisnis yang Tenang.</span>
                </span>
              </motion.h1>

              {/* Signature Accent Line */}
              <div className="w-16 sm:w-20 h-1 bg-[#2563EB] rounded-full origin-left" />
            </div>

            {/* 2. Sub-Grid: Cerita Kiri + 3 Pilar Bernomor di Kanan */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 pt-1">
              
              {/* Sisi Kiri: Nilai Nyata, Tombol Konsultasi, & Bukti Sosial (Span 6) */}
              <div className="sm:col-span-6 space-y-5 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  Kami membangun website berkecepatan tinggi, sistem ERP anti-down, dan automasi WhatsApp &amp; AI untuk perusahaan, institusi, dan bisnis berkembang — tanpa beban biaya lisensi bulanan.
                </p>

                {/* Tombol Aksi CTA */}
                <div className="space-y-2.5 pt-1">
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

                {/* Bukti Sosial Klien Aktif */}
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
              </div>

              {/* Sisi Kanan: 3 Pilar Utama Bernomor 01, 02, 03 (Span 6) */}
              <div className="sm:col-span-6 space-y-3.5 sm:pl-1">
                {threePillars.map((item) => (
                  <div
                    key={item.num}
                    className="group pb-3 border-b border-slate-200/90 hover:border-blue-400 transition-colors"
                  >
                    <div className="flex items-baseline gap-2.5">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#2563EB] group-hover:scale-105 transition-transform">
                        {item.num}
                      </span>
                      <div className="space-y-0.5">
                        <h4 className="text-xs sm:text-[13px] font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                          <span>{item.title}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Foto Visual Bersih, Proporsional, Bebas Badge Menggantung (Span 5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/90 shadow-[0_16px_40px_rgba(15,23,42,0.06)] group">
              <Image
                src="/images/hero-editorial-portrait-2x.jpg"
                alt="Profesional Indonesia fokus mengoperasikan sistem Abinest di lapangan"
                fill
                priority
                className="object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Soft Gradient Overlay di Dasar Gambar */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none" />

              {/* Label Minimalis di Dalam Gambar (Bukan Badge Menggantung di Luar) */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white/90 text-[11px] font-medium flex items-center justify-between pointer-events-none">
                <span className="bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white font-medium text-[11px]">
                  Implementasi Sistem di Lapangan
                </span>
                <span className="font-mono text-[10px] text-sky-400 font-semibold bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  Jakarta · Surabaya
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
