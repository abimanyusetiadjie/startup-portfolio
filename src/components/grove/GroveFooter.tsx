"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function GroveFooter() {
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

  const footerLinks = [
    { label: "Sistem Unggulan", href: "#systems" },
    { label: "Studi Kasus", href: "#case-study" },
    { label: "Standar Rekayasa", href: "#engineering" },
  ];

  return (
    <footer className="bg-[#142E22] text-[#E0E7E2] py-14 px-4 sm:px-8 lg:px-12 font-sans border-t border-[#0F241B]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
      >
        <div>
          <span className="font-heading font-extrabold text-2xl text-white tracking-tight">
            ABINEST
          </span>
          <p className="text-xs text-emerald-200/70 mt-1 max-w-sm leading-relaxed">
            Studio Rekayasa Perangkat Lunak, Sistem SIAKAD Sekolah Modern &amp; Otomasi Bisnis Berkecepatan Tinggi.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-emerald-100/80 font-medium">
          {footerLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              whileHover={{ y: -1, color: "#FFFFFF" }}
              transition={{ duration: 0.15 }}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.div whileHover={{ y: -1 }}>
            <Link href="/portal" className="text-emerald-300 font-bold hover:underline">
              Client Portal (/portal)
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -1 }}>
            <Link href="/login" className="hover:text-white transition-colors">
              Masuk Klien
            </Link>
          </motion.div>
        </div>

        <div className="text-[11px] text-emerald-200/50 font-mono">
          © {new Date().getFullYear()} Abinest Studio. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
}
