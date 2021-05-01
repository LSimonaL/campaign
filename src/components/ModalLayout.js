import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import "./styles.css";
import {Container, Row, Col, Button} from 'react-bootstrap'

function ModalLayout(props) {

  function btnHandle(e) {
    e.target.classList.add('click-state');
    console.log('The link was clicked.');
  }
  // const [buttonText, setButtonText] = useState("Yes, I want it!");

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" dialogClassName="customModal">           
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
        <Row>
          <Col xs={6} md={6}>
            <span>Hashtag to be used</span>
            <p>#pandoradk</p>
          </Col>
          <Col xs={6} md={6}>
            <span>Handle to be used</span>
            <p>@pandora</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <span>Brand URL</span>
            <p>www.pandora.dk</p>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={6}>
            <span>You'll receive</span>
            <p>2 bracelets</p>
          </Col>
          <Col xs={6} md={6}>
            <span>Total value</span>
            <p>2.500 dkk</p>
          </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
      <Button value="Order confirmed" className="btn-block nav-custom-button mt-0" variant="warning" onClick={btnHandle}>Yes, I want it</Button>
      {/* <Button value="Order confirmed" className="btn-block nav-custom-button mt-0" variant="warning" onClick={e => alert(e.target.value)}>Yes, I want it</Button> */}
      <Button className="btn-block nav-custom-button mt-0 mb-0" variant="outline-warning" onClick={props.onHide}>No, it is not for me</Button>
    </Modal.Footer>
  </Modal>
 
    );
 
}

export default ModalLayout;
