import { useEffect, useState } from "react";
import fetchMovies from "../api/requests/fetchMovies";

const useMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchMovies();
      const movies = await result.json();
      setMovies(movies.results);
    })();
  }, []);

  return movies;
};

export default useMovies;
