"use client";

import Link from "next/link";
import { trackWhatsAppClick } from "@/lib/analytics";
import { AbinestLogo } from "../AbinestLogo";

export function MobileFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#F6F9FC] text-[#425466] border-t border-slate-200/70 pt-10 pb-24 px-5">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center">
            <AbinestLogo size="md" showTagline={false} variant="light" />
          </Link>
          <p className="text-[13px] text-[#425466] leading-relaxed">
            Studio rekayasa situs web, sistem ERP kustom, dan automasi WhatsApp AI.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm ring-1 ring-slate-900/[0.05] text-[11.5px] font-semibold text-[#0A2540]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Konsultasi aktif · Respons &lt;15 mnt</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-5 border-y border-slate-200/70 text-[13px]">
          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A2540] block">
              Navigasi
            </span>
            <ul className="space-y-2 text-[#425466]">
              <li>
                <Link href="/#layanan-utama" className="hover:text-[#635BFF] transition-colors">
                  Layanan &amp; Harga
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-[#635BFF] transition-colors">
                  Studi Kasus
                </Link>
              </li>
              <li>
                <Link href="/#cara-kerja" className="hover:text-[#635BFF] transition-colors">
                  Alur Kerja
                </Link>
              </li>
              <li>
                <Link href="/#m-faq" className="hover:text-[#635BFF] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#kontak" className="hover:text-[#635BFF] transition-colors">
                  Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#0A2540] block">
              Akses &amp; Alat
            </span>
            <ul className="space-y-2 text-[#425466]">
              <li>
                <Link href="/demo" className="hover:text-[#635BFF] transition-colors">
                  Demo Interaktif
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-[#635BFF] transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
              <li>
                <Link href="/kebijakan-privasi" className="hover:text-[#635BFF] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link href="/syarat-ketentuan" className="hover:text-[#635BFF] transition-colors">
                  Syarat &amp; Ketentuan
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-1.5 text-[12px] text-[#425466]">
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
              className="font-bold text-[#0A2540] hover:text-[#635BFF] transition-colors"
            >
              +62 813-9858-9745
            </a>{" "}
            ·{" "}
            <a href="mailto:halo@abinest.id" className="hover:text-[#635BFF] transition-colors">
              halo@abinest.id
            </a>
          </div>
          <p className="text-slate-500">
            © {year} Abinest Digital Systems. Jakarta &amp; Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
