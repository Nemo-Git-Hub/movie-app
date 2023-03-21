import { Link } from "react-router-dom";
import { A11y, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperMovies({ list }) {
  return (
    <Swiper
      className="swiperShadow"
      modules={[Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={7.7}
      navigation
      scrollbar={{ draggable: true }}
    >
      {list.map((movie) => {
        return (
          <SwiperSlide key={movie.id} movie={movie}>
            <>
              <div className="">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    className="imageSlide rounded-3xl max-h-56"
                  />
                </Link>

                <div className="titleSlide text-base font-bold pt-6 px-2">
                  <Link
                    to={`/movie/${movie.id}`}
                    className=""
                    title={movie.title}
                  >
                    {movie.title}
                  </Link>
                </div>
              </div>
            </>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
