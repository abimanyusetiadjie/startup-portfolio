"use client";

import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  FileCode2,
  ArrowRight,
  Lock,
} from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveFooterSection() {
  return (
    <footer className="relative bg-[#FAF9F6] border-t border-slate-200 overflow-hidden pb-16 sm:pb-0">
      {/* 1. Trust Badges Banner Above Footer */}
      <div className="bg-white border-b border-slate-200/80 py-8">
        <div className="max-w-[1260px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#C2672B] flex items-center justify-center shrink-0">
              <FileCode2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">
                100% Kepemilikan Source Code
              </div>
              <div className="text-[11px] text-slate-600">
                Hak milik penuh di tangan klien, bebas biaya sewa bulanan.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">
                Jaminan Tertulis SLA 99.9% Uptime
              </div>
              <div className="text-[11px] text-slate-600">
                Sistem anti-down di momen kritis ujian, PPDB, &amp; rapor.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#FAF9F6] border border-slate-200/80">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#0F172A]">
                Respons Engineer &lt;15 Menit
              </div>
              <div className="text-[11px] text-slate-600">
                Didampingi langsung tim pembuat sistem di jam kerja.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main 4-Column Footer */}
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200">
          {/* Col 1 (4 cols): Abinest Brand Identity */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <AbinestLogo size="md" showTagline={true} />
            </Link>
            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-sm">
              Software House &amp; Konsultan Teknologi terpercaya untuk Sekolah, Yayasan Pendidikan, UMKM, dan Perusahaan Menengah di Indonesia. Spesialis pembuatan Website Cepat, Sistem SIAKAD &amp; ERP Anti-Down, serta Automasi WhatsApp Resmi.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>20+ Proyek Sekolah, Yayasan &amp; Bisnis Terselesaikan</span>
            </div>
          </div>

          {/* Col 2 (2 cols): Navigasi Halaman */}
          <div className="md:col-span-2 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Navigasi Utama
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <a href="#beranda" className="hover:text-[#C2672B] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#mengapa-abinest" className="hover:text-[#C2672B] transition-colors">
                  Mengapa Abinest
                </a>
              </li>
              <li>
                <a href="#layanan-utama" className="hover:text-[#C2672B] transition-colors">
                  3 Pilar Layanan
                </a>
              </li>
              <li>
                <a href="#studi-kasus" className="hover:text-[#C2672B] transition-colors">
                  Hasil Kerja &amp; Portofolio
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-[#C2672B] transition-colors">
                  Testimoni Klien
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-[#C2672B] transition-colors">
                  Cara Kerja &amp; Biaya
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C2672B] transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3 (3 cols): Halaman Layanan Spesialis (SEO Internal Links) */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Layanan Spesialis Kami
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-600">
              <li>
                <Link
                  href="/jasa-pembuatan-website-jakarta"
                  className="hover:text-[#C2672B] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Pembuatan Website Jakarta &amp; Surabaya</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa-pembuatan-sistem-sekolah"
                  className="hover:text-[#C2672B] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Pembuatan Sistem Sekolah &amp; SIAKAD</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link
                  href="/jasa-automasi-whatsapp"
                  className="hover:text-[#C2672B] transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>Jasa Automasi WhatsApp &amp; Laporan</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-200/60">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#C2672B] transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-[#C2672B]" />
                  <span>Login Portal Klien (Tracking Progres)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 (3 cols): Kontak, Alamat, & Jam Kerja */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
              Kontak &amp; Jam Operasional
            </h3>
            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C2672B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">WhatsApp Konsultasi:</span>
                  <a
                    href="https://wa.me/6285708677918"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C2672B] transition-colors"
                  >
                    +62 857-0867-7918
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C2672B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Email Resmi:</span>
                  <a
                    href="mailto:halo@abinest.id"
                    className="hover:text-[#C2672B] transition-colors"
                  >
                    halo@abinest.id
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C2672B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Area Layanan Utama:</span>
                  <span>Jakarta Selatan &amp; Surabaya, Indonesia (Melayani Seluruh Indonesia)</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C2672B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#0F172A] block">Jam Kerja Engineer:</span>
                  <span>Senin – Sabtu (08.00 – 17.00 WIB)</span>
                  <span className="block text-[11px] text-emerald-700 font-medium">
                    Pemantauan Server Darurat: 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Abinest (PT Abinest Teknologi Nusantara). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-6">
            <a href="#cara-kerja" className="hover:text-[#0F172A] transition-colors">
              Kontrak &amp; Kepemilikan Kode 100%
            </a>
            <a href="#faq" className="hover:text-[#0F172A] transition-colors">
              Garansi SLA 99.9%
            </a>
          </div>
        </div>
      </div>

      {/* 3. Subtle Bottom Signature */}
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
