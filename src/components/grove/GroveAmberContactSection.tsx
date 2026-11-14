"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "6281398589745";

function normalizeWaInputForMessage(raw: string): string {
  const cleaned = raw.trim();
  if (!cleaned) return "-";
  if (cleaned.startsWith("+62") || cleaned.startsWith("62") || cleaned.startsWith("0")) {
    return cleaned;
  }
  return `0${cleaned}`;
}

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Situs Web Bisnis");
  const [budgetRange, setBudgetRange] = useState("Fleksibel / Diskusi Terlebih Dahulu");
  const [whatsapp, setWhatsapp] = useState("");
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
    const formattedPhone = normalizeWaInputForMessage(whatsapp);
    const noteLine = notes.trim() ? `\n• Catatan Singkat: ${notes.trim()}` : "";

    const text = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem berikut:
• Kebutuhan Utama: ${serviceType}
• Nama Lengkap: ${name.trim() || "-"}
• Perusahaan / Instansi: ${institution.trim() || "-"}
• Nomor WhatsApp: ${formattedPhone}
• Perkiraan Anggaran: ${budgetRange}${noteLine}

Mohon informasi tahapan konsultasi dan estimasi biayanya. Terima kasih.`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="kontak"
      data-section="kontak"
      className="py-20 bg-white border-b border-slate-200/70"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Kolom Kiri: Pesan Ringkas & Kontak Langsung */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                Mulai Konsultasi
              </h2>
              <p className="text-[15.5px] text-slate-600 leading-relaxed">
                Ceritakan kebutuhan sistem atau kendala operasional di usaha Anda. Tim rekayasa kami siap menanggapi dalam 15 menit pada jam kerja.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2.5 text-sm text-slate-600">
              <div>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-900 hover:text-blue-600"
                >
                  +62 813-9858-9745
                </a>
              </div>
              <div>
                Surel Resmi:{" "}
                <a
                  href="mailto:halo@abinest.id"
                  className="font-semibold text-slate-900 hover:text-blue-600"
                >
                  halo@abinest.id
                </a>
              </div>
              <div className="text-xs text-slate-400">
                Senin – Sabtu, 08.00 – 17.00 WIB · Jakarta &amp; Surabaya
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Bersih */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-8 space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-700 block">
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
                        className={`px-4 py-2 rounded-xl text-xs sm:text-[13px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white shadow-2xs"
                            : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
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
                    placeholder="Contoh: Bambang Sutrisno"
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
                  <div className="flex rounded-lg border border-slate-300 focus-within:border-blue-600 focus-within:ring-3 focus-within:ring-blue-500/15 overflow-hidden bg-white transition-all">
                    <span className="inline-flex items-center px-3 bg-slate-100 border-r border-slate-200 text-xs font-semibold text-slate-600 select-none">
                      +62
                    </span>
                    <input
                      id="contact-wa"
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="812-3456-7890"
                      className="w-full px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
                    />
                  </div>
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
                className="w-full h-12 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Kirim via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
