"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

const showcaseSlides = [
  {
    src: "/images/hero-web.webp",
    alt: "Arsitektur Situs Web Modern Abinest",
  },
  {
    src: "/images/erp-dashboard.webp",
    alt: "Dashboard Sistem ERP dan Operasional Terpadu",
  },
  {
    src: "/images/ai-ml-workflow.webp",
    alt: "Automasi WhatsApp Resmi Meta dan Pembaca Dokumen AI",
  },
];

export function GroveHeroSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % showcaseSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan situs web, sistem ERP, atau automasi AI untuk bisnis kami."
  )}`;

  return (
    <section
      id="beranda"
      data-section="beranda"
      className="relative bg-white pt-16 pb-20 xl:pt-20 xl:pb-24 border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* Kolom Kiri: Tipografi Tenang, Jelas & Lapang */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="col-span-6 space-y-6"
          >
            <p className="text-[13px] font-semibold text-blue-600 tracking-wide">
              Studio Rekayasa Web, ERP &amp; Automasi AI
            </p>

            <h1 className="text-[44px] xl:text-[50px] font-extrabold tracking-[-0.035em] text-slate-900 leading-[1.1]">
              Situs Web Cepat, Sistem ERP, dan{" "}
              <span className="text-blue-600">Automasi AI.</span>
            </h1>

            <p className="text-[17px] text-slate-600 leading-relaxed max-w-lg font-normal">
              Kami merancang sistem digital khusus sesuai alur kerja perusahaan Anda—tanpa biaya lisensi per pengguna dan siap digunakan dalam 14 hari kerja.
            </p>

            <div className="flex items-center gap-3.5 pt-1">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 transition-all"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/demo"
                className="inline-flex items-center px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/90 transition-colors"
              >
                Lihat Demo Interaktif
              </Link>
            </div>

            {/* 3 Metrik Polos Tanpa Kotak Berlebihan */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  14 Hari
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Estimasi rilis sistem
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  100%
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Hak milik kode program
                </div>
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Rp0
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  Biaya lisensi per pengguna
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Visual Showcase Murni */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="col-span-6"
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.09)] border border-slate-200/70">
              {showcaseSlides.map((slide, idx) => (
                <div
                  key={slide.src}
                  aria-hidden={idx !== activeIdx}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    idx === activeIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority
                    sizes="(max-width: 1200px) 50vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
