const apiKey = import.meta.env.VITE_API_KEY;

export const getImages = async (searchWord: string) => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=${searchWord}&client_id=${apiKey}`
    );
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
