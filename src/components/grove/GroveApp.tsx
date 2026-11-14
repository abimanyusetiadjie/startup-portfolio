"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GrovePricingSection } from "./GrovePricingSection";
import { GroveTechStackShowcase } from "./GroveTechStackShowcase";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";
import { MobileHeroSection } from "./mobile/MobileHeroSection";
import { MobileSolutionsPricingSection } from "./mobile/MobileSolutionsPricingSection";
import { MobileCaseStudiesSection } from "./mobile/MobileCaseStudiesSection";
import { MobileProcessAndStackSection } from "./mobile/MobileProcessAndStackSection";
import { MobileQuickContactSection } from "./mobile/MobileQuickContactSection";
import { MobileFooterSection } from "./mobile/MobileFooterSection";

export function GroveApp() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <GroveNavbar />

      {/* MOBILE-NATIVE MINIMALIST EXPERIENCE (< 1024px) */}
      <main className="lg:hidden flex-1">
        <MobileHeroSection />
        <MobileSolutionsPricingSection />
        <MobileCaseStudiesSection />
        <MobileProcessAndStackSection />
        <MobileQuickContactSection />
        <MobileFooterSection />
      </main>

      {/* DESKTOP EXPERIENCE (>= 1024px — Preserved Intact) */}
      <main className="hidden lg:block flex-1">
        {/* 2. Hero Section + Interactive Services */}
        <GroveHeroSection />

        {/* 3. Master Interactive Showroom 3 Pilar + Live Simulators (Screen 2) */}
        <GroveCapabilitiesSection />

        {/* 5. Tabbed Project Showcase / 3 Case Studies Terukur (Screen 3) */}
        <GroveCaseStudySection />

        {/* 6. Alur Kerja 5 Langkah + Bento Studio Grid */}
        <GroveCoreShieldSection />

        {/* 8. Section Paket Harga / Investasi Transparan (#harga) */}
        <GrovePricingSection />

        {/* 9. Tech Stack & Server Architecture Showcase (#tech-stack) */}
        <GroveTechStackShowcase />

        {/* 10. Final CTA + Form Konsultasi Cepat (#kontak) */}
        <GroveAmberContactSection />

        {/* 11. Footer Lengkap & Badge Kepercayaan */}
        <GroveFooterSection />
      </main>

      {/* 12. Floating WhatsApp Button */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
