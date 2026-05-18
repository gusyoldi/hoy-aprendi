# AGENTS.md - Guide for LLMs

This document provides essential information for an LLM (AI assistant) to work efficiently on the **hoy-aprendi** project.

## 📋 Project Summary

**hoy-aprendi** is a personal learning web application that allows you to:

- Record and organize concepts/facts learned during study
- Classify content by categories
- Vote or interact with published facts
- Store data in Supabase (cloud database)

### Purpose

A practical tool to keep track of learning and practice React, TypeScript, Vite, and Supabase integration.

---

## 🛠 Technology Stack

| Category            | Technology                      |
| ------------------- | ------------------------------- |
| **Framework**       | React 19                        |
| **Language**        | TypeScript 6.0                  |
| **Build Tool**      | Vite 8.0                        |
| **Styling**         | Tailwind CSS 4.3                |
| **Backend**         | Supabase (PostgreSQL + Auth)    |
| **Documentation**   | Storybook 10.4                  |
| **Testing**         | Vitest 4.1 + Playwright         |
| **Linting**         | ESLint 10.3 + TypeScript ESLint |
| **Package Manager** | pnpm                            |

---

## 📁 Directory Structure

```
hoy-aprendi/
├── src/
│   ├── App.tsx                    # Main component
│   ├── main.tsx                   # Entry point
│   ├── supabase.ts               # Supabase configuration
│   ├── types.ts                  # Global TypeScript types
│   ├── components/               # Reusable React components
│   │   ├── *.tsx                # Main components
│   │   ├── *.stories.tsx        # Storybook stories
│   │   └── hooks/               # Custom React hooks
│   ├── styles/
│   │   └── global.css           # Global styles with Tailwind
│   └── assets/                  # Images and resources
├── .storybook/                  # Storybook configuration
├── public/                       # Static files
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies and scripts
├── README.md                   # General documentation
├── STYLES.md                   # CSS styling guide
└── AGENTS.md                   # This file

```

---

## 🚀 Setup and Commands

### Installation and Development

```bash
# Install dependencies
pnpm install

# Start development server (http://localhost:5173)
pnpm dev

# Build for production
pnpm build

# Preview the build
pnpm preview

# Run linting
pnpm lint

# Storybook for component documentation
pnpm storybook        # Dev server on port 6006
pnpm build-storybook  # Static build
```

---

## 📦 Main Components

### Business Components

| Component          | Purpose                          | Location                            |
| ------------------ | -------------------------------- | ----------------------------------- |
| **NewFactForm**    | Form to publish new concepts     | `src/components/NewFactForm.tsx`    |
| **FactsList**      | List of published concepts/facts | `src/components/FactsList.tsx`      |
| **CategoryFilter** | Category filter                  | `src/components/CategoryFilter.tsx` |
| **FactCard**       | Individual concept card          | `src/components/FactCard.tsx`       |
| **VoteButtons**    | Buttons to vote on concepts      | `src/components/VoteButtons.tsx`    |
| **Header**         | Application header               | `src/components/Header.tsx`         |

### UI Components

| Component  | Purpose               |
| ---------- | --------------------- |
| **Link**   | Custom link component |
| **Tag**    | Category label        |
| **Button** | Reusable button       |

### Custom Hooks

- **useFactVoting** — Manages fact voting logic

---

## 🎨 Styles and Themes

### Styling System

- **Framework**: Tailwind CSS 4.3 with Vite plugin
- **Main file**: `src/styles/global.css`
- **Approach**: Utility-first with custom CSS variables

### Design Tokens

See `STYLES.md` for:

- Typography variables (font-display: "Satoshi")
- Color palette (avocado-100 to avocado-600 in OKLCH)
- Easing functions (preconfigured cubic-bezier)
- Responsive breakpoints (includes custom 3xl: 120rem)

### Base Colors

- **Background**: `#292524` (dark gray)
- **Text**: `#fafaf9` (warm white)
- **Red accent**: `#ef4444` (for disputes/errors)

### Responsive Design

- **Desktop**: 2-column grid (250px sidebar + 1fr content)
- **Tablet** (≤900px): 1-column layout
- **Mobile** (≤600px): Additional padding and layout adjustments

