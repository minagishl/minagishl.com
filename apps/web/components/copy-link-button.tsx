"use client"

import { CheckIcon, LinkIcon } from "lucide-react"
import { useState } from "react"
import { useWebHaptics } from "web-haptics/react"

export function CopyLinkButton() {
  const [copied, setCopied] = useState(false)
  const { trigger } = useWebHaptics({ debug: true })

  async function handleClick() {
    await navigator.clipboard.writeText(window.location.href)
    trigger("nudge")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      type="button"
      aria-label="Copy link"
      onClick={handleClick}
      className="transition-colors hover:text-foreground"
    >
      {copied ? <CheckIcon size={14} /> : <LinkIcon size={14} />}
    </button>
  )
}
