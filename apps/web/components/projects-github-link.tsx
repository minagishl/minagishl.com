import { cn } from "@workspace/ui/lib/utils"

const GITHUB_PROFILE_URL = "https://github.com/minagishl"

const cellClassName = cn(
  "flex h-full min-w-0 flex-col items-start justify-start gap-1 bg-background p-4 text-left sm:p-8",
  "transition-colors hover:bg-muted/50"
)

export function ProjectsGithubLink() {
  return (
    <a
      href={GITHUB_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cellClassName}
    >
      <span className="text-sm leading-snug font-medium text-foreground">
        View more
      </span>
      <span className="text-xs text-muted-foreground">on GitHub</span>
    </a>
  )
}
