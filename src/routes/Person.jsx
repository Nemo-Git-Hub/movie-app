import Spinner from "../components/Spinner";
import PageLayout from "../components/layouts/PageLayout";
import usePerson from "../hooks/usePerson";

export default function Person() {
  const person = usePerson();
  console.log(person);

  if (!person) return <Spinner />;
  const urlFotoPerson = `https://image.tmdb.org/t/p/w235_and_h235_face/${person.profile_path}`;
  const gender = person.gender === 1 ? "Female" : "Male";

  return (
    <PageLayout>
      <div className="flex justify-center p-5">
        <img
          src={urlFotoPerson}
          className="rounded-lg w-[385px] max-h-[385px]"
        />
      </div>
      <h2 className="font-bold text-4xl text-center">{person.name}</h2>
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
            <strong>Known Credits</strong>
          </p>
          <p> {person.known_for_department}</p>
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
      <div className="px-5">
        <h3 className="mb-2 text-xl font-bold ">Biography</h3>
        <p>{person.biography}</p>
      </div>
    </PageLayout>
  );
}
