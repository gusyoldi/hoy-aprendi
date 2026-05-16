import { type Dispatch, type SetStateAction } from "react";
import type { Category, Fact } from "../types";
import FactCardView from "./FactCardView";
import useFactVoting from "./hooks/useFactVoting";

interface FactCardProps {
  fact: Fact;
  category: Category;
  setFacts: Dispatch<SetStateAction<Fact[]>>;
}

export type VoteKey = keyof Pick<
  Fact,
  "votesInteresting" | "votesMindblowing" | "votesFalse"
>;

function FactCard({ fact, category, setFacts }: FactCardProps) {
  const { isUpdating, handleVote } = useFactVoting({ fact, setFacts });

  return (
    <FactCardView
      fact={fact}
      category={category}
      isUpdating={isUpdating}
      handleVote={handleVote}
    />
  );
}
export default FactCard;
