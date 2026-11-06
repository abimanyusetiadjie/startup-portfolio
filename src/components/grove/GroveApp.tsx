"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveStatementSection } from "./GroveStatementSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveSplitFeature } from "./GroveSplitFeature";
import { GroveCraftsmanshipStory } from "./GroveCraftsmanshipStory";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";

export function GroveApp() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-[#134E4A] flex flex-col font-sans selection:bg-[#0F766E] selection:text-white">
        <GroveNavbar />
        <GroveHeroSection />
        <GroveStatementSection />
        <GroveBentoGrid />
        <GroveSplitFeature />
        <GroveCraftsmanshipStory />
        <GroveConsultation />
        <GroveFooter />
      </div>
    </LanguageProvider>
  );
}
