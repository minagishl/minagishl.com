import type { MetadataRoute } from "next"

const title = process.env.TITLE || "Minagishl"
const description =
  process.env.DESCRIPTION || "Minagishl is a student and engineer"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: title,
    short_name: title,
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  }
}
