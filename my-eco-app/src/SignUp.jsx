import React, { useEffect, useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

function SignUp() {
    const [formData, setFormData] = useState({
        Name: "",
        City: "",
        Phoneno: "",
        EmailId: "",
        Password: ""
    });

    const [city, setCity] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/City")
            .then((res) => res.json())
            .then((data) => {
                setCity(data.data);
            })
            .catch((err) => console.error("Error fetching cities:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCityChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            City: parseInt(e.target.value)
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.Name || !formData.City || !formData.Phoneno || !formData.EmailId || !formData.Password) {
            alert("Please fill all the fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:4000/SignUp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            console.log(result);

            if (response.status === 200) {
                alert(result.message);
                setFormData({
                    Name: "",
                    City: "",
                    Phoneno: "",
                    EmailId: "",
                    Password: ""
                });
            } else {
                alert(result.error || "Something went wrong");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url('/images/L2.jpg')`, 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Container className="d-flex justify-content-center">
                <Card
                    className="p-4 shadow-lg"
                    style={{
                        width: "100%",
                        maxWidth: 500,
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        borderRadius: "20px",
                        color: "white",
                    }}
                >
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name="Name"
                                type="text"
                                placeholder="Enter Name"
                                value={formData.Name}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Select
                                value={formData.City}
                                onChange={handleCityChange}
                            >
                                <option value="">Select a city</option>
                                {city.map((data) => (
                                    <option key={data.Id} value={data.Id}>
                                        {data.CityName}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Phone No</Form.Label>
                            <Form.Control
                                name="Phoneno"
                                type="text"
                                placeholder="Phone Number"
                                value={formData.Phoneno}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                name="EmailId"
                                type="email"
                                placeholder="Enter email"
                                value={formData.EmailId}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                name="Password"
                                type="password"
                                placeholder="Password"
                                value={formData.Password}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="light" type="submit" className="w-100 text-dark">
                            Sign Up
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default SignUp;
