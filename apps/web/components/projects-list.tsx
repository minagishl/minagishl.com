import type { Project } from "@/data/projects"
import {
  ProjectCardShell,
  ProjectCardShellLink,
} from "@/components/project-card-shell"
import { ProjectsGithubLink } from "@/components/projects-github-link"

const MAX_VISIBLE = 5

function ProjectCard({ project }: { project: Project }) {
  const gradientKey = project.repositoryName
  const content = (
    <>
      <span className="text-sm leading-snug font-medium text-foreground">
        {project.name}
      </span>
      <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground/70">
        {project.repositoryName}
      </span>
      {project.description ? (
        <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/70">
          {project.description}
        </p>
      ) : null}
    </>
  )

  if (project.href) {
    return (
      <ProjectCardShellLink
        gradientKey={gradientKey}
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </ProjectCardShellLink>
    )
  }

  return (
    <ProjectCardShell gradientKey={gradientKey}>{content}</ProjectCardShell>
  )
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
