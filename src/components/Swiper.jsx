// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "./Slide";

export default ({ list }) => {
  //   const Movie = (list) => {
  //     list.map((item) => {
  //       const key = item.id;
  //     });
  //   };
  return (
    <Swiper
      // install Swiper modules
      modules={[Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={7.7}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {list.map((movie) => (
          <Slide
            key={movie.id}
            {...movie}
            title={movie.title}
            moviePosterImg={movie.poster_path}
          />
        ))}
      </SwiperSlide>
    </Swiper>
  );
};
