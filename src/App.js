import React from "react";
import { Routes, Route } from "react-router-dom"; // ✅ No Router here
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import ContactPage from "./pages/ContactPage";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard";
import AdminMessages from "./pages/AdminMessages";
import BookingPage from "./pages/BookingPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/booking" element={<BookingPage />} />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/messages"
            element={
              <ProtectedRoute>
                <AdminMessages />
              </ProtectedRoute>
            }
          />

          {/* Catch-all */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
