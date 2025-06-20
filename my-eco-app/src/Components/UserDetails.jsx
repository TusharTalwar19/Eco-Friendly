import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  Table,
  Button,
  Spinner,
  Modal,
  Form,
} from "react-bootstrap";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    Name: "",
    EmailId: "",
    Password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    axios
      .get("http://localhost:4000/user")
      .then((response) => {
        setUsers(response.data.user);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`http://localhost:4000/user/${id}`)
        .then(() => {
          setUsers((prev) => prev.filter((u) => u.id !== id));
        })
        .catch((error) => {
          console.error("Error deleting user:", error);
          alert("Failed to delete user");
        });
    }
  };

  const openUpdateModal = (user) => {
    setCurrentUser(user);
    setFormData({
      Name: user.Name,
      EmailId: user.EmailId,
      Password: user.Password,
    });
    setShowModal(true);
  };

  const handleModalChange = (e) => {
    const { name, value } = e.target;
    setFormData((f) => ({ ...f, [name]: value }));
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:4000/user/${currentUser.id}`, formData)
      .then(() => {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === currentUser.id ? { ...u, ...formData } : u
          )
        );
        setShowModal(false);
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Failed to update user");
      });
  };

  return (
    <div
    style={{
        backgroundImage: "url('/images/L4.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",  
        backgroundPosition: "center",
        backgroundColor: "#000",     
        minHeight: "100vh",
        padding: "50px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
    }}
>

      <Container
        style={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          borderRadius: "16px",
          padding: "30px",
          // backdropFilter: "(16px)",
          border: "1px solid rgba(255, 255, 255, 0)",
          boxShadow: "0 4px 30px rgba(255, 255, 255, 0)",
          width: "100%",
          maxWidth: "1000px",
          color: "white",
        }}
      >
        <h2 className="mb-4 fw-bold text-center text-dark">User Details</h2>

        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="light" />
          </div>
        ) : (
          <Table striped bordered hover responsive variant className="bg-light text-dark rounded">
            <thead className="table-dark">
              <tr>
                <th>SlNo</th>
                <th>Name</th>
                <th>EmailId</th>
                <th>Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    No user found.
                  </td>
                </tr>
              ) : (
                users.map((user, idx) => (
                  <tr key={user.id}>
                    <td>{idx + 1}</td>
                    <td>{user.Name}</td>
                    <td>{user.EmailId}</td>
                    <td>{user.Password}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        className="me-2"
                        onClick={() => handleDelete(user.id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => openUpdateModal(user)}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
      </Container>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="Name"
                value={formData.Name}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>EmailId</Form.Label>
              <Form.Control
                name="EmailId"
                type="email"
                value={formData.EmailId}
                onChange={handleModalChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="Password"
                type="password"
                value={formData.Password}
                onChange={handleModalChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserDetails;
