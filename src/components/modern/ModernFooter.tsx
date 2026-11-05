"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function ModernFooter() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <footer className="bg-[#FFFFFF] text-[#09090B] py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0052FF] text-white font-extrabold text-xs">
              A
            </span>
            <span className="font-heading font-extrabold text-xl text-[#09090B] tracking-tight">
              ABINEST
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
              STUDIO
            </span>
          </div>
          <p className="text-xs text-[#64748B] mt-2 max-w-sm leading-relaxed">
            Studio Rekayasa Perangkat Lunak, Sistem Informasi Akademik &amp; Otomasi Bisnis Berkecepatan Tinggi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-[#475569] font-semibold">
          <a
            href="#sistem"
            onClick={(e) => handleSmoothScroll(e, "#sistem")}
            className="hover:text-[#0052FF] transition-colors"
          >
            Sistem &amp; Solusi
          </a>
          <a
            href="#arsitektur"
            onClick={(e) => handleSmoothScroll(e, "#arsitektur")}
            className="hover:text-[#0052FF] transition-colors"
          >
            Studi Arsitektur
          </a>
          <a
            href="#standar"
            onClick={(e) => handleSmoothScroll(e, "#standar")}
            className="hover:text-[#0052FF] transition-colors"
          >
            Standar Rekayasa
          </a>
          <Link href="/portal" className="text-[#0052FF] font-bold hover:underline flex items-center gap-1">
            <span>Client Portal</span>
            <ArrowRight className="h-3 w-3" />
          </Link>
          <Link href="/login" className="hover:text-[#0052FF] transition-colors">
            Masuk Klien
          </Link>
        </div>

        <div className="text-[11px] text-[#64748B] font-mono flex flex-col items-start md:items-end gap-1">
          <div className="flex items-center gap-1.5 text-[#10B981]">
            <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Operational Cluster JKT-01 • 99.98%</span>
          </div>
          <span>© {new Date().getFullYear()} Abinest Engineering. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
