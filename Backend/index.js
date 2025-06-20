const express = require('express');
const app = express()
const db = require('./dbconfig.js');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const multer = require("multer");
const mysql = require("mysql2/promise");
const path = require("path");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const productRoutes = require('./Product');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const PORT = 4000;
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(productRoutes);

app.post("/SignIn", (req, res) => {
    const { EmailId, Password } = req.body;
    if (!EmailId || !Password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    const sql = "SELECT * FROM user WHERE EmailId = ? AND Password = ?";
    db.query(sql, [EmailId, Password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Database error", error: err });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        const user = results[0];
        return res.status(200).json({
            success: true,
            message: "Login successful",
            user,
        });
    });
});

app.get("/user", (req, res) => {
    const sql = "SELECT id, Name, EmailId, Password FROM user";

    db.query(sql, (err, results) => {
        if (err) {
            console.error("Error fetching user:", err);
            return res.status(500).json({ message: "Server error", error: err });
        }

        res.status(200).json({ user: results });
    });
});

app.delete("/user/:id", (req, res) => {
    const Id = req.params.id;
    const sql = "DELETE FROM user WHERE id = ?";

    db.query(sql, [Id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Failed to delete user", error: err });
        }
        res.status(200).json({ message: "User deleted successfully" });
    });
});

app.put('/user/:id', (req, res) => {
    const id = req.params.id;
    const { Name, EmailId, Password } = req.body;
    if (!Name || !EmailId || !Password) {
        return res.status(400).json({ message: 'All fields required' });
    }
    const query = "UPDATE user SET Name = ?, EmailId = ?, Password = ? WHERE id = ?";
    db.query(query, [Name, EmailId, Password, id], (err, result) => {
        if (err) {
            console.error("DB Error:", err);
            return res.status(500).json({ message: "Database error" });
        }
        res.json({ message: "User updated successfully" });
    });
});

app.get("/City", (req, res) => {
    let displaycity = "select * from city";
    db.query(displaycity, (err, result) => {
        if (err) console.log(err);
        else {
            console.log(result);
            res.status(200).json({ data: result })
        }
    })
})

app.post("/SignUp", async (req, res) => {
    const { Name, City, Phoneno, EmailId, Password } = req.body;

    if (!Name || !City || !Phoneno || !EmailId || !Password) {
        return res.status(400).json({ error: "All fields are required" });
    }
    try {
        const sql = "INSERT INTO User (Name, CityId, Phoneno, EmailId, Password) VALUES (?, ?, ?, ?, ?)";
        await db.execute(sql, [Name, City, Phoneno, EmailId, Password]);
        res.status(200).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Failed to register user" });
    }
});

app.post("/Admin", (req, res) => {
    const { EmailId, Password } = req.body;

    if (!EmailId || !Password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }
    const sql = "SELECT * FROM admin WHERE EmailId = ? AND Password = ?";
    db.query(sql, [EmailId, Password], (err, results) => {
        if (err) {
            console.error("Error:", err);
            return res.status(500).json({ message: "Internal server error" });
        }
        if (results.length > 0) {
            return res.status(200).json({ success: true });
        } else {
            return res.status(401).json({ message: "Invalid admin credentials" });
        }
    });
});

app.post('/api/orders', (req, res) => {
    const { customerName, cartItems, totalAmount } = req.body;

    db.query('INSERT INTO orders (customer_name, total_amount) VALUES (?, ?)',
        [customerName, totalAmount],
        (err, orderResult) => {
            if (err) return res.status(500).json({ error: err });

            const orderId = orderResult.insertId;
            const orderItems = cartItems.map(item => [orderId, item.title, item.price.replace("₹", ""), item.quantity]);

            db.query('INSERT INTO order_items (order_id, product_name, product_price, quantity) VALUES ?',
                [orderItems],
                (err2) => {
                    if (err2) return res.status(500).json({ error: err2 });

                    res.json({ success: true, orderId });
                });
        });
});

app.get('/api/orders', (req, res) => {
    db.query('SELECT * FROM orders', (err, orders) => {
        if (err) return res.status(500).json({ error: err });

        res.json(orders);
    });
});

app.get('/api/orders/:id', (req, res) => {
    const orderId = req.params.id;
    db.query(
        'SELECT * FROM order_items WHERE order_id = ?',
        [orderId],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Server error' });
            }
            res.json(result);
        }
    );
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });
app.post('/products', upload.single('image'), async (req, res) => {
    try {
        const { title, price } = req.body;
        const image = req.file.filename;
        await db.query('INSERT INTO products (title, price, image) VALUES (?, ?, ?)', [title, price, image]);
        res.status(200).json({ message: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to add product' });
    }
});

app.get("/ping", (req, res) => {
    res.send("Server is running");
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
