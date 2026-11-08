"use client";

import { useState } from "react";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveFloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: "Konsultasi SIAKAD Sekolah Anti-Down",
      text: "Halo Tim Abinest, saya ingin berkonsultasi mengenai pembuatan/upgrade sistem SIAKAD sekolah kami agar bebas down saat ujian.",
    },
    {
      title: "Jasa Website Next.js 15 Super Cepat",
      text: "Halo Tim Abinest, saya ingin menanyakan pembuatan website institusi/perusahaan dengan kecepatan tinggi dan SEO optimal.",
    },
    {
      title: "Otomasi WhatsApp Resmi Meta",
      text: "Halo Tim Abinest, saya ingin integrasi Meta WhatsApp Cloud API untuk otomatisasi tagihan SPP dan notifikasi absensi.",
    },
  ];

  const handleOpenChat = (customText?: string) => {
    const text =
      customText ||
      "Halo Tim Abinest, saya ingin berkonsultasi mengenai kebutuhan rekayasa sistem dan website kami.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Option Popover Card in Clean Light Theme */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-2xl bg-white border border-slate-200 shadow-2xl p-4 text-slate-800 animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-900">Abinest Technical Support</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-slate-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-600 py-3 leading-relaxed">
            Pilih topik konsultasi di bawah untuk langsung terhubung dengan software engineer kami via WhatsApp:
          </p>

          <div className="space-y-2">
            {quickOptions.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleOpenChat(opt.text)}
                className="w-full text-left p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 border border-slate-200/80 hover:border-orange-200 text-xs font-medium text-slate-800 transition-all flex items-center justify-between group"
              >
                <span>{opt.title}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-orange-600 transition-colors" />
              </button>
            ))}
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Respons cepat: &lt; 15 menit</span>
            <button
              type="button"
              onClick={() => handleOpenChat()}
              className="text-orange-600 font-bold hover:underline"
            >
              Chat Langsung
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-[0_8px_25px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.55)] hover:scale-105 transition-all duration-300"
        aria-label="Konsultasi WhatsApp Abinest"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
        <MessageCircle className="w-6 h-6 fill-current" />
      </button>
    </div>
  );
}
