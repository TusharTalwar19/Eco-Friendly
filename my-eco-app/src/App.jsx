// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
// export default App

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import SignUp from './SignUp';
import AboutUs from './AboutUs';
import Product from './Product';
import Campaign from './Campaign';
import { CartProvider } from "./CartContext";
import Cart from "./Cart";
import OrderReceipt from "./OrderReceipt";
import MyOrders from "./MyOrders";
import AdminNavbar from "./Components/AdminNavbar";
import UserDetails from './Components/UserDetails';
import AddProducts from "./Components/AddProducts";
import CustomerOrder from "./Components/CustomerOrder";
import RequireAdmin from "./Components/RequireAdmin";
import AdminDashboard from './Components/AdminDashboard';

function App() {
  const [role, setRole] = useState("");

  return (
    <Router>
      <CartProvider>
        {role === "admin" ? (
          <AdminNavbar setRole={setRole} />
        ) : (
          <Navbar role={role} setRole={setRole} />
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/SignIn" element={<SignIn setRole={setRole} />} />
          <Route path="/SignUp" element={<SignUp setRole={setRole} />} />
          <Route path="/AboutUs" element={<AboutUs setRole={setRole} />} />
          <Route path="/Product" element={<Product setRole={setRole} />} />
          <Route path="/Campaign" element={<Campaign setRole={setRole} />} />
          <Route path="/Cart" element={<Cart setRole={setRole} />} />
          <Route path="/order-receipt/:id" element={<OrderReceipt />} />
          <Route path="/MyOrders" element={<MyOrders setRole={setRole} />} />          
          <Route path="/AddProducts" element={<RequireAdmin role={role}><AddProducts setRole={setRole} /> </RequireAdmin>} />
          <Route path="/UserDetails" element={<RequireAdmin role={role}><UserDetails setRole={setRole} /></RequireAdmin>} />
          <Route path="/CustomerOrder" element={<RequireAdmin role={role}><CustomerOrder setRole={setRole} /></RequireAdmin>} />
          <Route path="/Admin" element={<RequireAdmin role={role}>  <AdminDashboard setRole={setRole} /></RequireAdmin>} />
          <Route path="/AdminNavbar" element={<AdminNavbar setRole={setRole} />} />
          <Route path="/RequireAdmin" element={<RequireAdmin role={role} />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}
export default App;
