"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";

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
    "Halo Tim Abinest, saya ada pertanyaan mengenai kebutuhan sistem digital perusahaan kami."
  );

  return (
    <div id="tentang" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Quiet Monochrome Stack Line */}
      <div className="border-y border-[#E5E5E5]">
        <div className="sig-container py-9 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          {ENGINEERING_STANDARDS.map((tech) => (
            <span
              key={tech}
              className="text-[15px] sm:text-[17px] font-medium tracking-[-0.015em] text-[#171717]/45 hover:text-[#171717] transition-colors select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Serene 12-Column Asymmetric FAQ (Sticky Left Title + Clean Single-Column Accordion) */}
      <section id="faq" className="scroll-mt-20 py-16 lg:py-24">
        <div className="sig-container grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <h2 className="text-[clamp(1.75rem,2vw+1.1rem,2.65rem)] font-semibold tracking-[-0.02em] leading-[1.12] text-[#171717]">
              Pertanyaan umum.
            </h2>
            <p className="text-[15.5px] leading-relaxed text-[#6F6F71]">
              Hal paling sering ditanyakan sebelum memulai pengerjaan sistem.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="sig-link inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#171717] pt-1"
            >
              <span>Tanya langsung ke engineer</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
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
                    <span className="text-[16.5px] sm:text-[18px] font-medium leading-[1.35] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#6F6F71] shrink-0 mt-0.5 transition-transform duration-200 ${
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
                        <p className="pb-6 pr-8 text-[15px] leading-[1.65] text-[#6F6F71]">
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
    </div>
  );
}
