"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const ENGINEERING_STANDARDS = [
  "Next.js",
  "Astro",
  "Laravel",
  "FastAPI",
  "PostgreSQL",
  "Python AI",
];

export function SignificaAboutAndFaq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();
  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan sistem digital untuk bisnis kami."
  );

  return (
    <div id="tentang" className="scroll-mt-20 bg-white">
      {/* 1. Quiet Technology Stack Strip on Soft Slate */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="sig-container py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          {ENGINEERING_STANDARDS.map((tech) => (
            <span
              key={tech}
              className="text-[15px] sm:text-[16.5px] font-semibold tracking-[-0.015em] text-[#94A3B8] hover:text-[#0F172A] transition-colors select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Serene 12-Column Asymmetric FAQ */}
      <section id="faq" className="scroll-mt-20 py-16 lg:py-24">
        <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-3.5">
            <p className="text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D7A67]">
              FAQ
            </p>
            <h2 className="text-[clamp(1.75rem,2vw+1rem,2.5rem)] font-bold tracking-[-0.025em] leading-[1.12] text-[#0F172A]">
              Pertanyaan umum.
            </h2>
            <p className="text-[15px] leading-relaxed text-[#475569]">
              Jawaban ringkas seputar hak milik kode, estimasi waktu, dan skema
              biaya pengerjaan.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  source: "faq_sidebar_wa",
                  label: "tanya_engineer",
                })
              }
              className="sig-link inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[#0D7A67] pt-1"
            >
              <span>Tanya langsung ke engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const btnId = `${panelId}-btn`;

              return (
                <div key={item.id}>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full py-5 sm:py-6 flex items-start justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                  >
                    <span
                      className={`text-[16.5px] sm:text-[17.5px] font-semibold leading-[1.4] transition-colors ${
                        isOpen
                          ? "text-[#0D7A67]"
                          : "text-[#0F172A] group-hover:text-[#0D7A67]"
                      }`}
                    >
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen
                          ? "rotate-180 text-[#0D7A67]"
                          : "text-[#64748B]"
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={btnId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pr-8 text-[15px] leading-[1.65] text-[#475569]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Authoritative Dark Slate Closing CTA Card (Stripe / Xendit B2B Conversion Closer) */}
      <section className="pb-16 lg:pb-24">
        <div className="sig-container">
          <div className="rounded-[22px] bg-[#0F172A] text-white px-7 py-10 sm:px-12 sm:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl space-y-3">
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.08em] text-[#34D399]">
                Mulai Diskusi
              </p>
              <h2 className="text-[clamp(1.65rem,2vw+0.9rem,2.4rem)] font-bold tracking-[-0.025em] leading-[1.15] text-white">
                Siap bangun sistem yang benar-benar bekerja untuk bisnis Anda?
              </h2>
              <p className="text-[15.5px] leading-relaxed text-[#94A3B8]">
                Diskusikan kebutuhan Anda langsung bersama tim engineer Abinest
                — estimasi biaya dan linimasa transparan sejak awal.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "closing_cta_banner",
                    label: "konsultasi_wa",
                  })
                }
                className="sig-btn-primary !h-[48px] !px-6"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 h-[48px] px-5 rounded-[12px] bg-white/10 hover:bg-white/15 text-white border border-white/15 text-[15px] font-medium transition-colors"
              >
                <span>Coba Demo Interaktif</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
