import { useEffect, useState } from "react";
import fetchSearch from "../api/requests/fetchSearch";
import PageLayout from "../components/layouts/PageLayout";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "react-use";

export default function SearchPage() {
  const [movies, setMovies] = useState({});

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useDebounce(
    () => {
      console.log("useDebounce query", query);
      setDebouncedQuery(query);
    },
    2000, // 2 seconds
    [query] // Only re-call effect if val changes
  );

  useEffect(() => {
    (async () => {
      const result = await fetchSearch(debouncedQuery);
      const movies = await result.json();
      setMovies(movies);
    })();
  }, [debouncedQuery]);

  console.log({ movies, query, debouncedQuery });

  return (
    <PageLayout>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        value={query || ""}
        onChange={(e) => setSearchParams({ query: e.target.value })}
      />

      {/* TO: To be continues... */}
      {/* <div className="card w-96 bg-base-100 shadow-xl">
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
      </div> */}
    </PageLayout>
  );
}
