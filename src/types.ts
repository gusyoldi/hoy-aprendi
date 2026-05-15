export type Category = {
  name: string;
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
