import { useState, type Dispatch, type SetStateAction } from "react";
import supabase from "../supabase";
import type { Category, Fact } from "../types";
import Link from "./Link";
import Tag from "./Tag";
import VoteButtons, { type VoteButtonsType } from "./VoteButtons";

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
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

  async function handleVote(columnName: VoteKey) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await supabase
      .from("facts")
      .update({ [columnName]: fact[columnName] + 1 })
      .eq("id", fact.id)
      .select();
    setIsUpdating(false);
    if (!error && updatedFact?.length)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f)),
      );
  }

  const voteButtons: VoteButtonsType = [
    {
      voteType: "votesInteresting",
      emoji: "👍",
      count: fact.votesInteresting,
    },
    {
      voteType: "votesMindblowing",
      emoji: "😲",
      count: fact.votesMindblowing,
    },
    { voteType: "votesFalse", emoji: "❌", count: fact.votesFalse },
  ];

  return (
    <li className="fact">
      <p>
        {isDisputed && <span className="disputed">[⛔POCO CONFIABLE]</span>}
        {fact.text}
        <Link url={fact.source}>(Blog)</Link>
      </p>

      <Tag label={category.label} color={category.color} />

      <VoteButtons
        onVote={handleVote}
        disabled={isUpdating}
        buttons={voteButtons}
      />
    </li>
  );
}
export default FactCard;
