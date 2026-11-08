"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Box, Menu, X } from "lucide-react";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0C]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-white/[0.04]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Left: Hexagonal Cube White Icon + TechRoos Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:border-orange-500/50 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all">
            <Box className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-semibold tracking-tight text-white group-hover:text-zinc-200 transition-colors">
            TechRoos
          </span>
        </Link>

        {/* Center: Navigation Links in #A1A1AA hover white */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#A1A1AA] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Rounded Pill CTA "Get In Touch" with subtle border glow */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="relative group inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#121318] border border-white/[0.12] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all duration-300"
          >
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-300 hover:text-white bg-[#121318] border border-white/10"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0C]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#A1A1AA] hover:text-white py-1"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-600 shadow-[0_0_20px_rgba(249,115,22,0.3)]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
