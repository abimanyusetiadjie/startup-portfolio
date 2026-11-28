import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    default: "Abinest — Digital Product & Software Engineering Studio",
    template: "%s | Abinest",
  },
  description:
    "Studio produk digital & software untuk website modern, aplikasi bisnis ERP/WMS/POS/SIAKAD kustom, dan automasi WhatsApp dengan 100% hak milik kode.",
  icons: {
    icon: [
      { url: "/icon.svg?v=3", type: "image/svg+xml" },
      { url: "/images/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/apple-icon.png?v=3", sizes: "180x180", type: "image/png" },
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
      className={`scroll-smooth [overflow-x:clip] ${plusJakarta.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-white text-[#111111] selection:bg-[#111111] selection:text-white [overflow-x:clip]">
        <GoogleAnalytics />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
