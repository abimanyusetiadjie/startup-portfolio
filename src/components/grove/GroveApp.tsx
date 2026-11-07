"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveFaqSection } from "./GroveFaqSection";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";

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

        {/* 4. FAQ & Transparansi Garansi: Jawaban untuk Keberatan Umum & SLA */}
        <GroveFaqSection />

        {/* 5. Form Konsultasi Proyek & Fast-Path WhatsApp */}
        <GroveConsultation />

        {/* 6. Footer Arsitektural Lengkap */}
        <GroveFooter />
      </div>
    </LanguageProvider>
  );
}
