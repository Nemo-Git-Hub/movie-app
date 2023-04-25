import { DateTime } from "luxon";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import PageLayout from "../components/layouts/PageLayout";
import usePerson from "../hooks/usePerson";
import usePersonCredits from "../hooks/usePersonCredits";
import { Link } from "react-router-dom";
import ExpandedText from "../components/ExpandedText";

const renderMovie = (movie) => {
  const releaseDate = DateTime.fromISO(movie.release_date).toFormat(
    "dd LLL yyyy"
  );
  return (
    <>
      <div>
        <Link to={`/movie/${movie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            title={movie.title}
            className="imageSlide rounded-xl max-h-56 min-w-[150px]"
          />
        </Link>

        <div className="titleSlide text-base font-bold pt-6 px-2">
          <Link to={`/movie/${movie.id}`} title={movie.title}>
            {movie.title}
          </Link>
        </div>
        <div className="subtitleSlide text-base px-2">{releaseDate}</div>
      </div>
    </>
  );
};

export default function Person() {
  const person = usePerson();
  const personCredits = usePersonCredits();

  if (!person || !personCredits) return <Spinner />;

  const urlPhotoPerson = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`;

  return (
    <PageLayout>
      <div className="flex flex-wrap flex-col sm:flex-row mb-4">
        <div className="w-full sm:w-1/5 xl:w-1/6">
          <img src={urlPhotoPerson} className="rounded-lg w-full" />
          <div className="py-8">
            <h3 className="text-xl font-bold">Personal Info</h3>
            <div className="pt-2.5">
              <p className="font-bold">Known For</p>
              <p> {person.known_for_department}</p>
            </div>
            <div className="pt-2.5">
              <p className="font-bold">Known Cast Movies</p>
              <p> {personCredits.cast.length}</p>
            </div>
            <div className="pt-2.5">
              <p className="font-bold">Gender</p>
              <p>{person.gender === 1 ? "Female" : "Male"}</p>
            </div>
            {person.birthday && (
              <div className="pt-2.5">
                <p className="font-bold">Birthday</p>
                <p>{person.birthday}</p>
              </div>
            )}
            {person.place_of_birth && (
              <div className="pt-2.5">
                <p className="font-bold">Place of Birth</p>
                <p>{person.place_of_birth}</p>
              </div>
            )}
          </div>
        </div>
        <div className="w-full sm:w-4/5 xl:w-5/6 pl-0 sm:pl-3 pt-0 sm:pt-3">
          <h2 className="font-bold text-4xl mb-5">{person.name}</h2>
          <h3 className="mb-2 text-xl font-bold">Biography</h3>
          <ExpandedText text={person.biography} />
          <h3 className="my-8 text-xl font-bold">Known For</h3>
          <div className="w-full">
            <Swiper
              list={personCredits.cast.slice(0, 8)}
              renderSlide={renderMovie}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
