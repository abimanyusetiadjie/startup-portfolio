"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Code2,
  Cpu,
  MessageCircle,
  Server,
  ShieldCheck,
} from "lucide-react";

const STUDIO_COUNTERS = [
  { count: "14h", label: "Rilis Awal", icon: Clock },
  { count: "100%", label: "Hak Milik Kode", icon: Code2 },
  { count: "Rp0", label: "Biaya per Staf", icon: ShieldCheck },
  { count: "99,9%", label: "Uptime SLA", icon: Server },
  { count: "90h", label: "Garansi Bug-Fix", icon: Cpu },
  { count: "<15m", label: "Respon Engineer", icon: MessageCircle },
];

const CORE_SERVICES_STRIP = [
  {
    title: "Website bisnis.",
    price: "Mulai Rp1,5 juta · 7–14 hari",
    desc: "Web cepat (<0,8 dtk), katalog produk & Local SEO Google.",
    cta: "Detail Website",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    title: "ERP, POS & SIAKAD.",
    price: "Mulai Rp4 juta · Rp0/staf",
    desc: "Sistem stok, kasir barcode, HRIS, hingga portal sekolah kustom.",
    cta: "Detail Sistem",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    title: "Automasi AI & WA.",
    price: "Mulai Rp5 juta · API Resmi",
    desc: "Asisten AI katalog, WhatsApp bot 24/7 & baca faktur OCR.",
    cta: "Detail AI & WA",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Ultra-Lean Services Header + 6 Counter Pills Side-by-Side (Zero Fluff Essay) */}
      <div className="sig-container py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
            <span className="text-[#6F6F71] block">Layanan kami.</span>
            <span className="text-[#171717] block">Fokus fungsi nyata.</span>
          </h2>
          <p className="text-[17px] text-[#6F6F71] leading-relaxed max-w-md">
            Dibangun langsung oleh tim engineer—skema Beli Putus atau Terima
            Beres.
          </p>
        </div>

        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-5 gap-y-6">
          {STUDIO_COUNTERS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="space-y-2">
                <div className="inline-flex items-center">
                  <span className="inline-flex items-center justify-center h-[42px] min-w-[78px] px-3 rounded-[12px] bg-white border border-[#E8E8E8] text-[17px] font-semibold text-[#171717]">
                    {item.count}
                  </span>
                  <span className="-ml-2 inline-flex items-center justify-center w-[38px] h-[38px] rounded-[13px] bg-[#171717] text-[#F7F7F7]">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>
                <div className="text-[13.5px] font-medium text-[#6F6F71]">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Significa 3-Column Vertical-Bordered Capabilities Strip */}
      <div className="border-y border-[#E8E8E8]">
        <div className="sig-container grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E8E8]">
          {CORE_SERVICES_STRIP.map((srv, idx) => (
            <div
              key={srv.title}
              className={`py-9 lg:py-11 flex flex-col justify-between gap-6 ${
                idx === 0
                  ? "lg:pr-8"
                  : idx === 1
                  ? "lg:px-8"
                  : "lg:pl-8"
              }`}
            >
              <div className="space-y-2">
                <h3 className="text-[22px] font-medium tracking-[-0.015em] text-[#171717]">
                  {srv.title}
                </h3>
                <div className="text-[12.5px] font-mono text-[#171717]">
                  {srv.price}
                </div>
                <p className="text-[16px] leading-[1.45] text-[#6F6F71]">
                  {srv.desc}
                </p>
              </div>

              <div>
                <Link href={srv.href} className="sig-btn-outline">
                  <span>{srv.cta}</span>
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
