import { DateTime } from "luxon";
import { Link } from "react-router-dom";

const CardMovie = (movie) => {
  const releaseDate = DateTime.fromISO(movie.release_date).toFormat(
    "dd LLL yyyy"
  );
  return (
    <>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            className="imageSlide rounded-xl max-h-56 min-w-[150px]"
          />
        </Link>

        <div className="titleSlide text-base font-bold pt-6 px-2">
          <Link to={`/movie/${movie.id}`} title={movie.title}>
            {movie.title}
          </Link>
        </div>
        <div className="subtitleSlide text-base px-2">{releaseDate}</div>
      </div>
    </>
  );
};

export default CardMovie;
