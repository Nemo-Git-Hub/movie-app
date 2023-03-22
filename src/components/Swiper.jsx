import { Link } from "react-router-dom";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function SwiperMovies({ list }) {
  return (
    <Swiper
      className="swiperShadow"
      modules={[A11y]}
      spaceBetween={30}
      slidesPerView={7.7}
    >
      {list.map((movie) => {
        return (
          <SwiperSlide key={movie.id} movie={movie}>
            <>
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    className="imageSlide rounded-3xl max-h-56"
                  />
                </Link>

                <div className="titleSlide text-base font-bold pt-6 px-2">
                  <Link to={`/movie/${movie.id}`} title={movie.title}>
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
