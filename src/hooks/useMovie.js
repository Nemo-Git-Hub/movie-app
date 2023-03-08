import { useEffect, useState } from "react";
import fetchMovie from "../api/requests/fetchMovie";
// import { fetchMovie } from "../api/routes/Movie";

const useMovie = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchMovie();
      const movies = await result.json();
      setMovie(movies.results);
    })();
  }, []);

  return movie;
};

export default useMovie;
