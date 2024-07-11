import { createLazyFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Form } from "../components/form/Form";
import { getImages } from "../services/getImages";
import { Image } from "../models/Image";
import { DisplayImages } from "../components/displayImages/DisplayImages";

export const Route = createLazyFileRoute("/search")({
  component: Search,
});

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [imageData, setImageData] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = await getImages(searchWord, 1);
    setImageData(data);
    setCurrentPage(1);
  };

  const handlePageChange = async (pageNumber: number) => {
    const data = await getImages(searchWord, pageNumber);
    setImageData(data);
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1>Search Images</h1>
      <Form
        handleSubmit={(e) => handleSubmit(e)}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
      <DisplayImages images={imageData} />
      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </>
  );
}
