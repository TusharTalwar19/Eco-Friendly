import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:4000/api/orders').then(res => {
            setOrders(res.data);
            setLoading(false);
        });
    }, []);


    if (loading) return <Spinner animation="border" />;

    return (
        <Container className="mt-5">
            <h2 className="fw-bold text-center mb-4">My Orders</h2>
            <Table bordered hover responsive className="shadow rounded">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Amount Paid</th>
                        <th>Order Date</th>
                        <th>View Receipt</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>₹{order.total_amount}</td>
                            <td>{new Date(order.order_date).toLocaleString()}</td>
                            <td>
                                <Link to={`/order-receipt/${order.id}`} className="btn btn-primary btn-sm">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrders;
