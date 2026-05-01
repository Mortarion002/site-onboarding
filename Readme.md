# Slite Onboarding Bot (Aether Ops UI)

A clean, modern chat interface built with Next.js 15 that answers team questions using Slite's Ask API. It follows the Aether Ops dark-mode design system with responsive layouts and smooth interactions.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file in the root directory and add your Slite API key:
   ```env
   SLITE_API_KEY=your_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## How it works

- **Frontend**: A React-based UI built with Next.js App Router, Tailwind CSS v4, and shadcn/ui components. The state is fully managed client-side using standard React hooks (`useState`, `useEffect`).
- **Backend**: A Next.js API route (`app/api/ask/route.ts`) securely communicates with the Slite Ask API using the hidden environment variable `SLITE_API_KEY`.
- **Styling**: It adopts a deep dark mode palette with warm orange/salmon accents (`#ff6b5c`), subtle micro-animations for the loading states, and dynamic component styling.

## Screenshot

*(Screenshot placeholder: Imagine a dark, sleek chat interface with left-aligned bot cards and right-aligned vibrant accent user bubbles)*
