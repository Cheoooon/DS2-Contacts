# Repository Guidelines

## Project Overview
Contacts Manager is a centralized application for managing personal contacts, designed to support authenticated user sessions and a 1:N relationship between users and their contacts. The system is built for future scalability, including features like contact sharing and advanced filtering.

## Architecture & Data Flow
The project follows a standard MVC architecture, separating concerns into clearly defined layers:
- **Models**: Data access layer using native `node:sqlite`.
- **Controllers**: Request handling, Zod schema validation, and rendering logic.
- **Routes**: Route definition and middleware application.
- **Views**: Handlebars templates for rendering, styled with Tailwind CSS (CDN).
- **Middlewares**: Authentication and session management.

## Key Directories
- `/src/controllers`: Request handlers and business logic.
- `/src/db`: Database initialization and schema definitions.
- `/src/middlewares`: Auth and session-related checks.
- `/src/models`: Data access and SQL query definitions.
- `/src/routes`: URL routing configurations.
- `/src/views`: Handlebars templates for UI.

## Development Commands
- **Install dependencies**: `pnpm install`
- **Run project (dev)**: `pnpm run dev` (starts application with --watch)
- **Start project**: `pnpm start`

## Code Conventions & Common Patterns
- **Language**: TypeScript (Node.js 26 native strip-types support).
- **Validation**: Strict schema validation using Zod for all incoming requests.
- **Data Safety**: Always use parameterized queries for SQLite interactions to prevent SQL injection.
- **Auth**: Secure routes using session-based authentication; always filter queries by `userId` (1:N isolation).
- **Styling**: Tailwind CSS via CDN; apply gradient themes (`bg-gradient-to-br`) for UI consistency.
- **Commits**: Follow semantic commit conventions (e.g., `feat(scope): ...`, `fix(scope): ...`, `chore: ...`).

## Important Files
- `index.ts`: Application entry point; Express configuration.
- `package.json`: Project dependencies and scripts.
- `tsconfig.json`: Optimized for syntax stripping (`erasableSyntaxOnly: true`, `noEmit: true`).
- `AGENTS.md`: Repository guidelines.
- `README.md`: Project documentation.

## Runtime/Tooling Preferences
- **Runtime**: Node.js 26 (experimental strip-types).
- **Package Manager**: `pnpm`.
- **Styling**: Tailwind CSS (CDN).

## Testing & QA
No automated test framework currently defined. Manual testing via `curl` commands is used for verifying API/UI endpoints during development.
