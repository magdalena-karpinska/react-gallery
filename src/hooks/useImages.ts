import { useQuery } from "@tanstack/react-query";
import { getImages } from "../services/getImages";

export const useImages = (searchWord: string, currentPage: number) => {
  const { data } = useQuery({
    queryFn: async () =>
      searchWord === "" ? null : await getImages(searchWord, currentPage),
    queryKey: ["images", searchWord, currentPage],
  });
  return data;
};
