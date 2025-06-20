import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderReceipt = () => {
  const { id: orderId } = useParams(); 
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      axios.get(`http://localhost:4000/api/orders/${orderId}`)
        .then(res => {
          setOrderItems(res.data);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching order:", error);
          setLoading(false);
        });
    } else {
      console.error("Order ID is undefined");
      setLoading(false);
    }
  }, [orderId]);

  const totalAmount = orderItems.reduce((total, item) => total + item.product_price * item.quantity, 0);

  if (loading) return <Spinner animation="border" />;

  return (
    <Container className="mt-5">
      <h2 className="fw-bold text-center mb-4">Order Receipt</h2>
      {orderItems.length === 0 ? (
        <Alert variant="info">No items found for this order.</Alert>
      ) : (
        <>
          <Table bordered className="shadow">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Subtotal (₹)</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.product_name}</td>
                  <td>{item.product_price}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.product_price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="text-end fw-bold fs-4">Total Paid: ₹{totalAmount.toFixed(2)}</div>
        </>
      )}
    </Container>
  );
};

export default OrderReceipt;
