# STYLES.md

## Objetivo

Este documento describe los estilos globales actuales de `src/styles/global.css` y su correspondencia con las clases usadas en los componentes React. Sirve de referencia para migrar estos estilos a Tailwind.

## Configuración actual

- `src/styles/global.css` importa Tailwind con `@import "tailwindcss";`.
- Contiene una sección `@theme` con variables personalizadas (tipografía, colores, curvas de animación).
- Define reglas globales y estilos de componentes específicos.

## Variables y tokens

Dentro de `@theme` se declaran variables CSS que se usan como tokens de diseño:

- `--font-display: "Satoshi", "sans-serif";`
- `--breakpoint-3xl: 120rem;`
- `--color-avocado-100..600`: paleta de verde/avocado en OKLCH.
- `--ease-fluid: cubic-bezier(0.3, 0, 0, 1);`
- `--ease-snappy: cubic-bezier(0.2, 0, 0, 1);`

> Estas variables no se utilizan en `global.css` directamente, pero pueden integrarse en la configuración de Tailwind como tokens de color, fuentes o transiciones.

## Estilos base

- `*`:
  - `margin: 0`
  - `padding: 0`
  - `box-sizing: border-box`
- `body`:
  - `background-color: #292524`
  - `color: #fafaf9`
  - `font-family: "Coiny", sans-serif`
  - `padding: 48px 64px 0`
- `#root`:
  - `max-width: 1500px`
  - `margin: 0 auto`

## Tipografía y textos globales

- `.message`:
  - tipografía grande: `font-size: 30px`
  - texto uppercase
  - `text-align: center`
  - `margin-top: 24px`
  - `letter-spacing: 5px`
- `.disputed`:
  - color rojo `#ef4444`
  - `font-size: 600` (probablemente se busca un peso, no tamaño)
  - `margin-right: 10px`

## Layout principal

- `.header`:
  - `margin-bottom: 40px`
  - `display: flex`
  - `align-items: center`
  - `justify-content: space-between`
- `.main`:
  - `display: grid`
  - `grid-template-columns: 250px 1fr`
  - `gap: 48px`
  - `height: calc(100vh - 48px - 68px - 40px)`
- `section`:
  - `overflow: scroll`

### Respuesta móvil

- `@media (max-width: 900px)`:
  - `.main` pasa a `grid-template-columns: 1fr`
  - `.main` altura `auto`
- `@media (max-width: 600px)`:
  - `.header` usa `flex-direction: column` y `gap: 16px`
  - `.fact-form` usa `padding: 16px`
  - `.fact` usa `padding: 12px 16px`

## Clases de componentes

### `.logo`

- `display: flex`
- `align-items: center`
- `gap: 16px`
- `.logo img` fija tamaño: `width: 68px`, `height: 68px`

### `h1`

- `font-size: 42px`
- `text-transform: uppercase`
- `text-align: center`
- `line-height: 1`
- `margin-top: 6px`

### `.category`

- `margin-bottom: 16px`

### `.fact`

- `font-family: "Sono", sans-serif`
- `font-size: 20px`
- `line-height: 1.4`
- `background-color: #44403c`
- `margin-bottom: 16px`
- `padding: 16px 24px`
- `letter-spacing: -1px`
- `border-radius: 16px`
- `display: flex`
- `align-items: center`
- `gap: 24px`

#### `.fact` responsivo

- `@media (max-width: 1200px)`:
  - `flex-direction: column`
  - `align-items: flex-end`
  - `gap: 12px`

### `.tag`

- `text-transform: uppercase`
- `font-size: 14px`
- `font-family: "Coiny", sans-serif`
- `padding: 3px 10px`
- `border-radius: 100px`

### `.vote-buttons`

- `margin-left: auto`
- `flex-shrink: 0`
- `display: flex`
- `gap: 8px`

### `.vote-buttons button`

- `border: none`
- `background-color: #78716c`
- `font-size: 18px`
- `padding: 6px 12px`
- `border-radius: 100px`
- `color: inherit`
- `font-family: inherit`
- `font-weight: 600`
- `cursor: pointer`
- `transition: 0.3s`
- `:hover` → `background-color: #292524`
- `:disabled` → `background-color: #44403c`

