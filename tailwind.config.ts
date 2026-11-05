import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        obsidian: "#0F172A",
        // Soft Teal Professional Tokens
        tealTheme: {
          bgMain: "#F8FAFC",
          bgCard: "#FFFFFF",
          bgAlt: "#F0FDFA",
          deep: "#0F766E",
          hover: "#0D9488",
          emerald: "#10B981",
          soft: "#5EEAD4",
          badgeBg: "#CCFBF1",
          textDark: "#134E4A",
          textMuted: "#64748B",
          border: "#E2E8F0",
        },
        brand: {
          DEFAULT: "#0F766E",
          primary: "#0F766E",
          hover: "#0D9488",
        },
        status: {
          emerald: "#10B981",
          online: "#10B981",
        },
        heading: "#134E4A",
        charcoal: "#134E4A",
        muted: {
          DEFAULT: "#64748B",
          slate: "#64748B",
        },
        hairline: "#E2E8F0",
        triloe: {
          canvas: "#F8FAFC",
          surface: "#FFFFFF",
          obsidian: "#0F172A",
          primary: "#0F766E",
          emerald: "#10B981",
          heading: "#134E4A",
          muted: "#64748B",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        jakarta: ["var(--font-heading)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        soft: "0 20px 25px -5px rgb(15 23 42 / 0.05), 0 8px 10px -6px rgb(15 23 42 / 0.05)",
        "soft-lg":
          "0 25px 50px -12px rgb(15 23 42 / 0.08), 0 12px 24px -8px rgb(15 23 42 / 0.04)",
      },
      borderRadius: {
        "3xl": "1.75rem", // 28px per design.md
      },
    },
  },
  plugins: [],
};

export default config;
