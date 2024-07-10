import { useState } from "react";
import "./form.scss";

export const Form = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
  };
  return (
    <form action="submit" className="inputForm">
      <input
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
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
