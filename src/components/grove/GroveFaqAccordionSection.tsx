"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GroveFaqAccordionSection() {
  const { language } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs =
    language === "id"
      ? [
          {
            q: "Berapa lama estimasi waktu pengerjaan SIAKAD atau sistem kustom?",
            a: "Untuk Website Korporat/Institusi Next.js membutuhkan 2–3 minggu. Untuk SIAKAD Sekolah atau ERP kustom berkisar 6–10 minggu dengan rilis bertahap setiap minggu melalui Client Portal.",
          },
          {
            q: "Apakah data dari sistem lama atau Excel bisa dimigrasikan secara utuh?",
            a: "Tentu. Tim engineer kami menyediakan skrip sanitasi dan migrasi data otomatis dari Excel, CSV, maupun database SQL lama tanpa mengganggu operasional harian Anda.",
          },
          {
            q: "Bagaimana skema dukungan teknis dan garansi setelah sistem Go-Live?",
            a: "Setiap proyek dilengkapi garansi pemeliharaan dan pemantauan server 24/7 dengan SLA 99.9% serta waktu respons di bawah 15 menit untuk penanganan kendala kritis.",
          },
          {
            q: "Apakah source code dan database sepenuhnya menjadi hak milik institusi kami?",
            a: "Ya, 100% milik Anda. Kami menyerahkan repositori Git penuh, skema PostgreSQL RLS, serta dokumentasi arsitektur tanpa biaya lisensi bulanan tersembunyi.",
          },
          {
            q: "Bagaimana kisaran investasi untuk memulai proyek bersama Abinest IT?",
            a: "Website performa tinggi mulai dari Rp 8,5 Juta, Otomasi WhatsApp API mulai dari Rp 12 Juta, dan SIAKAD/Sistem Enterprise mulai dari Rp 25 Juta dengan pembayaran bertahap per milestone.",
          },
        ]
      : [
          {
            q: "How long does a custom SIAKAD or enterprise web build take?",
            a: "High-speed Next.js institutional websites take 2–3 weeks. Full SIAKAD or custom ERP platforms take 6–10 weeks with transparent weekly milestone releases in your Client Portal.",
          },
          {
            q: "Can you migrate our existing legacy database or Excel records?",
            a: "Yes. Our engineers build automated data sanitization and migration pipelines from Excel, CSV, or legacy SQL databases with zero operational downtime.",
          },
          {
            q: "What does post-launch support and SLA monitoring look like?",
            a: "Every deployment includes 24/7 real-time telemetry, a 99.9% uptime SLA guarantee, and < 15-minute direct engineer response times for critical incidents.",
          },
          {
            q: "Do we get 100% source code and intellectual property ownership?",
            a: "Absolutely. You receive full Git repositories, PostgreSQL RLS schemas, and deployment documentation with zero vendor lock-in.",
          },
          {
            q: "How is project pricing structured?",
            a: "Projects are billed transparently across verifiable milestones — starting from IDR 8.5M for Next.js web platforms and IDR 25M for full SIAKAD/Enterprise systems.",
          },
        ];

  return (
    <section id="faq" className="pt-6 pb-20 relative">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        {/* Centered Header (matching slice_3.png bottom) */}
        <div className="text-center max-w-lg mx-auto mb-12 space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#8E8E93]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06D3B]" />
            <span>{language === "id" ? "TANYA JAWAB" : "FAQ"}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white">
            {language === "id"
              ? "Tanya Lebih Sedikit. Tahu Lebih Banyak."
              : "Ask Less. Know More."}
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#8E8E93]">
            {language === "id"
              ? "Jawaban transparan atas pertanyaan teknis dan investasi proyek yang paling sering diajukan."
              : "Clear answers to common technical, security, and project delivery questions."}
          </p>
        </div>

        {/* Minimalist Bottom-Bordered FAQ Rows (matching slice_4.png top) */}
        <div className="divide-y divide-white/10 border-b border-white/10">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-[13px] sm:text-[14px] font-normal text-white/90 group-hover:text-white transition-colors">
                    {item.q}
                  </span>
                  <span className="text-[#8E8E93] group-hover:text-white shrink-0 transition-colors">
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <p className="pt-3 pr-8 text-[12px] sm:text-[13px] text-[#8E8E93] leading-relaxed">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Link (matching slice_4.png) */}
        <div className="mt-8 flex items-center justify-center gap-2 text-[11px] sm:text-[12px] text-[#8E8E93]">
          <HelpCircle className="w-3.5 h-3.5 text-[#8E8E93]" />
          <span>
            {language === "id"
              ? "Masih punya pertanyaan khusus?"
              : "Still have questions?"}
          </span>
          <a
            href="#kontak"
            className="text-white hover:text-[#E06D3B] underline underline-offset-4 transition-colors"
          >
            {language === "id"
              ? "Hubungi tim engineer kami"
              : "Reach out to our team"}
          </a>
        </div>
      </div>
    </section>
  );
}
