import { cn } from "@workspace/ui/lib/utils"
import { ExtendRail } from "@/components/extend-rail"

type SiteFrameProps = {
  children: React.ReactNode
}

const corners = [
  { key: "top-left", v: "left-0 top-0 -translate-y-full" },
  { key: "top-right", v: "right-0 top-0 -translate-y-full" },
  { key: "bottom-left", v: "bottom-0 left-0 translate-y-full" },
  { key: "bottom-right", v: "bottom-0 right-0 translate-y-full" },
] as const

function verticalMask(cornerKey: (typeof corners)[number]["key"]) {
  return cornerKey.startsWith("top")
    ? "mask-[linear-gradient(to_bottom,transparent,black_70%)]"
    : "mask-[linear-gradient(to_top,transparent,black_70%)]"
}

function FrameCorners() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 hidden sm:block"
    >
      {corners.map((corner) => (
        <div key={corner.key}>
          <span
            className={cn(
              "absolute h-10 w-px bg-border",
              corner.v,
              verticalMask(corner.key)
            )}
          />
          <ExtendRail
            side={corner.key.endsWith("left") ? "left" : "right"}
            edge={corner.key.startsWith("top") ? "top" : "bottom"}
          />
        </div>
      ))}
    </div>
  )
}

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="flex min-h-svh justify-center overflow-x-hidden px-0 py-6 sm:px-6 sm:py-14">
      <div className="relative w-full max-w-xl">
        <FrameCorners />
        <div
          className={cn(
            "relative grid grid-cols-1 overflow-visible border-0 bg-background sm:border sm:border-border",
            // Hairline between sections (not divide-y — borders shift absolute rails).
            "[&>*+*:not([data-frame-hatch])]:relative",
            "[&>*+*:not([data-frame-hatch])]:before:pointer-events-none [&>*+*:not([data-frame-hatch])]:before:absolute [&>*+*:not([data-frame-hatch])]:before:inset-x-0 [&>*+*:not([data-frame-hatch])]:before:top-0 [&>*+*:not([data-frame-hatch])]:before:z-10 [&>*+*:not([data-frame-hatch])]:before:h-px [&>*+*:not([data-frame-hatch])]:before:bg-border [&>*+*:not([data-frame-hatch])]:before:content-['']",
            "[&>[data-frame-hatch]+*]:before:content-none"
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
