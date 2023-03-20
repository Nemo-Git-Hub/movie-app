import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./routes/List";
import Search from "./components/Search";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/error-page";
import Movie from "./routes/Movie";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Search />
        <List />{" "}
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: <Movie />,
  },
]);

const App = () => {
  return (
    <>
      <Header />

      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
