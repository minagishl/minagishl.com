import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import { mdxComponents } from "@/components/posts/mdx-components"
import { getAllPosts, getPostBySlug } from "@/lib/posts"

const sectionClassName = "scroll-mt-4 px-6 py-6 sm:px-8"

const articleClassName =
  "flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground [&_h2:not(:first-child)]:mt-5"

function formatDate(dateString: string) {
  const d = new Date(dateString)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}/${month}/${day}`
}

type PostPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  })

  return (
    <section className={sectionClassName}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-medium tracking-tight">
            {post.meta.title}
          </h1>
          <time
            dateTime={post.meta.date}
            className="font-mono text-xs text-muted-foreground tabular-nums"
          >
            {formatDate(post.meta.date)}
          </time>
        </div>

        <article className={articleClassName}>{content}</article>
      </div>
    </section>
  )
}
