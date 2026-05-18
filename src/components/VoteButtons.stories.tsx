import type { Meta, StoryObj } from "@storybook/react-vite";

import { expect, fn, within } from "storybook/test";
import VoteButtons from "./VoteButtons";

const meta = {
  tags: ["autodocs"],
  component: VoteButtons,
  title: "Molecules/VoteButtons",
  argTypes: {
    buttons: {
      description:
        "Lista de botones de voto, cada uno con su tipo de voto, emoji y cantidad.",
      control: { type: "object" },
    },
    disabled: {
      description: "Indica si los botones deben estar deshabilitados.",
      control: { type: "boolean" },
    },
    handleVote: {
      control: false,
      description:
        "Callback que se ejecuta al votar en cualquiera de los botones.",
      action: "onVote",
    },
  },
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof VoteButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleButton: Story = {
  args: {
    handleVote: fn(),
    disabled: false,
    buttons: [{ voteType: "votesFalse", emoji: "❌", count: 6 }],
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: /❌/i });

    await expect(button).not.toBeDisabled();

    await userEvent.click(button);

    await expect(args.handleVote).toHaveBeenCalled();
  },
};

export const Default: Story = {
  args: {
    handleVote: fn(),
    disabled: false,
    buttons: [
      {
        voteType: "votesInteresting",
        emoji: "👍",
        count: 2,
      },
      {
        voteType: "votesMindblowing",
        emoji: "😲",
        count: 1,
      },
      { voteType: "votesFalse", emoji: "❌", count: 6 },
    ],
  },
};

export const Disabled: Story = {
  args: {
    handleVote: fn(),
    disabled: true,
    buttons: [
      {
        voteType: "votesInteresting",
        emoji: "👍",
        count: 2,
      },
      {
        voteType: "votesMindblowing",
        emoji: "😲",
        count: 1,
      },
      { voteType: "votesFalse", emoji: "❌", count: 6 },
    ],
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);
    const buttons = canvas.getAllByRole("button");

    await expect(buttons).toHaveLength(3);

    for (const button of buttons) {
      await expect(button).toBeDisabled();
    }

    await userEvent.click(buttons[0]);

    await expect(args.handleVote).not.toHaveBeenCalled();
  },
};
