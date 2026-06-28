import Link from "next/link"
import type { ComponentPropsWithoutRef } from "react"

const linkClassName =
  "text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"

function MdxLink({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  if (href?.startsWith("/")) {
    return (
      <Link href={href} className={linkClassName} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={linkClassName}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  )
}

export const mdxComponents = {
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="text-base font-medium tracking-tight text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => <p {...props} />,
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="list-disc space-y-2 pl-5" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol className="list-decimal space-y-2 pl-5" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />,
  a: MdxLink,
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="rounded-sm bg-muted px-1 py-0.5 font-mono text-xs text-foreground"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="overflow-x-auto rounded-sm border border-border bg-muted p-4 font-mono text-xs text-foreground"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="border-l border-border pl-4 text-muted-foreground"
      {...props}
    />
  ),
}
