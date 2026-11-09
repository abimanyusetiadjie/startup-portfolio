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
    default: "Abinest | Modern Web, Custom ERP, & AI/ML Automation Startup",
    template: "%s | Abinest",
  },
  description:
    "Abinest adalah startup software house & studio rekayasa teknologi: Spesialis pembuatan Website Modern Berkecepatan Tinggi, Sistem ERP Kustom Terpadu, dan Automasi AI & Machine Learning. 100% Hak Milik Source Code tanpa biaya sewa lisensi.",
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
      <body className="font-sans antialiased text-slate-900 bg-[#F8FAFC] selection:bg-[#059669] selection:text-white">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
