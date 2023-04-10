import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import fetchMovie from "../api/requests/fetchMovie";

const useMovie = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      // const id = location.pathname.split("/").at(-1);
      const result = await fetchMovie(movieId);
      const movie = await result.json();
      setMovie(movie);
    })();
  }, []);

  return movie;
};

export default useMovie;
