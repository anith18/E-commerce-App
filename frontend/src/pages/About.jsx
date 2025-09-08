import React from 'react';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="prata-regular display-4">About Us</h1>
        <p className="lead">
          Welcome to MyCart, your one-stop destination for all your shopping needs. We are committed to providing high-quality products and exceptional customer service.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="row my-5">
        <div className="col-md-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the best shopping experience by offering a wide range of products, competitive prices, and fast delivery.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the most trusted and preferred online shopping platform for customers worldwide.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="my-5">
        {/* <h2 className="text-center mb-4">Meet Our Team</h2>
        <div className="row">
          <div className="col-md-4 text-center">
            <img
              src={assets.about_img}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>John Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={assets.hero_img}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Jane Smith</h4>
            <p>Chief Marketing Officer</p>
          </div>
          <div className="col-md-4 text-center">
            <img
              src={assets.contact_img}
              alt="Team Member"
              className="img-fluid rounded-circle mb-3"
            />
            <h4>Mike Johnson</h4>
            <p>Chief Technology Officer</p>
          </div>
        </div> */}
      </section>

      <NewsletterBox />
    </div>
  );
};

export default About;