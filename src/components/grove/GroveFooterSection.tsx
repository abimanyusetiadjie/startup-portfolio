"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import { AbinestLogo } from "./AbinestLogo";

export function GroveFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F8FAFC] text-[#475569] border-t border-slate-200/80">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-slate-200/70">
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center">
              <AbinestLogo size="md" showTagline={false} variant="light" />
            </Link>
            <p className="text-sm text-[#475569] leading-relaxed max-w-sm">
              Studio rekayasa perangkat lunak untuk situs web berkecepatan tinggi, sistem ERP kustom, serta automasi AI dan WhatsApp resmi Meta.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-slate-200/80 text-xs font-semibold text-[#0F172A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Semua layanan &amp; konsultasi aktif · Respons &lt;15 mnt</span>
            </div>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0F172A] block">
              Navigasi
            </span>
            <ul className="space-y-2.5 text-[#475569]">
              <li>
                <Link href="/#layanan-utama" className="hover:text-[#0F172A] transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-[#0F172A] transition-colors">
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/#cara-kerja" className="hover:text-[#0F172A] transition-colors">
                  Alur Kerja
                </Link>
              </li>
              <li>
                <Link href="/#harga" className="hover:text-[#0F172A] transition-colors">
                  Investasi
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#0F172A] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-[#0F172A] transition-colors">
                  Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0F172A] block">
              Layanan &amp; Alat
            </span>
            <ul className="space-y-2.5 text-[#475569]">
              <li>
                <Link href="/jasa-pembuatan-website-jakarta" className="hover:text-[#0F172A] transition-colors">
                  Situs Web Bisnis
                </Link>
              </li>
              <li>
                <Link href="/jasa-pembuatan-sistem-erp" className="hover:text-[#0F172A] transition-colors">
                  Sistem ERP Kustom
                </Link>
              </li>
              <li>
                <Link href="/jasa-automasi-whatsapp" className="hover:text-[#0F172A] transition-colors">
                  Automasi WhatsApp &amp; AI
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-[#0F172A] transition-colors">
                  Simulasi Demo
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-[#0F172A] transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-[0.08em] text-[#0F172A] block">
              Kontak
            </span>
            <ul className="space-y-2.5 text-[#475569]">
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
                  className="hover:text-[#0F172A] transition-colors"
                >
                  +62 813-9858-9745
                </a>
              </li>
              <li>
                <a href="mailto:halo@abinest.id" className="hover:text-[#0F172A] transition-colors">
                  halo@abinest.id
                </a>
              </li>
              <li>
                <Link href="/#kontak" className="hover:underline transition-colors font-semibold text-[#0F172A]">
                  Konsultasi Gratis →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#475569]">
          <p>© {year} Abinest Digital Systems. Seluruh hak cipta dilindungi.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/kebijakan-privasi" className="hover:text-[#0F172A] transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-[#0F172A] transition-colors">
              Syarat &amp; Ketentuan
            </Link>
            <span className="font-mono text-[11px] text-slate-400">
              Jakarta &amp; Surabaya · ID
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
