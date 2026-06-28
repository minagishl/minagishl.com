import Link from "next/link"

import type { Post } from "@/lib/posts"

const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"

function formatDate(dateString: string) {
  const d = new Date(dateString)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}/${month}/${day}`
}

type PostsListProps = {
  items: Post[]
}

export function PostsList({ items }: PostsListProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-medium tracking-tight">Posts</h1>
      <ul className="flex flex-col">
        {items.map((item) => (
          <li
            key={item.slug}
            className="border-t border-border first:border-t-0"
          >
            <Link
              href={`/posts/${item.slug}`}
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-baseline gap-x-4 py-3 transition-colors hover:text-foreground"
            >
              <time
                dateTime={item.date}
                className="font-mono text-xs leading-snug text-muted-foreground tabular-nums"
              >
                {formatDate(item.date)}
              </time>
              <span className="text-sm leading-snug">
                <span className={linkClassName}>{item.title}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
