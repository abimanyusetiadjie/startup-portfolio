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
      <footer id="kontak" className="scroll-mt-8 bg-white text-[#111111]">
        <div className="ed-container">
          <div className="border-t border-[#E6E6E6] pt-14 sm:pt-20 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-10 items-start">
            <div className="lg:col-span-4 space-y-1.5">
              <h2 className="text-[15px] font-semibold text-[#111111]">
                Kontak
              </h2>
              <p className="font-serif text-[14.5px] text-[#737373]">
                Sen–Sab, 08.00–17.00 WIB
              </p>
            </div>

            <div className="lg:col-span-8">
              <p className="text-[22px] sm:text-[26px] font-semibold tracking-[-0.025em] leading-[1.25] text-[#111111] max-w-[560px]">
                Punya kebutuhan sistem atau ingin berdiskusi langsung bersama
                engineer kami?
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 font-serif text-[17.5px]">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "editorial_footer_wa",
                      label: "mulai_diskusi",
                    })
                  }
                  className="ed-link"
                >
                  WhatsApp (+62 813-9858-9745)
                </a>

                <a href="mailto:halo@abinest.id" className="ed-link-ink">
                  halo@abinest.id
                </a>

                <Link href="/demo" className="ed-link-ink">
                  Demo Interaktif
                </Link>

                <Link href="/audit-gratis" className="ed-link-ink">
                  Kalkulator Biaya
                </Link>
              </div>

              <div className="mt-12 pt-6 border-t border-[#E6E6E6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[13px] text-[#737373]">
                <p>
                  © {year} Abinest — Jakarta &amp; Surabaya ·{" "}
                  <a
                    href={`https://wa.me/${ABINEST_WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#111111] transition-colors"
                  >
                    +62 813-9858-9745
                  </a>
                </p>

                <div className="flex items-center gap-5">
                  <Link
                    href="/wawasan/beli-putus-vs-sewa-saas-erp"
                    className="hover:text-[#111111] transition-colors"
                  >
                    Wawasan
                  </Link>
                  <Link
                    href="/kebijakan-privasi"
                    className="hover:text-[#111111] transition-colors"
                  >
                    Privasi
                  </Link>
                  <Link
                    href="/syarat-ketentuan"
                    className="hover:text-[#111111] transition-colors"
                  >
                    Ketentuan
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <SignificaFloatingWhatsApp />
    </>
  );
}
