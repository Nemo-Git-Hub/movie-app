import useMovie from "../hooks/useMovie";
import { BsBookmarkFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { ImList } from "react-icons/im";

export default function Movie() {
  const movie = useMovie();

  if (!movie)
    return (
      <div
        aria-label="Loading... Please wait..."
        role="status"
        class="flex items-center space-x-2"
      >
        <svg class="h-6 w-6 animate-spin stroke-gray-500" viewBox="0 0 256 256">
          <line
            x1="128"
            y1="32"
            x2="128"
            y2="64"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="60.1"
            x2="173.3"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="224"
            y1="128"
            x2="192"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="195.9"
            y1="195.9"
            x2="173.3"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="128"
            y1="224"
            x2="128"
            y2="192"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="195.9"
            x2="82.7"
            y2="173.3"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="32"
            y1="128"
            x2="64"
            y2="128"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
          <line
            x1="60.1"
            y1="60.1"
            x2="82.7"
            y2="82.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="24"
          ></line>
        </svg>
        <span class="text-xl font-medium text-gray-500">
          Loading... Please wait...
        </span>
      </div>
    );

  const popularity = (movie.vote_average * 10).toFixed(0);

  const yearRelease = movie.release_date.slice(0, 4);
  const movieLengthHourse = (movie.runtime / 60).toFixed(0);
  const movieLengthMinuts = movie.runtime % 60;
  const revenueColor =
    movie.budget < movie.revenue ? "text-yellow-500" : "text-red-500";

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function getGenresMovies() {
    const genresMovies = movie.genres;
    let genres = genresMovies.map((movie) => movie.name);
    return genres.join(", ");
  }

  return (
    <>
      <div
        className="flex py-8 px-10 text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),
          url(
            ${"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            className="imageSlide rounded-xl "
            // style={{ width: "300px" }}
          />
        </div>
        <div className=" text-base pl-10">
          <h2 className="text-4xl font-bold  ">
            {movie.title} <span className="font-normal">({yearRelease})</span>{" "}
          </h2>
          <div className="facts flex mt-2.5">
            <span className="min-w-max">{movie.release_date}</span>

            <span className="ml-5 rounded-full bg-white w-1 h-1 my-auto"></span>
            <span className="min-w-max ml-5">
              {movieLengthHourse}h {movieLengthMinuts}m
            </span>
          </div>
          <div className="min-w-max mb-6 ">{getGenresMovies()}</div>

          <div className="icons-block flex my-6 ">
            <div className="relative mr-5 text-green-900">
              <div
                className="radial-progress absolute top-0 left-0 bottom-0 right-0"
                style={{
                  "--value": 100,
                  "--size": "4rem",
                  "--thickness": "4px",
                }}
              />
              <div
                className="radial-progress text-green-400"
                style={{
                  "--value": popularity,
                  "--size": "4rem",
                  "--thickness": "4px",
                }}
              >
                <span className="text-white font-bold">{popularity}%</span>
              </div>
            </div>

            <button className="btn btn-circle mr-5 my-auto">
              <ImList />
            </button>
            <button className="btn btn-circle mr-5 my-auto">
              <BsHeartFill />
            </button>
            <button className="btn btn-circle mr-5 my-auto">
              <BsBookmarkFill />
            </button>
            <button className="btn btn-circle my-auto">
              <BsStarFill />
            </button>
          </div>
          <div className="header-info">
            <h3 className="text-lg italic">{movie.tagline} </h3>
            <h3 className="my-2.5 text-xl">Overview</h3>
            <p className="text-base">{movie.overview} </p>
            <h3 className="mt-6 mb-2.5 text-xl font-bold italic">
              Budget:{" "}
              <span className="font-normal">
                {" "}
                {numberWithSpaces(movie.budget)}{" "}
              </span>{" "}
              ${" "}
            </h3>
            <h3 className="my-2.5 text-xl font-bold italic">
              Revenue:{" "}
              <span className={revenueColor}>
                {" "}
                {numberWithSpaces(movie.revenue)}{" "}
              </span>{" "}
              ${" "}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
