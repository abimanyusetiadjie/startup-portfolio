"use client";

import { useState } from "react";
import { GroveNavbar } from "./GroveNavbar";
import { GroveHeroSection } from "./GroveHeroSection";
import { GroveProductsGrid } from "./GroveProductsGrid";
import { GroveSplitFeature } from "./GroveSplitFeature";
import { GroveCraftsmanshipStory } from "./GroveCraftsmanshipStory";
import { GroveFooter } from "./GroveFooter";
import { Sparkles } from "lucide-react";

export function GroveApp() {
  const [isTechMode, setIsTechMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#1A201C] flex flex-col font-sans selection:bg-[#18362B] selection:text-white">
      {/* Floating Theme Mode Switcher: Memudahkan Pengguna Melihat Versi 1:1 Asli Grove atau Versi Adaptasi Startup Portfolio */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsTechMode(!isTechMode)}
          aria-label="Toggle Mode Tampilan"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18362B] text-white text-xs font-semibold shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
          <span>Mode: {isTechMode ? "Software Studio" : "Asli 1:1 GROVE"}</span>
          <span className="text-[10px] font-mono bg-white/20 px-1.5 py-0.5 rounded">
            Ganti Mode ⇄
          </span>
        </button>
      </div>

      <GroveNavbar isTechMode={isTechMode} onToggleMode={() => setIsTechMode(!isTechMode)} />
      <GroveHeroSection isTechMode={isTechMode} />
      <GroveProductsGrid isTechMode={isTechMode} />
      <GroveSplitFeature isTechMode={isTechMode} />
      <GroveCraftsmanshipStory isTechMode={isTechMode} />
      <GroveFooter isTechMode={isTechMode} />
    </div>
  );
}
