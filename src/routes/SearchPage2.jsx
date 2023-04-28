import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import fetchSearch from "../api/requests/fetchSearch";
import Spinner from "../components/Spinner";

export default function SearchPage2() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [resultSearchQuery, setResultSearchQuery] = useState(null);

  const params = searchParams.get("query");
  console.log("params=", params);

  useEffect(() => {
    (async () => {
      const result = await fetchSearch(params);
      const resultSearchQuery = await result.json();
      setResultSearchQuery(resultSearchQuery);
    })();
  }, []);
  if (!resultSearchQuery) return <Spinner />;
  console.log("resultSearchQuery=", resultSearchQuery);
  const detailResultSearchQuery = resultSearchQuery.results;
  console.log(detailResultSearchQuery);

  return <>Hi!</>;
}
