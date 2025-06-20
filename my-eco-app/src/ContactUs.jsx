import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <>
      <div
        style={{
          background: `url("/images/CT.jpg") center/cover no-repeat`,
          height: "650px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "White",
          textAlign: "center",
        }}
      >
        <h1 className="fw-bold display-4">Contact Us</h1>
      </div>

      <Container fluid className="py-5 px-4 bg-white">
        <Row>
          <Col md={6} className="mb-4">
            <p><h3 className="fw-bold mb-5">Join the Race to Make the World a Better Place.</h3>
              <h5>Contact Us To Find Out More</h5></p>
            <br />
            <h3 className="fw-bold mb-5">Be A Part Of The Solution</h3>
            <h5>Be part of the solution, not part of the pollution</h5>
          </Col>

          <Col md={6}>
            <h4 className="fw-bold mb-3">Contact Info</h4>
            <p>
              <strong><FaMapMarkerAlt className="me-2 text-success" />Address</strong><br />
              Keshwapur Road, UBL 580020, Hubli (Karnataka), India.
            </p>

            <p>
              <strong><FaEnvelope className="me-2 text-success" />Email Us</strong><br />
              EcoFriendly@example.com
            </p>

            <p>
              <strong><FaPhone className="me-2 text-success" />Call Us</strong><br />
              123-4567-8910
            </p>

            <p>
              <strong>Follow Us</strong><br />
              {/* <a href="#" className="me-3 text-success fs-4"><FaFacebookF /></a>
              <a href="#" className="me-3 text-success fs-4"><FaInstagram /></a>
              <a href="#" className="me-3 text-success fs-4"><FaYoutube /></a>
              <a href="#" className="text-success fs-4"><FaTwitter /></a> */}
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="me-3 text-success fs-4">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="me-3 text-success fs-4">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" className="me-3 text-success fs-4">
                <FaYoutube />
              </a>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-success fs-4">
                <FaTwitter />
              </a>

            </p>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <h4 className="fw-bold mb-3">Our Location</h4>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                title="Eco Friendly Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.1580678431353!2d75.12346731529824!3d15.364708789302996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d7b66bd159b5%3A0x26d2f34b3d23f8df!2sKeshwapur%2C%20Hubballi%2C%20Karnataka%20580020%2C%20India!5e0!3m2!1sen!2sin!4v1686320214960!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
