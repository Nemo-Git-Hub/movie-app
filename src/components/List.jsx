import { useEffect, useState } from "react";
import fetchMovies from "../api/requests/fetchMovies";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await fetchMovies();
      const movieList = await result.json();
      setList(movieList.results);
    })();
  }, []);

  console.log(list);

  return <div className="bg-gray-900 text-gray-200"></div>;
}

export default List;
