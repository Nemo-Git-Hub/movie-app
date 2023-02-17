import { useState, useEffect } from "react";

function List() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (() => {
      // move to a separate module (folder 'api')
      fetch(
        // `https://api.themoviedb.org/3/find/{external_id}?api_key=cd3490085bf457ce8f5543677eed29c7&language=en-US&external_source=imdb_id`,
        `https://api.themoviedb.org/4/list/1?api_key=${
          import.meta.env.VITE_API_KEY
        }&page=1`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
          },
        }
      )
        // rewrite with async/await
        .then((res) => res.json())
        .then((result) => {
          setList(result);
        });
    })();
  }, []);

  console.log(list);

  return <div className="bg-gray-900 text-gray-200"></div>;
}

export default List;
