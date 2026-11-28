import type { CaseStudyItem } from "@/data/significa-work";
import type { InsightArticle } from "@/data/significa-insights";
import type { FaqItem } from "@/components/grove/faq-data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_APP_URL ?? "https://abinest.id"
).replace(/\/$/, "");

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const DEFAULT_OG_IMAGE = {
  url: "/images/abinest-og-card.jpg",
  width: 1200,
  height: 630,
  alt: "Abinest (abinest.id) — Studio Website Modern, Aplikasi Bisnis ERP/POS/SIAKAD & Automasi WhatsApp Indonesia",
};

const EXTRA_SAME_AS = (process.env.NEXT_PUBLIC_SAME_AS ?? "")
  .split(",")
  .map((url) => url.trim())
  .filter(Boolean);

export const BRAND_SAME_AS = Array.from(
  new Set([
    "https://github.com/abimanyusetiadjie",
    ...EXTRA_SAME_AS,
  ])
);

export const BRAND_INFO = {
  name: "Abinest Digital Systems",
  shortName: "Abinest",
  alternateName: ["Abinest", "Abinest.id", "Abinest Studio", "Abinest Indonesia"],
  founderName: "Abimanyu Setiadjie",
  email: "abinest.id@gmail.com",
  telephone: "+62-813-9858-9745",
  whatsappDigits: "6281398589745",
  description:
    "Studio produk digital dan software house Indonesia (abinest.id) spesialis pembuatan website bisnis modern berkecepatan tinggi, aplikasi operasional kustom (ERP, WMS, Kasir POS, SIAKAD), serta automasi WhatsApp resmi dan AI pembaca dokumen dengan 100% hak milik kode program.",
  areaServed: ["Jakarta", "Surabaya", "Indonesia"],
};

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

export function buildBreadcrumbNode(crumbs: BreadcrumbCrumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.path === "/" ? SITE_URL : `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function buildFaqNode(
  items: { question: string; answer: string }[],
  id?: string
) {
  return {
    "@type": "FAQPage",
    ...(id ? { "@id": id } : {}),
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildOrganizationNode() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: BRAND_INFO.name,
    alternateName: BRAND_INFO.alternateName,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
    description: BRAND_INFO.description,
    founder: {
      "@type": "Person",
      name: BRAND_INFO.founderName,
      jobTitle: "Founder & Principal Systems Architect",
    },
    email: BRAND_INFO.email,
    telephone: BRAND_INFO.telephone,
    sameAs: BRAND_SAME_AS,
    areaServed: BRAND_INFO.areaServed.map((name) => ({
      "@type": name === "Indonesia" ? "Country" : "City",
      name,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: BRAND_INFO.telephone,
        email: BRAND_INFO.email,
        availableLanguage: ["Indonesian", "English"],
        areaServed: "ID",
      },
    ],
    knowsAbout: [
      "Pembuatan Website Perusahaan & E-Commerce Berkecepatan Tinggi",
      "Pengembangan Sistem ERP, WMS Gudang, SIAKAD Sekolah & Kasir POS Kustom",
      "Automasi WhatsApp Resmi Meta Cloud API",
      "Pembaca Dokumen & Faktur Otomatis (Document AI OCR)",
      "Pengembangan Perangkat Lunak Beli Putus 100% Hak Milik Kode",
    ],
  };
}

export function buildHomeJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      buildOrganizationNode(),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: BRAND_INFO.shortName,
        alternateName: BRAND_INFO.alternateName,
        inLanguage: "id-ID",
        publisher: { "@id": ORGANIZATION_ID },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Abinest — Studio Website, Aplikasi Bisnis & Automasi WhatsApp Indonesia",
        url: SITE_URL,
        image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
        telephone: BRAND_INFO.telephone,
        email: BRAND_INFO.email,
        priceRange: "Rp1.500.000 - Rp12.000.000+",
        areaServed: {
          "@type": "Country",
          name: "Indonesia",
        },
        provider: { "@id": ORGANIZATION_ID },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan Pengembangan Sistem Digital Abinest",
          itemListElement: [
            {
              "@type": "Offer",
              priceCurrency: "IDR",
              price: "1500000",
              itemOffered: {
                "@type": "Service",
                name: "Pembuatan Website Bisnis, Company Profile & Portal Modern",
                url: `${SITE_URL}/jasa-pembuatan-website-jakarta`,
              },
            },
            {
              "@type": "Offer",
              priceCurrency: "IDR",
              price: "4000000",
              itemOffered: {
                "@type": "Service",
                name: "Pengembangan Sistem ERP, WMS, SIAKAD & Kasir POS Kustom",
                url: `${SITE_URL}/jasa-pembuatan-sistem-erp`,
              },
            },
            {
              "@type": "Offer",
              priceCurrency: "IDR",
              price: "1500000",
              itemOffered: {
                "@type": "Service",
                name: "Automasi WhatsApp Resmi Meta & Pembaca Faktur AI",
                url: `${SITE_URL}/jasa-automasi-whatsapp`,
              },
            },
          ],
        },
      },
      buildFaqNode(faqs, `${SITE_URL}/#faq`),
    ],
  };
}

