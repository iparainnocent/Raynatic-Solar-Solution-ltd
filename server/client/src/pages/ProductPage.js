import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ import useNavigate
import "./ProductPage.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useCart } from "../context/CartContext";

// Import all product images
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

const ProductPage = () => {
  const {
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const [isCartVisible, setIsCartVisible] = useState(false);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate(); // ✅ useNavigate hook

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://raynatic-solar-solution-ltd-4.onrender.com/api/products",
        );
        const data = await response.json();

        const mappedProducts = data.map((item) => {
          let image = null;

          switch (item.name) {
            case "5.5kW Solar Inverter":
              image = inverter55kw;
              break;
            case "Hybrid Solar Inverter":
              image = inverter2;
              break;
            case "Solar Inverter":
              image = inverter3;
              break;
            case "440W Solar Panel":
              image = panel440;
              break;
            case "550W Solar Panel":
              image = panel550;
              break;
            case "580W Solar Panel":
              image = panel580;
              break;
            case "590W Solar Panel":
              image = panel590;
              break;
            case "5kw hour complete system":
              image = lithiumBattery;
              break;
            case "5.12kW Lithium Battery 6,000cycle 10yrs warrant":
              image = battery512;
              break;
            case "Solar Battery":
              image = battery1;
              break;
            case "10kw lithium battery 7yrs warrant":
              image = battery2;
              break;
            case "Solar Flood Light":
              image = solarFloodLight;
              break;
            case "Solar Flood Light 200w 3yrs warrant":
              image = floodLight;
              break;
            case "3000W Flood Light":
              image = floodLight3000;
              break;
            case "Solar Pump 2 inch":
              image = solarPump2;
              break;
            case "Solar Pump 3 inch":
              image = solarPump3;
              break;
            case "Hybrid Solar water Pump":
              image = hybridPump;
              break;
            case "Solar Fridge":
              image = solarFridge;
              break;
            case "Solar Water Heater 200L low pressure":
              image = waterHeater1;
              break;
            case "Solar Water Heater System 300 flatplate high pressure":
              image = waterHeater2;
              break;
            default:
              image = null;
          }

          return { ...item, image };
        });

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const calculateTotal = () =>
    cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toLocaleString("en-KE", { style: "currency", currency: "KES" });

  const isProductInCart = (productId) =>
    cart.some((item) => item.id === productId);

  const getProductQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity || 0;

  // ✅ Modified addToCart function to navigate to checkout
  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/checkout"); // go to checkout immediately
  };

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
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product, index) => (
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
                        onClick={() => handleAddToCart(product)} // ✅ updated
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
            ))
          )}
        </div>
      </section>

      {/* CART SIDEBAR */}
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
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>KSh {item.price.toLocaleString()}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>×</button>
              </div>
            ))
          )}
        </div>

        <div className="cart-total">
          <h3>Total: {calculateTotal()}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
