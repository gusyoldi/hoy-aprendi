import type { Meta, StoryObj } from "@storybook/react-vite";

import type { Category, Fact } from "../types";
import FactList from "./FactsList";

const meta = {
  component: FactList,
  tags: ["autodocs"],
  title: "Organisms/FactsList",
  parameters: {
    docs: {
      description: {
        component:
          "Lista de hechos aprendidos que muestra tarjetas con texto, fuente, categoría y botones de voto.",
      },
    },
  },
  argTypes: {
    facts: {
      description: "Array de hechos para renderizar en la lista.",
      control: { type: "object" },
      table: {
        type: { summary: "Fact[]" },
      },
    },
    categories: {
      description:
        "Categorías disponibles para mapear cada hecho a su etiqueta visual.",
      control: { type: "object" },
      table: {
        type: { summary: "Category[]" },
      },
    },
    setFacts: {
      description:
        "Función para actualizar la lista de hechos después de una votación.",
      control: false,
      table: {
        type: { summary: "(facts: Fact[]) => void" },
      },
    },
  },
} satisfies Meta<typeof FactList>;

export default meta;

type Story = StoryObj<typeof meta>;

const categories: Category[] = [
  { name: "javascript", color: "#eab308", label: "JavaScript" },
  { name: "react", color: "#3b82f6", label: "React" },
  { name: "css", color: "#8b5cf6", label: "CSS" },
];

const facts: Fact[] = [
  {
    id: 1,
    text: "React permite construir interfaces de usuario declarativas.",
    source: "https://react.dev",
    category: "react",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdAt: "2026-05-16",
  },
  {
    id: 2,
    text: "TypeScript añade tipado estático a JavaScript.",
    source: "https://www.typescriptlang.org",
    category: "javascript",
    votesInteresting: 5,
    votesMindblowing: 2,
    votesFalse: 0,
    createdAt: "2026-05-16",
  },
];

export const Default: Story = {
  args: {
    facts,
    categories,
    setFacts: () => {},
  },
};

export const EmptyState: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Muestra el estado cuando no hay hechos para la categoría seleccionada.",
      },
    },
  },
  args: {
    facts: [],
    categories,
    setFacts: () => {},
  },
};
