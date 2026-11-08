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
      <div className="min-h-screen bg-[#121212] text-white flex flex-col font-sans selection:bg-[#E06D3B] selection:text-white">
        {/* 1. Top Bar Navbar (Logo left, subtle links center, dark pill Contact Us right) */}
        <GroveNavbar />

        {/* 2. Hero + 4x4 Circuit Tile Matrix + 4-Col Stats + "Works With" Glowing Platform Pill */}
        <GroveHeroSection />

        {/* 3. "What We Do, And How It Helps You" 5-Panel Horizontal Image Accordion + 3-Col Perks */}
        <GroveCapabilitiesSection />

        {/* 4. "Comprehensive IT Services That Power Your Stack" 2-Row Staggered Colorful App Icon Matrix */}
        <GroveTechStackGrid />

        {/* 5. "24/7 Monitoring and Support All Year Round, 365" 4-Quadrant Diagram with Central Glowing Shield */}
        <GroveCoreShieldSection />

        {/* 6. "IT Support That Actually Delivers." 6-Tab Bar + Split Left Bullets / Right Control Room Image */}
        <GroveCaseStudyTabsSection />

        {/* 7. "Ask Less. Know More." Minimalist Bottom-Bordered FAQ Rows */}
        <GroveFaqAccordionSection />

        {/* 8. "Start a Project or a Conversation" Centered Dark Glass Form Over Diagonal Orange Light Beam */}
        <GroveAmberContactSection />

        {/* 9. 2-Row Staggered Testimonials Wall + 10. 3D Stacked Case Study Deck + 11. 3-Col Insights Grid */}
        <GroveTestimonialsGrid />

        {/* 12. "Got a Vision or IT Need? Let's Talk." Horizon Sunrise Glow CTA */}
        <GroveFinalCtaSection />

        {/* 13. Boxed 4-Col Footer with Vertical Dividers + Giant Cut-Off Copper "Abinest IT" Watermark */}
        <GroveFooter />

        {/* Floating WhatsApp Quick Contact */}
        <GroveFloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
