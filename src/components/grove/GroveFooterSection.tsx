"use client";

import Link from "next/link";
import {
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Lock,
} from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function GroveFooterSection() {
  return (
    <footer className="relative bg-[#F8FAFC] border-t border-slate-300/80 overflow-hidden pb-16 sm:pb-0">
      {/* Main 12-Col Footer Grid */}
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 pt-14 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-slate-300">
          {/* Col 1 (4 cols): Abinest Brand Identity */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <AbinestLogo size="md" showTagline={true} />
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Software House &amp; Studio Rekayasa Teknologi untuk Bisnis, Startup, dan Institusi Nasional. Spesialis pembuatan Website Modern Berkecepatan Tinggi, Sistem ERP Kustom, serta Automasi AI &amp; Machine Learning Terapan.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-bold text-[#1D4ED8] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>25+ Implementasi Produksi Enterprise</span>
            </div>
          </div>

          {/* Col 2 (2 cols): Navigasi Halaman */}
          <div className="md:col-span-2 space-y-3.5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] pb-2 border-b border-slate-200">
              Navigasi Utama
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px] text-slate-600">
              <li>
                <a href="#beranda" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan-utama" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  3 Pilar Layanan
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Hasil Kerja &amp; Portofolio
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Alur &amp; Cara Kerja
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Paket Harga &amp; Investasi
                </a>
              </li>
              <li>
                <a href="#tech-stack" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Teknologi &amp; Arsitektur
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-[#1D4ED8] transition-colors font-medium">
                  Konsultasi Gratis
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Halaman Layanan Spesialis */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] pb-2 border-b border-slate-200">
              Layanan Spesialis Kami
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <Link
                  href="/jasa-pembuatan-website-jakarta"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Pembuatan Website Jakarta &amp; Surabaya</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa-pembuatan-sistem-erp"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Pembuatan Sistem ERP Kustom</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa-automasi-whatsapp"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Automasi WhatsApp &amp; Laporan</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-bold text-[#1D4ED8]"
                >
                  <span>Simulasi Demo Interaktif (/demo)</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/audit-gratis"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-bold text-emerald-700"
                >
                  <span>Audit &amp; Kalkulator Sistem Gratis</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li>
                <Link
                  href="/tools/proposal-generator"
                  className="hover:text-[#1D4ED8] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Generator Proposal &amp; Kit Sales</span>
                  <ArrowRight className="w-3 h-3 shrink-0" />
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-300 hover:border-[#2563EB] text-xs font-bold text-[#0F172A] hover:text-[#1D4ED8] transition-colors shadow-2xs"
                >
                  <Lock className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Login Portal Klien</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Kontak, Alamat, & Jam Kerja dalam Divided Card */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] pb-2 border-b border-slate-200">
              Kontak &amp; Jam Operasional
            </h3>
            <div className="ui-list-group border-slate-300 text-xs text-slate-600 shadow-2xs">
              <div className="p-2.5 flex items-start gap-2.5">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F172A] block">WhatsApp Konsultasi:</span>
                  <a
                    href="https://wa.me/6281398589745"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1D4ED8] transition-colors font-semibold text-emerald-700"
                  >
                    +62 813-9858-9745
                  </a>
                </div>
              </div>

              <div className="p-2.5 flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F172A] block">Email Resmi:</span>
                  <a
                    href="mailto:halo@abinest.id"
                    className="hover:text-[#1D4ED8] transition-colors font-medium"
                  >
                    halo@abinest.id
                  </a>
                </div>
              </div>

              <div className="p-2.5 flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F172A] block">Area Layanan Utama:</span>
                  <span>Jakarta Selatan &amp; Surabaya (Seluruh Indonesia)</span>
                </div>
              </div>

              <div className="p-2.5 flex items-start gap-2.5 bg-slate-50/70">
                <Clock className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#0F172A] block">Jam Kerja Engineer:</span>
                  <span>Senin – Sabtu (08.00 – 17.00 WIB)</span>
                  <span className="block text-[10.5px] text-blue-700 font-bold mt-0.5">
                    Server Darurat: 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p className="font-medium">
            © {new Date().getFullYear()} Abinest (PT Abinest Teknologi Nusantara). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6 font-semibold">
            <a href="#cara-kerja" className="hover:text-[#0F172A] transition-colors">
              Kontrak &amp; Kepemilikan Kode 100%
            </a>
            <a href="#cara-kerja" className="hover:text-[#0F172A] transition-colors">
              Garansi SLA 99.9%
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Signature */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none w-full overflow-hidden flex justify-center text-center pb-2 -mb-2 sm:-mb-6"
      >
        <span className="text-[12vw] font-black tracking-[0.16em] text-slate-900/[0.03] text-center leading-none select-none uppercase">
          ABINEST
        </span>
      </div>
    </footer>
  );
}