export function buildServicePageJsonLd(opts: {
  name: string;
  breadcrumbLabel: string;
  path: string;
  description: string;
  startingPriceIdr: number;
  areaServed: string[];
  faqs?: { question: string; answer: string }[];
}) {
  const fullUrl = `${SITE_URL}${opts.path}`;
  const graph: Record<string, unknown>[] = [
    buildBreadcrumbNode([
      { name: "Beranda", path: "/" },
      { name: "Layanan", path: "/#layanan" },
      { name: opts.breadcrumbLabel, path: opts.path },
    ]),
    {
      "@type": "Service",
      "@id": `${fullUrl}#service`,
      name: opts.name,
      serviceType: opts.breadcrumbLabel,
      description: opts.description,
      url: fullUrl,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: opts.areaServed.map((name) => ({
        "@type": name === "Indonesia" ? "Country" : "City",
        name,
      })),
      offers: {
        "@type": "Offer",
        url: fullUrl,
        priceCurrency: "IDR",
        price: String(opts.startingPriceIdr),
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: opts.startingPriceIdr,
          priceCurrency: "IDR",
        },
        availability: "https://schema.org/InStock",
      },
    },
  ];

  if (opts.faqs && opts.faqs.length > 0) {
    graph.push(buildFaqNode(opts.faqs, `${fullUrl}#faq`));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function buildCaseStudyJsonLd(project: CaseStudyItem) {
  const cleanTitle = project.client.replace(/\.$/, "");
  const fullUrl = `${SITE_URL}/karya/${project.slug}`;
  const primaryImage = project.images[0]?.src
    ? `${SITE_URL}${project.images[0].src}`
    : `${SITE_URL}${DEFAULT_OG_IMAGE.url}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbNode([
        { name: "Beranda", path: "/" },
        { name: "Karya & Studi Kasus", path: "/karya" },
        { name: cleanTitle, path: `/karya/${project.slug}` },
      ]),
      {
        "@type": "CreativeWork",
        "@id": `${fullUrl}#work`,
        name: `${cleanTitle} — Studi Kasus Abinest`,
        headline: project.tagline,
        description: `${project.problem} ${project.functionalValue}`,
        url: fullUrl,
        image: primaryImage,
        inLanguage: "id-ID",
        datePublished: `${project.year}-01-15`,
        about: project.sector,
        keywords: [cleanTitle, project.sector, project.scope, "Abinest"],
        creator: { "@id": ORGANIZATION_ID },
        publisher: { "@id": ORGANIZATION_ID },
        ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
      },
    ],
  };
}

export function buildArticleJsonLd(article: InsightArticle) {
  const fullUrl = `${SITE_URL}/wawasan/${article.slug}`;
  const wordCount = article.sections
    .flatMap((s) => [s.heading, ...s.paragraphs])
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    "@context": "https://schema.org",
    "@graph": [
      buildBreadcrumbNode([
        { name: "Beranda", path: "/" },
        { name: "Wawasan", path: "/wawasan" },
        { name: article.title, path: `/wawasan/${article.slug}` },
      ]),
      {
        "@type": "Article",
        "@id": `${fullUrl}#article`,
        headline: article.title,
        description: article.excerpt,
        url: fullUrl,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": fullUrl,
        },
        image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
        inLanguage: "id-ID",
        datePublished: article.publishedIso,
        dateModified: article.modifiedIso,
        wordCount,
        articleSection: article.tags[0] ?? "Wawasan Digital",
        keywords: [...article.tags, "Abinest", "abinest.id"],
        author: {
          "@type": "Person",
          name: article.authorName,
          jobTitle: article.authorRole,
          worksFor: { "@id": ORGANIZATION_ID },
        },
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  };
}
