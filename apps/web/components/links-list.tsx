import { ArrowUpRightIcon } from "lucide-react"

import type { MutualLink } from "@/data/links"

const ISSUE_URL =
  "https://github.com/minagishl/minagishl.com/issues/new?template=mutual_link.yml"

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
          className="ml-4 shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
        />
      </a>
    </li>
  )
}

type LinksListProps = {
  items: MutualLink[]
}

export function LinksList({ items }: LinksListProps) {
  const header = (
    <div className="flex items-center justify-between">
      <h2 className="text-lg font-medium tracking-tight">Links</h2>
      <a
        href={ISSUE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        Request a link
      </a>
    </div>
  )

  if (items.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        {header}
        <p className="text-sm text-muted-foreground">No links yet.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {header}
      <ul className="divide-y divide-border">
        {items.map((link) => (
          <LinkEntry key={link.href} link={link} />
        ))}
      </ul>
    </div>
  )
}
