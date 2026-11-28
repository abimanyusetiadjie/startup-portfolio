"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/components/grove/faq-data";
import { ClayReveal } from "./ClayReveal";

export function SignificaAboutAndFaq() {
  const [openId, setOpenId] = useState<string | null>(null);
  const baseId = useId();

  return (
    /* Clay Signature High-Contrast Dark Charcoal FAQ Band (#111318) right above the light-gray Footer */
    <section
      id="faq"
      className="scroll-mt-24 bg-[#111318] text-white py-20 lg:py-28"
    >
      <div className="clay-container space-y-10 lg:space-y-12">
        <ClayReveal className="max-w-2xl space-y-3">
          <h2 className="text-[clamp(1.85rem,2.6vw+0.8rem,2.75rem)] font-semibold tracking-[-0.025em] leading-[1.15] text-white">
            Pertanyaan umum
          </h2>
          <p className="text-[16px] text-[#9CA3AF]">
            Jawaban ringkas atas hal yang paling sering ditanyakan sebelum
            memulai project bersama Abinest.
          </p>
        </ClayReveal>

        <ClayReveal delay={0.05} className="divide-y divide-white/10 border-t border-b border-white/10">
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
                  className="w-full py-6 sm:py-7 flex items-center justify-between gap-6 text-left cursor-pointer focus:outline-none group"
                >
                  <span className="text-[17px] sm:text-[19.5px] font-medium leading-[1.4] text-white group-hover:text-white/75 transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white/50 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
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
                      <p className="pb-7 pr-8 max-w-3xl text-[15.5px] leading-[1.7] text-[#A1A1AA]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </ClayReveal>
      </div>
    </section>
  );
}
