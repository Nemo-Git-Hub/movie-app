import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchMovie from "../api/requests/fetchMovie";
// import { fetchMovie } from "../api/routes/Movie";

const useMovie = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const id = location.pathname.split("/").at(-1);
      const result = await fetchMovie(id);
      const movie = await result.json();
      setMovie(movie);
    })();
  }, []);

  return movie;
};

export default useMovie;
