"use client";

import { useState } from "react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: "Konsultasi Infrastruktur & Cloud",
      text: "Halo Tim TechRoos, saya ingin berkonsultasi mengenai infrastruktur cloud & pencegahan downtime sistem kami.",
    },
    {
      title: "Otomasi WhatsApp API & Workflow",
      text: "Halo Tim TechRoos, saya ingin menanyakan integrasi resmi Meta WhatsApp Cloud API dan otomatisasi sistem.",
    },
    {
      title: "Audit Keamanan & Custom SLA",
      text: "Halo Tim TechRoos, saya ingin menjadwalkan audit sistem dan mendiskusikan paket SLA 99.9%.",
    },
  ];

  const handleOpenChat = (customText?: string) => {
    const text =
      customText ||
      "Halo Tim TechRoos, saya ingin mendiskusikan kebutuhan arsitektur dan sistem IT kami.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Option Popover Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] rounded-2xl bg-[#121318] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] p-4 text-white animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold">TechRoos Direct Support</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-zinc-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-zinc-400 py-3 leading-relaxed">
            Pilih topik konsultasi di bawah untuk terhubung langsung dengan tim engineer kami:
          </p>

          <div className="space-y-2">
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleOpenChat(opt.text)}
                className="w-full text-left p-2.5 rounded-xl bg-white/[0.04] hover:bg-orange-500/10 border border-white/[0.04] hover:border-orange-500/30 text-xs text-zinc-200 transition-all flex items-center justify-between group"
              >
                <span>{opt.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-orange-400 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-zinc-500">
            <span>Rata-rata respons: &lt; 15 menit</span>
            <button
              type="button"
              onClick={() => handleOpenChat()}
              className="text-orange-400 font-medium hover:underline"
            >
              Chat Langsung
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)] hover:scale-105 transition-all duration-300"
        aria-label="Konsultasi WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0A0A0C]" />
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
}
