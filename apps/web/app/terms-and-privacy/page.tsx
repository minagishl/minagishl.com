import type { Metadata } from "next"
import Link from "next/link"

const sectionClassName = "scroll-mt-4 px-6 py-6 sm:px-8"

export const metadata: Metadata = {
  title: "Terms and Privacy",
  description: "Terms of use and privacy policy for minagishl.com.",
}

export default function TermsAndPrivacyPage() {
  return (
    <section className={sectionClassName}>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-lg font-medium tracking-tight">
            Terms and Privacy
          </h1>
        </div>

        <div className="flex flex-col gap-8 text-sm leading-relaxed text-muted-foreground">
          <div className="flex flex-col gap-3">
            <h2 className="text-base font-medium tracking-tight text-foreground">
              Collection of IP addresses, cookies, and other information
            </h2>
            <p>
              This is a private website and we do not collect any personal
              information from visitors. However, there is some information that
              may be collected through visits to our site, which is described
              below.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-base font-medium tracking-tight text-foreground">
              About Advertisement Distribution
            </h2>
            <p>
              This site may use third-party advertising services. Ad-serving
              providers use cookies and web beacons to display advertisements
              based on visitors&apos; interests. You can disable the use of
              cookies by ad-serving providers, so please check your browser
              settings.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-base font-medium tracking-tight text-foreground">
              About External Links
            </h2>
            <p>
              This site may contain external links, but we are not responsible
              for the protection of personal information on those external
              sites. If you click on a link to an external site, please check
              the privacy policy of the linked site.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-base font-medium tracking-tight text-foreground">
              About Chrome Extension
            </h2>
            <p>
              This Chrome extension collects no personal data from users.
              However, it may collect anonymous usage data to improve the
              functionality and user experience of the extension. This data does
              not include any personal identifiable information.
            </p>
          </div>

          <p>
            If you have any questions or concerns about our privacy policy,
            please contact us on Twitter{" "}
            <Link
              href="https://x.com/minagishl"
              className="text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
            >
              @Minagishl
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
