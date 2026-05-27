import { cn } from "@workspace/ui/lib/utils"

function horizontalExtendMask(side: "left" | "right") {
  return side === "left"
    ? "mask-[linear-gradient(to_left,black_70%,transparent)]"
    : "mask-[linear-gradient(to_right,black_70%,transparent)]"
}

type FrameEdge = "top" | "bottom"

type ExtendRailProps = {
  side: "left" | "right"
  edge: FrameEdge
  className?: string
}

/** Full-width horizontal rule on a section edge (absolute; no layout shift). */
export function FrameHairline({
  edge,
  className,
}: {
  edge: FrameEdge
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 h-px bg-border",
        edge === "top" ? "top-0" : "bottom-0",
        className
      )}
    />
  )
}

/** Horizontal line that extends outward from the frame edge with a fade. */
export function ExtendRail({ side, edge, className }: ExtendRailProps) {
  return (
    <span
      className={cn(
        "absolute h-px w-10 bg-border",
        edge === "top" ? "top-0" : "bottom-0",
        side === "left"
          ? "left-0 -translate-x-full"
          : "right-0 translate-x-full",
        horizontalExtendMask(side),
        className
      )}
    />
  )
}
