"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useWebHaptics } from "web-haptics/react"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { trigger } = useWebHaptics({ debug: true })

  function handleClick() {
    trigger("nudge")
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={handleClick}
      className="transition-colors hover:text-foreground"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon size={14} />
      ) : (
        <MoonIcon size={14} />
      )}
    </button>
  )
}
