import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className=" text-dark py-5">
      <Container>
        <Row className="mb-4">
          <Col md={4}>
            <Col md={4} className="d-flex align-items-center">
  <img src={assets.logo} alt="Logo" style={{ height: "50px" }} />
</Col>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nulla dolorum autem quas voluptate sed quos accusantium sapiente.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-dark text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact Us</a></li>
              <li><a href="/privacy-policy" className="text-dark text-decoration-none">Privacy Policy</a></li>
              <li><a href="/terms-conditions" className="text-dark text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>
              Address: 123 Fashion Street, New Delhi, India<br />
              Phone: +91 836-8302246<br />
              Email: care@forevershoes.in
            </p>
          </Col>
        </Row>
        
        <Row>
          <Col className="text-center">
            <a href="https://www.facebook.com" className="text-dark mr-3 mx-3"><FaFacebookF /></a>
            <a href="https://www.twitter.com" className="text-dark mr-3 mx-3"><FaTwitter /></a>
            <a href="https://www.instagram.com" className="text-dark mr-3 mx-3"><FaInstagram /></a>
            <a href="https://www.linkedin.com" className="text-dark mx-3"><FaLinkedinIn /></a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Forever Buy. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
