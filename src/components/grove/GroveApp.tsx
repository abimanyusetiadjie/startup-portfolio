"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GrovePortfolioSection } from "./GrovePortfolioSection";
import { GroveServicesTableSection } from "./GroveServicesTableSection";
import { GroveProcessAndWarrantySection } from "./GroveProcessAndWarrantySection";
import { GroveContactSection } from "./GroveContactSection";
import { GroveFooter } from "./GroveFooter";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#080B11] text-white flex flex-col font-sans selection:bg-emerald-500 selection:text-zinc-950">
        {/* 1. Navbar: Refined Minimal Floating Pill */}
        <GroveNavbar />

        {/* 2. Hero Section: Confident Studio Headline + Large Hero Visual Showcase */}
        <GroveHeroSection />

        {/* 3. Selected Works & Visual Portfolio Grid (70% Visual, Large Image Viewports) */}
        <GrovePortfolioSection />

        {/* 4. Services & Pricing Specification (Mature Editorial Table Format) */}
        <GroveServicesTableSection />

        {/* 5. 4-Step Process & 3 Legal/Technical Contractual Guarantees */}
        <GroveProcessAndWarrantySection />

        {/* 6. Human Project Consultation Hub & Direct WhatsApp Fast-Track */}
        <GroveContactSection />

        {/* 7. Comprehensive Studio Footer */}
        <GroveFooter />

        {/* 8. Minimal Non-Intrusive Floating WhatsApp */}
        <GroveFloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
