"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Copy } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import {
  ABINEST_WHATSAPP_NUMBER,
  buildConsultationWaUrl,
} from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import { SignificaFloatingWhatsApp } from "./SignificaFloatingWhatsApp";
import { ClayReveal } from "./ClayReveal";

const CONTACT_EMAIL = "abinest.id@gmail.com";

const STUDIO_LINKS = [
  { label: "Karya & Studi Kasus", href: "/karya" },
  { label: "Harga & Skema", href: "/harga" },
  { label: "Demo Interaktif", href: "/demo" },
  { label: "Wawasan & Panduan", href: "/wawasan" },
  { label: "Tentang Abinest", href: "/tentang" },
];

const SERVICE_LINKS = [
  { label: "Website Jakarta & Nasional", href: "/jasa-pembuatan-website-jakarta" },
  { label: "Website Surabaya & Jatim", href: "/jasa-pembuatan-website-surabaya" },
  { label: "Sistem ERP & WMS", href: "/jasa-pembuatan-sistem-erp" },
  { label: "Aplikasi Kasir POS", href: "/jasa-pembuatan-aplikasi-kasir-pos" },
  { label: "SIAKAD & Ujian CBT", href: "/jasa-pembuatan-siakad-sekolah" },
  { label: "Automasi WhatsApp & AI", href: "/jasa-automasi-whatsapp" },
];

export function SignificaFooter() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<number | null>(null);
  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya siap mendiskusikan kebutuhan proyek digital untuk bisnis atau project kami."
  );

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = CONTACT_EMAIL;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <footer
        id="kontak"
        className="scroll-mt-24 bg-[#F4F4F6] text-[#111111] border-t border-[#E5E7EB] pt-16 sm:pt-20 lg:pt-24 pb-12"
      >
        <ClayReveal className="clay-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
            {/* Left 5 Cols: Brand Identity + Direct Executive Contact */}
            <div className="lg:col-span-5 space-y-7">
              <div className="space-y-3">
                <Link
                  href="/"
                  aria-label="Abinest Beranda"
                  className="inline-flex items-center"
                >
                  <AbinestLogo size="md" variant="light" />
                </Link>
                <p className="text-[14.5px] leading-[1.6] text-[#6B7280] max-w-[360px]">
                  Studio produk digital Indonesia untuk website modern, aplikasi
                  bisnis kustom, dan automasi WhatsApp resmi dengan 100% hak
                  milik kode.
                </p>
              </div>

              <div className="space-y-3.5 pt-1">
                <h2 className="text-[clamp(1.75rem,2.2vw+0.8rem,2.4rem)] font-semibold tracking-[-0.03em] leading-[1.12] text-[#111111]">
                  Mari Berdiskusi
                </h2>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-[19px] sm:text-[22px] font-medium text-[#111111] underline underline-offset-8 decoration-[#C4C7CE] hover:decoration-[#111111] transition-colors break-all"
                    >
                      {CONTACT_EMAIL}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Salin alamat email Abinest"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D4D6DC] bg-white hover:border-[#111111] text-[12px] font-medium text-[#4B5563] hover:text-[#111111] transition-all cursor-pointer active:scale-[0.97]"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#059669]" />
                          <span className="text-[#059669]">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin</span>
                        </>
                      )}
                    </button>
                    <span className="sr-only" aria-live="polite">
                      {copied ? "Alamat email tersalin ke clipboard" : ""}
                    </span>
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
                      className="text-[15.5px] font-medium text-[#4B5563] hover:text-[#111111] transition-colors"
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
                    <span>Mulai proyek via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right 7 Cols: Structured 3-Column Architectural Directory */}
            <div className="lg:col-span-7 lg:pl-6 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
              {/* Col 1: Studio */}
              <div className="space-y-4">
                <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-[#6B7280]">
                  Studio
                </h3>
                <ul className="space-y-2.5 text-[14.5px] font-medium text-[#111111]">
                  {STUDIO_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 2: Layanan */}
              <div className="space-y-4">
                <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-[#6B7280]">
                  Layanan
                </h3>
                <ul className="space-y-2.5 text-[14.5px] font-medium text-[#111111]">
                  {SERVICE_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="hover:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Col 3: Operasional */}
              <div className="col-span-2 sm:col-span-1 space-y-4 pt-4 sm:pt-0 border-t sm:border-t-0 border-[#E2E4E9]">
                <h3 className="text-[11.5px] font-semibold uppercase tracking-[0.09em] text-[#6B7280]">
                  Operasional
                </h3>
                <dl className="grid grid-cols-2 sm:grid-cols-1 gap-x-6 gap-y-3.5 text-[14px]">
                  <div>
                    <dt className="font-semibold text-[#111111]">Jakarta</dt>
                    <dd className="text-[#6B7280]">DKI Jakarta, ID</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#111111]">Surabaya</dt>
                    <dd className="text-[#6B7280]">Jawa Timur, ID</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#111111]">Jam Kerja</dt>
                    <dd className="text-[#6B7280]">Sen–Sab, 08–17 WIB</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#111111]">Cakupan</dt>
                    <dd className="text-[#6B7280]">Seluruh Indonesia</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Bottom Legal Row (extra right padding on lg/mobile to clear floating WhatsApp icon cleanly) */}
          <div className="mt-14 pt-7 border-t border-[#E2E4E9] flex flex-col sm:flex-row sm:items-center justify-between gap-4 pr-16 lg:pr-14 text-[13.5px] text-[#6B7280]">
            <p>© {year} Abinest Digital Systems · abinest.id</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
        </ClayReveal>
      </footer>

      <SignificaFloatingWhatsApp />
    </>
  );
}
