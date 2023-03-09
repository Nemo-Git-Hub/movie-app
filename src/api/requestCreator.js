const requestCreator = (endpoint, options) => {
  const newParams = {
    ...options?.params,
    api_key: import.meta.env.VITE_API_KEY,
  };

  const queryString = Object.entries(newParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}${endpoint}?${queryString}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      },
    }
  );
};

export default requestCreator;
