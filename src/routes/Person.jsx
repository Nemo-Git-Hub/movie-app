import { DateTime } from "luxon";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import PageLayout from "../components/layouts/PageLayout";
import usePerson from "../hooks/usePerson";
import usePersonCredits from "../hooks/usePersonCredits";
import { Link } from "react-router-dom";
import { useState } from "react";
import ExpandedText from "../components/ExpandedText";

const renderMovie = (movie) => {
  const releseDate = DateTime.fromISO(movie.release_date).toFormat(
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
        <div className="subtitleSlide text-base px-2">{releseDate}</div>
      </div>
    </>
  );
};

export default function Person() {
  const [isCollapseBio, setIsCollapseBio] = useState(false);
  const person = usePerson();
  const personCredits = usePersonCredits();
  console.log(isCollapseBio);

  const toggleIsCollapseBio = (isCollapseBio) =>
    setIsCollapseBio(!isCollapseBio);

  const briefFullText = isCollapseBio ? "h-auto" : "h-12 overflow-hidden";

  if (!person || !personCredits) return <Spinner />;

  const urlFotoPerson = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`;
  const gender = person.gender === 1 ? "Female" : "Male";

  return (
    <PageLayout>
      <div className="flex sm:flex-row flex-col w-screen">
        <div className="auto-cols-min pl-5">
          <img src={urlFotoPerson} className="rounded-lg min-w-[300px]" />
          <div className="py-8">
            <h3 className="text-xl font-bold px-5">Personal Info</h3>
            <div className="pt-2.5 px-5">
              <p>
                <strong>Known For</strong>
              </p>
              <p> {person.known_for_department}</p>
            </div>
            <div className="pt-2.5 px-5">
              <p>
                <strong>Known Cast Movies</strong>
              </p>
              <p> {personCredits.cast.length}</p>
            </div>
            <div className="pt-2.5 px-5">
              <p>
                <strong>Gender</strong>
              </p>
              <p>{gender} </p>
            </div>
            <div className="pt-2.5 px-5">
              <p>
                <strong>Birthdate</strong>
              </p>
              <p> {person.birthday}</p>
            </div>
            <div className="pt-2.5 px-5">
              <p>
                <strong>Place of Birth</strong>
              </p>
              <p> {person.place_of_birth}</p>
            </div>
          </div>
        </div>

        <div className="pl-5">
          <h2 className="font-bold text-4xl mb-5">{person.name}</h2>
          <h3 className="mb-2 text-xl font-bold">Biography</h3>
          <ExpandedText briefFullText={briefFullText} person={person} />
          <button
            className="text-blue-700 font-bold top-[520px]"
            onClick={() => {
              setIsCollapseBio(!isCollapseBio);
            }}
          >
            More/Less info {">>>"}
          </button>
          <h3 className="my-8 text-xl font-bold">Known For</h3>
          <div className="flex w-[66vw] sm:w-screen">
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
