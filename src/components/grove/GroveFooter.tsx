"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, MessageSquare, MapPin, Shield } from "lucide-react";
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
      className="bg-[#040609] text-white pt-16 pb-8 px-4 sm:px-8 lg:px-12 font-sans relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Main 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Col 1: Studio Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#F59E0B] to-[#EA580C] text-zinc-950 flex items-center justify-center">
                <Shield className="w-4 h-4 fill-zinc-950 stroke-zinc-950" />
              </div>
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Abinest<span className="text-amber-500">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 ml-1">
                SOFTWARE IT
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-sm font-normal">
              {lang === "id"
                ? "Studio rekayasa perangkat lunak enterprise. Kami membangun sistem SIAKAD sekolah anti-down, website institusi super cepat, dan custom ERP terintegrasi dengan 100% kepemilikan source code."
                : "Bespoke software engineering studio architecting resilient school SIS platforms, ultra-fast websites, and custom ERPs with 100% full IP code handover."}
            </p>

            <div className="pt-2 space-y-2 text-xs font-mono text-zinc-300">
              <a
                href="mailto:hello@abinest.id"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>hello@abinest.id</span>
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp: +62 812-3456-7890</span>
              </a>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                <span>Jakarta Selatan · Surabaya Timur (ID)</span>
              </div>
            </div>
          </div>

          {/* Col 2: Pilar Sistem */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-3">
              {lang === "id" ? "PILAR SISTEM" : "CORE SYSTEMS"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#pilar"
                  onClick={(e) => handleSmoothScroll(e, "#pilar")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  SIAKAD &amp; Server CBT Anti-Down
                </a>
              </li>
              <li>
                <a
                  href="#pilar"
                  onClick={(e) => handleSmoothScroll(e, "#pilar")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Website Institusi Next.js 15
                </a>
              </li>
              <li>
                <a
                  href="#pilar"
                  onClick={(e) => handleSmoothScroll(e, "#pilar")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Custom ERP Stok &amp; Kasir POS
                </a>
              </li>
              <li>
                <a
                  href="#pilar"
                  onClick={(e) => handleSmoothScroll(e, "#pilar")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Bot WhatsApp Meta Cloud Resmi
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Studi Kasus & Bukti */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-3">
              {lang === "id" ? "STUDI KASUS" : "CASE STUDIES"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#studi-kasus"
                  onClick={(e) => handleSmoothScroll(e, "#studi-kasus")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  SMA Al-Hikmah (1.200 Siswa)
                </a>
              </li>
              <li>
                <a
                  href="#studi-kasus"
                  onClick={(e) => handleSmoothScroll(e, "#studi-kasus")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Yayasan Bina Insan
                </a>
              </li>
              <li>
                <a
                  href="#studi-kasus"
                  onClick={(e) => handleSmoothScroll(e, "#studi-kasus")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  PT Mitra Retail Nusantara
                </a>
              </li>
              <li>
                <Link
                  href="/portal"
                  className="text-amber-400 hover:text-amber-300 transition-colors block font-medium"
                >
                  Client Portal Login →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold block mb-3">
              {lang === "id" ? "NAVIGASI" : "NAVIGATION"}
            </span>
            <ul className="space-y-2 text-xs text-zinc-300">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => handleSmoothScroll(e, "#beranda")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleSmoothScroll(e, "#faq")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  FAQ &amp; Garansi
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  onClick={(e) => handleSmoothScroll(e, "#kontak")}
                  className="hover:text-amber-400 transition-colors block"
                >
                  Konsultasi Proyek
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div>
            © {new Date().getFullYear()} Abinest Software IT Studio. All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* GIGANTIC FAINT WATERMARK TYPOGRAPHY (Exact Signature Finish from Reference Image) */}
      <div className="w-full text-center select-none pointer-events-none mt-10 -mb-4 overflow-hidden">
        <span className="font-heading font-black text-[4.5rem] sm:text-[7.5rem] lg:text-[11.5rem] text-white/[0.03] uppercase tracking-tighter block leading-none whitespace-nowrap">
          SOFTWARE IT
        </span>
      </div>
    </footer>
  );
}
