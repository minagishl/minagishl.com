import fs from "node:fs"
import path from "node:path"

import matter from "gray-matter"

export type Post = {
  slug: string
  title: string
  date: string
  description: string
}

const postsDirectory = path.join(process.cwd(), "content/posts")

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString()
  }

  if (typeof value === "string") {
    return value
  }

  throw new Error("date must be a string or Date")
}

function parsePost(slug: string, raw: string): { meta: Post; content: string } {
  const { data, content } = matter(raw)

  if (typeof data.title !== "string" || typeof data.description !== "string") {
    throw new Error(
      `Invalid frontmatter in ${slug}.mdx: title, date, and description are required`
    )
  }

  let date: string
  try {
    date = normalizeDate(data.date)
  } catch {
    throw new Error(
      `Invalid frontmatter in ${slug}.mdx: title, date, and description are required`
    )
  }

  return {
    meta: {
      slug,
      title: data.title,
      date,
      description: data.description,
    },
    content,
  }
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(postsDirectory, file), "utf8")
      return parsePost(slug, raw).meta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(
  slug: string
): { meta: Post; content: string } | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const raw = fs.readFileSync(fullPath, "utf8")
  return parsePost(slug, raw)
}
