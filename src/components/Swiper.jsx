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
  return (
    <Swiper
      // install Swiper modules
      modules={[Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={7.7}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <Slide list={list} /> 1
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 2
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 3
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 4
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 5
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 6
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 7
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 8
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 9
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 10
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 1
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 2
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 3
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 4
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 5
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 6
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 7
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 8
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 9
      </SwiperSlide>
      <SwiperSlide>
        <Slide /> 10
      </SwiperSlide>
    </Swiper>
  );
};
