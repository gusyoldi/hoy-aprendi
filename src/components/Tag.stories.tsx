import type { Meta, StoryObj } from "@storybook/react-vite";

import Tag from "./Tag";

const meta = {
  tags: ["autodocs"],
  component: Tag,
  title: "Atoms/Tag",
  argTypes: {
    label: {
      description: "Texto que muestra la etiqueta.",
      control: { type: "text" },
    },
    color: {
      description: "Color de fondo de la etiqueta.",
      control: { type: "color" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "JavaScript",
    color: "#eab308",
  },
};

export const LongLabel: Story = {
  args: {
    label:
      "Este es un texto muy largo para probar el comportamiento del tag en líneas largas",
    color: "#8b5cf6",
  },
};

export const CustomColor: Story = {
  args: {
    label: "TypeScript",
    color: "#14b8a6",
  },
};

export const EmptyLabel: Story = {
  args: {
    label: "",
    color: "#cccccc",
  },
};
