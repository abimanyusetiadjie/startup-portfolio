"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveCredibilityTabsSection } from "./GroveCredibilityTabsSection";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";
import { GroveFloatingWhatsApp } from "./GroveFloatingWhatsApp";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#0F766E] selection:text-white">
        {/* 1. Navbar: Floating Pill (Beranda | Layanan | Harga | Bantuan | Tentang + Masuk & Konsultasi Gratis) */}
        <GroveNavbar />

        {/* 2. Hero Section: Buyer-Centric Copy + Live Dashboard Telemetry Mockup + Social Proof Strip */}
        <GroveHeroSection />

        {/* 3. Layanan & Estimasi Harga Transparan: 6 Kartu Sistem + Skema Pembayaran Milestone (#systems & #harga) */}
        <GroveBentoGrid />

        {/* 4. Pusat Kredibilitas & Bantuan (Interactive 3-Tab Switcher: Studi Kasus & Testimoni | 4 Langkah Kerja | FAQ & Garansi) (#bantuan) */}
        <GroveCredibilityTabsSection />

        {/* 5. 1-Click WhatsApp Fast-Path Consultation Hub (#konsultasi) */}
        <GroveConsultation />

        {/* 6. Footer Arsitektural Lengkap (#tentang) */}
        <GroveFooter />

        {/* 7. Floating WhatsApp Quick Contact Hub (Minimalist on Mobile, Interactive on Desktop) */}
        <GroveFloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
