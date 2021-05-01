import React, {useState} from "react";
import {campaignData} from './CampaignData'
import "./styles.css";
import {Container, Row, Col, Button} from 'react-bootstrap'

// Import Swiper React components
import { Swiper, SwiperSlide  } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
// import Swiper core and required modules
import SwiperCore, { Navigation } from "swiper/core";

import ModalLayout from "./ModalLayout";
// Swiper modules
SwiperCore.use([Navigation]);



const Slider = () => {
  const [modalShow, setModalShow] = useState(false);

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
      {campaignData.map((campaign, index) => {
          return (
            <>
              <SwiperSlide key={index} >
                <div onClick={() => setModalShow(true)}>
                  <img className="width-100" src={campaign.image} />
                  <div className="campaign-title">
                    <h4>{campaign.title}</h4>
                    <p>{campaign.text}</p>
                  </div>
                </div>
                <ModalLayout show={modalShow} onHide={() => setModalShow(false)} />
              </SwiperSlide>
            </>
          )
        }
      )
      }
      </Swiper>
    </>
  );
}
export default Slider;