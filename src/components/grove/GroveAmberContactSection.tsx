"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || "Klien";
    const text = `Halo Tim Engineer Abinest,\n\nNama: ${fullName}\nInstitusi/Perusahaan: ${company || "-"}\nEmail: ${workEmail || "-"}\nNomor Telepon: ${phone || "-"}\n\nKebutuhan Sistem:\n${message || "Ingin berdiskusi mengenai proyek SIAKAD / Website / Otomasi WhatsApp."}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-white border-t border-slate-200/80">
      {/* Background Soft Warm Light Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[340px] bg-gradient-to-l from-orange-100/60 via-amber-50/40 to-transparent blur-[90px] rounded-full"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 w-[500px] h-[340px] bg-gradient-to-r from-orange-100/60 via-amber-50/40 to-transparent blur-[90px] rounded-full"
      />

      <div className="max-w-[720px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            KONSULTASI &amp; DISKUSI PROYEK
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Mulai Proyek atau
            <br />
            Diskusi Bersama Kami
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Ceritakan tantangan sistem atau kebutuhan digital institusi Anda, dan engineer kami akan memberikan estimasi serta solusi teknis dalam 15 menit.
          </p>
        </div>

        {/* Clean Light Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 shadow-xl rounded-3xl p-6 sm:p-10 space-y-4"
        >
          {/* Row 1: First Name | Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Nama Depan
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Budi"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Nama Belakang
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Santoso"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email | Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Email Institusi / Perusahaan
              </label>
              <input
                type="email"
                required
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="budi@sekolah.sch.id"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-700">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0812-3456-7890"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 3: Company / School Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Nama Sekolah / Yayasan / Perusahaan
            </label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="SMA Islam Terpadu / PT Sentra Teknologi"
              className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
            />
          </div>

          {/* Row 4: Message Textarea */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-slate-700">
              Ceritakan Kebutuhan Sistem Anda
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Contoh: Kami butuh sistem SIAKAD untuk 1.500 siswa yang stabil saat ujian, migrasi rapor kurikulum merdeka, dan pengingat tagihan SPP via WhatsApp..."
              className="w-full rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-100 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 outline-none resize-none transition-all"
            />
          </div>

          {/* Submit Row */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_4px_14px_rgba(249,115,22,0.35)] hover:shadow-[0_6px_20px_rgba(249,115,22,0.45)] transition-all duration-200"
            >
              <span>Kirim &amp; Hubungkan ke WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Respons engineer: &lt; 15 menit</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
