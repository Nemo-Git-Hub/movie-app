function List() {
  const data = JSON.stringify({});

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open(
    "GET",
    `https://api.themoviedb.org/4/list/{list_id}?page=1&api_key=cd3490085bf457ce8f5543677eed29c7`
  );
  // xhr.open(
  //   "GET",
  //   `https://api.themoviedb.org/4/list/%7Blist_id%7D?api_key=${
  //     import.meta.env.VITE_API_KEY
  //   }&page=1`
  // );

  xhr.setRequestHeader("content-type", "application/json;charset=utf-8");
  xhr.setRequestHeader("origin", "https://api.themoviedb.org");
  xhr.setRequestHeader(
    "authorization",
    `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`
  );

  xhr.send(data);
  console.log(data);

  return (
    <div className="bg-gray-900 text-gray-200">
      <h1>{data}</h1>
    </div>
  );
}

export default List;
