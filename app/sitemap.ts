import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { caseStudies } from "@/constants/work";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    "",
    "/about",
    "/work",
    "/pricing",
    "/faq",
    "/industries",
    "/services/web-design",
    "/services/web-development",
    "/services/seo",
    "/services/virtual-tours",
    "/services/photography",
    "/services/drone",
    "/blog",
    "/contact",
    "/build",
    "/calendly",
    "/privacy-policy",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.7,
  }));

  const work = caseStudies.map((c) => ({
    url: `${SITE_URL}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(`${p.date}T12:00:00`),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pages, ...work, ...posts];
}
