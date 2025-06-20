import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Container } from 'react-bootstrap';

const CustomerOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/api/orders')
            .then(res => setOrders(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div
            style={{
                backgroundImage: "url('/images/L3.jpg')",
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
                    // backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0)",
                    boxShadow: "0 8px 32px rgba(255, 252, 252, 0)",
                    width: "100%",
                    maxWidth: "1000px",
                    color: "#fff"
                }}
            >
                <h2 className="mb-4 fw-bold text-white">Customer Orders</h2>
                <Table striped bordered hover responsive variant className="bg-white text-dark rounded">
                    <thead className="table-dark">
                        <tr>
                            <th>Order ID</th>
                            <th>Customer Name</th>
                            <th>Total Amount</th>
                            <th>Order Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center">No orders found.</td>
                            </tr>
                        ) : (
                            orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.customer_name || 'N/A'}</td>
                                    <td>₹{order.total_amount}</td>
                                    <td>{new Date(order.order_date).toLocaleString()}</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default CustomerOrder;
