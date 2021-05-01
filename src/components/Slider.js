import React from "react";
import { Card } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"

// import Swiper core and required modules
import SwiperCore, { Navigation, Virtual } from "swiper/core";

import "./styles.css";
import item1 from '../images/item-1.jpg'
import item2 from '../images/item-2.jpg'
import item3 from '../images/item-3.jpg'
import item4 from '../images/item-4.jpg'
import item5 from '../images/item-5.jpg'

// Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Virtual]);

const Slider = () => {

   const campaignData = [
    {
      image: item1,
      title: "Pandora",
      text: "New bracelet",
    },
    {
      image: item2,
      title: "Bang & Olufsen",
      text: "The sound of summer",
    },
    {
      image: item3,
      title: "Smuuk skin",
      text: "A feeling of inner beauty",
    },
    {
      image: item4,
      title: "Pandora",
      text: "New bracelet 2021",
    },
    {
      image: item5,
      title: "Nike",
      text: "Promoting summer suit",
    },
   ]

  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        pagination={{
          clickable: true
        }}
        autoHeight={true}
        breakpoints={{
          "640": {
            slidesPerView: 1,
            spaceBetween: 20
          },
          "768": {
            slidesPerView: 2,
            spaceBetween: 40
          },
          "1024": {
            slidesPerView: 3,
            spaceBetween: 30
          },
          "1200": {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }}
        className="mySwiper"
      >
      {
        campaignData.map((campaign, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="width-100" src={campaign.image} />
              <div className="campaign-title">
              <h4>{campaign.title}</h4>
              <p>{campaign.text}</p>
              </div>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </>
  );
}
export default Slider;