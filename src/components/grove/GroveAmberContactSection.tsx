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
      className="scroll-mt-20 py-24 bg-white relative overflow-hidden"
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Pesan Ringkas & Kontak Langsung */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F8FAFC] ring-1 ring-slate-200 text-[#0F172A] font-semibold text-xs tracking-wide">
                Diskusi Arsitektur
              </span>
              <h2 className="text-3xl sm:text-[38px] font-bold tracking-[-0.035em] text-[#0F172A] leading-[1.12]">
                Siap bangun sistem{" "}
                <span className="text-[#475569] font-normal">
                  tanpa ribet?
                </span>
              </h2>
              <p className="text-[15px] text-[#475569] leading-relaxed">
                Ceritakan kebutuhan sistem atau kendala operasional di usaha Anda. Tim rekayasa kami siap menanggapi dalam 15 menit pada jam kerja.
              </p>
            </div>

            <div className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200/80 space-y-3 text-sm text-[#475569]">
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
                  className="font-bold text-[#0F172A] hover:underline transition-colors"
                >
                  +62 813-9858-9745
                </a>
              </div>
              <div>
                Surel Resmi:{" "}
                <a
                  href="mailto:halo@abinest.id"
                  className="font-bold text-[#0F172A] hover:underline transition-colors"
                >
                  halo@abinest.id
                </a>
              </div>
              <div className="inline-flex items-center gap-2 font-mono text-[11.5px] whitespace-nowrap text-[#0F172A] bg-white ring-1 ring-slate-200 px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                <span>Sen–Sab, 08.00–17.00 WIB · Jakarta &amp; Surabaya</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Floating Frosted Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-[28px] bg-white shadow-[0_20px_54px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80 p-6 sm:p-8 space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#0F172A] block">
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
                        className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] text-white shadow-sm"
                            : "bg-[#F8FAFC] ring-1 ring-slate-200/80 text-[#475569] hover:bg-slate-100 hover:text-[#0F172A]"
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
                  <label htmlFor="contact-name" className="text-xs font-semibold text-[#0F172A] block">
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
                  <label htmlFor="contact-institution" className="text-xs font-semibold text-[#0F172A] block">
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
                  <label htmlFor="contact-wa" className="text-xs font-semibold text-[#0F172A] block">
                    Nomor WhatsApp Aktif
                  </label>
                  <div
                    className={`flex rounded-xl border overflow-hidden bg-white transition-all ${
                      phoneError
                        ? "border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20"
                        : "border-slate-200 focus-within:border-[#0F172A] focus-within:ring-2 focus-within:ring-slate-900/10"
                    }`}
                  >
                    <span className="inline-flex items-center px-3 bg-[#F8FAFC] border-r border-slate-200 text-xs font-semibold text-[#475569] select-none">
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
                      className="w-full px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </div>
                  {phoneError && (
                    <p className="text-[11.5px] font-medium text-rose-600">
                      {phoneError}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-budget" className="text-xs font-semibold text-[#0F172A] block">
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
                <label htmlFor="contact-notes" className="text-xs font-semibold text-[#0F172A] block">
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
                className="w-full h-12 rounded-full text-sm font-semibold text-white bg-[#0F172A] hover:bg-slate-800 shadow-[0_10px_24px_rgba(15,23,42,0.16)] flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Kirim via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {fallbackWaUrl && (
                <p className="text-center text-xs text-[#475569]">
                  Jendela WhatsApp tidak terbuka otomatis?{" "}
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
        </div>
      </div>
    </section>
  );
}
