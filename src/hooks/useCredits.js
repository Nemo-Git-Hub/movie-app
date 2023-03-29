import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import fetchCredits from "../api/requests/fetchCredits";

const useCredits = () => {
  const location = useLocation();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    (async () => {
      const id = location.pathname.split("/").at(-1);
      const result = await fetchCredits(id);
      const credits = await result.json();
      setCredits(credits);
    })();
  }, []);

  return credits;
};

export default useCredits;