---

## 🔐 Supabase Configuration

### File: `src/supabase.ts`

- Initializes the Supabase client
- Manages authentication (if implemented)
- Provides access to PostgreSQL database

### Validations

- **Source URLs**: Validated to be HTTP/HTTPS before saving
- **Data structure**: Concepts with text, source, and category

---

## 📝 TypeScript and Types

### Configuration

- **tsconfig.json**: Base configuration (references to app and node)
- **tsconfig.app.json**: Application-specific configuration
- **Strict Mode**: Enabled for type safety

### Global Types

See `src/types.ts` for shared type definitions.

---

## ✅ Linting and Code Quality

### ESLint Configuration

File: `eslint.config.js`

**Active presets:**

- `@eslint/js` — JavaScript rules
- `typescript-eslint` — TypeScript rules
- `react-hooks` — React hooks validation
- `react-refresh` — Vite Fast Refresh compatibility
- `eslint-plugin-storybook` — Storybook rules

**Ignored:** `dist/` folder

### Commands

```bash
pnpm lint              # Check linting
pnpm lint --fix       # Fix automatically
```

---

## 🧪 Testing and Storybook

### Storybook

**Stories location**: `src/components/*.stories.tsx`

**Installed addons:**

- `@storybook/addon-docs` — Documentation
- `@storybook/addon-a11y` — Accessibility
- `@storybook/addon-vitest` — Tests integration
- `@storybook/addon-mcp` — Model Context Protocol

**Configuration**: `.storybook/` (at root)

### Testing

- **Framework**: Vitest 4.1
- **Browser Testing**: Playwright (headless chromium)
- **Coverage**: V8 code coverage

**Test projects in vite.config.ts:**

- `storybook` — Storybook component tests

---

## 🔧 Advanced Configuration

### Vite Plugins

1. **@vitejs/plugin-react** — Fast Refresh and React Compiler
2. **@tailwindcss/vite** — Tailwind CSS integration
3. **@rolldown/plugin-babel** — Babel transpilation with React Compiler

### Environment Variables

To connect with Supabase, required in `.env.local`:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anonymous-key
```

---

## 📚 Quick Guides for LLMs

### When creating a new component

1. **Location**: `src/components/MyComponent.tsx`
2. **Structure**: React function with TypeScript
3. **Styles**: Use Tailwind CSS classes
4. **Story**: Create `MyComponent.stories.tsx` in the same directory
5. **Linting**: Ensure it passes `pnpm lint`

### When modifying styles

1. Consult `STYLES.md` for existing tokens
2. Prefer Tailwind utilities over pure CSS
3. Maintain consistency with `global.css` variables
4. Test on different breakpoints

### When adding dependencies

1. Use `pnpm add package-name`
2. Don't manually modify `pnpm-lock.yaml`
3. Ensure compatibility with React 19 and TypeScript 6.0
4. Document the reason in commits

### Before pushing/committing

1. Run `pnpm lint` (must pass without errors)
2. Run `pnpm build` to validate build
3. Review TypeScript types
4. Consider test cases in Storybook

---

## 🐛 Common Troubleshooting

### Error: "Unable to index VoteButtons.stories.tsx"

**Cause**: Invalid syntax in Storybook stories file  
**Solution**: Check TypeScript/TSX syntax in the stories file

### Error: "Tailwind CSS not loading"

**Cause**: Tailwind plugin not being executed  
**Solution**: Verify that `tailwindcss()` is in `vite.config.ts`

### Supabase not connecting

**Cause**: Environment variables not configured  
**Solution**: Check `.env.local` with correct credentials

---

## 📞 Contact and References

- **README.md** — General project information
- **STYLES.md** — Complete styling and CSS variables details
- **Official documentation**:
  - [React 19](https://react.dev)
  - [Vite](https://vitejs.dev)
  - [TypeScript](https://www.typescriptlang.org)
  - [Tailwind CSS](https://tailwindcss.com)
  - [Supabase](https://supabase.com/docs)
  - [Storybook](https://storybook.js.org)

---

**Last updated**: May 2026  
**Project version**: 0.0.0
