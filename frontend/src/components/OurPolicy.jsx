import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const OurPolicy = () => {
  const policies = [
    {
      icon: <FaShippingFast size={30} />,
      title: "Free Shipping",
      description: "Enjoy free shipping on all orders over ₹500.",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Secure Payment",
      description: "We ensure secure payment with multiple options.",
    },
    {
      icon: <FaHeadset size={30} />,
      title: "24/7 Support",
      description: "We are available 24/7 to assist you.",
    },
  ];

  return (
    <Container className="my-10">
      <Row className="text-center">
        {policies.map((policy, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-3 text-primary">{policy.icon}</div>
              <h5 className="fw-bold">{policy.title}</h5>
              <p className="text-muted small">{policy.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurPolicy;
