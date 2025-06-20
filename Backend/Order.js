const express = require('express');
const router = express.Router();
const db = require('./dbconfig');

router.post('/', (req, res) => {
    const { cartItems, totalAmount } = req.body;

    if (!cartItems || cartItems.length === 0 || !totalAmount) {
        return res.status(400).json({ success: false, message: "Invalid order data" });
    }

    const paymentId = 'PMT' + Date.now(); 

    const insertOrderQuery = 'INSERT INTO orders (payment_id, order_date, total_amount) VALUES (?, NOW(), ?)';

    db.query(insertOrderQuery, [paymentId, totalAmount], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Order insert failed' });

        const orderId = result.insertId;

        const orderItems = cartItems.map(item => [orderId, item.title, item.price, item.quantity]);
        const insertItemsQuery = 'INSERT INTO order_items (order_id, product_name, price, quantity) VALUES ?';

        db.query(insertItemsQuery, [orderItems], (err2) => {
            if (err2) return res.status(500).json({ success: false, message: 'Order items insert failed' });

            res.status(201).json({ success: true, orderId });
        });
    });
});

router.get('/:orderId', (req, res) => {
    const orderId = req.params.orderId;

    const getOrderQuery = `
        SELECT 
            o.id AS order_id,
            o.payment_id,
            o.total_amount,
            o.order_date,
            i.product_name,
            i.price,
            i.quantity
        FROM orders o
        JOIN order_items i ON o.id = i.order_id
        WHERE o.id = ?
    `;

    db.query(getOrderQuery, [orderId], (err, results) => {
        if (err) return res.status(500).json({ error: "Failed to fetch order" });
        if (results.length === 0) return res.status(404).json({ error: "Order not found" });

        const firstRow = results[0];
        const order = {
            orderId: firstRow.order_id,
            paymentId: firstRow.payment_id, 
            total: firstRow.total_amount,
            orderDate: firstRow.order_date,
            items: results.map(row => ({
                title: row.product_name,
                quantity: row.quantity,
                price: row.price
            }))
        };

        res.json(order);
    });
});

module.exports = router;