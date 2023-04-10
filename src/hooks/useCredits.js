import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCredits from "../api/requests/fetchCredits";

const useCredits = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      const result = await fetchCredits(movieId);
      const credits = await result.json();
      setCredits(credits);
    })();
  }, []);

  return credits;
};

export default useCredits;
