import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import fetchSearch from "../api/requests/fetchSearch";
import Spinner from "../components/Spinner";
import PageLayout from "../components/layouts/PageLayout";
import { DateTime } from "luxon";
import noPoster from "../assets/noPoster.jpg";

export default function SearchPage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultSearchQuery, setResultSearchQuery] = useState(null);

  const params = searchParams.get("query");
  console.log("params=", params);

  useEffect(() => {
    (async () => {
      const result = await fetchSearch(params);
      const resultSearchQuery = await result.json();
      setResultSearchQuery(resultSearchQuery);
    })();
  }, []);
  if (!resultSearchQuery) return <Spinner />;
  console.log("resultSearchQuery=", resultSearchQuery);
  const detailResultSearchQuery = resultSearchQuery.results;
  console.log("detailResultSearchQuery=>", detailResultSearchQuery);

  return (
    <PageLayout>
      <div className="flex gap-5 mb-5">
        <div className="SearchResultTotal bg-base-100 shadow-xl rounded-lg">
          <div className="bg-blue-400 rounded-t-lg">
            <p className="text-xl font-bold text-white p-5 max-h-min">
              Search Results
            </p>
          </div>
          <div className="py-2">
            <ul>
              <li className="flex py-3 justify-between">
                <h2 className="card-title px-5">Movies</h2>
                <div className=" rounded-lg bg-gray-400 mr-5 px-3">
                  {resultSearchQuery.total_results}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-col">
          {detailResultSearchQuery.map((movie) => {
            const urlPoster = !movie.poster_path
              ? noPoster
              : `https://www.themoviedb.org/t/p/w94_and_h141_bestv2${movie.poster_path}`;

            const releaseDate = movie.release_date
              ? DateTime.fromISO(movie.release_date).toFormat("dd LLL yyyy")
              : "";
            return (
              <>
                <div className="card card-side bg-base-100 shadow-xl max-h-36 mb-5">
                  <Link to={`/movie/${movie.id}`}>
                    <img
                      className="rounded-l-lg min-w-full w-full h-full"
                      src={urlPoster}
                      alt="Poster"
                    />
                  </Link>
                  <div className="card-body py-4 gap-0">
                    <Link to={`/movie/${movie.id}`}>
                      <h2 className="card-title">{movie.title}</h2>
                    </Link>
                    <div className="text-gray-500">{releaseDate}</div>
                    <p> {movie.overview.slice(0, 256)}... </p>
                  </div>
                </div>
              </>
            );
          })}
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
