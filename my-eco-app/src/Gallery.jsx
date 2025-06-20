import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const images = [
  {
    src: "/images/Bamboo.webp",
    alt: "Bamboo Toothbrushes",
    description: "Set of biodegradable bamboo toothbrushes with soft bristles.",
  },
  {
    src: "/images/Tote1.jpg",
    alt: "Tote Bag",
    description: "There’s more to this tote than meets the eye; every item tells a story of adventures and dreams..",
  },
  {
    src: "/images/Pbag.jpeg",
    alt: "Package Bag/Product Bag",
    description: "Consumers believe compostable packaging is the most sustainable option..",
  },
  {
    src: "/images/Wooden.jpg",
    alt: "Wooden Cutlery",
    description: "Eco-friendly cutlery set made from sustainable wood.",
  },
  {
    src: "/images/Seed.jpg",
    alt: "Seed Paper",
    description: "In every walk with nature, one receives far more than he seeks",
  },
  {
    src: "/images/Shampoo.webp",
    alt: "Natural Shampoo Bottles",
    description: "Organic shampoo in recyclable packaging, free of parabens and sulfates.",
  }
];

const Gallery = () => {
  return (
    <Container className="my-5 text-center">
      <h2 className="text-success fw-bold mb-4">GALLERY OF OUR PRODUCT</h2>
      <Row className="g-4 justify-content-center">
        {images.map((img, idx) => (
          <Col key={idx} xs={12} sm={6} md={4}>
            <div
              className="rounded-4 overflow-hidden mb-2"
              style={{ clipPath: "ellipse(95% 80% at 50% 50%)" }}
            >
              <Image src={img.src} alt={img.alt} fluid />
            </div>
            <h5 className="fw-semibold">{img.alt}</h5>
            <p className="text-muted">{img.description}</p>
            {/* <p className="text-success fw-bold">${img.price.toFixed(2)}</p> */}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
