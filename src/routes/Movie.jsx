import { useLocation } from "react-router-dom";
// import fetchMovie from "../api/requests/fetchMovie";
import useMovie from "../hooks/useMovie";
import { BsBookmarkFill } from "react-icons/bs";

export default function Movie() {
  const movie = useMovie();
  console.log(movie);

  if (!movie) return "Loading...";

  const popularity = (movie.vote_average * 10).toFixed(0);

  return (
    <>
      <h3>{movie.title}</h3>

      {/* <button className="btn btn-circle">
        <BsBookmarkFill />
      </button>

      <div className="relative">
        <div
          className="radial-progress absolute top-0 left-0 bottom-0 right-0 text-cyan-800"
          style={{ "--value": 100 }}
        />
        <div
          className="radial-progress text-primary"
          style={{ "--value": popularity }}
        >
          {popularity}%
        </div>
      </div> */}
    </>
  );
}
