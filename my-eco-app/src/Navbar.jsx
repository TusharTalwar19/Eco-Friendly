import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";
function Navbar({ role, setRole }) {
  const handleLogout = () => {
    setRole(""); 
  };

  return (
    <BSNavbar bg="light" expand="lg" className="mb-3">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <BSNavbar.Brand as={Link} to="/" className="fw-bold text-success">
          🌿 Eco Friendly
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link as={Link} to="/" className="fw-bold">Home</Nav.Link>
            <Nav.Link as={Link} to="/AboutUs" className="fw-bold">About Us</Nav.Link>
            <Nav.Link as={Link} to="/Product" className="fw-bold">Product</Nav.Link>
            <Nav.Link as={Link} to="/Campaign" className="fw-bold">Campaign</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>

        <div className="d-flex align-items-center">
          {role === "user" && (
            <>
              <Link to="/Cart" className="me-2">
                <button className="btn btn-outline-success fw-bold">
                  🛒 Cart
                </button>
              </Link>
            </>
          )}

          <Link to="/ContactUs" className="me-2">
            <Button variant="outline-success" className="fw-bold">Contact Us</Button>
          </Link>

          {role ? (
            <Button variant="outline-success" className="fw-bold" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link to="/SignIn">
              <Button variant="outline-success" className="fw-bold">Sign In</Button>
            </Link>
          )}
        </div>
      </Container>
    </BSNavbar>
  );
}
export default Navbar;