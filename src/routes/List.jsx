import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";
import { DateTime } from "luxon";

function List() {
  const movies = useMovies();
  console.log(movies);
  const releasDate = movies.map((movie) =>
    DateTime.fromISO(movie.release_date).toFormat("dd LLL yyyy")
  );

  if (!movies) return <Spinner />;

  return (
    <>
      <div className="flex justify-center py-7">
        <div className="container ">
          <Swiper list={movies} releasDate={releasDate} />
        </div>
      </div>
    </>
  );
}

export default List;
