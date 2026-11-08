"use client";

import { useState } from "react";
import { MessageSquare, ArrowUpRight, ShieldCheck, Mail, Phone, MapPin, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveAmberContactSection() {
  const { lang } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [orgName, setOrgName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [serviceCategory, setServiceCategory] = useState("siakad");
  const [projectSummary, setProjectSummary] = useState("");

  const waNumber = "6281234567890";

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Abinest Studio,%0A%0ASaya ingin konsultasi proyek:%0A• Nama: ${encodeURIComponent(fullName)}%0A• Institusi/Bisnis: ${encodeURIComponent(orgName)}%0A• Kategori: ${encodeURIComponent(serviceCategory)}%0A• Ringkasan: ${encodeURIComponent(projectSummary || "Konsultasi sistem")}%0A• No WA: ${encodeURIComponent(whatsappNumber)}`;
    window.open(`https://wa.me/${waNumber}?text=${message}`, "_blank");
  };

  const defaultWaUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    lang === "id"
      ? "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website / sistem digital untuk institusi kami."
      : "Hello Abinest Studio, I would like to consult regarding digital system engineering for our organization."
  )}`;

  return (
    <section
      id="kontak"
      className="bg-[#06080D] text-white py-16 sm:py-24 font-sans border-b border-white/10 relative overflow-hidden"
    >
      {/* Radiant Warm Amber Side Light Flares (Exact visual signature from Reference Image) */}
      <div className="absolute top-1/2 -left-20 -translate-y-1/2 w-[450px] h-[550px] bg-gradient-to-r from-[#F59E0B]/25 via-[#EA580C]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[450px] h-[550px] bg-gradient-to-l from-[#F59E0B]/25 via-[#EA580C]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-xs font-mono font-semibold tracking-widest text-amber-400 uppercase">
            {lang === "id" ? "MULAI KONSULTASI PROYEK" : "START A CONVERSATION"}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-2">
            Start a Project with Us.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mt-3 font-normal max-w-lg mx-auto leading-relaxed">
            {lang === "id"
              ? "Diskusikan kebutuhan arsitektur sistem atau website Anda. Dapatkan rancangan solusi dan estimasi biaya transparan tanpa komitmen."
              : "Let's scope your next digital system. Complimentary architectural discovery and upfront pricing with zero obligation."}
          </p>
        </div>

        {/* Executive Glowing Contact Card (Matches Reference Form Exactly) */}
        <div className="rounded-3xl bg-[#0B0E17]/95 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative">
          {/* Subtle top amber accent line */}
          <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B] to-transparent" />

          <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono">
                  {lang === "id" ? "NAMA LENGKAP & JABATAN *" : "FULL NAME & TITLE *"}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="contoh: Bpk. Hendra (Kepala Yayasan)"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono">
                  {lang === "id" ? "NAMA SEKOLAH / BISNIS *" : "ORGANIZATION / INSTITUTION *"}
                </label>
                <input
                  type="text"
                  required
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="contoh: SMA Unggulan / PT Retail Nusantara"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono">
                  {lang === "id" ? "NOMOR WHATSAPP AKTIF *" : "WHATSAPP NUMBER *"}
                </label>
                <input
                  type="tel"
                  required
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="contoh: 0812-3456-7890"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono">
                  {lang === "id" ? "KATEGORI KEBUTUHAN SISTEM" : "SYSTEM CATEGORY"}
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0E17] border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                >
                  <option value="siakad">SIAKAD &amp; Ujian CBT Anti-Down (Sekolah/Yayasan)</option>
                  <option value="website">Website Institusi / Korporat Next.js 15</option>
                  <option value="erp">Custom ERP Stok &amp; Kasir Multi-Cabang</option>
                  <option value="whatsapp">Otomasi WhatsApp Resmi Meta Cloud API</option>
                  <option value="lainnya">Konsultasi Sistem Kustom Lainnya</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1.5 font-mono">
                {lang === "id" ? "RINGKASAN KEBUTUHAN / KENDALA SAAT INI" : "PROJECT BRIEF / REQUIREMENTS"}
              </label>
              <textarea
                rows={3}
                value={projectSummary}
                onChange={(e) => setProjectSummary(e.target.value)}
                placeholder="Ceritakan kendala sistem Anda saat ini atau target yang ingin dicapai..."
                className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-xs sm:text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-zinc-400">
                Respon Cepat &lt; 15 Menit (Senin – Sabtu, 08:00 – 21:00 WIB)
              </span>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F59E0B] to-[#EA580C] text-zinc-950 font-bold text-xs sm:text-sm hover:brightness-110 transition-all shadow-xl shadow-orange-500/25 cursor-pointer"
              >
                <span>{lang === "id" ? "Kirim via WhatsApp Langsung" : "Submit via WhatsApp"}</span>
                <Send className="w-4 h-4 text-zinc-950" />
              </button>
            </div>
          </form>

          {/* Direct WhatsApp Callout Banner inside Form */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Lebih suka chat langsung tanpa isi form?</span>
            </div>
            <a
              href={defaultWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold inline-flex items-center gap-1 font-mono"
            >
              <span>+62 812-3456-7890 (Chat Konsultan)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
