import { useState, useEffect } from "react";

function List() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
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
      );
      // .then((res) => res.json())
      // .then((result) => {
      //   setData(result);
      // });
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="bg-gray-900 text-gray-200">
      <h1>{data}</h1>
    </div>
  );
}

export default List;
