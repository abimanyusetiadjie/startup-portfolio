"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

interface TechItem {
  name: string;
  category: "languages" | "frameworks" | "databases" | "devops";
  categoryLabel: string;
  desc: string;
  svg: React.ReactNode;
  glowColor: string;
}

export function GroveTechStackGrid() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "languages" | "frameworks" | "databases" | "devops"
  >("all");
  const [hoveredTech, setHoveredTech] = useState<TechItem | null>(null);

  // 12 Primary IT Stack Technologies arranged in 6 Columns x 2 Rows
  const columns: { top: TechItem; bottom: TechItem; offsetClass: string }[] = [
    {
      offsetClass: "translate-y-0",
      top: {
        name: "Next.js 15",
        category: "frameworks",
        categoryLabel: "Full-Stack Framework",
        desc: "App Router, SSR, Server Components & Edge rendering berkecepatan tinggi.",
        glowColor: "rgba(15, 23, 42, 0.2)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 180 180" fill="none">
            <circle cx="90" cy="90" r="90" fill="#0F172A" />
            <path
              d="M149.508 157.291L69.1416 54H54V125.966H66.4532V69.7567L139.99 164.551C143.342 162.296 146.529 159.864 149.508 157.291Z"
              fill="url(#next_paint0_light)"
            />
            <rect x="115" y="54" width="12" height="72" fill="url(#next_paint1_light)" />
            <defs>
              <linearGradient
                id="next_paint0_light"
                x1="109"
                y1="116.5"
                x2="144.5"
                y2="160.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="next_paint1_light"
                x1="121"
                y1="54"
                x2="120.799"
                y2="106.875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      bottom: {
        name: "TypeScript",
        category: "languages",
        categoryLabel: "Type-Safe Language",
        desc: "Strict type-checking untuk integritas sistem skala enterprise tanpa runtime crash.",
        glowColor: "rgba(49, 120, 198, 0.3)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl" viewBox="0 0 128 128">
            <rect width="128" height="128" fill="#3178C6" rx="20" />
            <path
              d="M60.6 57.6h-13v48.8h-11.8V57.6h-13v-9.8H60.6v9.8zm23.6 30.6c3.2 2.3 7 3.8 11.2 3.8 4.3 0 6.6-1.7 6.6-4.3 0-2.8-2.5-3.9-8.4-6.2-9-3.4-14.8-7.7-14.8-16.1 0-8.9 7.2-15.5 18.5-15.5 5.5 0 10.3 1.5 13.9 4l-4.5 8.7c-3.1-1.9-6.6-3.1-9.9-3.1-4 0-6.1 1.6-6.1 3.9 0 2.5 2.1 3.6 7.8 5.7 9.8 3.7 15.6 7.9 15.6 16.5 0 9.7-7.6 16.1-19.4 16.1-6.7 0-12.7-2-17.1-5.4l4.6-8.1z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
    },
    {
      offsetClass: "translate-y-4 sm:translate-y-7",
      top: {
        name: "Python",
        category: "languages",
        categoryLabel: "Backend & Data Language",
        desc: "Worker data pipelines, pemrosesan dokumen otomatis, AI engine, dan backend asinkron.",
        glowColor: "rgba(255, 212, 59, 0.3)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M63.5 1.5c-15.2 0-24.3 6.6-24.3 19.5v14.4h24.8v3.6H25.3C11 39 0 49.3 0 64.7c0 14.8 11.3 25.1 25.3 25.1h7.8v-11.8c0-9.6 8.3-17.9 17.9-17.9h24.6c7.9 0 14.4-6.7 14.4-14.6V21c0-12.9-9.1-19.5-26.5-19.5zm-13.6 7.7a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
              fill="#3776AB"
            />
            <path
              d="M64.5 126.5c15.2 0 24.3-6.6 24.3-19.5V92.6H64v-3.6h38.7c14.3 0 25.3-10.3 25.3-25.7 0-14.8-11.3-25.1-25.3-25.1h-7.8v11.8c0 9.6-8.3 17.9-17.9 17.9H47.4c-7.9 0-14.4 6.7-14.4 14.6V107c0 12.9 9.1 19.5 26.5 19.5h5zm13.6-7.7a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
              fill="#FFD43B"
            />
          </svg>
        ),
      },
      bottom: {
        name: "Docker",
        category: "devops",
        categoryLabel: "Container Engine",
        desc: "Isolasi runtime konsisten dan deployment zero-downtime lintas klaster cloud.",
        glowColor: "rgba(36, 150, 237, 0.3)",
        svg: (
          <svg className="w-11 h-11 sm:w-13 sm:h-13" viewBox="0 0 24 24" fill="#2496ED">
            <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.186V9.006a.186.186 0 0 0-.186-.186h-2.119a.186.186 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.186V9.006a.185.185 0 0 0-.184-.186H8.1a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.187.187 0 0 0 .185-.186V9.006a.186.186 0 0 0-.185-.186H5.136a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.928 0h2.119a.185.185 0 0 0 .185-.186V9.006a.185.185 0 0 0-.185-.186H2.208a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185M23.76 9.89c-.615-.472-1.587-.537-2.395-.18a4.34 4.34 0 0 0-.742-.782l-.4-.28-.313.38a3.15 3.15 0 0 0-.543 1.18c-.77-.12-1.928-.02-2.85.55-.42.26-.78.61-1.07 1.02H1.147a1.147 1.147 0 0 0-1.147 1.147c0 3.197 1.488 5.485 3.75 6.673 2.158 1.133 5.097 1.34 8.423.633 4.298-.915 7.15-3.565 7.747-7.228.87-.042 2.37-.282 3.18-1.52.32-.49.56-1.16.66-1.597z" />
          </svg>
        ),
      },
    },
    {
      offsetClass: "-translate-y-2 sm:-translate-y-3",
      top: {
        name: "React 19",
        category: "frameworks",
        categoryLabel: "Frontend Library",
        desc: "Komponen interaktif, client-side state modern, dan optimasi Concurrent Mode.",
        glowColor: "rgba(97, 218, 251, 0.35)",
        svg: (
          <svg className="w-11 h-11 sm:w-13 sm:h-13" viewBox="-11.5 -10.23174 23 20.46348">
            <circle cx="0" cy="0" r="2.05" fill="#0284C7" />
            <g stroke="#0284C7" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        ),
      },
      bottom: {
        name: "PostgreSQL",
        category: "databases",
        categoryLabel: "Relational Database",
        desc: "Database ACID dengan Row-Level Security (RLS) untuk isolasi data multi-role.",
        glowColor: "rgba(51, 103, 145, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M93.3 35.8c-2.4-7.2-7.1-13.3-13.8-17.1-4.8-2.7-10.4-4.2-16.1-4.2-1.9 0-3.9.2-5.8.6-1.6-4.6-4.4-8.5-8.3-11.3C45.3 1 39.8-.1 34.2.5 28.5 1.1 23.2 3.5 19 7.4 12.5 13.5 8.7 21.8 8.4 30.7c-.3 9.3 2.9 18.3 9 25.1 4.2 4.7 9.8 8 16 9.4.5 1.9 1.3 3.8 2.3 5.5l-8.9 17.5c-.7 1.3-.5 2.9.4 4 1 1.1 2.5 1.5 3.9 1.1l11.4-3.4c2.8 3.5 6.4 6.3 10.5 8.1 4.1 1.9 8.7 2.8 13.3 2.8 6.5 0 12.8-1.9 18.1-5.4 5.3-3.6 9.3-8.7 11.5-14.7 4.1-10.9 4-22.9-.4-33.8l-1.9-7zm-49.8 2.2c-.6 1.4-1.5 2.6-2.7 3.5-1.2.9-2.6 1.3-4.1 1.3-2.1 0-4.1-.8-5.6-2.3-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.1 2.3-5.6 1.5-1.5 3.5-2.3 5.6-2.3 1.5 0 2.9.4 4.1 1.3 1.2.9 2.1 2.1 2.7 3.5.6 1.4.7 2.9.4 4.4-.3 1.5-1 2.8-2 3.9l1.6 1.9z"
              fill="#336791"
            />
          </svg>
        ),
      },
    },
    {
      offsetClass: "translate-y-3 sm:translate-y-5",
      top: {
        name: "Node.js",
        category: "languages",
        categoryLabel: "JavaScript Runtime",
        desc: "Event-driven, asynchronous I/O backend untuk throughput API dan webhook WhatsApp.",
        glowColor: "rgba(95, 160, 78, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M115.6 30.2c0-1.8-1-3.5-2.5-4.4L67 1.3c-1.6-.9-3.5-.9-5.1 0L14.9 25.8c-1.6.9-2.5 2.6-2.5 4.4v51.1c0 1.8 1 3.5 2.5 4.4L61.9 110c.8.5 1.7.7 2.5.7s1.8-.2 2.5-.7l47.1-24.3c1.6-.9 2.5-2.6 2.5-4.4l-.9-51.1z"
              fill="#5FA04E"
            />
            <path
              d="M64.1 48.7c-9.1 0-16.4 5.9-16.4 15.3 0 9.4 7.4 15.3 16.4 15.3 9.1 0 16.4-5.9 16.4-15.3.1-9.4-7.3-15.3-16.4-15.3zm0 24.3c-5.4 0-9.6-3.8-9.6-9s4.2-9 9.6-9 9.6 3.8 9.6 9c0 5.3-4.2 9-9.6 9z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
      bottom: {
        name: "Tailwind CSS",
        category: "frameworks",
        categoryLabel: "Utility-First CSS",
        desc: "Desain sistem modern, atomic styling presisi, dan skor performa web hijau.",
        glowColor: "rgba(6, 182, 212, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 8C17.3333 8 13.0667 11.3333 11.2 18C13.8667 14.6667 17.0667 13.6 20.8 14.8C22.9304 15.4857 24.4539 17.0349 26.1384 18.7479C28.8828 21.5393 32.0396 24.75 38.8 24.75C45.4667 24.75 49.7333 21.4167 51.6 14.75C48.9333 18.0833 45.7333 19.15 42 17.95C39.8696 17.2643 38.3461 15.7151 36.6616 14.0021C33.9172 11.2107 30.7604 8 24 8ZM11.2 24.75C4.53333 24.75 0.266667 28.0833 -1.6 34.75C1.06667 31.4167 4.26667 30.35 8 31.55C10.1304 32.2357 11.6539 33.7849 13.3384 35.4979C16.0828 38.2893 19.2396 41.5 26 41.5C32.6667 41.5 36.9333 38.1667 38.8 31.5C36.1333 34.8333 32.9333 35.9 29.2 34.7C27.0696 34.0143 25.5461 32.4651 23.8616 30.7521C21.1172 27.9607 17.9604 24.75 11.2 24.75Z"
              fill="#06B6D4"
            />
          </svg>
        ),
      },
    },
    {
      offsetClass: "-translate-y-3 sm:-translate-y-4",
      top: {
        name: "Go (Golang)",
        category: "languages",
        categoryLabel: "High-Concurrency Language",
        desc: "Goroutines ultra-ringan untuk microservices yang membutuhkan latensi < 10ms.",
        glowColor: "rgba(0, 173, 216, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M10.9 59.9c.7-3.9 2.5-6.6 5.5-8 3-1.4 7.2-1.2 12.6.5 1.5.5 3 .9 4.6 1.4-1.5 1.7-2.6 3.7-3.4 5.9-2.2-.8-4.2-1.3-6.2-1.4-2.8-.2-4.7.4-5.8 1.9-1.2 1.6-1.4 4.3-.8 8.1.7 4.4 2.5 7.4 5.3 9 2.9 1.6 6.8 1.8 11.8.6 1.9-.4 3.7-1.1 5.4-1.9v-7.9h-8.2v-6.9h15.9v18.7c-3.9 1.8-7.9 3.1-12.1 3.9-7.3 1.3-13.3.7-18-1.9-4.8-2.6-7.7-7-8.8-13.1-.9-5.9-.3-11.2 2.2-15.8zm48.7 13.9c-.8 4.4-2.8 7.6-6 9.6-3.2 2-7.5 2.5-12.8 1.4-5.3-1.1-9.3-3.6-12.1-7.4-2.8-3.8-3.8-8.8-3-15 .8-6.2 3.1-10.8 7-13.8 3.9-3 9.1-4.1 15.6-3.2 5.3.8 9.5 2.8 12.6 6.2 3.1 3.3 4.5 7.8 4.1 13.4h-32c-.3 3.9.5 7 2.4 9.1 1.9 2.2 4.7 3.4 8.5 3.7 3.1.2 5.8-.4 8.2-1.8 2.4-1.4 4.1-3.6 5.1-6.5l8.4 4.5zm-26.6-14.7h23.7c-.1-2.9-1.1-5.2-2.9-6.9-1.8-1.7-4.3-2.6-7.5-2.8-3.3-.2-6.1.5-8.5 2.1-2.3 1.7-3.9 4.2-4.8 7.6z"
              fill="#00ADD8"
            />
          </svg>
        ),
      },
      bottom: {
        name: "Redis",
        category: "databases",
        categoryLabel: "In-Memory Cache",
        desc: "Penyimpanan cache sub-milidetik, sesi login instan, dan antrean Upstash QStash.",
        glowColor: "rgba(220, 56, 45, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M121.2 78.4L67 109.8c-1.8 1.1-4.1 1.1-5.9 0L6.8 78.4c-1.8-1.1-3-3-3-5.1V27.6c0-2.1 1.1-4 3-5.1L61.1 1.2c1.8-1.1 4.1-1.1 5.9 0l54.2 31.3c1.8 1.1 3 3 3 5.1v45.7c0 2.1-1.2 4-3 5.1z"
              fill="#DC382D"
            />
            <path
              d="M64.1 27.6L20.8 52.6l43.3 25 43.3-25-43.3-25zm0 57.3L20.8 59.9v15.7l43.3 25 43.3-25V59.9L64.1 84.9z"
              fill="#FFFFFF"
            />
          </svg>
        ),
      },
    },
    {
      offsetClass: "translate-y-2 sm:translate-y-4",
      top: {
        name: "Supabase",
        category: "databases",
        categoryLabel: "Backend as a Service",
        desc: "PostgreSQL realtime engine, built-in Auth, Edge Functions, & automated backups.",
        glowColor: "rgba(62, 207, 142, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 109 113" fill="none">
            <path
              d="M63.7076 110.284C60.598 114.249 54.2546 112.029 54.2546 106.974V67.8962H8.68073C3.65586 67.8962 0.871089 62.0628 4.09559 58.1062L45.4194 7.3789C48.529 3.56064 54.8724 5.7807 54.8724 10.8359V49.9137H100.446C105.471 49.9137 108.256 55.7471 105.032 59.7037L63.7076 110.284Z"
              fill="#3ECF8E"
            />
          </svg>
        ),
      },
      bottom: {
        name: "Cloudflare",
        category: "devops",
        categoryLabel: "Global Edge & WAF",
        desc: "Proteksi DDoS, caching DNS latensi rendah, dan SSL enterprise di seluruh dunia.",
        glowColor: "rgba(243, 128, 32, 0.35)",
        svg: (
          <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 128 128">
            <path
              d="M87.4 79.4c.5-1.9.3-3.9-.6-5.6s-2.4-3-4.3-3.6l-50.5-.3c-.6 0-1.1-.3-1.4-.8s-.4-1.1-.2-1.6c1.3-4.1 4-7.5 7.6-9.8s7.9-3.4 12.2-3.1c4.5.3 8.7 2.1 11.9 5.2s5.1 7.2 5.5 11.7c.1.7.5 1.4 1.1 1.7.6.4 1.4.4 2 .1 1.3-.7 2.8-1 4.3-.9 1.9.1 3.7.8 5.1 2s2.3 2.9 2.6 4.7l4.7.4z"
              fill="#F38020"
            />
            <path
              d="M102.6 62.7c-.6-4.5-2.5-8.8-5.5-12.1s-7-5.5-11.4-6.4c-4.4-.9-9-.4-13.1 1.4s-7.6 4.8-9.9 8.7c-.4.7-1.1 1.2-1.9 1.3-.8.1-1.6-.2-2.2-.8-3.4-3.5-7.9-5.7-12.7-6.2-4.9-.5-9.7.7-13.9 3.4s-7.3 6.6-9 11.4c-.2.7-.8 1.2-1.5 1.4-.7.2-1.5 0-2.1-.4-2.8-2.2-6.2-3.4-9.8-3.6-4.2-.2-8.3 1.3-11.5 4.1s-5.2 6.7-5.7 10.9c-.5 4.2.7 8.4 3.3 11.8s6.3 5.6 10.5 6.3l69.8.2c4.8 0 9.4-1.9 12.8-5.2s5.3-7.9 5.3-12.7c0-4.6-1.7-9.1-4.8-12.5s-7.2-5.5-11.8-6z"
              fill="#FAAE40"
            />
          </svg>
        ),
      },
    },
  ];

  const filterTabs = [
    { key: "all", label: "Semua Stack" },
    { key: "languages", label: "Bahasa Pemrograman" },
    { key: "frameworks", label: "Framework & Library" },
    { key: "databases", label: "Database & Cache" },
    { key: "devops", label: "Cloud & DevOps" },
  ];

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-[#FAF9F6] border-t border-slate-200/80">
      {/* Background Soft Light Amber Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-r from-orange-100/40 via-amber-100/50 to-orange-100/40 blur-[130px] rounded-full"
      />

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Header matching exact layout of reference image in clean light mode */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-bold tracking-wide text-slate-700">
              Integrated with 30+ Modern IT Leaders
            </span>
          </div>

          {/* Heading H2 */}
          <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-bold tracking-tight text-[#0F172A] leading-[1.15]">
            Connected to 200+ Tools
            <br />
            That Power Your Stack
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Kami membangun sistem yang lebih cerdas dan stabil dengan mengintegrasikan bahasa pemrograman tangguh, framework berkecepatan tinggi, dan database cloud teruji yang diandalkan tim Anda setiap hari.
          </p>

          {/* Quick Filter Pill Bar */}
          <div className="pt-2 flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {filterTabs.map((tab) => {
              const active = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveFilter(tab.key as any)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#0F172A] text-white shadow-md"
                      : "bg-slate-100/80 text-slate-600 hover:text-slate-900 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 6-Column Staggered Tactile Block Cards in Clean Light Mode */}
        <div className="relative py-4 max-w-[1100px] mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5 items-start justify-items-center">
            {columns.map((col, colIdx) => {
              const isTopActive =
                activeFilter === "all" || col.top.category === activeFilter;
              const isBottomActive =
                activeFilter === "all" || col.bottom.category === activeFilter;

              return (
                <div
                  key={colIdx}
                  className={`flex flex-col gap-3 sm:gap-4 md:gap-5 w-full items-center ${col.offsetClass}`}
                >
                  {/* Top Card */}
                  <div
                    onMouseEnter={() => setHoveredTech(col.top)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`relative w-full aspect-[4/5] sm:h-36 md:h-40 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 p-4 flex flex-col items-center justify-center shadow-[inset_0_1px_1px_0_rgba(255,255,255,1),0_10px_25px_rgba(0,0,0,0.05)] group cursor-pointer ${
                      isTopActive
                        ? "border-slate-200/90 hover:border-orange-300 hover:shadow-[0_15px_35px_rgba(249,115,22,0.18)] hover:-translate-y-1.5 opacity-100"
                        : "border-slate-100 opacity-25 grayscale"
                    }`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {col.top.svg}
                    </div>
                  </div>

                  {/* Bottom Card */}
                  <div
                    onMouseEnter={() => setHoveredTech(col.bottom)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className={`relative w-full aspect-[4/5] sm:h-36 md:h-40 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 p-4 flex flex-col items-center justify-center shadow-[inset_0_1px_1px_0_rgba(255,255,255,1),0_10px_25px_rgba(0,0,0,0.05)] group cursor-pointer ${
                      isBottomActive
                        ? "border-slate-200/90 hover:border-orange-300 hover:shadow-[0_15px_35px_rgba(249,115,22,0.18)] hover:-translate-y-1.5 opacity-100"
                        : "border-slate-100 opacity-25 grayscale"
                    }`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">
                      {col.bottom.svg}
                    </div>
                  </div>

                  {/* Vertical Connector Stems fading downwards beneath bottom card (matching photo) */}
                  <div
                    aria-hidden="true"
                    className="w-[1.5px] h-8 sm:h-12 bg-gradient-to-b from-slate-300 via-slate-200 to-transparent rounded-full"
                  />
                </div>
              );
            })}
          </div>

          {/* Interactive Inspection Hover Info Pill */}
          <div className="h-10 mt-3 flex items-center justify-center">
            {hoveredTech ? (
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs animate-fadeIn shadow-lg">
                <span className="font-bold text-white">
                  {hoveredTech.name}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-orange-400 font-mono text-[11px]">
                  {hoveredTech.categoryLabel}
                </span>
                <span className="text-slate-500 hidden sm:inline">•</span>
                <span className="text-slate-300 hidden sm:inline text-[11px]">
                  {hoveredTech.desc}
                </span>
              </div>
            ) : (
              <span className="text-[11px] text-slate-500 font-medium">
                Arahkan kursor pada kartu untuk melihat detail arsitektur teknologi
              </span>
            )}
          </div>
        </div>

        {/* Bottom Centered Button with vibrant orange styling */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://wa.me/6285708677918?text=Halo%20Abinest%2C%20saya%20ingin%20berkonsultasi%20mengenai%20integrasi%20stack%20teknologi%20kami."
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-[0_6px_20px_rgba(249,115,22,0.35)] hover:shadow-[0_8px_25px_rgba(249,115,22,0.45)] transition-all duration-300"
          >
            <span>Konsultasikan Kebutuhan Stack Anda</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
