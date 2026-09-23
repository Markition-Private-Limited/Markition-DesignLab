import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
  path?: string;
}

/**
 * generateMetadata — call this in any page's `export const metadata` or
 * `export async function generateMetadata()` to get consistent SEO tags.
 *
 * @example
 * // app/about/page.tsx
 * export const metadata = generateMetadata({ title: "About Us", path: "/about" });
 */
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  path = "",
}: SeoProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const pageImage = image ?? siteConfig.ogImage;
  const pageUrl = `${siteConfig.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: pageUrl },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      images: [{ url: pageImage, width: 1200, height: 630, alt: pageTitle }],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
  };
}
