import type { MetadataRoute } from "next"

import { getAllPosts } from "@/lib/posts"

const host = process.env.HOST || "minagishl.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${host}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `https://${host}/posts`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getAllPosts().map((post) => ({
      url: `https://${host}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `https://${host}/terms-and-privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
