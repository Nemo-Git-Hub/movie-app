import { DateTime } from "luxon";
import Spinner from "../components/Spinner";
import Swiper from "../components/Swiper";
import PageLayout from "../components/layouts/PageLayout";
import usePerson from "../hooks/usePerson";
import usePersonCredits from "../hooks/usePersonCredits";
import { Link } from "react-router-dom";
import { useState } from "react";

const renderMovie = (cast) => {
  const releseDate = DateTime.fromISO(cast.release_date).toFormat(
    "dd LLL yyyy"
  );
  return (
    <>
      <div>
        <Link to={`/movie/${cast.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${cast.poster_path}`}
            title={cast.title}
            className="imageSlide rounded-xl max-h-56 min-w-[150px]"
          />
        </Link>

        <div className="titleSlide text-base font-bold pt-6 px-2">
          <Link to={`/movie/${cast.id}`} title={cast.title}>
            {cast.title}
          </Link>
        </div>
        <div className="subtitleSlide text-base px-2">{releseDate}</div>
      </div>
    </>
  );
};

export default function Person() {
  const [fullText, setFullText] = useState(false);
  const person = usePerson();
  const personCredits = usePersonCredits();

  const briefFullText = (fullText) => {
    return fullText ? "h-auto" : "h-72 overflow-hidden";
  };

  if (!person || !personCredits) return <Spinner />;
  const urlFotoPerson = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`;
  const gender = person.gender === 1 ? "Female" : "Male";

  return (
    <PageLayout>
      <div className="flex sm:flex-row flex-col w-[100vw]">
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
          <div className={briefFullText(fullText)}>
            {person.biography.split("\n").map((itemParagraph) => {
              if (itemParagraph) {
                return <p className="pb-6">{itemParagraph}</p>;
              }
            })}
          </div>
          <button
            className="text-blue-700 font-bold top-[520px]"
            onClick={() => {
              setFullText(!fullText);
            }}
          >
            More/Less info {">>>"}
          </button>
          <h3 className="my-8 text-xl font-bold">Known For</h3>
          <div className="flex w-[66vw] sm:w-[100vw]">
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
