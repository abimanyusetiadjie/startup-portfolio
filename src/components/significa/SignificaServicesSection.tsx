"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ClayReveal } from "./ClayReveal";

const STUDIO_FACTS = [
  { value: "16+", label: "Sistem nyata terbangun" },
  { value: "100%", label: "Hak milik kode sumber" },
  { value: "Rp0", label: "Biaya bulanan per staf" },
  { value: "90 hari", label: "Garansi bug-fix pascarilis" },
];

export function SignificaServicesSection() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-[#F3F3F3] py-20 lg:py-32">
      <div className="clay-container space-y-14 lg:space-y-20">
        {/* Clay Services / Studio Statement Block */}
        <ClayReveal className="max-w-[740px] space-y-6">
          <h2 className="text-[clamp(2rem,3.4vw+0.8rem,3.5rem)] font-semibold tracking-[-0.03em] leading-[1.1] text-[#111111]">
            Kami membantu bisnis bertumbuh lewat rekayasa sistem yang nyata
          </h2>

          <p className="text-[17.5px] sm:text-[19.5px] leading-[1.58] text-[#4B5563] max-w-[580px]">
            Seluruh website, sistem ERP/POS, dan automasi AI dirancang serta
            ditulis langsung oleh tim engineer — tersedia skema Beli Putus
            (mulai Rp1,5 juta untuk website, mulai Rp4 juta untuk ERP/POS)
            maupun Terima Beres.
          </p>

          <div className="flex flex-wrap items-center gap-x-9 gap-y-4 pt-2">
            <Link href="/audit-gratis" className="clay-arrow-link">
              <span>Hitung estimasi proyek</span>
              <ArrowRight className="w-4 h-4 text-[#6B7280]" />
            </Link>

            <Link href="/demo" className="clay-arrow-link">
              <span>Coba demo interaktif</span>
              <ArrowRight className="w-4 h-4 text-[#6B7280]" />
            </Link>
          </div>
        </ClayReveal>

        {/* Quiet Flat Studio Proof Strip (Zero cards, zero icon clutter) */}
        <dl className="pt-12 border-t border-[#E0E0E2] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STUDIO_FACTS.map((fact, idx) => (
            <ClayReveal key={fact.label} delay={idx * 0.06} y={12} className="space-y-1.5">
              <dd className="text-[30px] sm:text-[38px] font-semibold tracking-[-0.03em] text-[#111111] tabular-nums leading-none">
                {fact.value}
              </dd>
              <dt className="text-[14px] text-[#6B7280] leading-snug">
                {fact.label}
              </dt>
            </ClayReveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
