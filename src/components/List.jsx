import { useEffect, useState } from "react";
import fetchMovies from "../api/requests/fetchMovies";
import Swiper from "./Swiper";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchMovies();
      const movieList = await result.json();
      setList(movieList.results);
    })();
  }, []);

  // console.log(list);
  // images https://developers.themoviedb.org/3/getting-started/images
  return (
    <>
      <div className="flex justify-center py-7">
        <div className="container ">
          <div className="">
            <Swiper list={list} />
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
