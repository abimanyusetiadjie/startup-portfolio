"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import { AbinestLogo } from "../AbinestLogo";

export function MobileFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] text-[#666666] border-t border-[#EAEAEA] pt-9 pb-24 px-5">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center">
            <AbinestLogo size="md" showTagline={false} variant="light" />
          </Link>
          <p className="text-[13px] text-[#666666] leading-relaxed">
            Studio rekayasa situs web, sistem ERP kustom, dan automasi WhatsApp AI.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#EAEAEA] text-[11.5px] font-medium text-[#0A0A0A]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Konsultasi aktif · Respons &lt;15 mnt</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-5 border-y border-[#EAEAEA] text-[13px]">
          <div className="space-y-2.5">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#0A0A0A] block">
              Navigasi
            </span>
            <ul className="space-y-2 text-[#666666]">
              <li>
                <Link href="/#layanan-utama" className="hover:text-[#0A0A0A] transition-colors">
                  Layanan &amp; Harga
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-[#0A0A0A] transition-colors">
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/#cara-kerja" className="hover:text-[#0A0A0A] transition-colors">
                  Alur Kerja
                </Link>
              </li>
              <li>
                <Link href="/#m-faq" className="hover:text-[#0A0A0A] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-[#0A0A0A] transition-colors">
                  Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="font-mono text-[10.5px] font-medium uppercase tracking-[0.1em] text-[#0A0A0A] block">
              Akses &amp; Alat
            </span>
            <ul className="space-y-2 text-[#666666]">
              <li>
                <Link href="/demo" className="hover:text-[#0A0A0A] transition-colors">
                  Demo Interaktif
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-[#0A0A0A] transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-[#0A0A0A] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-[#0A0A0A] transition-colors">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-1.5 text-[12px] text-[#666666]">
          <div>
            <a
              href="https://wa.me/6281398589745"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  source: "footer_mobile",
                  label: "direct_number",
                })
              }
              className="font-semibold text-[#0A0A0A] hover:text-[#0070F3] transition-colors"
            >
              +62 813-9858-9745
            </a>{" "}
            ·{" "}
            <a href="mailto:halo@abinest.id" className="hover:text-[#0A0A0A] transition-colors">
              halo@abinest.id
            </a>
          </div>
          <p className="text-neutral-500">
            © {year} Abinest Digital Systems. Jakarta &amp; Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
