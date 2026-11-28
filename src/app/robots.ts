import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const AI_AND_SEARCH_BOTS = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "PerplexityBot",
  "ClaudeBot",
  "Google-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/tools/"],
      },
      ...AI_AND_SEARCH_BOTS.map((bot) => ({
        userAgent: bot,
        allow: ["/"],
        disallow: ["/tools/"],
      })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
