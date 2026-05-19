import { useState, type Dispatch, type SetStateAction } from "react";
import { updateFact } from "../../services/fact";
import type { Fact } from "../../types";
import type { VoteKey } from "../FactCard";

export default function useFactVoting({
  fact,
  setFacts,
}: {
  fact: Fact;
  setFacts: Dispatch<SetStateAction<Fact[]>>;
}) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleVote(columnName: VoteKey) {
    setIsUpdating(true);
    const { data: updatedFact, error } = await updateFact(fact, columnName);
    setIsUpdating(false);

    if (!error && updatedFact?.length)
      setFacts((facts) =>
        facts.map((f) => (f.id === fact.id ? updatedFact[0] : f)),
      );
  }

  return { isUpdating, handleVote };
}
