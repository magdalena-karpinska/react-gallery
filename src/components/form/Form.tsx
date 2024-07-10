import "./form.scss";

export const Form = () => {
  return (
    <form action="submit" className="inputForm">
      <input placeholder="Type something" type="text" className="searchInput" />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
};
