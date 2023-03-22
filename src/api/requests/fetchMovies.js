import requestCreator from "../requestCreator";

const fetchMovies = (listId = 1) => {
  return requestCreator(`4/list/${listId}`);
};

export default fetchMovies;
