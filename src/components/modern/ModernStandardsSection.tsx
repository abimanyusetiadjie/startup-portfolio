"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Lock, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const STANDARDS = [
  {
    num: "01",
    title: "PostgreSQL Row Level Security (RLS)",
    badge: "ZERO-TRUST DATA GUARD",
    desc: "Hak akses data yayasan, riwayat nilai siswa, dan catatan tagihan dikunci langsung di level database engine. Pengguna hanya dapat membaca data yang sah menjadi hak miliknya.",
    spec: "Tenant isolation level 100% via auth.uid()",
  },
  {
    num: "02",
    title: "Transparansi via Shopify Polaris Portal",
    badge: "ENTERPRISE CLIENT PORTAL",
    desc: "Klien mendapatkan dashboard terisolasi di `/portal` berbasis Shopify Polaris untuk memantau progres sprint, memvalidasi milestone, dan mengunduh invoice resmi ber-signed URL.",
    spec: "Live sync milestone via Supabase Realtime",
  },
  {
    num: "03",
    title: "Jaminan Uptime SLA 99.9% Terikat Kontrak",
    badge: "CONTRACT-BOUND SLA",
    desc: "Infrastruktur decoupled kami menjamin sistem administrasi dan server ujian sekolah tetap tangguh di jam-jam sibuk. Didukung langsung oleh Principal Architect yang membangun sistem Anda.",
    spec: "Recovery time objective (RTO) < 15 menit",
  },
];

export function ModernStandardsSection() {
  return (
    <section id="standar" className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#0052FF]">
            <Terminal className="h-3.5 w-3.5" />
            <span className="uppercase tracking-wider">STANDAR REKAYASA &amp; GOVERNANCE</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B]">
            Direkayasa dengan Presisi,{" "}
            <span className="text-[#0052FF]">Bukan Template Murahan.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Tiga pilar tata kelola rekayasa yang melindungi data institusi Anda, memberikan transparansi penuh tanpa perantara, dan menggaransi stabilitas jangka panjang.
          </p>
        </div>

        {/* 3-Column Standard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STANDARDS.map((std) => (
            <div
              key={std.num}
              className="rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className="font-mono text-2xl font-black text-[#0052FF] block">
                    {std.num}
                  </span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-[#475569] border border-slate-200">
                    {std.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-bold text-[#09090B] tracking-tight group-hover:text-[#0052FF] transition-colors">
                  {std.title}
                </h3>

                <p className="text-sm text-[#64748B] leading-relaxed mt-3 mb-6">
                  {std.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#0052FF]">
                <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0" />
                <span>{std.spec}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
