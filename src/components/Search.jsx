import { useState } from "react";
import { Link } from "react-router-dom";
import SearchPage from "../routes/SearchPage";

function Search() {
  const [query, setQuery] = useState("");
  console.log("query = ", query);
  // const handleKeyDown = (e) => {
  //   if (e.key === "Enter") {
  //     setQuery(query); //лишняя строка
  //   }
  // };

  <SearchPage query={query} />;

  return (
    <>
      <div className="flex justify-center bg-gray-200 text-gray-900 py-7">
        <div className="container ">
          <div className="title text-white">
            <h2>Welcome.</h2>
            <h3>
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className="search flex justify-between">
            <input
              type="text"
              placeholder="Search for a movie, tv show, person......"
              className="flex-grow my-5 mr-5 p-2 rounded-full"
              value={query}
              // onKeyDown={handleKeyDown}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <Link to={"/search"}>
              <button className="bg-gray-400 my-5 py-2 px-5 rounded-full">
                Search
              </button>
            </Link>
          </div>
          <div className="flex-wrap">change List</div>
        </div>
      </div>
    </>
  );
}

export default Search;
