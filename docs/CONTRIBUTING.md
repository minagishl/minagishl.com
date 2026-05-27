# Contributing

This document explains how to add or update content on the site.

## Prerequisites

- Node.js 24+
- pnpm 10

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

---

## Adding a Mutual Link

Mutual links appear in the **Links** section at the bottom of the page.

Open `apps/web/data/links.ts` and append an entry to the `links` array:

```ts
export const links: MutualLink[] = [
  {
    name: "Site Name",           // displayed name
    href: "https://example.com", // full URL (must start with https://)
    description: "Short bio.",   // optional — one sentence is enough
  },
]
```

### Fields

| Field         | Required | Description                            |
| ------------- | -------- | -------------------------------------- |
| `name`        | Yes      | Name shown on the page                 |
| `href`        | Yes      | Full URL including `https://`          |
| `description` | No       | Short description shown below the name |

### Example

```ts
{
  name: "Example",
  href: "https://example.com/",
  description: "A short description of the site.",
},
```

Links are rendered in the order they appear in the array. No rebuild or code change outside the data file is needed.

---

## Adding a Project

Open `apps/web/data/projects.ts` and append an entry to the `projects` array:

```ts
{
  name: "Project Name",
  repositoryName: "repo-name",            // used as the subtitle
  href: "https://github.com/you/repo",    // optional link
  description: "What it does.",           // optional
},
```

Only the first five projects are shown on the page. The rest are accessible via the GitHub link card.

---

## Adding a Timeline Entry

Open `apps/web/data/timeline.ts` and add an entry to the `timeline` array. Entries are sorted newest-first automatically, so order in the file does not matter.

```ts
{
  name: "Entry title",
  value: "Longer description shown when expanded.",
  date: "2025-01-01T00:00:00.000Z", // ISO 8601
  href: "https://example.com",      // optional
},
```

---

## Verifying Changes

After editing a data file, check that the page renders correctly:

```bash
pnpm dev
```

For a full type and lint check before committing:

```bash
pnpm typecheck
pnpm lint
```
