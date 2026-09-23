import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/** Next.js auto-generates /robots.txt from this file. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
