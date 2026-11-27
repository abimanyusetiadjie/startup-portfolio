"use client";

import { useState } from "react";
import Link from "next/link";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const NAV_LINKS = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Demo", href: "/demo" },
  { label: "Kontak", href: "/#kontak" },
];

export function SignificaNavbar() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const hashIdx = href.indexOf("#");
    if (hashIdx === -1) return;
    const hash = href.slice(hashIdx);
    const el = document.querySelector(hash);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (window.location.hash !== hash) {
        window.history.replaceState(null, "", hash);
      }
    }
  };

  return (
    <>
      {/* Surgical 3px Editorial Top Rule (Work & Co restraint) */}
      <div className="h-[3px] w-full bg-[#D13424]" aria-hidden="true" />

      <header className="bg-white">
        <div className="ed-container pt-8 sm:pt-12 pb-8 sm:pb-10 grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-x-10 items-baseline">
          {/* Left Rail: Pure Brand Wordmark */}
          <div className="lg:col-span-4 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Abinest Beranda"
            >
              <AbinestLogo size="md" showTagline={false} variant="light" />
            </Link>

            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="lg:hidden font-serif text-[15.5px] ed-link cursor-pointer"
            >
              Mulai proyek
            </button>
          </div>

          {/* Right Track: Plain Calm Horizontal Navigation (Zero hamburger clutter, zero blurry sticky bleed) */}
          <div className="lg:col-span-8 flex items-baseline justify-between gap-6">
            <nav
              aria-label="Navigasi utama"
              className="flex items-center gap-x-6 sm:gap-x-8 text-[14.5px] font-medium text-[#595959]"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="hover:text-[#111111] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              onClick={() => setQuoteOpen(true)}
              className="hidden lg:inline-block font-serif text-[15.5px] ed-link cursor-pointer"
            >
              Mulai proyek
            </button>
          </div>
        </div>
      </header>

      <SignificaQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
