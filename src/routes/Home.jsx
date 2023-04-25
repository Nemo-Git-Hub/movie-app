import Search from "../components/Search";
import Swiper from "../components/Swiper";
import PageLayout from "../components/layouts/PageLayout";
import CardMovie from "../components/swiperCards/CardMovie";
import useMovies from "../hooks/useMovies";

export default function Home() {
  const movies = useMovies();

  if (!movies) return <Spinner />;

  return (
    <PageLayout>
      <Search />
      <div className="flex justify-center py-7">
        <div className="container">
          <Swiper list={movies} renderSlide={CardMovie} />
        </div>
      </div>
    </PageLayout>
  );
}
