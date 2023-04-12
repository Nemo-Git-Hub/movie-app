import { Link } from "react-router-dom";
import useCredits from "../hooks/useCredits";
import useMovie from "../hooks/useMovie";
import CardPersonMini from "./CardPersonMini";
import Spinner from "./Spinner";
import PageLayout from "./layouts/PageLayout";

export default function Credits() {
  const movie = useMovie();
  const credits = useCredits();
  if (!movie || !credits) return <Spinner />;
  const yearRelease = movie.release_date.slice(0, 4);
  return (
    <PageLayout>
      <div
        className="flex justify-center py-4 px-10 text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),
          url(
            ${"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          )`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w58_and_h87_face/${movie.poster_path}`}
            title={movie.title}
            className="imageSlide rounded-xl"
          />
        </div>
        <div className="text-base pl-10">
          <h2 className="text-4xl font-bold  ">
            <Link to={`/movie/${movie.id}`}>
              {movie.title} <span className="font-normal">({yearRelease})</span>
            </Link>
          </h2>
          <h3>
            <Link to={`/movie/${movie.id}`} className="text-lg font-medium">
              ← Back to main
            </Link>
          </h3>
        </div>
      </div>

      <div className="py-8 px-10 flex sm:flex-row flex-col justify-evenly">
        <div className="column-cast">
          <div className="mb-5 font-bold text-2xl">
            Cast <span className="font-normal">{credits.cast.length}</span>
          </div>

          {credits.cast.map((castItem) => (
            <CardPersonMini
              key={castItem.credit_id}
              id={castItem.id}
              profilePath={castItem.profile_path}
              name={castItem.name}
              participation={castItem.character}
            />
          ))}
        </div>
        <div className="column-crew">
          <div className="mb-5 font-bold text-2xl">
            Crew <span className="font-normal">{credits.crew.length}</span>
          </div>

          {credits.crew.map((crewItem) => (
            <CardPersonMini
              key={crewItem.credit_id}
              id={crewItem.id}
              profilePath={crewItem.profile_path}
              name={crewItem.name}
              participation={crewItem.job}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
