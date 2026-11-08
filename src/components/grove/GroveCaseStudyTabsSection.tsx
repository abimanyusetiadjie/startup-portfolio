"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveCaseStudyTabsSection() {
  const { language } = useLanguage();
  // Default to middle tab (index 2) to match slice_3.png
  const [activeTab, setActiveTab] = useState<number>(2);

  const tabs =
    language === "id"
      ? [
          {
            label: "Arsitektur Cloud",
            title: "Infrastruktur Cloud Elastis\nuntuk Beban Tinggi",
            p1: "Kami merancang topologi server terdistribusi yang mampu menyerap lonjakan ribuan pengguna serentak tanpa penurunan kecepatan sedikit pun.",
            p2: "Setiap node dikonfigurasi dengan auto-scaling dan pencadangan otomatis harian.",
            bullets: [
              "Load balancing otomatis lintas region dengan latensi < 35ms.",
              "Isolasi worker asinkron agar proses berat tidak memblokir UI.",
              "Pemulihan bencana (Disaster Recovery) instan tanpa kehilangan data.",
            ],
            photo:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/hero-showcase.svg",
            caption: "Klaster Server High-Availability dengan Auto-Scaling",
          },
          {
            label: "Keamanan RLS",
            title: "Proteksi Database Berlapis\ndengan PostgreSQL RLS",
            p1: "Keamanan data institusi tidak cukup hanya di level tampilan. Kami mengunci setiap baris data langsung di level mesin PostgreSQL.",
            p2: "Memastikan setiap peran (Admin, Guru, Siswa, Keuangan) hanya dapat mengakses haknya.",
            bullets: [
              "Kebijakan Row-Level Security (RLS) ketat di setiap tabel utama.",
              "Enkripsi penuh saat transit (TLS 1.3) dan saat tersimpan (AES-256).",
              "Log audit aktivitas otomatis untuk kepatuhan dan transparansi.",
            ],
            photo:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/client-portal.svg",
            caption: "Isolasi Data Multi-Role Berstandar Enterprise",
          },
          {
            label: "SIAKAD Anti-Down",
            title: "Sistem Akademik Proaktif yang\nMemangkas Downtime 100%",
            p1: "Dirancang khusus untuk sekolah, yayasan, dan kampus yang membutuhkan kestabilan penuh saat ujian serentak dan pembagian rapor.",
            p2: "Mesin pemroses PDF paralel kami mencetak ratusan rapor dalam hitungan detik di latar belakang.",
            bullets: [
              "0% server crash saat 1.200+ siswa login ujian bersamaan.",
              "Generate 600+ PDF rapor Kurikulum Merdeka via background worker.",
              "Integrasi tagihan SPP otomatis dengan pengingat WhatsApp wali murid.",
            ],
            photo:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/siakad-dashboard.svg",
            caption: "Pusat Kendali SIAKAD & Antrean PDF Rapor Paralel",
          },
          {
            label: "Otomasi WhatsApp",
            title: "Integrasi Resmi Meta Cloud API\n& Pengiriman < 2 Detik",
            p1: "Tinggalkan pengiriman broadcast manual yang rawan blokir. Kami menghubungkan sistem internal Anda langsung ke jalur resmi Meta Cloud API.",
            p2: "Dilengkapi mekanisme anti-duplikasi (idempotency) dan pemantauan status pesan real-time.",
            bullets: [
              "Notifikasi tagihan, absensi, dan OTP terkirim di bawah 2 detik.",
              "Pencegahan pesan ganda otomatis dengan kunci idempotensi.",
              "Dasbor analitik rasio keterbacaan (read rate) secara langsung.",
            ],
            photo:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/whatsapp-gateway.svg",
            caption: "Arsitektur Webhook Meta Cloud API Berkecepatan Tinggi",
          },
          {
            label: "Website Next.js 15",
            title: "Website Institusi Super Cepat\nSkor Lighthouse 95–100",
            p1: "Website korporat dan yayasan yang dibangun dengan Next.js 15 App Router untuk kecepatan buka halaman di bawah 1 detik dan dominasi SEO.",
            p2: "Dilengkapi Schema JSON-LD terstruktur agar mudah ditemukan calon klien di Google.",
            bullets: [
              "Skor Google PageSpeed & Core Web Vitals hijau (95–100).",
              "Desain eksklusif non-template yang meningkatkan kredibilitas B2B.",
              "Panel CMS mudah dikelola oleh tim humas tanpa keahlian koding.",
            ],
            photo:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/corporate-web.svg",
            caption: "Performa Web Edge dengan Skor Lighthouse 99/100",
          },
          {
            label: "Portal Klien",
            title: "Transparansi Proyek Penuh\nLewat Client Portal",
            p1: "Pantau setiap progres pengerjaan modul, milestone mingguan, hingga status deployment secara transparan tanpa harus menebak-nebak.",
            p2: "Seluruh dokumentasi API dan serah terima source code terpusat di satu dasbor.",
            bullets: [
              "Pelacakan milestone real-time dari tahap desain hingga UAT.",
              "Akses langsung ke staging server untuk uji coba fitur lebih awal.",
              "Penyerahan hak kekayaan intelektual (IP) & repositori Git penuh.",
            ],
            photo:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/client-portal.svg",
            caption: "Dasbor Transparansi Milestone & Manajemen SLA",
          },
        ]
      : [
          {
            label: "Cloud Infrastructure",
            title: "Elastic Cloud Architecture\nBuilt for Peak Loads",
            p1: "We engineer distributed server topologies capable of absorbing thousands of concurrent users without performance degradation.",
            p2: "Every node is configured with automated scaling and daily immutable backups.",
            bullets: [
              "Multi-region load balancing with < 35ms edge latency.",
              "Isolated async workers so heavy jobs never block the UI.",
              "Instant disaster recovery with zero data loss guarantees.",
            ],
            photo:
              "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/hero-showcase.svg",
            caption: "High-Availability Server Clusters with Auto-Scaling",
          },
          {
            label: "Cybersecurity & RLS",
            title: "Database-Level Security\nwith PostgreSQL RLS",
            p1: "True enterprise security happens at the data layer. We enforce strict access policies directly inside the PostgreSQL engine.",
            p2: "Ensuring every role (Admin, Faculty, Student, Finance) only accesses authorized records.",
            bullets: [
              "Strict Row-Level Security (RLS) across all production tables.",
              "End-to-end TLS 1.3 encryption in transit and AES-256 at rest.",
              "Automated audit logging for full institutional compliance.",
            ],
            photo:
              "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/client-portal.svg",
            caption: "Enterprise-Grade Multi-Role Data Isolation",
          },
          {
            label: "Managed IT & SIAKAD",
            title: "Proactive Managed IT That\nCuts Downtime to Zero",
            p1: "Purpose-built for schools, foundations, and enterprises that demand 100% stability during concurrent exams and report cycles.",
            p2: "Our parallel PDF engine generates hundreds of complex report cards in seconds.",
            bullets: [
              "0% server crashes during 1,200+ concurrent student exams.",
              "600+ PDF report cards generated via background queues.",
              "Automated tuition billing synced with WhatsApp parent alerts.",
            ],
            photo:
              "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/siakad-dashboard.svg",
            caption: "24/7 Operations Center & Parallel PDF Queue Engine",
          },
          {
            label: "WhatsApp Automation",
            title: "Official Meta Cloud API\nwith < 2s Delivery",
            p1: "Eliminate fragile manual broadcasts. We connect your core systems directly to the official Meta Cloud API pipeline.",
            p2: "Engineered with cryptographic idempotency keys and real-time delivery webhooks.",
            bullets: [
              "Automated invoices, attendance alerts, and OTPs in < 2 seconds.",
              "Strict deduplication guarantees zero duplicate messages.",
              "Live read-receipt analytics and automatic retry queues.",
            ],
            photo:
              "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/whatsapp-gateway.svg",
            caption: "High-Throughput Official Meta Cloud API Pipeline",
          },
          {
            label: "Next.js 15 Web",
            title: "Ultra-Fast Institutional Web\n95–100 Lighthouse Score",
            p1: "Corporate and institutional web platforms built on Next.js 15 App Router for sub-second page loads and organic SEO dominance.",
            p2: "Complete with structured JSON-LD schema markup for maximum search visibility.",
            bullets: [
              "Verified 95–100 Google Lighthouse & Core Web Vitals scores.",
              "Custom bespoke visual identity that elevates B2B trust.",
              "Intuitive headless CMS for effortless content updates.",
            ],
            photo:
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/corporate-web.svg",
            caption: "Edge-Rendered Web Architecture Scoring 99/100",
          },
          {
            label: "Client Portal",
            title: "Complete Project Visibility\nvia Our Client Portal",
            p1: "Track every module sprint, weekly milestone, and deployment metric transparently without guesswork.",
            p2: "All API documentation, staging links, and source code handovers live in one place.",
            bullets: [
              "Real-time milestone tracking from architecture to UAT.",
              "Direct access to staging environments for early review.",
              "100% intellectual property and Git repository handover.",
            ],
            photo:
              "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
            svgOverlay: "/images/projects/client-portal.svg",
            caption: "Transparent Milestone Tracking & SLA Portal",
          },
        ];

  const current = tabs[activeTab];

  return (
    <section className="py-10 relative">
      <div className="max-w-[1040px] mx-auto px-5 sm:px-8">
        {/* Centered Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
            <span>
              {language === "id" ? "SOLUSI UNGGULAN" : "HOW WE DELIVER"}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            {language === "id" ? (
              <>
                Dukungan & Rekayasa IT yang
                <br />
                Benar-Benar Memberi Hasil.
              </>
            ) : (
              <>
                IT Support That Actually
                <br />
                Delivers.
              </>
            )}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#8E8E93] max-w-md mx-auto leading-relaxed">
            {language === "id"
              ? "Dirancang untuk kecepatan, stabilitas, dan hasil bisnis yang terukur di setiap lini operasional Anda."
              : "Engineered for speed, stability, and measurable operational impact across your organization."}
          </p>
        </div>

        {/* 6-Tab Horizontal Selector Bar (matching slice_3.png) */}
        <div className="flex items-center justify-start sm:justify-between gap-2 overflow-x-auto no-scrollbar py-2 px-2 mb-12 rounded-full bg-[#151517] border border-white/[0.06]">
          {tabs.map((tab, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-[11px] sm:text-[12px] font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-b from-[#331D14] to-[#22130D] text-white border border-[#E06D3B]/55 shadow-[0_0_20px_rgba(224,109,59,0.25)]"
                    : "text-[#8E8E93] hover:text-white border border-transparent"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column Split Content Below Tabs (matching slice_3.png) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Title + Paragraphs + Checkmark Bullets + Read More Button */}
          <div className="lg:col-span-6 space-y-5">
            <h3 className="text-xl sm:text-2xl font-medium text-white leading-snug whitespace-pre-line">
              {current.title}
            </h3>

            <p className="text-[12px] sm:text-[13px] text-[#8E8E93] leading-relaxed">
              {current.p1}
            </p>
            <p className="text-[12px] sm:text-[13px] text-[#8E8E93] leading-relaxed">
              {current.p2}
            </p>

            {/* 3 Checkmark Bullets */}
            <ul className="space-y-2.5 pt-1">
              {current.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[12px] sm:text-[13px] text-white/90"
                >
                  <Check className="w-4 h-4 text-[#E06D3B] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Dark Matte Pill Button */}
            <div className="pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center px-6 py-2 rounded-full text-[11px] font-medium text-white bg-[#1A1A1A] hover:bg-[#242424] border border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-all"
              >
                {language === "id" ? "Pelajari Detail" : "Read More"}
              </a>
            </div>
          </div>

          {/* Right Column: High-Tech Control Room Photo + UI Overlay + Bottom Caption */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/10 bg-[#0D131A] shadow-2xl">
              <img
                src={current.photo}
                alt={current.label}
                className="w-full h-full object-cover object-center"
              />
              {/* Cool cyan/dark-blue cinematic tint like slice_3.png */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/95 via-[#07192E]/40 to-[#061526]/30" />

              {/* Subtle SVG Architecture Preview inside top half */}
              <img
                src={current.svgOverlay}
                alt=""
                aria-hidden="true"
                className="absolute inset-x-4 top-4 w-[calc(100%-32px)] h-44 object-cover rounded-lg opacity-45 mix-blend-screen border border-cyan-400/20 pointer-events-none"
              />

              {/* Centered Bottom Caption Overlay inside Image (matching slice_3.png) */}
              <div className="absolute inset-x-0 bottom-0 p-5 text-center">
                <p className="text-[11px] sm:text-[12px] font-medium text-white/90 max-w-xs mx-auto leading-snug drop-shadow">
                  {current.caption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Centered Orange Dash Divider */}
        <div className="flex justify-center mt-16">
          <div className="w-6 h-[2px] bg-[#E06D3B]" />
        </div>
      </div>
    </section>
  );
}
