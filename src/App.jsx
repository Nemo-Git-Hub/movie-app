import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Movie from "./routes/Movie";
import Home from "./routes/Home";
import Credits from "./components/Credits";

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
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
