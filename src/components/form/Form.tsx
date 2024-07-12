import "./form.scss";
import { useState } from "react";

interface FormProps {
  handleSubmit: (s: string) => void;
}

export const Form = ({ handleSubmit }: FormProps) => {
  const [inputWord, setInputWord] = useState("");

  return (
    <form
      action="submit"
      className="inputForm"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(inputWord);
      }}
    >
      <input
        value={inputWord}
        onChange={(e) => setInputWord(e.target.value)}
        placeholder="Type something"
        type="text"
        className="searchInput"
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};
