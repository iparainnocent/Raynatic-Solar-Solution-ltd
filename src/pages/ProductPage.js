import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useCart } from "../context/CartContext";

// Import all product images from your assets directory
import inverter2 from "../assets/inverter 2.jpg";
import inverter3 from "../assets/inverter 3.jpg";
import inverter55kw from "../assets/inverter 5.5kw.jpeg";

import panel440 from "../assets/solar panel 440w.jpeg";
import panel550 from "../assets/solar panel 550w.jpg";
import panel580 from "../assets/solar panel 580w.jpeg";
import panel590 from "../assets/solar panel 590w.jpeg";

import battery1 from "../assets/battery 1.jpeg";
import battery2 from "../assets/battery 2.jpg";
import lithiumBattery from "../assets/lithium battery.jpg";
import battery512 from "../assets/battery 5.12kw.jpeg";

import floodLight from "../assets/flood light.jpg";
import floodLight3000 from "../assets/flood light 3000w.jpg";
import solarFloodLight from "../assets/Solar flood light.jpg";

import solarPump2 from "../assets/solar pump 2inch.jpg";
import solarPump3 from "../assets/solar pump 3inch.jpg";
import hybridPump from "../assets/hybrid solar pump.jpeg";

import solarFridge from "../assets/solar fridge.jpg";

import waterHeater1 from "../assets/solar water heater 1.jpeg";
import waterHeater2 from "../assets/solar water heater 2.jpeg";

const products = [
  { id: 1, name: "5.5kW Solar Inverter", image: inverter55kw, price: 49500 },
  { id: 2, name: "Hybrid Solar Inverter", image: inverter2, price: 64350 },
  { id: 3, name: "Solar Inverter", image: inverter3, price: 56000 },
  { id: 4, name: "440W Solar Panel", image: panel440, price: 8360 },
  { id: 5, name: "550W Solar Panel", image: panel550, price: 10450 },
  { id: 6, name: "580W Solar Panel", image: panel580, price: 11020 },
  { id: 7, name: "590W Solar Panel", image: panel590, price: 11210 },
  {
    id: 8,
    name: "5kw hour complete system",
    image: lithiumBattery,
    price: 173000,
  },
  {
    id: 9,
    name: "5.12kW Lithium Battery 6,000cycle 10yrs warrant",
    image: battery512,
    price: 125000,
  },
  { id: 10, name: "Solar Battery", image: battery1, price: 28000 },
  {
    id: 11,
    name: "10kw lithium battery 7yrs warrant",
    image: battery2,
    price: 198000,
  },
  { id: 12, name: "Solar Flood Light", image: solarFloodLight, price: 7500 },
  {
    id: 13,
    name: " Solar Flood Light 200w 3yrs warrant",
    image: floodLight,
    price: 6500,
  },
  { id: 14, name: "3000W Flood Light", image: floodLight3000, price: 25000 },
  { id: 15, name: "Solar Pump 2 inch", image: solarPump2, price: 39000 },
  { id: 16, name: "Solar Pump 3 inch", image: solarPump3, price: 44000 },
  { id: 17, name: "Hybrid Solar water Pump", image: hybridPump, price: 44000 },
  { id: 18, name: "Solar Fridge", image: solarFridge, price: 55000 },
  { id: 19, name: "Solar Water Heater 200L low pressure", image: waterHeater1, price: 95000 },
  {
    id: 20,
    name: "Solar Water Heater System 300 flatplate high pressure",
    image: waterHeater2,
    price: 155000,
  },
];

const ProductPage = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString("en-KE", { style: "currency", currency: "KES" });
  };

  const isProductInCart = (productId) =>
    cart.some((item) => item.id === productId);
  const getProductQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity || 0;

  return (
    <div className="products-page">
      <header className="products-header" data-aos="fade-in">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Our Products</h1>
          <p>Explore our range of high-quality solar and security products.</p>
        </div>
      </header>

      <div className="cart-container">
        <button
          className="cart-icon-btn"
          onClick={() => setIsCartVisible(!isCartVisible)}
        >
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cart.length}</span>
        </button>
      </div>

      <section className="products-grid-section">
        <div className="products-container">
          {products.map((product, index) => (
            <div
              className="product-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-content">
                <h3>{product.name}</h3>
                <span className="product-price">
                  KSh {product.price.toLocaleString()}
                </span>
                <div className="product-actions">
                  {isProductInCart(product.id) ? (
                    <div className="quantity-controls">
                      <button onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>
                      <span>{getProductQuantity(product.id)}</span>
                      <button onClick={() => increaseQuantity(product.id)}>
                        +
                      </button>
                      <button
                        className="remove-item-btn"
                        onClick={() => removeFromCart(product.id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-to-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                  <Link to="/contact" className="product-link">
                    Get a Quote <span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="products-cta" data-aos="zoom-in">
        <div className="products-cta-content">
          <h2>Need a Custom Solution?</h2>
          <p>
            Our experts can help you choose the right products for your specific
            needs.
          </p>
          <Link to="/contact" className="cta-btn-product">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Cart Sidebar */}
      <div className={isCartVisible ? "cart-sidebar visible" : "cart-sidebar"}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button
            className="close-cart-btn"
            onClick={() => setIsCartVisible(false)}
          >
            &times;
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>Price: KSh {item.price.toLocaleString()}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  &times;
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <h3>Total: {calculateTotal()}</h3>
          {cart.length > 0 && (
            <>
              <Link
                to="/checkout"
                className="checkout-btn"
                onClick={() => setIsCartVisible(false)}
              >
                Proceed to Checkout
              </Link>

              {/* WhatsApp Order Button */}
              <button
                className="whatsapp-btn"
                onClick={() => {
                  const orderDetails = cart
                    .map((item) => `${item.name} x ${item.quantity}`)
                    .join(", ");
                  const message = `Hello, I would like to place an order: ${orderDetails}. Total: ${calculateTotal()}.`;
                  const encodedMessage = encodeURIComponent(message);
                  const whatsappNumber = "254711622650"; // Replace with your WhatsApp number
                  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                  window.open(whatsappLink, "_blank");
                }}
              >
                Order via WhatsApp
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
