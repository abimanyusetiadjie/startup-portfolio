"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";
import {
  ABINEST_WHATSAPP_NUMBER,
  buildConsultationWaUrl,
  normalizeIndonesianPhoneForWa,
} from "./contact-utils";

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Situs Web Bisnis");
  const [budgetRange, setBudgetRange] = useState("Fleksibel / Diskusi Terlebih Dahulu");
  const [whatsapp, setWhatsapp] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [fallbackWaUrl, setFallbackWaUrl] = useState<string | null>(null);
  const [notes, setNotes] = useState("");

  const serviceOptions = [
    "Situs Web Bisnis",
    "Sistem ERP / Toko",
    "Portal SIAKAD Sekolah",
    "Automasi AI & WhatsApp",
  ];

  const budgetOptions = [
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
    const noteLine = notes.trim() ? `\n• Catatan Singkat: ${notes.trim()}` : "";

    const text = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem berikut:
• Kebutuhan Utama: ${serviceType}
• Nama Lengkap: ${name.trim() || "-"}
• Perusahaan / Instansi: ${institution.trim() || "-"}
• Nomor WhatsApp: ${formatted}
• Perkiraan Anggaran: ${budgetRange}${noteLine}

Mohon informasi tahapan konsultasi dan estimasi biayanya. Terima kasih.`;

    const waUrl = buildConsultationWaUrl(text);
    setFallbackWaUrl(waUrl);
    trackWhatsAppClick({
      source: "contact_form_desktop",
      service: serviceType,
      label: budgetRange,
    });
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="kontak"
      data-section="kontak"
      className="scroll-mt-16 bg-[#FAFAFA]"
    >
      <div className="max-w-[1200px] mx-auto border-x border-[#EAEAEA] bg-white px-8 py-20 relative">
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-3 left-3 font-mono text-xs text-neutral-300"
        >
          +
        </span>
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-3 right-3 font-mono text-xs text-neutral-300"
        >
          +
        </span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Pesan Ringkas & Kontak Langsung */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#666666]">
                06 / DISKUSI ARSITEKTUR
              </div>
              <h2 className="text-[28px] sm:text-[34px] font-semibold tracking-[-0.035em] text-[#0A0A0A] leading-[1.15]">
                Mulai konsultasi.
              </h2>
              <p className="text-[15px] text-[#666666] leading-relaxed">
                Ceritakan kebutuhan sistem atau kendala operasional di usaha Anda. Tim rekayasa kami siap menanggapi dalam 15 menit pada jam kerja.
              </p>
            </div>

            <div className="pt-4 border-t border-[#EAEAEA] space-y-2.5 text-sm text-[#666666]">
              <div>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${ABINEST_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      source: "contact_sidebar_number",
                      label: "direct_wa_link",
                    })
                  }
                  className="font-semibold text-[#0A0A0A] hover:text-[#0070F3]"
                >
                  +62 813-9858-9745
                </a>
              </div>
              <div>
                Surel Resmi:{" "}
                <a
                  href="mailto:halo@abinest.id"
                  className="font-semibold text-[#0A0A0A] hover:text-[#0070F3]"
                >
                  halo@abinest.id
                </a>
              </div>
              <div className="font-mono text-xs text-neutral-400">
                Senin – Sabtu, 08.00 – 17.00 WIB · Jakarta &amp; Surabaya
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Geist Bersih */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] p-6 sm:p-8 space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-medium text-[#0A0A0A] block">
                  Kebutuhan Sistem
                </span>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((opt) => {
                    const isSelected = serviceType === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setServiceType(opt)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0A0A0A] text-white shadow-sm"
                            : "bg-white text-[#666666] border border-[#EAEAEA] hover:border-neutral-300 hover:text-[#0A0A0A]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 block">
                    Nama Lengkap
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Andi Pratama"
                    className="ui-input"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-institution" className="text-xs font-semibold text-slate-700 block">
                    Perusahaan / Instansi
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Contoh: Toko Makmur / SMA 1"
                    className="ui-input"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-wa" className="text-xs font-semibold text-slate-700 block">
                    Nomor WhatsApp Aktif
                  </label>
                  <div
                    className={`flex rounded-lg border overflow-hidden bg-white transition-all ${
                      phoneError
                        ? "border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20"
                        : "border-slate-300 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-500/20"
                    }`}
                  >
                    <span className="inline-flex items-center px-3 bg-slate-100 border-r border-slate-200 text-xs font-semibold text-slate-600 select-none">
                      +62
                    </span>
                    <input
                      id="contact-wa"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => {
                        setWhatsapp(e.target.value);
                        if (phoneError) setPhoneError(null);
                      }}
                      placeholder="812-3456-7890"
                      className="w-full px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </div>
                  {phoneError && (
                    <p className="text-[11.5px] font-medium text-rose-600">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-budget" className="text-xs font-semibold text-slate-700 block">
                    Perkiraan Anggaran (Opsional)
                  </label>
                  <select
                    id="contact-budget"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="ui-input cursor-pointer"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-notes" className="text-xs font-semibold text-slate-700 block">
                  Catatan Singkat (Opsional)
                </label>
                <textarea
                  id="contact-notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Membutuhkan situs web profil perusahaan atau sistem stok multi-gudang..."
                  className="ui-input resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 rounded-full text-sm font-medium text-white bg-[#0A0A0A] hover:bg-neutral-800 shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Kirim via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {fallbackWaUrl && (
                <p className="text-center text-xs text-slate-500">
                  Jendela WhatsApp tidak terbuka otomatis?{" "}
                  <a
                    href={fallbackWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    Buka chat WhatsApp di sini →
                  </a>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
