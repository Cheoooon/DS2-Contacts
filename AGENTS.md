# Repository Guidelines

## Project Overview
This repository manages AI-assisted development configuration files (Caveman mode rules, agent instructions) and contains the `README.md` for the "Contacts Manager" application, a personal contacts manager for authenticated users.

## Architecture & Data Flow
- **Contacts Manager**:
  - Backend: Node.js 26 (native strip-types), Express 5, TypeScript.
  - Database: SQLite (native `node:sqlite`).
  - Frontend: Handlebars, Tailwind CSS.
  - Validation: Zod 4.
  - Structure:
    ```
    /src
      /controllers
      /db
      /middlewares
      /models
      /routes
      /views
    index.ts
    ```

## Key Directories
- `/src`: (Projected) Contacts Manager application source.

## Development Commands
- **Contacts Manager**:
  - `pnpm install`
  - `node index.ts`

## Code Conventions & Common Patterns
- **Caveman Mode**: AI interactions should prioritize the Caveman mode rules defined in `CAVEMAN_RULES.md`.

## Important Files
- `AGENTS.md`: Repository guidelines.
- `CAVEMAN_RULES.md`: Core definitions for Caveman mode behavior.
- `README.md`: Project documentation for Contacts Manager.

## Runtime/Tooling Preferences
- **Runtime**: Node.js 26 (with native strip-types support).
- **Package Manager**: pnpm.

## Testing & QA
No automated test frameworks or QA procedures currently defined for the Contacts Manager or this repository.
