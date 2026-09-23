import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Next.js auto-generates /sitemap.xml from this file.
 * Add new pages here as the site grows.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
