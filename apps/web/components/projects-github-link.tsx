import { ProjectCardShellLink } from "@/components/project-card-shell"

const GITHUB_PROFILE_URL = "https://github.com/minagishl"

export function ProjectsGithubLink() {
  return (
    <ProjectCardShellLink
      gradientKey="github.com/minagishl"
      href={GITHUB_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-sm leading-snug font-medium text-foreground">
        View more
      </span>
      <span className="text-xs text-muted-foreground">on GitHub</span>
    </ProjectCardShellLink>
  )
}
