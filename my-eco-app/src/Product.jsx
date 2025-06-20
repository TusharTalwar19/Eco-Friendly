import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { CartContext } from "./CartContext";

const giftData = [
    { img: "T1.webp", title: "Bamboo ToothBrush", price: "₹29.00" },
    { img: "T2.webp", title: "Straws", price: "₹27.00" },
    { img: "T14.jpg", title: "Boxed Water", price: "₹24.00" },
    { img: "T4.jpg", title: "Seed Paper", price: "₹29.00" },
    { img: "T5.webp", title: "Tote Bag", price: "₹27.00" },
    { img: "T13.jpg", title: "Biodegradable Plant Pots", price: "₹24.00" },
    { img: "T6.jpg", title: "Package Bag", price: "₹29.00" },
    { img: "T7.jpg", title: "Wooden Cultery", price: "₹27.00" },
    { img: "T8.avif", title: "Shampoo Wooden Bottle", price: "₹24.00" },
    { img: "T9.jpg", title: "Stain Remover", price: "₹29.00" },
    { img: "T10.webp", title: "Vegan Dish Block", price: "₹27.00" },
    { img: "T12.jpg", title: "Clay Water Bottle", price: "₹24.00" },
];

const Product = () => {
    const { addToCart } = useContext(CartContext);
    return (
        <div
            style={{
                backgroundImage: `url('/images/T19.jpg')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                padding: '1rem 0',
            }}>
            <Container>
                <h2 className="text-center mb-4 fw-bold" style={{ color: "#1c1c3c" }}>
                    Featured Products
                </h2>
                <Row className="g-4">
                    {giftData.map((gift, idx) => (
                        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                            <Card className="border-0 shadow-sm rounded-4 text-center">
                                <Card.Img
                                    variant="top"
                                    src={`/images/${gift.img}`}
                                    style={{
                                        height: "200px",
                                        objectFit: "auto",
                                        borderTopLeftRadius: "1rem",
                                        borderTopRightRadius: "1rem",
                                    }} />
                                <Card.Body>
                                    <Card.Title className="mb-1 fw-semibold">{gift.title}</Card.Title>
                                    <div className="text-warning mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                    </div>
                                    <h6 className="fw-bold mb-3">{gift.price}</h6>
                                    <Button
                                        variant="outline-success"
                                        className="rounded-pill"
                                        onClick={() => addToCart(gift)}>
                                        🛒 Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};
export default Product;