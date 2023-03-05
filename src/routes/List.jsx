import { useEffect, useState } from "react";
import fetchMovies from "../api/requests/fetchMovies";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";

function List() {
  const movies = useMovies();
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/497698?api_key=");
  }, []);
  console.log(movies);
  // images https://developers.themoviedb.org/3/getting-started/images
  return (
    <>
      <div className="flex justify-center py-7">
        <div className="container ">
          <div className="">
            <Swiper list={movies} />
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
