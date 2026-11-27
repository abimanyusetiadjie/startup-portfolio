"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const NAV_LINKS = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Demo", href: "/demo" },
  { label: "FAQ", href: "/#faq" },
];

const MOBILE_SERVICES = [
  {
    label: "Website Bisnis & Portal",
    meta: "Mulai Rp1,5 jt · 7–14 hari",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    label: "ERP, WMS, POS & SIAKAD",
    meta: "Mulai Rp4 jt · Rp0/staf",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    label: "Automasi AI & WhatsApp",
    meta: "Mulai Rp5 jt · API Resmi Meta",
    href: "/jasa-automasi-whatsapp",
  },
];

export function SignificaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Clay.global signature header behavior: retracts smoothly on scroll down, reveals on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y > 140 && y > lastY.current + 6 && !menuOpen) {
        setHidden(true);
      } else if (y < lastY.current - 6 || y <= 80) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMenuOpen(false);
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
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${
          scrolled || menuOpen
            ? "bg-white/95 backdrop-blur-md border-b border-[#EBECEF]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="clay-container h-[68px] lg:h-[96px] flex items-center justify-between gap-6">
          {/* Left: Clean Brand Wordmark (Clay left anchor) */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center shrink-0"
            aria-label="Abinest Beranda"
          >
            <AbinestLogo size="md" showTagline={false} variant="light" />
          </Link>

          {/* Right: Clay Exact Composition — Clean Links + Dark Pill Contact CTA + Minimal 2-Line Mobile Trigger */}
          <div className="flex items-center gap-7 lg:gap-9">
            <nav
              aria-label="Navigasi utama"
              className="hidden md:flex items-center gap-7 lg:gap-9 text-[15px] font-medium text-[#111111]"
            >
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                  className="hover:opacity-60 transition-opacity py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  setQuoteOpen(true);
                }}
                className="clay-pill-btn !h-[38px] lg:!h-[44px] !px-5 lg:!px-6 !text-[14px] lg:!text-[14.5px]"
              >
                Kontak
              </button>

              {/* Clay Mobile 2-Line Minimalist Trigger (Zero boxy outline) */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-expanded={menuOpen}
                aria-label={
                  menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
                }
                className="md:hidden w-9 h-9 inline-flex flex-col items-center justify-center gap-[6px] text-[#111111] cursor-pointer"
              >
                {menuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <>
                    <span className="block w-6 h-[1.75px] bg-[#111111]" />
                    <span className="block w-6 h-[1.75px] bg-[#111111]" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Clean Full-Width Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden bg-white border-t border-[#EBECEF] max-h-[calc(100vh-68px)] overflow-y-auto"
            >
              <div className="clay-container py-8 space-y-8">
                <ul className="space-y-4">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className="block text-[26px] font-semibold tracking-[-0.02em] text-[#111111]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/audit-gratis"
                      onClick={() => setMenuOpen(false)}
                      className="block text-[26px] font-semibold tracking-[-0.02em] text-[#111111]"
                    >
                      Kalkulator Biaya
                    </Link>
                  </li>
                </ul>

                <div className="pt-6 border-t border-[#E5E7EB] space-y-3">
                  <p className="text-[12px] uppercase tracking-wider text-[#8C8E94]">
                    Layanan
                  </p>
                  <div className="space-y-3">
                    {MOBILE_SERVICES.map((srv) => (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center justify-between gap-4 py-1"
                      >
                        <div>
                          <div className="text-[15.5px] font-medium text-[#111111]">
                            {srv.label}
                          </div>
                          <div className="text-[13px] text-[#6B7280]">
                            {srv.meta}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#8C8E94]" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <SignificaQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