### `.source` (enlaces)

- `color: #a8a29e`
- `text-decoration: none`
- `margin-left: 12px`
- `transition: 0.3s`
- `:hover, :active` → `color: #3b82f6`

### `.btn`

- `border: none`
- `font-family: "Coiny", sans-serif`
- `line-height: 1`
- `text-transform: uppercase`
- `font-size: 17px`
- `padding: 16px 0 13px`
- `background-image: linear-gradient(135deg, #3b82f6, #ef4444, #16a34a, #eab308)`
- `color: inherit`
- `border-radius: 100px`
- `cursor: pointer`
- `transition: 0.3s`
- `:hover` → `transform: scale(110%) rotate(-2deg)`

#### Variaciones de `.btn`

- `.btn-large`:
  - `font-size: 20px`
  - `padding: 20px 32px 17px`
- `.btn-all-categories`:
  - `margin-bottom: 16px`
  - `width: 100%`
- `.btn-category`:
  - `width: 100%`
  - `background-image: none`

## Formulario

- `.fact-form`:
  - `background-color: #44403c`
  - `margin-bottom: 40px`
  - `padding: 16px 32px`
  - `display: flex`
  - `align-items: center`
  - `gap: 16px`
  - `border-radius: 16px`
- `.fact-form input, .fact-form select`:
  - `width: 220px`
  - `background-color: #78716c`
  - `border: none`
  - `border-radius: 100px`
  - `padding: 16px`
  - `font-size: 18px`
  - `color: inherit`
  - `font-family: inherit`
- `.fact-form input::placeholder`:
  - `color: #a8a29e`
- `.fact-form input:first-child`:
  - `flex-grow: 1`
- `.fact-form span`:
  - `font-weight: 600`
  - `font-size: 18px`
  - `margin-right: 18px`

### `.fact-form` responsivo

- `@media (max-width: 1050px)`:
  - `.fact-form` → `flex-direction: column`, `align-items: stretch`
  - `.fact-form input, .fact-form select` → `width: auto`, `margin-bottom: 12px`

## Componentes React clave y clases usadas

- `App.tsx`:
  - `main.main`
  - `p.message`
- `Header.tsx`:
  - `header.header`
  - `div.logo`
  - `button.btn btn-large btn-open`
- `CategoryFilter.tsx`:
  - `button.btn btn-all-categories`
  - `li.category`
  - `button.btn btn-category`
- `NewFactForm.tsx`:
  - `form.fact-form`
  - inputs y selects internos
  - `button.btn btn-large`
- `FactCardView.tsx`:
  - `li.fact`
  - `span.disputed`
- `VoteButtons.tsx`:
  - `div.vote-buttons`
  - botones internos con clase `disabled:cursor-crosshair`
- `Link.tsx`:
  - `a.source`
- `Tag.tsx`:
  - `span.tag`

## Notas para la migración a Tailwind

- Los estilos base de `body`, `*` y `#root` pueden convertirse a utilidades globales en `tailwind.css` o en `@layer base`.
- Clases de botón (`.btn`, `.btn-large`, `.btn-category`) se pueden reemplazar por utilidades de Tailwind combinadas con `@apply` o clases de componentes.
- La tarjeta `.fact` requiere un bloque `flex` con fallback responsivo y `border-radius` fijo.
- Los inputs y select del formulario tienen un estilo consistente que puede mapearse con utilidades como `rounded-full`, `bg-slate-600`, `px-4`, `py-4`, `w-full` y `outline-none`.
- Los colores de acento (`#3b82f6`, `#ef4444`, `#16a34a`, `#eab308`) ya coinciden con la paleta de Tailwind estándar.

## Prioridad de migración

1. Estilos base globales
2. Layout de `.main` y `.header`
3. Tarjetas de hecho `.fact` y `.vote-buttons`
4. Botones y formulario
5. Comportamiento responsivo

---

Este archivo se puede usar como referencia directa mientras se transforman `src/styles/global.css` y las clases existentes hacia utilidades Tailwind.
