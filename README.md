# Contact Agent

## Objetivo del software
Permite de manera centralizada el manejo de contactos. En un futuro, se podrá compartir entre usuarios, ya que estos pueden añadirse y así complementar los contactos propios, además de permitir una forma para ordenar y filtrar según necesidad.

## Justificación de tecnologías
+ **Framework**: Se utilizó Express debido a su simplicidad y capacidad para permitir un control eficaz de la arquitectura MVC.
+ **Lenguaje**: TypeScript, dictado por el ecosistema del framework seleccionado.
+ **Base de datos**: SQLite, elegida por su facilidad de configuración y rapidez en etapas iniciales.

## Proveedor y modelos
Se utilizaron modelos de Google principalmente, debido a que otros modelos requerían pasos adicionales (como configuración de pagos). Se fue alternando entre versiones Pro y Lite, además de realizar pruebas en repositorios previos para contrastar desempeño de modelos, plugins, skills y MCPs.

## Patrón de arquitectura
Se separaron las responsabilidades en capas (controllers, models, routes, db, middlewares) para facilitar la integración, modificación y escalabilidad del proyecto.

## Constitución del arnés agéntico
Se creó un README explicativo del proyecto y se inicializaron los plugins y skills, generando el archivo `AGENTS.md`. Se utilizaron prompts clave para maximizar el uso de herramientas (como Context7) para agilidad del agente.

## Tools/MCP/Plugins
Se utilizó el modo Caveman, Context7, herramientas nativas del sistema y skills básicas (forzando instrucciones mediante prompts).

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
