"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveCapabilitiesSection } from "./GroveCapabilitiesSection";
import { GroveTechStackGrid } from "./GroveTechStackGrid";
import { GroveCoreShieldSection } from "./GroveCoreShieldSection";
import { GroveCaseStudyTabsSection } from "./GroveCaseStudyTabsSection";
import { GroveFaqAccordionSection } from "./GroveFaqAccordionSection";
import { GroveAmberContactSection } from "./GroveAmberContactSection";
import { GroveTestimonialsGrid } from "./GroveTestimonialsGrid";
import { GroveFinalCtaSection } from "./GroveFinalCtaSection";
import { GroveFooter } from "./GroveFooter";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#06080C] text-white flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
        {/* 1. Floating Pill Navbar with Amber CTA */}
        <GroveNavbar />

        {/* 2. Hero Section: Split Headline + Tech Node Network Diagram + Stats Counter + Partner Logo Strip */}
        <GroveHeroSection />

        {/* 3. What We Do & How We Can Help You (4 Photographic/Environment Cards) */}
        <GroveCapabilitiesSection />

        {/* 4. Comprehensive Services for Your Digital Stack (Tech Ecosystem Grid) */}
        <GroveTechStackGrid />

        {/* 5. Central Glowing Shield Architecture: Our 4 Pillars */}
        <GroveCoreShieldSection />

        {/* 6. Interactive Tabbed Case Studies (Deep Dive with High-Res UI Mockup) */}
        <GroveCaseStudyTabsSection />

        {/* 7. Ask Less, Know More (Minimalist Accordion FAQ) */}
        <GroveFaqAccordionSection />

        {/* 8. Start a Project with Us (Executive Contact Form with Radiating Amber Glow) */}
        <GroveAmberContactSection />

        {/* 9. Why The Modern Innovators Choose Us (5-Star Testimonials with Client Portraits) */}
        <GroveTestimonialsGrid />

        {/* 10. Ready to Elevate Your IT Infrastructure? (Final CTA with Warm Amber Backlight) */}
        <GroveFinalCtaSection />

        {/* 11. Comprehensive Studio Footer with Gigantic Watermark Typography */}
        <GroveFooter />

        {/* 12. Floating WhatsApp Quick Contact Hub */}
        <GroveFloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
