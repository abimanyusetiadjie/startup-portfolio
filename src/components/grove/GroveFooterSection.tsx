"use client";

import Link from "next/link";
import { Box, Mail, Phone, MapPin, Globe, ArrowUpRight } from "lucide-react";

export function GroveFooterSection() {
  return (
    <footer className="relative bg-[#0A0A0C] border-t border-white/[0.08] overflow-hidden">
      {/* 1. Pre-Footer Banner with Horizon Bottom-Center Glow */}
      <div className="relative py-24 border-b border-white/[0.08] overflow-hidden">
        {/* Bright Orange Horizon Glow from Bottom Center */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 left-1/2 -translate-x-1/2 w-[850px] h-[300px] bg-gradient-to-t from-orange-500/50 via-amber-500/25 to-transparent blur-[90px] rounded-full"
        />

        <div className="relative z-10 max-w-xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono uppercase tracking-[0.2em] text-orange-400">
            NEXT STEPS
          </span>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Got a Stack to Fix
            <br />
            or Build?
          </h2>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Jadwalkan sesi audit teknologi gratis bersama tim senior engineer kami untuk memetakan bottlenecks dan solusi arsitektur terbaik.
          </p>

          <div className="pt-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-[0_0_35px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] transition-all duration-300"
            >
              <span>Book a Free Audit</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]">
          {/* Col 1 (4 cols): Logo & Short Description */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-sm">
                <Box className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-base font-semibold tracking-tight text-white">
                TechRoos
              </span>
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Studio rekayasa perangkat lunak B2B &amp; otomasi cloud. Kami merancang arsitektur web berkecepatan tinggi, sistem anti-down, dan pipeline integrasi resmi untuk institusi modern.
            </p>
          </div>

          {/* Col 2 (2 cols): Navigation Links */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Services Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Managed IT Infrastructure
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Cloud &amp; DevOps Scale
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Zero-Trust Database Security
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Meta WhatsApp Cloud API
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-white transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Contact Info & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact Us
            </h3>
            <div className="space-y-2 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>hello@techroos.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>+62 857-0867-7918</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <span>Jakarta Selatan &amp; Surabaya, Indonesia</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-zinc-400">
              <a
                href="https://github.com/abimanyusetiadjie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-orange-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/login"
                className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:text-white hover:border-orange-500/40 transition-colors"
                aria-label="Client Portal"
              >
                <Box className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} TechRoos. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#faq" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#faq" className="hover:text-zinc-300 transition-colors">
              Security SLA
            </a>
          </div>
        </div>
      </div>

      {/* 3. Watermark Raksasa (Bottom Signature): SoftEra IT */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full overflow-hidden flex justify-center text-center pb-2 -mb-2 sm:-mb-6"
      >
        <span className="text-[12vw] font-bold tracking-tight text-white/[0.03] text-center leading-none select-none uppercase">
          SoftEra IT
        </span>
      </div>
    </footer>
  );
}
