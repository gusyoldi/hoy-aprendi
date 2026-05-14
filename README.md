# Hoy aprendí

Una aplicación web creada con React, Vite y Supabase para compartir datos curiosos de forma fácil y visual.

## Qué hace

- Permite publicar nuevos hechos con texto, fuente y categoría.
- Valida que la fuente sea una URL HTTP/HTTPS antes de guardar.
- Muestra los datos con filtro de categorías.
- Actualiza la lista en tiempo real tras publicar un nuevo hecho.

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Supabase (base de datos y backend)
- ESLint

## Estructura del proyecto

- `src/App.tsx` — Componente principal y lógica de carga.
- `src/components/NewFactForm.tsx` — Formulario para enviar nuevos datos.
- `src/components/CategoryFilter.tsx` — Filtro de categorías.
- `src/components/FactsList.jsx` — Lista de hechos publicados.
- `src/supabase.ts` — Configuración de Supabase.

## Comandos útiles

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Por qué es útil

Es un proyecto ideal para aprender a integrar React con Supabase y practicar formularios, validación y estados en una aplicación moderna.
