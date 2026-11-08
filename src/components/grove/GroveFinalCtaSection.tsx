"use client";

import { ArrowUpRight, MessageSquare, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFinalCtaSection() {
  const { lang } = useLanguage();
  const waNumber = "6281234567890";
  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === "id"
      ? "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website / sistem digital untuk institusi kami."
      : "Hello Abinest Studio, I would like to consult regarding digital system engineering for our organization."
  )}`;

  return (
    <section className="bg-[#05070B] text-white py-20 sm:py-28 font-sans border-b border-white/10 relative overflow-hidden">
      {/* Concentrated Warm Amber Glow Flare behind CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-[#F59E0B]/25 via-[#EA580C]/15 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-zinc-950 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-500/30">
          <Shield className="w-6 h-6 fill-zinc-950 stroke-zinc-950" />
        </div>

        <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          {lang === "id"
            ? "Siap meningkatkan keandalan infrastruktur digital Anda?"
            : "Ready to elevate your digital infrastructure?"}
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-zinc-300 mt-5 max-w-xl mx-auto font-normal leading-relaxed">
          {lang === "id"
            ? "Dapatkan sesi konsultasi arsitektur gratis bersama tim insinyur kami. Tanpa komitmen, tanpa biaya tersembunyi."
            : "Schedule a complimentary technical scoping call with our engineering team today."}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 font-bold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xl shadow-orange-500/30"
          >
            <MessageSquare className="w-4 h-4 text-zinc-950" />
            <span>
              {lang === "id"
                ? "Konsultasi Sekarang via WhatsApp"
                : "Get Started on WhatsApp"}
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-950" />
          </a>

          <a
            href="#beranda"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/20 text-white bg-white/5 hover:bg-white/10 transition-all text-sm font-medium"
          >
            <span>{lang === "id" ? "Kembali ke Atas ↑" : "Back to Top ↑"}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
