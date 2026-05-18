import { useEffect, useState } from "react";
import logo from "./assets/images/logo.png";

import CategoryFilter from "./components/CategoryFilter";
import FactList from "./components/FactsList";
import Header from "./components/Header";
import NewFactForm from "./components/NewFactForm";
import "./styles/global.css";
import supabase from "./supabase";
import type { Category, Fact } from "./types";

export const CATEGORIES: Category[] = [
  { name: "javascript", color: "#eab308", label: "JavaScript" },
  { name: "react", color: "#3b82f6", label: "React" },
  { name: "node", color: "#16a34a", label: "Node" },
  { name: "nest", color: "#ef4444", label: "Nest" },
  { name: "storybook", color: "#db2777", label: "Storybook" },
  { name: "typescript", color: "#14b8a6", label: "TypeScript" },
  { name: "msw", color: "#f97316", label: "MSW" },
  { name: "css", color: "#8b5cf6", label: "CSS" },
];

export const LOGO_IMG = logo;

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState<Fact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] =
    useState<Category["name"]>("all");

  useEffect(() => {
    async function getFacts() {
      setIsLoading(true);
      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all")
        query = query.eq("category", currentCategory);

      const { data: facts, error } = await query
        .order("votesInteresting", { ascending: false })
        .limit(100);

      if (!error) setFacts(facts);
      else alert("Hubo un error al cargar los datos :(");
      setIsLoading(false);
    }
    getFacts();
  }, [currentCategory]);

  return (
    <>
      <Header logo={LOGO_IMG} showForm={showForm} onShowForm={setShowForm} />

      {showForm && (
        <NewFactForm
          categories={CATEGORIES}
          setFacts={setFacts}
          setShowForm={setShowForm}
        />
      )}

      <main className="main">
        <CategoryFilter
          categories={CATEGORIES}
          setCurrentCategory={setCurrentCategory}
        />

        {isLoading ? (
          <Loader />
        ) : (
          <FactList facts={facts} categories={CATEGORIES} setFacts={setFacts} />
        )}
      </main>
    </>
  );
}

function Loader() {
  return <p className="message">Cargando datos... ⚙⚙⚙</p>;
}

export default App;
