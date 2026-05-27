import type { MetadataRoute } from "next"

const host = process.env.HOST || "minagishl.com"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `https://${host}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
