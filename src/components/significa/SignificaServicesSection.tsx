"use client";

import {
  Clock,
  Code2,
  Cpu,
  MessageCircle,
  Server,
  ShieldCheck,
} from "lucide-react";

const STUDIO_COUNTERS = [
  { count: "14", eyebrow: "RILIS AWAL", label: "Hari Kerja", icon: Clock },
  {
    count: "100%",
    eyebrow: "KEPEMILIKAN",
    label: "Hak Milik Kode",
    icon: Code2,
  },
  {
    count: "Rp0",
    eyebrow: "LISENSI",
    label: "Biaya per Staf",
    icon: ShieldCheck,
  },
  {
    count: "99,9%",
    eyebrow: "SLA SERVER",
    label: "Jaminan Uptime",
    icon: Server,
  },
  { count: "90", eyebrow: "GARANSI", label: "Hari Bug-Fix", icon: Cpu },
  {
    count: "<15m",
    eyebrow: "DUKUNGAN",
    label: "Respon Engineer",
    icon: MessageCircle,
  },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Significa 2-Col Editorial Services Intro */}
      <div className="sig-container py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
          <span className="text-[#6F6F71] block">Layanan kami.</span>
          <span className="text-[#171717] block">
            Produk digital siap tumbuh.
          </span>
        </h2>

        <p className="text-[20px] sm:text-[23px] leading-[1.45] text-[#6F6F71] max-w-xl">
          Dari riset alur bisnis dan perancangan antarmuka hingga rekayasa
          sistem produksi—kami membangun aset digital yang cepat, mudah dipakai
          tim non-IT, dan 100% menjadi milik usaha Anda.
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
            Abinest adalah studio rekayasa perangkat lunak di Jakarta &amp;
            Surabaya. Kami merancang dan membangun{" "}
            <span className="text-[#171717]">
              website korporat, sistem ERP/SIAKAD, dan automasi WhatsApp AI
            </span>{" "}
            dengan skema Beli Putus atau Terima Beres yang transparan sejak hari
            pertama.
          </p>
        </div>
      </div>
    </section>
  );
}
