import { cn } from "@workspace/ui/lib/utils"

const shellClassName =
  "group relative flex h-full min-w-0 flex-col items-start justify-start gap-1 overflow-hidden bg-background p-4 text-left transition-colors duration-200 hover:bg-muted sm:p-8"

const contentClassName = "relative z-10 flex min-w-0 flex-col gap-1"

type ProjectCardShellBaseProps = {
  children: React.ReactNode
  gradientKey?: string
  className?: string
}

type ProjectCardShellLinkProps = ProjectCardShellBaseProps & {
  href: string
  target?: string
  rel?: string
}

export function ProjectCardShell({
  children,
  className,
}: ProjectCardShellBaseProps) {
  return (
    <article className={cn(shellClassName, className)}>
      <div className={contentClassName}>{children}</div>
    </article>
  )
}

export function ProjectCardShellLink({
  children,
  className,
  href,
  target,
  rel,
}: ProjectCardShellLinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cn(shellClassName, className)}
    >
      <div className={contentClassName}>{children}</div>
    </a>
  )
}
