import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Abinest | Studio Rekayasa Sistem Enterprise & Otomasi B2B",
    template: "%s | Abinest",
  },
  description:
    "Abinest: Rekayasa Sistem Kelas Enterprise & Otomasi Bisnis Tanpa Kompromi. Spesialis Web Modern Next.js 100 Lighthouse, Sistem SIAKAD Sekolah Anti-Down, WA Automation, dan Integrasi API.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`scroll-smooth ${plusJakartaSans.variable} ${dmSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
