import { useEffect, useState } from "react";
import fetchMovies from "../api/requests/fetchMovies";
import Swiper from "../components/Swiper";
import useMovies from "../hooks/useMovies";

function List() {
  const movies = useMovies();

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
