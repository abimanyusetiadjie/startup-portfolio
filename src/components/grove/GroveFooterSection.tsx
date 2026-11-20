"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import { AbinestLogo } from "./AbinestLogo";

export function GroveFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 py-14">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center">
              <AbinestLogo size="md" showTagline={false} variant="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Studio rekayasa perangkat lunak untuk situs web berkecepatan tinggi, sistem ERP kustom, serta automasi AI dan WhatsApp resmi Meta.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Navigasi
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/#layanan-utama" className="hover:text-sky-400 transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-sky-400 transition-colors">
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/#cara-kerja" className="hover:text-sky-400 transition-colors">
                  Alur Kerja
                </Link>
              </li>
              <li>
                <Link href="/#harga" className="hover:text-sky-400 transition-colors">
                  Investasi
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-sky-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-sky-400 transition-colors">
                  Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Layanan &amp; Alat
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/jasa-pembuatan-website-jakarta" className="hover:text-sky-400 transition-colors">
                  Situs Web Bisnis
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-sistem-erp" className="hover:text-sky-400 transition-colors">
                  Sistem ERP Kustom
                </Link>
              </li>
              <li>
                <Link href="/jasa-automasi-whatsapp" className="hover:text-sky-400 transition-colors">
                  Automasi WhatsApp &amp; AI
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-sky-400 transition-colors">
                  Simulasi Demo
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-sky-400 transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
              Kontak
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a
                  href="https://wa.me/6281398589745"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "footer_desktop",
                      label: "direct_number",
                    })
                  }
                  className="hover:text-sky-400 transition-colors"
                >
                  +62 813-9858-9745
                </a>
              </li>
              <li>
                <a href="mailto:halo@abinest.id" className="hover:text-sky-400 transition-colors">
                  halo@abinest.id
                </a>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-sky-400 transition-colors font-semibold text-white">
                  Konsultasi Gratis
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {year} Abinest Digital Systems. Seluruh hak cipta dilindungi.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-sky-400 transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-sky-400 transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span>Jakarta &amp; Surabaya · Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
