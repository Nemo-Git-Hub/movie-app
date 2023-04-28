import { useNavigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
import Swiper from "../components/Swiper";
import PageLayout from "../components/layouts/PageLayout";
import CardMovie from "../components/swiperCards/CardMovie";
import useMovies from "../hooks/useMovies";
import { useState } from "react";

export default function Home() {
  const movies = useMovies();

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => navigate(`/search?query=${query}`);
  // const handleSearch = () => redirect(`/search?query=${query}`);
  // const handleSearch = () => redirect(`/search`);

  if (!movies) return <Spinner />;

  return (
    <PageLayout>
      <div className="container px-auto bg-gray-200 text-gray-900 py-7">
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
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-gray-400 my-5 py-2 px-5 rounded-full"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center py-7">
        <div className="container">
          <Swiper list={movies} renderSlide={CardMovie} />
        </div>
      </div>
    </PageLayout>
  );
}
