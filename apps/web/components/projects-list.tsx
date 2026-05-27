import type { Project } from "@/data/projects"
import { cn } from "@workspace/ui/lib/utils"
import { ProjectsGithubLink } from "@/components/projects-github-link"

const MAX_VISIBLE = 5

const cellClassName = cn(
  "flex h-full min-w-0 flex-col items-start justify-start gap-1 bg-background p-4 text-left sm:p-8",
  "transition-colors hover:bg-muted/50"
)

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <span className="text-sm leading-snug font-medium text-foreground">
        {project.name}
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        {project.repositoryName}
      </span>
      {project.description ? (
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      ) : null}
    </>
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cellClassName}
      >
        {content}
      </a>
    )
  }

  return <article className={cellClassName}>{content}</article>
}

type ProjectsListProps = {
  projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
  const visible = projects.slice(0, MAX_VISIBLE)

  return (
    <div className="grid grid-cols-2 gap-px bg-border">
      {visible.map((project) => (
        <ProjectCard key={project.repositoryName} project={project} />
      ))}
      <ProjectsGithubLink />
    </div>
  )
}
