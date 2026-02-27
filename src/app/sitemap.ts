import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { getAllPostSlugsQuery } from "@/sanity/queries";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://njlawtips.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  let postRoutes: MetadataRoute.Sitemap = [];

  try {
    const slugs = await client.fetch<{ slug: string }[]>(getAllPostSlugsQuery);
    postRoutes = slugs.map((s) => ({
      url: `${BASE_URL}/blog/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    // Sanity not configured yet
  }

  return [...staticRoutes, ...postRoutes];
}
