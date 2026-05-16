# Hoy aprendí

Una aplicación web desarrollada con React, Vite y Supabase para registrar, organizar y repasar conceptos aprendidos durante el estudio diario. Pensada como una herramienta de aprendizaje personal, permite guardar apuntes rápidos de forma simple y visual para reforzar conocimientos y seguir el progreso de estudio.

## Qué hace

- Permite publicar nuevos conceptos con texto, fuente y categoría.
- Valida que la fuente sea una URL HTTP/HTTPS antes de guardar.
- Muestra los datos con filtro de categorías.
- Actualiza la lista en tiempo real tras publicar un nuevo concepto.

## Tecnologías principales

- React 19
- TypeScript
- Vite
- Supabase (base de datos y backend)
- ESLint
- Storybook para documentación de componentes

## Estructura del proyecto

- `src/App.tsx` — Componente principal y lógica de carga.
- `src/components/NewFactForm.tsx` — Formulario para enviar nuevos datos.
- `src/components/CategoryFilter.tsx` — Filtro de categorías.
- `src/components/FactsList.jsx` — Lista de conceptos publicados.
- `src/supabase.ts` — Configuración de Supabase.

## Comandos útiles

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Por qué es útil

Es una forma práctica de llevar un registro de las cosas que voy aprendiendo mientras estudio y tenerlas organizadas para repasarlas más adelante.
Además, me sirve para practicar React, manejo de estado y la integración con Supabase en un proyecto real.
