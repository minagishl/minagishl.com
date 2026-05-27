"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import type { TimelineItem } from "@/data/timeline"
import { cn } from "@workspace/ui/lib/utils"

const PAGE_SIZE = 5

const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"

const chevronClassName =
  "size-4 shrink-0 text-muted-foreground transition-transform duration-300 ease-out motion-reduce:transition-none"

/** Date column (w-18) + gap-4 + chevron column — keeps title and body aligned */
const timelineRowClassName =
  "grid w-full grid-cols-[4.5rem_minmax(0,1fr)_1rem] items-baseline gap-x-4"

function formatDate(dateString: string) {
  const d = new Date(dateString)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${year}/${month}/${day}`
}

function TimelineEntry({ item }: { item: TimelineItem }) {
  const [open, setOpen] = useState(false)

  return (
    <li className="bg-background">
      <button
        type="button"
        aria-expanded={open}
        className={cn(timelineRowClassName, "cursor-pointer py-3 text-left")}
        onClick={() => setOpen((value) => !value)}
      >
        <time
          dateTime={item.date}
          className="font-mono text-xs leading-snug text-muted-foreground tabular-nums"
        >
          {formatDate(item.date)}
        </time>
        <span className="text-sm leading-snug font-medium text-foreground">
          {item.name}
        </span>
        <ChevronRight
          aria-hidden
          className={cn(
            chevronClassName,
            "self-center justify-self-end",
            open && "rotate-90"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div
            className={cn(
              "pb-3 transition-opacity duration-300 ease-out motion-reduce:transition-none",
              open ? "opacity-100" : "opacity-0"
            )}
          >
            <div className={timelineRowClassName}>
              <div aria-hidden />
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.value}
                {item.href ? (
                  <>
                    {" "}
                    <Link href={item.href} className={linkClassName}>
                      Go to page
                    </Link>
                  </>
                ) : null}
              </p>
              <div aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

type TimelineListProps = {
  items: TimelineItem[]
}

export function TimelineList({ items }: TimelineListProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const visible = items.slice(0, visibleCount)
  const remaining = items.length - visibleCount

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-medium tracking-tight">Timeline</h2>
      <div>
        <ul>
          {visible.map((item) => (
            <TimelineEntry key={item.id} item={item} />
          ))}
          {remaining > 0 ? (
            <li>
              <button
                type="button"
                className={cn(
                  timelineRowClassName,
                  "group cursor-pointer py-3 text-left"
                )}
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              >
                <span aria-hidden />
                <span className="text-sm leading-snug font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  <span className="underline decoration-border underline-offset-4 transition-[color,text-decoration-color] group-hover:decoration-foreground">
                    Show more
                  </span>
                </span>
                <ChevronRight
                  aria-hidden
                  className={cn(
                    chevronClassName,
                    "self-center justify-self-end transition-[transform,color] group-hover:translate-x-0.5 group-hover:text-foreground"
                  )}
                />
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  )
}
