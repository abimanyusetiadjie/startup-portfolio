"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GrovePartnerPill } from "./GrovePartnerPill";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveTestimonialsGrid } from "./GroveTestimonialsGrid";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GroveTechStackGrid } from "./GroveTechStackGrid";
import { GroveFaqAccordionSection } from "./GroveFaqAccordionSection";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#059669] selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <GroveNavbar />

      {/* 2. Hero Section + 4-Metric Trust Bar */}
      <GroveHeroSection />

      {/* 3. Trusted By / Grayscale Client Institution Bar */}
      <GrovePartnerPill />

      {/* 4 & 5. Problem / Pain Points + Value Proposition (Mengapa Abinest) */}
      <GroveCapabilitiesSection />

      {/* 6. Layanan Utama - 12-Column Modular Bento Grid */}
      <GroveBentoGrid />

      {/* 7. Portfolio / 3 Case Studies Terukur + Mid-Page CTA */}
      <GroveCaseStudySection />

      {/* 8. Testimoni Kredibel (Nama + Jabatan + Institusi + Hasil) */}
      <GroveTestimonialsGrid />

      {/* 9 & 11. Cara Kerja (5 Langkah) + Engagement Model (2 Opsi Kerja Sama) */}
      <GroveCoreShieldSection />

      {/* 10. Tech Stack Resmi & Keamanan dalam Bahasa Manfaat */}
      <GroveTechStackGrid />

      {/* 12. FAQ (8 Pertanyaan Kunci Institusi) */}
      <GroveFaqAccordionSection />

      {/* 13. Final CTA + Form Konsultasi 4 Field Sederhana */}
      <GroveAmberContactSection />

      {/* 14. Footer Lengkap & Badge Kepercayaan */}
      <GroveFooterSection />

      {/* 15. Floating WhatsApp & Sticky Mobile CTA Bar */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
