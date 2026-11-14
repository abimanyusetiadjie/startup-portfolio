import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
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
    default: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    template: "%s | Abinest",
  },
  description:
    "Studio rekayasa perangkat lunak untuk bisnis Indonesia: pembuatan website cepat (<0,8 detik), sistem ERP/SIAKAD/POS kustom, dan automasi AI/ML WhatsApp. Kepemilikan penuh tanpa biaya lisensi per pengguna.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/images/abinest-icon-only-hd.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth overflow-x-hidden ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans antialiased text-slate-900 bg-[#F8FAFC] selection:bg-[#2563EB] selection:text-white overflow-x-hidden">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
