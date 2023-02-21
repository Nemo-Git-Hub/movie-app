import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/Search";

const App = () => {
  return (
    <>
      <Header />
      <Search />
      <div className="">
        <List />
      </div>
      <Footer />
    </>
  );
};

export default App;
