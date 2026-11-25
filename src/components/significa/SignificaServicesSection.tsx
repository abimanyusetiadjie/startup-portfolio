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
  { count: "14", eyebrow: "RILIS AWAL", label: "Hari Kerja", icon: Clock },
  { count: "100%", eyebrow: "KEPEMILIKAN", label: "Hak Milik Kode", icon: Code2 },
  { count: "Rp0", eyebrow: "LISENSI", label: "Biaya per Staf", icon: ShieldCheck },
  { count: "99,9%", eyebrow: "SLA SERVER", label: "Jaminan Uptime", icon: Server },
  { count: "90", eyebrow: "GARANSI", label: "Hari Bug-Fix", icon: Cpu },
  { count: "<15m", eyebrow: "DUKUNGAN", label: "Respon Engineer", icon: MessageCircle },
];

const CORE_SERVICES = [
  {
    title: "Website bisnis.",
    price: "Mulai Rp1,5 – 3,5 juta · Rilis 7–14 hari",
    desc: "Situs profil korporat dan landing page berkecepatan tinggi (<0,8 detik di HP) dengan struktur SEO Google yang rapi dan kepemilikan kode penuh.",
    cta: "Detail Website",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    title: "Sistem ERP & SIAKAD.",
    price: "Mulai Rp4 – 12 juta · Rp0 biaya per staf",
    desc: "Aplikasi stok multi-gudang, kasir POS cabang, pembukuan, hingga portal ujian CBT sekolah yang dirancang mengikuti alur kerja tim Anda.",
    cta: "Detail ERP & SIAKAD",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    title: "Automasi AI & WhatsApp.",
    price: "Mulai Rp5 juta · Meta Cloud API Resmi",
    desc: "Asisten pelanggan 24 jam lewat jalur resmi WhatsApp Meta yang langsung membaca katalog stok serta memindai foto/PDF faktur otomatis via OCR.",
    cta: "Detail AI & WhatsApp",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Significa 2-Col Editorial Services Intro */}
      <div className="sig-container py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
          <span className="text-[#6F6F71] block">Layanan kami.</span>
          <span className="text-[#171717] block">Produk digital siap tumbuh.</span>
        </h2>

        <p className="text-[20px] sm:text-[23px] leading-[1.45] text-[#6F6F71] max-w-xl">
          Dari riset alur bisnis dan perancangan antarmuka hingga rekayasa sistem produksi—kami membangun aset digital yang cepat, mudah dipakai tim non-IT, dan 100% menjadi milik usaha Anda.
        </p>
      </div>

      {/* 2. Significa Centered Counter Grid + Bold Manifesto Statement */}
      <div className="sig-container pb-16 lg:pb-24">
        <div className="max-w-[760px] mx-auto space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-7">
            {STUDIO_COUNTERS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="space-y-2.5">
                  <div className="inline-flex items-center">
                    <span className="inline-flex items-center justify-center h-[44px] min-w-[82px] px-3.5 rounded-[12px] bg-white border border-[#E8E8E8] text-[18px] font-semibold text-[#171717]">
                      {item.count}
                    </span>
                    <span className="-ml-2.5 inline-flex items-center justify-center w-[40px] h-[40px] rounded-[14px] bg-[#171717] text-[#F7F7F7] shadow-sm">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-[#6F6F71]">
                      {item.eyebrow}
                    </div>
                    <div className="text-[14.5px] font-medium text-[#171717]">
                      {item.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[clamp(1.45rem,1.4vw+1.1rem,2.2rem)] font-semibold tracking-[-0.015em] leading-[1.24] text-[#6F6F71]">
            Abinest adalah studio rekayasa perangkat lunak di Jakarta &amp; Surabaya. Kami merancang dan membangun{" "}
            <span className="text-[#171717]">
              website korporat, sistem ERP/SIAKAD, dan automasi WhatsApp AI
            </span>{" "}
            dengan skema Beli Putus atau Terima Beres yang transparan sejak hari pertama.
          </p>
        </div>
      </div>

      {/* 3. Significa 3-Column Bordered Capabilities Strip (Exact match to Mission | Perks | Career strip) */}
      <div className="border-y border-[#E8E8E8]">
        <div className="sig-container grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E8E8]">
          {CORE_SERVICES.map((srv, idx) => (
            <div
              key={srv.title}
              className={`py-10 lg:py-12 flex flex-col justify-between gap-8 ${
                idx === 0
                  ? "lg:pr-10"
                  : idx === 1
                    ? "lg:px-10"
                    : "lg:pl-10"
              }`}
            >
              <div className="space-y-3">
                <h3 className="text-[24px] font-medium tracking-[-0.015em] text-[#171717]">
                  {srv.title}
                </h3>
                <div className="text-[13.5px] font-mono text-[#171717]">
                  {srv.price}
                </div>
                <p className="text-[18px] leading-[1.48] text-[#6F6F71]">
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
