import type { Metadata } from "next"

import { PostsList } from "@/components/posts-list"
import { getAllPosts } from "@/lib/posts"

const sectionClassName = "scroll-mt-4 px-6 py-6 sm:px-8"

export const metadata: Metadata = {
  title: "Posts",
  description: "Updates and announcements from Minagishl.",
}

export default function PostsPage() {
  return (
    <section className={sectionClassName}>
      <PostsList items={getAllPosts()} />
    </section>
  )
}
