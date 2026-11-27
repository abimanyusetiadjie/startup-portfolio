"use client";

import Link from "next/link";
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
      {/* Clay Exact Light-Gray Editorial Closing Footer (#F3F3F3) */}
      <footer
        id="kontak"
        className="scroll-mt-24 bg-[#F3F3F3] text-[#111111] py-20 lg:py-24"
      >
        <div className="clay-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-10">
            {/* Left 6 Cols: Clay "Let's Talk" Direct Contact Anchor */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-[clamp(2.25rem,3vw+0.9rem,3.25rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-[#111111]">
                Mari Berdiskusi
              </h2>

              <div className="space-y-2.5">
                <div>
                  <a
                    href="mailto:halo@abinest.id"
                    className="text-[22px] sm:text-[26px] font-medium text-[#111111] underline underline-offset-8 decoration-[#C4C7CE] hover:decoration-[#111111] transition-colors"
                  >
                    halo@abinest.id
                  </a>
                </div>
                <div>
                  <a
                    href={`https://wa.me/${ABINEST_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackWhatsAppClick({
                        source: "clay_footer_phone",
                        label: "direct_phone",
                      })
                    }
                    className="text-[17px] text-[#4B5563] hover:text-[#111111] transition-colors"
                  >
                    +62 813-9858-9745
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "clay_footer_cta",
                      label: "chat_wa",
                    })
                  }
                  className="clay-pill-btn"
                >
                  Mulai proyek via WhatsApp
                </a>
              </div>
            </div>

            {/* Right 6 Cols: Clean 2-Col Navigation + Locations (Clay exact footer rhythm) */}
            <div className="lg:col-span-6 space-y-12">
              <div className="grid grid-cols-2 gap-8 text-[15.5px] font-medium text-[#111111]">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/#karya"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Karya
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#layanan"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Layanan
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/demo"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Demo Interaktif
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/audit-gratis"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Kalkulator Biaya
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/jasa-pembuatan-website-jakarta"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Website Bisnis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jasa-pembuatan-sistem-erp"
                      className="hover:opacity-60 transition-opacity"
                    >
                      ERP, WMS &amp; POS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jasa-automasi-whatsapp"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Automasi AI &amp; WA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/wawasan/beli-putus-vs-sewa-saas-erp"
                      className="hover:opacity-60 transition-opacity"
                    >
                      Wawasan
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-2 text-[14px] text-[#6B7280]">
                <div>
                  <div className="font-medium text-[#111111]">Jakarta</div>
                  <div>DKI Jakarta, ID</div>
                </div>
                <div>
                  <div className="font-medium text-[#111111]">Surabaya</div>
                  <div>Jawa Timur, ID</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="font-medium text-[#111111]">Jam Kerja</div>
                  <div>Sen–Sab, 08–17 WIB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row */}
          <div className="mt-16 pt-8 border-t border-[#E0E0E2] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13.5px] text-[#6B7280]">
            <p>© {year} Abinest Digital Systems</p>
            <div className="flex items-center gap-6">
              <Link
                href="/kebijakan-privasi"
                className="hover:text-[#111111] transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/syarat-ketentuan"
                className="hover:text-[#111111] transition-colors"
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
