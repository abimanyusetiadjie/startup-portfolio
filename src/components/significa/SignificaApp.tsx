"use client";

import { SignificaNavbar } from "./SignificaNavbar";
import { SignificaHero } from "./SignificaHero";
import { SignificaSelectedWork } from "./SignificaSelectedWork";
import { SignificaServicesSection } from "./SignificaServicesSection";
import { SignificaAboutAndFaq } from "./SignificaAboutAndFaq";
import { SignificaFooter } from "./SignificaFooter";

export function SignificaApp() {
  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans">
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
