import type { MetadataRoute } from "next";
import { SIGNIFICA_WORK_ITEMS } from "@/data/significa-work";
import { SIGNIFICA_INSIGHTS } from "@/data/significa-insights";
import { SITE_URL } from "@/lib/seo";

const SITE_RELEASE_DATE = new Date("2026-11-28T00:00:00.000Z");
const LEGAL_RELEASE_DATE = new Date("2026-11-01T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/harga`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/jasa-pembuatan-website-jakarta`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/jasa-pembuatan-sistem-erp`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/jasa-automasi-whatsapp`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/karya`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/wawasan`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/demo`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/audit-gratis`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/tentang`,
      lastModified: SITE_RELEASE_DATE,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/kebijakan-privasi`,
      lastModified: LEGAL_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/syarat-ketentuan`,
      lastModified: LEGAL_RELEASE_DATE,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = SIGNIFICA_WORK_ITEMS.map((item) => ({
    url: `${SITE_URL}/karya/${item.slug}`,
    lastModified: SITE_RELEASE_DATE,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const insightRoutes: MetadataRoute.Sitemap = SIGNIFICA_INSIGHTS.map((post) => ({
    url: `${SITE_URL}/wawasan/${post.slug}`,
    lastModified: new Date(`${post.modifiedIso}T00:00:00.000Z`),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...workRoutes, ...insightRoutes];
}
