"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { AbinestLogo } from "@/components/grove/AbinestLogo";
import { SignificaQuoteModal } from "./SignificaQuoteModal";

const NAV_LINKS = [
  { label: "Karya", href: "/#karya" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Harga", href: "/harga" },
  { label: "Demo", href: "/demo" },
  { label: "FAQ", href: "/#faq" },
];

export function SignificaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const progressRef = useRef<HTMLSpanElement | null>(null);
  const rafId = useRef<number | null>(null);

  // Clay.global signature header behavior + zero-rerender GPU 1.5px reading progress hairline
  useEffect(() => {
    const updateProgress = () => {
      rafId.current = null;
      if (!progressRef.current) return;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      progressRef.current.style.transform = `scaleX(${ratio})`;
    };

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 140 && y > lastY.current + 6 && !menuOpen) {
        setHidden(true);
      } else if (y < lastY.current - 6 || y <= 80) {
        setHidden(false);
      }
      lastY.current = y;
      if (rafId.current === null) {
        rafId.current = window.requestAnimationFrame(updateProgress);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateProgress, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateProgress);
      if (rafId.current !== null) window.cancelAnimationFrame(rafId.current);
    };
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
        <div className="clay-container h-[68px] lg:h-[82px] flex items-center justify-between gap-6">
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

        {/* Ultra-thin 1.5px GPU reading progress hairline */}
        <span
          ref={progressRef}
          aria-hidden="true"
          style={{ transform: "scaleX(0)" }}
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#111111] origin-left will-change-transform transition-opacity duration-200 ${
            scrolled && !menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Compact, Airy Mobile Dropdown Sheet (Zero full-screen clutter) */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              aria-label="Navigasi seluler"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden relative z-40 bg-white border-t border-[#EBECEF] rounded-b-[20px] shadow-[0_24px_48px_-16px_rgba(17,19,24,0.16)]"
            >
              <div className="px-5 pt-2 pb-5">
                <ul className="divide-y divide-[#F1F2F4]">
                  {NAV_LINKS.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleAnchorClick(e, item.href)}
                        className="flex items-center justify-between py-3.5 text-[16.5px] font-medium tracking-[-0.01em] text-[#111111] active:opacity-60 transition-opacity"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-4 h-4 text-[#9CA3AF]" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 mt-1 border-t border-[#EBECEF] grid grid-cols-2 gap-2.5">
                  <Link
                    href="/karya"
                    onClick={() => setMenuOpen(false)}
                    className="clay-pill-outline !h-[42px] !px-3 !text-[13.5px] w-full"
                  >
                    Semua Karya
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      setQuoteOpen(true);
                    }}
                    className="clay-pill-btn !h-[42px] !px-3 !text-[13.5px] w-full"
                  >
                    Mulai Proyek
                  </button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* True Viewport Backdrop Sibling (Outside transformed <header> so fixed covers full mobile screen & closes menu on outside tap) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.button
            type="button"
            aria-label="Tutup latar menu navigasi"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setMenuOpen(false)}
            className="md:hidden fixed inset-x-0 top-[68px] bottom-0 z-30 bg-[#111318]/25 backdrop-blur-[2px] cursor-default"
          />
        )}
      </AnimatePresence>

      <SignificaQuoteModal
        open={quoteOpen}
        onClose={() => setQuoteOpen(false)}
      />
    </>
  );
}
