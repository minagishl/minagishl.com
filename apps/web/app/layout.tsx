import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { SiteFrame } from "@/components/site-frame"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@workspace/ui/lib/utils"

const title = process.env.TITLE || "Minagishl"
const description =
  process.env.DESCRIPTION || "Minagishl is a student and engineer"
const host = process.env.HOST || "minagishl.com"
const metadataBase = new URL(`https://${host}`)

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: metadataBase,
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary",
    title,
    description,
    site: "@minagishl",
  },
}

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <ThemeProvider>
          <SiteFrame>
            {children}
            <SiteFooter />
          </SiteFrame>
        </ThemeProvider>
      </body>
    </html>
  )
}
