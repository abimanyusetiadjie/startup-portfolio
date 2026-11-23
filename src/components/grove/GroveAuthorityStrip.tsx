"use client";

import { motion } from "framer-motion";
import { FileCheck2, Lock, Server, ShieldCheck } from "lucide-react";

const trustPillars = [
  {
    icon: Lock,
    title: "Kontrak SLA & NDA Tertulis",
    sub: "Kerahasiaan data & tenggat terjamin",
  },
  {
    icon: FileCheck2,
    title: "Beli Putus 100% Hak Milik",
    sub: "Source code & database diserahkan penuh",
  },
  {
    icon: Server,
    title: "Server Jakarta & Singapura",
    sub: "Akses ultra-cepat & cadangan harian",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Bug 30–90 Hari",
    sub: "Pendampingan tim & dokumentasi BAST",
  },
];

const sectors = [
  "Finansial & Investasi",
  "Distribusi & Multi-Gudang",
  "Sekolah & Yayasan",
  "Ritel & Kasir POS",
  "Klinik & Jasa Profesional",
];

export function GroveAuthorityStrip() {
  return (
    <section
      aria-label="Jaminan Standar dan Sektor Industri Abinest"
      className="bg-white py-6 lg:py-8 relative z-10"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-5">
        {/* 4 Floating Executive Guarantee Pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4 }}
          className="rounded-[24px] bg-[#F8FAFC] ring-1 ring-slate-200/80 p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {trustPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start gap-3 px-2 py-1"
              >
                <span className="mt-0.5 w-9 h-9 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 text-[#0F172A] inline-flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-[13px] font-bold text-[#0F172A] leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[11.5px] text-[#475569] leading-snug mt-0.5">
                    {item.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Honest Indonesian Industry Coverage Strip */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[11.5px] text-[#475569]">
          <span className="font-mono uppercase tracking-[0.1em] text-slate-400 font-semibold">
            Fokus Sektor:
          </span>
          {sectors.map((sec, idx) => (
            <span key={sec} className="inline-flex items-center gap-3">
              <span className="font-semibold text-[#0F172A]">{sec}</span>
              {idx < sectors.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-slate-300" aria-hidden="true" />
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
