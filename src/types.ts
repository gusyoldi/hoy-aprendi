type CategoryName =
  | "all"
  | "javascript"
  | "react"
  | "node"
  | "nest"
  | "storybook"
  | "typescript"
  | "msw"
  | "css";

export type Category = {
  name: CategoryName;
  color: string;
  label: string;
};

export type Fact = {
  id: number;
  text: string;
  source: string;
  category: string;
  votesInteresting: number;
  votesMindblowing: number;
  votesFalse: number;
  createdAt?: string;
};
