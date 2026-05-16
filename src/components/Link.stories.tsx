import type { Meta, StoryObj } from "@storybook/react-vite";

import Link from "./Link";

const meta = {
  tags: ["autodocs"],
  component: Link,
  title: "Atoms/Link",
  argTypes: {
    url: {
      description: "URL de destino a la que se dirige el enlace.",
      control: { type: "text" },
    },
    children: {
      description: "Contenido visible del enlace.",
      control: { type: "text" },
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: "https://react.dev",
    children: "Ir a React",
  },
};
