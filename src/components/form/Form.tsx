import "./form.scss";

interface FormProps {
  setInputWord: (word: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  inputWord: string;
}

export const Form = ({ handleSubmit, inputWord, setInputWord }: FormProps) => {
  return (
    <form action="submit" className="inputForm" onSubmit={handleSubmit}>
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
