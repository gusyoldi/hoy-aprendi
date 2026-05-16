import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { LOGO_IMG } from "../App";
import Header from "./Header";

const meta = {
  tags: ["autodocs"],
  component: Header,
  title: "Molecules/Header",
  argTypes: {
    logo: {
      description: "Imagen del logo que se mostrará en el encabezado.",
      control: {
        type: "file",
      },
    },
    showForm: {
      description: "Indica si el formulario está visible.",
      control: { type: "boolean" },
    },
    onShowForm: {
      control: false,
      description:
        "Callback que se ejecuta al alternar la visibilidad del formulario.",
      action: "onShowForm",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ClosedForm: Story = {
  args: {
    logo: LOGO_IMG,
    showForm: false,
    onShowForm: fn(),
  },
};

export const OpenedForm: Story = {
  args: {
    logo: LOGO_IMG,
    showForm: true,
    onShowForm: fn(),
  },
};
