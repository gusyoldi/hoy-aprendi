import { type Dispatch, type SetStateAction } from "react";
import type { Category, Fact } from "../types";
import FactCard from "./FactCard";

interface FactListProps {
  facts: Fact[];
  categories: Category[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
}

const defaultCategory: Category = {
  name: "others",
  color: "#01000042",
  label: "Otros",
};

function FactList({ facts, categories, setFacts }: FactListProps) {
  const findCategory = (factCategory: Fact["category"]) =>
    categories.find((cat) => cat.name === factCategory) || defaultCategory;

  if (facts.length === 0)
    return (
      <p className="message">
        Aún no existen datos para esta categoría, Publicá el tuyo!✌
      </p>
    );

  return (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <FactCard
            key={fact.id}
            fact={fact}
            category={findCategory(fact.category)}
            setFacts={setFacts}
          />
        ))}
      </ul>
    </section>
  );
}

export default FactList;
