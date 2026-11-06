"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveTrustBarSection } from "./GroveTrustBarSection";
import { GrovePainPointsSection } from "./GrovePainPointsSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveCaseStudiesSection } from "./GroveCaseStudiesSection";
import { GroveCraftsmanshipStory } from "./GroveCraftsmanshipStory";
import { GroveTestimonialsSection } from "./GroveTestimonialsSection";
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

        {/* 3. Trust Bar: Social Proof Strip (Numbers & Client Institutions) */}
        <GroveTrustBarSection />

        {/* 4. Pain Points: Kendala Operasional Nyata (Maksimal 4 Kartu) */}
        <GrovePainPointsSection />

        {/* 5. Layanan Utama: Solusi yang kami bangun (6 Kartu Ringkas) */}
        <GroveBentoGrid />

        {/* 6. Studi Kasus: Hasil nyata di lapangan (2 Proyek Unggulan Terukur) */}
        <GroveCaseStudiesSection />

        {/* 7. Standar Kualitas: Standar yang kami pegang (4 Poin Padat) */}
        <GroveCraftsmanshipStory />

        {/* 8. Testimoni Klien & Kepala Yayasan (3 Testimoni Kuat) */}
        <GroveTestimonialsSection />

        {/* 9. FAQ: Jawaban untuk Keberatan Umum (5 Pertanyaan Terarah) */}
        <GroveFaqSection />

        {/* 10. Form Konsultasi & WhatsApp Fast-Path */}
        <GroveConsultation />

        {/* 11. Footer Arsitektural Lengkap */}
        <GroveFooter />
      </div>
    </LanguageProvider>
  );
}
