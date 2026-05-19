import type { VoteKey } from "../components/FactCard";
import supabase from "../supabase";
import type { Fact } from "../types";

export async function updateFact(fact: Fact, columnName: VoteKey) {
  return await supabase
    .from("facts")
    .update({ [columnName]: fact[columnName] + 1 })
    .eq("id", fact.id)
    .select();
}

export async function createFact(
  text: string,
  source: string,
  category: string,
) {
  return await supabase
    .from("facts")
    .insert([{ text, source, category }])
    .select();
}
