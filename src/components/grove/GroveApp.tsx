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
    <div className="min-h-screen bg-[#0A0A0C] text-white flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Sticky Glass Navbar */}
      <GroveNavbar />

      {/* 2. Hero Section & 4-Metric Bar */}
      <GroveHeroSection />

      {/* 3. Trust Badges / Certified Partner */}
      <GrovePartnerPill />

      {/* 4. About / Value Proposition ("We Fix. We Automate. You Level Up.") */}
      <GroveCapabilitiesSection />

      {/* 5. Tech Stack & Integrations ("Connected to the Tools That Power Your Stack") */}
      <GroveTechStackGrid />

      {/* 6. Core Methodology ("We Don't Just Support IT. We Fuel Growth.") */}
      <GroveCoreShieldSection />

      {/* 7. Detailed Services ("IT Support That Actually Shows Up") */}
      <GroveCaseStudyTabsSection />

      {/* 8. Minimalist FAQ Accordion ("Ask Less. Know More.") */}
      <GroveFaqAccordionSection />

      {/* 9. Lead Capture Contact Form ("Good IT Starts With a Conversation") */}
      <GroveAmberContactSection />

      {/* 10. Client Testimonials ("Why TechRoos Clients Stick With Us") */}
      <GroveTestimonialsGrid />

      {/* 11. Featured Case Study ("Scaling Infrastructure: How We Cut Cloud Costs by 40%") */}
      <GroveCaseStudySection />

      {/* 12. Latest Insights & Blog ("Our Latest Insights & Articles") */}
      <GroveInsightsSection />

      {/* 13. Pre-Footer CTA with Horizon Glow & 4-Column Main Footer with Giant Watermark */}
      <GroveFooterSection />

      {/* Floating Quick WhatsApp Action Hub */}
      <GroveFloatingWhatsApp />
    </div>
  );
}
