"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveTrustBarSection } from "./GroveTrustBarSection";
import { GrovePainPointsSection } from "./GrovePainPointsSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveCaseStudiesSection } from "./GroveCaseStudiesSection";
import { GroveCraftsmanshipStory } from "./GroveCraftsmanshipStory";
import { GroveWorkflowSection } from "./GroveWorkflowSection";
import { GroveAboutTeamSection } from "./GroveAboutTeamSection";
import { GroveTestimonialsSection } from "./GroveTestimonialsSection";
import { GroveFaqSection } from "./GroveFaqSection";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0F766E] selection:text-white">
        {/* 1. Navbar: Floating Pill */}
        <GroveNavbar />

        {/* 2. Hero Section: Cinematic Image + Concrete Value Prop */}
        <GroveHeroSection />

        {/* 3. Trust Bar: Social Proof Strip (Numbers & Client Institutions) */}
        <GroveTrustBarSection />

        {/* 4. Pain Points: Kendala Operasional Nyata */}
        <GrovePainPointsSection />

        {/* 5. Katalog Layanan: 6 Solusi Lengkap Tanpa Placeholder */}
        <GroveBentoGrid />

        {/* 6. Studi Kasus: 3 Proyek Nyata Terukur (SIAKAD, WA Gateway, ERP) */}
        <GroveCaseStudiesSection />

        {/* 7. Standar Kualitas & Arsitektur */}
        <GroveCraftsmanshipStory />

        {/* 8. Cara Kerja: 5 Langkah Kolaborasi Terstruktur */}
        <GroveWorkflowSection />

        {/* 9. Tentang Studio + Tim Insinyur (Jakarta & Surabaya) */}
        <GroveAboutTeamSection />

        {/* 10. Testimoni Klien & Kepala Yayasan */}
        <GroveTestimonialsSection />

        {/* 11. FAQ: Jawaban untuk Keberatan Umum */}
        <GroveFaqSection />

        {/* 12. Form Konsultasi & WhatsApp Fast-Path */}
        <GroveConsultation />

        {/* 13. Footer Arsitektural Lengkap */}
        <GroveFooter />
      </div>
    </LanguageProvider>
  );
}
