import { useState, type Dispatch, type SetStateAction } from "react";
import { createFact } from "../services/fact";
import type { Category, Fact } from "../types";

type NewFactFormProps = {
  categories: Category[];
  setFacts: Dispatch<SetStateAction<Fact[]>>;
  setShowForm: Dispatch<SetStateAction<boolean>>;
};

function isValidHttpUrl(string: string): boolean {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ categories, setFacts, setShowForm }: NewFactFormProps) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = 200 - text.length;

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValidText = text.length <= 200;

    if (isValidText && isValidHttpUrl(source) && category) {
      setIsUploading(true);

      const { data: newFact, error } = await createFact(text, source, category);

      if (!error && newFact?.length) {
        setFacts((facts) => [newFact[0], ...facts]);
      } else if (error) {
        console.error(error.message);
      }

      setIsUploading(false);
      setText("");
      setSource("");
      setCategory("");
      setShowForm(false);
    } else {
      alert("El link debe tener este formato: http://ejemplo.com");
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Compartí un dato con el mundo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={isUploading}
      />
      <span>{textLength}</span>
      <input
        type="text"
        placeholder="Link de la fuente..."
        onChange={(e) => setSource(e.target.value)}
        value={source}
        disabled={isUploading}
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        value={category}
        disabled={isUploading}
      >
        <option value="">Categorias:</option>
        {categories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Publicar
      </button>
    </form>
  );
}

export default NewFactForm;
