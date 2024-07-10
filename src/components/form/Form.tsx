import "./form.scss";

interface FormProps {
  setSearchWord: (word: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  searchWord: string;
}

export const Form = ({
  handleSubmit,
  searchWord,
  setSearchWord,
}: FormProps) => {
  return (
    <form action="submit" className="inputForm" onSubmit={handleSubmit}>
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
