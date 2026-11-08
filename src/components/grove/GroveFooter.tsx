"use client";

import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Globe, Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFooter() {
  const { language } = useLanguage();

  return (
    <footer className="relative bg-[#13100E] pt-12 overflow-hidden border-t border-white/[0.06]">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Boxed Rounded Footer Container with Vertical Column Dividers (matching slice_6.png) */}
        <div className="rounded-xl bg-[#171311]/90 border border-white/[0.08] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Col 1 (4 cols): Logo + Description */}
            <div className="md:col-span-4 md:border-r md:border-white/[0.07] md:pr-6 space-y-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white text-[#121212] flex items-center justify-center">
                  <Shield className="w-3.5 h-3.5 fill-[#121212]" />
                </div>
                <span className="text-[14px] font-semibold text-white">
                  Abinest <span className="font-normal text-white/75">IT</span>
                </span>
              </Link>
              <p className="text-[11px] text-[#8E8E93] leading-relaxed">
                {language === "id"
                  ? "Mitra rekayasa perangkat lunak B2B untuk SIAKAD sekolah anti-down, website Next.js 15, dan otomasi WhatsApp resmi Meta."
                  : "Modern enterprise IT partner specializing in zero-downtime SIAKAD platforms, Next.js 15 web apps, and Meta Cloud API automation."}
              </p>
            </div>

            {/* Col 2 (2 cols): Company Links */}
            <div className="md:col-span-2 md:border-r md:border-white/[0.07] md:pr-4 space-y-2.5">
              <h3 className="text-[11px] font-semibold text-white">
                {language === "id" ? "Perusahaan" : "Company"}
              </h3>
              <ul className="space-y-2 text-[11px] text-[#8E8E93]">
                <li>
                  <a href="#layanan" className="hover:text-white transition-colors">
                    {language === "id" ? "Tentang" : "About"}
                  </a>
                </li>
                <li>
                  <a href="#wawasan" className="hover:text-white transition-colors">
                    {language === "id" ? "Wawasan" : "Blog"}
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="hover:text-white transition-colors">
                    {language === "id" ? "Kontak" : "Contact"}
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3 (2 cols): Services Links */}
            <div className="md:col-span-2 md:border-r md:border-white/[0.07] md:pr-4 space-y-2.5">
              <h3 className="text-[11px] font-semibold text-white">
                {language === "id" ? "Layanan" : "Services"}
              </h3>
              <ul className="space-y-2 text-[11px] text-[#8E8E93]">
                <li>
                  <a href="#arsitektur" className="hover:text-white transition-colors">
                    {language === "id" ? "SIAKAD Cloud" : "Cloud"}
                  </a>
                </li>
                <li>
                  <a href="#studi-kasus" className="hover:text-white transition-colors">
                    {language === "id" ? "Keamanan RLS" : "Security"}
                  </a>
                </li>
                <li>
                  <Link href="/login" className="hover:text-white transition-colors">
                    {language === "id" ? "Portal Klien" : "Client Portal"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4 (4 cols): Follow Us Row + Contact Info Lines */}
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-white">
                  {language === "id" ? "Ikuti Kami:" : "Follow Us:"}
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/abimanyusetiadjie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 rounded bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-[#8E8E93] hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <Globe className="w-3 h-3" />
                  </a>
                  <Link
                    href="/login"
                    className="w-6 h-6 rounded bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-[#8E8E93] hover:text-white transition-colors"
                    aria-label="Client Portal"
                  >
                    <Lock className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-[#8E8E93] pt-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#E06D3B] shrink-0" />
                  <span>hello@abinest.id</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#E06D3B] shrink-0" />
                  <span>+62 857-0867-7918</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#E06D3B] shrink-0" />
                  <span>Jakarta Selatan & Surabaya, Indonesia</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row Below Box (matching slice_6.png) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-[#8E8E93] mt-6 pb-4">
          <p>© 2026 Abinest IT. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#faq" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Giant Cut-Off Warm Copper Watermark Wordmark at Bottom Edge (matching "SoftEra IT" in slice_6.png) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full overflow-hidden flex justify-center leading-none pt-2 -mb-6 sm:-mb-10"
      >
        <span className="text-[17vw] font-bold tracking-tight bg-gradient-to-b from-[#4E2C1B]/70 via-[#381F13]/45 to-transparent bg-clip-text text-transparent whitespace-nowrap">
          Abinest IT
        </span>
      </div>
    </footer>
  );
}
