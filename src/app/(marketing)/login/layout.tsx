import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Masuk Portal Klien",
  description:
    "Akses portal pemantauan progres proyek, tagihan, dan laporan sistem untuk klien Abinest Digital Systems.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return children;
}
