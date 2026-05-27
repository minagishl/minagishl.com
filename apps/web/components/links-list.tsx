import { ArrowUpRightIcon } from "lucide-react"

import type { MutualLink } from "@/data/links"

function LinkEntry({ link }: { link: MutualLink }) {
  return (
    <li>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between py-3 text-left"
      >
        <div className="flex min-w-0 flex-col gap-0.5">
          <span className="text-sm leading-snug font-medium text-foreground transition-colors group-hover:text-foreground">
            {link.name}
          </span>
          {link.description ? (
            <span className="text-xs leading-relaxed text-muted-foreground">
              {link.description}
            </span>
          ) : null}
        </div>
        <ArrowUpRightIcon
          aria-hidden
          size={14}
          className="ml-4 shrink-0 text-muted-foreground transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
        />
      </a>
    </li>
  )
}

type LinksListProps = {
  items: MutualLink[]
}

export function LinksList({ items }: LinksListProps) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-medium tracking-tight">Links</h2>
        <p className="text-sm text-muted-foreground">No links yet.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium tracking-tight">Links</h2>
      <ul className="divide-y divide-border">
        {items.map((link) => (
          <LinkEntry key={link.href} link={link} />
        ))}
      </ul>
    </div>
  )
}
