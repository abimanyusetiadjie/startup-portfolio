"use client";

import { ArrowUpRight, MessageSquare, Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveContactSection() {
  const { lang } = useLanguage();
  const waNumber = "6281234567890";

  const getWaLink = (message: string) => {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const defaultWaUrl = getWaLink(
    lang === "id"
      ? "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website / sistem digital untuk institusi kami."
      : "Hello Abinest Studio, I would like to consult regarding a digital system / website for our organization."
  );

  const quickTemplates = [
    {
      label: lang === "id" ? "SIAKAD & Sistem Sekolah" : "School SIS & CBT",
      message:
        "Halo Abinest Studio, saya ingin konsultasi mengenai implementasi sistem SIAKAD / portal sekolah anti-down.",
    },
    {
      label: lang === "id" ? "Website Institusi / Profil" : "Corporate Web Next.js 15",
      message:
        "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website performa tinggi Next.js 15.",
    },
    {
      label: lang === "id" ? "Custom ERP & Bot Otomasi" : "Custom ERP & WhatsApp Bot",
      message:
        "Halo Abinest Studio, saya ingin konsultasi mengenai custom ERP / integrasi bot WhatsApp Meta resmi.",
    },
  ];

  return (
    <section
      id="kontak"
      className="bg-[#080B11] text-white py-16 sm:py-24 font-sans border-t border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="rounded-2xl sm:rounded-3xl bg-[#0F1420] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-semibold tracking-widest text-emerald-400 uppercase">
              {lang === "id" ? "KONSULTASI & DISKUSI TEKNIS" : "PROJECT INQUIRY & SCOPING"}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 leading-tight">
              {lang === "id"
                ? "Diskusikan rancangan sistem atau website Anda bersama kami."
                : "Scope your next system with our engineering team."}
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed font-normal">
              {lang === "id"
                ? "Dapatkan sesi scoping arsitektur gratis dan estimasi biaya transparan tanpa komitmen. Kami siap membantu Anda memilih solusi teknologi yang paling efisien dan tahan lama."
                : "Schedule a complimentary technical scoping session and upfront cost estimate with zero obligation. We will help you select the optimal architecture for your long-term needs."}
            </p>
          </div>

          {/* Quick Chat Topic Pills */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <span className="text-xs font-mono text-zinc-400 block mb-3">
              {lang === "id"
                ? "PILIH TOPIK CHAT CEPAT VIA WHATSAPP:"
                : "QUICK SCOPING TEMPLATES:"}
            </span>
            <div className="flex flex-wrap gap-2.5">
              {quickTemplates.map((t, idx) => (
                <a
                  key={idx}
                  href={getWaLink(t.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-medium text-zinc-200 hover:text-white transition-all"
                >
                  <span>{t.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Primary Action Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 block">
                {lang === "id"
                  ? "Respon Cepat (Senin – Sabtu, 08:00 – 21:00 WIB)"
                  : "Typical Response < 15 Mins (Mon – Sat, 08:00 – 21:00 GMT+7)"}
              </span>
              <span className="text-xs text-zinc-400 block">
                hello@abinest.id • +62 812-3456-7890 • Jakarta &amp; Surabaya
              </span>
            </div>

            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/50 shrink-0"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>
                {lang === "id"
                  ? "Buka WhatsApp & Diskusi Sekarang"
                  : "Chat on WhatsApp Now"}
              </span>
              <ArrowUpRight className="w-4 h-4 text-zinc-950" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
