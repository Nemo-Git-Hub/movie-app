import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPerson from "../api/requests/fetchPerson";

const usePerson = () => {
  const { personId } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetchPerson(personId);
      const person = await result.json();
      setPerson(person);
    })();
  }, []);
  return person;
};

export default usePerson;
