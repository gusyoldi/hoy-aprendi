import type { Meta, StoryObj } from "@storybook/react-vite";

import FactCard from "./FactCard";

const meta = {
  component: FactCard,
  tags: ["autodocs"],
  title: "Molecules/FactCard",
  parameters: {
    docs: {
      description: {
        component:
          "Una que muestra el texto, la fuente, el tag de categoría y los botones de voto.",
      },
    },
  },
  argTypes: {
    fact: {
      description:
        "Datos completos del hecho aprendido que se renderiza en la tarjeta.",
      control: { type: "object" },
      table: {
        type: { summary: "Fact" },
      },
    },
    category: {
      description:
        "Categoría asociada al hecho aprendido, usada por el tag visual.",
      control: { type: "object" },
      table: {
        type: { summary: "Category" },
      },
    },
    setFacts: {
      description: "Función para actualizar la colección de hechos aprendidos.",
      control: false,
      table: {
        type: { summary: "(facts: Fact[]) => void" },
      },
    },
  },
} satisfies Meta<typeof FactCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Representa el estado base de la tarjeta cuando el hecho aprendido no está disputado y los votos son neutrales.",
      },
    },
  },
  args: {
    fact: {
      id: 0,
      text: "Hoy aprendí algo muy interesante...",
      source: "http://www.example.com",
      category: "storybook",
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 0,
      createdAt: "5/15/2026",
    },
    category: {
      name: "name",
      color: "#ff4785",
      label: "Storybook",
    },
    setFacts: () => {},
  },
};

export const Disputed: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Muestra la tarjeta en estado disputado cuando hay más votos de falso que votos positivos.",
      },
    },
  },
  args: {
    fact: {
      id: 0,
      text: "Hoy aprendí algo muy interesante...",
      source: "http://www.example.com",
      category: "storybook",
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 1,
      createdAt: "5/15/2026",
    },
    category: {
      name: "name",
      color: "#ff4785",
      label: "Storybook",
    },
    setFacts: () => {},
  },
};
