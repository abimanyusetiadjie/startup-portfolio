"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Calculator } from "lucide-react";
import { AbinestLogo } from "./AbinestLogo";

export function GroveNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const findVisibleSection = (rawId: string): HTMLElement | null => {
    const cleanId = rawId.replace(/^#/, "");
    const candidates = Array.from(
      document.querySelectorAll(`[data-section="${cleanId}"], #${cleanId}`)
    ) as HTMLElement[];
    const visible = candidates.find((el) => el.offsetParent !== null);
    return visible ?? document.getElementById(cleanId);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const sections = ["layanan-utama", "portofolio", "cara-kerja", "harga", "tech-stack"];
      const scrollPos = window.scrollY + 220;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = findVisibleSection(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          if (top <= scrollPos) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      if (window.scrollY < 300) setActiveSection(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Layanan", href: "#layanan-utama", id: "layanan-utama" },
    { label: "Studi Kasus", href: "#portofolio", id: "portofolio" },
    { label: "Alur Kerja", href: "#cara-kerja", id: "cara-kerja" },
    { label: "Investasi", href: "#harga", id: "harga" },
    { label: "Demo", href: "/demo", id: "demo" },
  ];

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    if (targetId.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const element = findVisibleSection(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = `/${targetId}`;
      }
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-[0_2px_16px_rgba(15,23,42,0.04)]"
          : "bg-white/95 backdrop-blur-md border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-14 lg:h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link href="/" className="flex items-center shrink-0">
          <AbinestLogo size="md" showTagline={false} />
        </Link>

        {/* Clean Borderless Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13.5px]">
          {navLinks.map((item) => {
            const isSelected = activeSection === item.id;
            const isRoute = item.href.startsWith("/");

            if (isRoute) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`transition-colors whitespace-nowrap ${
                  isSelected
                    ? "font-semibold text-blue-600"
                    : "font-medium text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Clean Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <Link
            href="/audit-gratis"
            className="inline-flex items-center px-3.5 py-2 rounded-xl text-[13px] font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors whitespace-nowrap"
          >
            Audit Gratis
          </Link>

          <a
            href="#kontak"
            onClick={(e) => handleSmoothScroll(e, "#kontak")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            <span>Konsultasi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Header Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#kontak"
            onClick={(e) => handleSmoothScroll(e, "#kontak")}
            className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors"
          >
            Konsultasi
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            aria-label="Buka menu navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Minimalist Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 overflow-hidden bg-white">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              if (item.href.startsWith("/")) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between text-[13.5px] font-semibold px-4 py-3 text-blue-600 hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-blue-500" />
                  </Link>
                );
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`flex items-center justify-between text-[13.5px] px-4 py-3 transition-colors ${
                    isActive
                      ? "text-blue-600 font-bold bg-blue-50/40"
                      : "text-slate-700 font-medium hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </a>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <Link
              href="/audit-gratis"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 text-[13px] font-semibold text-slate-700 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5 text-slate-500" />
              <span>Audit Gratis</span>
            </Link>
            <a
              href="#kontak"
              onClick={(e) => handleSmoothScroll(e, "#kontak")}
              className="flex items-center justify-center py-2.5 text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
