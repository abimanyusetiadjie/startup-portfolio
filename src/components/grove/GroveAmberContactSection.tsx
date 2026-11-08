"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const { language } = useLanguage();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || "Klien";
    const text =
      language === "id"
        ? `Halo Tim Engineer Abinest IT,\n\nNama: ${fullName}\nInstitusi: ${company || "-"}\nEmail: ${email || "-"}\n\nKebutuhan:\n${message || "Ingin berkonsultasi mengenai sistem IT."}`
        : `Hello Abinest IT Engineering Team,\n\nName: ${fullName}\nCompany: ${company || "-"}\nEmail: ${email || "-"}\n\nProject Details:\n${message || "Interested in discussing an IT project."}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="kontak"
      className="relative py-20 bg-[#080808] overflow-hidden border-y border-white/[0.04]"
    >
      {/* Diagonal Warm Burnt-Orange Light Beam from Top-Right to Bottom-Left (matching slice_4.png) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[320px] -rotate-[32deg] bg-gradient-to-l from-[#E06D3B]/45 via-[#B85024]/25 to-transparent blur-[70px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 w-[480px] h-[320px] -rotate-[32deg] bg-gradient-to-r from-[#E06D3B]/45 via-[#B85024]/25 to-transparent blur-[70px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[180px] -rotate-[32deg] bg-gradient-to-r from-[#E06D3B]/15 via-[#E06D3B]/20 to-[#E06D3B]/15 blur-[85px]"
      />

      <div className="relative z-10 max-w-[640px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center mb-10 space-y-2.5">
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#161616] border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#8E8E93]">
            {language === "id" ? "HUBUNGI KAMI" : "CONTACT US"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            {language === "id" ? (
              <>
                Mulai Proyek atau
                <br />
                Diskusi Bersama Kami
              </>
            ) : (
              <>
                Start a Project or a
                <br />
                Conversation
              </>
            )}
          </h2>
          <p className="text-[12px] text-[#8E8E93]">
            {language === "id"
              ? "Ceritakan tantangan sistem Anda, dan engineer kami akan merespons dalam < 15 menit."
              : "Tell us about your infrastructure goals and our engineers will respond within 15 minutes."}
          </p>
        </div>

        {/* Centered Dark Matte Form Card (matching slice_4.png) */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#181819]/95 backdrop-blur-md border border-white/[0.08] rounded-xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] space-y-4"
        >
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-white/80">
                {language === "id" ? "Nama Depan" : "First Name"}
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={language === "id" ? "Budi" : "John"}
                className="w-full rounded-md bg-[#0E0E0F] border border-white/[0.06] focus:border-[#E06D3B]/60 px-3.5 py-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-white/80">
                {language === "id" ? "Nama Belakang" : "Last Name"}
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={language === "id" ? "Santoso" : "Doe"}
                className="w-full rounded-md bg-[#0E0E0F] border border-white/[0.06] focus:border-[#E06D3B]/60 px-3.5 py-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Email & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-white/80">
                {language === "id" ? "Email Institusi" : "Email"}
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="budi@institusi.sch.id"
                className="w-full rounded-md bg-[#0E0E0F] border border-white/[0.06] focus:border-[#E06D3B]/60 px-3.5 py-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-medium text-white/80">
                {language === "id" ? "Institusi / Perusahaan" : "Company"}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={
                  language === "id" ? "Yayasan Pendidikan XYZ" : "Acme Corp"
                }
                className="w-full rounded-md bg-[#0E0E0F] border border-white/[0.06] focus:border-[#E06D3B]/60 px-3.5 py-2.5 text-[12px] text-white placeholder:text-white/25 outline-none transition-colors"
              />
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-medium text-white/80">
              {language === "id" ? "Pesan / Kebutuhan Sistem" : "Message"}
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                language === "id"
                  ? "Ceritakan kebutuhan SIAKAD, Website Next.js, atau Otomasi WhatsApp Anda..."
                  : "Tell us about your project requirements, timeline, or technical goals..."
              }
              className="w-full rounded-md bg-[#0E0E0F] border border-white/[0.06] focus:border-[#E06D3B]/60 px-3.5 py-2.5 text-[12px] text-white placeholder:text-white/25 outline-none resize-none transition-colors"
            />
          </div>

          {/* Submit Button at Bottom-Left (matching slice_4.png) */}
          <div className="pt-1">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full text-[11px] font-medium text-white bg-[#121213] hover:bg-[#1E1E20] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all"
            >
              {language === "id" ? "Kirim Pesan" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
