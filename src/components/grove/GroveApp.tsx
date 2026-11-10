"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GrovePartnerPill } from "./GrovePartnerPill";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveTestimonialsGrid } from "./GroveTestimonialsGrid";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GrovePricingSection } from "./GrovePricingSection";
import { GroveEngineeringTrustSection } from "./GroveEngineeringTrustSection";
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

      {/* 3. Trusted Production Deployments Ribbon (Single Sleek Executive Bar) */}
      <GrovePartnerPill />

      {/* 4. Master Interactive Showroom 3 Pilar + Live Simulators (Screen 2) */}
      <GroveCapabilitiesSection />

      {/* 6. Tabbed Project Showcase / 3 Case Studies Terukur (Screen 3) */}
      <GroveCaseStudySection />

      {/* 7. Testimoni Kredibel Terkurasi (Screen 4) */}
      <GroveTestimonialsGrid />

      {/* 8. Alur Kerja 5 Langkah + Bukti 100% Source Code Handover (Screen 5) */}
      <GroveCoreShieldSection />

      {/* 9. Section Paket Harga / Investasi Transparan (#harga) */}
      <GrovePricingSection />

      {/* 10. Standar Rekayasa Tim & Interactive FAQ (#faq) */}
      <GroveEngineeringTrustSection />

      {/* 11. Final CTA + Form Konsultasi Cepat (#kontak) */}
      <GroveAmberContactSection />

      {/* 11. Footer Lengkap & Badge Kepercayaan */}
      <GroveFooterSection />

      {/* 12. Floating WhatsApp & Sticky Mobile Quick Action Bar */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
