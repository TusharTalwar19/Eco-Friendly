import React, { useState, useRef } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";
import "./AddProducts.css"; 

const AdminAddProduct = () => {
    const [form, setForm] = useState({ title: "", price: "" });
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.title || !form.price || !image) {
            alert("All fields are required.");
            return;
        }

        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("price", form.price);
        formData.append("image", image);

        try {
            const response = await axios.post(
                "http://localhost:4000/api/products",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            alert("Product added!");
            setForm({ title: "", price: "" });
            setImage(null);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (error) {
            console.error("Error uploading product:", error);
            alert("Failed to add product");
        }
    };

    return (
        <div className="bg-image">
            <Container className="py-5">
                <Card className="glass-card p-4 shadow-sm" style={{ maxWidth: 600, margin: "auto" }}>
                    <h3 className="text-center mb-4 text-dark">Add New Product</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Product Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                placeholder="Enter product title"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                placeholder="Enter price (e.g., ₹29.00)"
                            />
                        </Form.Group>

                        <Form.Group className="mb-4">
                            <Form.Label className="text-dark">Product Image</Form.Label>
                            <Form.Control
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                            />
                        </Form.Group>

                        <Button type="submit" variant="light" className="w-100">
                            Upload Product
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default AdminAddProduct;
