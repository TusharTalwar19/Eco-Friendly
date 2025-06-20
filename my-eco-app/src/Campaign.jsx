import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Campaign = () => {
    return (
        <div>
            <div
                style={{
                    backgroundImage: `url('/images/Campaign.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '20rem 6rem',
                    color: 'white',
                }}
            >
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Campaign</h1>
            </div>

            <Container className="my-5">
                <Row className="align-items-center mb-5">
                    <Col md={5} className="mb-3">
                        <Image
                            src="/images/s5.webp"
                            alt="Planting Trees"
                            fluid
                            rounded
                            style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
                        />
                    </Col>

                    <Col md={5}>
                        <h3>Plant Trees</h3>
                        <p>Planting trees is essential for restoring ecosystems, improving air quality, and combating climate change. Join us in tree plantation drives to make the earth greener.</p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={5} className="mb-3 order-md-2">
                        <Image
                            src="/images/s2.jpg"
                            alt="Avoid Plastic"
                            fluid
                            rounded
                            style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
                        />
                    </Col>

                    <Col md={5} className="order-md-1">
                        <h3>Avoid Plastic</h3>
                        <p>Say no to single-use plastics. Choose sustainable alternatives like cloth bags, glass containers, and compostable materials to reduce pollution.</p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={5} className="mb-3">
                        <Image
                            src="/images/s3.jpg"
                            alt="Use Fertilizers"
                            fluid
                            rounded
                            style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
                        />
                    </Col>

                    <Col md={5}>
                        <h3>Use Organic Products</h3>
                        <p>A nation that destroys its soils destroys itself. Forests are the lungs of our land, purifying the air and giving fresh strength to our people.</p>
                    </Col>
                </Row>

                <Row className="align-items-center mb-5">
                    <Col md={5} className="mb-3 order-md-2">
                        <Image
                            src="/images/s4.jpg"
                            alt="Recycle"
                            fluid
                            rounded
                            style={{ boxShadow: '0 6px 12px rgba(0,0,0,0.15)' }}
                        />
                    </Col>

                    <Col md={5} className="order-md-1">
                        <h3>Recycle</h3>
                        <p>Recycle Today, Save Tomorrow!.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Campaign;
