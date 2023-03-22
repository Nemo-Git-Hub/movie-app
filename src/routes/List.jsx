import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";

function List() {
  const movies = useMovies();

  if (!movies) return <Spinner />;

  return (
    <>
      <div className="flex justify-center py-7">
        <div className="container ">
          <Swiper list={movies} />
        </div>
      </div>
    </>
  );
}

export default List;
