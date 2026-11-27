"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const PRIMARY_LINKS = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Alur Kerja", href: "/#alur-kerja" },
  { label: "FAQ", href: "/#faq" },
];

const DRAWER_SERVICES = [
  {
    label: "Website Bisnis & Korporat",
    meta: "Mulai Rp1,5 jt · 7–14 hari",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    label: "Sistem ERP, SIAKAD & Kasir POS",
    meta: "Mulai Rp4 jt · Rp0/staf",
    href: "/jasa-pembuatan-sistem-erp",
  },
  {
    label: "Automasi AI & WhatsApp Resmi",
    meta: "Mulai Rp5 jt · Meta Cloud API",
    href: "/jasa-automasi-whatsapp",
  },
];

const DRAWER_TOOLS = [
  { label: "Demo Interaktif Sistem", href: "/demo" },
  { label: "Kalkulator Estimasi & Audit Gratis", href: "/audit-gratis" },
  {
    label: "Catatan: Beli Putus vs Sewa ERP",
    href: "/wawasan/beli-putus-vs-sewa-saas-erp",
  },
  { label: "Hubungi Tim Engineer", href: "/#kontak" },
];

export function SignificaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

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
      <header className="fixed top-0 inset-x-0 z-40 h-[72px] bg-white/95 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="sig-container h-full flex items-center justify-between gap-4">
          {/* Left: Clean Brand Wordmark with Deep Emerald Facet */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center shrink-0"
            aria-label="Abinest Beranda"
          >
            <AbinestLogo size="md" showTagline={false} variant="light" />
          </Link>

          {/* Center: Clean B2B Navigation Links */}
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-7 text-[14.5px] font-medium text-[#475569]"
          >
            {PRIMARY_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="hover:text-[#0F172A] transition-colors py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: Crisp Secondary Link + Deep Emerald Primary CTA + Menu Drawer */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/demo"
              className="hidden lg:inline-flex items-center h-[40px] px-3.5 text-[14.5px] font-medium text-[#475569] hover:text-[#0D7A67] transition-colors"
            >
              Demo
            </Link>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setQuoteOpen(true);
              }}
              className="hidden sm:inline-flex sig-btn-primary !h-[40px] !px-4 !text-[14px]"
            >
              <span>Mulai proyek</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={
                menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
              }
              className="md:hidden sig-btn-outline !h-[40px] !px-0 w-[44px]"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Clean White Dropdown Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute inset-x-0 top-full max-h-[calc(100vh-72px)] overflow-y-auto bg-white border-b border-[#E2E8F0] shadow-[0_24px_48px_rgba(15,23,42,0.08)]"
            >
              <div className="sig-container py-7 grid grid-cols-1 md:grid-cols-12 gap-7">
                <div className="md:col-span-3 space-y-3">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-[#64748B]">
                    Navigasi
                  </div>
                  <ul className="space-y-2.5">
                    {PRIMARY_LINKS.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={(e) => handleAnchorClick(e, item.href)}
                          className="text-[18px] font-medium text-[#0F172A] hover:text-[#0D7A67] transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <div className="text-[11.5px] font-semibold uppercase tracking-wider text-[#64748B]">
                    Spesialisasi Layanan
                  </div>
                  <div className="divide-y divide-[#E2E8F0] border-y border-[#E2E8F0]">
                    {DRAWER_SERVICES.map((srv) => (
                      <Link
                        key={srv.href}
                        href={srv.href}
                        onClick={() => setMenuOpen(false)}
                        className="group py-3 flex items-center justify-between gap-4 hover:bg-[#F8FAFC] px-2 -mx-2 rounded-[10px] transition-colors"
                      >
                        <div>
                          <div className="text-[15px] font-medium text-[#0F172A] group-hover:text-[#0D7A67] transition-colors">
                            {srv.label}
                          </div>
                          <div className="text-[12.5px] text-[#64748B] mt-0.5">
                            {srv.meta}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#0D7A67] transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-4 flex flex-col justify-between gap-6">
                  <div className="space-y-3">
                    <div className="text-[11.5px] font-semibold uppercase tracking-wider text-[#64748B]">
                      Alat &amp; Wawasan
                    </div>
                    <ul className="space-y-2.5">
                      {DRAWER_TOOLS.map((tool) => (
                        <li key={tool.href}>
                          <Link
                            href={tool.href}
                            onClick={(e) => handleAnchorClick(e, tool.href)}
                            className="text-[15px] font-medium text-[#0F172A] hover:text-[#0D7A67] transition-colors"
                          >
                            {tool.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setQuoteOpen(true);
                    }}
                    className="sig-btn-primary w-full sm:w-fit"
                  >
                    <span>Mulai proyek sekarang</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
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
