import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./styles.css";
import Slider from "./Slider";
// import Slider from "./Slider-test";

function Main() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col>
                    <h1 className="mt-auto txt-color-white">Newest <br /> campaigns</h1>
                </Col>
            </Row>
        <Slider/>
        </Container>
      </>
    )
}

export default Main
