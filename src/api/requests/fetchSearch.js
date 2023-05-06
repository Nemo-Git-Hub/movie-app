import requestCreator from "../requestCreator";

const fetchSearch = (textSearch) => {
  return requestCreator(`/3/search/movie`, {
    params: {
      language: "en-US",
      query: textSearch,
    },
  });
};

export default fetchSearch;
