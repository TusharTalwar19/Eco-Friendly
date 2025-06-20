import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BSNavbar, Nav, Container, Button } from "react-bootstrap";

function AdminNavbar({ setRole }) {
  const handleLogout = () => {
    setRole("");
  };

  return (
    <BSNavbar bg="light" variant="light" expand="lg" className="mb-3">
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/Admin" className="fw-bold text-success">
          🛠️ Admin Panel
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="d-flex gap-5">
            <Nav.Link as={Link} to="/AddProducts" className="fw-bold px-3">
              Add Products
            </Nav.Link>
            <Nav.Link as={Link} to="/UserDetails" className="fw-bold px-3">
              User Details
            </Nav.Link>
            <Nav.Link as={Link} to="/CustomerOrder" className="fw-bold px-3">
              CustomerOrder
            </Nav.Link>
          </Nav>
        </BSNavbar.Collapse>

        <div className="ms-auto">
          <Button variant="outline-success" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Container>
    </BSNavbar >
  );
}

export default AdminNavbar;

