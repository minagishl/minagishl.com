import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { SiteFrame } from "@/components/site-frame"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@workspace/ui/lib/utils"

const title = process.env.TITLE || "Minagishl"
const description =
  process.env.DESCRIPTION ||
  "Student developer in Japan building open-source web tools—bots, extensions, and things that make everyday workflows a little easier."
const host = process.env.HOST || "minagishl.com"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: title,
  url: `https://${host}`,
  description,
  jobTitle: "Student Developer",
  sameAs: ["https://x.com/minagishl", "https://github.com/minagishl"],
}
const metadataBase = new URL(`https://${host}`)

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    "Minagishl",
    "student developer",
    "web developer",
    "open source",
    "Japan",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: title, url: metadataBase }],
  creator: title,
  alternates: {
    canonical: metadataBase,
  },
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
    creator: "@minagishl",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
