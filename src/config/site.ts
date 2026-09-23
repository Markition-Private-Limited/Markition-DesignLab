/**
 * site.ts — single source of truth for site-wide metadata.
 * Update this file to change SEO defaults across the entire site.
 */

export const siteConfig = {
  name: "Markition DesignLab",
  shortName: "DesignLab",
  description:
    "Markition DesignLab — where brands get designed, refined, and amplified.",
  url: "https://designlab.markition.com",
  ogImage: "/og-default.png",
  twitterHandle: "@markition",
  locale: "en_US",
  keywords: [
    "design",
    "branding",
    "marketing",
    "Markition",
    "DesignLab",
    "creative studio",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
