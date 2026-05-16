import { useState, type Dispatch, type SetStateAction } from "react";
import supabase from "../supabase";
import type { Category, Fact } from "../types";
import VoteButtons from "./VoteButtons";

interface FactProps {
  fact: Fact;
  categories: Category[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
}

export type VoteKey = keyof Pick<
  Fact,
  "votesInteresting" | "votesMindblowing" | "votesFalse"
>;

function FactCard({ fact, categories, setFacts }: FactProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;
  const categoryLabel = categories.find(
    (cat) => cat.name === fact.category,
  )?.label;

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

  const { votesInteresting, votesMindblowing, votesFalse } = fact;
  console.log(votesInteresting, votesMindblowing, votesFalse);

  return (
    <li className="fact">
      <p>
        {isDisputed ? (
          <span className="disputed">[⛔POCO CONFIABLE]</span>
        ) : null}
        {fact.text}
        <a
          className="source"
          href={fact.source}
          target="_blank"
          rel="noreferrer"
        >
          (Blog)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: categories.find((cat) => cat.name === fact.category)
            ?.color,
        }}
      >
        {categoryLabel}
      </span>
      <VoteButtons
        onVote={handleVote}
        disabled={isUpdating}
        buttons={[
          {
            voteType: "votesInteresting",
            emoji: "👍",
            count: votesInteresting,
          },
          {
            voteType: "votesMindblowing",
            emoji: "😲",
            count: votesMindblowing,
          },
          { voteType: "votesFalse", emoji: "❌", count: votesFalse },
        ]}
      />
    </li>
  );
}
export default FactCard;
