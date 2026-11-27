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
        className="scroll-mt-20 bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0F172A]"
      >
        <div className="sig-container py-14 lg:py-16 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-10 lg:gap-8">
            {/* Left 4 Cols */}
            <div className="lg:col-span-4 space-y-5">
              <Link href="/" className="inline-flex items-center">
                <AbinestLogo size="md" showTagline={false} variant="light" />
              </Link>

              <p className="text-[22px] sm:text-[26px] font-bold tracking-[-0.02em] leading-[1.2] text-[#0F172A] max-w-sm">
                Think. Design. Develop. Automate.{" "}
                <span className="text-[#0D7A67]">Scale.</span>
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

                <a href="mailto:halo@abinest.id" className="sig-btn-outline">
                  halo@abinest.id
                </a>
              </div>
            </div>

            {/* Right 4 Cols */}
            <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Abinest
                </div>
                <ul className="space-y-2.5 text-[15px] text-[#334155]">
                  <li>
                    <Link
                      href="/#karya"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Karya
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#layanan"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#alur-kerja"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Alur Kerja
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wawasan/beli-putus-vs-sewa-saas-erp"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Wawasan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#faq"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Layanan &amp; Alat
                </div>
                <ul className="space-y-2.5 text-[15px] text-[#334155]">
                  <li>
                    <Link
                      href="/jasa-pembuatan-website-jakarta"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Website Bisnis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jasa-pembuatan-sistem-erp"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      ERP &amp; SIAKAD
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jasa-automasi-whatsapp"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Automasi AI &amp; WA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demo"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Demo Interaktif
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/audit-gratis"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      Kalkulator Biaya
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 col-span-2 sm:col-span-1">
                <div className="text-[12px] font-semibold uppercase tracking-wider text-[#64748B]">
                  Hubungi Kami
                </div>
                <ul className="space-y-2.5 text-[15px] text-[#334155]">
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
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      +62 813-9858-9745
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:halo@abinest.id"
                      className="hover:text-[#0D7A67] transition-colors"
                    >
                      halo@abinest.id
                    </a>
                  </li>
                  <li className="text-[13.5px] text-[#64748B] pt-1">
                    Jakarta &amp; Surabaya
                  </li>
                  <li className="text-[13px] text-[#64748B]">
                    Sen–Sab, 08.00–17.00 WIB
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[13.5px] text-[#64748B]">
            <p>© {year} Abinest — Digital Product &amp; Engineering Studio</p>
            <div className="flex items-center gap-5">
              <Link
                href="/kebijakan-privasi"
                className="hover:text-[#0F172A] transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="hover:text-[#0F172A] transition-colors"
              >
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
