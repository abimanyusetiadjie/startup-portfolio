"use client";

import { useEffect } from "react";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GrovePricingSection } from "./GrovePricingSection";
import { GroveTechStackShowcase } from "./GroveTechStackShowcase";
import { GroveFaqSection } from "./GroveFaqSection";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveFooterSection } from "./GroveFooterSection";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";
import { MobileHeroSection } from "./mobile/MobileHeroSection";
import { MobileSolutionsPricingSection } from "./mobile/MobileSolutionsPricingSection";
import { MobileCaseStudiesSection } from "./mobile/MobileCaseStudiesSection";
import { MobileProcessAndStackSection } from "./mobile/MobileProcessAndStackSection";
import { MobileFaqSection } from "./mobile/MobileFaqSection";
import { MobileQuickContactSection } from "./mobile/MobileQuickContactSection";
import { MobileFooterSection } from "./mobile/MobileFooterSection";
import { findVisibleSection } from "./contact-utils";

export function GroveApp() {
  useEffect(() => {
    const scrollToHash = () => {
      if (!window.location.hash) return;
      const target = findVisibleSection(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timer = window.setTimeout(scrollToHash, 80);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0A2540] flex flex-col font-sans selection:bg-[#635BFF] selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <GroveNavbar />

      <main className="flex-1">
        {/* MOBILE-NATIVE MINIMALIST EXPERIENCE (< 1024px) */}
        <div className="lg:hidden">
          <MobileHeroSection />
          <MobileSolutionsPricingSection />
          <MobileCaseStudiesSection />
          <MobileProcessAndStackSection />
          <MobileFaqSection />
          <MobileQuickContactSection />
          <MobileFooterSection />
        </div>

        {/* DESKTOP EXPERIENCE (>= 1024px — Preserved Intact) */}
        <div className="hidden lg:block">
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

          {/* 9b. Objection-Handling FAQ (#faq) */}
          <GroveFaqSection />

          {/* 10. Final CTA + Form Konsultasi Cepat (#kontak) */}
          <GroveAmberContactSection />

          {/* 11. Footer Lengkap & Badge Kepercayaan */}
          <GroveFooterSection />
        </div>
      </main>

      {/* 12. Floating WhatsApp Button */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
