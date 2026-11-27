"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const STUDIO_METRICS = [
  { value: "14 hari", label: "Rilis awal" },
  { value: "100%", label: "Hak milik kode" },
  { value: "Rp0", label: "Biaya per staf" },
  { value: "99,9%", label: "Target uptime" },
];

const CORE_SERVICES_STRIP = [
  {
    index: "01",
    title: "Website bisnis.",
    price: "Mulai Rp1,5 juta · 7–14 hari",
    desc: "Web cepat (<0,8 dtk), katalog produk & Local SEO Google.",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    index: "02",
    title: "ERP, POS & SIAKAD.",
    price: "Mulai Rp4 juta · Rp0/staf",
    desc: "Sistem gudang WMS, kasir barcode, properti, HRIS & sekolah kustom.",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    index: "03",
    title: "Automasi AI & WA.",
    price: "Mulai Rp5 juta · API Resmi",
    desc: "Asisten AI katalog, WhatsApp bot 24/7, ML pricing & OCR faktur.",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Pure Minimalist Header + 4 Typographic Proof Metrics (Zero icon badges) */}
      <div className="sig-container py-16 lg:py-24 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-[clamp(1.75rem,2vw+1.1rem,2.75rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#171717]">
              Layanan kami.
            </h2>
            <p className="text-[16.5px] text-[#6F6F71] leading-relaxed max-w-md">
              Dibangun langsung oleh tim engineer—skema Beli Putus atau Terima
              Beres tanpa biaya lisensi per pengguna.
            </p>
          </div>

          <dl className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STUDIO_METRICS.map((item) => (
              <div
                key={item.label}
                className="border-t border-[#E5E5E5] pt-4 space-y-1"
              >
                <dd className="text-[24px] sm:text-[26px] font-semibold tracking-[-0.025em] text-[#171717] tabular-nums">
                  {item.value}
                </dd>
                <dt className="text-[13px] text-[#6F6F71]">{item.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        {/* 2. Ultra-Clean 3-Column Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#E5E5E5] divide-y lg:divide-y-0 lg:divide-x divide-[#E5E5E5]">
          {CORE_SERVICES_STRIP.map((srv, idx) => (
            <div
              key={srv.title}
              className={`py-8 lg:py-10 flex flex-col justify-between gap-7 ${
                idx === 0
                  ? "lg:pr-10"
                  : idx === 1
                  ? "lg:px-10"
                  : "lg:pl-10"
              }`}
            >
              <div className="space-y-3">
                <span className="font-mono text-[12px] text-[#86868B]">
                  {srv.index}
                </span>
                <h3 className="text-[22px] font-semibold tracking-[-0.015em] text-[#171717]">
                  {srv.title}
                </h3>
                <p className="text-[15.5px] leading-[1.55] text-[#6F6F71]">
                  {srv.desc}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="text-[13px] text-[#6F6F71]">{srv.price}</span>
                <Link
                  href={srv.href}
                  className="sig-link inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#171717] shrink-0"
                >
                  <span>Pelajari</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
