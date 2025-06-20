import React, { useContext, useState } from 'react';
import { Container, Table, Button, Form, Alert } from 'react-bootstrap';
import { CartContext } from './CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Cart.css'; 

const CartDetails = () => {
    const { cartItems, updateQuantityByIndex, removeFromCartByIndex } = useContext(CartContext);
    const [customerName, setCustomerName] = useState("");
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) =>
        acc + parseFloat(item.price.replace("₹", "")) * item.quantity, 0
    );

    const handleQuantityChange = (idx, value) => updateQuantityByIndex(idx, parseInt(value));
    const handleRemove = (idx) => removeFromCartByIndex(idx);

    const handlePayment = async () => {
        try {
            const res = await axios.post("http://localhost:4000/api/orders", {
                customerName, cartItems, totalAmount: subtotal
            });
            navigate(`/order-receipt/${res.data.orderId}`);
        } catch (err) {
            console.error(err);
        }
    };

    const wrapperStyle = {
        backgroundImage: 'url("/images/E1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 0'
    };

    return (
        <div style={wrapperStyle}>
            <Container className="cart-container p-4 rounded shadow">
                <h2 className="fw-bold mb-4 text-center text-light">Your Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <Alert variant="info">Your cart is empty</Alert>
                ) : (
                    <>
                        <Table bordered hover responsive className="shadow-sm rounded">
                            <thead className='text-light'>
                                <tr><th className='text-dark'>Product</th>
                                <th className='text-dark'>Quantity</th>
                                <th className='text-light'>Price (₹)</th>
                                <th className='text-light'>Subtotal (₹)</th>
                                <th className='text-light'>Action</th></tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item, idx) => (
                                    <tr key={idx}>
                                        <td>{item.title}</td>
                                        <td>
                                            <Form.Control
                                                type="number"
                                                min="1"
                                                value={item.quantity}
                                                onChange={e => handleQuantityChange(idx, e.target.value)}
                                            />
                                        </td>
                                        <td className='text-white'>{item.price.replace("₹", "")}</td>
                                        <td className='text-white'>{(parseFloat(item.price.replace("₹", "")) * item.quantity).toFixed(2)}</td>
                                        <td><Button variant="danger" onClick={() => handleRemove(idx)}>Delete</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="text-end fw-bold fs-5 mb-3 text-white">Total: ₹{subtotal.toFixed(2)}</div>
                        <Form.Group className="mb-3">
                            <Form.Label >Enter Your Name for Order</Form.Label>
                            <Form.Control type="text" value={customerName} onChange={e => setCustomerName(e.target.value)} />
                        </Form.Group>
                        <Button variant="success" size="lg" onClick={handlePayment}>Proceed to Payment</Button>
                    </>
                )}
            </Container>
        </div>
    );
};

export default CartDetails;
