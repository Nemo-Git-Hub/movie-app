import requestCreator from "../requestCreator";

const fetchMovie = (movieId) => {
  return requestCreator(`/3/movie/${movieId}`, {
    params: { language: "en-US" },
  });
};

export default fetchMovie;
