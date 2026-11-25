"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const PROCESS_HIGHLIGHTS = [
  "01 · RAB & cetak biru terkunci sebelum pengerjaan dimulai",
  "02 · Perjanjian kerahasiaan (NDA) & kontrak SLA tertulis",
  "03 · Server uji coba langsung yang bisa dipantau tiap minggu",
  "04 · Pelatihan staf non-IT, penyerahan kode 100% & BAST resmi",
];

export function SignificaAboutAndFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const baseId = useId();

  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan sistem atau website untuk bisnis kami."
  );

  return (
    <div className="bg-[#F7F7F7]">
      {/* 1. Significa Asymmetric 50% Left About Block */}
      <section
        id="tentang"
        className="scroll-mt-20 border-b border-[#E8E8E8] py-16 lg:py-24"
      >
        <div className="sig-container">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
              <span className="text-[#6F6F71] block">Tentang cara kerja.</span>
              <span className="text-[#171717] block">Transparan dan terukur.</span>
            </h2>

            <p className="text-[20px] sm:text-[22px] leading-[1.48] text-[#6F6F71]">
              Tanpa birokrasi agensi yang rumit. Anda berbicara langsung dengan tim engineer inti kami dari hari pertama hingga peluncuran resmi—dengan pembayaran bertahap berbasis progres.
            </p>

            <ul className="space-y-2.5 pt-1 text-[15.5px] text-[#171717]">
              {PROCESS_HIGHLIGHTS.map((line) => (
                <li key={line} className="font-medium">
                  {line}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackWhatsAppClick({
                    source: "significa_about_cta",
                    label: "konsultasi_langsung",
                  })
                }
                className="sig-btn-primary"
              >
                <span>Konsultasi via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link href="/audit-gratis" className="sig-btn-outline">
                <span>Hitung estimasi biaya</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Significa 2-Column Clean Accordion FAQ */}
      <section id="faq" className="scroll-mt-20 py-16 lg:py-24">
        <div className="sig-container space-y-10">
          <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#171717]">
            Pertanyaan umum.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 items-start">
            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              const panelId = `${baseId}-${item.id}`;
              const btnId = `${panelId}-btn`;

              return (
                <div
                  key={item.id}
                  className="border-t border-[#E8E8E8] last:border-b lg:[&:nth-last-child(2)]:border-b"
                >
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full py-5 flex items-start justify-between gap-4 text-left cursor-pointer focus:outline-none group"
                  >
                    <span className="text-[18px] sm:text-[19px] font-normal leading-[1.38] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6F6F71] shrink-0 mt-1 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#171717]" : ""
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
                        transition={{ duration: 0.22, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 pr-6 space-y-2.5">
                          <p className="text-[15px] leading-relaxed text-[#6F6F71]">
                            {item.answer}
                          </p>
                          <div className="inline-flex items-center px-3 py-1 rounded-[10px] bg-white border border-[#E8E8E8] text-xs font-medium text-[#171717]">
                            {item.highlight}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
