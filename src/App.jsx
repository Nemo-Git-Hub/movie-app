import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Credits from "./routes/Credits";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import Person from "./routes/Person";
import SearchPage from "./routes/SearchPage";

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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
