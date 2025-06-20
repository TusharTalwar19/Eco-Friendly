import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const TopPicks = () => {
    const { addToCart } = useContext(CartContext);

    const topPicksData = [
        {
            img: "20.webp",
            title: "Purified Water 250ml",
            price: "₹10"
        },
        {
            img: "23.webp",
            title: "Vegan Dish Block",
            price: "₹20"
        },
        {
            img: "21.webp",
            title: "Stain Remover Stick – 1.76oz",
            price: "₹15"
        },
    ];

    return (
        <Container className="text-center my-5">
            <p className="text-success fw-bold"><h2>EXPLORE OUR TOP PICKS</h2></p>
            <h4 className="fw-semibold mb-5">
                The Best EarthFriendly Products That Have High User Satisfaction.
            </h4>

            <Row className="justify-content-center g-4">
                {topPicksData.map((item, idx) => (
                    <Col key={idx} xs={12} md={4}>
                        <Card className="border-0 shadow-sm rounded-4">
                            <Card.Img
                                variant="top"
                                src={`/images/${item.img}`}
                                alt={item.title}
                                className="rounded-top-4"
                                style={{ height: '250px', objectFit: 'cover' }}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <h5 className="text-success fw-bold">{item.price}</h5>
                                <Button
                                    variant="outline-success"
                                    className="rounded-pill mt-2"
                                    onClick={() => addToCart(item)}
                                >
                                    🛒 Add to Cart
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default TopPicks;
