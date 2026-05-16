import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import FactCardView from "./FactCardView";

const meta = {
  tags: ["autodocs"],
  component: FactCardView,
  title: "Molecules/FactCardView",
  argTypes: {
    fact: {
      description:
        "Objeto de hecho que contiene texto, fuente, categoría y votos.",
      control: { type: "object" },
    },
    category: {
      description: "Categoría del hecho usada para mostrar la etiqueta.",
      control: { type: "object" },
    },
    isUpdating: {
      description:
        "Si es true, deshabilita los botones de voto mientras se actualiza.",
      control: { type: "boolean" },
    },
    handleVote: {
      control: false,
      description:
        "Callback que se ejecuta al votar en cualquiera de los botones.",
      action: "handleVote",
    },
  },
} satisfies Meta<typeof FactCardView>;

export default meta;

type Story = StoryObj<typeof meta>;

const defaultFact = {
  id: 1,
  text: "React es una biblioteca para construir interfaces de usuario.",
  source: "https://reactjs.org",
  category: "react",
  votesInteresting: 12,
  votesMindblowing: 5,
  votesFalse: 2,
};

const defaultCategory = {
  name: "react",
  color: "#3b82f6",
  label: "React",
};

export const Default: Story = {
  args: {
    fact: defaultFact,
    category: defaultCategory,
    isUpdating: false,
    handleVote: fn(),
  },
};

export const Updating: Story = {
  args: {
    fact: defaultFact,
    category: defaultCategory,
    isUpdating: true,
    handleVote: fn(),
  },
};

export const Disputed: Story = {
  args: {
    fact: {
      ...defaultFact,
      votesInteresting: 1,
      votesMindblowing: 1,
      votesFalse: 5,
    },
    category: defaultCategory,
    isUpdating: false,
    handleVote: fn(),
  },
};
