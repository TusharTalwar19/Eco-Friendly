import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { Container, Row, Col, Button, Card, Image } from "react-bootstrap";
import { CartContext } from "./CartContext"; 
import TopPicks from "./TopPicks";
import Gallery from "./Gallery"
import Achive from "./Achive";
import Feed from "./Feed";

const Home = () => {
  const { addToCart } = useContext(CartContext);

  const cardData = [
    {
      img: "5.jpg",
      title: "Natural Spring Water",
      volume: "330ml Pack of 4",
      price: "₹30",
      desc: "Crystal Clear And Safe to Drink.",
    },
    {
      img: "16.jpg",
      title: "Bamboo ToothBrush",
      volume: "Pack Of 6",
      price: "₹25",
      desc: "Extra Soft Bristle Toothbrushes",
    },
    {
      img: "3.jpg",
      title: "Clay Water Bottle",
      volume: "1L",
      price: "₹20",
      desc: "Hand Made Using a Special Mixture Of 100% Natural Clay.",
    },
  ]

  return (
    <Container fluid className="py-5 px-4 bg-light">
      <Row className="align-items-center mb-5">
        <Col lg={7}>
          <h1 className="fw-bold display-5">
            Our Environmentally <span className="text-success">🌿</span> Conscious <br />
            Home Product <span className="text-success">Solutions</span> aim to <br />
            Minimize Plastic Waste
          </h1>
        </Col>
        <Col lg={5}>
          <Card className="p-3 border-0 shadow-sm">
            <h4 className="text-success fw-bold">10,000</h4>
            <p className="mb-2">
              People Who Have Already Planted a Tree And Are Helping Us Save The Earth. Where's Your Tree?
            </p>
            <Link to="/Campaign">
            <Button variant="success" className="rounded-pill">
              Preserve The Earth Now
            </Button>
            </Link>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Image
            src="/images/1.jpg"
            alt="Boxed Water"
            fluid
            rounded
            style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row className="g-3 px-3">
        {cardData.map((item, idx) => (
          <Col key={idx} xs={12} sm={6} md={4}>
            <Card className="border-0 shadow-sm h-100" style={{ borderRadius: "20px" }}>
              <Row className="g-0 align-items-center h-100">
                <Col xs={4}>
                  <Image src={`/images/${item.img}`} alt={item.title} fluid rounded />
                </Col>
                <Col xs={8}>
                  <Card.Body>
                    <Card.Title className="fw-bold mb-1">{item.title}</Card.Title>
                    <Card.Text className="mb-1">{item.volume}</Card.Text>
                    <Card.Text className="text-muted" style={{ fontSize: "0.9rem" }}>{item.desc}</Card.Text>
                    <h5 className="text-success fw-bold">{item.price}</h5>
                    {/* <Button variant="success" size="lg" className="mt-2 rounded-pill">
                      Get this now
                    </Button> */}
                    <Button
                      variant="outline-success"
                      size="lg"
                      className="mt-2 rounded-pill"
                      onClick={() => addToCart(item)} 
                    >
                      🛒 Add to Cart
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>


      <TopPicks />
      <Gallery />
      {/* <Achive /> */}
      <Feed />
    </Container>
  );
};
export default Home;
