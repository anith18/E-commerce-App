import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const NewsletterBox = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmithandler = (event) => {
    event.preventDefault();

    if (!email) {
      setError("Please enter an email address.");
      setSuccess("");
      return;
    }

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // If valid, simulate successful subscription
    setError("");
    setSuccess("You have successfully subscribed!");
    setEmail("");
  };

  return (
    <Container fluid className=" py-5">
      <Row className="justify-content-center text-center">
        <Col md={6} lg={5}>
          <h2 className="fw-bold">Subscribe Now & Get 20% Off</h2>
          <p className="text-muted">
            Stay updated with our latest products and exclusive offers. Join our newsletter and receive a 20% discount on your next purchase.
          </p>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}

          <Form onSubmit={onSubmithandler}>
            <Form.Group controlId="formEmail" className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="dark" type="submit">
                Subscribe
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsletterBox;
