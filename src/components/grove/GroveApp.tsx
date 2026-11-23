"use client";

import { useEffect } from "react";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveAuthorityStrip } from "./GroveAuthorityStrip";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveCaseStudySection } from "./GroveCaseStudySection";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GroveWhyAbinestSection } from "./GroveWhyAbinestSection";
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
    <div className="min-h-screen bg-white text-[#0F172A] flex flex-col font-sans selection:bg-[#0F172A] selection:text-white">
      {/* 1. Sticky Header & Navigation */}
      <GroveNavbar />

      <main className="flex-1">
        {/* MOBILE-NATIVE MINIMALIST EXPERIENCE (< 1024px) */}
        <div className="lg:hidden">
          <MobileHeroSection />
          <GroveAuthorityStrip />
          <MobileSolutionsPricingSection />
          <MobileCaseStudiesSection />
          <MobileProcessAndStackSection />
          <GroveWhyAbinestSection />
          <MobileFaqSection />
          <MobileQuickContactSection />
          <MobileFooterSection />
        </div>

        {/* DESKTOP EXPERIENCE (>= 1024px) */}
        <div className="hidden lg:block">
          {/* 2. Hero Section + Interactive Services */}
          <GroveHeroSection />

          {/* 2b. Authority Guarantee Strip & Sector Focus */}
          <GroveAuthorityStrip />

          {/* 3. Master Interactive Showroom 3 Pilar */}
          <GroveCapabilitiesSection />

          {/* 4. 3 Case Studies Terukur */}
          <GroveCaseStudySection />

          {/* 5. Prosedur Eksekusi 5 Tahap */}
          <GroveCoreShieldSection />

          {/* 5b. Standar Studio Abinest vs SaaS & Vendor Biasa */}
          <GroveWhyAbinestSection />

          {/* 6. Section Paket Harga / Investasi Transparan (#harga) */}
          <GrovePricingSection />

          {/* 7. Tech Stack Showcase (#tech-stack) */}
          <GroveTechStackShowcase />

          {/* 8. Objection-Handling FAQ (#faq) */}
          <GroveFaqSection />

          {/* 9. Final CTA + Form Konsultasi Cepat (#kontak) */}
          <GroveAmberContactSection />

          {/* 10. Footer Lengkap */}
          <GroveFooterSection />
        </div>
      </main>

      {/* 11. Floating WhatsApp Button */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
