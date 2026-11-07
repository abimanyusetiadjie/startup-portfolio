"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0F766E] selection:text-white">
        {/* 1. Navbar: Floating Pill (Sticky, bersih) */}
        <GroveNavbar />

        {/* 2. Hero Section: Cinematic Architectural Monolith + Concrete Value Prop */}
        <GroveHeroSection />

        {/* 3. Layanan & Sistem Inti: 6 Solusi Unggulan Terukur */}
        <GroveBentoGrid />

        {/* 4. 1-Click WhatsApp Fast-Path Consultation Hub + Guarantees */}
        <GroveConsultation />

        {/* 5. Footer Arsitektural Lengkap */}
        <GroveFooter />

        {/* 6. Floating WhatsApp Quick Contact Hub */}
        <GroveFloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
