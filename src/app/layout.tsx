import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const loraSerif = Lora({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
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
    default: "Abinest — Studio Produk Digital, Website Cepat, ERP & Automasi AI",
    template: "%s | Abinest",
  },
  description:
    "Studio rekayasa perangkat lunak di Jakarta & Surabaya. Merancang dan membangun website cepat (<0,8 detik), sistem ERP/SIAKAD/POS kustom, serta automasi WhatsApp AI resmi dengan 100% hak milik kode.",
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
      className={`scroll-smooth [overflow-x:clip] ${plusJakarta.variable} ${loraSerif.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-white text-[#111111] selection:bg-[#D13424]/15 selection:text-[#111111] [overflow-x:clip]">
        <GoogleAnalytics />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
