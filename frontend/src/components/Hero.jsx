import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <Container fluid className="border border-dark">
      <Row className="align-items-center">
        {/* Left Text Content */}
        <Col md={6} className="text-center text-md-start">
          <div className="content-box">
            <p className="small-text px-5 fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>———OUR BESTSELLERS</p>
            <h1 className="prata-regular display-4 fw px-5" style={{ fontFamily: "'Playfair Display', serif" }}>Latest Arrivals</h1>
            <p className="medium-text px-5 fw-bold" style={{ fontFamily: "'Playfair Display', serif" }}>SHOP NOW———</p>
          </div>
        </Col>

        {/* Right Image */}
        <Col md={6} className="text-center p-0">
          <img 
            src={assets.hero_img} 
            alt="Fashion Model" 
            className="img-fluid w-100"
            style={{ display: "block" }} // Ensures no extra spacing around the image
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
