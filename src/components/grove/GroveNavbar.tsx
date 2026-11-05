"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export function GroveNavbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 24);
  });

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      const element = document.getElementById(targetId.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const navLinks = [
    { id: "systems", label: "Sistem & Solusi", href: "#systems" },
    { id: "case-study", label: "Studi Kasus SIAKAD", href: "#case-study" },
    { id: "engineering", label: "Standar Rekayasa", href: "#engineering" },
  ];

  return (
    <div className="w-full font-sans sticky top-0 z-40">
      {/* 1. SCROLL PROGRESS BAR (Garis tipis di tepi atas layar) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#18362B] via-[#D15B3A] to-[#10B981] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. TOP ANNOUNCEMENT BAR (Deep Forest Green #142E22) */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-[#142E22] text-[#E0E7E2] py-2 px-4 text-center text-[11px] sm:text-xs font-medium tracking-wide flex items-center justify-center gap-2 border-b border-[#0F241B]"
      >
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
          <span>
            Jaminan SLA Uptime 99.9% • Arsitektur Next.js 15 Edge • Konsultasi Teknis Arsitektur Bebas Biaya
          </span>
        </span>
      </motion.div>

      {/* 3. MAIN NAVIGATION (Sticky Morphing Capsule) */}
      <motion.header
        animate={{
          backgroundColor: isScrolled
            ? "rgba(244, 241, 234, 0.88)"
            : "rgba(244, 241, 234, 1)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "0 10px 25px -5px rgba(24, 54, 43, 0.07)"
            : "0 0 0 0 rgba(0,0,0,0)",
          borderBottomColor: isScrolled ? "#DDD7C9" : "#E7E2D6",
          paddingTop: isScrolled ? "0.75rem" : "1rem",
          paddingBottom: isScrolled ? "0.75rem" : "1rem",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="border-b px-4 sm:px-8 lg:px-12 transition-colors"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Brand Logo: ABINEST */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.span
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-heading font-extrabold text-2xl tracking-tight text-[#18362B] group-hover:text-[#D15B3A] transition-colors"
            >
              ABINEST
            </motion.span>
            <span className="hidden sm:inline-block font-mono text-[10px] uppercase tracking-widest text-[#717872] px-2 py-0.5 rounded bg-[#EAE5D9] border border-[#DDD7C9]">
              STUDIO
            </span>
          </Link>

          {/* Center Nav Links with Shared Layout Pill */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-2 text-xs font-semibold text-[#1A201C] tracking-wide relative p-1 rounded-full bg-[#EAE5D9]/50 border border-[#E7E2D6]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoveredNav(link.id)}
                className="relative px-3.5 py-1.5 rounded-full transition-colors z-10 hover:text-[#18362B]"
              >
                {hoveredNav === link.id && (
                  <motion.div
                    layoutId="activeNavPill"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                  />
                )}
                {link.label}
              </a>
            ))}

            <Link
              href="/portal"
              onMouseEnter={() => setHoveredNav("portal")}
              className="relative px-3.5 py-1.5 rounded-full text-[#18362B] font-bold flex items-center gap-1 z-10"
            >
              {hoveredNav === "portal" && (
                <motion.div
                  layoutId="activeNavPill"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                />
              )}
              <span>Client Portal</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1A201C] hover:text-[#18362B] hover:bg-[#EAE5D9] transition-colors"
            >
              Masuk Klien
            </Link>

            <motion.a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-5 py-2 rounded-full bg-[#18362B] text-white font-semibold text-xs hover:bg-[#122A21] transition-all shadow-sm flex items-center gap-1.5"
            >
              <span>Konsultasi Proyek</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
