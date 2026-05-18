import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect, fn, within } from "storybook/test";
import { CATEGORIES } from "../App";
import CategoryFilter from "./CategoryFilter";

const meta = {
  tags: ["autodocs"],
  component: CategoryFilter,
  title: "Organisms/CategoryFilter",
  argTypes: {
    categories: {
      description: "Array de categorías disponibles",
      control: { type: "object" },
    },
    setCurrentCategory: {
      control: false,
      description: "Callback que se ejecuta al seleccionar una categoría",
      action: "onSelectCategory",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof CategoryFilter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setCurrentCategory: fn(),
    categories: CATEGORIES,
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons).toHaveLength(9);

    await expect(buttons[0]).toHaveTextContent("Todos");

    await userEvent.click(buttons[0]);
    await expect(args.setCurrentCategory).toHaveBeenCalledWith("all");

    await userEvent.click(buttons[1]);
    await expect(args.setCurrentCategory).toHaveBeenCalledWith("javascript");
  },
};

export const Empty: Story = {
  args: {
    setCurrentCategory: fn(),
    categories: [],
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons).toHaveLength(1);
    await expect(buttons[0]).toHaveTextContent("Todos");

    await userEvent.click(buttons[0]);
    await expect(args.setCurrentCategory).toHaveBeenCalledWith("all");
  },
};

export const SingleCategory: Story = {
  args: {
    setCurrentCategory: fn(),
    categories: CATEGORIES,
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons).toHaveLength(9);

    await userEvent.click(buttons[1]);
    await expect(args.setCurrentCategory).toHaveBeenCalledWith("javascript");
  },
};
