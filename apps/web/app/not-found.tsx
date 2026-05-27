import Link from "next/link"

export default function NotFound() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl">Not Found</h1>
      <p className="text-sm text-muted-foreground">
        Could not find requested resource.
      </p>
      <Link href="/" className="underline underline-offset-2">
        Return Home
      </Link>
    </section>
  )
}
