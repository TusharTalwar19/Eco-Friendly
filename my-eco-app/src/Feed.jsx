import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const Feed = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '3rem 0' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="position-relative">
            <Image
              src="/images/13.webp"
              alt="Preserve Earth"
              fluid
              rounded
              style={{ borderRadius: '20px', width: '100%' }}
            />
            <h3
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.8rem',
                textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
              }}
            >
            </h3>
          </Col>

          <Col md={6}>
            <h3 className="fw-bold mb-3">
              We don't just sell products; we also plant trees to preserve the Earth.
            </h3>
            <p className="text-muted mb-4" style={{ fontSize: '1rem' }}>
              10000 people who have already planted a tree and are helping us save the earth.
              Where’s your tree?
            </p>
            <Link to="/Campaign">
            <Button
              variant="success"
              size="lg"
              style={{
                borderRadius: '999px',
                padding: '0.6rem 1.5rem',
                fontWeight: '500',
              }}
            >
              Preserve the earth now
            </Button>
            </Link>

            <div style={{ marginTop: '1rem', color: 'green', fontSize: '2rem' }}>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Feed;
