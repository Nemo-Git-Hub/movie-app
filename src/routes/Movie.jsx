import { useLocation } from "react-router-dom";
// import fetchMovie from "../api/requests/fetchMovie";
import useMovie from "../hooks/useMovie";
import { BsBookmarkFill } from "react-icons/bs";

export default function Movie() {
  const movie = useMovie();
  console.log(movie);

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

  const genres = movie.genres.join(Object.name, ",");
  console.log(genres);

  return (
    <>
      <div
        className="flex py-8 px-10 text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),
          url(
            ${"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          )`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
        }}
      >
        <div className="">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            className="imageSlide rounded-xl "
          />
        </div>
        <div className=" text-base pl-10">
          <h2 className="text-4xl font-bold  ">
            {movie.title} <span className="font-normal">({yearRelease})</span>{" "}
          </h2>
          <div className="facts flex mb-6">
            <span>{movie.release_date}</span>
            <span className="pl-5">{}</span>
            <span className="pl-5">{movie.runtime} min</span>
          </div>

          <div className="icons-block"></div>
          <div className="header-info">
            <h3 className="text-lg italic">{movie.tagline} </h3>
            <h3 className="my-2.5 text-xl">Overview</h3>
            <p className="text-base">{movie.overview} </p>
          </div>
        </div>
      </div>

      {/* <button className="btn btn-circle">
        <BsBookmarkFill />
      </button>

      <div className="relative">
        <div
          className="radial-progress absolute top-0 left-0 bottom-0 right-0 text-cyan-800"
          style={{ "--value": 100 }}
        />
        <div
          className="radial-progress text-primary"
          style={{ "--value": popularity }}
        >
          {popularity}%
        </div>
      </div> */}
    </>
  );
}
