import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { expect, fn, within } from "storybook/test";
import { CATEGORIES, LOGO_IMG } from "../App";
import type { Category, Fact } from "../types";
import CategoryFilter from "./CategoryFilter";
import FactList from "./FactsList";
import Header from "./Header";
import NewFactForm from "./NewFactForm";

const mockFacts: Fact[] = [
  {
    id: 1,
    text: "JavaScript was created in 10 days",
    source: "https://example.com",
    category: "javascript",
    votesInteresting: 5,
    votesMindblowing: 2,
    votesFalse: 0,
  },
  {
    id: 2,
    text: "React makes building UIs easier",
    source: "https://react.dev",
    category: "react",
    votesInteresting: 3,
    votesMindblowing: 1,
    votesFalse: 0,
  },
];

function FactsPage({
  categories,
  setCurrentCategory,
  isLoading,
  facts,
  setFacts,
}: {
  categories: Category[];
  setCurrentCategory: (c: Category["name"] | "all") => void;
  isLoading: boolean;
  facts: Fact[];
  setFacts: (f: Fact[]) => void;
}) {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header logo={LOGO_IMG} showForm={showForm} onShowForm={setShowForm} />

      {showForm && (
        <NewFactForm
          categories={CATEGORIES}
          setFacts={false}
          setShowForm={setShowForm}
        />
      )}

      <main className="main">
        <CategoryFilter
          categories={categories}
          setCurrentCategory={setCurrentCategory}
        />

        {isLoading ? (
          <p className="message">Cargando datos... ⚙⚙⚙</p>
        ) : (
          <FactList facts={facts} categories={categories} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

const meta = {
  tags: ["autodocs"],
  component: FactsPage,
  title: "Pages/FactsPage",
  argTypes: {
    categories: { control: { type: "object" } },
    setCurrentCategory: { control: false, action: "onSelectCategory" },
    isLoading: { control: { type: "boolean" } },
    facts: { control: { type: "object" } },
    setFacts: { control: false, action: "onSetFacts" },
  },
} satisfies Meta<typeof FactsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Loading: Story = {
  args: {
    categories: CATEGORIES,
    setCurrentCategory: fn(),
    isLoading: true,
    facts: [],
    setFacts: fn(),
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const buttons = canvas.getAllByRole("button");
    await expect(buttons).toHaveLength(10);

    await expect(canvas.getByText(/Cargando datos/i)).toBeInTheDocument();
  },
};

export const WithFacts: Story = {
  args: {
    categories: CATEGORIES,
    setCurrentCategory: fn(),
    isLoading: false,
    facts: mockFacts,
    setFacts: fn(),
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const listItems = canvas.getAllByRole("listitem");
    await expect(listItems.length).toBeGreaterThanOrEqual(1);
  },
};

export const EmptyFacts: Story = {
  args: {
    categories: CATEGORIES,
    setCurrentCategory: fn(),
    isLoading: false,
    facts: [],
    setFacts: fn(),
  },

  play: async ({ args, canvasElement, userEvent }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: "Node" });
    await userEvent.click(button);

    await expect(
      canvas.getByText(/Aún no existen datos para esta categoría/i),
    ).toBeInTheDocument();

    await expect(args.setCurrentCategory).toHaveBeenCalledWith("node");
  },
};
