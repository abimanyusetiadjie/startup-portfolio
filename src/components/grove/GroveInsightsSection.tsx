"use client";

import { ArrowRight } from "lucide-react";

export function GroveInsightsSection() {
  const articles = [
    {
      category: "ARSITEKTUR CLOUD",
      date: "12 Nov 2026 • 5 mnt",
      title: "Cara Mencegah Server SIAKAD Down Saat Ujian Serentak & Pembagian Rapor",
      excerpt:
        "Panduan memisahkan database utama dengan antrean pemroses dokumen asinkron untuk menjamin respons di bawah 1 detik.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=80",
    },
    {
      category: "OTOMASI WHATSAPP",
      date: "08 Nov 2026 • 4 mnt",
      title: "Meta Cloud API Resmi vs WhatsApp Tidak Resmi: Analisis Keamanan & ROI",
      excerpt:
        "Mengapa mengandalkan gateway tidak resmi berbahaya bagi reputasi nomor institusi Anda dan bagaimana migrasi ke jalur resmi tanpa risiko blokir.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=700&q=80",
    },
    {
      category: "KEPEMILIKAN IP",
      date: "02 Nov 2026 • 6 mnt",
      title: "Mengapa Kepemilikan 100% Source Code Menentukan Kelangsungan Bisnis",
      excerpt:
        "Bahaya tersembunyi skema vendor lock-in bulanan dan cara melindungi integritas kekayaan intelektual sistem institusi Anda.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=700&q=80",
    },
  ];

  return (
    <section id="wawasan" className="py-24 relative overflow-hidden bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 bg-orange-100/70 px-3.5 py-1 rounded-full border border-orange-200">
            WAWASAN &amp; ARTIKEL EDUKASI
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0F172A] leading-tight">
            Wawasan Rekayasa &amp;
            <br />
            Transformasi Digital
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Artikel teknis, panduan arsitektur sistem, dan tips praktis dari tim engineer Abinest.
          </p>
        </div>

        {/* 3-Column Article Card Grid in Clean White */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 flex flex-col justify-between group"
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
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-mono text-orange-600 font-bold">
                      {item.category}
                    </span>
                    <span className="text-slate-400 font-medium">{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-[#0F172A] tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <a
                  href="#kontak"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
