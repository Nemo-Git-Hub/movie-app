import requestCreator from "../requestCreator";

const fetchPersonCredits = (personId) => {
  return requestCreator(`3/person/${personId}/movie_credits`, {
    params: { language: "en-US" },
  });
};

export default fetchPersonCredits;
