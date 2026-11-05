"use client";

import { motion } from "framer-motion";

const storyContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const storyItemVariants = {
  hidden: { opacity: 0, y: 16 },
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

const MANIFESTO_POINTS = [
  {
    num: "01",
    title: "Keamanan Data Row Level Security (RLS) PostgreSQL",
    desc: "Data yayasan, nilai akademik siswa, dan transaksi finansial diisolasi di tingkat database secara zero-trust.",
  },
  {
    num: "02",
    title: "Transparansi Penuh via Shopify Polaris Client Portal",
    desc: "Klien dapat memantau progres milestone pengerjaan, mengunduh invoice resmi, dan melihat log otomasi secara real-time.",
  },
  {
    num: "03",
    title: "Garansi SLA Uptime 99.9% & Dukungan Terikat Kontrak",
    desc: "Infrastruktur decoupled memastikan sistem administrasi dan ujian sekolah tetap tangguh di jam-jam sibuk.",
  },
];

export function GroveCraftsmanshipStory() {
  return (
    <section id="engineering" className="bg-[#F4F1EA] py-16 sm:py-24 font-sans border-b border-[#E7E2D6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Engineering Workspace Visual with Soft Hover Elevation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-[#E8E3D7] border border-[#DDD7C9] shadow-sm group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <motion.img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                alt="Abinest Engineering Quality & Code Craftsmanship"
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-3 left-3 bg-[#18362B]/90 backdrop-blur-sm px-3 py-1.5 rounded text-[10px] font-mono text-emerald-200 border border-white/10 shadow-xs">
                ABINEST LAB • JAKARTA
              </div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Manifesto & 3 Numbered Dividers */}
          <motion.div
            variants={storyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={storyItemVariants}>
              <span className="block text-[11px] font-semibold tracking-wider uppercase text-[#D15B3A]">
                STANDAR REKAYASA ABINEST
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#1A201C] mt-2 mb-4">
                Direkayasa presisi, bukan sekadar instalasi template.
              </h2>
              <p className="text-xs sm:text-sm text-[#6B736C] leading-relaxed max-w-xl">
                Abinest bukan agensi template murahan. Setiap baris arsitektur dirancang dengan isolasi keamanan data ketat (PostgreSQL RLS), pengujian beban konkurensi tinggi, dan didukung penuh oleh tim insinyur yang sama yang membangun sistem Anda.
              </p>
            </motion.div>

            {/* 3 Numbered List Items with Animated Dividers */}
            <div className="space-y-4 pt-2">
              {MANIFESTO_POINTS.map((item, index) => (
                <motion.div
                  key={item.num}
                  variants={storyItemVariants}
                  className="relative pt-3.5"
                >
                  {/* Expanding Dividing Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                    className="absolute top-0 left-0 right-0 h-[1px] bg-[#DDD7C9] origin-left"
                  />

                  <div className="flex items-baseline gap-4">
                    <motion.span
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="font-mono text-sm font-bold text-[#D15B3A] shrink-0 cursor-default inline-block"
                    >
                      {item.num}
                    </motion.span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#1A201C]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#6B736C] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
