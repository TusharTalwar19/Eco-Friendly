// // import React from "react";
// // import { Container, Form, Button } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // const SignIn = () => (
// //   <Container className="py-5" style={{ maxWidth: 500 }}>
// //     <h1 className="mb-4">Sign In</h1>
// //     <Form>
// //       <Form.Group className="mb-3">
// //         <Form.Label>Email address</Form.Label>
// //         <Form.Control type="email" placeholder="Enter email" />
// //       </Form.Group>
// //       <Form.Group className="mb-3">
// //         <Form.Label>Password</Form.Label>
// //         <Form.Control type="password" placeholder="Password" />
// //       </Form.Group>
// //       <Button variant="success" type="submit" className="w-100">
// //         Create account
// //       </Button>
// //       <h5><Link to='/SignUp'>New User? SignUp</Link></h5>
// //     </Form>
// //   </Container>
// // );
// // export default SignIn;

import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Container, Form, Button, Card, ButtonGroup, ToggleButton } from "react-bootstrap";

function SignIn({ setRole }) {
  const [EmailId, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("user");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const endpoint = selectedRole === "admin" ? "/Admin" : "/SignIn";

    try {
      const response = await axios.post(`http://localhost:4000${endpoint}`, {
        EmailId,
        Password,
      });

      if (response.status === 200 && response.data.success) {
        setRole(selectedRole);
        alert("Login successful");

        if (selectedRole === "admin") {
          navigate("/Admin");
        } else {
          navigate("/Product");
        }
      }
    } catch (error) {
      alert("Login failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url('/images/L2.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container className="d-flex justify-content-center">
        <Card
          className="p-4 shadow-lg"
          style={{
            width: "400px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
            color: "#fff",
          }}
        >
          <h3 className="text-center mb-4">Sign In</h3>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3">
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                type="email"
                value={EmailId}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Role</Form.Label>
              <ButtonGroup className="d-flex">
                <ToggleButton
                  id="user-role"
                  type="radio"
                  variant="outline-light"
                  name="role"
                  value="user"
                  checked={selectedRole === "user"}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  User
                </ToggleButton>
                <ToggleButton
                  id="admin-role"
                  type="radio"
                  variant="outline-light"
                  name="role"
                  value="admin"
                  checked={selectedRole === "admin"}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  Admin
                </ToggleButton>
              </ButtonGroup>
            </Form.Group>

            <Button variant="light" type="submit" className="w-100 text-dark">
              Sign In
            </Button>

            <div className="text-center mt-3">
              <span>New User? </span>
              <Link to="/SignUp" className="text-light">Sign Up</Link>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default SignIn;
