"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "6285708677918";

export function GroveAmberContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`.trim() || "Klien";
    const text = `Halo Tim TechRoos,\n\nNama: ${fullName}\nWork Email: ${workEmail || "-"}\nNomor Telepon: ${phone || "-"}\n\nKebutuhan Proyek:\n${message || "Ingin berdiskusi mengenai infrastruktur IT & otomasi sistem."}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0C]">
      {/* Background: Diagonal Orange Beam Glow in Top-Right and Bottom-Left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-28 w-[500px] h-[340px] -rotate-[35deg] bg-gradient-to-l from-orange-500/35 via-amber-500/20 to-transparent blur-[85px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 w-[500px] h-[340px] -rotate-[35deg] bg-gradient-to-r from-orange-500/35 via-amber-500/20 to-transparent blur-[85px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[160px] -rotate-[35deg] bg-orange-500/10 blur-[100px]"
      />

      <div className="max-w-[700px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Good IT Starts With
            <br />
            a Conversation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
            Ceritakan tantangan teknis Anda dan tim engineer kami akan memberikan rekomendasi arsitektur dalam hitungan menit.
          </p>
        </div>

        {/* Centered Form Card: Dark Surface with Inner Top Highlight & Padding */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_25px_60px_rgba(0,0,0,0.85)] rounded-3xl p-6 sm:p-10 space-y-5"
        >
          {/* Row 1: 2 Columns (First Name | Last Name) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-300">
                First Name
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Alex"
                className="w-full rounded-xl bg-[#0A0A0C] border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-300">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Rivera"
                className="w-full rounded-xl bg-[#0A0A0C] border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 2: 2 Columns (Work Email | Phone Number) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-300">
                Work Email
              </label>
              <input
                type="email"
                required
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full rounded-xl bg-[#0A0A0C] border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-zinc-300">
                Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+62 812-3456-7890"
                className="w-full rounded-xl bg-[#0A0A0C] border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none transition-all"
              />
            </div>
          </div>

          {/* Row 3: Full Width Textarea (How can we help your team?) */}
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-zinc-300">
              How can we help your team?
            </label>
            <textarea
              rows={4}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your infrastructure goals, ongoing challenges, or automation timeline..."
              className="w-full rounded-xl bg-[#0A0A0C] border border-white/[0.08] focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/60 px-4 py-3 text-xs sm:text-sm text-white placeholder:text-zinc-600 outline-none resize-none transition-all"
            />
          </div>

          {/* Bottom Left Submit Button */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-[0_0_25px_rgba(249,115,22,0.35)] hover:shadow-[0_0_35px_rgba(249,115,22,0.5)] transition-all duration-300"
            >
              <span>Submit</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">
              Guaranteed engineer response within 15 mins
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
