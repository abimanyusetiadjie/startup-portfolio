"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export function ModernNavbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
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
    { id: "sistem", label: "Sistem & Solusi", href: "#sistem" },
    { id: "arsitektur", label: "Studi Arsitektur", href: "#arsitektur" },
    { id: "standar", label: "Standar Rekayasa", href: "#standar" },
  ];

  return (
    <div className="w-full font-sans sticky top-0 z-50">
      {/* 1. TOP SCROLL PROGRESS BAR (Cobalt to Emerald Gradient) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#0052FF] via-[#2563EB] to-[#10B981] origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* 2. FLOATING ADAPTIVE NAVBAR (Clean White Glass) */}
      <motion.header
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 1)",
          backdropFilter: isScrolled ? "blur(16px)" : "blur(0px)",
          borderBottomColor: isScrolled ? "rgba(226, 232, 240, 0.8)" : "transparent",
          boxShadow: isScrolled
            ? "0 10px 30px -10px rgba(15, 23, 42, 0.06)"
            : "0 0 0 0 rgba(0,0,0,0)",
          paddingTop: isScrolled ? "0.75rem" : "1.1rem",
          paddingBottom: isScrolled ? "0.75rem" : "1.1rem",
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="border-b px-4 sm:px-8 lg:px-12 transition-all"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo: ABINEST */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0052FF] text-white font-extrabold text-sm shadow-sm group-hover:scale-105 transition-transform">
              A
            </span>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[#09090B] group-hover:text-[#0052FF] transition-colors leading-none">
                ABINEST
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#64748B] mt-0.5">
                ENGINEERING STUDIO
              </span>
            </div>
          </Link>

          {/* Center Navigation Links with Shared Layout Spring Indicator */}
          <nav
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden md:flex items-center gap-1 text-xs font-semibold text-[#475569] p-1 rounded-full bg-slate-100/70 border border-slate-200/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                onMouseEnter={() => setHoveredNav(link.id)}
                className="relative px-4 py-2 rounded-full transition-colors z-10 hover:text-[#09090B]"
              >
                {hoveredNav === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
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
              className="relative px-4 py-2 rounded-full text-[#0052FF] font-bold flex items-center gap-1.5 z-10 hover:text-[#1D4ED8]"
            >
              {hoveredNav === "portal" && (
                <motion.div
                  layoutId="activeNavIndicator"
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 30,
                  }}
                  className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                />
              )}
              <span>Client Portal</span>
              <span className="px-1.5 py-0.2 rounded-full bg-blue-50 text-[10px] text-[#0052FF] font-mono border border-blue-200">
                Live
              </span>
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold text-[#475569] hover:text-[#09090B] hover:bg-slate-100 transition-colors"
            >
              Masuk Klien
            </Link>

            <motion.a
              href="#konsultasi"
              onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="px-5 py-2.5 rounded-full bg-[#0052FF] text-white font-semibold text-xs hover:bg-[#1D4ED8] transition-all shadow-sm shadow-[#0052FF]/20 flex items-center gap-1.5"
            >
              <span>Konsultasi Teknis</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>
        </div>
      </motion.header>
    </div>
  );
}
