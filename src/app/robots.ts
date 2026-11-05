import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (
    process.env.NEXT_PUBLIC_APP_URL ?? "https://studio-rekayasa.triloe.id"
  ).replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/login"],
        disallow: ["/api/", "/portal/invoices", "/portal/automation"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
