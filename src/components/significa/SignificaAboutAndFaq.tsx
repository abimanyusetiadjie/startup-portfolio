"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";

const ENGINEERING_STANDARDS = [
  "Next.js",
  "Astro",
  "Laravel",
  "FastAPI",
  "PostgreSQL",
  "Meta API",
];

export function SignificaAboutAndFaq() {
  // Collapsed by default so homepage stays ultra-clean and scannable
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    <div id="tentang" className="scroll-mt-20 bg-[#F7F7F7]">
      {/* 1. Compact Monochrome Stack Strip (1 Row, Zero Fluff) */}
      <div className="sig-container py-12 lg:py-14 text-center space-y-5 border-b border-[#E8E8E8]">
        <p className="font-mono text-[11px] uppercase tracking-wider text-[#6F6F71]">
          Teknologi produksi yang kami pakai di proyek nyata
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 sm:gap-x-14">
          {ENGINEERING_STANDARDS.map((tech) => (
            <span
              key={tech}
              className="text-[17px] sm:text-[20px] font-semibold tracking-[-0.02em] text-[#171717]/45 hover:text-[#171717] transition-colors select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 2. Crisp 2-Column Accordion FAQ */}
      <section id="faq" className="scroll-mt-20 py-14 lg:py-20">
        <div className="sig-container space-y-8">
          <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,2.75rem)] font-semibold tracking-[-0.015em] leading-[1.12] text-[#171717]">
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
                    <span className="text-[17px] sm:text-[18px] font-normal leading-[1.35] text-[#171717] group-hover:text-[#6F6F71] transition-colors">
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
                        <div className="pb-5 pr-6 space-y-2.5">
                          <p className="text-[14.5px] leading-relaxed text-[#6F6F71]">
                            {item.answer}
                          </p>
                          <div className="inline-flex items-center px-2.5 py-1 rounded-[10px] bg-white border border-[#E8E8E8] text-[11.5px] font-mono text-[#171717]">
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
