import requestCreator from "../requestCreator";

const fetchCredits = (movieId) => {
  return requestCreator(`/3/movie/${movieId}/credits`, {
    params: { language: "en-US" },
  });
};

export default fetchCredits;
