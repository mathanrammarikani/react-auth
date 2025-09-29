# AI Agent Instructions for react-auth

This document provides essential guidance for AI agents working with this codebase.

## Project Overview

This is a React application focusing on authentication using JWT with Supabase, built with React Router and TypeScript. The project uses Vite as the build tool and TailwindCSS for styling.

## Key Architecture Components

### Routing Structure

- Routes are defined in `app/routes.ts` using React Router's config-based routing
- Main app layout is in `app/root.tsx` which handles:
  - Global error boundaries
  - Common layout elements (meta tags, scripts)
  - Font loading for Inter font family
- Route components are located in `app/routes/`
- Layout components are in `app/homelayout/`

### Project Structure

```
app/
├── app.css        # Global styles with Tailwind imports
├── root.tsx       # Root layout and error handling
├── routes.ts      # Route definitions
├── homelayout/    # Layout components
└── routes/        # Route components
```

### Development Workflow

#### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Serve production build
- `npm run typecheck` - Generate types and check TypeScript

### Styling Conventions

- TailwindCSS is the primary styling solution
- Dark mode is configured using `prefers-color-scheme`
- Inter font family is used as the primary font

### Type Safety

- Strict TypeScript configuration is enabled
- Route types are generated automatically
- Type imports should use the pattern: `import type { Route } from "./+types/[route-name]"`

## Common Patterns

### Route Component Structure

Route components should:

1. Export metadata using the `meta` export
2. Follow naming convention: `[RouteName].tsx`
3. Import types from generated `+types` directory

Example:

```typescript
import type { Route } from "./+types/[route-name]";

export function meta({ /* args */ }: Route.MetaArgs) {
  return [
    { title: "Page Title" },
    { name: "description", content: "Page description" },
  ];
}

export default function RouteName() {
  return <YourComponent />;
}
```

### Error Handling

Global error handling is implemented in `root.tsx` with custom error messages for:

- 404 errors
- Development mode stack traces
- Generic error fallbacks

## Integration Points

- Supabase integration for authentication (to be implemented)
- React Router for routing and data handling
- TailwindCSS for styling through PostCSS
