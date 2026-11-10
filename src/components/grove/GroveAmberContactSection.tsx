"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Clock, CheckCircle2, PhoneCall, HelpCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [serviceType, setServiceType] = useState("Website / Profil Usaha");
  const [whatsapp, setWhatsapp] = useState("");

  // Opsi ramah orang awam & orang tua (bahasa manusia, bebas jargon teknis)
  const serviceOptions = [
    { label: "Website / Profil Usaha", desc: "Company profile, landing page, atau portofolio bisnis" },
    { label: "Aplikasi Sekolah / SIAKAD", desc: "Ujian online, rapor digital, data guru & siswa" },
    { label: "Sistem Toko / Gudang / ERP", desc: "Pencatatan stok multi-cabang, kasir, & laporan laba" },
    { label: "Otomasi WhatsApp & AI", desc: "Asisten WA balas otomatis 24 jam & baca faktur" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Tim Abinest,

Saya ingin berkonsultasi mengenai kebutuhan sistem:
• Kebutuhan Utama: ${serviceType}
• Nama Lengkap: ${name.trim() || "-"}
• Usaha / Instansi: ${institution.trim() || "-"}
• Nomor WhatsApp: ${whatsapp.trim() || "-"}

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
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      {/* Soft Ambient Radial Accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[450px] h-[300px] bg-gradient-to-l from-blue-100/40 via-sky-50/20 to-transparent blur-[80px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[450px] h-[300px] bg-gradient-to-r from-blue-100/40 via-sky-50/20 to-transparent blur-[80px] rounded-full"
      />

      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Kolom Kiri: Pesan Ringkas, Ramah & Menenangkan (Bebas Teks Rumit) */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-700 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                <Clock className="w-3.5 h-3.5 text-blue-600" />
                <span>KONSULTASI CEPAT &amp; MUDAH</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight mt-3">
                Mulai Konsultasi Kebutuhan Sistem Anda
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mt-2.5">
                Tidak perlu paham istilah teknis. Cukup ceritakan apa yang ingin Anda buat atau kendala yang sedang dihadapi di usaha Anda.
              </p>
            </div>

            {/* 3 Keuntungan Praktis (Kalimat Pendek, Mudah Dipahami Siapa Saja) */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Konsultasi 100% Gratis &amp; Santai
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Tanya-tanya dan diskusi perkiraan biaya tanpa ikatan apa pun.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Respons Cepat Langsung via WhatsApp
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Dibalas langsung oleh tim teknis kami dalam waktu &lt;15 menit di jam kerja.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Bebas Pilih: Beli Putus atau Terima Beres
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Source code 100% milik Anda, atau serahkan perawatan server ke kami.
                  </p>
                </div>
              </div>
            </div>

            {/* Kotak Alternatif: Langsung WhatsApp bagi yang Tidak Suka Isi Formulir */}
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-[#0F172A]">
                  Ingin langsung tanya tanpa formulir?
                </p>
                <p className="text-[11.5px] text-slate-500">
                  Buka WhatsApp dan sapa tim kami langsung.
                </p>
              </div>
              <a
                href={directWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Cepat yang Sangat Ramah untuk Orang Awam & Tua */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-200/90 shadow-[0_15px_40px_rgba(15,23,42,0.06)] rounded-3xl p-5 sm:p-7 md:p-8 space-y-5"
            >
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0F172A]">
                    Formulir Konsultasi Singkat
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Hanya butuh 30 detik untuk diisi.
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                  ● Bebas Biaya Awal
                </span>
              </div>

              {/* Langkah 1: Pilihan Kebutuhan (Kartu Ramah, Huruf Jelas) */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-[#0F172A]">
                  1. Apa yang ingin Anda buat atau perbaiki?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => setServiceType(opt.label)}
                      className={`text-left p-3 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        serviceType === opt.label
                          ? "bg-blue-50/80 border-blue-600 text-blue-900 shadow-2xs ring-2 ring-blue-500/20"
                          : "bg-slate-50/60 hover:bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs sm:text-[13px] font-bold">
                          {opt.label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            serviceType === opt.label
                              ? "border-blue-600 bg-blue-600 text-white"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {serviceType === opt.label && (
                            <span className="w-1.5 h-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>
                      <span className="text-[10.5px] text-slate-500 mt-1 line-clamp-1">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Langkah 2: Nama & Usaha (Input Luas & Tulisan Besar, Mudah Dibaca) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-bold text-[#0F172A]"
                  >
                    2. Nama Anda <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Pak Bambang / Bu Rina"
                    className="w-full rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 px-3.5 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-institution"
                    className="block text-xs sm:text-sm font-bold text-[#0F172A]"
                  >
                    3. Usaha / Sekolah / Kantor <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="contact-institution"
                    type="text"
                    required
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    placeholder="Contoh: Toko Mandiri / SMA 1"
                    className="w-full rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 px-3.5 py-3 text-sm text-[#0F172A] placeholder:text-slate-400 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              {/* Langkah 3: Nomor WhatsApp (Satu Baris Penuh, Jelas) */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-wa"
                  className="block text-xs sm:text-sm font-bold text-[#0F172A]"
                >
                  4. Nomor WhatsApp Aktif <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-wa"
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="Contoh: 0812-3456-7890"
                  className="w-full rounded-xl bg-slate-50/70 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-100 px-3.5 py-3 text-sm sm:text-base text-[#0F172A] placeholder:text-slate-400 outline-none transition-all font-medium"
                />
                <p className="text-[11px] text-slate-500">
                  Kami tidak akan mengirimkan spam atau promosi tanpa izin Anda.
                </p>
              </div>

              {/* Tombol Kirim WhatsApp yang Menonjol & Jelas */}
              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-[0_10px_25px_rgba(37,99,235,0.25)] transition-all cursor-pointer active:scale-[0.99]"
                >
                  <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  <span>Kirim ke WhatsApp Tim Abinest</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>

                {/* Keterangan Menenangkan di Bawah Tombol */}
                <div className="flex items-center justify-center gap-4 text-xs text-slate-500 pt-1">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Respons &lt;15 menit
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Konsultasi Gratis
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
