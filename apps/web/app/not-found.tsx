import type { Metadata } from "next"
import Link from "next/link"

const sectionClassName = "scroll-mt-4 px-6 py-16 sm:px-8 sm:py-20"

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className={sectionClassName}>
      <div className="flex min-h-[min(40svh,16rem)] flex-col justify-center gap-6">
        <p
          aria-hidden
          className="font-mono text-5xl font-medium tracking-tighter text-muted-foreground/35 tabular-nums select-none"
        >
          404
        </p>

        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-medium tracking-tight">Page not found</h1>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>
        </div>

        <Link
          href="/"
          className="w-fit text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          Return home
        </Link>
      </div>
    </section>
  )
}
