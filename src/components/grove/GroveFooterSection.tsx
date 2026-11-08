"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe, ArrowUpRight, Lock } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveFooterSection() {
  return (
    <footer className="relative bg-white border-t border-slate-200 overflow-hidden">
      {/* 1. Pre-Footer Banner in Warm Light Orange Gradient */}
      <div className="relative py-24 bg-gradient-to-b from-orange-50/70 via-amber-50/40 to-white border-b border-slate-200 overflow-hidden">
        {/* Soft Warm Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[850px] h-[280px] bg-gradient-to-t from-orange-400/25 via-amber-300/15 to-transparent blur-[90px] rounded-full"
        />

        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200 text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
            KONSULTASI GRATIS
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
            Punya Kebutuhan Sistem
            <br />
            atau Website? Mari Bicara.
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Jadwalkan sesi konsultasi teknologi bersama tim senior software engineer kami untuk merancang sistem yang stabil, bebas down, dan siap bertumbuh.
          </p>

          <div className="pt-3">
            <a
              href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20jadwalkan%20konsultasi%20gratis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-300"
            >
              <span>Jadwalkan Konsultasi Gratis Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1 (4 cols): Abinest Brand Identity */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <AbinestLogo size="md" showTagline={true} />
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              Mitra software house &amp; konsultan rekayasa perangkat lunak B2B. Spesialis arsitektur SIAKAD sekolah anti-down, website institusi Next.js 15, dan otomasi WhatsApp resmi Meta.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Aman · Mudah · Terpercaya</span>
            </div>
          </div>

          {/* Col 2 (2 cols): Navigasi Cepat */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Navigasi
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#beranda" className="hover:text-orange-600 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-600 transition-colors">
                  Layanan Unggulan
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-orange-600 transition-colors">
                  Tech Stack
                </a>
              </li>
              <li>
                <a href="#metodologi" className="hover:text-orange-600 transition-colors">
                  Metodologi 24/7
                </a>
              </li>
              <li>
                <a href="#studi-kasus" className="hover:text-orange-600 transition-colors">
                  Studi Kasus
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-orange-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Layanan Spesialis */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Layanan Spesialis
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href="#layanan" className="hover:text-orange-600 transition-colors">
                  SIAKAD Sekolah Anti-Down
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-600 transition-colors">
                  Website Next.js 15 App Router
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-600 transition-colors">
                  Otomasi Meta WhatsApp Cloud API
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-orange-600 transition-colors">
                  Keamanan Database PostgreSQL RLS
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-orange-600 transition-colors">
                  Portal Klien &amp; Milestone SLA
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Kontak Langsung */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Hubungi Kami
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                <span>hello@abinest.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                <span>+62 857-0867-7918</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Jakarta Selatan &amp; Surabaya, Indonesia</span>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3">
              <a
                href="https://github.com/abimanyusetiadjie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-orange-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors"
                aria-label="GitHub"
              >
                <Globe className="w-4 h-4" />
              </a>
              <Link
                href="/login"
                className="w-8 h-8 rounded-xl bg-slate-100 hover:bg-orange-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors"
                aria-label="Portal Klien"
              >
                <Lock className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Abinest (PT Abinest Teknologi Nusantara). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-slate-800 transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#faq" className="hover:text-slate-800 transition-colors">
              Syarat &amp; Ketentuan
            </a>
            <a href="#faq" className="hover:text-slate-800 transition-colors">
              Jaminan SLA 99.9%
            </a>
          </div>
        </div>
      </div>

      {/* 3. Watermark Raksasa di Dasar Halaman (ABINEST) */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full overflow-hidden flex justify-center text-center pb-2 -mb-2 sm:-mb-6"
      >
        <span className="text-[13vw] font-black tracking-[0.16em] text-slate-900/[0.04] text-center leading-none select-none uppercase">
          ABINEST
        </span>
      </div>
    </footer>
  );
}
