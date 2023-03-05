import useMovies from "../hooks/useMovies";

export default function Movie() {
  const movies = useMovies();
  console.log(movies);
  return (
    <>
      <h3>this Movie</h3>
    </>
  );
}
