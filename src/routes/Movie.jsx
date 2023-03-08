import { useLocation } from "react-router-dom";
import useMovie from "../hooks/useMovie";

export default function Movie() {
  const movie = useMovie();
  console.log(movie);
  const location = useLocation();
  console.log(location);

  return (
    <>
      <h3>this Movie</h3>
      <p>Pathname: {location.pathname}</p>
    </>
  );
}
