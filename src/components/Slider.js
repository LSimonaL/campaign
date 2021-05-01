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
import SwiperCore, { Navigation, Virtual } from "swiper/core";
//Importing Modals
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

// Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Virtual]);

function MydModalWithGrid(props) {

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName={"primaryModal"}>           
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Pandora
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid modalCustomBody">
      <Container>
        <Row>
          <Col xs={12} md={12}>
            <span>Campaign Description</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <span>Category</span>
            <p>Lifestyle</p>
          </Col>
          <Col xs={6} md={6}>
            <span>Total Followers</span>
            <p>50.000 - 100.000</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <span>Target Audience Gender</span>
            <p>Female</p>
          </Col>
          <Col xs={6} md={6}>
            <span>Target Audience Aage</span>
            <p>25 - 45 y/o</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <span>Content to be produced</span>
            <p>4x Instagram Stories</p>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button value="Order confirmed" className="btn-block nav-custom-button" variant="warning" onClick={e => alert(e.target.value)}>Yes, I want it</Button>
      <Button className="btn-block nav-custom-button" variant="outline-warning" onClick={props.onHide}>No, it is not for me</Button>
    </Modal.Footer>
  </Modal>
    );
 
}


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
              <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
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