import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      {/* Title Section */}
      <div className="text-center pt-5 border-top">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Contact Content Section */}
      <div className="my-5 d-flex flex-column align-items-center justify-content-center flex-md-row gap-4 mb-5">
        {/* Contact Image */}
        <img
          className="img-fluid w-100 w-md-50" // Responsive image
          style={{ maxWidth: '400px' }} // Reduce image size
          src={assets.contact_img}
          alt="Contact Us"
        />

        {/* Contact Details */}
        <div className="d-flex flex-column align-items-start gap-3">
          <p className="fw-semibold fs-5 text-secondary">Our Store</p>
          <p className="text-muted">
            54709 Willms Station<br />
            Suite 350, Washington, USA
          </p>
          <p className="text-muted">
            Tel: (415) 555-0132<br />
            Email: admin@forever.com
          </p>
          <p className="fw-semibold fs-5 text-secondary">Careers at Forever</p>
          <p className="fw-semibold fs-5 text-secondary">
            Learn more about our teams and job openings.
          </p>
          <button className="btn btn-outline-dark px-4 py-2">
            Learn More
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;