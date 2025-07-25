# Neon DB + Auth Test

Minimal SvelteKit setup testing Neon database connection and authentication.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Environment

```bash
# .env
DATABASE_URL="postgresql://user:pass@host:port/db"
```

## Features Tested

- Database connection (Neon)
- Basic query execution
- Auth integration (Neon Auth)
- SSR data fetching
- Server-side database access

## Tech Stack

- **Framework**: SvelteKit + Svelte 5
- **Database**: Neon PostgreSQL
- **Auth**: Neon Auth
- **Styling**: Tailwind CSS v4
- **Package Manager**: pnpm

## Files

- `src/lib/database/db.server.ts` - Database configuration
- `src/routes/+page.server.ts` - Server-side data fetching
- `src/routes/+page.svelte` - Frontend display

## Test

Visit `http://localhost:5173` to see database connection status and auth test.
