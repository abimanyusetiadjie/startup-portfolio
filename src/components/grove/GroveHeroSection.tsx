"use client";

import { useRef } from "react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

const featureBarContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const featureItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 20,
    },
  },
};

const FEATURE_ITEMS = [
  {
    title: "Lighthouse 95–100",
    desc: "Core Web Vitals LCP < 1.0s",
  },
  {
    title: "Parallel PDF Worker",
    desc: "500+ Rapor / <45s Batch",
  },
  {
    title: "99.9% Uptime SLA",
    desc: "Decoupled Anti-Crash Database",
  },
  {
    title: "WhatsApp Real-Time",
    desc: "Auto-Retry Backoff < 2s",
  },
];

export function GroveHeroSection() {
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Perspective Tilt Physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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

  return (
    <section className="bg-[#F4F1EA] text-[#1A201C] pt-8 sm:pt-12 pb-0 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        {/* HERO 2-COLUMN SPLIT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pb-12 sm:pb-16">
          {/* Left Column: Abinest Value Narrative with Staggered Entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <span className="block text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#D15B3A]">
                STUDIO REKAYASA SISTEM ENTERPRISE &amp; OTOMASI B2B
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#1A201C]"
            >
              Rekayasa sistem yang membuat bisnis tumbuh{" "}
              <motion.span
                initial={{ color: "#1A201C" }}
                animate={{ color: "#D15B3A" }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-[#D15B3A] inline-block"
              >
                terukur.
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#6B736C] leading-relaxed max-w-lg"
            >
              Abinest merancang website Next.js berkecepatan tinggi (skor Lighthouse 100), sistem SIAKAD sekolah terpisah anti-down dengan mesin cetak ratusan PDF rapor paralel, serta otomasi WhatsApp &amp; API berketahanan tinggi.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="pt-2 flex flex-wrap items-center gap-4">
              <motion.a
                href="#konsultasi"
                onClick={(e) => handleSmoothScroll(e, "#konsultasi")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#18362B] text-white text-xs sm:text-sm font-semibold hover:bg-[#122A21] transition-all shadow-md shadow-[#18362B]/15"
              >
                Mulai Konsultasi Teknis →
              </motion.a>

              <motion.a
                href="/portal"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="text-xs sm:text-sm font-semibold text-[#18362B] underline hover:text-[#D15B3A] transition-colors"
              >
                Buka Client Portal (/portal) →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column: Hero Visual Container with 3D Tilt & Parallax */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/3] rounded-xl overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-md group transition-shadow duration-300 hover:shadow-xl"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                alt="Abinest Enterprise System Architecture"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              {/* Overlay Badge with Spring Entrance */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute bottom-3 left-3 bg-[#18362B]/90 backdrop-blur-sm px-3 py-1.5 rounded-md text-[11px] font-mono text-emerald-100 font-semibold border border-white/10 flex items-center gap-1.5 shadow-sm"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>ABINEST ENGINEERING • PRODUCTION READY</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM 4-COLUMN FEATURE BAR with Viewport Stagger Entry */}
      <div className="bg-[#18362B] text-white border-t border-[#122A21]">
        <motion.div
          variants={featureBarContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#234A3C]"
        >
          {FEATURE_ITEMS.map((feat) => (
            <motion.div
              key={feat.title}
              variants={featureItemVariants}
              whileHover={{ backgroundColor: "rgba(35, 74, 60, 0.4)" }}
              transition={{ duration: 0.2 }}
              className="py-4 px-4 sm:px-6 cursor-default transition-colors"
            >
              <span className="block text-xs font-bold text-white">{feat.title}</span>
              <span className="block text-[11px] text-emerald-200/70 mt-0.5">{feat.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
