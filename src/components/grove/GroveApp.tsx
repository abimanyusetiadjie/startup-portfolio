"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GrovePartnerPill } from "./GrovePartnerPill";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveTechStackGrid } from "./GroveTechStackGrid";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GroveCaseStudyTabsSection } from "./GroveCaseStudyTabsSection";
import { GroveFaqAccordionSection } from "./GroveFaqAccordionSection";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveTestimonialsGrid } from "./GroveTestimonialsGrid";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveInsightsSection } from "./GroveInsightsSection";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Header & Navigation Light Theme */}
      <GroveNavbar />

      {/* 2. Hero Section & 4-Metric Bar */}
      <GroveHeroSection />

      {/* 3. Partner & Authority Badges */}
      <GrovePartnerPill />

      {/* 4. Nilai Rekayasa & Layanan Unggulan */}
      <GroveCapabilitiesSection />

      {/* 5. 3D Tactile Tech Stack & Integrations Grid */}
      <GroveTechStackGrid />

      {/* 6. Metodologi & Perlindungan 24/7 (Abinest Core Hub) */}
      <GroveCoreShieldSection />

      {/* 7. Tab Layanan Spesialis Interaktif */}
      <GroveCaseStudyTabsSection />

      {/* 8. FAQ Accordion Transparan */}
      <GroveFaqAccordionSection />

      {/* 9. Formulir Konsultasi & Lead Capture */}
      <GroveAmberContactSection />

      {/* 10. Testimoni Klien Nyata (Wall of Love) */}
      <GroveTestimonialsGrid />

      {/* 11. Studi Kasus Unggulan (Stacked Card) */}
      <GroveCaseStudySection />

      {/* 12. Wawasan & Artikel Edukasi IT */}
      <GroveInsightsSection />

      {/* 13. Pre-Footer CTA & 4-Column Footer dengan Watermark Raksasa ABINEST */}
      <GroveFooterSection />

      {/* Floating WhatsApp Direct Chat */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
