import { Link } from "react-router-dom";
import { A11y } from "swiper";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Swiper({ list, renderSlide }) {
  // const windowOuterWidth = window.outerWidth;
  const quantitySlides =
    window.outerWidth > 768
      ? (window.outerWidth - (window.outerWidth - 768)) / 180
      : window.outerWidth / 180; // 768 - container.width  - how it is know?
  // console.log(quantitySlides, windowOuterWidth);

  return (
    <ReactSwiper
      className="swiperShadow"
      modules={[A11y]}
      spaceBetween={30}
      slidesPerView={quantitySlides}
      // slidesPerView={5}
      // slidesPerView={7.7} - попробовать рассчитать с помощью calc()
    >
      {list.map((listItem) => (
        <SwiperSlide key={listItem.id}>{renderSlide(listItem)}</SwiperSlide>
      ))}
    </ReactSwiper>
  );
}
