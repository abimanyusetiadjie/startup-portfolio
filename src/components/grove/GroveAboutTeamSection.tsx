"use client";

import { useLanguage } from "@/context/LanguageContext";
import { MapPin, ShieldCheck, Award, HeartHandshake } from "lucide-react";

export function GroveAboutTeamSection() {
  const { lang } = useLanguage();

  const team = [
    {
      name: "Abimanyu S.",
      role: lang === "id" ? "Principal Systems Architect" : "Principal Systems Architect",
      desc: lang === "id"
        ? "Spesialis arsitektur sistem decoupled Next.js 15, perancangan basis data terisolasi PostgreSQL RLS, dan optimasi performa tinggi."
        : "Specialist in decoupled Next.js architecture, PostgreSQL RLS database isolation, and sub-second web velocity.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Dian Pratama",
      role: lang === "id" ? "Lead Backend & Queue Engineer" : "Lead Backend & Queue Engineer",
      desc: lang === "id"
        ? "Berpengalaman mengelola antrean pemrosesan dokumen massal, integrasi Meta WhatsApp Cloud API resmi, dan worker asinkron."
        : "Expert in distributed worker queues, batch PDF rendering, and high-throughput Meta WhatsApp Cloud API gateways.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Siti Rahmawati, M.Ed",
      role: lang === "id" ? "Head of Institutional Onboarding" : "Head of Institutional Onboarding",
      desc: lang === "id"
        ? "Memastikan sistem mudah diadopsi oleh kepala sekolah, guru, dan staf tata usaha melalui modul pelatihan dan pendampingan bertahap."
        : "Ensures seamless adoption by school principals, teachers, and staff through empathetic training and dedicated user support.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Fikri Hidayat",
      role: lang === "id" ? "Senior Frontend & Performance Engineer" : "Senior Frontend & Performance Engineer",
      desc: lang === "id"
        ? "Berfokus pada antarmuka yang ramah pengguna, ramah mata senior, responsif di ponsel, dan mencapai skor 95–100 Google Lighthouse."
        : "Focuses on intuitive UI design, senior-friendly typography contrast, mobile ergonomics, and perfect Lighthouse metrics.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#11141C] text-white py-16 sm:py-24 font-sans border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Studio Background Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2.5 mb-2">
              <span className="w-6 h-[2px] bg-emerald-400" />
              <span className="text-xs font-semibold tracking-widest uppercase text-emerald-300 font-mono">
                {lang === "id" ? "TENTANG ABINEST STUDIO" : "ABOUT ABINEST"}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              {lang === "id"
                ? "Dikerjakan oleh insinyur perangkat lunak, bukan template instan."
                : "Built by dedicated software engineers, not disposable templates."}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {lang === "id"
                ? "Abinest Engineering Studio adalah studio rekayasa perangkat lunak yang berfokus membangun sistem digital jangka panjang untuk institusi pendidikan dan bisnis di Indonesia. Berbasis di Jakarta dan Surabaya, kami menggabungkan arsitektur cloud modern dengan empati mendalam terhadap rutinitas operasional sehari-hari pengguna."
                : "Abinest is a software engineering studio dedicated to crafting enduring digital systems for schools and enterprises across Indonesia. Based in Jakarta and Surabaya, we pair enterprise cloud architecture with deep empathy for day-to-day user workflows."}
            </p>
          </div>

          <div className="lg:col-span-5 p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
            <div className="flex items-center gap-3 text-emerald-400">
              <MapPin className="h-5 w-5 shrink-0" />
              <span className="text-sm font-bold text-white font-mono">
                JAKARTA SELATAN &amp; SURABAYA TIMUR
              </span>
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-normal">
              {lang === "id"
                ? "Kami siap hadir langsung untuk konsultasi tatap muka, survei alur kerja on-site di sekolah/kantor Anda, maupun koordinasi daring yang fleksibel."
                : "Available for in-person consultations, on-site campus workflow audits, and responsive remote technical collaboration."}
            </p>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>EST. 2024 • INDONESIA</span>
              <span className="text-emerald-400 font-bold">TIM INTENSIF</span>
            </div>
          </div>
        </div>

        {/* Core Team Grid */}
        <div className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
            {lang === "id" ? "TIM TEKNIS & PENDAMPINGAN INTI" : "CORE ENGINEERING & ONBOARDING TEAM"}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/30 transition-all space-y-3 group"
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {m.name}
                  </h4>
                  <span className="text-[11px] font-mono text-emerald-400 block mt-0.5">
                    {m.role}
                  </span>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed font-normal">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
