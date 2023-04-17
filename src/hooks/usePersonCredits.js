import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchPersonCredits from "../api/requests/fetchPersonCredits";

const usePersonCredits = () => {
  const { personId } = useParams();
  const [personCredits, setPersonCredits] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetchPersonCredits(personId);
      const personCredits = await result.json();
      setPersonCredits(personCredits);
    })();
  }, []);
  return personCredits;
};

export default usePersonCredits;
