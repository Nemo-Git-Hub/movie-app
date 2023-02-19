import { useState, useEffect } from "react";
import requestCreated from "../api/requestCreater";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      // move to a separate module (folder 'api')
      const result = await fetch(
        `https://api.themoviedb.org/4/list/1?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      );
      const movieList = await result.json();
      setList(movieList.results);
    })();
  }, []);

  // console.log(list);

  requestCreated();

  return <div className="bg-gray-900 text-gray-200"></div>;
}

export default List;
