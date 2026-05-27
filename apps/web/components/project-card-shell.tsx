import Image from "next/image"

import { getGradientImagePath } from "@/lib/gradient-from-text"
import { cn } from "@workspace/ui/lib/utils"

const shellClassName =
  "group relative flex h-full min-w-0 flex-col items-start justify-start gap-1 overflow-hidden bg-background p-4 text-left sm:p-8"

const contentClassName = "relative z-10 flex min-w-0 flex-col gap-1"

const gradientLayerClassName = cn(
  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-out",
  "group-hover:opacity-100",
  "motion-reduce:opacity-0 motion-reduce:group-hover:opacity-0"
)

type ProjectCardShellBaseProps = {
  children: React.ReactNode
  gradientKey: string
  className?: string
}

type ProjectCardShellLinkProps = ProjectCardShellBaseProps & {
  href: string
  target?: string
  rel?: string
}

function GradientLayer({ gradientKey }: { gradientKey: string }) {
  const src = getGradientImagePath(gradientKey)

  return (
    <div aria-hidden className={cn(gradientLayerClassName, "overflow-hidden")}>
      <Image
        src={src}
        alt=""
        fill
        sizes="(max-width: 640px) 50vw, 320px"
        className="scale-110 object-cover saturate-150"
      />
      <div className="absolute inset-0 bg-background/85" />
      <div className="absolute inset-0 mask-[radial-gradient(110%_70%_at_20%_15%,black,transparent)]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, 320px"
          className="scale-125 object-cover opacity-85 blur-xl"
        />
      </div>
    </div>
  )
}

export function ProjectCardShell({
  children,
  gradientKey,
  className,
}: ProjectCardShellBaseProps) {
  return (
    <article className={cn(shellClassName, className)}>
      <GradientLayer gradientKey={gradientKey} />
      <div className={contentClassName}>{children}</div>
    </article>
  )
}

export function ProjectCardShellLink({
  children,
  gradientKey,
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
      <GradientLayer gradientKey={gradientKey} />
      <div className={contentClassName}>{children}</div>
    </a>
  )
}
