"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  SignificaInsightsSection,
  SignificaAiPromptStrip,
} from "./SignificaInsightsAndAiStrip";

const CORE_SERVICES_STRIP = [
  {
    title: "Website bisnis.",
    price: "Mulai Rp1,5 juta · 7–14 hari",
    desc: "Web profil & landing page muat <0,8 detik, siap SEO Google, 100% hak milik.",
    cta: "Detail Website",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    title: "Sistem ERP & SIAKAD.",
    price: "Mulai Rp4 juta · Rp0/staf",
    desc: "Stok multi-gudang, kasir POS, hingga portal CBT sesuai alur kerja tim.",
    cta: "Detail ERP & SIAKAD",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    title: "Automasi AI & WhatsApp.",
    price: "Mulai Rp5 juta · Meta API Resmi",
    desc: "Asisten CS AI 24/7 terhubung stok gudang & scan faktur otomatis via OCR.",
    cta: "Detail AI & WhatsApp",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaAboutAndFaq() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);
  const baseId = useId();

  const waHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan proyek digital kami."
  );

  return (
    <div className="bg-[#F7F7F7]">
      {/* 1. Asymmetric 50% Left About Block (Ultra-Concise) */}
      <section id="tentang" className="scroll-mt-20 py-14 lg:py-24">
        <div className="sig-container">
          <div className="max-w-xl space-y-6">
            <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
              <span className="text-[#6F6F71] block">Tentang kami.</span>
              <span className="text-[#171717] block">
                Langsung ke engineer inti.
              </span>
            </h2>

            <p className="text-[20px] sm:text-[23px] leading-[1.42] text-[#6F6F71]">
              Tanpa birokrasi agensi. RAB terkunci di awal, progres mingguan
              transparan, kode 100% diserahkan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
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
                className="sig-btn-outline"
              >
                <span>Chat WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link href="/audit-gratis" className="sig-btn-outline">
                <span>Hitung estimasi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3-Column Vertical-Bordered Capabilities Strip */}
      <div className="border-y border-[#E8E8E8]">
        <div className="sig-container grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E8E8E8]">
          {CORE_SERVICES_STRIP.map((srv, idx) => (
            <div
              key={srv.title}
              className={`py-10 lg:py-12 flex flex-col justify-between gap-7 ${
                idx === 0
                  ? "lg:pr-8"
                  : idx === 1
                  ? "lg:px-8"
                  : "lg:pl-8"
              }`}
            >
              <div className="space-y-2.5">
                <h3 className="text-[24px] font-medium tracking-[-0.015em] text-[#171717]">
                  {srv.title}
                </h3>
                <div className="text-[13px] font-mono text-[#171717]">
                  {srv.price}
                </div>
                <p className="text-[17.5px] leading-[1.45] text-[#6F6F71]">
                  {srv.desc}
                </p>
              </div>

              <div>
                <Link href={srv.href} className="sig-btn-outline">
                  <span>{srv.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Insights 3-Row Strip + Honest Monochrome Tech Strip */}
      <SignificaInsightsSection />

      {/* 4. Crisp 2-Column Accordion FAQ */}
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
                    <span className="text-[18px] sm:text-[19px] font-normal leading-[1.35] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
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
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pr-6 space-y-2.5">
                          <p className="text-[15px] leading-relaxed text-[#6F6F71]">
                            {item.answer}
                          </p>
                          <div className="inline-flex items-center px-2.5 py-1 rounded-[10px] bg-white border border-[#E8E8E8] text-[12px] font-mono text-[#171717]">
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

      {/* 5. AI Prompt Strip */}
      <SignificaAiPromptStrip />
    </div>
  );
}
