import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import { useCart } from "../context/CartContext"; // Ensure your CartProvider wraps App.js

const shippingFee = 1000; // Example fixed shipping fee

const CheckoutPage = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    paymentMethod: "mpesa", // Default payment method
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Calculate subtotal and total
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const total = subtotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty. Please add items before placing an order.");
      return;
    }

    // Prepare order details
    const orderDetails = cart
      .map((item) => `${item.name} x ${item.quantity}`)
      .join(", ");

    const message = `Hello, my name is ${formData.fullName}.
I want to place an order: ${orderDetails}.
Shipping Address: ${formData.address}, ${formData.city}, ${formData.country}.
Phone: ${formData.phone}.
Email: ${formData.email}.
Payment Method: ${formData.paymentMethod}.
Total: KSh ${total.toLocaleString()}`;

    const encodedMessage = encodeURIComponent(message);

    // Replace with business WhatsApp number in international format
    const whatsappNumber = "254711622650";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");

    // Optionally clear the cart after sending
    clearCart();
  };

  return (
    <>
      <style>
        {`
          /* CheckoutPage styling */
          .checkout-page-container { padding-top: 80px; background-color: #f7f9fc; min-height: 100vh; display: flex; flex-direction: column; }
          .checkout-header { text-align: center; padding: 60px 20px 40px; background-color: #e0e8f0; color: #0d1223; }
          .checkout-header h1 { font-size: 3rem; font-weight: 700; margin-bottom: 10px; }
          .checkout-header p { font-size: 1.2rem; max-width: 700px; margin: 0 auto; }
          .checkout-main-content { display: flex; flex-direction: column; gap: 40px; padding: 40px 20px; max-width: 1200px; margin: 0 auto; flex-grow:1; }
          @media (min-width:992px) { .checkout-main-content { flex-direction: row; justify-content: space-between; align-items: flex-start; } }
          .shipping-info-section, .order-summary-section { border-radius: 12px; padding: 40px; }
          .shipping-info-section { background-color: white; box-shadow:0 10px 30px rgba(0,0,0,0.08); flex:2; }
          .order-summary-section { background-color:#e0e8f0; box-shadow:0 10px 30px rgba(0,0,0,0.05); flex:1; }
          h2 { font-size: 2rem; font-weight:600; color:#1f2937; margin-bottom:2rem; border-bottom:2px solid #ff9100; padding-bottom:1rem; text-align:center; }
          .checkout-form { display:flex; flex-direction:column; gap:1.5rem; }
          .form-group { display:flex; flex-direction:column; }
          .form-group label { font-size:1rem; font-weight:500; color:#374151; margin-bottom:0.5rem; }
          .form-group input, .form-group select { padding:12px 15px; border:1px solid #d1d5db; border-radius:8px; font-size:1rem; color:#374151; transition:border-color 0.3s ease, box-shadow 0.3s ease; width:100%; }
          .form-group input:focus, .form-group select:focus { outline:none; border-color:#ff9100; box-shadow:0 0 0 3px rgba(255,145,0,0.25); }
          .place-order-btn { background-color:#0d1223; color:white; padding:15px 25px; border:none; border-radius:8px; font-size:1.1rem; font-weight:600; cursor:pointer; transition:background-color 0.3s ease, transform 0.3s ease; margin-top:1.5rem; box-shadow:0 4px 10px rgba(13,18,35,0.2); }
          .place-order-btn:hover { background-color:#ff9100; transform:translateY(-2px); box-shadow:0 6px 15px rgba(255,145,0,0.3); }
          .order-items { margin-bottom:2rem; }
          .order-item { display:flex; justify-content:space-between; align-items:center; padding:15px 0; border-bottom:1px dashed #ccc; }
          .order-item:last-child { border-bottom:none; }
          .item-details h4 { margin:0 0 5px 0; font-size:1.1rem; color:#333; }
          .quantity-controls { display:flex; align-items:center; background-color:#f7f9fc; border-radius:5px; padding:3px; }
          .quantity-controls button { background-color:#fff; border:1px solid #ddd; padding:5px 10px; font-size:0.9rem; cursor:pointer; border-radius:5px; transition: background-color 0.2s ease; }
          .quantity-controls button:hover { background-color:#eee; }
          .quantity-controls span { padding:0 10px; font-size:1rem; font-weight:600; color:#0d1223; }
          .item-actions { display:flex; align-items:center; gap:10px; }
          .item-price { font-size:1.1rem; font-weight:600; color:#0d1223; }
          .remove-item-btn { background:none; border:none; color:#e74c3c; font-size:1.5rem; cursor:pointer; transition: color 0.2s ease; }
          .remove-item-btn:hover { color:#c0392b; }
          .order-totals div { display:flex; justify-content:space-between; margin-bottom:10px; font-size:1.1rem; color:#4a5568; }
          .order-totals .total { font-size:1.5rem; font-weight:700; color:#0d1223; margin-top:20px; padding-top:15px; border-top:1px dashed #aaa; }
          .continue-shopping-btn { display:inline-block; margin-top:30px; font-weight:500; color:#007bff; text-decoration:none; transition:all 0.3s ease; padding:8px 15px; border-radius:5px; background-color:#e2e8f0; }
          .continue-shopping-btn:hover { color:#0056b3; background-color:#d1d9e6; transform:translateX(-5px); }
          @media (max-width:768px) { .checkout-header h1{font-size:2.5rem;} .checkout-header p{font-size:1rem;} .checkout-main-content{padding:20px 15px; gap:30px;} .shipping-info-section,.order-summary-section{padding:25px;} .order-item{flex-direction:column; align-items:flex-start; gap:10px;} .item-details,.item-actions{width:100%;} .item-actions{justify-content:space-between;} }
        `}
      </style>

      <div className="checkout-page-container">
        <header className="checkout-header" data-aos="fade-in">
          <h1>Complete Your Order</h1>
          <p>
            Review your items and provide your shipping details to finalize your
            purchase.
          </p>
        </header>

        <main className="checkout-main-content">
          <section className="shipping-info-section" data-aos="fade-right">
            <h2>Shipping Information</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Shipping Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  required
                >
                  <option value="mpesa">M-Pesa</option>
                  <option value="credit_card">Credit Card (Coming Soon)</option>
                  <option value="bank_transfer">
                    Bank Transfer (Coming Soon)
                  </option>
                </select>
              </div>
              <button type="submit" className="place-order-btn">
                Place Order via WhatsApp
              </button>
            </form>
          </section>

          <section className="order-summary-section" data-aos="fade-left">
            <h2>Order Summary</h2>
            <div className="order-items">
              {cart.length === 0 ? (
                <p style={{ textAlign: "center", color: "#666" }}>
                  Your cart is empty.
                </p>
              ) : (
                cart.map((item) => (
                  <div className="order-item" key={item.id}>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <div className="quantity-controls">
                        <button onClick={() => decreaseQuantity(item.id)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>
                          +
                        </button>
                      </div>
                    </div>
                    <div className="item-actions">
                      <span className="item-price">
                        KSh {(item.price * item.quantity).toLocaleString()}
                      </span>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="order-totals">
              <div className="subtotal">
                <span>Subtotal:</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="shipping">
                <span>Shipping:</span>
                <span>KSh {shippingFee.toLocaleString()}</span>
              </div>
              <div className="total">
                <span>Total:</span>
                <span>KSh {total.toLocaleString()}</span>
              </div>
            </div>
            <Link to="/products" className="continue-shopping-btn">
              ← Continue Shopping
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default CheckoutPage;
