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

const STUDIO_FACTS = [
  { value: "17+", label: "Sistem & website terbangun" },
  { value: "100%", label: "Hak milik kode sumber" },
  { value: "Rp0", label: "Biaya bulanan per staf" },
  { value: "90 hari", label: "Garansi bug-fix pascarilis" },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-[#F3F3F3] py-20 lg:py-28">
      <div className="clay-container space-y-12 lg:space-y-16">
        {/* 1. Balanced 2-Column Header: Studio Statement Left + 3 Interactive Service Tracks Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <ClayReveal className="lg:col-span-6 space-y-5 sm:space-y-6">
            <p className="text-[13px] font-medium text-[#6B7280]">
              Layanan &amp; Kemitraan
            </p>

            <h2 className="text-[clamp(1.85rem,3.1vw+0.6rem,3.15rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-[#111111]">
              Kami membantu bisnis bertumbuh lewat rekayasa sistem yang nyata
            </h2>

            <p className="text-[16.5px] sm:text-[18px] leading-[1.6] text-[#4B5563] max-w-[540px]">
              Seluruh website, sistem operasional, dan automasi dirancang serta
              ditulis langsung oleh tim engineer — tersedia skema Beli Putus
              maupun Terima Beres untuk perusahaan, UMKM, dan proyek pribadi.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-3.5 pt-1">
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

          <ClayReveal delay={0.06} className="lg:col-span-6">
            <div className="bg-white border border-[#E4E5E9] divide-y divide-[#ECECEF]">
              {SERVICE_TRACKS.map((srv) => (
                <Link
                  key={srv.code}
                  href={srv.href}
                  className="group flex items-start justify-between gap-4 p-5 sm:p-6 hover:bg-[#FAFAFB] transition-colors"
                >
                  <div className="flex items-baseline gap-3.5 sm:gap-4 min-w-0">
                    <span className="text-[12px] font-mono text-[#9CA3AF] shrink-0">
                      {srv.code}
                    </span>
                    <div className="space-y-1 min-w-0">
                      <h3 className="text-[17px] sm:text-[18px] font-semibold tracking-[-0.015em] text-[#111111] group-hover:opacity-75 transition-opacity">
                        {srv.title}
                      </h3>
                      <p className="text-[14px] leading-[1.55] text-[#4B5563]">
                        {srv.desc}
                      </p>
                      <p className="pt-0.5 text-[13px] font-medium text-[#111111]">
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

        {/* 2. Clay Signature Wide Editorial Studio Banner (21:9 HD WebP, 69.5 KB, 0% crop) */}
        <ClayReveal delay={0.08} className="space-y-3">
          <div className="relative w-full overflow-hidden bg-[#E9E7E2] ring-1 ring-inset ring-black/[0.06]">
            <Image
              src="/images/studio-services-banner.webp"
              alt="Suasana kerja studio desain dan rekayasa perangkat lunak Abinest dalam pencahayaan alami"
              width={1600}
              height={686}
              quality={85}
              sizes="(max-width: 768px) 94vw, (max-width: 1440px) 92vw, 1300px"
              className="block w-full h-auto"
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-[13px] text-[#6B7280]">
            <span>
              Studio Abinest — Perancangan antarmuka, rekayasa sistem, dan serah
              terima kode penuh
            </span>
            <span className="text-[#8C8E94]">Perusahaan · UMKM · Pribadi</span>
          </div>
        </ClayReveal>

        {/* 3. Quiet Flat Studio Proof Strip */}
        <dl className="pt-10 lg:pt-12 border-t border-[#E0E0E2] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STUDIO_FACTS.map((fact, idx) => (
            <ClayReveal
              key={fact.label}
              delay={idx * 0.05}
              y={12}
              className="space-y-1.5"
            >
              <dd className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em] text-[#111111] tabular-nums leading-none">
                {fact.value}
              </dd>
              <dt className="text-[14px] text-[#6B7280] leading-snug">
                {fact.label}
              </dt>
            </ClayReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
