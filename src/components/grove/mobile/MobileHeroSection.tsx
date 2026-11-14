"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

const heroSlides = [
  {
    src: "/images/hero-web.webp",
    alt: "Arsitektur Situs Web Modern Abinest",
  },
  {
    src: "/images/erp-dashboard.webp",
    alt: "Dashboard Sistem ERP dan Kasir Terpadu",
  },
  {
    src: "/images/ai-ml-workflow.webp",
    alt: "Automasi WhatsApp Resmi Meta dan Pembaca Dokumen AI",
  },
];

export function MobileHeroSection() {
  const [slideIdx, setSlideIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan situs web, sistem ERP, atau automasi AI untuk bisnis kami."
  )}`;

  return (
    <section
      id="m-beranda"
      data-section="beranda"
      className="bg-white pt-6 pb-10 px-5 border-b border-slate-100"
    >
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <p className="text-[12px] font-semibold text-blue-600 tracking-wide">
            Studio Rekayasa Web, ERP &amp; Automasi AI
          </p>

          <h1 className="text-[28px] sm:text-[32px] font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.16]">
            Situs Web Cepat, Sistem ERP, &amp;{" "}
            <span className="text-blue-600">Automasi AI.</span>
          </h1>

          <p className="text-[14.5px] text-slate-600 leading-relaxed font-normal">
            Sistem khusus sesuai alur bisnis Anda tanpa biaya lisensi per pengguna, selesai dalam 14 hari kerja.
          </p>
        </div>

        {/* Clean Visual Frame */}
        <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.src}
              aria-hidden={idx !== slideIdx}
              className={`absolute inset-0 transition-opacity duration-500 ${
                idx === slideIdx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="(max-width: 768px) 92vw, 440px"
                className="object-cover object-center"
              />
            </div>
          ))}
        </div>

        {/* CTA Actions */}
        <div className="space-y-3">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-sm shadow-blue-600/20 transition-all"
          >
            <span>Konsultasi via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4 text-[13px] font-semibold text-slate-600">
            <Link href="/demo" className="hover:text-blue-600 transition-colors py-1">
              Lihat Demo Interaktif
            </Link>
            <span className="text-slate-300" aria-hidden="true">
              ·
            </span>
            <Link href="/audit-gratis" className="hover:text-blue-600 transition-colors py-1">
              Kalkulator Biaya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
