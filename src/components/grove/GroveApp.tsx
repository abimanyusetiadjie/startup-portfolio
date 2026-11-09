"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GrovePartnerPill } from "./GrovePartnerPill";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveTestimonialsGrid } from "./GroveTestimonialsGrid";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GroveTechStackGrid } from "./GroveTechStackGrid";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <GroveNavbar />

      {/* 2. Hero Section + 4-Metric Trust Bar (Screen 1) */}
      <GroveHeroSection />

      {/* 3. Trusted By / Grayscale Client Institution Bar */}
      <GrovePartnerPill />

      {/* 4. Master Interactive Showroom 3 Pilar + Live Simulators (Screen 2) */}
      <GroveCapabilitiesSection />

      {/* 5. Tabbed Project Showcase / 3 Case Studies Terukur (Screen 3) */}
      <GroveCaseStudySection />

      {/* 6. Testimoni Kredibel Terkurasi (Screen 4) */}
      <GroveTestimonialsGrid />

      {/* 7. Alur Kerja 5 Langkah + Bukti 100% Source Code Handover (Screen 5) */}
      <GroveCoreShieldSection />

      {/* 8. 12 Squircle Tech Stack Resmi Sesuai Referensi Gambar 2 (Screen 6) */}
      <GroveTechStackGrid />

      {/* 10. Final CTA + Form Konsultasi 4 Field Cepat (Screen 8) */}
      <GroveAmberContactSection />

      {/* 11. Footer Lengkap & Badge Kepercayaan */}
      <GroveFooterSection />

      {/* 12. Floating WhatsApp & Sticky Mobile Quick Action Bar */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
