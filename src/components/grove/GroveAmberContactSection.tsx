"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, Info } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

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
  const [serviceType, setServiceType] = useState("Website / Profil Usaha");
  const [budgetRange, setBudgetRange] = useState("Fleksibel / Diskusi Dulu");
  const [whatsapp, setWhatsapp] = useState("");
  const [notes, setNotes] = useState("");

  const serviceOptions = [
    { label: "Website / Profil Usaha", desc: "Company profile, landing page, atau portofolio bisnis" },
    { label: "Aplikasi Sekolah / SIAKAD", desc: "Ujian online, rapor digital, data guru & siswa" },
    { label: "Sistem Toko / Gudang / ERP", desc: "Pencatatan stok multi-cabang, kasir, & laporan laba" },
    { label: "Otomasi WhatsApp & AI", desc: "Asisten WA balas otomatis 24 jam & baca faktur" },
  ];

  const budgetOptions = [
    "Fleksibel / Diskusi Dulu",
    "< Rp 5 Juta (Web UMKM / Landing Page)",
    "Rp 5 Juta – Rp 15 Juta (Sistem Awal / Automasi)",
    "Rp 15 Juta – Rp 45 Juta (ERP Menengah / SIAKAD)",
    "> Rp 45 Juta (Full Ecosystem Enterprise)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedPhone = normalizeWaInputForMessage(whatsapp);
    const noteLine = notes.trim() ? `\n• Catatan Singkat: ${notes.trim()}` : "";

    const text = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem:
• Kebutuhan Utama: ${serviceType}
• Nama Lengkap: ${name.trim() || "-"}
• Usaha / Instansi: ${institution.trim() || "-"}
• Nomor WhatsApp: ${formattedPhone}
• Perkiraan Anggaran: ${budgetRange}${noteLine}

Mohon informasi langkah konsultasi & estimasi biayanya. Terima kasih!`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const directWaUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Halo Tim Abinest, saya ingin konsultasi mengenai pembuatan website / sistem untuk kebutuhan usaha saya. Boleh dibantu informasinya?"
  )}`;

  return (
    <section
      id="kontak"
      className="py-14 sm:py-20 relative overflow-hidden bg-white border-b border-slate-300/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Kolom Kiri (5 Cols): Pesan Ringkas + Divided List Group + Direct WA Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1D4ED8] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>KONSULTASI CEPAT &amp; TERSTRUKTUR</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Mulai Konsultasi Kebutuhan Sistem Anda
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Tidak perlu paham istilah teknis. Cukup ceritakan apa yang ingin Anda buat atau kendala operasional yang sedang dihadapi di usaha Anda.
              </p>
            </div>

            {/* Bootstrap List-Group Assurance Panel */}
            <div className="ui-list-group border-slate-300 shadow-2xs">
              <div className="p-4 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Konsultasi 100% Gratis &amp; Tanpa Ikatan
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Diskusikan alur kerja dan perkiraan biaya transparan sebelum memutuskan kerja sama.
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Respons Langsung Engineer &lt;15 Menit
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Ditangani langsung oleh system architect Abinest di jam kerja tanpa perantara sales.
                  </p>
                </div>
              </div>

              <div className="p-4 flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Bebas Pilih: Beli Putus atau Terima Beres
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    Source code 100% menjadi aset Anda, atau serahkan perawatan server 24/7 ke tim kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Bootstrap Alert Callout Box untuk Chat Langsung */}
            <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-300 border-l-4 border-l-emerald-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="space-y-0.5">
                <p className="text-xs font-extrabold text-emerald-950">
                  Ingin langsung tanya tanpa mengisi formulir?
                </p>
                <p className="text-[11.5px] text-emerald-800">
                  Klik tombol di samping untuk langsung menyapa tim kami di WhatsApp.
                </p>
              </div>
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Kolom Kanan (7 Cols): Structured Bootstrap-Clarity Card Form */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.4, delay: 0.06, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="ui-card overflow-hidden shadow-md">
              {/* 1. Card Header */}
              <div className="ui-card-header px-5 sm:px-6 py-4">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#0F172A]">
                    Formulir Konsultasi Singkat
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Terstruktur &amp; jelas — hanya butuh 30 detik untuk diisi.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Gratis Konsultasi</span>
                </span>
              </div>

              {/* 2. Card Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Langkah 1: Button-Radio Grid */}
                <div>
                  <span className="ui-label">
                    1. Pilih Kebutuhan Sistem <span className="text-rose-500">*</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((opt) => {
                      const isSelected = serviceType === opt.label;
                      return (
                        <button
                          key={opt.label}
                          type="button"
                          onClick={() => setServiceType(opt.label)}
                          className={`text-left p-3 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-blue-50/90 border-2 border-[#2563EB] text-blue-950 shadow-2xs"
                              : "bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 hover:border-slate-400"
                          }`}
                        >
                          <div className="flex items-center justify-between w-full">
                            <span className="text-xs sm:text-[13px] font-bold">
                              {opt.label}
                            </span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                                isSelected
                                  ? "border-[#2563EB] bg-[#2563EB] text-white"
                                  : "border-slate-400 bg-white"
                              }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <span className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                            {opt.desc}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Langkah 2: 2-Column Row Nama & Usaha */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="ui-label">
                      2. Nama Lengkap Anda <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Contoh: Pak Bambang / Bu Rina"
                      className="ui-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-institution" className="ui-label">
                      3. Usaha / Sekolah / Kantor <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="contact-institution"
                      type="text"
                      required
                      value={institution}
                      onChange={(e) => setInstitution(e.target.value)}
                      placeholder="Contoh: Toko Mandiri / SMA 1"
                      className="ui-input"
                    />
                  </div>
                </div>

                {/* Langkah 3: Input Group WhatsApp (+62 Addon) & Select Anggaran */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-wa" className="ui-label">
                      4. Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex rounded-lg border border-slate-300 focus-within:border-[#2563EB] focus-within:ring-4 focus-within:ring-blue-500/15 overflow-hidden bg-white transition-all">
                      <span className="inline-flex items-center px-3 bg-slate-100 border-r border-slate-300 text-xs sm:text-sm font-bold text-slate-700 select-none shrink-0">
                        +62
                      </span>
                      <input
                        id="contact-wa"
                        type="tel"
                        required
                        value={whatsapp}
                        onChange={(e) => setWhatsapp(e.target.value)}
                        placeholder="812-3456-7890"
                        className="w-full px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none font-medium bg-transparent"
                      />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Tanpa nol di depan atau ketik langsung 08xx juga diterima.
                    </p>
                  </div>

                  <div>
                    <label htmlFor="contact-budget" className="ui-label">
                      5. Perkiraan Anggaran (Opsional)
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
                    <p className="text-[11px] text-slate-500 mt-1">
                      Membantu kami menyiapkan opsi arsitektur paling hemat.
                    </p>
                  </div>
                </div>

                {/* Langkah 4: Catatan Singkat (Opsional) */}
                <div>
                  <label htmlFor="contact-notes" className="ui-label">
                    6. Gambaran Singkat Kebutuhan (Opsional)
                  </label>
                  <textarea
                    id="contact-notes"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Butuh web company profile cepat + form PPDB, atau sistem stok 3 gudang..."
                    className="ui-input resize-none"
                  />
                </div>

                {/* Inline Bootstrap Info Notice */}
                <div className="rounded-xl bg-blue-50/70 border border-blue-200 px-3.5 py-2.5 flex items-start gap-2.5 text-xs text-blue-950">
                  <Info className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                  <span>
                    Setelah klik kirim, pesan terstruktur Anda langsung terbuka di WhatsApp resmi Abinest (<strong>+62 813-9858-9745</strong>) tanpa spam.
                  </span>
                </div>
              </div>

              {/* 3. Card Footer */}
              <div className="ui-card-footer px-5 sm:px-6 py-4 space-y-3">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-sm transition-all cursor-pointer active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span>Kirim &amp; Lanjut ke WhatsApp Tim Abinest</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                <div className="grid grid-cols-3 divide-x divide-slate-300 text-center text-[11px] font-semibold text-slate-600 pt-0.5">
                  <span className="inline-flex items-center justify-center gap-1 px-1">
                    <Clock className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                    <span>Respons &lt;15m</span>
                  </span>
                  <span className="inline-flex items-center justify-center gap-1 px-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>100% Gratis</span>
                  </span>
                  <span className="inline-flex items-center justify-center gap-1 px-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>Tanpa Komitmen</span>
                  </span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
