"use client";

import { useState } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  buildConsultationWaUrl,
  normalizeIndonesianPhoneForWa,
} from "../contact-utils";

export function MobileQuickContactSection() {
  const [serviceType, setServiceType] = useState("Situs Web Bisnis");
  const [nameAndCompany, setNameAndCompany] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [fallbackWaUrl, setFallbackWaUrl] = useState<string | null>(null);
  const [showExtras, setShowExtras] = useState(false);
  const [budget, setBudget] = useState("Fleksibel / Diskusi Terlebih Dahulu");
  const [notes, setNotes] = useState("");

  const serviceChips = [
    "Situs Web Bisnis",
    "Sistem ERP / Toko",
    "SIAKAD Sekolah",
    "Automasi AI & WhatsApp",
  ];

  const budgetChoices = [
    "Fleksibel / Diskusi Terlebih Dahulu",
    "< Rp5 juta (Situs Web / Landing Page)",
    "Rp5 juta – Rp15 juta (Sistem Awal)",
    "Rp15 juta – Rp45 juta (ERP / SIAKAD)",
    "> Rp45 juta (Sistem Skala Perusahaan)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { formatted, isValid } = normalizeIndonesianPhoneForWa(whatsapp);
    if (!isValid) {
      setPhoneError("Masukkan nomor WhatsApp aktif minimal 9 digit (contoh: 81234567890).");
      return;
    }

    setPhoneError(null);
    const extraParts = [
      showExtras ? `• Perkiraan Anggaran: ${budget}` : "",
      showExtras && notes.trim() ? `• Catatan: ${notes.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const message = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem:
• Kebutuhan: ${serviceType}
• Nama & Perusahaan/Instansi: ${nameAndCompany.trim() || "-"}
• Nomor WhatsApp: ${formatted}
${extraParts ? `${extraParts}\n` : ""}
Mohon arahan dan estimasi pengerjaannya. Terima kasih.`;

    const waUrl = buildConsultationWaUrl(message);
    setFallbackWaUrl(waUrl);
    trackWhatsAppClick({
      source: "contact_form_mobile",
      service: serviceType,
      label: showExtras ? budget : "quick_submit",
    });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="m-kontak"
      data-section="kontak"
      className="scroll-mt-20 bg-white py-14 px-5 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-md mx-auto space-y-5">
        <div className="space-y-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[#0F172A] font-semibold text-[11px] tracking-wide">
            Diskusi Arsitektur
          </span>
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#0F172A] leading-tight">
            Mulai konsultasi{" "}
            <span className="text-[#475569] font-normal">
              sekarang.
            </span>
          </h2>
          <p className="text-[13.5px] text-[#475569]">
            Respons langsung oleh engineer kami dalam &lt;15 menit.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[24px] bg-white shadow-[0_18px_44px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 p-5 space-y-4"
        >
          <div className="space-y-2">
            <span className="text-[12.5px] font-semibold text-[#0F172A] block">
              Kebutuhan Utama
            </span>
            <div className="flex flex-wrap gap-2">
              {serviceChips.map((chip) => {
                const active = serviceType === chip;
                return (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => setServiceType(chip)}
                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all cursor-pointer ${
                      active
                        ? "bg-[#0F172A] text-white shadow-sm"
                        : "bg-[#F8FAFC] ring-1 ring-slate-200/80 text-[#475569] hover:bg-slate-100 hover:text-[#0F172A]"
                    }`}
                  >
                    {chip}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="m-contact-name"
              className="text-[12.5px] font-semibold text-[#0F172A] block"
            >
              Nama &amp; Usaha / Instansi
            </label>
            <input
              id="m-contact-name"
              type="text"
              required
              value={nameAndCompany}
              onChange={(e) => setNameAndCompany(e.target.value)}
              placeholder="Contoh: Andi — Toko Makmur"
              className="w-full h-11 px-3.5 rounded-xl bg-white border border-slate-200 text-[14px] text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:border-[#0F172A] focus:ring-2 focus:ring-slate-900/10"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="m-contact-wa"
              className="text-[12.5px] font-semibold text-[#0F172A] block"
            >
              Nomor WhatsApp Aktif
            </label>
            <div
              className={`flex h-11 rounded-xl bg-white border overflow-hidden ${
                phoneError
                  ? "border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20"
                  : "border-slate-200 focus-within:border-[#0F172A] focus-within:ring-2 focus-within:ring-slate-900/10"
              }`}
            >
              <span className="inline-flex items-center px-3 bg-[#F8FAFC] border-r border-slate-200 text-[13px] font-semibold text-[#475569] select-none">
                +62
              </span>
              <input
                id="m-contact-wa"
                type="tel"
                required
                value={whatsapp}
                onChange={(e) => {
                  setWhatsapp(e.target.value);
                  if (phoneError) setPhoneError(null);
                }}
                placeholder="812-3456-7890"
                className="w-full px-3 text-[14px] text-[#0F172A] placeholder:text-slate-400 bg-transparent outline-none"
              />
            </div>
            {phoneError && (
              <p className="text-[11.5px] font-medium text-rose-600">
                {phoneError}
              </p>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowExtras((prev) => !prev)}
              className="w-full flex items-center gap-1.5 text-left text-[12.5px] font-semibold text-[#0F172A] hover:underline cursor-pointer py-1 transition-colors"
            >
              {showExtras ? (
                <>
                  <Minus className="w-3.5 h-3.5 shrink-0" />
                  <span>Sembunyikan anggaran &amp; catatan</span>
                </>
              ) : (
                <>
                  <Plus className="w-3.5 h-3.5 shrink-0" />
                  <span>Tambah anggaran &amp; catatan (opsional)</span>
                </>
              )}
            </button>

            {showExtras && (
              <div className="mt-3 space-y-3 pt-3 border-t border-slate-100">
                <div className="space-y-1">
                  <label
                    htmlFor="m-contact-budget"
                    className="text-[12px] font-semibold text-[#475569] block"
                  >
                    Perkiraan Anggaran
                  </label>
                  <select
                    id="m-contact-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full h-11 px-3 rounded-xl bg-white border border-slate-200 text-[13.5px] text-[#0F172A] outline-none focus:border-[#0F172A]"
                  >
                    {budgetChoices.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="m-contact-notes"
                    className="text-[12px] font-semibold text-[#475569] block"
                  >
                    Catatan Singkat
                  </label>
                  <textarea
                    id="m-contact-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Sistem stok 3 gudang & kasir..."
                    className="w-full p-3 rounded-xl bg-white border border-slate-200 text-[13.5px] text-[#0F172A] placeholder:text-slate-400 outline-none focus:border-[#0F172A] resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-12 rounded-full bg-[#0F172A] hover:bg-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.16)] active:scale-[0.99] text-white text-[14px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>Kirim via WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {fallbackWaUrl && (
            <p className="text-center text-[12px] text-[#475569]">
              Tidak terbuka otomatis?{" "}
              <a
                href={fallbackWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0F172A] hover:underline"
              >
                Buka chat WhatsApp di sini →
              </a>
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
