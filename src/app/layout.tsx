import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abinest | Software House & Konsultan Sistem, Website & Otomasi Bisnis",
    template: "%s | Abinest",
  },
  description:
    "Abinest adalah software house dan konsultan teknologi terpercaya yang melayani jasa pembuatan website modern Next.js, pengembangan sistem informasi enterprise (SIAKAD & ERP) anti-down, dan bot otomasi WhatsApp bisnis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${plusJakartaSans.variable} ${playfairDisplay.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans antialiased text-slate-900 bg-[#FAF9F6] selection:bg-[#D97736] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
