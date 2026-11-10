"use client";

import { motion } from "framer-motion";

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
      name: "JavaScript",
      category: "Language",
      role: "Fullstack Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
          />
        </svg>
      ),
    },
    {
      name: "Next.js",
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
      name: "PHP",
      category: "Language",
      role: "Web Backend Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
          <path
            fill="#777BB4"
            d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"
          />
        </svg>
      ),
    },
    {
      name: "Laravel",
      category: "Framework",
      role: "Enterprise PHP Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
          <path
            fill="#FF2D20"
            d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"
          />
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
      name: "React",
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
      name: "C# (.NET)",
      category: "Language",
      role: "Enterprise Backend",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 256 290" fill="none">
          <path fill="#9B4993" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76a24.4 24.4 0 0 0-9.24-9C209.17 43.05 175.1 23.5 141.1 3.86c-9.17-5.3-18.06-5.1-27.16.27-13.54 7.98-81.35 46.83-101.55 58.53C4.06 67.5.02 74.87 0 84.44v118.37c0 4.72 1 8.9 2.99 12.51 2.05 3.72 5.17 6.82 9.38 9.26 20.21 11.7 88.02 50.55 101.56 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25c1.99-3.61 2.98-7.8 2.98-12.52l-.01-118.35" />
          <path fill="#512BD4" d="M128.18 143.24 2.98 215.33c2.06 3.7 5.18 6.8 9.4 9.25 20.2 11.7 88.01 50.55 101.55 58.53 9.11 5.38 18 5.57 27.17.27 34.02-19.64 68.08-39.2 102.1-58.81a24.33 24.33 0 0 0 9.4-9.25z" />
          <path fill="#68217A" d="M255.57 84.45c0-4.83-1.04-9.1-3.13-12.76l-124.26 71.55 124.41 72.07c2-3.6 2.99-7.79 3-12.51 0 0 0-78.9-.02-118.35" />
          <g fill="#fff">
            <path d="M201.9 116.3v13.47h13.47v-13.48h6.73v13.48h13.48v6.73H222.1v13.48h13.48v6.74H222.1v13.47h-6.73V156.7h-13.48v13.48h-6.73V156.7h-13.48v-6.73h13.47V136.5h-13.47v-6.74h13.47v-13.48zm13.47 20.2h-13.48v13.48h13.48z" />
            <path d="M128.46 48.63a94.96 94.96 0 0 1 82.26 47.45l-.16-.27-41.35 23.8A47.28 47.28 0 0 0 129 96.33h-.54a47.3 47.3 0 0 0-47.3 47.3 47.08 47.08 0 0 0 6.23 23.47 47.28 47.28 0 0 0 82.29-.27l-.2.35 41.29 23.91a94.97 94.97 0 0 1-81.25 47.54h-1.06a94.96 94.96 0 0 1-95-95 95 95 0 0 1 95-95z" />
          </g>
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
      name: "n8n",
      category: "Integration",
      role: "Workflow Automation",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 24 24" fill="none">
          <path
            fill="#EA4B71"
            d="M21.4737 5.6842c-1.1772 0-2.1663.8051-2.4468 1.8947h-2.8955c-1.235 0-2.289.893-2.492 2.111l-.1038.623a1.263 1.263 0 0 1-1.246 1.0555H11.289c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947s-2.1663.8051-2.4467 1.8947H4.973c-.2805-1.0896-1.2696-1.8947-2.4468-1.8947C1.1311 9.4737 0 10.6047 0 12s1.131 2.5263 2.5263 2.5263c1.1772 0 2.1663-.8051 2.4468-1.8947h1.4223c.2804 1.0896 1.2696 1.8947 2.4467 1.8947 1.1772 0 2.1663-.8051 2.4468-1.8947h1.0008a1.263 1.263 0 0 1 1.2459 1.0555l.1038.623c.203 1.218 1.257 2.111 2.492 2.111h.3692c.2804 1.0895 1.2696 1.8947 2.4468 1.8947 1.3952 0 2.5263-1.131 2.5263-2.5263s-1.131-2.5263-2.5263-2.5263c-1.1772 0-2.1664.805-2.4468 1.8947h-.3692a1.263 1.263 0 0 1-1.246-1.0555l-.1037-.623A2.52 2.52 0 0 0 13.9607 12a2.52 2.52 0 0 0 .821-1.4794l.1038-.623c.203-1.218 1.257-2.111 2.492-2.111h2.8955c.2805 1.0896 1.2696 1.8947 2.4468 1.8947C22.8689 10.3158 24 9.1848 24 7.8421s-1.1311-2.1579-2.5263-2.1579z"
          />
        </svg>
      ),
    },
    {
      name: "OpenClaw",
      category: "Integration",
      role: "Autonomous AI Agent",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 120 120" fill="none">
          <defs>
            <linearGradient id="ts_openclaw_grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d4d" />
              <stop offset="100%" stopColor="#991b1b" />
            </linearGradient>
          </defs>
          <path
            d="M60 10 C30 10 15 35 15 55 C15 75 30 95 45 100 L45 110 L55 110 L55 100 C55 100 60 102 65 100 L65 110 L75 110 L75 100 C90 95 105 75 105 55 C105 35 90 10 60 10Z"
            fill="url(#ts_openclaw_grad)"
          />
          <path
            d="M20 45 C5 40 0 50 5 60 C10 70 20 65 25 55 C28 48 25 45 20 45Z"
            fill="url(#ts_openclaw_grad)"
          />
          <path
            d="M100 45 C115 40 120 50 115 60 C110 70 100 65 95 55 C92 48 95 45 100 45Z"
            fill="url(#ts_openclaw_grad)"
          />
          <path d="M45 15 Q35 5 30 8" stroke="#ff4d4d" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M75 15 Q85 5 90 8" stroke="#ff4d4d" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="45" cy="35" r="5.5" fill="#050810" />
          <circle cx="75" cy="35" r="5.5" fill="#050810" />
          <circle cx="46" cy="34" r="2.2" fill="#00e5cc" />
          <circle cx="76" cy="34" r="2.2" fill="#00e5cc" />
        </svg>
      ),
    },
    {
      name: "Hermes",
      category: "Integration",
      role: "High-Perf JS Engine",
      icon: (
        <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 493 378" fill="none">
          <g transform="translate(-100.62 -161.23)">
            <path
              fill="#2BB673"
              fillOpacity="0.25"
              stroke="#334155"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M247.21 353.68l4.7-20.53c2-8.54 3.79-25.32 4.85-33.12-11.36-4.63-26.7-2-46.61-4.25a80.64 80.64 0 01-41.3-17.59l0 2.84A81.36 81.36 0 00240.55 353z"
            />
            <path
              fill="#2BB673"
              fillOpacity="0.6"
              stroke="#334155"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M179.85 240.67a81 81 0 01-41.52-17.21l0 .07A81.38 81.38 0 00210 295.47l48.79 3.66C261.17 269.38 247.37 248.26 179.85 240.67z"
            />
            <path
              fill="#2BB673"
              stroke="#334155"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M563.07 168.85H512.35a30.56 30.56 0 00-29.92 24.31l-19.69 96.09a13.92 13.92 0 01-13.59 11.11l-76.35.22a13.9 13.9 0 01-13.66-16.74h0c12.39-59.36-31.35-115.11-115.81-115.11H108.12a81.4 81.4 0 0071.73 71.94c89.19 10 82.24 46.07 72.06 90.48L212.46 503.39a22.79 22.79 0 0022.22 27.88h47.95A30.55 30.55 0 00312.54 507l20.72-98.62a13.91 13.91 0 0113.57-11l76.83-.22a13.91 13.91 0 0113.66 16.72l-18.4 89.1a22.8 22.8 0 0022.22 27.89h50.73a30.57 30.57 0 0029.91-24.32l63.51-309.73A22.79 22.79 0 00563.07 168.85z"
            />
          </g>
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
        {/* Header: Title Case with Electric Blue Accent */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 select-text">
            Our Tech <span className="text-blue-600">Stack</span><span className="text-blue-600">.</span>
          </h2>
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
