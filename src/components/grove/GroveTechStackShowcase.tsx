"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface TechItem {
  name: string;
  category: "Language" | "Framework" | "Database" | "Cloud & Server" | "DevOps" | "Integration";
  role: string;
  icon: React.ReactNode;
}

export function GroveTechStackShowcase() {
  // Row 1: Languages, Frameworks & Frontend/Backend Engines
  const track1: TechItem[] = [
    {
      name: "TypeScript",
      category: "Language",
      role: "Strict Type Safety",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path
            fill="#fff"
            d="M102.23 58.91a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
          />
        </svg>
      ),
    },
    {
      name: "Next.js 15",
      category: "Framework",
      role: "React Server Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 180 180" fill="none">
          <circle cx="90" cy="90" r="88" fill="#0F172A" stroke="#334155" strokeWidth="3" />
          <path
            d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z"
            fill="url(#ts_next_light_g1)"
          />
          <rect x="115" y="54" width="12" height="72" fill="url(#ts_next_light_g2)" />
          <defs>
            <linearGradient id="ts_next_light_g1" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ts_next_light_g2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Python",
      category: "Language",
      role: "AI & OCR Processing",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <linearGradient id="ts_py_light_g1" gradientUnits="userSpaceOnUse" x1="70.25" y1="1237.4" x2="170.6" y2="1151" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#5A9FD4" />
            <stop offset="1" stopColor="#306998" />
          </linearGradient>
          <linearGradient id="ts_py_light_g2" gradientUnits="userSpaceOnUse" x1="209.4" y1="1098.8" x2="173.6" y2="1149.5" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
            <stop offset="0" stopColor="#FFD43B" />
            <stop offset="1" stopColor="#FFE873" />
          </linearGradient>
          <path
            fill="url(#ts_py_light_g1)"
            d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
            transform="translate(0 10.26)"
          />
          <path
            fill="url(#ts_py_light_g2)"
            d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
            transform="translate(0 10.26)"
          />
        </svg>
      ),
    },
    {
      name: "React 19",
      category: "Framework",
      role: "Client Performance",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="11" fill="#00B4D8" />
          <ellipse cx="64" cy="64" rx="20" ry="54" fill="none" stroke="#00B4D8" strokeWidth="5.5" transform="rotate(30 64 64)" />
          <ellipse cx="64" cy="64" rx="20" ry="54" fill="none" stroke="#00B4D8" strokeWidth="5.5" transform="rotate(90 64 64)" />
          <ellipse cx="64" cy="64" rx="20" ry="54" fill="none" stroke="#00B4D8" strokeWidth="5.5" transform="rotate(150 64 64)" />
        </svg>
      ),
    },
    {
      name: "Go (Golang)",
      category: "Language",
      role: "50k+ Req/s Microservices",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <path
            fill="#00ADD8"
            d="M37.5 45c-15.2 0-27.5 12.3-27.5 27.5S22.3 100 37.5 100c12.2 0 22.5-7.9 26-19h-12c-2.7 5.1-8 8.6-14 8.6-8.8 0-16-7.2-16-16s7.2-16 16-16c6.1 0 11.4 3.5 14 8.6h12c-3.5-11.1-13.8-19-26-19zm53 0c-15.2 0-27.5 12.3-27.5 27.5S75.3 100 90.5 100c15.2 0 27.5-12.3 27.5-27.5S105.7 45 90.5 45zm0 10.4c9.4 0 17.1 7.7 17.1 17.1s-7.7 17.1-17.1 17.1-17.1-7.7-17.1-17.1 7.7-17.1 17.1-17.1zM5 33h26v6H5zm14-14h17v6H19zM2 47h19v6H2z"
          />
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Framework",
      role: "Zero-Bloat UI System",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <path
            fill="#0ea5e9"
            d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
          />
        </svg>
      ),
    },
    {
      name: "Node.js",
      category: "Language",
      role: "Event-Driven Backend",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <path
            fill="#417E38"
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
      name: "FastAPI",
      category: "Framework",
      role: "Async REST & OpenAPI",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#009688" />
          <path
            d="M72 16L32 72h24l-8 40 48-60H72l8-36z"
            fill="#ffffff"
          />
        </svg>
      ),
    },
    {
      name: "GraphQL",
      category: "Framework",
      role: "Flexible Schema Query",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <path
            fill="#E10098"
            d="M64 12l45 26v52L64 116 19 90V38l45-26zm0 10.6L27.6 40.5v47L64 105.4l36.4-17.9v-47L64 22.6z"
          />
          <circle cx="64" cy="14" r="9" fill="#E10098" />
          <circle cx="110" cy="40" r="9" fill="#E10098" />
          <circle cx="110" cy="88" r="9" fill="#E10098" />
          <circle cx="64" cy="114" r="9" fill="#E10098" />
          <circle cx="18" cy="88" r="9" fill="#E10098" />
          <circle cx="18" cy="40" r="9" fill="#E10098" />
        </svg>
      ),
    },
  ];

  // Row 2: Database, Cloud Servers, Infrastructure & DevOps
  const track2: TechItem[] = [
    {
      name: "PostgreSQL",
      category: "Database",
      role: "ACID Enterprise DB",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <path
            fill="#336791"
            d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z"
          />
        </svg>
      ),
    },
    {
      name: "Docker",
      category: "DevOps",
      role: "Containerized Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
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
      name: "Redis",
      category: "Database",
      role: "<1ms Ultra-Fast Cache",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
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
      category: "Database",
      role: "Realtime Data Sync",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
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
      category: "Cloud & Server",
      role: "Global CDN & Anti-DDoS",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
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
    {
      name: "Meta Cloud API",
      category: "Integration",
      role: "Official WA Gateway",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#25D366" />
          <path
            fill="#fff"
            d="M64.07 26C43.1 26 26.1 43 26.1 63.97c0 7.37 2.12 14.25 5.8 20.08L26 102.4l18.83-5.74a37.8 37.8 0 0 0 19.24 5.29c20.97 0 37.97-17 37.97-37.98C102.04 43 85.04 26 64.07 26zm22.18 53.64c-.93 2.61-4.63 4.82-7.46 5.37-1.93.38-4.45.68-12.93-2.83-10.84-4.49-17.82-15.49-18.36-16.2-.54-.72-4.39-5.85-4.39-11.16 0-5.3 2.78-7.91 3.76-8.98.98-1.08 2.15-1.35 2.87-1.35.72 0 1.44 0 2.06.04.67.04 1.57-.25 2.47 1.9.93 2.24 3.14 7.68 3.41 8.24.27.56.45 1.21.09 1.93-.36.72-.54 1.17-1.08 1.8-.54.63-1.13 1.4-1.62 1.88-.54.54-1.1 1.12-.47 2.2 1.8 3.1 4 6.2 7.78 9.53 4.87 4.29 8.97 5.62 10.23 6.25 1.26.63 2 .54 2.74-.32.74-.85 3.14-3.66 3.99-4.92.85-1.26 1.7-1.05 2.87-.61 1.17.45 7.44 3.51 8.72 4.15 1.28.63 2.13.94 2.45 1.48.31.54.31 3.13-.62 5.74z"
          />
        </svg>
      ),
    },
    {
      name: "Ubuntu Linux",
      category: "Cloud & Server",
      role: "Hardened Production OS",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <circle cx="64" cy="64" r="60" fill="#E95420" />
          <circle cx="64" cy="64" r="32" fill="none" stroke="#fff" strokeWidth="10" />
          <circle cx="28" cy="64" r="9" fill="#fff" />
          <circle cx="82" cy="33" r="9" fill="#fff" />
          <circle cx="82" cy="95" r="9" fill="#fff" />
        </svg>
      ),
    },
    {
      name: "Amazon AWS",
      category: "Cloud & Server",
      role: "Elastic Cloud Infra",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <rect width="128" height="128" rx="16" fill="#232F3E" />
          <path
            fill="#FF9900"
            d="M32 78c18 14 46 14 64 0 .9-.7 2.2.4 1.4 1.4-20 16-51 16-71 0-.9-.8.3-2.1 1.4-1.4zm60.5-2.2c1.2-1.5 4.3-3.6 6.3-2.9.4.1.7.5.5.9-.6 1.4-2.4 4.5-3.6 5.8-.4.4-1 .3-1.1-.2-.4-1.1-1.3-2.6-2.1-3.6z"
          />
          <text x="64" y="58" fill="#fff" fontSize="28" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
            aws
          </text>
        </svg>
      ),
    },
    {
      name: "Nginx",
      category: "Cloud & Server",
      role: "Reverse Proxy Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 128 128" fill="none">
          <polygon points="64,8 116,36 116,92 64,120 12,92 12,36" fill="#009639" />
          <path
            fill="#fff"
            d="M44 40v48l12-14V54l28 34V40L72 54v20L44 40z"
          />
        </svg>
      ),
    },
  ];

  // Duplicated arrays for smooth continuous marquee loops
  const duplicatedTrack1 = [...track1, ...track1];
  const duplicatedTrack2 = [...track2, ...track2];

  return (
    <section
      id="tech-stack"
      className="py-8 sm:py-10 relative bg-[#F8FAFC] border-y border-slate-200/80 overflow-hidden"
    >
      {/* Background Soft Mesh Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#E2E8F0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[240px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header: ONLY "OUR TECH STACK" */}
        <div className="text-center max-w-xl mx-auto mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/90 text-blue-700 text-xs sm:text-[12px] font-extrabold tracking-[0.18em] uppercase shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>OUR TECH STACK</span>
          </span>
        </div>

        {/* Dual Animated Marquee Tracks (Crisp White Squircle Cards) */}
        <div className="relative w-full overflow-hidden space-y-3 sm:space-y-3.5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
          {/* Track 1: Moving Towards Left (←) */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 34,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-3 sm:gap-3.5 w-max hover:[animation-play-state:paused] py-0.5 cursor-grab active:cursor-grabbing"
          >
            {duplicatedTrack1.map((item, idx) => (
              <div
                key={`track1-${idx}`}
                className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white hover:bg-slate-50/90 border border-slate-200/90 hover:border-blue-400/80 shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_18px_rgba(37,99,235,0.09)] transition-all duration-200 hover:scale-105 hover:-translate-y-1 p-2.5 shrink-0"
              >
                {/* Brand Logo */}
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-110 drop-shadow-2xs">
                  {item.icon}
                </div>

                {/* Title & Micro Role */}
                <div className="mt-2 text-center">
                  <p className="text-xs sm:text-[12.5px] font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors truncate max-w-[84px] sm:max-w-[100px]">
                    {item.name}
                  </p>
                  <span className="inline-block text-[9px] sm:text-[9.5px] font-medium text-slate-500 group-hover:text-blue-600/90 tracking-tight">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Track 2: Moving Towards Right (→) */}
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 38,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex gap-3 sm:gap-3.5 w-max hover:[animation-play-state:paused] py-0.5 cursor-grab active:cursor-grabbing"
          >
            {duplicatedTrack2.map((item, idx) => (
              <div
                key={`track2-${idx}`}
                className="group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white hover:bg-slate-50/90 border border-slate-200/90 hover:border-blue-400/80 shadow-[0_2px_6px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_18px_rgba(37,99,235,0.09)] transition-all duration-200 hover:scale-105 hover:-translate-y-1 p-2.5 shrink-0"
              >
                {/* Brand Logo */}
                <div className="shrink-0 transition-transform duration-200 group-hover:scale-110 drop-shadow-2xs">
                  {item.icon}
                </div>

                {/* Title & Micro Role */}
                <div className="mt-2 text-center">
                  <p className="text-xs sm:text-[12.5px] font-bold text-[#0F172A] group-hover:text-blue-600 transition-colors truncate max-w-[84px] sm:max-w-[100px]">
                    {item.name}
                  </p>
                  <span className="inline-block text-[9px] sm:text-[9.5px] font-medium text-slate-500 group-hover:text-blue-600/90 tracking-tight">
                    {item.role}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
