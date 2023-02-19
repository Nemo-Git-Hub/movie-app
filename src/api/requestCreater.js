const requestCreated = (params) => {
  const newParams = {
    ...params,
    api_base_url: import.meta.env.VITE_API_BASE_URL,
    api_key: import.meta.env.VITE_API_KEY,
  };
  const newParamsArray = Object.entries(newParams); // [ [key1, value1], [key2, value2] ]

  const newParamsString = newParamsArray.map(x);
  // const newParamsString = (array) => {
  //   array.map((element) => {
  //     element.toString;
  //   });
  // };
  // console.log(newParamsArray.map((x) => x.toString));
  // const newParamsString = newParamsArray.toString;

  console.log(newParamsArray);
  console.log(newParamsString);

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}4/list/1?api_key=${
      import.meta.env.VITE_API_KEY
    }&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    }
  );
};

export default requestCreated;
