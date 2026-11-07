import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
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
      className={`scroll-smooth ${plusJakartaSans.variable} ${jetBrainsMono.variable}`}
    >
      <body className="font-sans antialiased text-slate-900 bg-white selection:bg-[#0F766E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
