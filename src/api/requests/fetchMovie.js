import { useLocation } from "react-router-dom";
import requestCreator from "../requestCreator";

const fetchMovie = () => {
  // const location = useLocation;
  // console.log(location);
  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}3/${location.pathname}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
};

export default fetchMovie;
