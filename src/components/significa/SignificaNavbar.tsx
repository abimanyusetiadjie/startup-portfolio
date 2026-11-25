"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, MoreHorizontal, X } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import { buildConsultationWaUrl } from "@/components/grove/contact-utils";
import { trackWhatsAppClick } from "@/lib/analytics";

const PRIMARY_LINKS = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Tentang", href: "/#tentang" },
];

const DRAWER_SERVICES = [
  {
    label: "Website Bisnis & Korporat",
    meta: "Mulai Rp1,5–3,5 jt · 7–14 hari",
    href: "/jasa-pembuatan-website-jakarta",
  },
  {
    label: "Sistem ERP, SIAKAD & Kasir POS",
    meta: "Mulai Rp4–12 jt · Rp0/staf",
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
  { label: "Pertanyaan Umum (FAQ)", href: "/#faq" },
];

export function SignificaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const quoteWaHref = buildConsultationWaUrl(
    "Halo Tim Abinest, saya ingin berdiskusi mengenai pembuatan website/sistem untuk bisnis kami."
  );

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
    <header className="fixed top-0 inset-x-0 z-40 h-[76px] bg-[#F7F7F7]/95 backdrop-blur-md border-b border-[#E8E8E8]">
      <div className="sig-container h-full flex items-center justify-between gap-4">
        {/* Left: Clean Brand Wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="inline-flex items-center shrink-0"
          aria-label="Abinest Beranda"
        >
          <AbinestLogo size="md" showTagline={false} variant="light" />
        </Link>

        {/* Right: Significa Exact Layout — 3 Links + Dark CTA + Outlined '...' Drawer Trigger */}
        <div className="flex items-center gap-6">
          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-6 text-[15.5px] font-medium text-[#171717]"
          >
            {PRIMARY_LINKS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
                className="sig-link py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={quoteWaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  source: "significa_navbar_cta",
                  label: "mulai_proyek",
                })
              }
              className="hidden md:inline-flex sig-btn-primary"
            >
              Mulai proyek
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="sig-btn-outline !px-0 w-[56px]"
            >
              {menuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <MoreHorizontal className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Significa-Style Full-Width Clean Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-76px)] overflow-y-auto bg-[#F7F7F7] border-b border-[#E8E8E8] shadow-[0_24px_48px_rgba(23,23,23,0.08)]"
          >
            <div className="sig-container py-7 grid grid-cols-1 md:grid-cols-12 gap-7">
              {/* Mobile Primary Nav */}
              <div className="md:col-span-3 space-y-3">
                <div className="text-xs font-medium uppercase tracking-wider text-[#6F6F71]">
                  Navigasi
                </div>
                <ul className="space-y-2.5">
                  {PRIMARY_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className="sig-link text-xl font-medium text-[#171717]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/#kontak"
                      onClick={(e) => handleAnchorClick(e, "/#kontak")}
                      className="sig-link text-xl font-medium text-[#171717]"
                    >
                      Kontak
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="md:col-span-5 space-y-3">
                <div className="text-xs font-medium uppercase tracking-wider text-[#6F6F71]">
                  Spesialisasi Layanan
                </div>
                <div className="divide-y divide-[#E8E8E8] border-y border-[#E8E8E8]">
                  {DRAWER_SERVICES.map((srv) => (
                    <Link
                      key={srv.href}
                      href={srv.href}
                      onClick={() => setMenuOpen(false)}
                      className="group py-3 flex items-center justify-between gap-4 hover:bg-[#EDEDED]/70 px-2 -mx-2 rounded-[12px] transition-colors"
                    >
                      <div>
                        <div className="text-[15.5px] font-medium text-[#171717]">
                          {srv.label}
                        </div>
                        <div className="text-xs text-[#6F6F71] mt-0.5">
                          {srv.meta}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#6F6F71] group-hover:text-[#171717] transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Interactive Tools & Direct CTA */}
              <div className="md:col-span-4 flex flex-col justify-between gap-6">
                <div className="space-y-3">
                  <div className="text-xs font-medium uppercase tracking-wider text-[#6F6F71]">
                    Alat &amp; Simulasi
                  </div>
                  <ul className="space-y-2.5">
                    {DRAWER_TOOLS.map((tool) => (
                      <li key={tool.href}>
                        <Link
                          href={tool.href}
                          onClick={(e) => handleAnchorClick(e, tool.href)}
                          className="sig-link text-[15.5px] font-medium text-[#171717]"
                        >
                          {tool.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={quoteWaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackWhatsAppClick({
                      source: "significa_drawer_cta",
                      label: "mulai_proyek",
                    });
                    setMenuOpen(false);
                  }}
                  className="sig-btn-primary w-full sm:w-fit"
                >
                  <span>Mulai proyek via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
