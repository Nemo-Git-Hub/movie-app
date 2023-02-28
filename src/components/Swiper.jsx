// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "./Slide";

export default function SwiperMovies({ list }) {
  return (
    <Swiper
      className="swiperShadow"
      // install Swiper modules
      modules={[Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={7.7}
      navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      {list.map((movie) => {
        const key = movie.id;
        console.log(movie.title);
        return (
          <SwiperSlide
          // {/* <Slide */}
          // {/* {...movie} */}
          // {/* movie={movie} */}
          // title={movie.title}
          // {/* moviePosterImg={movie.poster_path} */}
          // {/* /> */}
          >
            <>
              <div className="">
                <a href="#" className="">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    title={movie.title}
                    className="imageSlide rounded-3xl max-h-56"
                  />
                </a>

                <div className="titleSlide text-base font-bold pt-6 px-2">
                  <a href="#" className="" title={movie.title}>
                    {movie.title}
                  </a>
                </div>
              </div>
            </>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
