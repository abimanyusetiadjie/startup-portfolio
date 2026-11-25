import type { MetadataRoute } from "next";
import { SIGNIFICA_WORK_ITEMS } from "@/data/significa-work";
import { SIGNIFICA_INSIGHTS } from "@/data/significa-insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (
    process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id"
  ).replace(/\/$/, "");

  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/jasa-pembuatan-website-jakarta`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/jasa-pembuatan-sistem-erp`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/jasa-automasi-whatsapp`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/demo`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/audit-gratis`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/kebijakan-privasi`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/syarat-ketentuan`, lastModified, changeFrequency: "monthly", priority: 0.4 },
  ];

  const workRoutes: MetadataRoute.Sitemap = SIGNIFICA_WORK_ITEMS.map((item) => ({
    url: `${baseUrl}/karya/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const insightRoutes: MetadataRoute.Sitemap = SIGNIFICA_INSIGHTS.map((post) => ({
    url: `${baseUrl}/wawasan/${post.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
