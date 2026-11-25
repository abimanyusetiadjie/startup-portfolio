"use client";

import { SignificaNavbar } from "./SignificaNavbar";
import { SignificaHero } from "./SignificaHero";
import { SignificaSelectedWork } from "./SignificaSelectedWork";
import { SignificaServicesSection } from "./SignificaServicesSection";
import { SignificaAboutAndFaq } from "./SignificaAboutAndFaq";
import { SignificaFooter } from "./SignificaFooter";

export function SignificaApp() {
  return (
    <div className="min-h-screen bg-[#F7F7F7] text-[#171717] flex flex-col font-sans">
      <SignificaNavbar />
      <main className="flex-1">
        <SignificaHero />
        <SignificaSelectedWork />
        <SignificaServicesSection />
        <SignificaAboutAndFaq />
      </main>
      <SignificaFooter />
    </div>
  );
}
