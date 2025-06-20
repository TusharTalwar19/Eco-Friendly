import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const AboutUs = () => {
  return (
    <div>

      <div
        style={{
          backgroundImage: `url('/images/12.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '12rem 5rem',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>What Sets Us Apart?</h1>
      </div>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={7}>
            <h3 style={{ fontWeight: '600' }} className="mb-3">
              <span style={{ borderBottom: '3px solid #b41a34' }}>Our Mission</span>
            </h3>
            <p>
              Our mission is simple: to bring you eco-friendly products that inspire, empower, and make a positive impact.
              We believe in offering high-quality, sustainable items that align with our philosophy of mindful living and environmental responsibility.
              From reusable essentials to biodegradable alternatives, every product is carefully selected to support a greener planet.
            </p>
            <p>
              We don’t just sell products — we promote a lifestyle.
              Each item in our store reflects our commitment to sustainability, ethical sourcing, and innovation, ensuring you receive goods that are both planet-friendly and purpose-driven.
            </p>
          </Col>
          <Col md={5}>
            <Image
              src="/images/14.avif" 
              alt="Mission Image"
              fluid
              rounded
              style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
            />
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col md={7}>
            <h3 style={{ fontWeight: '600' }} className="mb-3">
              <span style={{ borderBottom: '3px solid #b41a34' }}>Our Core Values</span>
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li>
                <strong>🌿 Sustainability</strong> We are committed to protecting the planet by offering eco-friendly, ethically sourced products that reduce environmental impact.
              </li>
              <br />
              <li>
                <strong>🤝 Integrity</strong> We prioritize honesty and transparency in everything we do — from product sourcing to customer communication.
              </li>
              <br />
              <li>
                <strong>🌱 Quality</strong> We deliver only the best. Our products meet high standards for durability, functionality, and environmental responsibility.
              </li>
              <br />
              <li>
                <strong>😊 Customer Commitment</strong> Your satisfaction drives us. We aim to provide an exceptional experience through conscious products and responsive service.
              </li>
              <br />
              <li>
                <strong>💡 Eco-Innovation</strong> We embrace innovation that supports a greener future — from biodegradable packaging to sustainable product design.
              </li>
              <br />
              <li>
                <strong>🌍 Partnership for the Planet</strong> We collaborate with like-minded vendors and organizations to build a community rooted in environmental stewardship.
              </li>
              <br />
              <li>
                <strong>💬 Open Communication</strong> We value feedback and strive to create a transparent, trust-based relationship with our customers and partners.
              </li>

            </ul>
            {/* <ul>
              <li style={{ color: '#b41a34' }}>Excellence</li>
              <li style={{ color: '#b41a34' }}>Innovation</li>
              <li style={{ color: '#b41a34' }}>Partnership</li>
              <li style={{ color: '#b41a34' }}>Open Communication</li>
            </ul> */}
          </Col>
          <Col md={5}>
            <Image
              src="/images/15.jpg" 
              alt="Core Values Image"
              fluid
              rounded
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
