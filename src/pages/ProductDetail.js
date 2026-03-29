import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";
import "./ProductDetail.css";
import { useCart } from "../context/CartContext";

// Import all product images from your assets directory
import inverter2 from "../assets/inverter 2.jpg";
import inverter3 from "../assets/inverter 3.jpg";
import inverter55 from "../assets/inverter 5.5kw.jpeg";

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

import pumpController from "../assets/pumping inverter.jpg";
import hybridPump from "../assets/hybrid solar pump.jpeg";

import solarFridge from "../assets/solar fridge.jpg";

import heater1 from "../assets/solar water heater 1.jpeg";
import heater2 from "../assets/solar water heater 2.jpeg";
// A mock products array, should ideally come from a central data source
const allProducts = [
  {
    id: 1,
    name: "Hybrid Solar Inverter",
    description: "High-performance hybrid inverter for solar systems.",
    fullDescription:
      "A reliable hybrid inverter designed to convert solar power efficiently while managing battery storage and grid supply.",
    image: inverter2,
    price: 45000,
  },

  {
    id: 2,
    name: "Solar Inverter",
    description: "Durable inverter suitable for home solar systems.",
    fullDescription:
      "A powerful inverter built for residential solar installations with stable output and efficient energy conversion.",
    image: inverter3,
    price: 52000,
  },

  {
    id: 3,
    name: "5.5kW Hybrid Inverter",
    description: "High-capacity inverter ideal for medium homes.",
    fullDescription:
      "This 5.5kW inverter supports hybrid solar systems and provides stable power for homes and businesses.",
    image: inverter55,
    price: 85000,
  },

  {
    id: 4,
    name: "440W Solar Panel",
    description: "Efficient solar panel for home installations.",
    fullDescription:
      "A 440W high efficiency solar panel designed to maximize power generation with excellent durability.",
    image: panel440,
    price: 13000,
  },

  {
    id: 5,
    name: "550W Solar Panel",
    description: "High power monocrystalline solar panel.",
    fullDescription:
      "This 550W solar panel provides high energy output and performs well even in low sunlight conditions.",
    image: panel550,
    price: 15000,
  },

  {
    id: 6,
    name: "580W Solar Panel",
    description: "Premium high efficiency solar panel.",
    fullDescription:
      "Large capacity solar panel designed for commercial and residential solar systems.",
    image: panel580,
    price: 16000,
  },

  {
    id: 7,
    name: "590W Solar Panel",
    description: "Advanced solar module for high power systems.",
    fullDescription:
      "This 590W solar panel is ideal for large solar installations requiring high energy generation.",
    image: panel590,
    price: 17000,
  },

  {
    id: 8,
    name: "Lithium Solar Battery",
    description: "Reliable lithium battery for solar storage.",
    fullDescription:
      "Long lifespan lithium battery designed for solar power storage with high efficiency and safety features.",
    image: lithiumBattery,
    price: 75000,
  },

  {
    id: 9,
    name: "5.12kW Lithium Battery",
    description: "High capacity lithium storage battery.",
    fullDescription:
      "Powerful battery ideal for solar home systems providing reliable backup and long life cycles.",
    image: battery512,
    price: 95000,
  },

  {
    id: 10,
    name: "Solar Battery Pack",
    description: "Durable battery for solar systems.",
    fullDescription:
      "High quality deep cycle battery suitable for solar storage applications.",
    image: battery1,
    price: 42000,
  },

  {
    id: 11,
    name: "Solar Battery",
    description: "Reliable battery storage solution.",
    fullDescription:
      "Efficient battery pack designed to store solar energy for later use.",
    image: battery2,
    price: 38000,
  },

  {
    id: 12,
    name: "Solar Flood Light",
    description: "Outdoor solar lighting solution.",
    fullDescription:
      "Weather resistant solar flood light designed for security and outdoor lighting.",
    image: solarFloodLight,
    price: 5000,
  },

  {
    id: 13,
    name: "Flood Light",
    description: "Powerful outdoor flood lighting.",
    fullDescription:
      "Bright solar flood light suitable for compounds, farms, and security lighting.",
    image: floodLight,
    price: 4500,
  },

  {
    id: 14,
    name: "3000W Flood Light",
    description: "Extra powerful flood light.",
    fullDescription: "Heavy duty flood light ideal for large outdoor areas.",
    image: floodLight3000,
    price: 6500,
  },

  {
    id: 15,
    name: "Solar Pump Controller",
    description: "Controller for solar water pumping systems.",
    fullDescription:
      "This controller ensures optimal performance for solar water pumps.",
    image: pumpController,
    price: 12000,
  },

  {
    id: 16,
    name: "Hybrid Solar Pump",
    description: "Solar powered pump system.",
    fullDescription:
      "Efficient solar pump system suitable for irrigation and water supply.",
    image: hybridPump,
    price: 60000,
  },

  {
    id: 17,
    name: "Solar Fridge",
    description: "Energy efficient solar powered refrigerator.",
    fullDescription: "Perfect for off-grid homes, farms, and remote locations.",
    image: solarFridge,
    price: 85000,
  },

  {
    id: 18,
    name: "Solar Water Heater",
    description: "Eco-friendly solar water heating system.",
    fullDescription:
      "Efficient solar water heater designed to provide hot water using solar energy.",
    image: heater1,
    price: 45000,
  },

  {
    id: 19,
    name: "Solar Water Heater System",
    description: "Advanced solar water heating solution.",
    fullDescription:
      "Durable solar water heater ideal for homes, hotels, and institutions.",
    image: heater2,
    price: 55000,
  },
];

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { addToCart } = useCart();

  // Find the product with the matching ID
  const product = allProducts.find((p) => p.id === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!product) {
    return (
      <div className="product-detail-page">
        <div className="container">
          <h1 className="not-found">Product not found.</h1>
          <Link to="/products" className="back-to-products-btn">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-page" data-aos="fade-in">
      <div className="container">
        <Link to="/products" className="back-to-products-btn">
          ← Back to Products
        </Link>
        <div className="product-detail-card">
          <div className="product-image-container" data-aos="fade-right">
            <img
              src={product.image}
              alt={product.name}
              className="product-detail-image"
            />
          </div>
          <div className="product-info-container" data-aos="fade-left">
            <h1>{product.name}</h1>
            <p className="product-price">
              KSh {product.price.toLocaleString()}
            </p>
            <p className="product-description">{product.fullDescription}</p>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/contact" className="get-quote-btn">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
