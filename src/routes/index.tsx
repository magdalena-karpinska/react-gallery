import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";
import { Form } from "../components/form/Form";
import { getImages } from "../services/getImages";
import { DisplayImages } from "../components/displayImages/DisplayImages";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

const Home = () => {
  const [searchWord, setSearchWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, refetch } = useQuery({
    queryFn: async () =>
      searchWord === "" ? null : await getImages(searchWord, currentPage),
    queryKey: ["images", searchWord, currentPage],
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    refetch();
  };

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    refetch();
  };

  return (
    <div>
      <Form
        handleSubmit={handleSubmit}
        setSearchWord={setSearchWord}
        searchWord={searchWord}
      />
      {data ? (
        <DisplayImages images={data} />
      ) : (
        <p>Make a search to get images</p>
      )}
      <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}

        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
};
