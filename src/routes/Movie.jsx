import Spinner from "../components/Spinner";
import useMovie from "../hooks/useMovie";
import useCredits from "../hooks/useCredits";
import { BsBookmarkFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { ImList } from "react-icons/im";
import Credits from "../components/Credits";
import Swiper from "../components/Swiper";
import { Link } from "react-router-dom";

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const renderCast = (cast) => {
  const credits = useCredits();
  console.log(credits);
  if (cast.isLastItem) {
    if (!credits) return <Spinner />;
    return (
      <>
        <div className="flex card card-compact min-w-[150px] m-5 h-[369px] max-h-min text-center justify-center bg-base-100 shadow-xl font-bold">
          {/* Show more */}
          {/* </div> */}
          {/* <div className="titleSlide text-base font-bold pt-6 px-2"> */}
          <Link to={`/movie/${credits.id}/credits`} title="Show All">
            Show All
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="card card-compact min-w-[150px] m-5 bg-base-100 shadow-xl">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
          alt={cast.name}
        />
      </figure>
      <div className="card-body h-36">
        <h2 className="card-title">{cast.name}</h2>
        <h3 className="card-actions">{cast.character}</h3>
      </div>
    </div>
  );
};

export default function Movie() {
  const movie = useMovie();
  const credits = useCredits();

  if (!movie) return <Spinner />;

  const popularity = (movie.vote_average * 10).toFixed(0);

  const yearRelease = movie.release_date.slice(0, 4);
  const movieLengthHourse = (movie.runtime / 60).toFixed(0);
  const movieLengthMinuts = movie.runtime % 60;
  const revenueColor =
    movie.budget < movie.revenue
      ? "text-yellow-500 mx-1.5"
      : "text-red-500 mx-1.5";

  const genresMovie = movie.genres.map((movie) => movie.name).join(", ");

  if (!credits) return <Spinner />;

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
            className="imageSlide rounded-xl min-w-[300px]"
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
          <div className="min-w-max mb-6 ">{genresMovie}</div>

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
              Budget:
              <span className="font-normal mx-1.5">
                {numberWithSpaces(movie.budget)}
              </span>
              $
            </h3>
            <h3 className="my-2.5 text-xl font-bold italic">
              Revenue:
              <span className={revenueColor}>
                {numberWithSpaces(movie.revenue)}
              </span>
              $
            </h3>
          </div>
        </div>
      </div>
      <div className="px-10 py-8">
        <h3 className="font-semibold text-2xl mb-5">Top Billed Cast</h3>
        <Swiper
          list={[...credits.cast.slice(0, 9), { isLastItem: true }]}
          renderSlide={renderCast}
        />
      </div>
    </>
  );
}
