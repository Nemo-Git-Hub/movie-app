import { useLocation } from "react-router-dom";
// import fetchMovie from "../api/requests/fetchMovie";
import useMovie from "../hooks/useMovie";

export default function Movie() {
  const location = useLocation();
  console.log(location);
  // fetchMovie();
  const movie = useMovie();
  console.log(movie);

  return (
    <>
      <h3>this Movie</h3>
      <p>Pathname: {location.pathname}</p>
    </>
  );
}
