import { HatchDivider } from "@/components/hatch-divider"
import { LinksList } from "@/components/links-list"
import { ProjectsList } from "@/components/projects-list"
import { TimelineList } from "@/components/timeline-list"
import { links } from "@/data/links"
import { projects } from "@/data/projects"
import { timeline } from "@/data/timeline"

const sortedTimeline = [...timeline].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

const host = process.env.HOST || "minagishl.com"
const title = process.env.TITLE || "Minagishl"
const description =
  process.env.DESCRIPTION ||
  "Student developer in Japan building open-source web tools—bots, extensions, and things that make everyday workflows a little easier."

const sectionClassName = "scroll-mt-4 px-6 py-6 sm:px-8"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: title,
  url: `https://${host}`,
  description,
  jobTitle: "Student Developer",
  sameAs: ["https://x.com/minagishl", "https://github.com/minagishl"],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section id="about" className={sectionClassName}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h1 className="text-lg font-medium tracking-tight">
              Hi, I&apos;m {title}.
            </h1>
            <p className="text-sm text-muted-foreground">
              Student developer in Japan.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              I build small tools on the web—bots, extensions, and things that
              make everyday workflows a little easier. Most of my work lives in
              open source: quick experiments that grow into something useful, or
              contributions to communities I care about. I like figuring out how
              products feel, not just how they compile.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m usually thinking about game
              design, tuning a custom PC, or chasing a new idea until it clicks.
            </p>
            <p>
              Browse my{" "}
              <a
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                href="#projects"
              >
                projects
              </a>
              , skim the{" "}
              <a
                className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                href="#timeline"
              >
                timeline
              </a>
              , or find me in the footer links if you want to say hi.
            </p>
          </div>
        </div>
      </section>

      <HatchDivider />

      <section id="projects" className="scroll-mt-4 px-0 py-0 sm:px-0 sm:py-0">
        <ProjectsList projects={projects} />
      </section>

      <HatchDivider />

      <section id="timeline" className={sectionClassName}>
        <TimelineList items={sortedTimeline} />
      </section>

      <HatchDivider />

      <section id="links" className={sectionClassName}>
        <LinksList items={links} />
      </section>
    </>
  )
}
