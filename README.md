# Contacts Manager

Gestor de contactos personal para usuarios autenticados.

## Stack
- Node.js 26 (native strip-types)
- pnpm
- TypeScript
- Express 5
- Handlebars
- Tailwind CSS
- SQLite (native node:sqlite)
- Zod 4

## Estructura
```text
/src
  /controllers
  /db
  /middlewares
  /models
  /routes
  /views
index.ts
```

## Modelos
- **User**: Gestión usuarios, autenticación, sesiones.
- **Contact**: Gestión contactos vinculados a usuarios.

## Levantamiento
```bash
pnpm install
node index.ts
```
