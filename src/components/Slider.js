import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";

import "./styles.css";
import item from '../images/item-1.jpg'
import item2 from '../images/item-2.jpg'

// install Swiper modules
SwiperCore.use([Pagination]);

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          "640": {
            slidesPerView: 1,
            spaceBetween: 20
          },
          "768": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "1024": {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide><img src={item}/></SwiperSlide>
        <SwiperSlide><img src={item}/></SwiperSlide>
        <SwiperSlide><img src={item}/></SwiperSlide>
        <SwiperSlide><img src={item}/></SwiperSlide>
        <SwiperSlide><img src={item}/></SwiperSlide>
        <SwiperSlide><img src={item}/></SwiperSlide>
      </Swiper>
    </>
  );
}