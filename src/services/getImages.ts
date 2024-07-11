const apiKey = import.meta.env.VITE_API_KEY;

export const getImages = async (searchWord: string, page: number = 1) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=${apiKey}&page=${page}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getImageById = async (id: string) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/${id}?client_id=${apiKey}`
    );
    const data = await res.json();
    console.log("1 image id", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//https://api.unsplash.com/photos/nDV6ahWLvEg?client_id=YOUR_ACCESS_KEY
