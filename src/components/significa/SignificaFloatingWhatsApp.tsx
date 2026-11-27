"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/grove/WhatsAppIcon";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const QUICK_TOPICS = [
  {
    label: "Website Bisnis",
    meta: "Mulai Rp1,5 jt · 7–14 hari",
    message:
      "Halo Tim Abinest, saya ingin diskusi pembuatan Website Bisnis cepat (<0,8 detik).",
  },
  {
    label: "ERP, SIAKAD & POS",
    meta: "Mulai Rp4 jt · Rp0/staf",
    message:
      "Halo Tim Abinest, saya ingin diskusi pembuatan sistem kustom ERP / SIAKAD / Kasir POS.",
  },
  {
    label: "Automasi AI & WhatsApp",
    meta: "Mulai Rp5 jt · Meta API",
    message:
      "Halo Tim Abinest, saya ingin diskusi penerapan Automasi AI WhatsApp resmi & OCR faktur.",
  },
];

export function SignificaFloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const directWaHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan proyek digital kami."
  );

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 print:hidden flex flex-col items-end gap-3">
      {/* Interactive Expanding Quick-Chat Card */}
      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Pintasan chat WhatsApp Abinest"
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.94 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[300px] sm:w-[320px] rounded-[20px] bg-[#F7F7F7] border border-[#E8E8E8] shadow-[0_24px_64px_rgba(23,23,23,0.2)] overflow-hidden"
          >
            {/* Dark Swiss Header */}
            <div className="px-5 py-4 bg-[#171717] text-[#F7F7F7] flex items-center justify-between gap-3">
              <div>
                <div className="text-[14px] font-semibold leading-tight">
                  Abinest Engineer
                </div>
                <div className="text-[11.5px] text-white/65 mt-0.5">
                  Respon &lt; 15 menit · Langsung ke tim inti
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Tutup pintasan WhatsApp"
                className="w-7 h-7 rounded-[10px] bg-white/10 hover:bg-white/20 text-white inline-flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Topic Shortcuts */}
            <div className="p-3.5 space-y-2">
              {QUICK_TOPICS.map((topic) => (
                <a
                  key={topic.label}
                  href={buildConsultationWaUrl(topic.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      source: "floating_wa_topic",
                      service: topic.label,
                    });
                    setOpen(false);
                  }}
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-[14px] bg-white border border-[#E8E8E8] hover:border-[#FFD124] hover:ring-2 hover:ring-[#FFD124]/25 transition-all"
                >
                  <div>
                    <div className="text-[13.5px] font-medium text-[#171717]">
                      {topic.label}
                    </div>
                    <div className="text-[11px] font-mono text-[#6F6F71]">
                      {topic.meta}
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] transition-colors shrink-0" />
                </a>
              ))}

              <a
                href={directWaHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({
                    source: "floating_wa_direct",
                    label: "chat_langsung",
                  });
                  setOpen(false);
                }}
                className="sig-btn-primary w-full !h-[42px] !text-[13.5px] mt-1"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat langsung via WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Circular Floating Expanding WhatsApp Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label={open ? "Tutup menu WhatsApp" : "Buka chat WhatsApp Abinest"}
        className="group relative inline-flex items-center h-[56px] rounded-full bg-[#171717] text-[#F7F7F7] border border-white/15 shadow-[0_14px_36px_rgba(23,23,23,0.3)] hover:ring-4 hover:ring-[#FFD124]/45 active:scale-[0.96] transition-all duration-300 cursor-pointer"
      >
        {/* Expanding Label on Desktop Hover when closed */}
        {!open && (
          <span className="hidden sm:inline-block max-w-0 overflow-hidden whitespace-nowrap text-[14px] font-medium text-[#F7F7F7] opacity-0 group-hover:max-w-[145px] group-hover:pl-5 group-hover:pr-1 group-hover:opacity-100 transition-all duration-300">
            Chat WhatsApp
          </span>
        )}

        {/* Crisp Circular 56x56 Core Icon */}
        <span className="relative w-[56px] h-[56px] rounded-full inline-flex items-center justify-center shrink-0">
          {open ? (
            <X className="w-5 h-5 text-[#F7F7F7]" />
          ) : (
            <WhatsAppIcon className="w-6 h-6 text-[#F7F7F7]" />
          )}
        </span>
      </button>
    </div>
  );
}
