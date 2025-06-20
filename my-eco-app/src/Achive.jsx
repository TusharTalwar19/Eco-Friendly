import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const Achive = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9', padding: '2rem 0' }}>
      <Container>
        <h2 className="text-center mb-4">
          Our <span style={{ color: 'green', fontWeight: '600' }}>achievements</span> quantified
        </h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-white" style={{ backgroundColor: '#00b37f', borderRadius: '20px' }}>
              <Card.Body>
                <Card.Title>
                  <i className="bi bi-bar-chart-line-fill me-2"></i>
                </Card.Title>
                <Card.Text>
                  We’ve <strong><em>achieved</em></strong> a remarkable reduction of{' '}
                  <u><strong>over 55% in CO₂e</strong></u> emissions across our entire carbon footprint since 2015.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-white" style={{ backgroundColor: '#00b37f', borderRadius: '20px' }}>
              <Card.Body>
                <Card.Title>
                  <i className="bi bi-wrench-adjustable-circle me-2"></i>
                </Card.Title>
                <Card.Text>
                  In 2023, <u><strong>22%</strong></u> of the materials used in our products were sourced from recycled and renewable resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-white" style={{ backgroundColor: '#00b37f', borderRadius: '20px' }}>
              <Card.Body>
                <Card.Title>
                  <i className="bi bi-truck me-2"></i>
                </Card.Title>
                <Card.Text>
                  <u><strong>20% reduction</strong></u> in product transportation emissions compared to 2022.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <div style={{
            backgroundColor: '#000',
            color: '#fff',
            borderRadius: '999px',
            padding: '0.8rem 1.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.95rem'
          }}>
            <span role="img" aria-label="leaf">🍃</span>
            Our goal is to achieve carbon neutrality throughout our entire value chain by the end of this decade.
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Achive;
