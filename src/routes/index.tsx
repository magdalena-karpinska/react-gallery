import "../App.scss";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Form } from "../components/form/Form";
import { DisplayImages } from "../components/displayImages/DisplayImages";
import { useImages } from "../hooks/useImages";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const imageData = useImages(searchWord, currentPage);

  const handleSubmit = async (inputWord: string) => {
    setSearchWord(inputWord);
  };

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <div className="button__container">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}

        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
      {imageData ? (
        <DisplayImages images={imageData} />
      ) : (
        <p>Make a search to get images</p>
      )}
    </div>
  );
};
