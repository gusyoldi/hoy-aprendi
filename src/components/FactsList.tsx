import { type Dispatch, type SetStateAction } from "react";
import type { Category, Fact } from "../types";
import FactCard from "./FactCard";

interface FactListProps {
  facts: Fact[];
  categories: Category[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
}

function FactList({ facts, categories, setFacts }: FactListProps) {
  if (facts.length === 0)
    return (
      <p className="message">
        Aún no existen datos para esta categoría, Publicá el tuyo!✌
      </p>
    );

  const defaultCategory: Category = {
    name: "others",
    color: "#01000042",
    label: "Otros",
  };

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactCard
            key={fact.id}
            fact={fact}
            category={
              categories.find((cat) => cat.name === fact.category) ||
              defaultCategory
            }
            setFacts={setFacts}
          />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
