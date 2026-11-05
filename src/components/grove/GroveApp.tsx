"use client";

import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveBentoGrid } from "./GroveBentoGrid";
import { GroveSplitFeature } from "./GroveSplitFeature";
import { GroveCraftsmanshipStory } from "./GroveCraftsmanshipStory";
import { GroveConsultation } from "./GroveConsultation";
import { GroveFooter } from "./GroveFooter";

export function GroveApp() {
  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A201C] flex flex-col font-sans selection:bg-[#18362B] selection:text-white">
      <GroveNavbar />
      <GroveHeroSection />
      <GroveBentoGrid />
      <GroveSplitFeature />
      <GroveCraftsmanshipStory />
      <GroveConsultation />
      <GroveFooter />
    </div>
  );
}
