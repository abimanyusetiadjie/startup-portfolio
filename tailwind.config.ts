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
        // Electric Cobalt & Tech Azure B2B Enterprise Tokens
        cobaltTheme: {
          bgMain: "#F8FAFC",
          bgCard: "#FFFFFF",
          bgAlt: "#F0F9FF",
          deep: "#1D4ED8",
          primary: "#2563EB",
          hover: "#1E40AF",
          azure: "#0284C7",
          soft: "#38BDF8",
          badgeBg: "#E0F2FE",
          textDark: "#1E3A8A",
          textMuted: "#64748B",
          border: "#E2E8F0",
        },
        brand: {
          DEFAULT: "#2563EB",
          primary: "#2563EB",
          hover: "#1D4ED8",
          dark: "#1E3A8A",
          azure: "#0284C7",
        },
        status: {
          cobalt: "#2563EB",
          online: "#2563EB",
        },
        heading: "#0F172A",
        charcoal: "#0F172A",
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
        heading: ["var(--font-sans)", "sans-serif"],
        jakarta: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "2xs": "0 1px 2px 0 rgb(15 23 42 / 0.04)",
        xs: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.05)",
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
