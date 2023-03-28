import { Link } from "react-router-dom";
import { A11y } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Swiper({ list, renderSlide }) {
  // const windowOuterWidth = window.outerWidth;
  // const quantitySlides =
  //   window.outerWidth > 768
  //     ? (window.outerWidth - (window.outerWidth - 768)) / 180
  //     : window.outerWidth / 180; // 768 - container.width  - how it is know?
  // console.log(quantitySlides, windowOuterWidth);

  return (
    <ReactSwiper
      className="swiperShadow"
      modules={[A11y]}
      spaceBetween={30}
      breakpoints={{
        280: {
          slidesPerView: 1.5,
        },
        360: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3.5,
        },
        768: {
          slidesPerView: 4.3,
        },
        1024: {
          slidesPerView: 5.7,
        },
        1280: {
          slidesPerView: 6.8,
        },
        1536: {
          slidesPerView: 8.5,
        },
      }}
      // slidesPerView={quantitySlides}
      // slidesPerView={5}
      // slidesPerView={7.7} - попробовать рассчитать с помощью calc()
    >
      {list.map((listItem) => (
        <SwiperSlide key={listItem.id}>{renderSlide(listItem)}</SwiperSlide>
      ))}
    </ReactSwiper>
  );
}
