import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./login";
import Register from "./register";
import Navbar from "./navbar";
import Product from "./product";
import { SidebarProvider } from "./sidebar";

function App() {
  return (
    <SidebarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Router>
    </SidebarProvider>
  );
}

export default App;