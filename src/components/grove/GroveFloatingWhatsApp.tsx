"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFloatingWhatsApp() {
  const { lang } = useLanguage();
  const [isTooltipDismissed, setIsTooltipDismissed] = useState(false);

  // Nomor WA dan pre-filled message resmi
  const waNumber = "6281234567890";
  const defaultMessage =
    lang === "id"
      ? "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website / sistem digital."
      : "Hello Abinest Studio, I would like to consult about a website / digital system project.";

  const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-2.5 font-sans pointer-events-none">
      {/* Interactive Tooltip Card (Bisa di-dismiss atau klik langsung) */}
      <AnimatePresence>
        {!isTooltipDismissed && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto max-w-[260px] sm:max-w-[290px] p-3.5 rounded-2xl bg-[#0F172A]/95 text-white border border-white/15 shadow-2xl backdrop-blur-xl relative"
          >
            {/* Tombol Close Tooltip */}
            <button
              type="button"
              onClick={() => setIsTooltipDismissed(true)}
              className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-white p-1 rounded-full transition-colors"
              aria-label="Tutup pesan bantuan WhatsApp"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Header Tooltip */}
            <div className="flex items-center gap-2 mb-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-wider text-emerald-400 uppercase">
                {lang === "id" ? "Online • Respon Cepat" : "Online • Fast Response"}
              </span>
            </div>

            {/* Isi Pesan */}
            <p className="text-xs text-zinc-200 leading-relaxed font-normal mb-2.5">
              {lang === "id"
                ? "Ada kebutuhan website, SIAKAD, atau otomasi sistem? Konsultasikan langsung via WA."
                : "Need a website, school SIS, or custom system? Chat directly on WhatsApp."}
            </p>

            {/* Quick Action Link */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <span>{lang === "id" ? "Mulai Chat Konsultan" : "Chat Consultant"}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating WhatsApp Button */}
      <motion.a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi Abinest Studio melalui WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white shadow-xl shadow-emerald-950/40 border border-white/25 focus:outline-none focus:ring-4 focus:ring-emerald-400/30 transition-all duration-300"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping -z-10 opacity-75" />

        {/* Official WhatsApp Vector Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white drop-shadow-sm transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.59L5.06 16.28C4.24 14.97 3.8 13.46 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.05 20.15ZM16.57 14.46C16.32 14.33 15.1 13.73 14.88 13.65C14.65 13.57 14.49 13.53 14.32 13.78C14.15 14.03 13.67 14.6 13.53 14.77C13.38 14.93 13.24 14.95 12.99 14.83C12.74 14.7 11.94 14.44 10.99 13.6C10.25 12.94 9.75 12.13 9.6 11.88C9.46 11.63 9.59 11.49 9.71 11.37C9.82 11.26 9.96 11.08 10.08 10.94C10.21 10.8 10.25 10.7 10.33 10.53C10.42 10.37 10.37 10.22 10.31 10.1C10.25 9.97 9.75 8.75 9.55 8.24C9.35 7.75 9.14 7.82 8.99 7.81L8.51 7.8C8.34 7.8 8.07 7.86 7.84 8.11C7.62 8.36 6.98 8.95 6.98 10.17C6.98 11.39 7.87 12.56 8 12.73C8.12 12.9 9.75 15.4 12.24 16.48C12.83 16.74 13.29 16.89 13.65 17C14.24 17.19 14.78 17.16 15.21 17.1C15.69 17.03 16.69 16.5 16.9 15.91C17.11 15.33 17.11 14.83 17.05 14.73C16.98 14.62 16.82 14.58 16.57 14.46Z" />
        </svg>

        {/* Small Online Dot on Button */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full" />
      </motion.a>
    </aside>
  );
}
