import { Link } from "react-router-dom";
import { A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { DateTime } from "luxon";

import "swiper/css";

export default function SwiperMovies({ list }) {
  // const windowOuterWidth = window.outerWidth;
  const quantitySlides =
    window.outerWidth > 768
      ? (window.outerWidth - (window.outerWidth - 768)) / 180
      : window.outerWidth / 180; // 768 - container.width  - how it is know?
  // console.log(quantitySlides, windowOuterWidth);

  return (
    <Swiper
      className="swiperShadow"
      modules={[A11y]}
      spaceBetween={30}
      slidesPerView={quantitySlides}
      // slidesPerView={5}
      // slidesPerView={7.7} - попробовать рассчитать с помощью calc()
    >
      {list.map((movie) => {
        const releasDate = DateTime.fromISO(movie.release_date).toFormat(
          "dd LLL yyyy"
        );

        return (
          <SwiperSlide key={movie.id} movie={movie}>
            <>
              <div>
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    className="imageSlide rounded-xl max-h-56 min-w-[150px]"
                  />
                </Link>

                <div className="titleSlide text-base font-bold pt-6 px-2">
                  <Link to={`/movie/${movie.id}`} title={movie.title}>
                    {movie.title}
                  </Link>
                </div>
                <div className="subtitleSlide text-base px-2">{releasDate}</div>
              </div>
            </>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
