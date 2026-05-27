# Minagishl

Source code for [minagishl.com](https://minagishl.com), a personal website built with Next.js.

The site is a single-page app with About, Projects, and Timeline sections.

## Tech Stack

- [Next.js](https://nextjs.org/) 16 with App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [shadcn/ui](https://ui.shadcn.com/) via shared UI package
- [Turborepo](https://turbo.build/) and [pnpm](https://pnpm.io/) workspaces

## Requirements

- Node.js 24+
- pnpm 10

## Getting Started

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create an `.env.local` file under `apps/web` when needed.

| Variable      | Description                | Default                               |
| ------------- | -------------------------- | ------------------------------------- |
| `TITLE`       | Site title / About heading | `Minagishl`                           |
| `DESCRIPTION` | Metadata description       | `Minagishl is a student and engineer` |
| `HOST`        | Hostname for metadata      | `minagishl.com`                       |

These variables are listed in Turbo `globalEnv`, so they are available at build time.

## Editing Content

Most static content is managed in TypeScript files.

| File                                  | Contents                             |
| ------------------------------------- | ------------------------------------ |
| `apps/web/data/projects.ts`           | Project entries                      |
| `apps/web/data/timeline.ts`           | Timeline entries, shown newest first |
| `apps/web/components/site-footer.tsx` | Footer and social links              |

## Scripts

Run these commands from the repository root.

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `pnpm dev`       | Start the development server |
| `pnpm build`     | Create a production build    |
| `pnpm lint`      | Run ESLint                   |
| `pnpm format`    | Format with Prettier         |
| `pnpm typecheck` | Run TypeScript type checking |

To start the production server for `apps/web` after building:

```bash
pnpm --filter web start
```

## Repository Layout

```txt
.
├── apps/web/                    # Next.js app
├── packages/ui/                 # Shared UI components and global CSS
├── packages/eslint-config/      # Shared ESLint config
├── packages/typescript-config/  # Shared TypeScript config
└── turbo.json
```

## Adding shadcn/ui Components

Add components from the repository root:

```bash
pnpm dlx shadcn@latest add button -c packages/ui
```

Components are placed in `packages/ui/src/components`.

Import them in the app like this:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## License

Code is licensed under the [MIT License](./LICENSE).
