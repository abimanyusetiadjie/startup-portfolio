"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveTestimonialsGrid() {
  const { language } = useLanguage();
  const [activeDeckIdx, setActiveDeckIdx] = useState(0);

  const row1Reviews =
    language === "id"
      ? [
          {
            name: "Drs. H. Ahmad Fauzi, M.Pd.",
            role: "Kepala Sekolah SMA Islam Terpadu",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            quote:
              "Dengan SIAKAD Abinest, ujian serentak 1.240 siswa berjalan tanpa hambatan sedikit pun dan cetak 600 rapor PDF selesai dalam hitungan detik.",
          },
          {
            name: "Hendra Wijaya, S.T.",
            role: "Direktur Operasional Logistik",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            quote:
              "Integrasi WhatsApp Cloud API resmi mereka memangkas waktu penagihan invoice kami hingga 40%. Pengiriman stabil di bawah 2 detik.",
          },
          {
            name: "dr. Nadia Putri, MARS",
            role: "Manajer Sistem Informasi Klinik",
            avatar:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
            quote:
              "Transparansi via Client Portal membuat kami tenang. Setiap minggu progres terlihat nyata dan 100% source code diserahkan penuh.",
          },
        ]
      : [
          {
            name: "Jason Smith",
            role: "VP of Operations, Nexus Edu",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
            quote:
              "With Abinest's SIAKAD architecture, 1,240 concurrent students completed exams with zero lag and 600+ PDF reports rendered in seconds.",
          },
          {
            name: "Sarah Jenkins",
            role: "CTO, Horizon Logistics",
            avatar:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
            quote:
              "Their official Meta WhatsApp Cloud API pipeline cut our manual billing follow-ups by 40% with sub-2-second webhook delivery.",
          },
          {
            name: "Alex Rivera",
            role: "Director of IT, MedCore Group",
            avatar:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
            quote:
              "Having full visibility in the Client Portal and 100% source code ownership made Abinest the best engineering partner we've hired.",
          },
        ];

  const row2Reviews =
    language === "id"
      ? [
          {
            name: "Ir. Bambang Sutrisno",
            role: "Ketua Yayasan Pendidikan Nusantara",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            quote:
              "Website institusi kami melonjak ke skor Lighthouse 99 dan pendaftaran murid baru naik drastis berkat kecepatan buka halaman yang instan.",
          },
          {
            name: "Clarissa Tan, MBA",
            role: "Head of Digital, Sentra Retail",
            avatar:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
            quote:
              "Keamanan PostgreSQL RLS yang diterapkan benar-benar rapi. Tim audit internal kami sangat terkesan dengan isolasi datanya.",
          },
          {
            name: "Rizky Pratama, M.Kom.",
            role: "Kepala Puskom Perguruan Tinggi",
            avatar:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
            quote:
              "Respons tim engineer di bawah 15 menit bukan sekadar janji. Saat masa KRS puncak, sistem tetap dingin dan stabil 99.99%.",
          },
        ]
      : [
          {
            name: "David Chen",
            role: "Founder, Vertex Foundation",
            avatar:
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
            quote:
              "Our institutional website jumped to a 99 Lighthouse score, doubling organic admissions inquiries within the first two months.",
          },
          {
            name: "Samantha Lee",
            role: "Head of Product, FinScale",
            avatar:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
            quote:
              "The database-level PostgreSQL RLS policies they engineered passed our external security audit without a single finding.",
          },
          {
            name: "Marcus Vance",
            role: "IT Infrastructure Lead, Apex",
            avatar:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
            quote:
              "Under 15-minute response times from senior engineers who actually wrote the code — zero ticket runaround.",
          },
        ];

  const stackedDecks =
    language === "id"
      ? [
          {
            eyebrow: "STUDI KASUS UTAMA",
            title: "Bagaimana Kami Menjaga Ujian\n1.200+ Siswa Tetap 99.99% Stabil",
            desc: "Arsitektur terpisah antara SIAKAD utama dan worker pemroses PDF paralel berhasil memangkas beban CPU hingga 72% saat puncak ujian.",
            imgMain:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
          },
          {
            eyebrow: "OTOMASI WHATSAPP ENTERPRISE",
            title: "Pengiriman 50.000+ Notifikasi\nTagihan & Absensi < 2 Detik",
            desc: "Implementasi antrean Upstash QStash dengan kunci idempotensi kriptografis menjamin 0% pesan ganda dan rasio baca 98%.",
            imgMain:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
          },
          {
            eyebrow: "TRANSFORMASI WEB KORPORAT",
            title: "Meningkatkan Konversi B2B\nLewat Next.js 15 Skor 99/100",
            desc: "Migrasi dari CMS lama ke arsitektur Next.js App Router memangkas waktu muat dari 5,4 detik menjadi 0,6 detik di jaringan seluler.",
            imgMain:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
          },
        ]
      : [
          {
            eyebrow: "FEATURED CASE STUDY",
            title: "How We Scaled a Regional Network\nto 99.99% Exam Uptime",
            desc: "Decoupling the core SIAKAD database from parallel PDF report workers reduced peak CPU load by 72% across 1,200+ concurrent students.",
            imgMain:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
          },
          {
            eyebrow: "ENTERPRISE WHATSAPP PIPELINE",
            title: "Delivering 50,000+ Automated\nAlerts in Under 2 Seconds",
            desc: "Cryptographic idempotency keys paired with official Meta Cloud API webhooks achieved 99.98% delivery reliability.",
            imgMain:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
          },
          {
            eyebrow: "NEXT.JS 15 EDGE MIGRATION",
            title: "Doubling Institutional Inquiries\nwith 99/100 Lighthouse Speed",
            desc: "Replacing a legacy monolithic CMS with Next.js 15 Edge rendering cut mobile load times from 5.4s down to 0.6s.",
            imgMain:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
            imgSide:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
          },
        ];

  const articles =
    language === "id"
      ? [
          {
            title:
              "Cara Mencegah Server SIAKAD Down Saat Ujian Serentak & Pembagian Rapor",
            author: "Abinest Engineering",
            date: "12 Nov 2026 • 5 mnt",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          },
          {
            title:
              "Perbandingan Meta Cloud API Resmi vs WhatsApp Tidak Resmi untuk Institusi",
            author: "Abinest Engineering",
            date: "08 Nov 2026 • 4 mnt",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
          },
          {
            title:
              "Mengapa Kepemilikan Source Code 100% Penting bagi Keberlanjutan Sistem Anda",
            author: "Abinest Engineering",
            date: "02 Nov 2026 • 6 mnt",
            image:
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
          },
        ]
      : [
          {
            title:
              "How to Prevent SIAKAD Server Crashes During Concurrent Final Exams",
            author: "Abinest Engineering",
            date: "Nov 12, 2026 • 5 min",
            image:
              "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          },
          {
            title:
              "Official Meta Cloud API vs Unofficial Gateways: Security & ROI Breakdown",
            author: "Abinest Engineering",
            date: "Nov 08, 2026 • 4 min",
            image:
              "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
          },
          {
            title:
              "Why 100% Source Code Ownership Matters for Long-Term Enterprise Resilience",
            author: "Abinest Engineering",
            date: "Nov 02, 2026 • 6 min",
            image:
              "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
          },
        ];

  const currentDeck = stackedDecks[activeDeckIdx];

  return (
    <>
      {/* SECTION 9: 2-Row Staggered Testimonials Wall + SECTION 10: 3D Stacked Case Study Deck (matching slice_5.png) */}
      <section id="studi-kasus" className="py-16 relative overflow-hidden">
        {/* Centered Header */}
        <div className="max-w-[1120px] mx-auto px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2.5">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
              <span>
                {language === "id" ? "TESTIMONI KLIEN" : "TESTIMONIALS"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
              {language === "id" ? (
                <>
                  Mengapa Institusi Modern
                  <br />
                  Bekerja Sama Dengan Kami
                </>
              ) : (
                <>
                  Why The Modern Innovators
                  <br />
                  Work With Us
                </>
              )}
            </h2>
            <p className="text-[12px] text-[#8E8E93]">
              {language === "id"
                ? "Dipercaya oleh pimpinan sekolah, yayasan, dan direktur operasional di Indonesia."
                : "Trusted by school principals, foundation boards, and enterprise operations leaders."}
            </p>
          </div>
        </div>

        {/* 2-Row Staggered Brickwork Testimonial Wall with Edge Bleed (matching slice_5.png top) */}
        <div className="max-w-[1260px] mx-auto px-4 space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {row1Reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#151516] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15 mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-[13px] font-medium text-white">
                    {r.name}
                  </h3>
                  <p className="text-[11px] text-[#8E8E93]">{r.role}</p>
                  <div className="border-t border-white/[0.06] my-3.5" />
                  <p className="text-[11px] sm:text-[12px] text-[#8E8E93] leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-5 pt-1">
                  <span className="text-[10px] font-medium text-[#8E8E93] mr-1">
                    5.0
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#E09F3E] text-[#E09F3E]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 (Staggered Horizontal Offset on Desktop like slice_5.png) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:translate-x-10">
            {row2Reviews.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#151516] border border-white/[0.06] rounded-xl p-6 flex flex-col justify-between"
              >
                <div>
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-10 h-10 rounded-full object-cover border border-white/15 mb-3"
                    loading="lazy"
                  />
                  <h3 className="text-[13px] font-medium text-white">
                    {r.name}
                  </h3>
                  <p className="text-[11px] text-[#8E8E93]">{r.role}</p>
                  <div className="border-t border-white/[0.06] my-3.5" />
                  <p className="text-[11px] sm:text-[12px] text-[#8E8E93] leading-relaxed">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-1.5 mt-5 pt-1">
                  <span className="text-[10px] font-medium text-[#8E8E93] mr-1">
                    5.0
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-[#E09F3E] text-[#E09F3E]"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Centered Orange Dash Divider */}
        <div className="flex justify-center my-16">
          <div className="w-6 h-[2px] bg-[#E06D3B]" />
        </div>

        {/* SECTION 10: 3D Stacked Card Deck Showcase (matching slice_5.png bottom) */}
        <div className="max-w-[960px] mx-auto px-5 sm:px-8 pt-6 pb-4">
          <div className="relative">
            {/* Back Card Layer 2 (Topmost peek) */}
            <div
              aria-hidden="true"
              className="mx-auto w-[88%] h-8 rounded-t-2xl bg-[#1A1A1C]/60 border-t border-x border-white/[0.06] -mb-4 relative z-0"
            />
            {/* Back Card Layer 1 (Middle peek) */}
            <div
              aria-hidden="true"
              className="mx-auto w-[94%] h-8 rounded-t-2xl bg-[#141416]/90 border-t border-x border-white/[0.08] -mb-4 relative z-10"
            />

            {/* Main Foreground Card */}
            <div className="relative z-20 bg-[#0A0A0B] border border-white/12 rounded-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
              {/* Top-right deck switcher controls */}
              <div className="flex items-center justify-end gap-1.5 mb-2">
                <button
                  type="button"
                  onClick={() =>
                    setActiveDeckIdx(
                      (activeDeckIdx - 1 + stackedDecks.length) %
                        stackedDecks.length
                    )
                  }
                  className="w-6 h-6 rounded-full bg-[#161618] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Previous case study"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveDeckIdx((activeDeckIdx + 1) % stackedDecks.length)
                  }
                  className="w-6 h-6 rounded-full bg-[#161618] border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                  aria-label="Next case study"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Left Column (5 cols): Eyebrow + Title + Desc + Pill Button */}
                <div className="lg:col-span-5 space-y-3.5">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#8E8E93]">
                    {currentDeck.eyebrow}
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium text-white leading-snug whitespace-pre-line">
                    {currentDeck.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] text-[#8E8E93] leading-relaxed">
                    {currentDeck.desc}
                  </p>
                  <div className="pt-2">
                    <a
                      href="#kontak"
                      className="inline-flex items-center justify-center px-5 py-2 rounded-full text-[11px] font-medium text-white bg-[#171719] hover:bg-[#222225] border border-white/15 transition-all"
                    >
                      {language === "id"
                        ? "Diskusikan Arsitektur"
                        : "Read Case Study"}
                    </a>
                  </div>
                </div>

                {/* Right Column (7 cols): 2 Side-by-Side Images inside the Card (matching slice_5.png) */}
                <div className="lg:col-span-7 grid grid-cols-12 gap-3">
                  <div className="col-span-8 aspect-[16/11] rounded-lg overflow-hidden border border-white/10 relative">
                    <img
                      src={currentDeck.imgMain}
                      alt={currentDeck.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-cyan-400/15" />
                  </div>
                  <div className="col-span-4 aspect-[4/5] h-full rounded-lg overflow-hidden border border-white/10 relative">
                    <img
                      src={currentDeck.imgSide}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 via-transparent to-[#051414]/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: "Our Latest Insights & Articles" 3-Column Grid (matching slice_6.png top) */}
      <section
        id="wawasan"
        className="py-20 bg-[#080808] relative overflow-hidden border-t border-white/[0.04]"
      >
        {/* Warm Orange Glow in Top-Right Corner (matching slice_6.png) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-96 h-64 rounded-full bg-[#E06D3B]/25 blur-[80px]"
        />

        <div className="relative z-10 max-w-[1000px] mx-auto px-5 sm:px-8">
          {/* Centered Header */}
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
              <span>
                {language === "id" ? "WAWASAN & ARTIKEL" : "BLOG & INSIGHTS"}
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
              {language === "id"
                ? "Wawasan & Artikel Rekayasa Terbaru"
                : "Our Latest Insights & Articles"}
            </h2>
            <p className="text-[12px] text-[#8E8E93]">
              {language === "id"
                ? "Panduan praktis seputar arsitektur sistem, optimasi web, dan keamanan infrastruktur."
                : "Practical engineering guides on cloud architecture, web speed, and enterprise security."}
            </p>
          </div>

          {/* 3-Column Blog/Article Cards (matching slice_6.png) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {articles.map((art, idx) => (
              <article key={idx} className="group cursor-pointer space-y-3">
                <div className="aspect-[16/10] w-full rounded-lg overflow-hidden border border-white/10 bg-[#141414]">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Author & Date Row */}
                <div className="flex items-center justify-between text-[10px] text-[#8E8E93]">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-white/15 text-white flex items-center justify-center text-[8px] font-bold">
                      A
                    </span>
                    <span className="text-white/80">{art.author}</span>
                  </div>
                  <span>{art.date}</span>
                </div>

                {/* Article Title */}
                <h3 className="text-[13px] font-medium text-white group-hover:text-[#E06D3B] transition-colors leading-snug">
                  {art.title}
                </h3>
              </article>
            ))}
          </div>

          {/* Centered "View All Articles" Pill Button */}
          <div className="mt-10 flex justify-center">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center px-6 py-2 rounded-full text-[11px] font-medium text-white bg-[#161618] hover:bg-[#222225] border border-white/15 transition-all"
            >
              {language === "id" ? "Lihat Semua Artikel" : "View All Articles"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
