import { useEffect, useState } from "react";
import fetchSearch from "../api/requests/fetchSearch";
import PageLayout from "../components/layouts/PageLayout";
import Search from "../components/Search";

export default function SearchPage({ query }) {
  const [movies, setMovies] = useState({});
  console.log("querySearchPage = ", query);

  useEffect(() => {
    (async () => {
      const result = await fetchSearch(query);
      const movies = await result.json();
      // setMovies(movies.results);
      setMovies(movies);
    })();
  }, []);
  console.log(movies);

  return (
    <PageLayout>
      <input
        type="text"
        placeholder="Type here"
        className="input input-ghost w-full max-w-xs"
      />

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="pagination btn-group">
        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn btn-disabled">...</button>
        <button className="btn">99</button>
        <button className="btn">100</button>
        <button
          className="btn next_page"
          rel="next"
          href="/search/movie?page=2&amp;query=marry"
        >
          Next →
        </button>
      </div>
    </PageLayout>
  );
}
