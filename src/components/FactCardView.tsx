import type { Category, Fact } from "../types";
import type { VoteKey } from "./FactCard";
import Link from "./Link";
import Tag from "./Tag";
import VoteButtons, { type VoteButtonsType } from "./VoteButtons";

interface FactCardViewProps {
  fact: Fact;
  category: Category;
  isUpdating: boolean;
  handleVote: (columnName: VoteKey) => void;
}

function FactCardView({
  fact,
  category,
  isUpdating,
  handleVote,
}: FactCardViewProps) {
  const isDisputed =
    fact.votesInteresting + fact.votesMindblowing < fact.votesFalse;

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
      <p className="">
        {isDisputed && <span className="disputed">[⛔POCO CONFIABLE]</span>}
        {fact.text}
        <Link url={fact.source}>(Blog)</Link>
      </p>

      <Tag label={category.label} color={category.color} />

      <VoteButtons
        handleVote={handleVote}
        disabled={isUpdating}
        buttons={voteButtons}
      />
    </li>
  );
}

export default FactCardView;
