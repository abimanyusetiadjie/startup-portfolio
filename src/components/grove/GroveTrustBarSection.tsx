"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface CountUpProps {
  end: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, decimals = 0, prefix = "", suffix = "", duration = 1200 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic: 1 - Math.pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easeProgress * end);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function GroveTrustBarSection() {
  const { lang } = useLanguage();

  const metrics = [
    {
      numeric: 18,
      suffix: "+",
      label: lang === "id" ? "Sistem Aktif Beroperasi" : "Active Production Systems",
      sub: lang === "id" ? "Sekolah, Yayasan & B2B" : "Schools & B2B Enterprises",
    },
    {
      numeric: 99.9,
      decimals: 1,
      suffix: "%",
      label: lang === "id" ? "Uptime Sejak 2024" : "Uptime SLA Since 2024",
      sub: lang === "id" ? "Jaminan tanpa downtime" : "Zero downtime guarantee",
      highlight: true,
    },
    {
      staticValue: "0%",
      label: lang === "id" ? "Server Crash Peak Season" : "Peak Season Crash Rate",
      sub: lang === "id" ? "Ujian & pembagian rapor" : "Concurrent exams & reports",
    },
    {
      staticValue: "< 2s",
      label: lang === "id" ? "Pengiriman WhatsApp API" : "WhatsApp API Dispatch",
      sub: lang === "id" ? "Otomatis tagihan SPP" : "Automated tuition alerts",
    },
  ];

  const clientInstitutions = [
    { name: "Yayasan Pendidikan Mandiri", type: "Yayasan & Sekolah Swasta" },
    { name: "SMA Unggulan Al-Hikmah", type: "Institusi Pendidikan" },
    { name: "Mitra Retail Nusantara", type: "Enterprise Omnichannel ERP" },
    { name: "Global Logistics Hub", type: "Sistem Inventori B2B" },
    { name: "Pesantren Bina Insan", type: "SIAKAD & Billing SPP" },
  ];

  return (
    <section id="trust-bar" className="bg-white text-slate-900 py-12 sm:py-16 font-sans border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* 1. TOP METRICS STRIP (COUNT-UP ANIMATION) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-10 border-b border-slate-100">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1"
            >
              <div className="flex items-baseline gap-2">
                <span
                  className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                    m.highlight ? "text-[#0F766E]" : "text-[#0F172A]"
                  }`}
                >
                  {m.numeric !== undefined ? (
                    <CountUp
                      end={m.numeric}
                      decimals={m.decimals ?? 0}
                      suffix={m.suffix ?? ""}
                    />
                  ) : (
                    m.staticValue
                  )}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-800">
                {m.label}
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 font-mono">
                {m.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2. CLIENT TRUST & INSTITUTION LOGO STRIP (STAGGERED FADE-IN) */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 space-y-0.5"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0F766E] font-bold block">
              SOCIAL PROOF
            </span>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              {lang === "id"
                ? "Dipercaya oleh yayasan pendidikan, sekolah, dan bisnis di Indonesia:"
                : "Trusted by educational foundations, schools, and enterprises in Indonesia:"}
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {clientInstitutions.map((c, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0F766E]/50 hover:bg-white hover:-translate-y-1 transition-all duration-200 flex items-center gap-2.5 group shadow-2xs hover:shadow-xs cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-[#10B981] group-hover:scale-125 transition-transform duration-200" />
                <div>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#0F766E] transition-colors duration-200 block leading-tight">
                    {c.name}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500 block leading-none mt-0.5">
                    {c.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
