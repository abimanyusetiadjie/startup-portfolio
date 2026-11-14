"use client";

import Link from "next/link";
import { AbinestLogo } from "./AbinestLogo";

export function GroveFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200/80 py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-100">
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center">
              <AbinestLogo size="md" showTagline={false} />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Studio rekayasa perangkat lunak untuk situs web berkecepatan tinggi, sistem ERP kustom, serta automasi AI dan WhatsApp resmi Meta.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Navigasi
            </span>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a href="#layanan-utama" className="hover:text-blue-600 transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-blue-600 transition-colors">
                  Studi Kasus
                </a>
              </li>
              <li>
                <a href="#cara-kerja" className="hover:text-blue-600 transition-colors">
                  Alur Kerja
                </a>
              </li>
              <li>
                <a href="#harga" className="hover:text-blue-600 transition-colors">
                  Investasi
                </a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-blue-600 transition-colors">
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Layanan &amp; Alat
            </span>
            <ul className="space-y-2 text-slate-600">
              <li>
                <Link href="/jasa-pembuatan-website-jakarta" className="hover:text-blue-600 transition-colors">
                  Situs Web Bisnis
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-sistem-erp" className="hover:text-blue-600 transition-colors">
                  Sistem ERP Kustom
                </Link>
              </li>
              <li>
                <Link href="/jasa-automasi-whatsapp" className="hover:text-blue-600 transition-colors">
                  Automasi WhatsApp &amp; AI
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-blue-600 transition-colors">
                  Simulasi Demo
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-blue-600 transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Kontak
            </span>
            <ul className="space-y-2 text-slate-600">
              <li>
                <a
                  href="https://wa.me/6281398589745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  +62 813-9858-9745
                </a>
              </li>
              <li>
                <a href="mailto:halo@abinest.id" className="hover:text-blue-600 transition-colors">
                  halo@abinest.id
                </a>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-600 transition-colors font-medium text-slate-800">
                  Portal Klien
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {year} Abinest Digital Systems. Seluruh hak cipta dilindungi.</p>
          <p>Jakarta &amp; Surabaya · Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
