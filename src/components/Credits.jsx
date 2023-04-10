import useCredits from "../hooks/useCredits";
import CardPersonMini from "./CardPersonMini";
import Spinner from "./Spinner";
import PageLayout from "./layouts/PageLayout";

export default function Credits() {
  const credits = useCredits();
  if (!credits) return <Spinner />;
  console.log(credits);
  return (
    <PageLayout>
      <div className="">Здесь будет фон, пост, название и переход на фильм</div>
      <div className="py-8 px-10 flex">
        <div className="column-cast">
          <div className="mb-5 font-bold text-2xl">
            Cast <span className="font-normal">{credits.cast.length}</span>
          </div>

          {credits.cast.map((castItem) => (
            <CardPersonMini
              key={castItem.id}
              profile_path={castItem.profile_path}
              name={castItem.name}
              participation={castItem.character}
            ></CardPersonMini>
          ))}
        </div>
        <div className="column-crew">
          <div className="mb-5 font-bold text-2xl">
            Crew <span className="font-normal">{credits.crew.length}</span>
          </div>

          {credits.crew.map((crewItem) => (
            <CardPersonMini
              key={crewItem.id}
              profile_path={crewItem.profile_path}
              name={crewItem.name}
              participation={crewItem.known_for_department}
            ></CardPersonMini>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
