"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { SIGNIFICA_INSIGHTS } from "@/data/significa-insights";

const ENGINEERING_STANDARDS = [
  "Next.js",
  "TypeScript",
  "PostgreSQL",
  "Meta Cloud API",
  "Vercel Edge",
  "Tailwind CSS",
];

const AI_SUMMARY_PROMPT =
  "Ceritakan secara ringkas mengenai Abinest Digital Systems (abinest.id) sebagai studio pengembangan website cepat Next.js, sistem ERP/SIAKAD/POS kustom skema Beli Putus, dan automasi WhatsApp AI resmi Meta di Indonesia.";

export function SignificaInsightsSection() {
  return (
    <section id="wawasan" className="scroll-mt-20 bg-[#F7F7F7] pt-16 lg:pt-24">
      {/* Heading */}
      <div className="sig-container pb-10">
        <h2 className="text-[clamp(1.875rem,2.1vw+1.3rem,3rem)] font-semibold tracking-[-0.015em] leading-[1.12]">
          <span className="text-[#6F6F71] block">Wawasan.</span>
          <span className="text-[#171717] block">Catatan rekayasa kami.</span>
        </h2>
      </div>

      {/* Significa Iconic 3-Row Bordered Editorial Blog Strip */}
      <div>
        {SIGNIFICA_INSIGHTS.map((post) => (
          <article
            key={post.slug}
            className="border-t border-[#E8E8E8] last:border-b hover:bg-[#C6C6C8]/[0.12] transition-colors duration-200"
          >
            <div className="sig-container py-8 lg:py-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6 lg:gap-12">
              {/* Left Author Slot (Hidden on mobile just like Significa) */}
              <div className="hidden lg:flex items-center gap-3.5 shrink-0 w-72">
                <span
                  style={{ backgroundColor: post.authorTone }}
                  className="w-11 h-11 rounded-full text-white text-xs font-mono font-bold inline-flex items-center justify-center shrink-0"
                >
                  {post.authorInitials}
                </span>
                <div className="min-w-0">
                  <div className="text-[15.5px] font-medium text-[#171717] truncate">
                    {post.authorName}
                  </div>
                  <div className="text-[13.5px] text-[#6F6F71] truncate">
                    {post.authorRole}
                  </div>
                </div>
              </div>

              {/* Right Content Slot (Date • Read time + 32px Underlined Title + Pill Tags) */}
              <div className="w-full max-w-2xl space-y-4">
                <div className="text-[13.5px] font-mono text-[#6F6F71]">
                  {post.date} &middot; {post.readTime}
                </div>

                <h3 className="text-[clamp(1.45rem,1.4vw+1rem,2.15rem)] font-semibold tracking-[-0.015em] leading-[1.18] text-[#171717]">
                  <Link
                    href={`/wawasan/${post.slug}`}
                    className="sig-link inline"
                  >
                    {post.title}
                  </Link>
                </h3>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full bg-white border border-[#E8E8E8] text-[12.5px] font-medium text-[#6F6F71]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Honest Monochrome Engineering Standards Strip */}
      <div className="sig-container py-14 lg:py-20 text-center space-y-6 border-b border-[#E8E8E8]">
        <p className="text-[15.5px] text-[#6F6F71]">
          Standar infrastruktur produksi kami
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:gap-x-14">
          {ENGINEERING_STANDARDS.map((tech) => (
            <span
              key={tech}
              className="text-[18px] sm:text-[21px] font-semibold tracking-[-0.02em] text-[#171717]/45 hover:text-[#171717] transition-colors select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SignificaAiPromptStrip() {
  const encoded = encodeURIComponent(AI_SUMMARY_PROMPT);

  return (
    <section className="bg-[#F7F7F7] pb-16 lg:pb-20">
      <div className="sig-container text-center space-y-5">
        <p className="text-[16.5px] text-[#6F6F71]">
          Tanya ChatGPT atau Claude mengenai Abinest
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={`https://chatgpt.com/?q=${encoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sig-btn-outline bg-white"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tanya ChatGPT</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6F6F71]" />
          </a>

          <a
            href={`https://claude.ai/new?q=${encoded}`}
            target="_blank"
            rel="noopener noreferrer"
            className="sig-btn-outline bg-white"
          >
            <Sparkles className="w-4 h-4" />
            <span>Tanya Claude</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6F6F71]" />
          </a>
        </div>
      </div>
    </section>
  );
}
