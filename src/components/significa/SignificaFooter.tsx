"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import {
  ABINEST_WHATSAPP_NUMBER,
  buildConsultationWaUrl,
} from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import { SignificaFloatingWhatsApp } from "./SignificaFloatingWhatsApp";

export function SignificaFooter() {
  const year = new Date().getFullYear();
  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya siap mendiskusikan kebutuhan proyek digital untuk perusahaan kami."
  );

  return (
    <>
      <footer
        id="kontak"
        className="scroll-mt-20 bg-[#F7F7F7] border-t border-[#E8E8E8] text-[#171717]"
      >
        <div className="sig-container py-16 lg:py-20 space-y-16">
          {/* Significa Exact 8-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 lg:gap-8">
            {/* Left 4 Cols: Brand Mark + Bold 30px English Manifesto + Direct CTAs */}
            <div className="lg:col-span-4 space-y-6">
              <Link href="/" className="inline-flex items-center">
                <AbinestLogo size="md" showTagline={false} variant="light" />
              </Link>

              <p className="text-[26px] sm:text-[30px] font-bold tracking-[-0.02em] leading-[1.15] text-[#171717] max-w-sm">
                Think. Design. Develop. Automate.{" "}
                <span className="text-[#6F6F71]">Scale.</span>
              </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "significa_footer_cta",
                    label: "mulai_proyek",
                  })
                }
                className="sig-btn-primary"
              >
                <span>Mulai proyek via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="mailto:halo@abinest.id"
                className="sig-btn-outline"
              >
                halo@abinest.id
              </a>
            </div>
          </div>

          {/* Right 4 Cols: 3 Clean Significa Link Columns */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-3.5">
              <div className="text-[12px] font-medium uppercase tracking-wider text-[#6F6F71]">
                Abinest
              </div>
              <ul className="space-y-2.5 text-[16.5px]">
                <li>
                  <Link href="/#karya" className="sig-link">
                    Karya
                  </Link>
                </li>
                <li>
                  <Link href="/#layanan" className="sig-link">
                    Layanan
                  </Link>
                </li>
                <li>
                  <Link href="/#tentang" className="sig-link">
                    Tentang
                  </Link>
                </li>
                <li>
                  <Link href="/#wawasan" className="sig-link">
                    Wawasan
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="sig-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3.5">
              <div className="text-[12px] font-medium uppercase tracking-wider text-[#6F6F71]">
                Layanan &amp; Alat
              </div>
              <ul className="space-y-2.5 text-[16.5px]">
                <li>
                  <Link href="/jasa-pembuatan-website-jakarta" className="sig-link">
                    Website Bisnis
                  </Link>
                </li>
                <li>
                  <Link href="/jasa-pembuatan-sistem-erp" className="sig-link">
                    ERP &amp; SIAKAD
                  </Link>
                </li>
                <li>
                  <Link href="/jasa-automasi-whatsapp" className="sig-link">
                    Automasi AI &amp; WA
                  </Link>
                </li>
                <li>
                  <Link href="/demo" className="sig-link">
                    Demo Interaktif
                  </Link>
                </li>
                <li>
                  <Link href="/audit-gratis" className="sig-link">
                    Kalkulator Biaya
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3.5 col-span-2 sm:col-span-1">
              <div className="text-[12px] font-medium uppercase tracking-wider text-[#6F6F71]">
                Hubungi Kami
              </div>
              <ul className="space-y-2.5 text-[16.5px]">
                <li>
                  <a
                    href={`https://wa.me/${ABINEST_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick({
                        source: "significa_footer_number",
                        label: "direct_number",
                      })
                    }
                    className="sig-link"
                  >
                    +62 813-9858-9745
                  </a>
                </li>
                <li>
                  <a href="mailto:halo@abinest.id" className="sig-link">
                    halo@abinest.id
                  </a>
                </li>
                <li className="text-[14px] text-[#6F6F71] pt-1">
                  Jakarta &amp; Surabaya
                </li>
                <li className="text-[13px] text-[#6F6F71]">
                  Sen–Sab, 08.00–17.00 WIB
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Significa Bottom Legal Row */}
        <div className="pt-8 border-t border-[#E8E8E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[14px] text-[#6F6F71]">
          <p>© {year} Abinest — Digital Product &amp; Engineering Studio</p>
          <div className="flex items-center gap-5">
            <Link href="/kebijakan-privasi" className="sig-link hover:text-[#171717]">
              Kebijakan Privasi
            </Link>
            <Link href="/syarat-ketentuan" className="sig-link hover:text-[#171717]">
              Syarat &amp; Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>

    <SignificaFloatingWhatsApp />
    </>
  );
}
