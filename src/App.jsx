import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Credits from "./routes/Credits";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import Person from "./routes/Person";
import SearchPage from "./routes/SearchPage";
import SearchPage2 from "./routes/SearchPage2";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:movieId",
    element: <Movie />,
  },
  {
    path: "/movie/:movieId/credits",
    element: <Credits />,
  },
  {
    path: "/person/:personId",
    element: <Person />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/search2",
    element: <SearchPage2 />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
