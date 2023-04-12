import requestCreator from "../requestCreator";

const fetchPerson = (personId) => {
  return requestCreator(`3/person/${personId}`, {
    params: { language: "en-US" },
  });
};

export default fetchPerson;
