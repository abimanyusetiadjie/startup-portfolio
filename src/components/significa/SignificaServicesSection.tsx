"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ClayReveal } from "./ClayReveal";

const SERVICE_TRACKS = [
  {
    code: "01",
    title: "Website & Portal Bisnis",
    desc: "Company profile, e-commerce, portal media, hingga situs yayasan & pendidikan.",
    price: "Mulai Rp1,5 juta",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    code: "02",
    title: "Sistem ERP, WMS, POS & SIAKAD",
    desc: "Gudang, kasir barcode, manajemen properti, dan panel akademik tanpa biaya per staf.",
    price: "Mulai Rp4 juta · Rp0/staf",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    code: "03",
    title: "Automasi WhatsApp & AI",
    desc: "Asisten order WA resmi 24/7, cek stok otomatis, hingga pembacaan faktur.",
    price: "Mulai Rp1,5 juta · Jalur Resmi",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaServicesSection() {
  return (
    <section
      id="layanan"
      className="scroll-mt-24 relative overflow-hidden bg-[#F6F7F9] border-y border-[#ECEEF2] py-16 sm:py-20 lg:py-24"
    >
      {/* =================================================================== */}
      {/* FULL-BLEED RIGHT ARCHITECTURAL BACKGROUND + SMOOTH GRADIENT MASK    */}
      {/* =================================================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0"
      >
        {/* Desktop: Full-bleed right 74% architectural concrete & glass atrium */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[74%]">
          <Image
            src="/images/services-architecture-fade.webp"
            alt=""
            fill
            quality={85}
            sizes="74vw"
            className="object-cover object-right"
          />
        </div>

        {/* Desktop horizontal & subtle edge fade melting smoothly into #F6F7F9 */}
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #F6F7F9 0%, #F6F7F9 34%, rgba(246,247,249,0.9) 48%, rgba(246,247,249,0.28) 68%, rgba(246,247,249,0.04) 100%)",
          }}
        />
        <div
          className="hidden lg:block absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #F6F7F9 0%, rgba(246,247,249,0) 11%, rgba(246,247,249,0) 89%, #F6F7F9 100%)",
          }}
        />

        {/* Mobile (< lg): Soft architectural sweep at top-right dissolving seamlessly into left text & cards */}
        <div className="lg:hidden absolute top-0 right-0 w-full h-[360px]">
          <Image
            src="/images/services-architecture-fade.webp"
            alt=""
            fill
            quality={82}
            sizes="100vw"
            className="object-cover object-right opacity-85"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(246,247,249,0.2) 0%, rgba(246,247,249,0.72) 58%, #F6F7F9 98%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(246,247,249,0.94) 0%, rgba(246,247,249,0.68) 48%, rgba(246,247,249,0.12) 100%)",
            }}
          />
        </div>
      </div>

      {/* =================================================================== */}
      {/* FOREGROUND: LEFT-ALIGNED EDITORIAL COPY + RIGHT FROSTED SERVICE BOX */}
      {/* =================================================================== */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-[clamp(1.5rem,5vw,4.75rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-center">
          {/* Left-Aligned Studio Statement */}
          <ClayReveal className="lg:col-span-6 space-y-4 sm:space-y-5 max-w-[560px]">
            <p className="text-[12.5px] sm:text-[13px] font-medium text-[#6B7280]">
              Layanan &amp; Kemitraan
            </p>

            <h2 className="text-[26px] sm:text-[34px] lg:text-[clamp(2.25rem,3vw+0.45rem,3rem)] font-semibold tracking-[-0.03em] leading-[1.12] text-[#111111]">
              Kami membantu bisnis bertumbuh lewat rekayasa sistem yang nyata
            </h2>

            <p className="text-[15px] sm:text-[17px] lg:text-[17.5px] leading-[1.62] text-[#374151]">
              Seluruh website, sistem operasional, dan automasi dirancang serta
              ditulis langsung oleh tim engineer — tersedia skema Beli Putus
              maupun Terima Beres untuk perusahaan, UMKM, dan proyek pribadi.
            </p>

            {/* Desktop inline Clay arrow links */}
            <div className="hidden lg:flex flex-wrap items-center gap-x-8 gap-y-3 pt-2">
              <Link href="/audit-gratis" className="clay-arrow-link">
                <span>Hitung estimasi proyek</span>
                <ArrowRight className="w-4 h-4 text-[#6B7280]" />
              </Link>

              <Link href="/demo" className="clay-arrow-link">
                <span>Coba demo interaktif</span>
                <ArrowRight className="w-4 h-4 text-[#6B7280]" />
              </Link>
            </div>
          </ClayReveal>

          {/* Right: Preserved Frosted 3-Track Service Directory */}
          <ClayReveal delay={0.06} className="lg:col-span-6 space-y-4 lg:space-y-0">
            {/* Mobile (< lg): 3 Thumb-Friendly Frosted Cards */}
            <div className="lg:hidden space-y-3">
              {SERVICE_TRACKS.map((srv) => (
                <Link
                  key={srv.code}
                  href={srv.href}
                  className="group block rounded-[12px] bg-white/95 backdrop-blur-md border border-white ring-1 ring-black/[0.06] p-4 shadow-[0_12px_28px_-18px_rgba(17,19,24,0.16)] active:scale-[0.99] transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-[11.5px] font-mono text-[#9CA3AF]">
                        {srv.code}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#F3F4F6] text-[12px] font-medium text-[#111111] truncate">
                        {srv.price}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] shrink-0 group-hover:text-[#111111] transition-colors" />
                  </div>

                  <h3 className="mt-2.5 text-[16.5px] font-semibold tracking-[-0.015em] text-[#111111]">
                    {srv.title}
                  </h3>
                  <p className="mt-1 text-[13.5px] leading-[1.52] text-[#4B5563]">
                    {srv.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Mobile bottom dual CTA pills */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <Link href="/audit-gratis" className="clay-pill-btn w-full">
                <span>Hitung estimasi proyek</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/demo" className="clay-pill-outline bg-white/90 w-full">
                <span>Coba demo interaktif</span>
              </Link>
            </div>

            {/* Desktop (lg+): Unified Frosted Architectural Service Box Floating Over Fade */}
            <div className="hidden lg:block rounded-[12px] bg-white/95 backdrop-blur-md border border-white ring-1 ring-black/[0.06] shadow-[0_28px_64px_-26px_rgba(17,19,24,0.18)] divide-y divide-[#ECECEF] overflow-hidden">
              {SERVICE_TRACKS.map((srv) => (
                <Link
                  key={srv.code}
                  href={srv.href}
                  className="group flex items-start justify-between gap-4 p-6 hover:bg-white transition-colors"
                >
                  <div className="flex items-baseline gap-4 min-w-0">
                    <span className="text-[12px] font-mono text-[#9CA3AF] shrink-0">
                      {srv.code}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-[17.5px] font-semibold tracking-[-0.015em] text-[#111111] group-hover:opacity-75 transition-opacity">
                        {srv.title}
                      </h3>
                      <p className="text-[13.5px] leading-[1.55] text-[#4B5563]">
                        {srv.desc}
                      </p>
                      <p className="pt-0.5 text-[13px] font-semibold text-[#111111]">
                        {srv.price}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#9CA3AF] shrink-0 mt-1 transition-all duration-200 group-hover:text-[#111111] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </div>
          </ClayReveal>
        </div>
      </div>
    </section>
  );
}
