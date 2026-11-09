"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  benefit: string;
  svg: React.ReactNode;
}

export function GroveTechStackGrid() {
  const techStacks: TechItem[] = [
    {
      name: "Next.js 15",
      category: "Web Framework",
      benefit: "Website <0.8 Detik",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="90" fill="#0F172A" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z"
            fill="url(#tech_next_g1)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#tech_next_g2)" />
          <defs>
            <linearGradient
              id="tech_next_g1"
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
              id="tech_next_g2"
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
    {
      name: "TypeScript",
      category: "Type-Safe Core",
      benefit: "Sistem Bebas Bug",
      svg: (
        <svg className="w-5 h-5 rounded-md overflow-hidden" viewBox="0 0 128 128" fill="none">
          <path fill="#3178C6" d="M1.5 1.5h125v125H1.5z" />
          <path
            fill="#fff"
            d="M102.23 58.91a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
          />
        </svg>
      ),
    },
    {
      name: "React 19",
      category: "Frontend UI",
      benefit: "Dashboard Intuitif",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="11" fill="#087EA4" />
          <ellipse
            cx="64"
            cy="64"
            rx="20"
            ry="54"
            fill="none"
            stroke="#087EA4"
            strokeWidth="5.5"
            transform="rotate(30 64 64)"
          />
          <ellipse
            cx="64"
            cy="64"
            rx="20"
            ry="54"
            fill="none"
            stroke="#087EA4"
            strokeWidth="5.5"
            transform="rotate(90 64 64)"
          />
          <ellipse
            cx="64"
            cy="64"
            rx="20"
            ry="54"
            fill="none"
            stroke="#087EA4"
            strokeWidth="5.5"
            transform="rotate(150 64 64)"
          />
        </svg>
      ),
    },
    {
      name: "PostgreSQL",
      category: "Enterprise DB",
      benefit: "Multi-Gudang & Enkripsi",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#336791"
            d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
          />
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Machine Learning",
      benefit: "Automasi Invoice & OCR",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <linearGradient
            id="py_g1"
            gradientUnits="userSpaceOnUse"
            x1="70.252"
            y1="1237.476"
            x2="170.659"
            y2="1151.089"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          >
            <stop offset="0" stopColor="#5A9FD4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <linearGradient
            id="py_g2"
            gradientUnits="userSpaceOnUse"
            x1="209.474"
            y1="1098.811"
            x2="173.62"
            y2="1149.537"
            gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
          >
            <stop offset="0" stopColor="#FFD43B" />
            <stop offset="1" stopColor="#FFE873" />
          </linearGradient>
          <path
            fill="url(#py_g1)"
            d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
            transform="translate(0 10.26)"
          />
          <path
            fill="url(#py_g2)"
            d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
            transform="translate(0 10.26)"
          />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "Container DevOps",
      benefit: "Server Stabil Anti-Down",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#028BB8"
            d="M110.4 55.1c.8-5.9-3.6-10.5-6.4-12.7-3.1 3.6-3.6 13.2 1.3 17.2-2.8 2.4-8.5 4.7-14.5 4.7H18.6c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6 3 .2 5.7.3 8.2.2 4.9-.1 8.9-.7 12-1.7.5-.2.9.1 1.1.5.2.5-.1.9-.5 1.1-.4.1-.8.3-1.3.4-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1-1.6 0-3.1 0-4.9-.1 6 6.8 15.4 10.8 27.2 10.8 25 0 46.2-11.1 55.5-35.9 6.7.7 13.1-1 16-6.7-4.5-2.7-10.5-1.8-13.9-.1z"
          />
          <path
            fill="#23C2EE"
            d="M28.4 52.7h9.8v9.8h-9.8zm11.2 0h9.8v9.8h-9.8zm11.3 0h9.8v9.8h-9.8zm11.3 0h9.8v9.8h-9.8zm-11.3-11.2h9.8v9.8h-9.8zm11.3 0h9.8v9.8h-9.8zm0-11.3h9.8v9.8h-9.8z"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Real-Time Runtime",
      benefit: "Notifikasi Cepat <0.1s",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#5FA04E"
            d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"
          />
          <path
            fill="#fff"
            d="M64 42c-12.15 0-14.85 9.45-14.85 14.85 0 12.15 13.5 12.15 14.85 16.2 1.35 4.05-1.35 6.75-5.4 6.75-5.4 0-8.1-4.05-8.1-4.05l-4.05 4.05s4.05 6.75 12.15 6.75c12.15 0 16.2-9.45 16.2-16.2 0-12.15-14.85-12.15-14.85-16.2 0-2.7 1.35-5.4 5.4-5.4 4.05 0 6.75 2.7 6.75 2.7l4.05-4.05S72.1 42 64 42z"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Responsive UI",
      benefit: "100% Mobile Ready",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#38bdf8"
            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
          />
        </svg>
      ),
    },
    {
      name: "Go (Golang)",
      category: "High-Throughput",
      benefit: "Ribuan Transaksi Serentak",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#00ADD8"
            d="M37.5 45c-15.2 0-27.5 12.3-27.5 27.5S22.3 100 37.5 100c12.2 0 22.5-7.9 26-19h-12c-2.7 5.1-8 8.6-14 8.6-8.8 0-16-7.2-16-16s7.2-16 16-16c6.1 0 11.4 3.5 14 8.6h12c-3.5-11.1-13.8-19-26-19zm53 0c-15.2 0-27.5 12.3-27.5 27.5S75.3 100 90.5 100c15.2 0 27.5-12.3 27.5-27.5S105.7 45 90.5 45zm0 10.4c9.4 0 17.1 7.7 17.1 17.1s-7.7 17.1-17.1 17.1-17.1-7.7-17.1-17.1 7.7-17.1 17.1-17.1zM5 33h26v6H5zm14-14h17v6H19zM2 47h19v6H2z"
          />
        </svg>
      ),
    },
    {
      name: "Redis",
      category: "In-Memory Cache",
      benefit: "Akses Data Tanpa Lag",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#D82C20"
            d="M121.8 80.5C115.1 84 80.4 98.2 73 102.1c-7.4 3.9-11.5 3.8-17.3 1-5.8-2.8-42.7-17.7-49.4-20.9C-.3 79-.5 76.8 6 74.3c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.9z"
          />
          <path
            fill="#A41E11"
            d="M121.8 72.5C115.1 76 80.4 90.2 73 94.1c-7.4 3.8-11.5 3.8-17.3 1C49.9 92.3 13 77.4 6.3 74.2c-3.3-1.6-5-2.9-5-4.2V57.3s48-10.5 55.8-13.2c7.8-2.8 10.4-2.9 17-.5s46.1 9.5 52.6 11.9V68c0 1.3-1.5 2.7-4.9 4.5z"
          />
          <path
            fill="#D82C20"
            d="M121.8 38.3C115.1 41.8 80.4 56 73 59.9c-7.4 3.8-11.5 3.8-17.3 1S13 43.3 6.3 40.1s-6.8-5.4-.3-7.9c6.5-2.6 43.2-17 51-19.7 7.8-2.8 10.4-2.9 17-.5s41.1 16.1 47.6 18.5c6.7 2.4 6.9 4.4.2 7.8z"
          />
        </svg>
      ),
    },
    {
      name: "Supabase",
      category: "Cloud Database",
      benefit: "Backup Otomatis Harian",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#3ECF8E"
            d="M53.484 2.128c3.267-4.117 9.905-1.862 9.977 3.396l.508 76.907H12.902c-9.365 0-14.587-10.817-8.764-18.149z"
          />
          <path
            fill="#249361"
            d="M74.516 125.872c-3.267 4.117-9.905 1.862-9.977-3.396l-.508-76.907h51.088c9.365 0 14.587 10.817 8.764 18.149z"
          />
        </svg>
      ),
    },
    {
      name: "Cloudflare",
      category: "DDoS & WAF Shield",
      benefit: "Perlindungan Siber 24/7",
      svg: (
        <svg className="w-5 h-5" viewBox="0 0 128 128" fill="none">
          <path
            fill="#F38020"
            d="M87.295 89.022c.763-2.617.472-5.015-.8-6.796-1.163-1.635-3.125-2.58-5.488-2.689l-44.737-.581c-.291 0-.545-.145-.691-.363s-.182-.509-.109-.8c.145-.436.581-.763 1.054-.8l45.137-.581c5.342-.254 11.157-4.579 13.192-9.885l2.58-6.723c.109-.291.145-.581.073-.872-2.906-13.158-14.644-22.97-28.672-22.97-12.938 0-23.913 8.359-27.838 19.952a13.35 13.35 0 0 0-9.267-2.58c-6.215.618-11.193 5.597-11.811 11.811-.145 1.599-.036 3.162.327 4.615C10.104 70.051 2 78.337 2 88.549c0 .909.073 1.817.182 2.726a.895.895 0 0 0 .872.763h82.57c.472 0 .909-.327 1.054-.8l.617-2.216z"
          />
          <path
            fill="#FAAE40"
            d="M101.542 60.275c-.4 0-.836 0-1.236.036-.291 0-.545.218-.654.509l-1.744 6.069c-.763 2.617-.472 5.015.8 6.796 1.163 1.635 3.125 2.58 5.488 2.689l9.522.581c.291 0 .545.145.691.363.145.218.182.545.109.8-.145.436-.581.763-1.054.8l-9.924.582c-5.379.254-11.157 4.579-13.192 9.885l-.727 1.853c-.145.363.109.727.509.727h34.089c.4 0 .763-.254.872-.654.581-2.108.909-4.325.909-6.614 0-13.447-10.975-24.422-24.458-24.422"
          />
        </svg>
      ),
    },
  ];

  // Duplicated array for seamless infinite marquee loop moving towards the right
  const duplicatedTech = [...techStacks, ...techStacks];

  return (
    <section
      id="tech-stack"
      className="py-6 sm:py-7 relative overflow-hidden bg-white border-b border-slate-200/80"
    >
      <div className="max-w-[1260px] mx-auto px-5 sm:px-8 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-blue-50 text-[#1E40AF] flex items-center justify-center shrink-0">
            <Cpu className="w-3.5 h-3.5" />
          </div>
          <div>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-slate-700">
              FONDASI TEKNOLOGI &amp; ARSITEKTUR KELAS INDUSTRI
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-500 font-medium">
          Standar Resmi Teruji Global · Bebas Biaya Sewa Lisensi Selamanya
        </p>
      </div>

      {/* Marquee Track moving towards the right */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 32,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-3 sm:gap-4 w-max hover:[animation-play-state:paused]"
        >
          {duplicatedTech.map((item, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:border-blue-300 hover:bg-white hover:shadow-md transition-all duration-200 cursor-default shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/60 flex items-center justify-center p-1 group-hover:scale-105 group-hover:border-blue-200 transition-all shrink-0 shadow-2xs">
                {item.svg}
              </div>
              <div className="pr-1">
                <div className="text-xs font-bold text-[#0F172A] group-hover:text-[#1D4ED8] transition-colors whitespace-nowrap">
                  {item.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium flex items-center gap-1.5 whitespace-nowrap">
                  <span>{item.category}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-blue-700 font-semibold">{item.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
