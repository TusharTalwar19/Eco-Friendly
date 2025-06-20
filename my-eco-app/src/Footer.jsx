import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-5">
            <Container>
                <Row className="mb-4">
                    <Col md={6}>
                        <p>Don't miss out on the latest updates, news, and exclusive content!</p>
                        <Form className="d-flex mb-3">
                            <Form.Control
                                type="email"
                                size="sm"
                                placeholder="Email Address"
                                className="me-2 bg-success text-white border-0 fw-bold"
                            />
                            <Button variant="light">Follow</Button>
                        </Form>
                        {/* <div className="d-flex gap-3">
                            <FaFacebookF size={20} />
                            <FaInstagram size={20} />
                            <FaYoutube size={20} />
                            <FaTwitter size={20} />
                        </div> */}
                        <div className="d-flex gap-3">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FaYoutube size={20} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                                <FaTwitter size={20} />
                            </a>
                        </div>
                    </Col>

                    <Col md={3}>
                        <h6 className="text-uppercase mb-3">Product</h6>
                        <ul className="list-unstyled">
                            <li>Bags</li>
                            <li>Bottles</li>
                            <li>Toothbrushes</li>
                            <li>Food Wraps</li>
                            <li>Straws</li>
                        </ul>
                    </Col>

                    {/* <Col md={3}>
                        <h6 className="text-uppercase mb-3">Company</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Contact Us</li>
                        </ul>
                    </Col> */}
                    <Col md={3}>
                        <h6 className="text-uppercase mb-3">Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="/AboutUs" className="text-white text-decoration-none">About Us</a></li>
                            <li><a href="/Product" className="text-white text-decoration-none">Product</a></li>
                            <li><a href="/Campaign" className="text-white text-decoration-none">Campaign</a></li>
                            <li><a href="/ContactUs" className="text-white text-decoration-none">Contact Us</a></li>
                        </ul>
                    </Col>
                </Row>

                <Row className="border-top pt-3 mt-3 text-center text-md-start">
                    <Col md={4}>
                        <p className="mb-0">@EcoFriendly 2025</p>
                    </Col>
                    <Col md={4} className="text-center">
                        <strong className="text-white">🌿Eco Friendly</strong>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <a href="#" className="text-white me-3">Terms</a>
                        <a href="#" className="text-white me-3">Privacy</a>
                        <a href="#" className="text-white">Legal</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
export default Footer;
