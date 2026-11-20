import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const APP_BASE_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id";

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  title: {
    default: "Abinest | Jasa Website Cepat, Sistem ERP/SIAKAD/POS & Automasi AI/ML",
    template: "%s | Abinest",
  },
  description:
    "Studio rekayasa perangkat lunak untuk bisnis Indonesia: pembuatan website cepat (<0,8 detik), sistem ERP/SIAKAD/POS kustom, dan automasi AI/ML WhatsApp. Kepemilikan penuh tanpa biaya lisensi per pengguna.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-icon.png", sizes: "180x180", type: "image/png" },
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
      className={`scroll-smooth overflow-x-hidden ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased text-[#0A0A0A] bg-[#FAFAFA] selection:bg-[#0070F3] selection:text-white overflow-x-hidden">
        <GoogleAnalytics />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
