import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Abinest",
    short_name: "Abinest",
    description:
      "Studio digital untuk website modern, aplikasi bisnis ERP/POS/SIAKAD kustom, dan automasi WhatsApp.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#111318",
    lang: "id",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
