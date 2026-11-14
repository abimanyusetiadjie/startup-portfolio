"use client";

import Link from "next/link";
import { AbinestLogo } from "../AbinestLogo";

export function MobileFooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pt-9 pb-24 px-5">
      <div className="max-w-md mx-auto space-y-6">
        <div className="space-y-2">
          <Link href="/" className="inline-flex items-center">
            <AbinestLogo size="md" showTagline={false} variant="dark" />
          </Link>
          <p className="text-[13px] text-slate-400 leading-relaxed">
            Studio rekayasa situs web, sistem ERP kustom, dan automasi WhatsApp AI.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 py-4 border-y border-slate-800 text-[13px]">
          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
              Navigasi
            </span>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li>
                <a href="#m-layanan" className="hover:text-sky-400 transition-colors">
                  Layanan &amp; Harga
                </a>
              </li>
              <li>
                <a href="#m-portofolio" className="hover:text-sky-400 transition-colors">
                  Studi Kasus
                </a>
              </li>
              <li>
                <a href="#m-cara-kerja" className="hover:text-sky-400 transition-colors">
                  Alur Kerja
                </a>
              </li>
              <li>
                <a href="#m-kontak" className="hover:text-sky-400 transition-colors">
                  Konsultasi
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
              Akses &amp; Alat
            </span>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li>
                <Link href="/demo" className="hover:text-sky-400 transition-colors">
                  Demo Interaktif
                </Link>
              </li>
              <li>
                <Link href="/audit-gratis" className="hover:text-sky-400 transition-colors">
                  Kalkulator Biaya
                </Link>
              </li>
              <li>
                <Link href="/tools/proposal-generator" className="hover:text-sky-400 transition-colors">
                  Generator Proposal
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-sky-400 transition-colors text-white font-semibold">
                  Portal Klien
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-1.5 text-[12px] text-slate-400">
          <div>
            <a
              href="https://wa.me/6281398589745"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-sky-400 transition-colors"
            >
              +62 813-9858-9745
            </a>{" "}
            ·{" "}
            <a href="mailto:halo@abinest.id" className="hover:text-sky-400 transition-colors">
              halo@abinest.id
            </a>
          </div>
          <p className="text-slate-400">
            © {year} Abinest Digital Systems. Jakarta &amp; Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
