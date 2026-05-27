import { cn } from "@workspace/ui/lib/utils"
import { frameBandClassName } from "@/components/frame-band"
import { ExtendRail, FrameHairline } from "@/components/extend-rail"

const patternBackgroundClassName = cn(
  "relative z-0 overflow-hidden bg-background",
  "bg-[image:repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)]",
  "bg-[length:10px_10px] bg-[position:0px_0px]",
  "[--pattern-fg:var(--color-black)]/5 dark:[--pattern-fg:var(--color-white)]/10"
)

export function HatchDivider() {
  return (
    <div data-frame-hatch className={frameBandClassName} aria-hidden>
      <FrameHairline edge="top" className="z-10" />
      <FrameHairline edge="bottom" className="z-10" />
      <div className={cn("size-full", patternBackgroundClassName)} />
      <ExtendRail side="left" edge="top" className="z-20" />
      <ExtendRail side="right" edge="top" className="z-20" />
      <ExtendRail side="left" edge="bottom" className="z-20" />
      <ExtendRail side="right" edge="bottom" className="z-20" />
    </div>
  )
}
