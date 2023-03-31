import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCredits from "../api/requests/fetchCredits";

const useCredits = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetchCredits(id);
      const credits = await result.json();
      setCredits(credits);
    })();
  }, []);

  return credits;
};

export default useCredits;
