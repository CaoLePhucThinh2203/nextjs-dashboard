# Acme Financial Dashboard

A full-stack financial dashboard application built with Next.js (App Router), demonstrating server-side rendering, data streaming, database mutations, and authentication.

## Overview

This project was built following the Next.js App Router curriculum, covering core full-stack workflows:
- **Nested Layouts & Pages:** Multi-level file-system routing using the App Router (`app/dashboard/layout.tsx`).
- **Streaming & Suspense:** Granular loading states using `loading.tsx` and React `Suspense` boundaries for dashboard revenue charts and latest invoices.
- **Data Fetching:** Direct SQL queries executed via React Server Components to eliminate request waterfalls.
- **Search & Pagination:** Client-side URL state synchronization using `useSearchParams`, `usePathname`, and `useRouter` with debounced search input.
- **Server Actions:** Form submissions, server-side data mutations, and path cache revalidation (`revalidatePath`).
- **Authentication:** Route protection and credentials-based authentication using NextAuth.js (Auth.js) and Edge Middleware.
- **Form Validation & Accessibility:** Server-side schema validation using Zod with accessible form states.

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL (`@vercel/postgres` / `postgres`)
- **Authentication:** NextAuth.js
- **Validation:** Zod
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Project Structure

```text
├── app/
│   ├── dashboard/          # Protected dashboard routes (invoices, customers)
│   ├── login/              # Authentication route
│   ├── lib/                # Database queries, Server Actions, and type definitions
│   └── ui/                 # Reusable UI components, skeletons, and fonts
├── public/                 # Static assets (images, hero illustrations)
├── auth.config.ts          # Edge-compatible NextAuth route configuration
├── auth.ts                 # NextAuth Node.js configuration & Credentials provider
├── middleware.ts           # Route protection middleware
└── next.config.ts / .mjs   # Next.js configuration