// RequireAdmin.js
import React from "react";
import { Navigate } from "react-router-dom";

const RequireAdmin = ({ role, children }) => {
  if (role !== "admin") {
    alert("Access denied. Admins only.");
    return <Navigate to="/SignIn" replace />;
  }
  return children;
};

export default RequireAdmin;
