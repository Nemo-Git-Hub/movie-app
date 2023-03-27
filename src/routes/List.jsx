import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";

const renderMovie = (movie) => (
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
      <div className="subtitleSlide text-base px-2">releseDate</div>
    </div>
  </>
);

function List() {
  const movies = useMovies();
  console.log(movies);

  if (!movies) return <Spinner />;

  return (
    <>
      <div className="flex justify-center py-7">
        <div className="container">
          <Swiper list={movies} renderSlide={renderMovie} />
        </div>
      </div>
    </>
  );
}

export default List;
