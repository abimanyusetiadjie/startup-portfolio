"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Clock,
  Code2,
  School,
  Globe2,
  Workflow,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ChatTemplateOption {
  icon: typeof School;
  title: string;
  badge: string;
  desc: string;
  message: string;
}

export function GroveConsultation() {
  const { lang } = useLanguage();
  const waNumber = "6281234567890";

  const getWaLink = (message: string) => {
    return `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
  };

  const chatOptions: ChatTemplateOption[] = [
    {
      icon: School,
      badge: "SISTEM PENDIDIKAN",
      title: lang === "id" ? "SIAKAD & Sekolah Anti-Down" : "School SIS & Anti-Down Exams",
      desc:
        lang === "id"
          ? "Ujian serentak 1.000+ siswa tanpa down, generator rapor PDF cloud, dan tagihan SPP otomatis via WhatsApp."
          : "1,000+ simultaneous student CBT exams, cloud PDF report generation, and automated tuition reminders.",
      message:
        lang === "id"
          ? "Halo Abinest Studio, saya ingin konsultasi mengenai implementasi sistem SIAKAD / portal sekolah & yayasan kami."
          : "Hello Abinest Studio, I would like to consult about implementing a school SIS / education portal for our institution.",
    },
    {
      icon: Globe2,
      badge: "WEB ARSITEKTUR",
      title: lang === "id" ? "Website Modern Next.js 15" : "High-Performance Next.js Web",
      desc:
        lang === "id"
          ? "Website korporat & institusi berkecepatan tinggi, skor Lighthouse 95–100, animasi halus, dan SEO maksimal."
          : "Ultra-fast corporate & institution web architecture with Lighthouse 95-100, fluid animations, and robust SEO.",
      message:
        lang === "id"
          ? "Halo Abinest Studio, saya ingin konsultasi mengenai pembuatan website performa tinggi Next.js 15 & branding institusi."
          : "Hello Abinest Studio, I would like to consult about high-performance Next.js 15 website engineering & branding.",
    },
    {
      icon: Workflow,
      badge: "OTOMASI & ERP",
      title: lang === "id" ? "Custom ERP & WhatsApp Gateway" : "Custom ERP & Automation Hub",
      desc:
        lang === "id"
          ? "Sistem inventori multi-gudang, kasir POS real-time, atau bot dispatch WhatsApp otomatis tanpa pihak ketiga."
          : "Multi-branch inventory ledger, real-time retail POS, and custom WhatsApp dispatch integrations.",
      message:
        lang === "id"
          ? "Halo Abinest Studio, saya ingin konsultasi mengenai custom ERP omnichannel / bot integrasi WhatsApp untuk operasional bisnis kami."
          : "Hello Abinest Studio, I would like to consult about custom omnichannel ERP or automated WhatsApp integration.",
    },
  ];

  const defaultWaUrl = getWaLink(
    lang === "id"
      ? "Halo Abinest Studio, saya ingin konsultasi dan meminta estimasi biaya proyek sistem digital."
      : "Hello Abinest Studio, I would like to consult and request a digital system project estimate."
  );

  return (
    <section
      id="konsultasi"
      className="bg-[#0B0F19] text-white py-16 sm:py-24 font-sans border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lang === "id" ? "FAST-PATH KONSULTASI" : "DIRECT CONSULTATION"}</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            {lang === "id"
              ? "Diskusikan Sistem & Website Anda."
              : "Scope Your System with Our Engineers."}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 mt-4 leading-relaxed font-normal">
            {lang === "id"
              ? "Tanpa formulir panjang yang membingungkan. Pilih topik kebutuhan Anda di bawah ini dan diskusikan langsung bersama tim insinyur kami via WhatsApp."
              : "Zero tedious form-filling. Select your project domain below to start a structured WhatsApp scoping conversation directly."}
          </p>
        </motion.div>

        {/* 3 Direct 1-Click WhatsApp Topic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {chatOptions.map((item, index) => {
            const Icon = item.icon;
            const link = getWaLink(item.message);

            return (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-emerald-400/50 hover:bg-white/[0.07] transition-all duration-300 shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest font-semibold uppercase text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-white transition-colors">
                  <span>
                    {lang === "id"
                      ? "Chat Topik Ini via WA"
                      : "Discuss on WhatsApp"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Primary Direct WhatsApp Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl bg-gradient-to-r from-emerald-950/60 via-[#111827] to-emerald-950/40 border border-emerald-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] shrink-0">
              <MessageSquare className="w-7 h-7" />
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-heading text-lg sm:text-xl font-bold text-white">
                  {lang === "id"
                    ? "Konsultasi Umum atau Kebutuhan Kustom?"
                    : "General Inquiry or Custom Systems?"}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300">
                {lang === "id"
                  ? "Respon cepat < 15 menit (Senin – Sabtu, 08:00 – 21:00 WIB)."
                  : "Typical response within 15 minutes (Mon – Sat, 08:00 – 21:00 GMT+7)."}
              </p>
            </div>
          </div>

          <a
            href={defaultWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-zinc-950 font-bold text-sm hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-emerald-950/60 shrink-0"
          >
            <span>
              {lang === "id"
                ? "Chat WhatsApp Tim Insinyur"
                : "Chat with Engineering Team"}
            </span>
            <ArrowUpRight className="w-4 h-4 text-zinc-950" />
          </a>
        </motion.div>

        {/* 3 Essential Micro Guarantee Badges (Pengganti FAQ: Ringkas, Tegas, Reasuring) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-zinc-300 font-normal"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">
                {lang === "id" ? "100% Kepemilikan Source Code" : "100% Source Code Ownership"}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Seluruh repositori Git, database, dan lisensi menjadi aset milik institusi Anda sepenuhnya."
                  : "All Git repositories, database schema, and licenses belong entirely to your organization."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">
                {lang === "id" ? "SLA Uptime 99.9% & Garansi" : "99.9% SLA & Technical Warranty"}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Jaminan pemeliharaan teknis, monitoring server proaktif, dan perbaikan bug tanpa biaya tersembunyi."
                  : "Full technical maintenance, proactive uptime telemetry, and guaranteed warranty SLA."}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-white text-sm mb-1">
                {lang === "id" ? "Transparansi Milestone Pengerjaan" : "Transparent Sprint Milestones"}
              </p>
              <p className="text-zinc-400 leading-relaxed">
                {lang === "id"
                  ? "Setiap perkembangan fitur dipantau real-time melalui Client Portal resmi institusi Anda."
                  : "Monitor weekly sprint progress and server health live through our official Client Portal."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
