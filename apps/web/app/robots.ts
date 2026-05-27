import type { MetadataRoute } from "next"

const host = process.env.HOST || "minagishl.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${host}/sitemap.xml`,
  }
}
