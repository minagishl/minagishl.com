import Link from "next/link"

import { ThemeToggle } from "@/components/theme-toggle"

const items = [
  { href: "https://x.com/minagishl", name: "Twitter" },
  { href: "https://github.com/minagishl", name: "GitHub" },
  { href: "https://discord.com/users/592245307853635645", name: "Discord" },
]

export function SiteFooter() {
  const year = new Date().getFullYear()
  const title = process.env.TITLE || "Minagishl"

  return (
    <footer className="px-6 py-6 sm:px-8">
      <div className="flex flex-col gap-4 text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
        <p>
          &#169; {year} {title}
        </p>
      </div>
    </footer>
  )
}
