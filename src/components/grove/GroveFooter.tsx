"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MessageSquare, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFooter() {
  const { lang } = useLanguage();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="tentang"
      className="bg-[#06080E] text-white pt-16 pb-12 px-4 sm:px-8 lg:px-12 font-sans border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Top Status Bar (Subdued & Clean, No Pulse Gimmick) */}
        <div className="pb-8 mb-10 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>
              {lang === "id"
                ? "SELURUH CLUSTER SISTEM BEROPERASI NORMAL • SLA UPTIME 99.98%"
                : "ALL CLUSTER NODES OPERATIONAL • 99.98% UPTIME SLA"}
            </span>
          </div>

          <Link
            href="/portal"
            className="inline-flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors"
          >
            <span>{lang === "id" ? "Masuk ke Client Portal" : "Access Client Portal"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Col 1: Studio Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center text-[#06080E] font-bold text-sm tracking-tighter">
                A
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Abinest<span className="text-emerald-400">.</span>
              </span>
              <span className="text-xs font-mono text-zinc-400 ml-1">
                Software Studio
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm font-normal">
              {lang === "id"
                ? "Studio rekayasa perangkat lunak enterprise dan konsultan arsitektur web modern. Kami membangun sistem SIAKAD sekolah anti-down, website institusi super cepat, dan custom ERP terintegrasi dengan 100% kepemilikan source code."
                : "Bespoke software engineering studio architecting resilient school SIS platforms, ultra-fast institutional websites, and custom omnichannel ERPs with 100% intellectual property handover."}
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-zinc-300">
              <a
                href="mailto:hello@abinest.id"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>hello@abinest.id</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Jakarta Selatan · Surabaya Timur (ID)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Portofolio & Sistem */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-3">
              {lang === "id" ? "PORTOFOLIO KARYA" : "SELECTED WORKS"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => handleSmoothScroll(e, "#portofolio")}
                  className="hover:text-white transition-colors block"
                >
                  SIAKAD Sekolah &amp; CBT Ujian
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => handleSmoothScroll(e, "#portofolio")}
                  className="hover:text-white transition-colors block"
                >
                  Website Institusi Next.js 15
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => handleSmoothScroll(e, "#portofolio")}
                  className="hover:text-white transition-colors block"
                >
                  ERP Inventori Multi-Gudang
                </a>
              </li>
              <li>
                <a
                  href="#portofolio"
                  onClick={(e) => handleSmoothScroll(e, "#portofolio")}
                  className="hover:text-white transition-colors block"
                >
                  WhatsApp Meta Invoicing Engine
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Layanan & Harga */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-3">
              {lang === "id" ? "LAYANAN" : "SERVICES"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => handleSmoothScroll(e, "#layanan")}
                  className="hover:text-white transition-colors block"
                >
                  Paket SIAKAD CBT
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => handleSmoothScroll(e, "#layanan")}
                  className="hover:text-white transition-colors block"
                >
                  Paket Website Modern
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => handleSmoothScroll(e, "#layanan")}
                  className="hover:text-white transition-colors block"
                >
                  Paket Custom ERP
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  onClick={(e) => handleSmoothScroll(e, "#layanan")}
                  className="hover:text-white transition-colors block"
                >
                  Estimasi Biaya &amp; Termin
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Navigasi Cepat */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-3">
              {lang === "id" ? "NAVIGASI" : "NAVIGATION"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => handleSmoothScroll(e, "#beranda")}
                  className="hover:text-white transition-colors block"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#alur-kerja"
                  onClick={(e) => handleSmoothScroll(e, "#alur-kerja")}
                  className="hover:text-white transition-colors block"
                >
                  Alur Kerja &amp; Garansi
                </a>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="hover:text-white transition-colors block"
                >
                  Client Portal
                </Link>
              </li>
              <li>
                <a
                  href="#kontak"
                  onClick={(e) => handleSmoothScroll(e, "#kontak")}
                  className="text-emerald-400 hover:text-emerald-300 transition-colors block font-medium"
                >
                  Mulai Konsultasi →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Abinest Engineering Studio. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>KEMBALI KE ATAS</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
