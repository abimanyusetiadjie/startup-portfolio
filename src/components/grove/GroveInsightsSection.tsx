"use client";

import { ArrowRight } from "lucide-react";

export function GroveInsightsSection() {
  const articles = [
    {
      category: "CLOUD ARCHITECTURE",
      date: "Nov 12, 2026",
      title: "Cara Mencegah Server Down Saat Ujian Serentak & Puncak Trafik",
      excerpt:
        "Panduan memisahkan database utama dengan antrean pemroses asinkron untuk menjamin respons di bawah 1 detik.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    },
    {
      category: "API AUTOMATION",
      date: "Nov 08, 2026",
      title: "Meta Cloud API Resmi vs WhatsApp Tidak Resmi: Analisis Keamanan & ROI",
      excerpt:
        "Mengapa mengandalkan gateway tidak resmi berbahaya bagi reputasi nomor institusi Anda dan bagaimana migrasi ke jalur resmi.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    },
    {
      category: "ENTERPRISE SECURITY",
      date: "Nov 02, 2026",
      title: "Mengapa Kepemilikan 100% Source Code Menentukan Kelangsungan Bisnis",
      excerpt:
        "Risiko tersembunyi vendor lock-in bulanan dan cara melindungi integritas kekayaan intelektual (IP) sistem internal Anda.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden bg-[#0A0A0C]">
      {/* Background Subtle Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-1/4 w-[450px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
            LATEST INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Our Latest Insights &amp; Articles
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Artikel teknis, panduan arsitektur sistem, dan wawasan industri dari tim rekayasa kami.
          </p>
        </div>

        {/* 3-Column Article Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="bg-[#121318] border border-white/[0.08] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] rounded-2xl overflow-hidden group hover:border-orange-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-orange-400 font-medium">
                      {item.category}
                    </span>
                    <span className="text-zinc-500">{item.date}</span>
                  </div>

                  <h3 className="text-base font-semibold text-white tracking-tight leading-snug group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 group-hover:text-orange-400 transition-colors"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Action: Centered Button "View All Articles" */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#121318] border border-white/15 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.25)] transition-all"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
}
